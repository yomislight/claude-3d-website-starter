// POST /api/notify  { email, lang, website }  → 存進 D1 的 subscribers
// website 是隱藏欄位（防機器人）：有值就假裝成功、不寫入。
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export async function onRequestPost({ request, env }) {
  let data;
  try {
    const type = request.headers.get('content-type') || '';
    data = type.includes('application/json') ? await request.json() : Object.fromEntries(await request.formData());
  } catch { return json({ ok: false, error: 'bad_request' }, 400); }

  if (data.website) return json({ ok: true });
  const email = String(data.email || '').trim().toLowerCase();
  if (email.length > 254 || !EMAIL.test(email)) return json({ ok: false, error: 'bad_email' }, 400);
  const lang = data.lang === 'en' ? 'en' : 'zh';
  const country = request.cf?.country || null;

  try {
    await env.DB.prepare('INSERT OR IGNORE INTO subscribers (email, lang, country) VALUES (?1, ?2, ?3)')
      .bind(email, lang, country).run();
  } catch (e) {
    console.error('notify insert failed', e);
    return json({ ok: false, error: 'server' }, 500);
  }
  // 不回傳「是否已登記過」，避免被拿來查別人的信箱
  return json({ ok: true });
}

export const onRequest = () => json({ ok: false, error: 'method_not_allowed' }, 405);
