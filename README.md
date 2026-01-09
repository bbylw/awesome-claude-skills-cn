<h1 align="center">Awesome Claude Skills（精选 Claude 技能）</h1>

<p align="center">
<a href="https://platform.composio.dev/?utm_source=Github&utm_medium=Youtube&utm_campaign=2025-11&utm_content=AwesomeSkills">
  <img width="1280" height="640" alt="Composio banner" src="https://github.com/user-attachments/assets/adb3f57a-2706-4329-856f-059a32059d48">
</a>
</p>

<p align="center">
  <a href="https://awesome.re">
    <img src="https://awesome.re/badge.svg" alt="Awesome" />
  </a>
  <a href="https://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  </a>
  <a href="https://www.apache.org/licenses/LICENSE-2.0">
    <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square" alt="License: Apache-2.0" />
  </a>
</p>
<div>
<p align="center">
  <a href="https://twitter.com/composio">
    <img src="https://img.shields.io/badge/关注 X-000000?style=for-the-badge&logo=x&logoColor=white" alt="Follow on X" />
  </a>
  <a href="https://www.linkedin.com/company/composiohq/">
    <img src="https://img.shields.io/badge/关注 LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Follow on LinkedIn" />
  </a>
  <a href="https://discord.com/invite/composio">
    <img src="https://img.shields.io/badge/加入 Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Join our Discord" />
  </a>
  </p>
</div>

精选实用的 Claude 技能清单，旨在提升您在 Claude.ai、Claude Code 以及 Claude API 上的生产力。

