# Claude 3D 网站入门包

不会写代码，也能用 Claude Code 做出一个 3D 产品网站。
这是 YouTube 视频「一万美金的网站，人人都可以做」的免费配套文件。

**先玩成品：** https://bt4-robot.pages.dev
可以拖着转、一键 X 光、46 个零件拆开，还能换灯光。这个网站从头到尾一行代码都没手写。

## 里面有什么

| 文件 | 用途 |
|---|---|
| [教程.md](教程.md) | 从零到上线的完整步骤，跟视频顺序一样 |
| [工具清单.md](工具清单.md) | 7 个工具：做什么、去哪里找、要不要钱、免费额度怎么拿 |
| [提示词.md](提示词.md) | 做这个网站时真正用过、有效的指令，按步骤排好，可以直接复制 |
| [参考法.md](参考法.md) | 怎么让 AI 做得好看：找参考、说清楚学哪一点、拆设计语言 |
| [检查清单.md](检查清单.md) | 一个看起来很贵的网站要做对的五件事，加上手机版和上线前检查 |

## 怎么用

1. 照 [工具清单.md](工具清单.md) 装好 Claude Code。
2. 打开 Claude 桌面版，点 Code，选一个空文件夹。
3. 打开 [提示词.md](提示词.md)，从第一条开始，把「Bot 商店」换成你自己要卖的东西。
4. 每做完一版，拿 [检查清单.md](检查清单.md) 对一遍。
5. 觉得不好看的时候，照 [参考法.md](参考法.md) 找一个参考给它。

## 用到的 7 个工具

除了 Claude 会员，其他都可以免费用。详细用法见 [工具清单.md](工具清单.md)。

| 做什么 | 工具 |
|---|---|
| 写网站、调设计、上线 | [Claude Code](https://claude.com/product/claude-code) |
| 画设计图 | [GPT Image](https://chatgpt.com/)（ChatGPT 生图） |
| 图片变 3D | [TRELLIS.2](https://huggingface.co/spaces/microsoft/TRELLIS.2)（MIT，Hugging Face 免费额度） |
| 建模、切零件 | [Blender](https://www.blender.org/)（Claude 通过 MCP 或脚本操作） |
| 字体 | [Google Fonts](https://fonts.google.com/) |
| 实时行情（选配） | 币安公开行情接口 |
| 收邮箱、上线 | Cloudflare D1 ＋ Pages |

网页 3D 用的是 [three.js](https://threejs.org/)（MIT），由 Claude 直接写进网站。
自己的域名（例如 .com）要另外买，不在免费范围内。

## 想要完整模板？

这个入门包是方法和提示词。完整的网站模板、图片变可拆解 3D 的脚本、表单和上线脚本、宣传视频录制工具，加入我们的 Telegram 社群就可以拿到：

👉 https://t.me/+fXqjJaVgaKZjYjVl

## 致谢与参考

这套做法参考了 Christian Peverelli 的视频〈[How to Build $10,000 Websites Using Claude Code](https://www.youtube.com/watch?v=qTWOkhytG0M)〉，包括「一万美金网站要做对的五件事」和「先写计划、分层做、统一设计、检查手机版、上线」的流程。我们换成了真实在卖的产品，工具也换成免费的替代品。

他在视频里用了两个设计 skill，我们这次没装，有兴趣可以自己试：
- [frontend-design](https://github.com/anthropics/skills)：Anthropic 官方，在 `anthropics/skills` 的 example-skills 里
- UI UX Pro Max：第三方 skill，安装前请先看过它的内容

---

视频：[YouTube · 优米洞察](https://www.youtube.com/channel/UCqJNSoB2GT6oMwh5opyQAww)
页面上的 Grok、xAI、Bot Store、Binance 都是各自所有者的名称，本项目与它们没有合作关系。
