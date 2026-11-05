# Shenghao Ao · Academic homepage

个人学术主页：<https://132ash.github.io/>

使用原生 HTML、CSS 和 JavaScript，无构建步骤或外部运行依赖，适合 GitHub Pages。默认英文，支持中文切换并记住语言选择；关闭 JavaScript 后，英文正文、论文下载和 BibTeX 文件仍可使用。

## 本地预览

在仓库目录运行：

```sh
python -m http.server 8000
```

浏览器访问 <http://localhost:8000>。

## 更新内容

- `index.html`：英文正文、教育经历、论文列表及引用窗口中的 BibTeX。
- `script.js`：`zh` 对象中的中文翻译；新增中英文字段时使用 `data-i18n`。
- `styles.css`：布局、字体、颜色与移动端适配。
- `assets/images/shenghao-ao.jpg`：主页照片。
- `assets/papers/`：论文 PDF 和 BibTeX 文件。
- `sitemap.xml` 与页脚：内容更新时同步修改日期。

论文信息、作者顺序、DOI 和性能数据来自提供的 camera-ready PDF。论文缩略图取自论文图 1。博士入学时间为本人确认的 2024 年 9 月。本科经历来自本科阶段简历。

目前标注“博士三年级”，进入下一学年后请更新 `index.html` 与 `script.js` 中的对应文字。新增论文时请同时维护英文页面与中文译文；更改引文时同步更新引用窗口及 `.bib` 文件。

## GitHub Pages

仓库 Settings → Pages → Build and deployment，选择 **Deploy from a branch**，分支选择 **main**、目录选择 **/ (root)**。`.nojekyll` 让 GitHub Pages 直接托管静态文件。向 `main` 推送后，GitHub Pages 会自动更新。
