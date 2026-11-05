"use strict";

const zh = {
  skip: "跳转到正文", navLabel: "主导航", navAbout: "关于", navResearch: "研究", navPublications: "论文", navEducation: "教育",
  heroLabel: "计算机系统 · 上海交通大学", heroRole: "计算机科学博士生 · 三年级", school: "计算机学院", university: "上海交通大学",
  intro: "我的研究聚焦云计算与分布式系统，主要关注有状态 Serverless 计算，以及面向 AI Agent 的高效执行环境。",
  advisorPrefix: "我的导师是", advisorName: "陈全教授", advisorSuffix: "。", viewWork: "查看研究成果",
  portraitAlt: "身着毕业礼服的敖晟昊，摄于上海交通大学", portraitCaption: "中国 · 上海",
  researchTitle: "研究方向", researchSubtitle: "让云计算系统更高效、更可靠。",
  serverlessTitle: "有状态 Serverless 计算", serverlessDescription: "通过工作流级事务、强一致性和运行时优化，提升有状态工作流的效率与可靠性。我的工作 FaaSRep 探索使用工作流协调（Workflow Reconciliation）实现严格可串行化。", serverlessKeywords: "Serverless 工作流 / 事务 / 分布式系统",
  agentTitle: "Agent 沙箱优化", ongoing: "进行中", agentDescription: "我目前正在开展 Agent 沙箱优化方向的研究，关注面向 AI Agent 的隔离执行环境及其运行时效率。", agentKeywords: "AI 基础设施 / 沙箱执行 / 运行时系统",
  publicationsTitle: "发表成果", publicationsSubtitle: "从系统设计到实现。", conference: "2026 年 ACM SIGOPS 年度技术会议",
  paperFigureLabel: "阅读 FaaSRep 论文", paperFigureAlt: "FaaSRep 论文图 1：工作流协调从乐观执行中学习依赖，指导有序重试",
  paperSummary: "FaaSRep 从乐观执行中学习依赖关系，指导有序重试，为有状态 Serverless 工作流提供严格可串行化，并减少冗余计算和调度开销。", paperResult: "在所评估的真实应用中，相比 Concord 的平均吞吐量提升。",
  abstractToggle: "查看摘要", abstractText: "Serverless 计算逐渐被用于由有状态工作流构成的复杂应用，但高效支持严格可串行化仍然具有挑战。FaaSRep 通过工作流协调（Workflow Reconciliation）缓解反复冲突与重试的问题：在验证阶段学习函数级依赖，用于指导有序重试；通过混合乐观／悲观协议处理应用级中止；使用函数级重执行和点对点快速路径，减少冗余工作和控制平面开销。在所评估的真实应用中，FaaSRep 相比 Concord 和 Beldi 的平均吞吐量分别提升 1.44–2.73 倍和 3.81–9.01 倍。",
  educationTitle: "教育经历", educationSubtitle: "在计算机科学领域的学习历程。", phdDate: "2024.09 — 至今", phdDegree: "计算机科学 · 博士在读", phdSchool: "计算机学院 · 博士三年级", educationAdvisor: "导师：", bachelorDate: "2020.09 — 2024.06", bachelorDegree: "计算机科学与技术 · 工学学士", bachelorSchool: "IEEE 试点班 · 电子信息与电气工程学院", earlierLabel: "本科科研经历", earlierDescription: "在 IPADS 参与可定制、可扩展的 Serverless 基准测试集研发，指导教师为杜东、夏虞斌。",
  contactEyebrow: "联系我", contactTitle: "聊聊计算机系统。", contactDescription: "欢迎通过邮件交流研究问题。", footerLocation: "上海交通大学", updated: "更新于 2026 年 11 月", backTop: "返回顶部 ↑",
  citationTitle: "引用这篇论文", closeCitation: "关闭引用窗口", downloadBib: "下载 .bib", copyCitation: "复制 BibTeX", copied: "已复制到剪贴板。", copyFailed: "请选中引用文本手动复制，或下载 .bib 文件。"
};

const translations = new Map();
const attributes = [["data-i18n", "textContent"], ["data-i18n-alt", "alt"], ["data-i18n-aria", "aria-label"]];
for (const [selector, attribute] of attributes) {
  document.querySelectorAll(`[${selector}]`).forEach(element => {
    translations.set(element, { key: element.getAttribute(selector), attribute, en: attribute === "textContent" ? element.textContent : element.getAttribute(attribute) });
  });
}

let language = "en";
const languageButton = document.getElementById("language-switch");
const languageLabel = document.getElementById("language-label");
function setLanguage(nextLanguage) {
  language = nextLanguage === "zh" ? "zh" : "en";
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  translations.forEach((entry, element) => {
    const value = language === "zh" ? (zh[entry.key] ?? entry.en) : entry.en;
    if (entry.attribute === "textContent") element.textContent = value;
    else element.setAttribute(entry.attribute, value);
  });
  languageLabel.textContent = language === "zh" ? "EN" : "中文";
  languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  document.getElementById("copy-status").textContent = "";
  try { localStorage.setItem("shenghao-language", language); } catch { /* Storage is optional. */ }
}
languageButton.hidden = false;
languageButton.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
try { setLanguage(localStorage.getItem("shenghao-language") || "en"); } catch { setLanguage("en"); }

const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = navLinks.map(link => document.querySelector(link.getAttribute("href")));
let scrollScheduled = false;
function updateNavigation() {
  let currentSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 155) currentSection = section;
  }
  navLinks.forEach(link => {
    const active = link.getAttribute("href") === `#${currentSection.id}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollScheduled = false;
}
window.addEventListener("scroll", () => {
  if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
window.addEventListener("resize", updateNavigation);
updateNavigation();

const dialog = document.getElementById("citation-dialog");
const citationLink = document.getElementById("bibtex-link");
citationLink.addEventListener("click", event => {
  if (typeof dialog.showModal !== "function") return;
  event.preventDefault();
  document.getElementById("copy-status").textContent = "";
  dialog.showModal();
});
document.getElementById("close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
document.getElementById("copy-citation").addEventListener("click", async () => {
  const citation = document.getElementById("citation-text").textContent;
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(citation);
    status.textContent = language === "zh" ? zh.copied : "Copied to clipboard.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("citation-text"));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = language === "zh" ? zh.copyFailed : "Select the citation to copy it, or download the .bib file.";
  }
});