> 如果您希望您的技能能够跨 500 多个应用执行操作，请使用 [Composio](https://platform.composio.dev/?utm_source=Github&utm_medium=Youtube&utm_campaign=2025-11&utm_content=AwesomeSkills) 进行连接。

---

## 目录

- [什么是 Claude 技能？](#什么是-claude-技能)
- [技能清单](#技能清单)
  - [文档处理](#文档处理)
  - [开发与代码工具](#开发与代码工具)
  - [数据与分析](#数据与分析)
  - [商业与营销](#商业与营销)
  - [沟通与写作](#沟通与写作)
  - [创意与媒体](#创意与媒体)
  - [生产力与组织](#生产力与组织)
  - [协作与项目管理](#协作与项目管理)
  - [安全与系统](#安全与系统)
- [快速开始](#快速开始)
- [如何创建技能](#如何创建技能)
- [如何贡献](#如何贡献)
- [相关资源](#相关资源)
- [许可证](#许可证)

---

## 什么是 Claude 技能？

Claude 技能（Claude Skills）是可定制的工作流，它们教会 Claude 如何根据您的独特需求执行特定的任务。技能使 Claude 能够以可复用、标准化的方式在所有 Claude 平台上锁定并执行任务。

---

## 技能清单

### 文档处理

- [docx](https://github.com/anthropics/skills/tree/main/skills/docx) - 创建、编辑、分析 Word 文档，支持修订、批注和复杂格式。
- [pdf](https://github.com/anthropics/skills/tree/main/skills/pdf) - 提取文本、表格、元数据，并支持合并与标记 PDF。
- [pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) - 读取、生成并调整幻灯片布局及模板。
- [xlsx](https://github.com/anthropics/skills/tree/main/skills/xlsx) - 电子表格操作：公式、图表、数据转换。
- [Markdown 转 EPUB 转换器](https://github.com/smerchek/claude-epub-skill) - 将 Markdown 文档和聊天摘要转换为专业的 EPUB 电子书文件。*作者：[@smerchek](https://github.com/smerchek)*

### 开发与代码工具

- [artifacts-builder](https://github.com/anthropics/skills/tree/main/web-artifacts-builder) - 用于在 claude.ai 中使用现代前端技术（React, Tailwind CSS, shadcn/ui）创建精美、多组件 HTML artifacts 的工具套件。
- [aws-skills](https://github.com/zxkane/aws-skills) - AWS 开发工具，包含 CDK 最佳实践、成本优化方案以及 Serverless/事件驱动架构模式。
- [更新日志生成器 (Changelog Generator)](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/changelog-generator/) - 通过分析 Git 历史记录，自动将技术性的提交信息转化为面向用户的友好产品发布说明。
- [Claude Code 终端标题](https://github.com/bluzername/claude-code-terminal-title) - 为每个 Claude-Code 终端窗口赋予动态标题，描述当前工作内容，避免窗口混淆。
- [D3.js 数据可视化](https://github.com/chrisvoncsefalvay/claude-d3js-skill) - 教会 Claude 产生 D3 图表和交互式数据可视化作品。*作者：[@chrisvoncsefalvay](https://github.com/chrisvoncsefalvay)*
- [FFUF Web 模糊测试](https://github.com/jthack/ffuf_claude_skill) - 整合 ffuf 模糊测试工具，使 Claude 能够运行漏洞扫描任务并分析结果。*作者：[@jthack](https://github.com/jthack)*
- [完成开发分支 (finishing-a-development-branch)](https://github.com/obra/superpowers/tree/main/skills/finishing-a-development-branch) - 指导开发工作的结项，提供清晰的工作流选项处理。
- [iOS 模拟器](https://github.com/conorluddy/ios-simulator-skill) - 使 Claude 能够通过 iOS 模拟器交互，进行应用测试与调试。*作者：[@conorluddy](https://github.com/conorluddy)*
- [MCP 构建器](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/mcp-builder/) - 指导创建高质量的 MCP (Model Context Protocol) 服务端，用于集成外部 API。
- [Move 代码质量技能](https://github.com/1NickPappas/move-code-quality-skill) - 根据官方 Move Book 检查清单对 Move 语言包进行质量分析。
- [Playwright 浏览器自动化](https://github.com/lackeyjb/playwright-skill) - 模型调用的 Playwright 自动化，用于 Web 应用的测试与验证。*作者：[@lackeyjb](https://github.com/lackeyjb)*
- [提示工程 (prompt-engineering)](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/customaize-agent/skills/prompt-engineering) - 传授知名的提示工程技巧，包含 Anthropic 最佳实践。
- [pypict-claude-skill](https://github.com/omkamal/pypict-claude-skill) - 使用 PICT 设计全面的测试用例，生成经过优化的配对覆盖测试套件。
- [技能创建助手 (Skill Creator)](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/skill-creator/) - 引导创建有效的 Claude 技能，通过专业知识和工作流扩展能力。
- [Skill Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) - 几分钟内自动将任何文档网站转换为 Claude AI 技能。*作者：[@yusufkaraaslan](https://github.com/yusufkaraaslan)*
- [软件架构](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/ddd/skills/software-architecture) - 实现包含 Clean Architecture、SOLID 原则在内的软件设计模式。
- [子代理驱动开发 (SADD)](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sadd/skills/subagent-driven-development) - 派发独立子代理处理任务，在迭代间进行代码审查 checkpoint。
- [测试驱动开发 (TDD)](https://github.com/obra/superpowers/tree/main/skills/test-driven-development) - 在编写实现代码前，先用于实现功能或修复 Bug 的技能。
- [使用 Git Worktrees](https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/) - 创建孤立的 Git worktrees，带有智能目录选择与安全验证。
- [Webapp 测试](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/webapp-testing/) - 使用 Playwright 测试本地 Web 应用，验证前端功能并捕捉截图。

### 数据与分析

- [CSV 数据汇总器](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) - 自动分析 CSV 文件并生成见解与可视化，无需用户提示词。*作者：[@coffeefuelbump](https://github.com/coffeefuelbump)*
- [postgres](https://github.com/sanjay3290/ai-skills/tree/main/skills/postgres) - 对 PostgreSQL 数据库执行安全的只读 SQL 查询，支持多连接管理。*作者：[@sanjay3290](https://github.com/sanjay3290)*
- [根因追踪 (root-cause-tracing)](https://github.com/obra/superpowers/tree/main/skills/root-cause-tracing) - 当错误发生在深层执行环节时，用于回溯寻找原始触发点。

### 商业与营销

- [品牌指南 (Brand Guidelines)](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/brand-guidelines/) - 将 Anthropic 官方品牌色彩和排版应用到 artifacts 中，确保统一的视觉形象。
- [竞品广告提取器](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/competitive-ads-extractor/) - 从广告库中提取并分析竞品广告，了解产生共鸣的营销策略。
- [域名脑暴器](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/domain-name-brainstormer/) - 产生创意域名并检查 .com, .io, .dev, .ai 等后缀的可用性。
- [内部沟通协助 (Internal Comms)](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/internal-comms/) - 帮助编写内部通知、简报、FAQs 和项目状态报告。
- [潜在客户研究助手](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/lead-research-assistant/) - 通过分析产品与搜索目标公司，识别并评估高质量的潜在客户。

### 沟通与写作

- [网页文章提取 (article-extractor)](https://github.com/michalparkola/tapestry-skills-for-claude-code/tree/main/article-extractor) - 提取网页文章的全文本及元数据。
- [头脑风暴 (brainstorming)](https://github.com/obra/superpowers/tree/main/skills/brainstorming) - 通过结构化提问将粗略的想法转化为完整的设计方案。
- [内容研究写作助手](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/content-research-writer/) - 通过调研、添加引用、改进开头等方式协助撰写高质量内容。
- [家族史研究](https://github.com/emaynard/claude-family-history-research-skill) - 在规划家族史和谱系研究项目时提供协助。
- [会议洞察分析器](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/meeting-insights-analyzer/) - 分析会议记录以揭示行为模式，如发言比例、语气偏好和领导风格。
- [NotebookLM 集成](https://github.com/PleasePrompto/notebooklm-skill) - 让 Claude Code 直接与 NotebookLM 对话，基于上传的文档获取精准答案。*作者：[@PleasePrompto](https://github.com/PleasePrompto)*

### 创意与媒体

- [Canvas 艺术设计](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/canvas-design/) - 使用设计哲学在 PNG 和 PDF 文档中创作精美的视觉艺术中心、海报。
- [imagen](https://github.com/sanjay3290/ai-skills/tree/main/skills/imagen) - 使用 Google Gemini 的图像生成 API 产生图标、插画与视觉资产。*作者：[@sanjay3290](https://github.com/sanjay3290)*
- [图像增强器 (Image Enhancer)](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/image-enhancer/) - 提升截图质量，增强分辨率、锐度和清晰度。
- [Slack GIF 创作助手](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/slack-gif-creator/) - 创作专门为 Slack 优化的动画 GIF，带有大小校验功能。
- [主题工厂 (Theme Factory)](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/theme-factory/) - 为 artifacts 应用专业的主题，包含幻灯片、文档和 HTML 落地页。
- [视频下载器](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/video-downloader/) - 从 YouTube 等平台下载视频用于离线查看或存档。
- [YouTube 字幕提取](https://github.com/michalparkola/tapestry-skills-for-claude-code/tree/main/youtube-transcript) - 获取 YouTube 视频字幕并准备摘要。

### 生产力与组织

- [文件收纳器 (File Organizer)](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/file-organizer/) - 通过理解语境智能组织文件，寻找重复项并建议更好的目录结构。
- [发票整理助手](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/invoice-organizer/) - 读取文件并提取信息，为税务筹备自动整理并命名发票与收据。
- [Kaizen 精益专家](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/kaizen/skills/kaizen) - 基于日本“改善”哲学和精益生产方法论，应用持续改进的分析方法。
- [n8n 技能](https://github.com/haunchen/n8n-skills) - 使 AI 助手能够直接理解并操作 n8n 工作流。
- [抽奖中奖者选择器](https://github.com/ComposioHQ/awesome-claude-skills/tree/main/raffle-winner-picker/) - 从清单或表格中随机选择中奖者，使用加密安全的随机性。
- [精益迭代 (ship-learn-next)](https://github.com/michalparkola/tapestry-skills-for-claude-code/tree/main/ship-learn-next) - 根据反馈循环迭代构建或学习内容的技能。
- [Tapestry 知识网络](https://github.com/michalparkola/tapestry-skills-for-claude-code/tree/main/tapestry) - 将相关文档互联并总结为知识网络。

### 协作与项目管理

- [Git 推行自动化 (git-pushing)](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/engineering-workflow-plugin/skills/git-pushing) - 自动化 Git 操作和仓库库交互。
- [评审实施 (review-implementing)](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/engineering-workflow-plugin/skills/review-implementing) - 评估代码实施方案是否符合规格说明。
- [测试修复 (test-fixing)](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/engineering-workflow-plugin/skills/test-fixing) - 检测失败的测试并提出补丁修复方案。

### 安全与系统

- [电脑取证 (computer-forensics)](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/computer-forensics-skills/skills/computer-forensics) - 数字取证分析与调查技巧。
- [文件安全删除 (file-deletion)](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/computer-forensics-skills/skills/file-deletion) - 安全的文件删除与数据粉碎方法。
- [元数据提取](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/computer-forensics-skills/skills/metadata-extraction) - 为取证目的提取并分析文件元数据。
- [Sigma 规则威胁猎寻](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) - 使用 Sigma 检测规则搜寻威胁并分析安全事件。

---

## 快速开始

### 在 Claude.ai 中使用技能

1. 在聊天界面中点击技能图标 (🧩)。
2. 从市场添加技能或上传自定义技能。
3. Claude 会根据您的任务自动激活相关技能。

### 在 Claude Code 中使用技能

1. 将技能文件夹放入 `~/.config/claude-code/skills/`：
   ```bash
   mkdir -p ~/.config/claude-code/skills/
   cp -r 技能名称 ~/.config/claude-code/skills/
   ```

2. 验证技能元数据：
   ```bash
   head ~/.config/claude-code/skills/技能名称/SKILL.md
   ```

3. 启动 Claude Code：
   ```bash
   claude
   ```

4. 技能将自动加载并在相关时激活。

### 通过 API 使用技能

使用 Claude Skills API 程控加载并管理技能：

```python
import anthropic

client = anthropic.Anthropic(api_key="your-api-key")

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    skills=["这里填入技能ID"],
    messages=[{"role": "user", "content": "您的提示词"}]
)
```

详情请参阅 [Skills API 文档](https://docs.claude.com/en/api/skills-guide)。

---

## 如何创建技能

### 技能结构

每个技能是一个包含 `SKILL.md` 文件（带有 YAML 前置数据）的文件夹：

```
技能名称/
├── SKILL.md          # 必选：技能指令和元数据
├── scripts/          # 可选：辅助脚本
├── templates/        # 可选：文档模板
└── resources/        # 可选：参考文件
```

### 基础技能模板

```markdown
---
name: 我的技能名称
description: 简明扼要地描述此技能的作用及使用时机。
---

# 我的技能名称

详细描述技能的目的和功能。

## 何时使用此技能

- 场景 1
- 场景 2
- 场景 3

## 指令

[给 Claude 的详细指令，说明如何执行此技能]

## 示例

[真实的示例，展示技能的实际运作情况]
```

### 技能最佳实践

- 专注于具体的、可重复的任务。
- 包含清晰的示例和边缘情况处理。
- 撰写针对 Claude 的指令，而非面向终端用户。
- 在 Claude.ai, Claude Code 和 API 上进行测试。
- 记录先决条件和依赖项。
- 包含错误处理指南。

---

## 如何贡献

我们欢迎各位的贡献！请阅读我们的 [贡献指南](https://github.com/ComposioHQ/awesome-claude-skills/blob/main/CONTRIBUTING.md) 了解详情：

- [如何提交新技能](https://github.com/ComposioHQ/awesome-claude-skills/blob/main/CONTRIBUTING.md#submitting-new-skills)
- [技能质量标准](https://github.com/ComposioHQ/awesome-claude-skills/blob/main/CONTRIBUTING.md#quality-standards)
- [Pull Request 流程](https://github.com/ComposioHQ/awesome-claude-skills/blob/main/CONTRIBUTING.md#pull-request-process)
- [行为准则](https://github.com/ComposioHQ/awesome-claude-skills/blob/main/CONTRIBUTING.md#code-of-conduct)

### 快速贡献流程

1. 确保您的技能基于真实的用例。
2. 检查现有技能中是否有重复项。
3. 遵循技能结构模板。
4. 在各平台上测试您的技能。
5. 提交带有清晰文档的 Pull Request。

---

## 相关资源

### 官方文档

- [Claude Skills 概览](https://www.anthropic.com/news/skills) - 官方公告与特性
- [技能用户指南](https://support.claude.com/en/articles/12512180-using-skills-in-claude) - 如何使用技能
- [创建自定义技能](https://support.claude.com/en/articles/12512198-creating-custom-skills) - 技能开发指南
- [Skills API 文档](https://docs.claude.com/en/api/skills-guide) - API 集成指南
- [Agent Skills 博客文章](https://anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) - 工程深度解析

### 社区资源

- [Anthropic Skills 仓库](https://github.com/anthropics/skills) - 官方示例技能
- [Claude 社区](https://community.anthropic.com) - 与其他用户讨论技能
- [技能市场](https://claude.ai/marketplace) - 发现并分享技能

### 灵感与案例

- [Lenny's Newsletter](https://www.lennysnewsletter.com/p/everyone-should-be-using-claude-code) - 使用 Claude Code 的 50 种方式
- [Notion Skills](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0) - Notion 集成技能

---

## 加入社区

- 关于 Composio 集成有疑问？[预约我们的简短通话](https://calendly.com/thomas-composio/composio-enterprise-setup)
- [关注 X (Twitter)](https://x.com/composio)
- [加入我们的 Discord](https://discord.com/invite/composio)

---

## 许可证

本项目基于 Apache License 2.0 许可证。

各独立技能可能拥有不同的许可证 —— 请检查各技能文件夹中的许可信息。

---

**注**：Claude 技能可运行于 Claude.ai, Claude Code 以及 Claude API。一旦创建，技能可在所有平台间无缝移植。

- [AgentsKB](https://agentskb.com) - 经过研究验证的 AI 增强平台。
