-- 上架通知名單（Cloudflare D1）
-- 本機：npx wrangler d1 execute <你的数据库名> --local --file=schema.sql
-- 線上：npx wrangler d1 execute <你的数据库名> --remote --file=schema.sql
CREATE TABLE IF NOT EXISTS subscribers (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  email      TEXT    NOT NULL UNIQUE,
  lang       TEXT    NOT NULL DEFAULT 'zh',
  country    TEXT,
  created_at TEXT    NOT NULL DEFAULT (datetime('now'))
);
