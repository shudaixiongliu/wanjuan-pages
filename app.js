const app = document.getElementById("app");
const portal = document.getElementById("portal");

const projectIconNames = {
  logoFull: "logonewtext",
  logoMark: "logoonyimg",
  logoText: "logonewtext",
  frontApp: "zhinengti2",
  treeFolder: "wenjianjia1",
  treeFile: "wendang",
  recallTest: "recall",
  apiCall: "api",
  uploadDoc: "shangchuan",
  batchCopy: "copy",
  batchConfig: "configuration",
  batchDelete: "delete",
  addSquare: "add",
  rowMore: "more-k2a8je9g",
  filter: "filter",
  filterSearch: "search",
  filterChevron: "arrowdown",
  filterCalendar: "history",
  calendarPrev: "fanhui",
  calendarNext: "right",
  check: "yes",
  uploadBox: "shangchuan",
  trash: "delete",
  wordFile: "word-j7a61f4b",
  pdfFile: "pdf",
  pptFile: "ppt",
  excelFile: "xlsxxls",
  mdFile: "md",
  htmlFile: "htmlhtm",
  txtFile: "txt",
  segmentAutoRobot: "automatic",
  segmentCustomControls: "customize",
  segmentComponentBlocks: "segmentation",
  info: "help",
  collapseList: "caidan",
  home: "shouye",
  robot: "zhinengti",
  book: "zhishiku",
  tool: "gongju",
  cube: "moxing",
  evaluate: "pingce",
  system: "xitong",
};

const icons = {
  logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M7 37V11a6 6 0 0 1 6-6h22v26H13c-3.3 0-6 2.684-6 6Z"/><path fill="currentColor" stroke-linecap="round" d="M35 31H13a6 6 0 0 0 0 12h28V7M14 37h20"/></g></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M44 44V20L24 4L4 20v24h12V26h16v18z"/><path fill="currentColor" stroke-linecap="round" d="M24 44V34"/></g></svg>',
  robot: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 35a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v7H5zm37-17h-8l-6-6l6-6h8"/><circle fill="currentColor" cx="8" cy="12" r="4"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 12h16m-18 4l8 17"/></g></svg>',
  book: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M5 7h11a8 8 0 0 1 8 8v27a6 6 0 0 0-6-6H5zm38 0H32a8 8 0 0 0-8 8v27a6 6 0 0 1 6-6h13z"/></svg>',
  tool: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M32 16c0-6.075-3.582-12-8-12s-8 5.925-8 12m-7 0h30l1 12H27v-3h-6v3H8zM8 28L6 42h36l-2-14"/><path fill="currentColor" d="M21 25h6v6h-6z"/></g></svg>',
  cube: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.5 9L7 14v20l8.5 5l8.5 5l8.5-5l8.5-5V14l-8.5-5L24 4zM41 14L24 24M7 14l17 10m0 20V24m8-5v20m9-15L24 34m0 0L7 24m9 15V19M32 9L16 19m16 0L16 9"/></svg>',
  evaluate: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M6 6v36h36"/><path fill="currentColor" d="m14 34l8-16l10 9L42 6"/></g></svg>',
  system: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M18.284 43.171a20 20 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20 20 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a20 20 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a20 20 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A20 20 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a20 20 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z"/><path fill="currentColor" d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/></g></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 11h32M8 24h32M8 37h32m-26.343-7.343L8 24l5.657-5.657"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path fill="currentColor" stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></svg>',
  chevron: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14 14l20 20m0-20L14 34"/></svg>',
  app: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M41 14L24 4L7 14v20l17 10l17-10z"/><path fill="currentColor" stroke-linecap="round" d="M16 18.998L23.993 24l8.002-5.002M24 24v9"/></g></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><circle fill="currentColor" cx="24" cy="12" r="8"/><path fill="currentColor" d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44"/></g></svg>',
  fullscreen: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24.06 10l-.036 28M10 24h28"/></svg>',
  more: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="12" cy="24" r="3" fill="currentColor"/><circle cx="24" cy="24" r="3" fill="currentColor"/><circle cx="36" cy="24" r="3" fill="currentColor"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M5 19h38v21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM5 9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v10H5z"/><path fill="currentColor" stroke-linecap="round" d="M16 4v8m16-8v8m-4 22h6m-20 0h6m8-8h6m-20 0h6"/></g></svg>',
  folder: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M4 9v32l5-20h30.5v-6a2 2 0 0 0-2-2H24l-5-6H6a2 2 0 0 0-2 2"/><path fill="currentColor" d="m40 41l4-20H8.813L4 41z"/></g></svg>',
  file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 38v6h28v-6m0-18v-6L30 4H10v16"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28 4v10h10"/><path fill="currentColor" stroke-linecap="round" d="M16 12h4"/><rect fill="currentColor" width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"/><path fill="currentColor" stroke-linecap="round" d="M10 25v8"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 25h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2"/><ellipse fill="currentColor" cx="24" cy="29" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="4"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38 25h-2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h2"/></g></svg>',
  swap: '<path d="M7 8h10"/><path d="m13 5 4 3-4 3"/><path d="M17 16H7"/><path d="m11 13-4 3 4 3"/>',
  star: '<path d="m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.7 6.8 19l1-5.8L3.6 9.1l5.8-.8z"/>',
};

const uploadProgressTimers = new Map();
const MAX_UPLOAD_FILES = 50;

const SYSTEM_TREE = [
  { label: "集团总公司", children: ["集团领导", "数字智能部"] },
  { label: "数字智能部", children: ["基础设施部", "系统建设部", "数据平台部", "数智战略部"] },
  { label: "科技创新部", children: ["综合规划部", "研发管理部", "生产运营部", "综合监督部"] },
  { label: "试用部门", children: ["历史试用部门", "研发部门", "售前/销售部门", "客户试用部门"] },
];

const menuItems = [
  { label: "首页", path: "/analytics", icon: "home" },
  {
    label: "数字员工",
    icon: "user",
    children: [{ label: "数字员工管理", path: "/dashboard/digitalEmployeeList" }],
  },
  {
    label: "智能体",
    icon: "robot",
    children: [
      { label: "智能体管理", path: "/dashboard/robotList" },
      { label: "数据中心", path: "/dashboard/data-center" },
    ],
  },
  {
    label: "知识库",
    icon: "book",
    children: [
      { label: "文档管理", path: "/manage/management" },
      { label: "FAQ管理", path: "/manage/faq" },
      { label: "图谱管理", path: "/manage/graphList" },
    ],
  },
  {
    label: "工具",
    icon: "tool",
    children: [
      { label: "工作流", path: "/extension/workflow_list" },
      { label: "技能", path: "/extension/skills" },
      { label: "MCP", path: "/extension/mcp" },
      { label: "API", path: "/extension/APIplugin" },
      { label: "处理组件", path: "/extension/modeltool" },
    ],
  },
  {
    label: "模型",
    icon: "cube",
    children: [{ label: "模型管理", path: "/modelService/gorithmmodel" }],
  },
  {
    label: "评测",
    icon: "evaluate",
    children: [
      { label: "评测任务", path: "/evaluating/task" },
      { label: "评测集", path: "/evaluating/collect" },
      { label: "评估器", path: "/evaluating/evaluation" },
    ],
  },
  {
    label: "系统管理",
    icon: "system",
    children: [
      { label: "用户管理", path: "/system/user" },
      { label: "角色管理", path: "/system/role" },
      { label: "菜单管理", path: "/system/menu" },
      { label: "部门管理", path: "/system/dept" },
      { label: "字典管理", path: "/system/dict" },
      { label: "系统模型配置", path: "/system/model-config" },
      { label: "参数设置", path: "/system/parameter" },
      { label: "数据监控", path: "/system/monitor" },
    ],
  },
];

function defaultOpenGroups(path) {
  for (const item of menuItems) {
    if (item.children && item.children.some((child) => child.path === path)) {
      return [item.label];
    }
  }
  return [];
}

const state = {
  path: location.hash.slice(1) || "/analytics",
  openGroups: new Set(defaultOpenGroups(location.hash.slice(1) || "/analytics")),
  tabs: ["/analytics"],
  drawer: null,
  filterMenuKey: "",
  filterControlKey: "",
  filterValues: {},
  handlers: {},
  handlerSeed: 0,
  resetMainScroll: false,
  pageViews: {
    "/dashboard/robotList": "智能体中心",
    "/dashboard/digitalEmployeeList": "数字员工中心",
    "/extension/workflow_list": "工具中心",
    "/extension/skills": "技能中心",
    "/dashboard/data-center": "对话记录",
  },
  docManagement: {
    activeNode: "固态电池知识库",
    expandedNodes: new Set(["能源行业知识库", "新能源知识库", "电池行业知识库"]),
    selectedRows: new Set(),
    rowMenu: "",
    configView: null,
    uploadView: null,
    sliceView: null,
  },
  employeeManagement: {
    keyword: "",
    status: "",
    view: "grid",
  },
  createDigitalEmployee: null,
  employeeEditor: {
    mode: "edit",
    index: 0,
    tab: "config",
  },
};

const DIGITAL_EMPLOYEES = [
  ["合", "法律助手合同审核", "合同审核法律助手，受理各部门采购、劳务等合同送审，核查资质、价款、履约、违约等关键条款，排查法务、财税及风控隐患。", "集团总公司", "运行中", "2026-06-03 00:00", "#766bf2"],
  ["内", "内容运营员工", "可以获取各大网站热点话题、热搜，规划网站匹配的运营内容。", "集团总公司", "运行中", "2026-05-25 19:19", "#23bf80"],
  ["招", "招商政策制定辅助员", "辅助制定招商政策，提供专业建议与参考方案，助力提升政策科学性。", "集团总公司", "运行中", "2026-05-22 19:01", "#3f7df6"],
  ["标", "招标助手", "为您自动检测招标文件，排查潜在风险与合规问题，助力提升标书质量。", "翟开放 +4", "运行中", "2026-05-20 15:29", "#f18019"],
  ["产", "产品经理_test", "协助梳理产品需求、制定方案并推进项目落地，为您高效完成产品规划与测试验证。", "集团总公司", "运行中", "2026-05-19 16:58", "#23bf80"],
  ["新", "新能源助手-测试", "为您解答新能源测试问题，辅助测试流程与数据分析。", "集团总公司", "运行中", "2026-05-19 16:48", "#ffa442"],
  ["合", "合同审核员工test", "专业审核合同条款与风险，助您高效把关合规性。", "集团总公司", "运行中", "2026-05-19 14:44", "#ffa442"],
  ["方", "方案助理", "帮助解决方案专家进行方案编写前的信息收集汇总，以及客户交流的方案编写。", "集团总公司", "运行中", "2026-05-15 13:43", "#23bf80"],
  ["管", "管网清管 & 动火作业方案员工（测试中）", "接收上传的管道动火 / 清管设计文件，自动解析预填方案固定字段；参照集团编制导则补充安全风险。", "集团总公司", "运行中", "2026-05-14 11:18", "#3f7df6"],
  ["企", "企业公文辅助员工01", "辅助撰写与审核企业公文，提升公文处理效率与规范性。", "集团总公司", "运行中", "2026-05-13 18:04", "#ffa442"],
  ["南", "流域防汛分析助手", "智谱天河流域防汛形势分析技能。基于降雨预报、水位、入库流量等数据，生成流域防汛形势分析报告。", "集团总公司", "运行中", "2026-05-13 17:43", "#23bf80"],
  ["部", "部门业务周报助手", "自动汇总日常工作内容，按公司标准模板生成业务周报，解读行业政策，整理工作数据。", "集团总公司", "运行中", "2026-05-13 17:07", "#23bf80"],
  ["企", "企业公文辅助员工", "为公司全员提供公文拟写、格式润色、制度咨询、公文审核要点指导，生成标准办公公文模板。", "集团总公司", "运行中", "2026-05-13 16:09", "#766bf2"],
  ["市", "市场调研", "开展市场研究，涵盖规模估算、细分、竞品图谱、价格核查及需求验证，将模糊构想转化为决策依据。", "暂无", "草稿", "2026-05-13 13:44", "#3f64ea"],
  ["面", "面试助手", "我是您的AI面试官，为您提供专业面试模拟与评估，助您提升求职表现。", "集团总公司", "运行中", "2026-05-08 23:13", "#6a8ef7"],
  ["市", "市场监督管理周报助手", "自动汇总市场监督管理工作动态，高效生成规范周报，助您轻松掌握监管情况。", "集团总公司", "运行中", "2026-05-08 22:14", "#3f64ea"],
  ["合", "合同审核助手（正式）", "合同审核数字员工，通过AI自动完成合同上传解析、关键要素提取、风险条款扫描、合规性核查及修改意见生成。", "研发部门 +9", "运行中", "2026-04-29 17:15", "#766bf2"],
  ["t", "test11", "tset11r31", "集团总公司", "已归档", "2026-05-27 12:04", "#ffa442"],
];

function createUploadView() {
  return {
    step: 1,
    mode: "split",
    category: "全部",
    segment: "auto",
    component: "法律合同审查",
    formatAlgorithms: createFormatAlgorithmState(),
    showFileList: true,
    activeSlice: 0,
    activeUploadFileId: "",
    files: [],
    checks: {
      cleanSpaces: true,
      removeLinks: false,
      table: false,
      image: false,
      keyword: false,
      summary: false,
    },
  };
}

function createDocProcessView(overrides = {}) {
  const base = createUploadView();
  return {
    ...base,
    ...overrides,
    checks: {
      ...base.checks,
      ...(overrides.checks || {}),
    },
  };
}

const DOC_MANAGEMENT_TREE = [
  { label: "金融知识库", type: "leaf" },
  {
    label: "能源行业知识库",
    children: [
      {
        label: "新能源知识库",
        children: [
          { label: "氢能源行业知识库", type: "leaf" },
          {
            label: "电池行业知识库",
            children: [
              { label: "固态电池知识库", type: "leaf" },
              { label: "锂电池知识库", type: "leaf" },
              { label: "铅酸电池知识库", type: "leaf" },
            ],
          },
        ],
      },
      { label: "传统能源知识库", type: "leaf" },
    ],
  },
  { label: "天气知识库", type: "leaf" },
];

const DOC_MANAGEMENT_ROWS = [
  {
    id: "doc-1",
    index: "1",
    name: "固态电池安全标准汇编.pdf",
    format: "PDF",
    slices: "-",
    status: tag("排队中", "warning"),
    statusText: "排队中",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: false,
    ops: "queued",
    queuePosition: 2,
    queueTotal: 7,
  },
  {
    id: "doc-2",
    index: "2",
    name: "这是文档名称这是文档名称",
    format: "PDF",
    slices: "1",
    status: tag("文件解析中 | 20%", "primary"),
    statusText: "文件解析中",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: false,
    ops: "parsing",
    progress: 20,
  },
  {
    id: "doc-3",
    index: "3",
    name: "这是文档名称这是文档名称这是",
    format: "DOCX",
    slices: "1",
    status: tag("文件增强中 | 20%", "primary"),
    statusText: "文件增强中",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: false,
    ops: "enhancing",
    progress: 20,
  },
  {
    id: "doc-4",
    index: "4",
    name: "这是文档名称这是文档名称这是这是这文...",
    format: "XLSX",
    slices: "1",
    status: tag("处理失败", "danger"),
    statusText: "处理失败",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: true,
    ops: "failed",
    switchOn: false,
  },
  {
    id: "doc-5",
    index: "5",
    name: "固态电池行业研究报告.pdf",
    format: "PDF",
    slices: "36",
    status: tag("处理完成", "success"),
    statusText: "处理完成",
    labels: chips(["研报", "PDF"]),
    createdAt: "2025-09-09 22:00:00",
    canBatch: true,
    ops: "done",
    switchOn: true,
  },
  {
    id: "doc-6",
    index: "6",
    name: "海外储能市场分析.pdf",
    format: "PDF",
    slices: "28",
    status: tag("处理完成", "success"),
    statusText: "处理完成",
    labels: chips(["储能", "市场"]),
    createdAt: "2025-09-09 22:00:00",
    canBatch: true,
    ops: "done",
    switchOn: true,
  },
  {
    id: "doc-7",
    index: "7",
    name: "动力电池材料综述.pdf",
    format: "PDF",
    slices: "0",
    status: tag("处理失败", "danger"),
    statusText: "处理失败",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: true,
    ops: "failed",
    switchOn: false,
  },
  {
    id: "doc-8",
    index: "8",
    name: "2026储能项目经营数据表.xlsx",
    format: "XLSX",
    slices: "18",
    status: tag("处理完成", "success"),
    statusText: "处理完成",
    labels: chips(["Excel", "经营数据"]),
    createdAt: "2026-05-26 15:20:00",
    canBatch: true,
    ops: "done",
    switchOn: true,
  },
  {
    id: "doc-9",
    index: "9",
    name: "储能产品路演材料.pptx",
    format: "PPTX",
    slices: "12",
    status: tag("处理完成", "success"),
    statusText: "处理完成",
    labels: chips(["PPT", "路演"]),
    createdAt: "2026-05-26 15:24:00",
    canBatch: true,
    ops: "done",
    switchOn: true,
  },
];

const SUPPORTED_DOC_FORMATS = [
  { format: "PDF", tone: "pdf" },
  { format: "DOCX", tone: "docx" },
  { format: "DOC", tone: "doc" },
  { format: "XLSX", tone: "xlsx" },
  { format: "XLS", tone: "xls" },
  { format: "CSV", tone: "xlsx" },
  { format: "MD", tone: "md" },
  { format: "PPTX", tone: "ppt" },
  { format: "PPT", tone: "ppt" },
  { format: "TXT", tone: "txt" },
  { format: "HTML", tone: "html" },
  { format: "HTM", tone: "html" },
];

const pages = {
  "/front-app": {
    kind: "frontApp",
    title: "前台应用-旧",
    breadcrumb: ["前台应用"],
  },
  "/front-employee": {
    kind: "frontEmployee",
    title: "前台员工",
    breadcrumb: ["前台员工"],
  },
  "/digital-employee-chat": {
    kind: "employeeChat",
    title: "数字员工对话",
    breadcrumb: ["数字员工", "数字员工对话"],
  },
  "/analytics": {
    kind: "home",
    title: "首页",
    breadcrumb: ["首页"],
    orbit: ["参数设置", "工作流", "模型管理", "评测", "图谱管理", "用户管理", "智能体管理", "知识库"],
  },
  "/dashboard/robotList": {
    kind: "table",
    title: "智能体管理",
    breadcrumb: ["智能体", "智能体管理"],
    pills: ["智能体中心", "我的智能体"],
    views: {
      "智能体中心": {
        filters: [field("请输入智能体名称"), selectField("请选择智能体类型"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset")],
        columns: [
          ["序号", "56px"],
          ["名称", "178px"],
          ["类型", "88px"],
          ["简介", "1fr"],
          ["创建人", "96px"],
          ["所属部门", "112px"],
          ["分享时间", "154px"],
          ["操作", "96px"],
        ],
        rows: [
          ["1", "长客思维导图", tag("自主规划", "primary"), "长客思维导图识别", "王一雄", "研发部门", "2026-04-23 10:19:26", actions(["查看", "复用"])],
          ["2", "翻译助手演示", tag("自主规划", "primary"), "支持中文、英语、日语、韩语、法语、德语、西班牙语、俄语、阿拉伯语等主流语言任意互译。", "刘颖", "研发部门", "2026-04-20 13:22:37", actions(["查看", "复用"])],
          ["3", "test", tag("自主规划", "primary"), "aaa", "刁乃儒", "研发部门", "2026-04-20 11:10:29", actions(["查看", "复用"])],
          ["4", "分享测试", tag("自主规划", "primary"), "分享测试", "孙嘉琦", "研发部门", "2026-04-16 20:34:45", actions(["查看", "复用"])],
          ["5", "通用rag测评-默认", tag("RAG", "warning"), "通用rag测评-默认", "王一雄", "研发部门", "2026-04-16 18:07:34", actions(["查看", "复用"])],
          ["6", "通用rag测评", tag("RAG", "warning"), "通用rag测评", "王一雄", "研发部门", "2026-04-16 15:35:31", actions(["查看", "复用"])],
          ["7", "新能源电动车智能体", tag("RAG", "warning"), "聚焦新能源电动车行业的智能问答助手，支持行业知识检索、政策趋势分析与场景化问答。", "信通院", "客户试用部门", "2026-04-14 15:10:05", actions(["查看", "复用"])],
          ["8", "提示词设计助手演示", tag("RAG", "warning"), "输入你想写的提示词主题，我会帮你生成优质的提示词", "刘颖", "研发部门", "2026-04-14 12:06:13", actions(["查看", "复用"])],
          ["9", "基础法律问答", tag("RAG", "warning"), "围绕合同、劳动、人身损害等基础法律问题提供标准化应答。", "杨文逸", "研发管理部", "2026-04-14 10:42:51", actions(["查看", "复用"])],
          ["10", "商品市场趋势预测", tag("自主规划", "primary"), "面向消费品市场的趋势预测与情报分析助手。", "杨文逸", "研发管理部", "2026-04-14 10:31:22", actions(["查看", "复用"])],
        ],
        pagination: pager("43", "10条/页", [1, 2, 3, 4, 5]),
      },
      "我的智能体": {
        filters: [field("请输入智能体名称"), selectField("请选择智能体类型"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset")],
        actionButtons: [button("新增智能体", "open", "primary", { hoverPreview: "robotCreate" })],
        columns: [
          ["序号", "56px"],
          ["名称", "176px"],
          ["类型", "88px"],
          ["简介", "1fr"],
          ["创建人", "96px"],
          ["所属部门", "112px"],
          ["创建时间", "154px"],
          ["状态", "164px"],
          ["操作", "120px"],
        ],
        rows: [
          ["1", "石油化工小助手", tag("RAG", "warning"), "石油化工知识问答", "杨文逸", "研发管理部", "2026-04-13 15:37:18", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["2", "商品市场趋势预测", tag("自主规划", "primary"), "聚焦各类商品市场行情分析，依托数据模型挖掘市场规律、研判价格走势与需求变化，精准预测行业发展趋势，为商品采购、销售、库存管理提供数据化决策参考，助力把握市场机遇、规避经营风险。", "杨文逸", "研发管理部", "2026-04-10 19:06:31", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["3", "合同信息抽取", tag("自主规划", "primary"), "精准提取并结构化输出，大幅提升合同审核、归档效率！", "杨文逸", "研发管理部", "2026-04-10 19:02:41", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["4", "网页链接文章转写", tag("自主规划", "primary"), "欢迎使用网页文章转写助手，我将为您高效解析网页并重写内容！", "杨文逸", "研发管理部", "2026-04-10 18:35:17", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["5", "汽车专家", tag("自主规划", "primary"), "专业汽车咨询助手，可解答车型对比、购车建议、配置解析、用车保养、故障判断、新能源与燃油车选择等问题，帮你理性选车、用车。", "杨文逸", "研发管理部", "2026-04-10 18:25:20", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["6", "金融市场策略分析", tag("自主规划", "primary"), "深耕股票、黄金等市场，依托专业模型解析行情走势与市场逻辑，输出针对性交易策略，涵盖仓位配置、买卖信号及风险把控，为多元资产投资提供理性分析与决策参考。", "杨文逸", "研发管理部", "2026-04-10 18:16:41", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["7", "12306票务查询", tag("自主规划", "primary"), "12306 票务查询智能体，可快速查询列车时刻、余票、票价，提供购票、候补、改签、退票等实用指引，解答铁路出行票务相关问题，帮你便捷规划铁路行程。", "杨文逸", "研发管理部", "2026-04-10 16:30:35", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["8", "情感大师", tag("自主规划", "primary"), "我是情感大师", "杨文逸", "研发管理部", "2026-03-09 20:32:21", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["9", "论文帮手", tag("自主规划", "primary"), "提供方向与关键词，我能为你推荐相关论文、提供论文的框架模板，并根据推荐的论文撰写综述。", "杨文逸", "研发管理部", "2026-03-06 12:42:19", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["10", "设备", tag("自主规划", "primary"), "设备识别", "杨文逸", "研发管理部", "2026-03-04 14:55:38", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
        ],
        pagination: pager("19", "10条/页", [1, 2]),
      },
    },
  },
  "/dashboard/digitalEmployeeList": {
    kind: "employeeManagement",
    title: "数字员工管理",
    breadcrumb: ["数字员工", "数字员工管理"],
    pills: ["数字员工中心", "我的数字员工"],
    views: {
      数字员工中心: {
        filters: [field("请输入数字员工名称"), selectField("请选择数字员工类型"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset")],
        columns: [
          ["序号", "56px"],
          ["名称", "178px"],
          ["类型", "88px"],
          ["简介", "1fr"],
          ["创建人", "96px"],
          ["所属部门", "112px"],
          ["分享时间", "154px"],
          ["操作", "96px"],
        ],
        rows: [
          ["1", "合同审查数字员工", tag("RAG", "warning"), "面向合同审查场景，支持条款提取、风险提示与合规建议。", "王一雄", "研发部门", "2026-04-23 10:19:26", actions(["查看", "复用"])],
          ["2", "数据分析数字员工", tag("自主规划", "primary"), "支持多表关联分析、指标解释与可视化摘要。", "刘颖", "研发部门", "2026-04-20 13:22:37", actions(["查看", "复用"])],
          ["3", "客服质检数字员工", tag("自主规划", "primary"), "自动抽检对话并给出质检评分与改进建议。", "刁乃儒", "研发部门", "2026-04-20 11:10:29", actions(["查看", "复用"])],
        ],
        pagination: pager("3", "10条/页", [1]),
      },
      我的数字员工: {
        filters: [field("请输入数字员工名称"), selectField("请选择数字员工类型"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset")],
        actionButtons: [button("新增数字员工", "open", "primary")],
        columns: [
          ["序号", "56px"],
          ["名称", "176px"],
          ["类型", "88px"],
          ["简介", "1fr"],
          ["创建人", "96px"],
          ["所属部门", "112px"],
          ["创建时间", "154px"],
          ["状态", "164px"],
          ["操作", "120px"],
        ],
        rows: [
          ["1", "会议纪要数字员工", tag("自主规划", "primary"), "自动整理会议要点、待办与结论。", "杨文逸", "研发管理部", "2026-04-13 15:37:18", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["2", "报表解读数字员工", tag("RAG", "warning"), "对经营报表进行口径解释与异常点分析。", "杨文逸", "研发管理部", "2026-04-10 19:06:31", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
        ],
        pagination: pager("2", "10条/页", [1]),
      },
    },
  },
  "/dashboard/digitalEmployeeEdit": {
    kind: "employeeEditor",
    title: "数字员工编辑",
    breadcrumb: ["数字员工", "数字员工管理", "数字员工编辑"],
  },
  "/dashboard/data-center": {
    kind: "table",
    title: "数据中心",
    breadcrumb: ["智能体", "数据中心"],
    pills: ["对话记录", "用户反馈", "点赞点踩"],
    views: {
      对话记录: {
        filters: [field("请输入问题名称"), selectField("请选择智能体"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("删 除", "disabled"), button("导 出", "open")],
        columns: [
          [checkbox(), "40px"],
          ["序号", "56px"],
          ["问题", "80px"],
          ["答案", "1fr"],
          ["图片", "64px"],
          ["创建时间", "156px"],
          ["所属智能体", "116px"],
          ["来源", "72px"],
          ["请求Token量", "100px"],
          ["返回Token量", "100px"],
          ["总计Token", "92px"],
          ["操作", "72px"],
        ],
        rows: [
          [checkbox(), "1", "D", "您的问题“D”表述不清，请您补充具体需求。目前提供的资料主要涉及上游板块主要公司的涨跌幅数据👉3👈。", "-", "2026-04-13 18:20:37", "石油化工小助手", "rag", "2680", "2197", "4877", actions(["删除"])],
          [checkbox(), "2", "B", "⚠ 发生未知错误: Error code: 429 - {'error': {'code': '1302', 'message': '您的账户已达到速率限制，请您控制请求频率'}}", "-", "2026-04-13 18:20:35", "石油化工小助手", "chatglm", "0", "0", "0", actions(["删除"])],
          [checkbox(), "3", "D", "您的问题“D”表述不清晰，无法理解您的具体需求。请您补充说明您想查询的具体内容（例如：某家公司的涨跌幅数据、特定板块信息等），以便我为您提供准确的解答。", "-", "2026-04-13 18:20:16", "石油化工小助手", "rag", "2680", "1911", "4591", actions(["删除"])],
          [checkbox(), "4", "D", "您的问题“D”表述不够清晰，无法确定您的具体需求。请您补充说明您想了解的内容，例如是查询某只特定股票的涨跌幅、某个公司的信息，还是其他相关问题。", "-", "2026-04-13 18:19:15", "石油化工小助手", "rag", "2680", "1043", "3723", actions(["删除"])],
          [checkbox(), "5", "D", "问题不明确，请提供进一步的说明。", "-", "2026-04-13 18:19:09", "石油化工小助手", "chatglm", "105", "601", "706", actions(["删除"])],
          [checkbox(), "6", "C", "您的问题“C”不够明确，我无法理解您的具体需求。请您补充完整的问题，或者详细描述您想了解的内容（例如：具体的规章制度条款、流程或针对上述引用数据的疑问），我将为您提供专业的解答。", "-", "2026-04-13 18:18:25", "石油化工小助手", "rag", "2200", "1686", "3886", actions(["删除"])],
          [checkbox(), "7", "C", "您的问题“C”表述不清晰，无法确定您具体想查询的内容。提供的参考信息主要包含上游板块主要公司的涨跌幅数据👉1👈，未发现与“C”直接相关的明确信息。请您补充具体问题，以便我为您提供准确的解答。", "-", "2026-04-13 18:18:11", "石油化工小助手", "rag", "2200", "1220", "3420", actions(["删除"])],
          [checkbox(), "8", "D", "⚠ 发生未知错误: Error code: 429 - {'error': {'code': '1302', 'message': '您的账户已达到速率限制，请您控制请求频率'}}", "-", "2026-04-13 18:18:04", "石油化工小助手", "rag", "0", "0", "0", actions(["删除"])],
          [checkbox(), "9", "A", "您好，您的问题“A”表述不清晰，请您补充具体的问题内容，以便我为您提供准确的解答。", "-", "2026-04-13 18:17:43", "石油化工小助手", "rag", "3665", "1465", "5130", actions(["删除"])],
          [checkbox(), "10", "C", "⚠ 发生未知错误: Error code: 429 - {'error': {'code': '1302', 'message': '您的账户已达到速率限制，请您控制请求频率'}}", "-", "2026-04-13 18:17:35", "石油化工小助手", "rag", "0", "0", "0", actions(["删除"])],
        ],
        pagination: pager("271", "10条/页", [1, 2, 3, 4, 5]),
      },
      用户反馈: {
        filters: [field("请输入反馈内容"), selectField("请选择智能体"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("删 除", "disabled"), button("导 出", "open")],
        columns: [[checkbox(), "40px"], ["序号", "56px"], ["问题", "120px"], ["反馈内容", "1fr"], ["创建时间", "156px"], ["所属智能体", "116px"], ["反馈类型", "88px"], ["操作", "72px"]],
        rows: [],
        pagination: pager("0", "10条/页", [1]),
      },
      点赞点踩: {
        filters: [field("请输入问题名称"), selectField("请选择智能体"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("删 除", "disabled"), button("导 出", "open")],
        columns: [[checkbox(), "40px"], ["序号", "56px"], ["问题", "120px"], ["答案", "1fr"], ["评价", "80px"], ["创建时间", "156px"], ["所属智能体", "116px"], ["操作", "72px"]],
        rows: [],
        pagination: pager("0", "10条/页", [1]),
      },
    },
  },
  "/manage/management": {
    kind: "splitTable",
    title: "文档管理",
    breadcrumb: ["知识库", "文档管理"],
    sideSearch: "搜索知识库",
    sideItems: ["新能源汽车", "中国菜系图谱", "基础法律问答", "新能源知识", "石油传统行业知识库", "法律文库", "法律课堂", "石油化工行业知识库"],
    sideActive: "中国菜系图谱",
    headerText: "当前分组：中国菜系图谱",
    headerButtons: [button("召回测试", "open"), button("接口调用", "open", "primary")],
    filters: [
      field("请输入文档名称"),
      selectField("请选择文档格式"),
      selectField("请选择状态"),
      dateField("创建开始日期", "创建结束日期"),
      button("重 置", "reset"),
      button("删 除", "disabled"),
      button("上传文档", "open", "primary"),
    ],
    columns: [
      [checkbox(), "42px"],
      ["编号", "60px"],
      ["文档名称", "240px"],
      ["切片数", "80px"],
      ["创建时间", "150px"],
      ["状态", "110px"],
      ["标签", "100px"],
      ["操作", "96px"],
    ],
    rows: [
      [checkbox(), "1", "中国菜系种类.docx", "1", "2026-04-13 15:20:32", tag("处理完成", "success"), tag("添加标签", "primary"), actions(["详情", "删除"])],
      [checkbox(), "2", "shipu(1).docx", "1", "2026-04-13 15:20:32", tag("处理完成", "success"), tag("添加标签", "primary"), actions(["详情", "删除"])],
    ],
    pagination: pager("2", "10条/页", [1]),
  },
  "/manage/faq": {
    kind: "splitTable",
    title: "FAQ管理",
    breadcrumb: ["知识库", "FAQ管理"],
    sideSearch: "请输入关键词搜索",
    sideItems: ["中国房价市场", "新能源行业", "石油传统能源行业", "新能源FAQ库"],
    sideActive: "中国房价市场",
    filters: [
      field("请输入问题名称"),
      selectField("请选择审核状态"),
      dateField("创建开始日期", "创建结束日期"),
      button("重 置", "reset"),
      button("删 除", "disabled"),
      button("批量上传", "open"),
      button("下载模板", "open"),
      button("新增问答", "open", "primary"),
    ],
    columns: [
      [checkbox(), "42px"],
      ["序号", "60px"],
      ["问题名称", "220px"],
      ["答案", "1fr"],
      ["来源", "70px"],
      ["创建时间", "150px"],
      ["操作", "90px"],
    ],
    rows: [
      [checkbox(), "1", "什么是土地出让金？", "土地出让金是政府将土地使用权出让给土地使用者，按规定向受让人收取的价款。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "2", "什么是商品房预售？", "商品房预售是房地产开发企业将正在建设中的房屋预先出售给购买人，并由购买人支付定金或房价款的行为。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "3", "什么是二手房指导价？", "二手房指导价是相关部门发布的存量住房交易参考价格，用于引导市场预期。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "4", "什么是房屋均价？", "房屋均价通常指某一时期内某区域所有成交房屋的平均单价。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "5", "什么是房价收入比？", "房价收入比是住房总价与居民家庭年收入的比值。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "6", "中国房价目前多少", "10000", "手动", "2026-04-13 15:57:16", actions(["编辑", "删除"])],
    ],
    pagination: pager("11", "20条/页", [1]),
  },
  "/manage/graphList": {
    kind: "table",
    title: "图谱管理",
    breadcrumb: ["知识库", "图谱管理"],
    filters: [field("请输入图谱名称"), button("重 置", "reset"), button("知识融合", "open"), button("创建图谱", "open", "primary")],
    columns: [
      ["编号", "60px"],
      ["图谱名称", "180px"],
      ["概念数量", "90px"],
      ["实体数量", "90px"],
      ["关系数量", "90px"],
      ["创建时间", "150px"],
      ["最后编辑", "150px"],
      ["状态", "90px"],
      ["操作", "150px"],
    ],
    rows: [
      ["1", "房价分析", "0", "0", "0", "2026-04-13 17:41:53", "2026-04-13 17:48:43", tag("构建失败", "danger"), actions(["分配权限", "查看", "更多"], [false, true, false])],
      ["2", "中国房价分析", "0", "0", "0", "2026-04-13 17:32:16", "2026-04-13 17:34:21", tag("构建失败", "danger"), actions(["分配权限", "查看", "更多"], [false, true, false])],
      ["3", "中国菜系图谱", "4", "16", "14", "2026-04-13 15:21:04", "2026-04-13 15:23:28", tag("构建成功", "success"), actions(["分配权限", "查看", "更多"])],
      ["4", "serve", "2", "2", "2", "2026-04-10 11:31:22", "2026-04-10 11:33:10", tag("构建成功", "success"), actions(["分配权限", "查看", "更多"])],
      ["5", "三国2", "0", "0", "0", "2026-04-08 16:23:31", "2026-04-08 16:27:31", tag("构建失败", "danger"), actions(["分配权限", "查看", "更多"], [false, true, false])],
      ["6", "三国1", "25", "116", "67", "2026-04-08 15:50:14", "2026-04-08 16:11:04", tag("构建成功", "success"), actions(["分配权限", "查看", "更多"])],
      ["7", "三国关系图", "17", "73", "67", "2026-04-08 11:43:21", "2026-04-08 13:02:18", tag("构建成功", "success"), actions(["分配权限", "查看", "更多"])],
    ],
    pagination: pager("7", "10条/页", [1]),
  },
  "/extension/workflow_list": {
    kind: "cards",
    title: "工作流",
    breadcrumb: ["工具", "工作流"],
    pills: ["工具中心", "我的工作流"],
    filters: [field("请输入名称"), field("请输入创建者"), button("重 置", "reset"), button("查 询", "open", "primary")],
    columns: 4,
    cards: [
      card("图片识别智能体", "基础设施部", "可以支持图片上传，针对图片内容进行识别获取", "超级管理员 创建于2026-04-18 12:58:54"),
      card("演示-副本", "研发部门", "演示", "欢迎进入万卷 创建于2026-04-15 16:27:04"),
      card("qyw-workflow-2", "研发部门", "qyw-workflow-2", "乔艺伟 创建于2026-04-10 10:36:13"),
      card("后端开发测试-0401-2013", "研发部门", "后端开发测试版本发布:2013", "张仕宗 创建于2026-04-01 20:10:22"),
    ],
    pagination: pager("4", "10条/页", [1]),
  },
  "/extension/skills": {
    kind: "cards",
    title: "技能",
    breadcrumb: ["工具", "技能"],
    pills: ["技能中心", "我的技能"],
    filters: [field("请输入名称搜索"), button("重 置", "reset")],
    columns: 5,
    cards: [
      skillCard("text-to-docs", "4 个智能体关联", "Pandoc Markdown 转文档生成技能，支持多格式导出。", "欢迎进入万卷 创建于 2026-03-17 19:42", ["文档生成", "Pandoc"]),
      skillCard("power-outage-managem...", "1 个智能体关联", "面向预安排停电管理场景，支持停电事件识别、分析、通知。", "张博 创建于 2026-04-23 17:08", ["停电监控", "预安排停电", "+1"]),
      skillCard("smart-data-query", "0 个智能体关联", "面向业务查询与分析的智能问数技能。", "zhangsongqing 创建于 2026-04-23 13:42", ["数据查询", "智能问数", "+1"]),
      skillCard("power-outage-analysi...", "0 个智能体关联", "停电分析辅助技能。", "张博 创建于 2026-04-23 11:25", ["停电分析"]),
      skillCard("power-outage-custome...", "0 个智能体关联", "面向客户通知与响应的停电处理技能。", "张博 创建于 2026-04-23 10:56", ["客户通知"]),
      skillCard("power-outage-delay-c...", "0 个智能体关联", "延迟复电场景的辅助判断技能。", "张博 创建于 2026-04-23 10:42", ["延迟复电"]),
      skillCard("power-outage-restore...", "0 个智能体关联", "停电恢复流程辅助。", "张博 创建于 2026-04-23 10:31", ["恢复"]),
      skillCard("power-outage-site-re...", "0 个智能体关联", "现场上报信息整合技能。", "张博 创建于 2026-04-23 10:12", ["现场上报"]),
      skillCard("power-outage-event-c...", "0 个智能体关联", "停电事件归类与处置建议。", "张博 创建于 2026-04-23 09:56", ["事件归类"]),
      skillCard("power-outage-execute", "0 个智能体关联", "停电执行单与流程推进辅助。", "张博 创建于 2026-04-23 09:42", ["执行单"]),
    ],
    pagination: pager("32", "10条/页", [1, 2, 3, 4]),
  },
  "/extension/mcp": {
    kind: "cards",
    title: "MCP",
    breadcrumb: ["工具", "MCP"],
    filters: [field("请输入名称搜索"), button("重 置", "reset"), button("添加MCP服务", "open", "primary")],
    columns: 5,
    cards: [
      toolCard("12306票务查询", "服务器提供一个简单的API接口，允许用户搜索12306的车票", "8 TOOLS INCLUDED", ["图表工具", "解析工具"]),
      toolCard("web-reader-mcp", "网页内容抓取，支持抓取任意网页的完整内容，包括文本、链接等。", "1 TOOLS INCLUDED", ["解析工具"]),
      toolCard("图谱查询", "图谱节点与关系查询服务。", "6 TOOLS INCLUDED", ["知识图谱"]),
      toolCard("贵金属价格查询", "贵金属价格查询能力。", "6 TOOLS INCLUDED", ["行情"]),
      toolCard("证券之星", "证券与行情查询能力。", "16 TOOLS INCLUDED", ["证券"]),
      toolCard("股票查询", "股票行情与相关指标查询。", "34 TOOLS INCLUDED", ["证券"]),
      toolCard("文件内容抽取", "抽取 PDF、Word、图片中的结构化内容。", "1 TOOLS INCLUDED", ["文档解析"]),
      toolCard("网页抓取", "常规网页抓取服务。", "2 TOOLS INCLUDED", ["解析工具"]),
      toolCard("AntV 可视化图表", "生成图表与可视化配置。", "25 TOOLS INCLUDED", ["图表工具"]),
      toolCard("节假日查询", "节假日与调休安排查询。", "2 TOOLS INCLUDED", ["生活服务"]),
    ],
    pagination: pager("10", "10条/页", [1]),
  },
  "/extension/APIplugin": {
    kind: "table",
    title: "API",
    breadcrumb: ["工具", "API"],
    filters: [field("请输入插件名称"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("添加API服务", "open", "primary")],
    columns: [
      ["序号", "60px"],
      ["插件名称", "180px"],
      ["插件说明", "1fr"],
      ["创建人", "110px"],
      ["创建时间", "150px"],
      ["操作", "90px"],
    ],
    rows: [
      ["1", "天气", "1", "欢迎进入万卷", "2026-04-15 15:38:51", actions(["编辑", "删除"])],
      ["2", "图谱2", "图片测试2", "zhanglinji", "2026-04-02 14:40:14", actions(["编辑", "删除"])],
      ["3", "page-agent", "", "songyuan", "2026-04-02 11:47:39", actions(["编辑", "删除"])],
      ["4", "图数据", "", "超级管理员", "2026-03-26 15:53:11", actions(["编辑", "删除"])],
      ["5", "万卷接口", "", "刁乃儒", "2026-03-23 20:10:53", actions(["编辑", "删除"])],
      ["6", "Tavily 智能搜索服务", "基于Bearer Token认证，支持自然语言查询，返回结构化搜索结果", "姚家升", "2026-03-20 15:15:01", actions(["编辑", "删除"])],
      ["7", "图谱-查询节点", "精确查找标签为 Device、属性 name 值为“球阀”的节点", "超级管理员", "2026-03-18 14:11:29", actions(["编辑", "删除"])],
      ["8", "查询关系节点", "查询图数据库节点", "超级管理员", "2026-03-18 13:52:18", actions(["编辑", "删除"])],
      ["9", "图数据库结构", "数据库结构", "超级管理员", "2026-03-18 11:40:05", actions(["编辑", "删除"])],
      ["10", "根据城市查询天气", "通过城市名称或城市ID查询天气预报情况", "许沛卿", "2026-03-11 14:10:12", actions(["编辑", "删除"])],
    ],
    pagination: pager("16", "10条/页", [1, 2]),
  },
  "/extension/modeltool": {
    kind: "table",
    title: "处理组件",
    breadcrumb: ["工具", "处理组件"],
    filters: [field("请输入组件名称"), selectField("请选择组件类型"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("创建组件", "open", "primary")],
    columns: [
      ["序号", "60px"],
      ["组件名称", "180px"],
      ["组件类型", "120px"],
      ["创建人", "90px"],
      ["状态", "90px"],
      ["创建时间", "150px"],
      ["操作", "90px"],
    ],
    rows: [
      ["1", "1", "文档解析", "巩娜", tag("未就绪", "danger"), "2026-04-13 14:38:23", actions(["编辑", "删除"])],
      ["2", "hh", "文档解析", "刘颖", tag("就绪", "success"), "2026-04-13 14:29:53", actions(["编辑", "删除"])],
      ["3", "内容召回测试", "内容召回组件", "郭超", tag("就绪", "success"), "2026-04-07 22:24:30", actions(["编辑", "删除"])],
      ["4", "法律文书处理", "综合处理组件", "欢迎进入万卷", tag("未就绪", "danger"), "2026-03-20 14:59:56", actions(["编辑", "删除"])],
      ["5", "段落切片器", "内容分段", "欢迎进入万卷", tag("未就绪", "danger"), "2026-03-20 14:57:47", actions(["编辑", "删除"])],
      ["6", "多模态图像理解", "图片解析", "龙虾", tag("就绪", "success"), "2026-03-12 17:16:10", actions(["编辑", "删除"])],
      ["7", "excel解析", "文档解析", "许沛卿", tag("就绪", "success"), "2026-03-11 11:11:00", actions(["编辑", "删除"])],
      ["8", "md解析", "文档解析", "陈雷蒙", tag("就绪", "success"), "2026-03-10 18:22:10", actions(["编辑", "删除"])],
      ["9", "test_csv", "文档解析", "林忠玮", tag("就绪", "success"), "2026-03-10 17:04:44", actions(["编辑", "删除"])],
      ["10", "csv解析", "文档解析", "林忠玮", tag("就绪", "success"), "2026-03-10 15:58:03", actions(["编辑", "删除"])],
    ],
    pagination: pager("22", "10条/页", [1, 2, 3]),
  },
  "/modelService/gorithmmodel": {
    kind: "cards",
    title: "模型管理",
    breadcrumb: ["模型", "模型管理"],
    filters: [field("请输入名称搜索"), selectField("请选择模型类型"), button("重 置", "reset"), button("接入模型", "open", "primary")],
    columns: 5,
    cards: [
      modelCard("GLM-5v-Turbo", "glm-5v-turbo", "视觉理解模型", "2026-04-20 17:02:50"),
      modelCard("GLM-5.1", "glm-5.1", "深度推理模型", "2026-04-14 10:54:53", "更适合 coding、agent 任务与复杂推理。"),
      modelCard("AI原点社区专用模型", "glm-4-flashx-250414", "语言模型", "2026-04-03 11:59:57", "GLM-4-Flash-250414", "参数量 9B"),
      modelCard("GLM-5-Turbo", "glm-5-turbo", "深度推理模型", "2026-03-18 23:32:29", "OpenClaw 任务体验更均衡。"),
      modelCard("qwen_8b", "qwen", "文本向量模型", "2026-03-18 20:48:56", "", "系统默认"),
      modelCard("智谱Embedding-3", "embedding-3", "文本向量模型", "2026-03-26 08:50:05"),
      modelCard("GLM-4", "GLM-4", "语言模型", "2026-04-13 16:22:07"),
      modelCard("GLM-4.7", "glm-4.7", "深度推理模型", "2026-04-20 16:20:07", "agentic coding 表现更强。"),
      modelCard("GLM-4-Plus", "glm-4-plus", "语言模型", "2026-04-13 15:13:08"),
      modelCard("GLM-4.7-flashx", "glm-4.7-flashx", "深度推理模型", "2026-04-20 16:44:31", "普惠模型，速度流畅。"),
    ],
    pagination: pager("16", "10条/页", [1, 2]),
  },
  "/evaluating/task": {
    kind: "table",
    title: "评测任务",
    breadcrumb: ["评测", "评测任务"],
    filters: [field("请输入名称或描述"), selectField("请选择状态"), button("重 置", "reset"), button("新增评测任务", "open", "primary")],
    columns: [
      ["名称", "160px"],
      ["评测对象类型", "100px"],
      ["评测对象", "140px"],
      ["关联评测集", "150px"],
      ["状态", "90px"],
      ["得分", "180px"],
      ["描述", "160px"],
      ["创建人", "90px"],
      ["开始时间", "150px"],
      ["结束时间", "150px"],
      ["操作", "110px"],
    ],
    rows: [
      ["qq", "智能体", "qq", "个税测试", tag("待执行", "warning"), chips(["个税1: --", "计算器: --"]), "", "wangchao", "", "", actions(["执行", "编辑"])],
      ["测试", "智能体", "测试", "个税测试", tag("待执行", "warning"), chips(["个税2: --"]), "", "孙嘉琦", "", "", actions(["执行", "编辑"])],
      ["个税4", "智能体", "个税计算专家", "个税测试", tag("进行中", "primary"), chips(["个税2: --"]), "测试", "欢迎进入万卷", "2026-04-15 13:49:38", "", actions(["终止", "编辑"])],
      ["个税3", "智能体", "个税计算专家", "个税测试", tag("进行中", "primary"), chips(["个税2: --"]), "测试", "欢迎进入万卷", "2026-04-14 16:53:47", "", actions(["终止", "编辑"])],
      ["新能源电动车智能体测试", "智能体", "新能源电动车智能体", "优化分析报告", tag("成功", "success"), chips(["优化分析报告: 0"]), "验证", "信通院", "2026-04-14 15:12:13", "2026-04-14 15:13:52", actions(["执行", "编辑"], [true, false])],
      ["石油化工小助手评测", "智能体", "石油化工小助手", "问答测试-ceval-100条", tag("进行中", "primary"), chips(["优化分析报告: --"]), "", "杨文逸", "2026-04-13 17:21:00", "", actions(["终止", "编辑"])],
      ["132131231323", "系统内置官方智能体", "132131231323", "问答测试-管网测试集评测集", tag("成功", "success"), chips(["安全评估器: 0.8"]), "对方是否", "徐超", "2026-01-29 18:31:20", "2026-01-29 18:35:42", actions(["执行", "编辑"], [true, false])],
      ["报告生成智能体1", "智能体", "报告生成智能体1", "问答测试-ceval-100条", tag("成功", "success"), chips(["RAG测试-正确性评估: 1"]), "", "兰宇", "2026-01-28 21:05:11", "2026-01-28 21:15:06", actions(["执行", "编辑"], [true, false])],
    ],
    pagination: pager("18", "20条/页", [1]),
  },
  "/evaluating/collect": {
    kind: "table",
    title: "评测集",
    breadcrumb: ["评测", "评测集"],
    filters: [field("请输入名称或描述"), button("重 置", "reset"), button("新增评测集", "open", "primary")],
    columns: [
      ["名称", "160px"],
      ["列名", "160px"],
      ["描述", "1fr"],
      ["数据项数量", "90px"],
      ["更新人", "90px"],
      ["更新时间", "150px"],
      ["创建人", "90px"],
      ["创建时间", "150px"],
      ["操作", "110px"],
    ],
    rows: [
      ["测试", "sss", "", "3", "超级管理员", "2026-04-16 15:09:58", "超级管理员", "2026-04-16 15:09:58", actions(["编辑", "导出", "删除"])],
      ["个税测试", "question，answer", "用于个税计算评测", "10", "欢迎进入万卷", "2026-04-14 16:33:46", "欢迎进入万卷", "2026-04-14 16:33:46", actions(["编辑", "导出", "删除"])],
      ["优化分析报告", "wen，answer", "", "1", "黄艳", "2026-03-11 21:58:54", "黄艳", "2026-03-11 21:58:54", actions(["编辑", "导出", "删除"])],
      ["问答测试-管网测试集评测集", "question，answer", "管网测试集", "600", "闫永曦", "2026-01-29 18:13:20", "闫永曦", "2026-01-28 17:40:55", actions(["编辑", "导出", "删除"])],
      ["RAG测试-金融评测集", "question，answer", "", "487", "闫永曦", "2026-01-27 21:15:05", "闫永曦", "2026-01-27 21:15:05", actions(["编辑", "导出", "删除"])],
      ["RAG测试-法律评测", "question，answer", "", "415", "闫永曦", "2026-01-27 21:12:27", "闫永曦", "2026-01-27 21:12:27", actions(["编辑", "导出", "删除"])],
      ["问答测试-ceval-100条", "Task，reference_output", "", "99", "闫永曦", "2026-01-27 19:16:10", "闫永曦", "2026-01-27 19:16:10", actions(["编辑", "导出", "删除"])],
    ],
    pagination: pager("7", "10条/页", [1]),
  },
  "/evaluating/evaluation": {
    kind: "table",
    title: "评估器",
    breadcrumb: ["评测", "评估器"],
    filters: [field("请输入名称或描述"), selectField("请选择类型"), button("重 置", "reset"), button("新增LLM评估器", "open", "primary"), button("新增Code评估器", "open", "primary")],
    columns: [
      ["名称", "200px"],
      ["类型", "90px"],
      ["描述", "1fr"],
      ["更新人", "110px"],
      ["更新时间", "150px"],
      ["创建人", "110px"],
      ["创建时间", "150px"],
      ["操作", "90px"],
    ],
    rows: [
      ["个税2", "LLM", "测试", "欢迎进入万卷", "2026-04-15 13:47:26", "欢迎进入万卷", "2026-04-14 16:46:43", actions(["编辑", "删除"])],
      ["个税1", "LLM", "测试", "欢迎进入万卷", "2026-04-14 16:40:46", "欢迎进入万卷", "2026-04-14 16:40:46", actions(["编辑", "删除"])],
      ["计算器", "Code", "", "黄艳", "2026-03-11 21:54:46", "黄艳", "2026-03-11 21:54:46", actions(["编辑", "删除"])],
      ["优化分析报告", "LLM", "", "黄艳", "2026-03-11 21:50:28", "黄艳", "2026-03-11 21:50:28", actions(["编辑", "删除"])],
      ["RAG测试-正确性评估", "LLM", "", "闫永曦", "2026-01-27 21:18:37", "闫永曦", "2026-01-27 21:18:37", actions(["编辑", "删除"])],
      ["安全评估器", "LLM", "", "超级管理员", "2026-01-27 20:50:18", "", "2026-01-27 19:22:03", actions(["编辑", "删除"])],
      ["code评估器", "Code", "", "闫永曦", "2026-01-27 19:15:36", "闫永曦", "2026-01-27 19:15:36", actions(["编辑", "删除"])],
    ],
    pagination: pager("7", "10条/页", [1]),
  },
  "/system/user": {
    kind: "systemUsers",
    title: "用户管理",
    breadcrumb: ["系统管理", "用户管理"],
  },
  "/system/role": genericSystemPage("角色管理", ["序号", "角色名称", "权限字符", "数据范围", "状态", "创建时间", "操作"], [
    ["1", "超级管理员", "admin", "全部数据权限", switcher(), "2026-01-21 21:49:54", actions(["编辑", "权限设置", "删除"])],
    ["2", "普通角色", "common", "本部门数据权限", switcher(), "2026-01-22 10:08:06", actions(["编辑", "权限设置", "删除"])],
    ["3", "测试角色", "test", "仅本人数据权限", switcher(), "2026-01-22 10:38:22", actions(["编辑", "权限设置", "删除"])],
  ], [field("请输入角色名称"), field("请输入权限字符"), button("重 置", "reset"), button("新增角色", "open", "primary")], "178"),
  "/system/menu": genericSystemPage("菜单管理", ["菜单名称", "权限标识", "路由地址", "组件路径", "状态", "创建时间", "操作"], [
    ["首页", "analytics:view", "/analytics", "views/homepage/index.vue", switcher(), "2026-01-21 21:49:54", actions(["编辑", "新增", "删除"])],
    ["智能体管理", "robot:list", "/dashboard/robotList", "views/dashboard/robot-list.vue", switcher(), "2026-01-22 09:16:31", actions(["编辑", "新增", "删除"])],
    ["文档管理", "manage:document", "/manage/management", "views/manage/management.vue", switcher(), "2026-01-22 09:17:48", actions(["编辑", "新增", "删除"])],
  ], [field("请输入菜单名称"), button("重 置", "reset"), button("新增菜单", "open", "primary")], "56"),
  "/system/dept": genericSystemPage("部门管理", ["序号", "部门名称", "负责人", "联系电话", "状态", "创建时间", "操作"], [
    ["1", "基础设施部", "超级管理员", "15888888888", switcher(), "2026-01-21 21:49:54", actions(["编辑", "新增", "删除"])],
    ["2", "研发管理部", "杨文逸", "", switcher(), "2026-01-22 09:37:26", actions(["编辑", "新增", "删除"])],
    ["3", "客户试用部门", "信通院", "", switcher(), "2026-01-22 09:48:12", actions(["编辑", "新增", "删除"])],
  ], [field("请输入部门名称"), button("重 置", "reset"), button("新增部门", "open", "primary")], "24"),
  "/system/dict": genericSystemPage("字典管理", ["序号", "字典名称", "字典类型", "状态", "备注", "创建时间", "操作"], [
    ["1", "用户性别", "sys_user_sex", switcher(), "用户性别列表", "2026-01-21 21:49:54", actions(["编辑", "数据", "删除"])],
    ["2", "通知类型", "sys_notice_type", switcher(), "通知类型列表", "2026-01-21 21:50:41", actions(["编辑", "数据", "删除"])],
    ["3", "岗位状态", "sys_job_status", switcher(), "岗位状态列表", "2026-01-22 09:14:10", actions(["编辑", "数据", "删除"])],
  ], [field("请输入字典名称"), field("请输入字典类型"), button("重 置", "reset"), button("新增字典", "open", "primary")], "14"),
  "/system/model-config": genericSystemPage("系统模型配置", ["配置名称", "模型编码", "关联模块", "更新时间", "操作"], [
    ["默认对话模型", "glm-5-turbo", "对话", "2026-04-20 16:44:31", actions(["编辑"])],
    ["默认向量模型", "embedding-3", "知识库", "2026-04-03 11:59:57", actions(["编辑"])],
    ["默认视觉模型", "glm-5v-turbo", "图片理解", "2026-04-20 17:02:50", actions(["编辑"])],
  ], [button("保存配置", "open", "primary")], "3"),
  "/system/parameter": genericSystemPage("参数设置", ["参数名称", "参数键名", "参数键值", "系统内置", "备注", "创建时间", "操作"], [
    ["主框架页-默认皮肤样式名称", "sys.index.skinName", "skin-blue", "是", "蓝色 skin 样式", "2026-01-21 21:49:54", actions(["编辑"])],
    ["用户管理-账号初始密码", "sys.user.initPassword", "123456", "是", "初始化密码 123456", "2026-01-21 21:50:21", actions(["编辑"])],
    ["登录页-系统名称", "sys.login.systemName", "万卷", "是", "登录页系统名", "2026-01-22 09:03:16", actions(["编辑"])],
  ], [field("请输入参数名称"), field("请输入参数键名"), button("重 置", "reset"), button("新增参数", "open", "primary")], "12"),
  "/system/monitor": genericSystemPage("数据监控", ["任务名称", "执行器", "最近执行", "状态", "耗时", "操作"], [
    ["菜单数据同步", "system-sync", "2026-04-28 09:13:21", tag("成功", "success"), "0.42s", actions(["查看日志"])],
    ["模型配置刷新", "model-config-sync", "2026-04-28 09:20:08", tag("成功", "success"), "0.21s", actions(["查看日志"])],
    ["知识库索引状态巡检", "kb-health-check", "2026-04-28 09:31:44", tag("成功", "success"), "1.16s", actions(["查看日志"])],
  ], [button("刷新监控", "open", "primary")], "3"),
};

function normalizePath(path) {
  return pages[path] ? path : "/analytics";
}

function field(placeholder) {
  return { kind: "field", id: createFilterId("field", placeholder), placeholder, width: 190 };
}

function selectField(label) {
  return { kind: "select", id: createFilterId("select", label), label, width: 190, options: selectOptions(label) };
}

function dateField(start, end) {
  return { kind: "date", id: createFilterId("date", `${start}-${end}`), start, end, width: 260 };
}

function button(label, intent, style = "", extra = {}) {
  return { kind: "button", label, intent, style, ...extra };
}

function tag(text, tone) {
  return { type: "tag", text, tone };
}

function actions(labels, disabled = []) {
  return { type: "actions", items: labels.map((item) => typeof item === "string" ? { label: item } : item), disabled };
}

function chips(items) {
  return { type: "chips", items };
}

function checkbox(extra = {}) {
  return { type: "checkbox", ...extra };
}

function switcher() {
  return { type: "switch" };
}

function card(title, subtitle, desc, foot) {
  return { type: "card", title, subtitle, desc, foot };
}

function skillCard(title, subtitle, desc, foot, tags) {
  return { type: "skill", title, subtitle, desc, foot, tags };
}

function toolCard(title, desc, toolCount, tags) {
  return { type: "tool", title, desc, toolCount, tags };
}

function modelCard(title, code, tagName, date, desc = "", extra = "") {
  return { type: "model", title, code, tagName, date, desc, extra };
}

function pager(total, size, nums) {
  return { total, size, nums };
}

function genericSystemPage(title, columns, rows, filters, total) {
  const widths = ["70px", "160px", "160px", "150px", "90px", "150px", "120px"];
  return {
    kind: "table",
    title,
    breadcrumb: ["系统管理", title],
    filters,
    columns: columns.map((item, index) => [item, widths[index] || "140px"]),
    rows,
    pagination: pager(total, "10条/页", [1, 2, 3, 4, 5]),
  };
}

function currentPage() {
  return pages[state.path] || pages["/analytics"];
}

function createFilterId(prefix, text) {
  return `${prefix}-${String(text).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-+|-+$/g, "")}`;
}

function selectOptions(label) {
  if (label.includes("智能体类型")) return ["全部", "RAG", "自主规划", "多应用协同"];
  if (label.includes("文档格式")) return ["全部", "PDF", "Word", "Excel", "TXT", "Markdown"];
  if (label.includes("审核状态")) return ["全部", "待审核", "已通过", "已驳回"];
  if (label.includes("状态")) return ["全部", "排队中", "文件解析中", "文件增强中", "处理完成", "处理失败", "已发布", "未发布"];
  if (label.includes("模型类型")) return ["全部", "Embedding", "LLM", "Rerank", "Vision"];
  if (label.includes("类型")) return ["全部", "自主规划", "RAG", "工作流", "Code", "MCP"];
  if (label.includes("智能体")) return ["全部", "石油化工小助手", "商品市场趋势预测", "合同信息抽取", "网页链接文章转写"];
  return ["全部", "选项一", "选项二", "选项三"];
}

function currentScopeKey(path = state.path) {
  return `${path}:${state.pageViews[path] || ""}`;
}

function scopeFilters(scopeKey = currentScopeKey()) {
  if (!state.filterValues[scopeKey]) state.filterValues[scopeKey] = {};
  return state.filterValues[scopeKey];
}

function getFilterState(item, scopeKey = currentScopeKey()) {
  const scoped = scopeFilters(scopeKey);
  if (!(item.id in scoped)) {
    scoped[item.id] = item.kind === "date" ? { start: "", end: "" } : "";
  }
  return scoped[item.id];
}

function setFilterState(item, value, scopeKey = currentScopeKey()) {
  const scoped = scopeFilters(scopeKey);
  scoped[item.id] = value;
}

function clearScopeFilters(scopeKey = currentScopeKey()) {
  state.filterValues[scopeKey] = {};
}

function getDateRangeState(item, scopeKey = currentScopeKey()) {
  const value = getFilterState(item, scopeKey);
  if (!value || typeof value !== "object") {
    const next = { start: "", end: "", anchor: startOfMonthIso(todayIso()) };
    setFilterState(item, next, scopeKey);
    return next;
  }
  if (!value.anchor) {
    value.anchor = startOfMonthIso(value.start || todayIso());
  }
  return value;
}

function displayDateValue(item, scopeKey = currentScopeKey()) {
  const value = getDateRangeState(item, scopeKey);
  return {
    start: value.start || item.start,
    end: value.end || item.end,
    filled: Boolean(value.start || value.end),
  };
}

function todayIso() {
  return dateToIso(new Date());
}

function toDate(iso) {
  return new Date(`${iso}T00:00:00`);
}

function dateToIso(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfMonthIso(iso) {
  const date = toDate(iso);
  date.setDate(1);
  return dateToIso(date);
}

function addMonthsIso(iso, delta) {
  const date = toDate(iso);
  date.setDate(1);
  date.setMonth(date.getMonth() + delta);
  return dateToIso(date);
}

function addDaysIso(iso, delta) {
  const date = toDate(iso);
  date.setDate(date.getDate() + delta);
  return dateToIso(date);
}

function formatMonthTitle(iso) {
  const date = toDate(iso);
  return `${date.getFullYear()}年 ${date.getMonth() + 1}月`;
}

function buildMonthCells(anchorIso) {
  const monthStart = toDate(anchorIso);
  const monthIndex = monthStart.getMonth();
  const offset = (monthStart.getDay() + 6) % 7;
  const gridStartIso = addDaysIso(anchorIso, -offset);
  return Array.from({ length: 42 }, (_, index) => {
    const iso = addDaysIso(gridStartIso, index);
    return {
      iso,
      label: String(toDate(iso).getDate()),
      inMonth: toDate(iso).getMonth() === monthIndex,
      isToday: iso === todayIso(),
    };
  });
}

function isDateInRange(iso, start, end) {
  if (!start || !end) return false;
  return iso >= start && iso <= end;
}

function renderCalendarMonth(anchorIso, item, scopeKey) {
  const value = getDateRangeState(item, scopeKey);
  const cells = buildMonthCells(anchorIso);
  return `
    <section class="calendar-month">
      <div class="calendar-title">${formatMonthTitle(anchorIso)}</div>
      <div class="calendar-weekdays">${["一", "二", "三", "四", "五", "六", "日"].map((label) => `<span>${label}</span>`).join("")}</div>
      <div class="calendar-grid">
        ${cells.map((cell) => {
          const isStart = value.start === cell.iso;
          const isEnd = value.end === cell.iso;
          const inRange = isDateInRange(cell.iso, value.start, value.end);
          const classes = [
            "calendar-day",
            cell.inMonth ? "" : "muted",
            cell.isToday ? "today" : "",
            inRange ? "in-range" : "",
            isStart ? "range-start" : "",
            isEnd ? "range-end" : "",
          ].filter(Boolean).join(" ");
          return `
            <button class="${classes}" data-handler="${registerHandler({ type: "pickDateValue", itemId: item.id, scopeKey, value: cell.iso })}">
              <span>${cell.label}</span>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function routeMeta(path) {
  if (pages[path]?.breadcrumb?.length) {
    const breadcrumb = pages[path].breadcrumb;
    return { parent: breadcrumb[0] || "", label: breadcrumb[breadcrumb.length - 1] || pages[path].title };
  }
  for (const item of menuItems) {
    if (item.path === path) return { parent: "", label: item.label };
    if (item.children) {
      const child = item.children.find((entry) => entry.path === path);
      if (child) return { parent: item.label, label: child.label };
    }
  }
  return { parent: "", label: "首页" };
}

function icon(name, className = "wj-icon", options = {}) {
  if (projectIconNames[name]) {
    const attrs = [
      `name="${projectIconNames[name]}"`,
      `class="${className}"`,
    ];
    if (!options.preserveColor) attrs.push(`color="currentColor"`);
    if (options.width) attrs.push(`width="${options.width}"`);
    if (options.height) attrs.push(`height="${options.height}"`);
    if (options.size) attrs.push(`size="${options.size}"`);
    if (!options.width && !options.height && !options.size) attrs.push(`size="1em"`);
    return `<iconpark-icon ${attrs.join(" ")}></iconpark-icon>`;
  }
  const markup = icons[name] || icons.file;
  if (markup.trim().startsWith("<svg")) {
    return markup.replace("<svg ", `<svg class="${className}" aria-hidden="true" `);
  }
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${markup}</svg>`;
}

function registerHandler(meta) {
  const id = `h${++state.handlerSeed}`;
  state.handlers[id] = meta;
  return id;
}

function redirectToFrontApp() {
  window.location.href = "./front-app.html";
}

function redirectToFrontEmployee() {
  window.location.href = "./front-app_0608.html";
}

function navigate(path) {
  const next = normalizePath(path);
  if (next === "/front-app") {
    redirectToFrontApp();
    return;
  }
  if (next === "/front-employee") {
    redirectToFrontEmployee();
    return;
  }
  if (!state.tabs.includes(next)) state.tabs.push(next);
  if (next === "/dashboard/robotList") {
    state.pageViews[next] = "智能体中心";
  }
  if (next === "/dashboard/digitalEmployeeList") {
    state.pageViews[next] = "数字员工中心";
  }
  state.filterMenuKey = "";
  state.filterControlKey = "";
  state.docManagement.configView = null;
  const meta = routeMeta(next);
  state.openGroups = new Set(meta.parent ? [meta.parent] : []);
  state.path = next;
  location.hash = next;
  render();
}

function closeTab(path) {
  if (path === "/analytics" && state.tabs.length === 1) return;
  state.tabs = state.tabs.filter((item) => item !== path);
  if (!state.tabs.includes("/analytics")) state.tabs.unshift("/analytics");
  if (state.path === path) state.path = state.tabs[state.tabs.length - 1] || "/analytics";
  location.hash = state.path;
  render();
}

function toggleGroup(label) {
  if (state.openGroups.has(label)) state.openGroups.delete(label);
  else state.openGroups.add(label);
  render();
}

function openDrawer(title, fields) {
  state.filterMenuKey = "";
  state.filterControlKey = "";
  state.drawer = { title, fields };
  render();
}

function closeDrawer() {
  state.filterMenuKey = "";
  state.filterControlKey = "";
  state.drawer = null;
  render();
}

function render() {
  const scrollState = captureScrollState();
  state.handlers = {};
  state.handlerSeed = 0;
  const page = currentPage();
  if (page.kind === "frontApp") {
    redirectToFrontApp();
    return;
  }
  document.title = `${page.title} - 万卷`;
  if (page.kind === "employeeChat") {
    app.innerHTML = renderDigitalEmployeeChat();
    portal.innerHTML = renderPortal();
    return;
  }
  app.innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}
      ${renderTopbar(page)}
      ${renderTabbar()}
      <main class="main">${renderPage(page)}</main>
    </div>
  `;
  portal.innerHTML = renderPortal();
  requestAnimationFrame(() => {
    if (state.resetMainScroll) {
      const main = document.querySelector(".main");
      const tableWrap = document.querySelector(".table-wrap");
      if (main) {
        main.scrollTop = 0;
        main.scrollLeft = 0;
      }
      if (tableWrap) {
        tableWrap.scrollTop = 0;
        tableWrap.scrollLeft = 0;
      }
      state.resetMainScroll = false;
      return;
    }
    restoreScrollState(scrollState);
  });
}

function captureScrollState() {
  const main = document.querySelector(".main");
  const tableWrap = document.querySelector(".table-wrap");
  return {
    mainTop: main ? main.scrollTop : 0,
    mainLeft: main ? main.scrollLeft : 0,
    tableTop: tableWrap ? tableWrap.scrollTop : 0,
    tableLeft: tableWrap ? tableWrap.scrollLeft : 0,
  };
}

function restoreScrollState(stateSnapshot) {
  if (!stateSnapshot) return;
  const main = document.querySelector(".main");
  const tableWrap = document.querySelector(".table-wrap");
  if (main) {
    main.scrollTop = stateSnapshot.mainTop || 0;
    main.scrollLeft = stateSnapshot.mainLeft || 0;
  }
  if (tableWrap) {
    tableWrap.scrollTop = stateSnapshot.tableTop || 0;
    tableWrap.scrollLeft = stateSnapshot.tableLeft || 0;
  }
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-logo">
          ${icon("logoFull", "brand-logo-full-icon", { width: "86px", height: "34px" })}
        </div>
      </div>
      <div class="menu">
        ${menuItems.map(renderMenuItem).join("")}
      </div>
    </aside>
  `;
}

function renderMenuItem(item) {
  if (!item.children) {
    const active = state.path === item.path ? "active" : "";
    return `
      <button class="menu-item ${active}" data-handler="${registerHandler({ type: "nav", path: item.path })}">
        <span class="menu-icon">${icon(item.icon)}</span>
        <span class="menu-label">${item.label}</span>
      </button>
    `;
  }
  const open = state.openGroups.has(item.label);
  return `
    <div class="menu-group ${open ? "open" : ""}">
      <button class="menu-group-head" data-handler="${registerHandler({ type: "group", label: item.label })}">
        <span class="menu-icon">${icon(item.icon)}</span>
        <span class="menu-label">${item.label}</span>
        <span class="menu-chevron">${icon("chevron")}</span>
      </button>
      <div class="submenu">
        ${item.children.map((child) => `
          <button class="submenu-item ${state.path === child.path || (state.path === "/dashboard/digitalEmployeeEdit" && child.path === "/dashboard/digitalEmployeeList") ? "active" : ""}" data-handler="${registerHandler({ type: "nav", path: child.path })}">
            <span class="menu-label">${child.label}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTopbar(page) {
  const breadcrumbItems = compactBreadcrumb(page.breadcrumb);
  const crumbs = breadcrumbItems.map((item, index) => {
    if (item === "...") return `<span class="breadcrumb-link">...</span>`;
    const label = index === 0 ? `${icon("home", "wj-icon tiny-icon")}<span>${item}</span>` : `<span>${item}</span>`;
    const isCurrent = index === breadcrumbItems.length - 1;
    return `<span class="${isCurrent ? "breadcrumb-current" : "breadcrumb-link"}">${label}</span>`;
  }).join(`<span class="breadcrumb-separator">/</span>`);
  return `
    <header class="topbar">
      <button class="collapse-btn" data-handler="${registerHandler({ type: "noop" })}">${icon("menu")}</button>
      <div class="breadcrumb">${crumbs}</div>
      <div class="topbar-spacer"></div>
      <div class="topbar-actions">
        <button class="front-btn" data-handler="${registerHandler({ type: "nav", path: "/front-app" })}">
          ${icon("frontApp", "front-btn-icon")}
          <span>前台应用</span>
        </button>
        <button class="front-btn" data-handler="${registerHandler({ type: "nav", path: "/front-employee" })}">
          ${icon("user", "front-btn-icon")}
          <span>前台员工</span>
        </button>
        <button class="icon-btn fullscreen-btn" data-handler="${registerHandler({ type: "noop" })}">${icon("fullscreen")}</button>
        <span class="topbar-divider" aria-hidden="true"></span>
        <button class="user-pill" data-handler="${registerHandler({ type: "drawer", title: "账号信息", fields: userFields() })}" aria-label="账号信息">
          <span class="avatar">杨</span>
        </button>
      </div>
    </header>
  `;
}

function compactBreadcrumb(items) {
  if (items.length <= 5) return items;
  return [items[0], "...", ...items.slice(-3)];
}

function renderTabbar() {
  return `
    <div class="tabbar">
      <div class="tab-scroll">
        ${state.tabs.map((path) => {
          const label = pages[path]?.title || routeMeta(path).label;
          return `
            <div class="tab ${path === state.path ? "active" : ""}">
              <button class="tab-title" data-handler="${registerHandler({ type: "nav", path })}">${label}</button>
              <span class="tab-close" data-handler="${registerHandler({ type: "closeTab", path })}">${icon("close")}</span>
            </div>
          `;
        }).join("")}
      </div>
      <button class="icon-btn" data-handler="${registerHandler({ type: "noop" })}">${icon("chevron")}</button>
    </div>
  `;
}

function renderPage(page) {
  if (page.kind === "frontApp") return renderFrontApp();
  if (page.kind === "home") return renderHome(page);
  if (state.path === "/manage/management") return renderDocManagementPage(page);
  if (page.kind === "employeeManagement") return renderEmployeeManagementPage();
  if (page.kind === "employeeEditor") return renderEmployeeEditorPage();
  if (page.kind === "splitTable") return renderSplitTablePage(page);
  if (page.kind === "cards") return renderCardsPage(page);
  if (page.kind === "systemUsers") return renderSystemUsersPage(page);
  if (page.kind === "dataCenter") return renderDataCenterPage(page);
  return renderTablePage(page);
}

function renderFrontApp() {
  const navItems = [
    ["通用问答", "Chat / Agent", "active", "◐"],
    ["智能体广场", "能力与边界", "", "▦"],
    ["历史对话", "复跑 / 导出", "", "◷"],
    ["记忆中心", "个人 / 团队", "", "◇"],
    ["定时任务", "试运行 / 告警", "", "◎"],
  ];
  const agentSteps = [
    ["任务目标", "分析本周用户参与度下降原因，输出可执行复盘。", "done"],
    ["计划拆解", "拉取指标、定位时间窗口、比对版本发布与渠道变化。", "active"],
    ["工具调用", "读取产品看板、查询知识库、生成证据摘要。", ""],
    ["产出物", "分析报告、风险假设、后续追踪定时任务。", ""],
  ];
  const memories = [
    ["个人偏好", "报告使用简洁结论 + 表格证据"],
    ["业务事实", "用户参与度口径：DAU互动次数"],
    ["项目上下文", "增长项目 Q2 重点看新用户激活"],
  ];
  return `
    <div class="front-app-shell">
      <aside class="front-sidebar">
        <div class="front-sidebar-head">
          <div class="front-logo">${icon("logoFull", "front-logo-icon", { width: "95px", height: "38px" })}</div>
          <button class="front-collapse" data-handler="${registerHandler({ type: "nav", path: "/analytics" })}" aria-label="返回后台">
            <span></span><span></span>
          </button>
        </div>
        <button class="front-new-chat" data-handler="${registerHandler({ type: "noop" })}">
          <span class="front-new-icon">+</span>
          <span>新建任务</span>
        </button>
        <nav class="front-work-nav">
          <div class="front-section-label">前台工作台</div>
          ${navItems.map(([label, desc, active, mark]) => `
            <button class="front-nav-item ${active}" data-handler="${registerHandler({ type: "noop" })}">
              <span class="front-nav-mark">${mark}</span>
              <span>
                <strong>${escapeHtml(label)}</strong>
                <em>${escapeHtml(desc)}</em>
              </span>
            </button>
          `).join("")}
          <button class="front-side-item employee" data-handler="${registerHandler({ type: "nav", path: "/digital-employee-chat" })}">
            <span class="front-side-icon employee-icon"></span>
            <span>数字员工</span>
            <em>NEW</em>
          </button>
        </nav>
        <section class="front-sidebar-card">
          <div class="front-sidebar-card-head">当前工作空间</div>
          <strong>增长分析项目</strong>
          <span>团队共享记忆 · 12 条</span>
          <span>可用知识库 · 产品数据中心</span>
        </section>
        <section class="front-sidebar-card warning">
          <div class="front-sidebar-card-head">待确认</div>
          <strong>2 个数字员工审批</strong>
          <span>涉及外部发布与系统写入</span>
        </section>
        <button class="front-manage" data-handler="${registerHandler({ type: "nav", path: "/dashboard/robotList" })}">
          <span class="front-manage-icon"></span>
          <span>后台管理</span>
        </button>
      </aside>
      <main class="front-main front-workbench-main">
        <header class="front-global-top">
          <div>
            <span>Workspace</span>
            <strong>增长分析项目</strong>
          </div>
          <label class="front-global-search">
            <input placeholder="搜索智能体、历史、记忆、任务" />
          </label>
          <div class="front-global-actions">
            <button data-handler="${registerHandler({ type: "noop" })}">通知 3</button>
            <button data-handler="${registerHandler({ type: "noop" })}">刘静 · 业务执行者</button>
          </div>
        </header>
        <section class="front-workbench">
          <div class="front-workspace-panel">
            <div class="front-mode-switch">
              <button class="active" data-handler="${registerHandler({ type: "noop" })}">Chat 即时问答</button>
              <button data-handler="${registerHandler({ type: "noop" })}">Agent 任务执行</button>
            </div>
            <section class="front-hero-task">
              <div>
                <h1>把问答、任务、记忆和自动化放在一个前台工作台</h1>
                <p>Chat 用于快速问答，Agent 用于可追溯执行；任何一次结果都可以沉淀为历史、记忆或定时任务。</p>
              </div>
              <button data-handler="${registerHandler({ type: "noop" })}">查看边界说明</button>
            </section>
            <div class="front-composer front-work-composer">
              <textarea placeholder="输入问题或任务目标，支持 @智能体、引用记忆、上传文件、选择知识库..."></textarea>
              <div class="front-composer-tools">
                <div class="front-tool-left">
                  <button data-handler="${registerHandler({ type: "noop" })}" aria-label="上传附件" title="上传附件">⌘</button>
                  <button data-handler="${registerHandler({ type: "noop" })}" aria-label="联网搜索" title="联网搜索">◎</button>
                  <button class="front-knowledge-btn" data-handler="${registerHandler({ type: "noop" })}">
                    <span></span>
                    <b>产品知识库</b>
                  </button>
                  <button class="front-knowledge-btn" data-handler="${registerHandler({ type: "noop" })}">
                    <span></span>
                    <b>@数据分析师</b>
                  </button>
                </div>
                <div class="front-tool-right">
                  <button class="front-model-select" data-handler="${registerHandler({ type: "noop" })}">
                    <span></span>
                    <b>Agent · 可控执行</b>
                    <em>需审批</em>
                    <i></i>
                  </button>
                  <u></u>
                  <button class="front-send" data-handler="${registerHandler({ type: "noop" })}" aria-label="发送"></button>
                </div>
              </div>
            </div>
            <section class="front-agent-flow">
              <div class="front-panel-head">
                <span>Agent 执行流</span>
                <em>任务目标 → 计划 → 工具 → 产出物</em>
              </div>
              <div class="front-agent-steps">
                ${agentSteps.map(([title, desc, status], index) => `
                  <div class="front-agent-step ${status}">
                    <i>${index + 1}</i>
                    <strong>${escapeHtml(title)}</strong>
                    <span>${escapeHtml(desc)}</span>
                  </div>
                `).join("")}
              </div>
            </section>
            <section class="front-output-grid">
              <div class="front-output-card">
                <strong>引用来源</strong>
                <span>知识库条目 3 条 · 网页来源 2 条 · 产品看板 1 个</span>
              </div>
              <div class="front-output-card">
                <strong>一键沉淀</strong>
                <span>保存为历史 / 结构化记忆 / 定时复跑任务</span>
              </div>
              <div class="front-output-card">
                <strong>审计记录</strong>
                <span>保留输入、工具调用、引用记忆与产出版本</span>
              </div>
            </section>
          </div>
          <aside class="front-context-panel">
            <section class="front-context-card">
              <div class="front-panel-head">
                <span>智能体广场</span>
                <button data-handler="${registerHandler({ type: "noop" })}">全部</button>
              </div>
              <div class="front-agent-list">
                <button data-handler="${registerHandler({ type: "noop" })}">
                  <strong>深度写作</strong>
                  <span>专业内容创作 · 普通智能体</span>
                </button>
                <button data-handler="${registerHandler({ type: "nav", path: "/digital-employee-chat" })}">
                  <strong>数据分析师</strong>
                  <span>岗位型数字员工 · 任务运行页</span>
                </button>
              </div>
            </section>
            <section class="front-context-card">
              <div class="front-panel-head">
                <span>记忆中心</span>
                <button data-handler="${registerHandler({ type: "noop" })}">治理</button>
              </div>
              ${memories.map(([title, desc]) => `
                <div class="front-memory-row">
                  <strong>${escapeHtml(title)}</strong>
                  <span>${escapeHtml(desc)}</span>
                </div>
              `).join("")}
            </section>
            <section class="front-context-card">
              <div class="front-panel-head">
                <span>定时任务</span>
                <button data-handler="${registerHandler({ type: "noop" })}">新建</button>
              </div>
              <div class="front-task-row"><strong>周报复盘</strong><span>每周一 09:00 · dry run 已通过</span></div>
              <div class="front-task-row warning"><strong>发布后指标巡检</strong><span>失败重试 2 次 · 告警订阅开启</span></div>
            </section>
          </aside>
        </section>
        <p class="front-disclaimer">前台工作台结果由 AI 生成；对外发布、系统写入等动作需按审批规则确认。</p>
      </main>
    </div>
  `;
}

function renderDigitalEmployeeChat() {
  const employeeList = [
    { name: "PM", desc: "AI-native product manager", date: "2026-06-01", active: false },
    { name: "数据分析师", desc: "AI-native data analyst", date: "2026-06-01", active: true },
  ];
  const questionCards = [
    ["What context or domain does this fall into?", "Product analytics"],
    ["Which metric or area experienced the drop?", "User engagement"],
    ["When did you first notice the drop?", "Recent (days)"],
    ["Do you have any hypothesis about what might have caused it?", "Release-related"],
  ];
  const taskItems = [
    ["Help me frame this analysis", "Default project · 2026-06-02 15:18"],
    ["Compare weekly activation", "Product analytics · 2026-06-02 14:06"],
  ];
  return `
    <div class="employee-chat-shell">
      <aside class="employee-contacts">
        <div class="employee-brand">
          <span>万卷</span>
          <em>Beta</em>
        </div>
        <div class="employee-contact-title">
          <span>员工通讯录（2）</span>
          <button data-handler="${registerHandler({ type: "nav", path: "/front-app" })}" aria-label="返回前台应用"></button>
        </div>
        <div class="employee-list">
          ${employeeList.map((item) => `
            <button class="employee-card ${item.active ? "active" : ""}" data-handler="${registerHandler({ type: "noop" })}">
              <span class="employee-avatar ${item.name === "PM" ? "pm" : ""}"></span>
              <span class="employee-info">
                <strong>${escapeHtml(item.name)}</strong>
                <em>${escapeHtml(item.desc)}</em>
              </span>
              <time>${escapeHtml(item.date)}</time>
            </button>
          `).join("")}
        </div>
        <button class="employee-public-project" data-handler="${registerHandler({ type: "noop" })}">
          <span></span>
          <b>Public Projects</b>
        </button>
        <div class="employee-account">
          <span>刘</span>
          <div>
            <strong>刘静</strong>
            <em>Pro trial</em>
          </div>
          <button data-handler="${registerHandler({ type: "noop" })}" aria-label="账号设置">⚙</button>
        </div>
      </aside>
      <section class="employee-workspace">
        <header class="employee-topbar">
          <div class="employee-active-name">
            <span class="employee-avatar small"></span>
            <strong>数据分析师</strong>
            <i></i>
          </div>
          <div class="employee-top-actions">
            <button data-handler="${registerHandler({ type: "noop" })}">＋ Task</button>
            <button data-handler="${registerHandler({ type: "noop" })}">＋ Automation</button>
            <button class="active" data-handler="${registerHandler({ type: "noop" })}">↻ Task List</button>
            <button class="current" data-handler="${registerHandler({ type: "noop" })}"><span></span>Current</button>
          </div>
        </header>
        <main class="employee-chat-main">
          <div class="employee-scrollbar"></div>
          <div class="employee-message-area">
            <section class="employee-context-card">
              ${questionCards.slice(0, 1).map(([question, answer]) => `
                <div class="employee-question-row">
                  <strong>${escapeHtml(question)}</strong>
                  <span>${escapeHtml(answer)}</span>
                </div>
              `).join("")}
            </section>
            <p class="employee-message-text">Got it — a performance drop in product analytics. Let me narrow down the specifics so I can frame the analysis properly.</p>
            <div class="employee-step done">✓ <span>Completed</span> AskUserQuestion</div>
            <section class="employee-context-card multi">
              ${questionCards.slice(1).map(([question, answer]) => `
                <div class="employee-question-row">
                  <strong>${escapeHtml(question)}</strong>
                  <span>${escapeHtml(answer)}</span>
                </div>
              `).join("")}
            </section>
            <div class="employee-step thinking">✣ <span>Deep thinking</span> <i></i></div>
            <div class="employee-step done">✓ <span>Completed</span> Skill</div>
            <div class="employee-thinking-bar">✣ <span>Thinking...</span></div>
          </div>
          <div class="employee-composer">
            <textarea placeholder="Type a message, @ to add workspace context..."></textarea>
            <div class="employee-composer-foot">
              <button class="employee-workspace-select" data-handler="${registerHandler({ type: "noop" })}">
                <span></span>
                Select Workspace
              </button>
              <button class="employee-plus" data-handler="${registerHandler({ type: "noop" })}">＋</button>
              <div class="employee-send-area">
                <button class="employee-lite" data-handler="${registerHandler({ type: "noop" })}">Lite <i></i></button>
                <button class="employee-send" data-handler="${registerHandler({ type: "noop" })}" aria-label="停止生成"><span></span></button>
              </div>
            </div>
          </div>
        </main>
      </section>
      <aside class="employee-task-panel">
        <div class="employee-task-tabs">
          <button class="active" data-handler="${registerHandler({ type: "noop" })}">▣ Tasks</button>
          <button data-handler="${registerHandler({ type: "noop" })}">◷ Automations</button>
        </div>
        <div class="employee-task-list">
          ${taskItems.map(([title, meta], index) => `
            <button class="employee-task-card ${index === 0 ? "active" : ""}" data-handler="${registerHandler({ type: "noop" })}">
              <span class="employee-task-dot"></span>
              <strong>${escapeHtml(title)}</strong>
              <em>▱ ${escapeHtml(meta)}</em>
              <i>...</i>
            </button>
          `).join("")}
        </div>
      </aside>
      <button class="employee-bug" data-handler="${registerHandler({ type: "noop" })}" aria-label="问题反馈">☻</button>
    </div>
  `;
}

function renderHome(page) {
  return `
    <section class="home-panel">
      <div class="home-blob blob-top-center"></div>
      <div class="home-blob blob-top-left"></div>
      <div class="home-blob blob-bottom-left"></div>
      <div class="home-blob blob-bottom-center"></div>
      <div class="home-blob blob-right-middle"></div>
      <div class="home-blob blob-bottom-right"></div>
      <div class="home-glass">
        <div class="home-copy">
          <h1 class="home-title">👋 Hi，欢迎来到万卷</h1>
          <p class="home-desc">企业级智能问答系统，整合企业内部知识资源，利用GLM大模型技术，有效理解各种查询需求，并提供相应答案。万卷有助于减少对人工客服的依赖，提高信息检索的效率和质量，同时降低企业的运营及信息获取成本，助力企业高效运营。</p>
        </div>
        <div class="home-stage">
          <div class="home-stage-glow glow-left"></div>
          <div class="home-stage-glow glow-right"></div>
          <div class="home-hero-art">
            <img src="./assets/home-center-art-source.png" alt="万卷首页装饰图" />
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPills(page) {
  if (!page.pills) return "";
  const active = state.pageViews[state.path] || page.pills[0];
  return `
    <div class="subtabs">
      ${page.pills.map((pill) => `<button class="subtab ${pill === active ? "active" : ""}" data-handler="${registerHandler({ type: "pill", path: state.path, value: pill })}">${pill}</button>`).join("")}
    </div>
  `;
}

function renderFilters(filters) {
  return renderFilterBar(filters);
}

function resolvePageView(page) {
  if (!page.views) return page;
  const active = state.pageViews[state.path] || page.pills?.[0];
  return active && page.views[active] ? { ...page, ...page.views[active] } : page;
}

function renderFilterBar(filters = [], actionButtons = []) {
  const page = currentPage();
  const controls = filters.filter((item) => item.kind !== "button");
  const filterButtons = filters.filter((item) => item.kind === "button");
  const trailingButtons = [...filterButtons, ...actionButtons];
  const leftButtons = trailingButtons.filter((item) => item.intent === "reset");
  const rightButtons = trailingButtons.filter((item) => item.intent !== "reset");
  const { visibleControls, hiddenControls } = resolveVisibleFilters(controls, leftButtons, rightButtons, page);
  const popoverKey = `${state.path}:${state.pageViews[state.path] || ""}:filters`;
  const showPopover = hiddenControls.length > 0 && state.filterMenuKey === popoverKey;
  const scopeKey = currentScopeKey();
  const selectedCount = hiddenControls.reduce((total, item) => total + (filterHasValue(item, scopeKey) ? 1 : 0), 0);

  return `
    <div class="filters ${rightButtons.length > 0 ? "right-actions" : ""}">
      <div class="filter-left">
        ${visibleControls.map((item) => renderFilterItem(item)).join("")}
        ${hiddenControls.length > 0 ? `
          <div class="more-filter-wrap ${showPopover ? "open" : ""}">
            <button class="btn icon-only more-filter-btn ${showPopover ? "active" : ""}" data-handler="${registerHandler({ type: "toggleMoreFilters", key: popoverKey })}">
              ${icon("filter")}
              ${selectedCount > 0 ? `<span class="more-filter-count">${selectedCount}</span>` : ""}
            </button>
            ${showPopover ? `
              <div class="more-filter-panel">
                ${hiddenControls.map((item) => `<div class="filter-popover-item">${renderFilterItem(item, true)}</div>`).join("")}
              </div>
            ` : ""}
          </div>
        ` : ""}
        ${leftButtons.map((item) => renderFilterItem(item)).join("")}
      </div>
      ${rightButtons.length > 0 ? `<div class="filter-right">${rightButtons.map((item) => renderFilterItem(item)).join("")}</div>` : ""}
    </div>
  `;
}

function renderHoverPanel(item) {
  if (item.hoverPreview === "robotCreate") {
    return `
      <div class="hover-preview">

        <div class="hover-preview-card">
          <div class="hover-preview-thumb thumb-rag"></div>
          <div class="hover-preview-body">
            <div class="hover-preview-title">数字员工智能体</div>
            <div class="hover-preview-desc">结合 Harness 框架的稳定调度能力，打造具备特定岗位技能的数字员工，可自主承接标准业务流程，实现企业人力资产的数字化。</div>
            <div class="hover-preview-tags">
              <span class="hover-preview-tag">Harness架构</span>
              <span class="hover-preview-tag">岗位辅助</span>
              <span class="hover-preview-tag">全天候执行</span>
            </div>
          </div>
        </div>
        <div class="hover-preview-card">
          <div class="hover-preview-thumb thumb-rag"></div>
          <div class="hover-preview-body">
            <div class="hover-preview-title">RAG智能体</div>
            <div class="hover-preview-desc">基于 RAG 配置智能体，可自主进行私域知识库精准检索 + 大模型生成，企业知识问答优选。</div>
            <div class="hover-preview-tags">
              <span class="hover-preview-tag">知识库</span>
              <span class="hover-preview-tag">自主规划</span>
              <span class="hover-preview-tag">独立执行</span>
            </div>
          </div>
        </div>
        <div class="hover-preview-card">
          <div class="hover-preview-thumb thumb-plan"></div>
          <div class="hover-preview-body">
            <div class="hover-preview-title">自主规划智能体</div>
            <div class="hover-preview-desc">具备自主规划、知识库调用、工具调用、Skills调用 + 大模型生成，适合独立完成的任务场景。</div>
            <div class="hover-preview-tags">
              <span class="hover-preview-tag">Skills</span>
              <span class="hover-preview-tag">工具调用</span>
              <span class="hover-preview-tag">知识赋能</span>
            </div>
          </div>
        </div>
        <div class="hover-preview-card">
          <div class="hover-preview-thumb thumb-collab"></div>
          <div class="hover-preview-body">
            <div class="hover-preview-title">多应用协同智能体</div>
            <div class="hover-preview-desc">多个智能体协同工作，通过调度智能体分配任务，适合复杂的多领域协作场景。</div>
            <div class="hover-preview-tags">
              <span class="hover-preview-tag">多智能体</span>
              <span class="hover-preview-tag">任务协同</span>
              <span class="hover-preview-tag">分工合作</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  if (item.hoverImage) {
    const alt = item.hoverAlt || item.label || "";
    return `<img class="hover-preview-image" src="${escapeHtml(item.hoverImage)}" alt="${escapeHtml(alt)}" />`;
  }
  return "";
}

function renderFilterItem(item, inPopover = false) {
  const scopeKey = currentScopeKey();
  const controlKey = `${scopeKey}:${item.id}`;
  const widthStyle = item.width ? ` style="width:${item.width}px"` : "";
  const popoverClass = inPopover ? " in-popover" : "";
  if (item.kind === "field") {
    const value = getFilterState(item, scopeKey);
    return `<label class="field${popoverClass}${value ? " filled" : ""}"${widthStyle}><input data-filter-input="${scopeKey}|${item.id}" value="${escapeHtml(value)}" placeholder="${item.placeholder}" /><span class="filter-icon-end">${icon("filterSearch", "wj-icon filter-inline-icon")}</span></label>`;
  }
  if (item.kind === "select") {
    const value = getFilterState(item, scopeKey);
    const open = state.filterControlKey === controlKey;
    return `
      <div class="filter-control-wrap${open ? " open" : ""}"${widthStyle}>
        <button class="select-field${popoverClass}${value ? " filled" : ""}" data-handler="${registerHandler({ type: "toggleFilterControl", key: controlKey })}">
          <span>${escapeHtml(value || item.label)}</span>
          <span class="filter-icon-end">${icon("filterChevron", "wj-icon filter-inline-icon")}</span>
        </button>
        ${open ? `
          <div class="filter-dropdown-panel">
            ${item.options.map((option) => `
              <button class="filter-option${option === value ? " active" : ""}" data-handler="${registerHandler({ type: "setSelectValue", key: controlKey, itemId: item.id, scopeKey, value: option === "全部" ? "" : option })}">
                ${escapeHtml(option)}
              </button>
            `).join("")}
          </div>
        ` : ""}
      </div>
    `;
  }
  if (item.kind === "date") {
    const value = displayDateValue(item, scopeKey);
    const dateState = getDateRangeState(item, scopeKey);
    const open = state.filterControlKey === controlKey;
    return `
      <div class="filter-control-wrap${open ? " open" : ""}"${widthStyle}>
        <button class="date-field${popoverClass}${value.filled ? " filled" : ""}" data-handler="${registerHandler({ type: "toggleFilterControl", key: controlKey })}">
          <span class="date-text">${escapeHtml(value.start)}</span>
          <span class="to">-</span>
          <span class="date-text">${escapeHtml(value.end)}</span>
          <span class="filter-icon-end">${icon("filterCalendar", "wj-icon filter-inline-icon")}</span>
        </button>
        ${open ? `
          <div class="filter-date-panel">
            <div class="calendar-head">
              <div class="calendar-nav left">
                <button class="calendar-nav-btn double" data-handler="${registerHandler({ type: "shiftDateAnchor", itemId: item.id, scopeKey, delta: -12 })}">
                  ${icon("calendarPrev", "wj-icon calendar-nav-icon")}${icon("calendarPrev", "wj-icon calendar-nav-icon")}
                </button>
                <button class="calendar-nav-btn" data-handler="${registerHandler({ type: "shiftDateAnchor", itemId: item.id, scopeKey, delta: -1 })}">
                  ${icon("calendarPrev", "wj-icon calendar-nav-icon")}
                </button>
              </div>
              <div class="calendar-head-spacer"></div>
              <div class="calendar-nav right">
                <button class="calendar-nav-btn" data-handler="${registerHandler({ type: "shiftDateAnchor", itemId: item.id, scopeKey, delta: 1 })}">
                  ${icon("calendarPrev", "wj-icon calendar-nav-icon next")}
                </button>
                <button class="calendar-nav-btn double" data-handler="${registerHandler({ type: "shiftDateAnchor", itemId: item.id, scopeKey, delta: 12 })}">
                  ${icon("calendarPrev", "wj-icon calendar-nav-icon next")}${icon("calendarPrev", "wj-icon calendar-nav-icon next")}
                </button>
              </div>
            </div>
            <div class="calendar-range-panel">
              ${renderCalendarMonth(dateState.anchor, item, scopeKey)}
              ${renderCalendarMonth(addMonthsIso(dateState.anchor, 1), item, scopeKey)}
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }
  const cls = [
    "btn",
    item.intent === "disabled" ? "disabled" : "",
    item.style === "primary" ? "primary" : "",
    item.intent === "reset" ? "is-reset" : "",
  ].filter(Boolean).join(" ");
  const iconPart = item.icon ? `${icon(item.icon, "btn-inline-icon")}` : "";
  const disabled = item.intent === "disabled" || item.disabled;
  if (item.intent === "reset") {
    return `<button class="${cls}" data-handler="${registerHandler({ type: "resetFilters", scopeKey })}">${iconPart}${item.label}</button>`;
  }
  const handler = item.handler || drawerMeta(item.label);
  const buttonMarkup = `<button class="${cls}" ${disabled ? "disabled" : `data-handler="${registerHandler(handler)}"`}>${iconPart}${item.label}</button>`;
  const hoverPanel = !disabled ? renderHoverPanel(item) : "";
  if (hoverPanel) {
    return `<span class="hover-preview-wrap">${buttonMarkup}<span class="hover-preview-panel">${hoverPanel}</span></span>`;
  }
  return buttonMarkup;
}

function filterHasValue(item, scopeKey = currentScopeKey()) {
  const value = getFilterState(item, scopeKey);
  if (item.kind === "date") return Boolean(value?.start || value?.end);
  return Boolean(value);
}

function resolveVisibleFilters(controls, leftButtons, rightButtons, page) {
  const visibleControls = [...controls];
  const hiddenControls = [];
  const hostWidth = getFilterHostWidth(page);
  const leftBudget = getFilterLeftBudget(page, rightButtons, hostWidth);
  const leftButtonWidth = stackWidth(leftButtons);
  const forceHide = forcedHiddenCount(page, hostWidth, controls.length);

  while (hiddenControls.length < forceHide && visibleControls.length > 1) {
    hiddenControls.unshift(visibleControls.pop());
  }

  while (
    visibleControls.length > 1 &&
    stackWidth(visibleControls) + leftButtonWidth + (hiddenControls.length > 0 ? 44 : 0) > leftBudget
  ) {
    hiddenControls.unshift(visibleControls.pop());
  }

  return { visibleControls, hiddenControls };
}

function getFilterLeftBudget(page, rightButtons, hostWidth = getFilterHostWidth(page)) {
  let width = hostWidth;
  width -= 32;
  if (rightButtons.length > 0) {
    width -= stackWidth(rightButtons) + 24;
  }
  if (state.path === "/manage/management") {
    width += 360;
  }
  return Math.max(width, 320);
}

function forcedHiddenCount(page, hostWidth, maxControls) {
  let count = 0;
  if (page.kind === "splitTable" || page.kind === "systemUsers") {
    if (hostWidth <= 880) count = 2;
    else if (hostWidth <= 1080) count = 1;
  } else {
    if (hostWidth <= 930) count = 2;
    else if (hostWidth <= 1130) count = 1;
  }
  return Math.min(count, Math.max(0, maxControls - 1));
}

function getFilterHostWidth(page) {
  const main = document.querySelector(".main");
  if (main) {
    if (page.kind === "splitTable" || page.kind === "systemUsers") {
      return Math.max(main.clientWidth - 166 - 16 - 32, 320);
    }
    return Math.max(main.clientWidth - 20, 320);
  }
  const selector = page.kind === "splitTable" || page.kind === "systemUsers" ? ".inner-main" : ".page-panel";
  const host = document.querySelector(selector);
  if (host) return host.clientWidth;
  return window.innerWidth - 224 - 20;
}

function stackWidth(items) {
  if (!items.length) return 0;
  return items.reduce((total, item) => total + filterItemWidth(item), 0) + (items.length - 1) * 12;
}

function filterItemWidth(item) {
  if (item.kind === "field" || item.kind === "select" || item.kind === "date") return item.width || 190;
  if (item.kind === "button") {
    const text = (item.label || "").replace(/\s+/g, "");
    const base = item.style === "primary" ? 44 : 24;
    return Math.max(64, text.length * 14 + base);
  }
  return 0;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderTablePage(page) {
  const view = resolvePageView(page);
  return `
    <section class="page-panel padded">
      ${renderPills(page)}
      ${view.filters ? renderFilterBar(view.filters, view.actionButtons || []) : ""}
      ${renderTable(view.columns, view.rows)}
      ${renderPager(view.pagination)}
    </section>
  `;
}

function renderEmployeeManagementPage() {
  const view = state.employeeManagement;
  const keyword = view.keyword.trim().toLowerCase();
  const employees = DIGITAL_EMPLOYEES.filter((item) => {
    return (!keyword || item[1].toLowerCase().includes(keyword)) && (!view.status || item[4] === view.status);
  });
  const gridIcon = '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></svg>';
  const listIcon = '<svg viewBox="0 0 24 24"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h1M4 12h1M4 18h1"/></svg>';
  return `
    <section class="digital-employee-page">
      <div class="digital-employee-toolbar">
        <input id="digitalEmployeeSearch" value="${escapeHtml(view.keyword)}" placeholder="请输入员工名称" />
        <select id="digitalEmployeeStatus">
          <option value="">请选择状态</option>
          ${["运行中", "草稿", "已归档"].map((status) => `<option value="${status}" ${view.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
        <button class="btn" data-handler="${registerHandler({ type: "resetDigitalEmployees" })}">重 置</button>
        <button class="btn primary digital-employee-create" data-handler="${registerHandler({ type: "openCreateDigitalEmployee" })}">创建数字员工</button>
        <div class="digital-employee-view-switch">
          <button class="${view.view === "grid" ? "active" : ""}" aria-label="宫格视图" data-handler="${registerHandler({ type: "setDigitalEmployeeView", value: "grid" })}">${gridIcon}</button>
          <button class="${view.view === "list" ? "active" : ""}" aria-label="列表视图" data-handler="${registerHandler({ type: "setDigitalEmployeeView", value: "list" })}">${listIcon}</button>
        </div>
      </div>
      <div class="digital-employee-grid ${view.view === "list" ? "list-view" : ""}">
        ${employees.length ? employees.map(renderDigitalEmployeeCard).join("") : `<div class="digital-employee-empty">没有匹配的数字员工</div>`}
      </div>
      ${renderPager(pager(String(DIGITAL_EMPLOYEES.length), "20条/页", [1]))}
    </section>
  `;
}

function renderDigitalEmployeeCard(item, index) {
  const [mark, name, desc, owner, status, createdAt, color] = item;
  return `
    <button class="digital-employee-card" type="button" data-employee-index="${index}">
      <div class="digital-employee-card-head">
        <span class="digital-employee-avatar" style="background:${color}">${escapeHtml(mark)}</span>
        <div class="digital-employee-title-wrap">
          <strong>${escapeHtml(name)}</strong>
          <span><i>♟</i>${escapeHtml(owner)}</span>
        </div>
        <em class="${status === "已归档" ? "archived" : ""}"><i></i>${escapeHtml(status)}</em>
      </div>
      <p>${escapeHtml(desc)}</p>
      <time>创建于 ${escapeHtml(createdAt)}</time>
    </button>
  `;
}

function currentEmployeeEditorItem() {
  if (state.employeeEditor.mode === "create") {
    return ["法", "法律助手", "法律顾问专家提供合同审核、风险排查与合规建议，帮您业务流程顺畅，保障业务合规开展。", "集团总公司", "草稿", "2026-06-03 00:00", "#766bf2"];
  }
  return DIGITAL_EMPLOYEES[state.employeeEditor.index] || DIGITAL_EMPLOYEES[0];
}

function renderEmployeeEditorPage() {
  const [mark, name, desc, , , , color] = currentEmployeeEditorItem();
  const isCreate = state.employeeEditor.mode === "create";
  const activeTab = state.employeeEditor.tab || "config";
  return `
    <section class="employee-editor-page">
      <header class="employee-editor-header">
        <button class="employee-editor-back" data-editor-back="true">‹</button>
        <span class="employee-editor-avatar" style="background:${color}">${escapeHtml(mark)}</span>
        <div class="employee-editor-title">
          <strong>${escapeHtml(isCreate ? "新建数字员工" : name)}<button data-handler="${registerHandler({ type: "noop" })}">✎</button></strong>
          <span>${escapeHtml(desc)}</span>
        </div>
        <div class="employee-editor-head-tabs">
          <button class="${activeTab === "config" ? "active" : ""}" data-handler="${registerHandler({ type: "setEmployeeEditorTab", value: "config" })}">
            <span>◉</span>
            <em>配置</em>
          </button>
          <button class="${activeTab === "publish" ? "active" : ""}" data-handler="${registerHandler({ type: "setEmployeeEditorTab", value: "publish" })}">
            <span>✈</span>
            <em>发布渠道</em>
          </button>
        </div>
        ${activeTab === "config" ? `
          <div class="employee-editor-actions">
            <span class="auto-save"><i></i> 已自动保存</span>
            <button class="btn">预览</button>
            <button class="btn primary">定稿</button>
          </div>
        ` : ""}
      </header>
      ${activeTab === "publish" ? renderEmployeePublishChannelsPage(isCreate, name) : renderEmployeeEditorConfigPage(isCreate, name)}
    </section>
  `;
}

function renderEmployeeEditorConfigPage(isCreate, name) {
  return `
      <div class="employee-editor-body">
        <section class="employee-editor-config">
          <h3>AI模型配置</h3>
          <p>选择模型配置上下文与语言理解</p>
          <label class="employee-editor-select">
            <select>
              <option>请选择合适的模型</option>
              <option>GLAC-110 通用</option>
            </select>
          </label>
          <div class="core-file-title">
            <h3>核心文件 <em>*</em></h3>
            <p>定义员工的角色身份、行为规范与交互风格</p>
          </div>
          <div class="core-file-editor">
            <aside>
              ${[
                ["AGENTS.md", "核心角色设定 · 430 B", true],
                ["SOUL.md", "性格与价值观 · 345 B", false],
                ["MEMORY.md", "资料记忆 · 781 B", false],
              ].map(([file, meta, active]) => `
                <button class="${active ? "active" : ""}" data-handler="${registerHandler({ type: "noop" })}">
                  <strong>${file}</strong>
                  <span>${meta}</span>
                </button>
              `).join("")}
            </aside>
            <main>
              <div class="file-path">/prompt/AGENTS.md <button>预览</button><button>重置</button></div>
              <pre>${escapeHtml(`# ${isCreate ? "新建数字员工" : name}\n\n你是「${isCreate ? "法律助手" : name}」，部门的角色定位为：\n\n【职责范围】\n- 负责在业务资料中提取关键线索\n- 结合规则与上下文给出可执行建议\n\n【工作原则】\n1. 所有回答基于知识库与业务规范\n2. 遇到超出范围的问题，说明边界并引导至正确渠道\n\n【输出规范】\n- 固定语言：简体中文`)}</pre>
            </main>
          </div>
        </section>
        <section class="employee-editor-chat">
          <div class="employee-editor-tabs">
            <strong>对话配置</strong><span>管理员工工作区、工具和指令</span>
            <button class="active">对话配置</button><button>文档训练</button><button>模型训练</button>
          </div>
          <div class="chat-preview-message">
            <span>👋</span>
            <div>
              <p>您好！我是您的专属${escapeHtml(isCreate ? "法律助手" : name)}，我已完成岗位初始化，正式向您“报到”。</p>
              <strong>当前岗位画像：</strong>
              <ul>
                <li>专业身份：以规则与业务资料为核心，提供稳定、可追溯的辅助判断。</li>
                <li>核心支持：提炼重点、发现风险，并生成结构化建议。</li>
                <li>工作方式：通过文档训练与知识库学习，持续优化服务质量。</li>
              </ul>
              <p>我已准备好上岗，您可以在这里继续完善配置并进行试运行。</p>
            </div>
          </div>
          <div class="editor-chat-composer">
            <textarea placeholder="发送消息..."></textarea>
            <button>⌁</button>
            <button>➤</button>
          </div>
          <p class="editor-chat-tip">以上内容为AI生成，不代表开发者观点</p>
        </section>
      </div>
  `;
}

function renderEmployeePublishChannelsPage(isCreate, name) {
  const employeeName = isCreate ? "法律助手" : name;
  const apiKeys = [
    ["1", "sk-Z0FBQUFBQnBFWnd3N2g1RF...", "2026-05-08 16:17", "永久有效", "未过期", "启用"],
  ];
  const requestFields = [
    ["inputs", "Object", "是", "工作流输入参数对象"],
    ["files", "Array<File>", "否", "可选附件列表，支持文档或图片"],
    ["stream", "Boolean", "否", "是否流式返回结果，默认 false"],
    ["user", "String", "否", "调用方用户标识，用于隔离上下文"],
  ];
  const curlExample = `curl --location --request POST 'https://api.wanjuan.cn/v1/flows/workflow/run' \\
--header 'X-API-KEY: {api_key}' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "inputs": {
    "question": "请审查这份合同中的付款风险"
  },
  "files": [],
  "stream": false,
  "user": "liujing"
}'`;
  return `
      <section class="employee-publish-page">
        
        <section class="publish-block">
          <div class="publish-block-title">
            <strong>内部上架</strong>
            <span>开启后将不支持关闭</span>
          </div>
          <div class="publish-panel">
            <div class="publish-panel-head">
              <div class="publish-channel-meta">
                <span class="publish-channel-icon">◫</span>
                <div>
                  <strong>前台数字员工</strong>
                  <p>开启后将数字员工「${escapeHtml(employeeName)}」发布到前台应用，成员可在前台入口中直接找到并使用；发布后不支持直接关闭，如需停用请调整可见范围。</p>
                </div>
              </div>
              <button class="publish-switch active" type="button" aria-label="数字员工已发布"></button>
            </div>
            <div class="publish-visibility-row">
              <label>可见范围</label>
              <div class="publish-tag-list">
                <span class="publish-tag">刘静 <i>x</i></span>
              </div>
            </div>
          </div>
        </section>

        <section class="publish-block">
          <div class="publish-block-title">
            <strong>外部调用</strong>
          </div>
          <div class="publish-panel">
            <div class="publish-panel-head">
              <div>
                <strong>IM 集成</strong>
                <p>除 API 访问外，还支持将数字员工接入即时通讯渠道，统一承接消息和工作流调用。</p>
              </div>
            </div>
            <div class="publish-im-grid">
              <article class="publish-im-card">
                <div class="publish-im-card-main">
                  <span class="publish-im-icon">飞</span>
                  <div>
                    <strong>飞书集成</strong>
                    <p>注册飞书应用，通过机器人接收并回复消息，适用于飞书内部协作与通知场景。</p>
                    <a href="javascript:void(0)">配置指南</a>
                  </div>
                </div>
                <button class="btn primary">配置</button>
              </article>
            </div>
          </div>

          <div class="publish-panel">
            <div class="publish-panel-head api-head">
              <div>
                <strong>API访问</strong>
                <p>使用 API Key 访问工作流接口，请妥善保管您的密钥，切勿在前端代码中直接暴露。</p>
              </div>
              <button class="btn primary">+ 添加 API Key</button>
            </div>
            <div class="publish-table-wrap">
              <table class="publish-table">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>Token</th>
                    <th>创建时间</th>
                    <th>有效期</th>
                    <th>是否过期</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  ${apiKeys.map((row) => `
                    <tr>
                      <td>${row[0]}</td>
                      <td class="token-cell">${row[1]}</td>
                      <td>${row[2]}</td>
                      <td><span class="table-highlight primary">${row[3]}</span></td>
                      <td><span class="table-highlight warn">${row[4]}</span></td>
                      <td><span class="table-status online"><i></i>${row[5]}</span></td>
                      <td><button class="table-link" type="button">删除</button></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
              <div class="publish-table-foot">
                <span>共 1 条记录</span>
                <span>10条/页</span>
                <span class="pager-current">1</span>
              </div>
            </div>
            <div class="endpoint-panel">
              <div class="endpoint-panel-label">子能力</div>
              <div class="publish-panel-head endpoint-head">
                <div>
                  <div class="endpoint-title-row">
                    <strong>执行工作流</strong>
                    <span class="method-badge">POST</span>
                  </div>
                  <p>Endpoint: <code>https://api.wanjuan.cn/api/v1/flows/workflow/run</code></p>
                </div>
                <button class="publish-switch active" type="button" aria-label="API 调用已开启"></button>
              </div>
              <div class="endpoint-section">
                <div class="endpoint-section-title">1）调用示例（Request Example）</div>
                <div class="code-block-wrap">
                  <pre>${escapeHtml(curlExample)}</pre>
                  <button class="table-link" type="button">Copy</button>
                </div>
              </div>
              <div class="endpoint-section">
                <div class="endpoint-section-title">2）Request Body 参数说明</div>
                <div class="publish-table-wrap compact">
                  <table class="publish-table">
                    <thead>
                      <tr>
                        <th>参数名</th>
                        <th>类型</th>
                        <th>必填</th>
                        <th>说明</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${requestFields.map((row) => `
                        <tr>
                          <td>${row[0]}</td>
                          <td>${row[1]}</td>
                          <td>${row[2]}</td>
                          <td>${row[3]}</td>
                        </tr>
                      `).join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
  `;
}

function renderSplitTablePage(page) {
  const listIcon = page.title === "FAQ管理" ? "file" : page.title === "文档管理" ? "file" : "folder";
  return `
    <section class="split-page">
      <aside class="inner-side">
        <label class="side-search"><input placeholder="${page.sideSearch}" />${icon("search")}</label>
        <div class="side-list">
          ${page.sideItems.map((item) => `<div class="side-list-item ${item === page.sideActive ? "active" : ""}">${icon(listIcon)}<span class="ellipsis">${item}</span></div>`).join("")}
        </div>
      </aside>
      <div class="inner-main">
        ${page.headerText ? `<div class="section-title-row"><div class="section-title">${page.headerText}</div><div class="filter-right">${(page.headerButtons || []).map(renderFilterItem).join("")}</div></div>` : ""}
        ${renderFilters(page.filters)}
        ${renderTable(page.columns, page.rows)}
        ${renderPager(page.pagination)}
      </div>
    </section>
  `;
}

function renderDocManagementPage(page) {
  if (state.docManagement.uploadView) return renderDocUploadPage();
  if (state.docManagement.configView) return renderDocConfigPage();
  if (state.docManagement.sliceView) return renderDocSlicePage();
  const selectedRows = state.docManagement.selectedRows;
  const multiSelected = selectedRows.size > 1;
  const allSelected = selectedRows.size === DOC_MANAGEMENT_ROWS.length;
  const someSelected = selectedRows.size > 0 && !allSelected;
  const batchButtons = multiSelected
    ? [
        button("批量复制", "open"),
        button("批量修改配置", "open", "", { handler: { type: "openDocConfig", mode: "batch" } }),
        button("批量删除", "open"),
        button("上传文档", "open", "primary", { handler: { type: "openDocUpload" } }),
      ]
    : [
        button("删除", "disabled", "", { disabled: true }),
        button("上传文档", "open", "primary", { handler: { type: "openDocUpload" } }),
      ];
  const rows = DOC_MANAGEMENT_ROWS.map((item) => [
    checkbox({ checked: selectedRows.has(item.id), handler: { type: "toggleDocRow", id: item.id } }),
    item.index,
    docNameCell(item),
    item.slices,
    renderDocStatusCell(item),
    item.labels,
    item.canBatch ? { type: "iconAction", icon: "addSquare", tone: "muted", handler: { type: "drawer", title: "添加标签", fields: [{ label: "标签名称" }] } } : "",
    item.createdAt,
    docRowActions(item),
  ]);

  return `
    <section class="split-page doc-management-page">
      <aside class="inner-side doc-side">
        <div class="doc-side-search-row">
          <label class="side-search"><input placeholder="请输入关键字搜索" />${icon("filterSearch", "wj-icon filter-inline-icon")}</label>
          <button class="doc-side-add" data-handler="${registerHandler({ type: "drawer", title: "新建知识库分组", fields: [{ label: "分组名称" }] })}">${icon("addSquare", "doc-side-add-icon")}</button>
        </div>
        <div class="doc-tree">
          ${renderDocTreeNodes(DOC_MANAGEMENT_TREE)}
        </div>
      </aside>
      <div class="inner-main doc-main">
        <div class="section-title-row doc-title-row">
          <div class="section-title doc-title">当前分组：${state.docManagement.activeNode}</div>
          <div class="filter-right">${[
            button("召回测试", "open", "", { icon: "recallTest" }),
            button("接口调用", "open", "", { icon: "apiCall" }),
          ].map(renderFilterItem).join("")}</div>
        </div>
        ${renderFilters([
          { ...field("请输入文档名称"), width: 176 },
          { ...selectField("请选择文档格式"), width: 176 },
          { ...selectField("请选择状态"), width: 176 },
          { ...dateField("创建开始日期", "创建结束日期"), width: 240 },
          button("重 置", "reset"),
          ...batchButtons,
        ])}
        ${renderTable(
          [
            [checkbox({ checked: allSelected, mixed: someSelected, handler: { type: "toggleAllDocRows" } }), "42px"],
            ["编号", "72px"],
            ["文档名称", "380px"],
            ["切片数", "88px"],
            ["状态", "170px"],
            ["标签", "176px"],
            ["", "42px"],
            ["创建时间", "170px"],
            ["操作", "168px"],
          ],
          rows,
        )}
        ${renderPager(pager("20", "10条/页", [1, 2, 3, 4]))}
      </div>
    </section>
  `;
}

function renderDocTreeNodes(nodes, depth = 0) {
  return nodes.map((node) => {
    const hasChildren = !!node.children?.length;
    const open = hasChildren && state.docManagement.expandedNodes.has(node.label);
    const active = state.docManagement.activeNode === node.label;
    const togglePart = hasChildren
      ? `<button class="doc-tree-toggle" data-handler="${registerHandler({ type: "toggleDocTree", label: node.label })}">${icon("filterChevron", `doc-tree-chevron ${open ? "open" : ""}`)}</button>`
      : `<span class="doc-tree-toggle placeholder"></span>`;
    const nodeClick = hasChildren
      ? registerHandler({ type: "toggleDocTree", label: node.label })
      : registerHandler({ type: "setDocActive", label: node.label });
    const iconName = hasChildren ? "treeFolder" : "treeFile";
    return `
      <div class="doc-tree-branch depth-${depth}">
        <div class="doc-tree-row ${active ? "active" : ""}" data-handler="${nodeClick}">
          ${togglePart}
          <span class="doc-tree-icon">${icon(iconName)}</span>
          <span class="ellipsis">${node.label}</span>
        </div>
        ${hasChildren && open ? `<div class="doc-tree-children">${renderDocTreeNodes(node.children, depth + 1)}</div>` : ""}
      </div>
    `;
  }).join("");
}

function docNameCell(item) {
  return `
    <div class="doc-name-cell">
      <span class="doc-format-badge ${item.format.toLowerCase()}">${item.format.slice(0, 1)}</span>
      <span class="ellipsis">${item.name}</span>
    </div>
  `;
}

function renderDocStatusCell(item) {
  return { type: "docStatus", item };
}

function isSpreadsheetFormat(format) {
  return ["XLSX", "XLS", "CSV"].includes(String(format || "").toUpperCase());
}

function isPresentationFormat(format) {
  return ["PPTX", "PPT"].includes(String(format || "").toUpperCase());
}

function sliceModeForDoc(doc) {
  if (isSpreadsheetFormat(doc?.format)) return "excel";
  if (isPresentationFormat(doc?.format)) return "ppt";
  return "text";
}

function openDocSliceView(id) {
  const doc = DOC_MANAGEMENT_ROWS.find((item) => item.id === id);
  state.docManagement.rowMenu = "";
  state.docManagement.sliceView = {
    docId: id,
    activeSlice: sliceModeForDoc(doc) === "text" ? 4 : 1,
    editing: false,
    imageViewer: "",
    drawerImageViewer: "",
    keywordEditor: false,
  };
  state.resetMainScroll = true;
  render();
}

function activeSliceDoc() {
  const view = state.docManagement.sliceView;
  return DOC_MANAGEMENT_ROWS.find((item) => item.id === view?.docId) || DOC_MANAGEMENT_ROWS.find((item) => item.ops === "done");
}

function sampleImageThumb(kind = "landscape") {
  const assets = {
    landscape: "slice-thumb-1.jpg",
    zoom: "slice-thumb-2.jpg",
    water: "slice-thumb-3.jpg",
  };
  if (assets[kind]) {
    return `<img class="slice-raster-thumb" src="./assets/${assets[kind]}" alt="" />`;
  }
  return `<span class="slice-thumb-art ${kind}"><span></span></span>`;
}

function getDocSliceItems(doc) {
  const mode = sliceModeForDoc(doc);
  if (mode === "excel") {
    return [
      {
        id: 1,
        title: "切片1",
        meta: "Sheet：项目总览 · 第 2-18 行",
        status: "已启用",
        summary: "文件：2026储能项目经营数据表.xlsx。Sheet：项目总览。字段包括项目名称、区域、负责人、状态、预计上线时间、Q1收入、Q2收入、增长率。",
        excelRows: [
          ["项目名称", "区域", "负责人", "状态", "Q1收入", "增长率"],
          ["华东储能站", "华东", "李文", "进行中", "1280万", "12.4%"],
          ["西南调峰项目", "西南", "周宁", "延期", "860万", "-3.1%"],
        ],
        excelImages: [
          {
            kind: "diagram",
            title: "项目延期风险流程图",
            source: "Sheet：项目总览 / 锚点：H6:K14 / 附近行：第 6-14 行",
            ocr: "并网验收、风险复核、负责人确认、上线延期",
            summary: "图片展示西南调峰项目的延期原因和验收节点，召回时会与同 Sheet 的项目状态、预计上线时间一起命中。",
          },
        ],
        tags: ["Sheet:项目总览", "行2-18", "公式结果"],
      },
      {
        id: 2,
        title: "切片2",
        meta: "Sheet：销售明细 · 第 19-36 行",
        status: "已启用",
        summary: "产品=A100储能柜，区域=华东，渠道=直营，Q1销售额=100万，Q2销售额=128万，增长率=28%。公式：增长率=(Q2-Q1)/Q1。",
        excelRows: [
          ["产品", "区域", "渠道", "Q1销售额", "Q2销售额", "增长率"],
          ["A100储能柜", "华东", "直营", "100万", "128万", "28%"],
          ["B200电池包", "华南", "代理", "82万", "96万", "17.1%"],
        ],
        tags: ["销售明细", "结构化字段", "可统计"],
      },
      {
        id: 3,
        title: "切片3",
        meta: "Sheet：风险备注 · 第 4-12 行",
        status: "已启用",
        summary: "该切片包含批注内容：西南调峰项目因并网验收延期，预计上线时间从 2026-06 调整到 2026-08。隐藏列“风险等级”已解析为高。",
        excelRows: [
          ["项目", "风险等级", "批注", "预计上线"],
          ["西南调峰项目", "高", "并网验收延期", "2026-08"],
          ["海外储能样板", "中", "汇率波动需复核", "2026-07"],
        ],
        excelImages: [
          {
            kind: "deck",
            title: "风险备注截图",
            source: "Sheet：风险备注 / 锚点：E4:G10 / 附近行：第 4-12 行",
            ocr: "高风险、验收延期、责任人周宁、上线调整至 2026-08",
            summary: "该截图来自工作表内嵌图片，系统保留原图并抽取 OCR 文本，用于补充批注和隐藏列信息。",
          },
        ],
        tags: ["批注", "隐藏列", "风险"],
      },
    ];
  }
  if (mode === "ppt") {
    return [
      {
        id: 1,
        title: "切片1",
        meta: "Slide 1 · 封面",
        status: "已启用",
        summary: "储能产品路演材料。页面标题：全场景储能解决方案。OCR 识别：安全、高效、可扩展。备注：本页用于建立产品定位。",
        tags: ["Slide 1", "OCR", "封面"],
        imageKind: "slide",
      },
      {
        id: 2,
        title: "切片2",
        meta: "Slide 5 · 产品核心优势",
        status: "已启用",
        summary: "产品核心优势包括成本更低、部署更快、支持私有化和智能调度。备注强调差异化能力，图表显示客户续费率从 72% 提升到 86%。",
        tags: ["Slide 5", "图表数据", "备注"],
        chart: ["续费率 72% → 86%", "部署周期 21 天 → 12 天", "运维成本 -18%"],
        imageKind: "deck",
      },
      {
        id: 3,
        title: "切片3",
        meta: "Slide 8 · 私有化部署流程",
        status: "已启用",
        summary: "页面包含流程图：需求评估、环境准备、节点部署、模型接入、验收上线。图片 OCR 已抽取流程节点，可用于问答召回。",
        tags: ["Slide 8", "流程图", "图片OCR"],
        imageKind: "diagram",
      },
    ];
  }
  return [
    {
      id: 1,
      title: "切片1",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策 最后，带上钱和轻松愉悦的心情，少看负面新闻听腻自己，少贪便宜来坑自己，出游是为了找快乐，不是找罪受。",
      tags: ["高原", "防晒", "旅行"],
    },
    {
      id: 2,
      title: "切片2",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策 最后，带上钱和轻松愉悦的心情。",
      images: ["landscape", "zoom", "water"],
      tags: ["证件", "出行", "优惠"],
    },
    {
      id: 3,
      title: "切片3",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策。",
      tags: ["身份证", "学生证"],
    },
    {
      id: 4,
      title: "切片4",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策 最后，带上钱和轻松愉悦的心情，少看负面新闻听腻自己，少看细致攻略折磨自己，少贪便宜来坑自己，出游是为了找快乐，不是找罪受。",
      tags: ["美国制裁", "俄罗斯", "出游"],
    },
    {
      id: 5,
      title: "切片5",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策 最后，带上钱和轻松愉悦的心情。",
      tags: ["旅行", "提醒"],
    },
  ];
}

function renderDocSlicePage() {
  const doc = activeSliceDoc();
  if (!doc) return "";
  const view = state.docManagement.sliceView;
  const mode = sliceModeForDoc(doc);
  const slices = getDocSliceItems(doc);
  const activeSlice = slices.find((item) => item.id === view.activeSlice) || slices[0];
  return `
    <section class="doc-slice-page ${mode}">
      <div class="doc-slice-card">
        <div class="doc-slice-titlebar">
          <button class="doc-slice-back" data-handler="${registerHandler({ type: "closeDocSlices" })}" aria-label="返回文档管理">${icon("chevron", "doc-slice-back-icon")}</button>
          <span class="ellipsis">${escapeHtml(doc.name.replace(/\.[^.]+$/, ""))}</span>
        </div>
        <div class="doc-slice-content">
          <section class="doc-source-panel">
            <div class="slice-panel-head">
              <span>原始文档预览</span>
              <span class="slice-zoom">－ 100% ＋</span>
            </div>
            ${renderDocSourcePreview(doc, activeSlice)}
          </section>
          <section class="doc-segment-panel">
            <div class="slice-panel-head right">
              <label class="slice-head-check">${renderCell(checkbox({}))}<span>切片 ${slices.length} 个</span></label>
              <div class="slice-head-actions">
                <button disabled>批量启用</button>
                <button disabled>批量禁用</button>
                <button>请选择 ${icon("filterChevron", "slice-select-icon")}</button>
                <label><input placeholder="请选择任务执行人" />${icon("filterSearch", "slice-search-icon")}</label>
              </div>
            </div>
            <div class="doc-slice-list">
              ${slices.map((slice) => renderSliceListCard(slice, mode, view.activeSlice === slice.id)).join("")}
            </div>
            ${renderPager(pager("20", "10条/页", [1, 2, 3, 4]))}
          </section>
        </div>
      </div>
      ${view.imageViewer ? renderSliceImageViewer(view.imageViewer) : ""}
      ${view.editing ? renderSliceEditDrawer(doc, activeSlice, view) : ""}
    </section>
  `;
}

function renderDocSourcePreview(doc, activeSlice) {
  const mode = sliceModeForDoc(doc);
  if (mode === "excel") {
    return `
      <div class="doc-source-canvas excel">
        <div class="excel-sheet-tabs"><span class="active">项目总览</span><span>销售明细</span><span>风险备注</span></div>
        <div class="excel-grid-preview">
          ${["A", "B", "C", "D", "E", "F"].map((head) => `<b>${head}</b>`).join("")}
          ${activeSlice.excelRows.map((row) => row.map((cell) => `<span>${escapeHtml(cell)}</span>`).join("")).join("")}
          ${Array.from({ length: 24 }, (_, index) => `<span class="${index % 6 === 0 ? "row-head" : ""}">${index % 6 === 0 ? index / 6 + 4 : ""}</span>`).join("")}
        </div>
        ${activeSlice.excelImages?.length ? renderExcelSourceImages(activeSlice) : ""}
      </div>
    `;
  }
  if (mode === "ppt") {
    return `
      <div class="doc-source-canvas ppt">
        <div class="ppt-preview-slide">
          <div class="ppt-sidebar-preview"></div>
          <div class="ppt-slide-main">
            <span class="ppt-kicker">ENERGY STORAGE</span>
            <h3>${escapeHtml(activeSlice.title.replace(/^切片\d+\s*/, ""))}</h3>
            <p>${escapeHtml(activeSlice.summary.slice(0, 78))}...</p>
            <div class="ppt-chart-bars"><span></span><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <div class="doc-source-canvas paper">
      <div class="paper-doc">
        <div class="paper-header-line"><span>应用 支撑基础平台项目</span><em>【UI设计说明书】</em></div>
        <h3>版本说明</h3>
        <div class="paper-doc-table">
          ${["版本/状态", "作者", "参与者", "日期 日期", "起止 日期", "备注", "V1.0", "杨文逸", "大大", "翟晓晓", "2020.12.24", "起草"].map((item) => `<span>${item}</span>`).join("")}
          ${Array.from({ length: 30 }, () => "<span></span>").join("")}
        </div>
      </div>
    </div>
  `;
}

function renderExcelSourceImages(slice) {
  return `
    <div class="excel-source-images">
      ${slice.excelImages.map((item) => `
        <div class="excel-source-image">
          <span class="excel-source-anchor">图片对象 · ${escapeHtml(item.source.split(" / ")[1] || "Sheet锚点")}</span>
          <div class="excel-source-picture">${sampleImageThumb(item.kind || "diagram")}</div>
          <p>${escapeHtml(item.title)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSliceListCard(slice, mode, active) {
  const enriched = mode === "excel" ? renderExcelSliceDetail(slice) : mode === "ppt" ? renderPptSliceDetail(slice) : renderTextSliceDetail(slice);
  return `
    <article class="doc-slice-item ${active ? "active" : ""} ${mode}" data-handler="${registerHandler({ type: "selectDocSlice", id: slice.id })}">
      <div class="slice-item-top">
        <label>${renderCell(checkbox({}))}<strong>${escapeHtml(slice.title)}</strong><em>${escapeHtml(slice.meta)}</em></label>
        <span class="slice-enabled"><i></i>${escapeHtml(slice.status)}</span>
      </div>
      <p>${escapeHtml(slice.summary)}</p>
      ${enriched}
      ${active ? `
        <div class="slice-hover-actions">
          <button data-handler="${registerHandler({ type: "editDocSlice", id: slice.id })}">${icon("rowMore", "slice-action-icon")} 编辑</button>
          <button data-handler="${registerHandler({ type: "noop" })}">${icon("fullscreen", "slice-action-icon")} 展开</button>
          <button class="doc-op-switch on" data-handler="${registerHandler({ type: "noop" })}" aria-label="启用切片"><span class="doc-op-switch-knob"></span></button>
        </div>
      ` : ""}
    </article>
  `;
}

function renderTextSliceDetail(slice) {
  if (!slice.images?.length) return "";
  return `
    <div class="slice-image-strip">
      ${slice.images.map((kind, index) => `
        <button class="slice-image-thumb" data-handler="${registerHandler({ type: "openSliceImage", image: kind })}" aria-label="查看图片${index + 1}">
          ${sampleImageThumb(kind)}
          ${index === 1 ? `<span class="slice-thumb-mask">${icon("search", "slice-thumb-search")}</span>` : ""}
        </button>
      `).join("")}
    </div>
  `;
}

function renderExcelSliceDetail(slice) {
  return `
    <div class="excel-slice-table">
      ${slice.excelRows.map((row, index) => row.map((cell) => `<span class="${index === 0 ? "head" : ""}">${escapeHtml(cell)}</span>`).join("")).join("")}
    </div>
    ${renderExcelImageExtraction(slice)}
    <div class="slice-tag-row">${slice.tags.map((tagText) => `<span>${escapeHtml(tagText)}</span>`).join("")}</div>
  `;
}

function renderExcelImageExtraction(slice) {
  if (!slice.excelImages?.length) return "";
  return `
    <div class="excel-image-extract">
      <div class="excel-image-title">图片提取 <em>${slice.excelImages.length} 张</em></div>
      ${slice.excelImages.map((item, index) => `
        <div class="excel-image-row">
          <button class="excel-image-thumb" data-handler="${registerHandler({ type: "openSliceImage", image: item.kind || "diagram" })}" aria-label="查看Excel图片${index + 1}">
            ${sampleImageThumb(item.kind || "diagram")}
            <span>查看原图</span>
          </button>
          <div class="excel-image-meta">
            <strong>${escapeHtml(item.title)}</strong>
            <em>${escapeHtml(item.source)}</em>
            <p><b>OCR：</b>${escapeHtml(item.ocr)}</p>
            <p><b>摘要：</b>${escapeHtml(item.summary)}</p>
            <div class="excel-image-fields">
              <span>图片OCR</span>
              <span>Sheet锚点</span>
              <span>附近行关联</span>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPptSliceDetail(slice) {
  return `
    <div class="ppt-slice-detail">
      <button class="ppt-thumb" data-handler="${registerHandler({ type: "openSliceImage", image: slice.imageKind || "slide" })}">${sampleImageThumb(slice.imageKind || "slide")}</button>
      <div>
        ${slice.chart ? `<div class="ppt-chart-list">${slice.chart.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>` : ""}
        <div class="slice-tag-row">${slice.tags.map((tagText) => `<span>${escapeHtml(tagText)}</span>`).join("")}</div>
      </div>
    </div>
  `;
}

function renderSliceImageViewer(imageKind) {
  return `
    <div class="slice-lightbox" data-handler="${registerHandler({ type: "closeSliceImage" })}">
      <div class="slice-lightbox-image" role="dialog" aria-label="查看图片">
        <img src="./assets/slice-mountain-view.jpg" alt="" />
      </div>
    </div>
  `;
}

function renderSliceEditDrawer(doc, slice, view) {
  const mode = sliceModeForDoc(doc);
  const keywords = slice.tags?.length ? slice.tags : [];
  const imageRows = editDrawerImageRows(doc, slice, mode);
  return `
    <div class="slice-edit-backdrop"></div>
    <aside class="slice-edit-drawer">
      <div class="slice-edit-head"><strong>编辑切片</strong><button data-handler="${registerHandler({ type: "closeEditSlice" })}" aria-label="关闭">${icon("close", "slice-close-icon")}</button></div>
      <div class="slice-edit-body">
        <label class="slice-edit-field">
          <span>切片</span>
          <textarea rows="9">${escapeHtml(editDrawerSliceText(doc, slice, mode))}</textarea>
        </label>
        <div class="slice-edit-block">
          <span class="slice-edit-label">关键词</span>
          <div class="edit-keyword-list">
            ${keywords.map((item) => `<span>${escapeHtml(item)} <button data-handler="${registerHandler({ type: "noop" })}">×</button></span>`).join("")}
          </div>
          <button class="add-keyword-btn" data-handler="${registerHandler({ type: "openKeywordEditor" })}">＋ 添加关键词</button>
        </div>
        <label class="slice-edit-field">
          <span>内容总结</span>
          <textarea rows="9">${escapeHtml(editDrawerSummaryText(slice, mode))}</textarea>
        </label>
        ${imageRows.length ? `<div class="slice-edit-block">
          <span class="slice-edit-label">图片提取</span>
          <div class="edit-image-list">
            ${imageRows.map((item) => `
              <div class="edit-image-row">
                <button class="edit-image-thumb" data-handler="${registerHandler({ type: "openDrawerImagePreview", image: item.image })}">
                  ${sampleImageThumb(item.image)}
                  <span>查看原图</span>
                </button>
                <textarea rows="4">${escapeHtml(`${item.title}\n${item.text}`)}</textarea>
              </div>
            `).join("")}
          </div>
        </div>` : ""}
      </div>
      <div class="slice-edit-foot">
        <button data-handler="${registerHandler({ type: "closeEditSlice" })}">取消</button>
        <button class="primary" data-handler="${registerHandler({ type: "closeEditSlice" })}">保存</button>
      </div>
    </aside>
    ${view.drawerImageViewer ? renderDrawerImageFocus(view.drawerImageViewer) : ""}
    ${view.keywordEditor ? renderKeywordEditor(keywords) : ""}
  `;
}

function editDrawerSliceText(doc, slice, mode) {
  const lines = [
    doc.name,
    `${slice.title} ${slice.meta}`,
    slice.summary,
  ];
  if (mode === "excel") {
    lines.push(
      "表格内容",
      ...slice.excelRows.map((row) => row.join(" / ")),
    );
    if (slice.excelImages?.length) {
      lines.push(
        "图片提取",
        ...slice.excelImages.map((item) => `${item.title}：${item.ocr}`),
      );
    }
  }
  if (mode === "ppt") {
    if (slice.chart?.length) lines.push("图表数据", ...slice.chart);
    lines.push(`页面标签：${(slice.tags || []).join("、")}`);
  }
  return lines.filter(Boolean).join("\n");
}

function editDrawerSummaryText(slice, mode) {
  if (mode === "excel") {
    const imageNote = slice.excelImages?.length ? `\n图片摘要：${slice.excelImages.map((item) => item.summary).join("；")}` : "";
    return `${slice.summary}${imageNote}`;
  }
  if (mode === "ppt") {
    const chartNote = slice.chart?.length ? `\n图表摘要：${slice.chart.join("；")}` : "";
    return `${slice.summary}${chartNote}`;
  }
  return slice.summary;
}

function editDrawerImageRows(doc, slice, mode) {
  if (mode === "excel") {
    return (slice.excelImages || []).map((item) => ({
      image: item.kind || "diagram",
      title: item.title,
      text: `${item.source}\nOCR：${item.ocr}\n摘要：${item.summary}`,
    }));
  }
  if (mode === "ppt") {
    return [{
      image: slice.imageKind || "slide",
      title: `${doc.name} ${slice.meta}`,
      text: `${slice.summary}${slice.chart?.length ? `\n图表数据：${slice.chart.join("；")}` : ""}`,
    }];
  }
  return (slice.images || []).map((image, index) => ({
    image,
    title: `${doc.name} ${slice.title} 图片${index + 1}`,
    text: `${slice.summary}\n标签：${(slice.tags || []).join("、")}`,
  }));
}

function renderDrawerImageFocus(imageKind) {
  return `
    <div class="drawer-image-focus" data-handler="${registerHandler({ type: "closeDrawerImagePreview" })}">
      <div class="drawer-image-card"><img src="./assets/slice-drawer-image-large.jpg" alt="" /></div>
    </div>
  `;
}

function renderKeywordEditor(keywords = []) {
  const tags = keywords.length ? keywords : ["关键词"];
  return `
    <div class="keyword-editor-pop" role="dialog" aria-label="编辑关键词">
      <strong>关键词</strong>
      <div class="keyword-editor-tags">
        ${tags.map((item) => `<span>${escapeHtml(item)} <button data-handler="${registerHandler({ type: "noop" })}">×</button></span>`).join("")}
        <input />
      </div>
      <p>输入完后回车，即可创建关键词，点击空白区域退出关键词编辑模式</p>
    </div>
  `;
}

function docStatusMeta(doc) {
  if (doc.ops === "queued") {
    return {
      tone: "queued",
      label: "排队中",
      detail: `队列第 ${doc.queuePosition || 1} 位 / 共 ${doc.queueTotal || 1} 位`,
    };
  }
  if (doc.ops === "parsing" || doc.ops === "enhancing") {
    const label = doc.ops === "parsing" ? "文件解析中" : "文件增强中";
    return {
      tone: doc.ops,
      label: `${label} | ${doc.progress || 0}%`,
      detail: label,
    };
  }
  if (doc.ops === "failed") {
    return {
      tone: "failed",
      label: "处理失败",
      detail: "未生成可用切片",
    };
  }
  return {
    tone: "done",
    label: "处理完成",
    detail: `${doc.slices || 0} 个切片可用`,
  };
}

function docRowActions(item) {
  const menuOpen = state.docManagement.rowMenu === item.id;
  return {
    type: "docActions",
    item,
    menuOpen,
  };
}

function renderDocUploadPage() {
  const view = state.docManagement.uploadView;
  const canGoNext = view.step !== 1 || (view.files.length > 0 && view.files.every((file) => file.status === "done"));
  return `
    <section class="page-panel upload-page">
      <div class="upload-page-head">
        <button class="config-back-btn" data-handler="${registerHandler({ type: "closeDocUpload" })}" aria-label="返回文档管理">
          ${icon("calendarPrev", "wj-icon config-back-icon")}
        </button>
        <div class="section-title upload-page-title">上传文档</div>
      </div>
      <div class="upload-page-body">
        ${renderUploadStepbar(view.step)}
        <div class="upload-step-scroll upload-step-scroll-${view.step}">
          ${view.step === 1 ? renderUploadFilesStep(view) : ""}
          ${view.step === 2 ? renderUploadProcessStep(view) : ""}
          ${view.step === 3 ? renderUploadPreviewStep(view) : ""}
        </div>
      </div>
      <div class="upload-page-foot">
        <button class="btn" data-handler="${registerHandler({ type: "closeDocUpload" })}">取消</button>
        ${view.step > 1 ? `<button class="btn" data-handler="${registerHandler({ type: "docUploadPrev" })}">上一步</button>` : ""}
        ${view.step < 3
          ? `<button class="btn primary" data-upload-next ${canGoNext ? "" : "disabled"} data-handler="${registerHandler({ type: "docUploadNext" })}">下一步</button>`
          : `<button class="btn primary" data-handler="${registerHandler({ type: "docUploadConfirm" })}">入库</button>`}
      </div>
    </section>
  `;
}

function renderUploadStepbar(step) {
  const labels = ["上传文件", "文件处理", "切片预览"];
  return `
    <div class="upload-stepbar">
      ${labels.map((label, index) => {
        const number = index + 1;
        const done = step > number;
        const active = step === number;
        return `
          <div class="upload-step ${active ? "active" : ""} ${done ? "done" : ""}">
            <span class="upload-step-num">${done ? "✓" : number}</span>
            <span>${label}</span>
          </div>
          ${number < labels.length ? `<span class="upload-step-line ${step > number ? "done" : ""} ${step === number ? "active" : ""}"></span>` : ""}
        `;
      }).join("")}
    </div>
  `;
}

function renderUploadFilesStep(view) {
  return `
    <div class="upload-step-one">
      <div class="upload-section-label">上传文件</div>
      <label class="upload-dropzone" for="upload-file-input">
        <input id="upload-file-input" class="upload-file-input" type="file" multiple accept=".pdf,.doc,.docx,.txt,.md,.xls,.xlsx,.csv,.ppt,.pptx,.html,.htm" />
        ${icon("uploadBox", "upload-box-icon", { width: "42px", height: "42px" })}
        <div class="upload-drop-title">将文件拖到此处，或点击批量上传</div>
        <div class="upload-drop-sub">一次最多上传 ${MAX_UPLOAD_FILES} 个文件；支持 pdf、docx、doc、txt、md、xlsx、xls、csv、pptx、ppt、html、htm，单个文档不超过100M</div>
      </label>
      <div class="uploaded-head">
        <span>已传文件（${view.files.length}/${MAX_UPLOAD_FILES}）</span>
        ${view.files.length >= MAX_UPLOAD_FILES ? `<em>已达到本次上传上限</em>` : `<em>还可添加 ${MAX_UPLOAD_FILES - view.files.length} 个</em>`}
      </div>
      <div class="uploaded-list">
        ${view.files.length ? view.files.map((file) => renderUploadedFile(file)).join("") : `<div class="uploaded-empty">暂无已上传文件</div>`}
      </div>
    </div>
  `;
}

function renderUploadedFile(file) {
  const tone = uploadFormatTone(file.format);
  const statusIcon = file.status === "uploading"
    ? `<span class="uploaded-percent">${file.progress}%</span>`
    : `
      <span class="uploaded-check upload-row-check">${icon("check", "wj-icon")}</span>
      <button class="uploaded-delete upload-row-delete" data-handler="${registerHandler({ type: "deleteUploadedFile", id: file.id })}" aria-label="删除文件">${icon("trash", "wj-icon")}</button>
    `;
  return `
    <div class="uploaded-file ${file.status}" data-upload-file-id="${file.id}">
      <div class="uploaded-progress" data-upload-progress="${file.id}" style="width:${file.status === "uploading" ? file.progress : 100}%"></div>
      <div class="uploaded-file-main">
        <span class="file-type-icon ${tone}">${icon(fileIconName(file.format), "wj-icon")}</span>
        <span>
          <strong>${escapeHtml(file.name)}</strong>
          <em>${escapeHtml(file.size)}</em>
        </span>
      </div>
      <div class="uploaded-status" data-upload-status="${file.id}">${statusIcon}</div>
    </div>
  `;
}

function renderUploadProcessStep(view) {
  return `
    <div class="upload-process-shell ${view.mode === "scenario" ? "scenario" : "split"}">
      <div class="upload-section-label">选择处理模式</div>
      <div class="upload-mode-grid">
        ${renderUploadModeCard("split", "分步骤配置模式", "自由组合解析、分段与增强策略", view.mode === "split")}
        ${renderUploadModeCard("scenario", "场景化综合模式", "一键应用特定场景的最佳实践", view.mode === "scenario")}
      </div>
      ${view.mode === "split" ? renderSplitProcessConfig(view) : renderScenarioProcessConfig(view)}
    </div>
  `;
}

function renderUploadModeCard(mode, title, desc, active) {
  return `
    <button class="upload-mode-card ${active ? "active" : ""}" data-handler="${registerHandler({ type: "setUploadMode", mode })}">
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <i></i>
    </button>
  `;
}

function renderSplitProcessConfig(view) {
  return `
    <div class="config-section">
      <div class="config-section-title">解析算法<span class="required">*</span></div>
      <div class="upload-algorithm-grid">
        ${getUploadedFormatItems(view).map(({ format, tone }) => renderUploadAlgorithmCard(format, getFormatAlgorithmValue(format), tone)).join("")}
      </div>
    </div>
    ${renderUploadFormatOptimization(view)}
    <div class="config-section">
      <div class="config-section-title">分段策略</div>
      <div class="upload-strategy-list">
        ${renderUploadStrategy("auto", "自动分段与清洗", "系统自动识别段落换行并进行切分，适用于通用文档，无需配置参数。", "segmentAutoRobot", view.segment === "auto", "")}
        ${renderUploadStrategy("custom", "自定义分段与清洗", "手动配置正则表达式、长度限制与清洗规则", "segmentCustomControls", view.segment === "custom", renderCustomSegmentPanel(view))}
        ${renderUploadStrategy("component", "内容分段组件", "选择预置的高级切分组件处理复杂文档", "segmentComponentBlocks", view.segment === "component", renderSegmentComponentPanel())}
      </div>
    </div>
    <div class="config-section">
      <div class="config-section-title">增强策略</div>
      <div class="upload-enhance-list">
        ${renderUploadEnhance("table", "表格解析", "识别文档中的表格并转换为Markdown/HTML格式", "默认模型")}
        ${renderUploadEnhance("image", "图片解析", "解析文档中插图内容", "Tesseract")}
        ${renderUploadEnhance("keyword", "关键词提取", "自动提取每段文本的核心关键词", "默认模型")}
        ${renderUploadEnhance("summary", "内容总结", "对每个切片进行对应的内容提取总结", "默认模型")}
      </div>
    </div>
  `;
}

function renderUploadFormatOptimization(view) {
  const mode = uploadPreviewMode(view);
  if (mode === "excel") {
    const items = [
      ["Sheet 识别", "识别多 Sheet、隐藏 Sheet，并写入切片元数据"],
      ["复杂表头", "自动识别跨行表头、合并单元格和字段层级"],
      ["行块切片", "按 Sheet + 表头 + N 行数据生成表格切片"],
      ["公式结果", "保留公式表达式和计算结果，支持问答引用"],
      ["批注/隐藏列", "解析批注、隐藏行列，并在来源中标识"],
      ["结构化索引", "为字段名、字段值、Sheet、行号建立可过滤元数据"],
    ];
    return `
      <div class="config-section upload-format-config excel">
        <div class="config-section-title">Excel 专属处理</div>
        <div class="upload-format-config-grid">
          ${items.map(([title, desc]) => renderUploadFormatConfigItem(title, desc, true)).join("")}
        </div>
        <div class="upload-format-note">切片来源将展示为：文件名 / Sheet 名 / 行号范围，适合字段查询、条件筛选和汇总统计。</div>
      </div>
    `;
  }
  if (mode === "ppt") {
    const items = [
      ["按 Slide 切片", "每页幻灯片生成独立切片，保留页码和标题"],
      ["备注解析", "读取演讲者备注并合并到召回内容"],
      ["图片 OCR", "识别图片型页面中的文字和流程节点"],
      ["图表数据", "提取图表标题、图例、数据标签和趋势摘要"],
      ["表格解析", "识别 Slide 中的表格内容并保留结构"],
      ["缩略图", "生成 Slide 缩略图，用于切片预览和人工核验"],
    ];
    return `
      <div class="config-section upload-format-config ppt">
        <div class="config-section-title">PPT 专属处理</div>
        <div class="upload-format-config-grid">
          ${items.map(([title, desc]) => renderUploadFormatConfigItem(title, desc, true)).join("")}
        </div>
        <div class="upload-format-note">切片来源将展示为：文件名 / Slide 页码，适合页面内容查询、主题总结和图片文字召回。</div>
      </div>
    `;
  }
  return "";
}

function renderUploadFormatConfigItem(title, desc, checked) {
  return `
    <button class="upload-format-config-item" data-handler="${registerHandler({ type: "noop" })}">
      ${renderCell(checkbox({ checked }))}
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
    </button>
  `;
}

function renderUploadAlgorithmCard(format, value, tone) {
  return `
    <button class="upload-algorithm-card" data-handler="${registerHandler({ type: "cycleFormatAlgorithm", format })}">
      <span class="file-type-icon ${tone}">${icon(fileIconName(format), "wj-icon")}</span>
      <strong>${format}</strong>
      <span>${value}</span>
      ${icon("filterChevron", "wj-icon algorithm-chevron")}
    </button>
  `;
}

function renderUploadStrategy(key, title, desc, iconName, active, extra) {
  return `
    <div class="upload-strategy-card ${active ? "active" : ""}">
      <button class="upload-strategy-head" data-handler="${registerHandler({ type: "setUploadSegment", segment: key })}">
        <span class="strategy-icon ${key}">${icon(iconName, "wj-icon", { width: "40px", height: "40px", preserveColor: true })}</span>
        <span>
          <strong>${title}</strong>
          <em>${desc}</em>
        </span>
      </button>
      ${active ? extra : ""}
    </div>
  `;
}

function renderCustomSegmentPanel(view) {
  return `
    <div class="custom-segment-panel">
      <label><span>分段标识符</span><input value="5" /></label>
      <label><span>分段最大长度</span><input type="number" value="5" /></label>
      <label><span>分段重叠长度</span><input type="number" value="5" /></label>
      <div class="custom-clean-title">文本预处理规则</div>
      <button class="custom-check" data-handler="${registerHandler({ type: "toggleUploadCheck", key: "cleanSpaces" })}">
        ${renderCell(checkbox({ checked: view.checks.cleanSpaces }))}
        <span>替换掉连续的空格、换行符和制表符</span>
      </button>
      <button class="custom-check" data-handler="${registerHandler({ type: "toggleUploadCheck", key: "removeLinks" })}">
        ${renderCell(checkbox({ checked: view.checks.removeLinks }))}
        <span>删除所有URL和电子邮件地址</span>
      </button>
    </div>
  `;
}

function renderSegmentComponentPanel() {
  return `
    <div class="segment-component-panel">
      <div class="upload-section-label">切片组件</div>
      <button class="segment-select" data-handler="${registerHandler({ type: "noop" })}">
        <span>请选择切片组件</span>
        ${icon("filterChevron", "wj-icon")}
      </button>
    </div>
  `;
}

function renderUploadEnhance(key, title, desc, model) {
  const view = state.docManagement.uploadView;
  return `
    <div class="upload-enhance-row">
      <button class="enhance-check" data-handler="${registerHandler({ type: "toggleUploadCheck", key })}">
        ${renderCell(checkbox({ checked: view.checks[key] }))}
      </button>
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <button class="upload-select-lite" data-handler="${registerHandler({ type: "noop" })}">
        ${model}
        ${icon("filterChevron", "wj-icon")}
      </button>
    </div>
  `;
}

function renderScenarioProcessConfig(view) {
  const categories = ["全部", "金融类", "法律类", "人事类", "通用/其他"];
  const components = ["金融研报分析 PRO", "法律合同审查", "简历智能解析", "增值税发票识别"];
  return `
    <div class="config-section scenario-components">
      <div class="config-section-title">选择综合组件<span class="required">*</span></div>
      <div class="scenario-tabs">
        ${categories.map((category) => `<button class="${category === view.category ? "active" : ""}" data-handler="${registerHandler({ type: "setUploadCategory", category })}">${category}</button>`).join("")}
      </div>
      <div class="scenario-grid">
        ${Array.from({ length: 20 }, (_, index) => {
          const name = components[index % components.length];
          return `<button class="scenario-card ${name === view.component ? "active" : ""}" data-handler="${registerHandler({ type: "setUploadComponent", component: name })}">${name}</button>`;
        }).join("")}
      </div>
      <div class="scenario-count">共 20 个组件 <span>当前选择：<b>${escapeHtml(view.component)}</b></span></div>
      <div class="scenario-detail">
        <div class="scenario-detail-title">${icon("info", "wj-icon")}能力详情</div>
        <strong>${escapeHtml(view.component)}</strong>
        <p>自动识别甲乙方主题，提取关键条款，检查合规性风险点。</p>
        <em>核心能力：</em>
        <p class="scenario-ok">${icon("check", "wj-icon")}提取合同关键要素：金额、期限、违约责任等。</p>
        <p class="scenario-ok">${icon("check", "wj-icon")}自动高亮模糊条款与潜在法律风险。</p>
      </div>
    </div>
  `;
}

function renderUploadPreviewStep(view) {
  const mode = uploadPreviewMode(view);
  return `
    <div class="upload-preview-shell ${view.showFileList ? "" : "collapsed-list"} ${mode !== "text" ? `format-${mode}` : ""}">
      ${!view.showFileList ? `<button class="upload-preview-float-toggle" data-handler="${registerHandler({ type: "toggleUploadFileList" })}" aria-label="展开文件列表">${icon("collapseList", "wj-icon")}</button>` : ""}
      ${view.showFileList ? renderUploadPreviewFileList(view) : ""}
      ${renderUploadOriginalPreview(view)}
      ${renderUploadSlicePreview(view)}
    </div>
  `;
}

function renderUploadPreviewFileList(view) {
  const files = view.files?.length
    ? view.files
    : [
        { id: "preview-1", name: "走查问题归纳" },
        { id: "preview-2", name: "文件名称文件名称文件..." },
      ];
  return `
    <aside class="upload-preview-files">
      <div class="upload-preview-head">
        <span>文件列表</span>
        <em>点击文件查看对应切片</em>
        <button class="upload-preview-toggle" data-handler="${registerHandler({ type: "toggleUploadFileList" })}" aria-label="收起文件列表">${icon("collapseList", "wj-icon")}</button>
      </div>
      <div class="upload-preview-file-items">
        ${files.map((file, index) => {
          const format = file.format || normalizeUploadedFormat(file.name);
          const fileMode = uploadPreviewMode({ files: [file] });
          const active = getActiveUploadFile(view)?.id === file.id || (!getActiveUploadFile(view) && index === 0);
          return `
          <button class="upload-preview-file ${active ? "active" : ""} ${fileMode}" data-handler="${registerHandler({ type: "selectUploadPreviewFile", id: file.id })}">
            <span class="file-type-icon ${uploadFormatTone(format)}">${icon(fileIconName(format), "wj-icon")}</span>
            <span>${escapeHtml(file.name)}</span>
            <em>${fileMode === "excel" ? "表格切片" : fileMode === "ppt" ? "Slide切片" : "文本切片"}</em>
          </button>
        `; }).join("")}
      </div>
    </aside>
  `;
}

function renderUploadOriginalPreview(view) {
  const mode = uploadPreviewMode(view);
  const doc = uploadPreviewDoc(view);
  const slices = getDocSliceItems(doc);
  const activeSlice = slices[view.activeSlice] || slices[0];
  if (mode === "excel") return renderUploadExcelOriginalPreview(activeSlice);
  if (mode === "ppt") return renderUploadPptOriginalPreview(activeSlice);
  return `
    <section class="upload-original-panel">
      <div class="upload-preview-head">
        <span>原始文档预览</span>
        <span class="zoom-tools">－ <b>100%</b> ＋</span>
      </div>
      <div class="upload-paper-canvas">
        <div class="paper-page-real">
          <div class="paper-rule top"></div>
          <div class="paper-caption">版本说明</div>
          <div class="paper-grid-table">
            ${Array.from({ length: 36 }, (_, index) => `<span>${paperCellText(index)}</span>`).join("")}
          </div>
          <div class="paper-rule bottom"></div>
        </div>
      </div>
    </section>
  `;
}

function renderUploadExcelOriginalPreview(activeSlice) {
  return `
    <section class="upload-original-panel">
      <div class="upload-preview-head">
        <span>Excel 原表预览</span>
        <span class="zoom-tools">Sheet：${escapeHtml((activeSlice.meta || "").split("·")[0].replace("Sheet：", "").trim() || "项目总览")}</span>
      </div>
      <div class="upload-format-canvas excel">
        <div class="excel-sheet-tabs"><span class="active">项目总览</span><span>销售明细</span><span>风险备注</span></div>
        <div class="excel-grid-preview upload-excel-grid">
          ${["A", "B", "C", "D", "E", "F"].map((head) => `<b>${head}</b>`).join("")}
          ${activeSlice.excelRows.map((row) => row.map((cell) => `<span>${escapeHtml(cell)}</span>`).join("")).join("")}
          ${Array.from({ length: 18 }, (_, index) => `<span>${index % 6 === 0 ? index / 6 + 4 : ""}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderUploadPptOriginalPreview(activeSlice) {
  return `
    <section class="upload-original-panel">
      <div class="upload-preview-head">
        <span>PPT 页面预览</span>
        <span class="zoom-tools">${escapeHtml(activeSlice.meta || "Slide 1")}</span>
      </div>
      <div class="upload-format-canvas ppt">
        <div class="ppt-preview-slide upload-ppt-slide">
          <div class="ppt-sidebar-preview"></div>
          <div class="ppt-slide-main">
            <span class="ppt-kicker">ENERGY STORAGE</span>
            <h3>${escapeHtml((activeSlice.meta || "Slide").split("·").pop().trim())}</h3>
            <p>${escapeHtml(activeSlice.summary.slice(0, 88))}...</p>
            <div class="ppt-chart-bars"><span></span><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderUploadSlicePreview(view) {
  const mode = uploadPreviewMode(view);
  if (mode === "excel") return renderUploadExcelSlicePreview(view);
  if (mode === "ppt") return renderUploadPptSlicePreview(view);
  const slices = [
    "容器云 4.0 UI走查问题归纳\n1.模块间距问题（问题出现频率：高）\n主要体现在模块间的对齐，模块与模块间的问题过小等",
    "2.字体样式问题（问题出现频率：高）\n主要体现在字体大小，字体颜色，title或重点文字没有加粗",
    "版本/状态 作者 参与者 起止日期 备注\nV1.0 杨文逸 2020.12.24 起草",
    "2.字体样式问题（问题出现频率：高）\n主要体现在字体大小，字体颜色，title或重点文字没有加粗",
    "2.字体样式问题（问题出现频率：高）\n主要体现在字体大小，字体颜色，title或重点文字没有加粗",
  ];
  return `
    <section class="upload-slice-panel">
      <div class="upload-preview-head"><span>分段预览</span></div>
      <div class="upload-slice-list">
        ${slices.map((text, index) => `
          <button class="upload-slice-card ${view.activeSlice === index ? "active" : ""}" data-handler="${registerHandler({ type: "selectUploadSlice", index })}">
            ${index === 2 ? renderMiniTableSlice() : escapeHtml(text).replaceAll("\n", "<br />")}
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderUploadExcelSlicePreview(view) {
  const doc = uploadPreviewDoc(view);
  const slices = getDocSliceItems(doc);
  return `
    <section class="upload-slice-panel upload-format-slice-panel excel">
      <div class="upload-preview-head"><span>Excel 表格切片预览</span><em>Sheet / 行号 / 字段值</em></div>
      <div class="upload-slice-list">
        ${slices.map((slice, index) => `
          <button class="upload-format-slice-card excel ${view.activeSlice === index ? "active" : ""}" data-handler="${registerHandler({ type: "selectUploadSlice", index })}">
            <div class="upload-format-slice-head"><strong>${escapeHtml(slice.title)}</strong><span>${escapeHtml(slice.meta)}</span></div>
            <p>${escapeHtml(slice.summary)}</p>
            ${renderExcelSliceDetail(slice)}
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderUploadPptSlicePreview(view) {
  const doc = uploadPreviewDoc(view);
  const slices = getDocSliceItems(doc);
  return `
    <section class="upload-slice-panel upload-format-slice-panel ppt">
      <div class="upload-preview-head"><span>PPT Slide 切片预览</span><em>缩略图 / OCR / 备注 / 图表</em></div>
      <div class="upload-slice-list">
        ${slices.map((slice, index) => `
          <button class="upload-format-slice-card ppt ${view.activeSlice === index ? "active" : ""}" data-handler="${registerHandler({ type: "selectUploadSlice", index })}">
            <div class="upload-format-slice-head"><strong>${escapeHtml(slice.title)}</strong><span>${escapeHtml(slice.meta)}</span></div>
            <div class="upload-ppt-slice-row">
              <span class="ppt-thumb static">${sampleImageThumb(slice.imageKind || "slide")}</span>
              <p>${escapeHtml(slice.summary)}</p>
            </div>
            ${slice.chart ? `<div class="ppt-chart-list">${slice.chart.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>` : ""}
            <div class="slice-tag-row">${slice.tags.map((tagText) => `<span>${escapeHtml(tagText)}</span>`).join("")}</div>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMiniTableSlice() {
  const heads = ["版本/状态", "作者", "参与者", "起止日期", "备注"];
  return `<div class="mini-table-slice">${heads.map((item) => `<b>${item}</b>`).join("")}${["V1.0", "杨文逸", "", "2020.12 .24", "起草"].map((item) => `<span>${item}</span>`).join("")}${Array.from({ length: 10 }, () => "<span></span>").join("")}</div>`;
}

function paperCellText(index) {
  const cells = ["版本/状态", "作者", "参与者", "日期日期", "起止日期", "备注", "V1.0", "杨文逸", "大大", "疙啰啰", "2020.12.24", "起草"];
  return cells[index] || "";
}

function fileIconName(format) {
  if (format === "PDF") return "pdfFile";
  if (format === "PPT" || format === "PPTX") return "pptFile";
  if (format === "XLS" || format === "XLSX" || format === "CSV") return "excelFile";
  if (format === "HTML" || format === "HTM") return "htmlFile";
  if (format === "MD") return "mdFile";
  if (format === "TXT") return "txtFile";
  return "wordFile";
}

function uploadFormatTone(format) {
  const normalized = String(format || "").toLowerCase();
  if (normalized === "pdf") return "pdf";
  if (normalized === "ppt" || normalized === "pptx") return "ppt";
  if (normalized === "xls" || normalized === "xlsx" || normalized === "csv") return "xlsx";
  if (normalized === "html" || normalized === "htm") return "html";
  if (normalized === "txt") return "txt";
  if (normalized === "md") return "md";
  return "docx";
}

function normalizeUploadedFormat(fileName) {
  const ext = (String(fileName || "").split(".").pop() || "docx").toUpperCase();
  if (ext === "WORD") return "DOCX";
  if (ext === "HTM") return "HTM";
  return ext;
}

function getSupportedFormatItem(format) {
  const normalized = String(format || "").toUpperCase();
  return SUPPORTED_DOC_FORMATS.find((item) => item.format === normalized);
}

function getUploadedFormatItems(view) {
  const seen = new Set();
  return (view.files || [])
    .filter((file) => file.status === "done")
    .map((file) => getSupportedFormatItem(file.format))
    .filter(Boolean)
    .filter((item) => {
      if (seen.has(item.format)) return false;
      seen.add(item.format);
      return true;
    });
}

function getActiveUploadFile(view) {
  const files = view?.files || [];
  if (!files.length) return null;
  return files.find((item) => item.id === view.activeUploadFileId) || files.find((item) => item.status === "done") || files[0];
}

function getPrimaryUploadedFormat(view) {
  const file = getActiveUploadFile(view);
  return String(file?.format || "").toUpperCase();
}

function uploadPreviewMode(view) {
  const format = getPrimaryUploadedFormat(view);
  if (isSpreadsheetFormat(format)) return "excel";
  if (isPresentationFormat(format)) return "ppt";
  return "text";
}

function uploadPreviewDoc(view) {
  const format = getPrimaryUploadedFormat(view);
  const file = getActiveUploadFile(view);
  if (isSpreadsheetFormat(format)) return { format, name: file?.name || "2026储能项目经营数据表.xlsx" };
  if (isPresentationFormat(format)) return { format, name: file?.name || "储能产品路演材料.pptx" };
  return { format: format || "PDF", name: file?.name || "固态电池行业研究报告.pdf" };
}

function appendUploadedFiles(files) {
  const view = state.docManagement.uploadView;
  if (!view || files.length === 0) return;
  const remainingSlots = Math.max(0, MAX_UPLOAD_FILES - view.files.length);
  if (!remainingSlots) return;
  const uploadFiles = files
    .slice(0, remainingSlots)
    .map((file, index) => {
      const format = normalizeUploadedFormat(file.name);
      const supported = getSupportedFormatItem(format);
      if (!supported) return null;
      return {
        id: `local-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
        name: file.name,
        size: formatFileSize(file.size),
        format,
        status: "uploading",
        progress: 12,
      };
    })
    .filter(Boolean);
  if (!uploadFiles.length) return;
  view.files = [...view.files, ...uploadFiles].slice(0, MAX_UPLOAD_FILES);
  if (!view.activeUploadFileId) view.activeUploadFileId = uploadFiles[0].id;
  view.activeSlice = 0;
  render();
  uploadFiles.forEach((file) => startUploadProgress(file.id));
}

function clearUploadProgress(id) {
  const timer = uploadProgressTimers.get(id);
  if (timer) window.clearInterval(timer);
  uploadProgressTimers.delete(id);
}

function clearAllUploadProgress() {
  uploadProgressTimers.forEach((timer) => window.clearInterval(timer));
  uploadProgressTimers.clear();
}

function startUploadProgress(id) {
  clearUploadProgress(id);
  const timer = window.setInterval(() => {
    const view = state.docManagement.uploadView;
    const file = view?.files.find((item) => item.id === id);
    if (!file) {
      clearUploadProgress(id);
      return;
    }
    const nextProgress = Math.min(100, file.progress + (file.progress < 70 ? 18 : 10));
    file.progress = nextProgress;
    if (nextProgress >= 100) {
      file.status = "done";
      clearUploadProgress(id);
      updateUploadCompleteDom(file);
      return;
    }
    updateUploadProgressDom(id, nextProgress);
  }, 420);
}

function updateUploadProgressDom(id, progress) {
  const progressEl = document.querySelector(`[data-upload-progress="${CSS.escape(id)}"]`);
  const statusEl = document.querySelector(`[data-upload-status="${CSS.escape(id)}"] .uploaded-percent`);
  if (progressEl) progressEl.style.width = `${progress}%`;
  if (statusEl) statusEl.textContent = `${progress}%`;
}

function updateUploadCompleteDom(file) {
  const id = file.id;
  const row = document.querySelector(`[data-upload-file-id="${CSS.escape(id)}"]`);
  const progressEl = document.querySelector(`[data-upload-progress="${CSS.escape(id)}"]`);
  const statusEl = document.querySelector(`[data-upload-status="${CSS.escape(id)}"]`);
  const nextBtn = document.querySelector("[data-upload-next]");
  if (row) row.className = "uploaded-file done";
  if (progressEl) progressEl.style.width = "100%";
  if (statusEl) {
    statusEl.innerHTML = `
      <span class="uploaded-check upload-row-check">${icon("check", "wj-icon")}</span>
      <button class="uploaded-delete upload-row-delete" data-handler="${registerHandler({ type: "deleteUploadedFile", id })}" aria-label="删除文件">${icon("trash", "wj-icon")}</button>
    `;
  }
  const view = state.docManagement.uploadView;
  const allDone = !!view?.files.length && view.files.every((item) => item.status === "done");
  if (nextBtn) {
    if (allDone) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "");
  }
}

function formatFileSize(size) {
  if (!Number.isFinite(size)) return "0KB";
  if (size >= 1024 * 1024) return `${(size / 1024 / 1024).toFixed(2)}MB`;
  return `${(size / 1024).toFixed(2)}KB`;
}

function renderDocConfigPage() {
  const view = state.docManagement.configView;
  const docs = getDocConfigDocs();
  const isBatch = view.configMode === "batch";
  const title = isBatch ? "批量修改配置" : "修改配置";
  return `
    <section class="page-panel upload-page doc-config-page">
      <div class="upload-page-head">
        <button class="config-back-btn" data-handler="${registerHandler({ type: "closeDocConfig" })}" aria-label="返回文档管理">
          ${icon("calendarPrev", "wj-icon config-back-icon")}
        </button>
        <div class="section-title upload-page-title">${title}</div>
      </div>
      <div class="upload-page-body">
        ${renderDocConfigStepbar(view.step)}
        <div class="upload-step-scroll ${view.step === 2 ? "upload-step-scroll-3" : "upload-step-scroll-2"}">
          ${view.step === 1 ? renderUploadProcessStep(view) : renderUploadPreviewStep(view)}
        </div>
      </div>
      <div class="upload-page-foot">
        <button class="btn" data-handler="${registerHandler({ type: "closeDocConfig" })}">取消</button>
        ${view.step === 2 ? `<button class="btn" data-handler="${registerHandler({ type: "docConfigPrev" })}">上一步</button>` : ""}
        ${view.step === 1
          ? `<button class="btn primary" data-handler="${registerHandler({ type: "docConfigNext" })}">下一步</button>`
          : `<button class="btn primary" data-handler="${registerHandler({ type: "docConfigConfirm" })}">确认修改</button>`}
      </div>
    </section>
  `;
}

function renderDocConfigStepbar(step) {
  const labels = ["文件处理", "切片预览"];
  return `
    <div class="upload-stepbar config-upload-stepbar">
      ${labels.map((label, index) => {
        const number = index + 1;
        const done = step > number;
        const active = step === number;
        return `
          <div class="upload-step ${active ? "active" : ""} ${done ? "done" : ""}">
            <span class="upload-step-num">${done ? "✓" : number}</span>
            <span>${label}</span>
          </div>
          ${number < labels.length ? `<span class="upload-step-line ${step > number ? "done" : ""} ${step === number ? "active" : ""}"></span>` : ""}
        `;
      }).join("")}
    </div>
  `;
}

function renderConfigStep(index, label, current) {
  const done = current > index;
  const active = current === index;
  return `
    <div class="config-step ${active ? "active" : ""} ${done ? "done" : ""}">
      <span class="config-step-num">${done ? "✓" : index}</span>
      <span>${label}</span>
    </div>
  `;
}

function renderDocConfigForm(isBatch, docs) {
  return `
    <div class="config-form-shell">
      ${isBatch ? renderBatchSummary(docs) : renderSingleSummary(docs[0])}
      <div class="config-section">
        <div class="config-section-title">选择处理模式</div>
        <div class="config-mode-grid">
          ${renderModeCard("分步骤配置模式", "自由组合解析、分段与增强策略", true)}
          ${renderModeCard("场景化综合模式", "一键应用特定场景的最佳实践", false)}
        </div>
      </div>
      <div class="config-section">
        <div class="config-section-title">解析算法<span class="required">*</span></div>
        ${renderAlgorithmConfig(isBatch, docs)}
      </div>
      <div class="config-section">
        <div class="config-section-title">分段策略</div>
        <div class="strategy-list">
          ${renderStrategy("自动分段与清洗", "系统自动识别段落换行并切分，适用于通用文档，无需配置参数。", "A", true)}
          ${renderStrategy("自定义分段与清洗", "手动配置正则表达式、长度限制与清洗规则。", "C", false)}
          ${renderStrategy("内容分段组件", "选择预置的高级切分组件处理复杂文档。", "G", false)}
        </div>
      </div>
      <div class="config-section">
        <div class="config-section-title">增强策略</div>
        <div class="enhance-list">
          ${renderEnhance("表格解析", "识别文档中的表格并转换为 Markdown / HTML 格式", true)}
          ${renderEnhance("图片解析", "抽取图片文字与图注，补充到切片内容中", false)}
          ${renderEnhance("标题增强", "识别章节层级并将标题路径写入切片元数据", true)}
        </div>
      </div>
    </div>
  `;
}

function renderSingleSummary(doc) {
  if (!doc) return "";
  return `
    <div class="config-summary single">
      <span class="doc-format-badge ${doc.format.toLowerCase()}">${doc.format.slice(0, 1)}</span>
      <span class="ellipsis">${doc.name}</span>
      <span class="tag ${doc.ops === "failed" ? "danger" : "success"}">${doc.statusText}</span>
    </div>
  `;
}

function renderBatchSummary(docs) {
  const counts = docs.reduce((map, item) => {
    map[item.format] = (map[item.format] || 0) + 1;
    return map;
  }, {});
  return `
    <div class="config-summary batch">
      <div>
        <div class="config-summary-title">已选择文档</div>
        <div class="config-summary-sub">批量配置将对选中文档应用相同处理方式。</div>
      </div>
      <div class="config-summary-count">${docs.length}</div>
      <div class="config-summary-chips">
        ${Object.entries(counts).map(([format, count]) => `<span class="chip">${format} ${count} 个</span>`).join("")}
      </div>
    </div>
  `;
}

function renderModeCard(title, desc, active) {
  return `
    <button class="config-mode-card ${active ? "active" : ""}" data-handler="${registerHandler({ type: "noop" })}">
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <i></i>
    </button>
  `;
}

function renderAlgorithmConfig(isBatch, docs) {
  return renderAlgorithmGrid(docs);
}

function renderAlgorithmGrid(docs = []) {
  return `
    <div class="algorithm-grid">
      ${SUPPORTED_DOC_FORMATS.map(({ format, tone }) => renderAlgorithmCard(format, getFormatAlgorithmValue(format), tone)).join("")}
    </div>
  `;
}

function renderAlgorithmCard(format, value, tone) {
  return `
    <button class="algorithm-card" data-handler="${registerHandler({ type: "cycleFormatAlgorithm", format })}">
      <span class="doc-format-badge ${tone}">${format.slice(0, 1)}</span>
      <strong>${format}</strong>
      <span class="algorithm-value">${value}</span>
      ${icon("filterChevron", "wj-icon algorithm-chevron")}
    </button>
  `;
}

function renderStrategy(title, desc, mark, active) {
  return `
    <button class="strategy-card ${active ? "active" : ""}" data-handler="${registerHandler({ type: "noop" })}">
      <span class="strategy-mark">${mark}</span>
      <span class="strategy-copy">
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <i></i>
    </button>
  `;
}

function renderEnhance(title, desc, checked) {
  return `
    <button class="enhance-row" data-handler="${registerHandler({ type: "noop" })}">
      ${renderCell(checkbox({ checked }))}
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <span class="select-lite">默认模型 ${icon("filterChevron", "wj-icon tiny-icon")}</span>
    </button>
  `;
}

function renderDocConfigPreview(isBatch, docs) {
  return `
    <div class="config-preview-shell ${isBatch ? "batch" : "single"}">
      ${isBatch ? renderBatchFileList(docs) : ""}
      ${renderOriginalPreview()}
      ${renderSlicePreview(isBatch)}
    </div>
  `;
}

function renderBatchFileList(docs) {
  const groupedDocs = Object.entries(groupDocsByFormat(docs)).map(([format, formatDocs]) => ({
    title: `${format} / ${getFormatAlgorithmValue(format)}`,
    docs: formatDocs,
  }));
  return `
    <aside class="preview-file-list">
      <div class="preview-panel-head">文件列表</div>
      <div class="preview-file-items">
        ${groupedDocs.map((group, groupIndex) => `
          ${group.title ? `<div class="preview-group-title">${group.title}</div>` : ""}
          ${group.docs.map((doc, index) => `
            <button class="preview-file-item ${groupIndex === 0 && index === 0 ? "active" : ""}" data-handler="${registerHandler({ type: "noop" })}">
              <span class="doc-format-badge ${doc.format.toLowerCase()}">${doc.format.slice(0, 1)}</span>
              <span class="ellipsis">${doc.name}</span>
              <span class="mini-status ${statusClass(doc)}">${doc.statusText}</span>
            </button>
          `).join("")}
        `).join("")}
      </div>
    </aside>
  `;
}

function renderOriginalPreview() {
  return `
    <section class="preview-panel original">
      <div class="preview-panel-head">
        <span>原文</span>
        <span class="preview-tools">- 100% +</span>
      </div>
      <div class="paper-preview">
        <div class="paper-line wide"></div>
        <div class="paper-line"></div>
        <div class="paper-line short"></div>
        <div class="paper-table">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>
        <div class="paper-line"></div>
        <div class="paper-line short"></div>
      </div>
    </section>
  `;
}

function renderSlicePreview(isBatch) {
  return `
    <section class="preview-panel slices">
      <div class="preview-panel-head">
        <span>切片预览</span>
        <span>${isBatch ? "当前文件 4 段" : "4 段"}</span>
      </div>
      <div class="slice-preview-list">
        ${[
          "容器云 4.0 UI 走查问题归纳。模块间距、字体样式与表格结构被保留。",
          "字体样式问题：字体大小、字体颜色、标题文字加粗信息已进入切片。",
          "表格内容被识别为结构化片段，可用于后续召回与引用。",
          "自动分段与清洗会过滤页眉页脚，并合并异常换行。"
        ].map((text, index) => `<article class="slice-card"><strong>切片 ${index + 1}</strong><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function getDocConfigDocs() {
  const view = state.docManagement.configView;
  if (!view) return [];
  const ids = view.ids || [];
  return ids.map((id) => DOC_MANAGEMENT_ROWS.find((item) => item.id === id)).filter(Boolean);
}

function getActiveDocProcessView() {
  return state.docManagement.configView || state.docManagement.uploadView;
}

function openDocConfigView(mode, ids) {
  const docs = ids.map((id) => DOC_MANAGEMENT_ROWS.find((item) => item.id === id)).filter(Boolean);
  if (!docs.length) return;
  state.docManagement.rowMenu = "";
  state.docManagement.uploadView = null;
  state.docManagement.sliceView = null;
  state.docManagement.configView = createDocProcessView({
    configMode: mode,
    mode: "split",
    step: 1,
    ids,
    component: docs[0]?.format === "PDF" ? "法律合同审查" : "简历智能解析",
    formatAlgorithms: createFormatAlgorithmState(),
    files: docs.map((doc) => ({
      id: doc.id,
      name: doc.name,
      size: doc.slices === "-" ? "200.32KB" : `${doc.slices} 个切片`,
      format: doc.format || normalizeUploadedFormat(doc.name),
      status: "done",
      progress: 100,
    })),
  });
  state.resetMainScroll = true;
  render();
}

function groupDocsByFormat(docs) {
  return docs.reduce((map, doc) => {
    if (!map[doc.format]) map[doc.format] = [];
    map[doc.format].push(doc);
    return map;
  }, {});
}

function createFormatAlgorithmState() {
  return SUPPORTED_DOC_FORMATS.reduce((map, item) => {
    map[item.format] = "LangChain-Text";
    return map;
  }, {});
}

function getFormatAlgorithmValue(format) {
  return state.docManagement.configView?.formatAlgorithms?.[format] || state.docManagement.uploadView?.formatAlgorithms?.[format] || "LangChain-Text";
}

function nextFormatAlgorithmName(current) {
  const names = ["LangChain-Text", "Docling-Layout", "MinerU-Parser", "OCR-Enhanced"];
  const index = names.indexOf(current);
  return names[(index + 1) % names.length];
}

function statusClass(doc) {
  if (doc.ops === "failed") return "failed";
  if (doc.ops === "queued") return "queued";
  if (doc.ops === "parsing" || doc.ops === "enhancing") return "processing";
  return "done";
}

function renderCardsPage(page) {
  return `
    <section class="page-panel padded">
      ${renderPills(page)}
      ${page.filters ? renderFilters(page.filters) : ""}
      <div class="card-grid cols-${page.columns}">
        ${page.cards.map(renderCard).join("")}
      </div>
      ${renderPager(page.pagination)}
    </section>
  `;
}

function renderCard(cardData) {
  if (cardData.type === "model") {
    return `
      <article class="model-card">
        <div class="card-head">
          <div class="card-avatar">${icon("cube")}</div>
          <div class="ellipsis">
            <div class="card-title">${cardData.title}</div>
            <div class="card-subtitle">模型编码：${cardData.code}</div>
          </div>
        </div>
        <div class="tag-list">
          <span class="tag primary">${cardData.tagName}</span>
          ${cardData.extra ? `<span class="tag">${cardData.extra}</span>` : ""}
        </div>
        <div class="card-desc">${cardData.desc || "模型已接入系统，可用于智能体、知识库与评测配置。"}</div>
        <div class="card-foot"><span>${cardData.date}</span><button class="link-btn" data-handler="${registerHandler({ type: "drawer", title: cardData.title, fields: modelFields(cardData) })}">查看</button></div>
      </article>
    `;
  }
  if (cardData.type === "tool") {
    return `
      <article class="tool-card">
        <div class="card-head">
          <div class="card-avatar">${icon("tool")}</div>
          <div class="ellipsis">
            <div class="card-title">${cardData.title}</div>
            <div class="status-dot">已认证</div>
          </div>
        </div>
        <div class="card-desc">${cardData.desc}</div>
        <div class="card-subtitle">${cardData.toolCount}</div>
        <div class="tag-list">${cardData.tags.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
      </article>
    `;
  }
  const footerAction = cardData.type === "skill" ? "复用" : "查看";
  return `
    <article class="app-card">
      <div class="card-head">
        <div class="card-avatar">${icon(cardData.type === "skill" ? "star" : "app")}</div>
        <div class="ellipsis">
          <div class="card-title">${cardData.title}</div>
          <div class="card-subtitle">${cardData.subtitle}</div>
        </div>
      </div>
      ${cardData.type === "skill" ? '<div class="status-dot" style="margin-top:8px;">已发布</div>' : ""}
      <div class="card-desc">${cardData.desc}</div>
      ${cardData.tags ? `<div class="tag-list">${cardData.tags.map((item) => `<span class="tag">${item}</span>`).join("")}</div>` : ""}
      <div class="card-foot"><span>${cardData.foot}</span><button class="link-btn" data-handler="${registerHandler({ type: "drawer", title: cardData.title, fields: detailFields(cardData) })}">${footerAction}</button></div>
    </article>
  `;
}

function renderSystemUsersPage(page) {
  const columns = [
    [checkbox(), "42px"],
    ["序号", "60px"],
    ["用户账号", "110px"],
    ["用户名称", "110px"],
    ["部门", "120px"],
    ["手机号码", "110px"],
    ["状态", "70px"],
    ["创建时间", "150px"],
    ["操作", "140px"],
  ];
  const rows = [
    [checkbox(), "1", "admin", "超级管理员", "基础设施部", "15888888888", switcher(), "2026-01-21 21:49:54", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "2", "operator", "测试", "集团领导", "15666666666", switcher(), "2026-01-21 21:49:54", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "3", "liudingxiao", "liudingxiao", "试用部门", "", switcher(), "2026-01-22 09:35:41", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "4", "xupeiqing", "许沛卿", "研发部门", "", switcher(), "2026-01-22 09:48:45", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "5", "sunqingchao", "孙庆超", "售前/销售部门", "", switcher(), "2026-01-22 10:03:08", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "6", "yangwenyi", "杨文逸", "研发管理部", "", switcher(), "2026-01-22 10:07:49", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "7", "xieshuai", "谢帅", "研发部门", "", switcher(), "2026-01-22 10:17:02", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "8", "jiangtianhao", "姜天灏", "研发部门", "", switcher(), "2026-01-22 10:20:29", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "9", "zhuweiguang", "朱伟光", "售前/销售部门", "", switcher(), "2026-01-22 10:27:37", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "10", "dnr", "刁乃儒", "研发部门", "", switcher(), "2026-01-22 10:29:31", actions(["编辑", "重置密码", "删除"])],
  ];
  return `
    <section class="system-layout">
      <aside class="inner-side">
        <label class="side-search"><input placeholder="搜索部门" />${icon("search")}</label>
        <div class="dept-tree">
          ${SYSTEM_TREE.map((group) => `
            <div class="tree-row">${icon("folder")}<span>${group.label}</span></div>
            ${group.children.map((child) => `<div class="tree-row depth-1">${icon("file")}<span>${child}</span></div>`).join("")}
          `).join("")}
        </div>
      </aside>
      <div class="inner-main">
        ${renderFilters([field("请输入用户名称"), field("请输入手机号"), selectField("请选择状态"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("删 除", "disabled"), button("导 入", "open"), button("导 出", "open"), button("新增用户", "open", "primary")])}
        ${renderTable(columns, rows)}
        ${renderPager(pager("178", "10条/页", [1, 2, 3, 4, 5]))}
      </div>
    </section>
  `;
}

function renderDataCenterPage(page) {
  const active = state.pageViews[state.path] || "会话记录";
  const tabs = ["会话记录", "点赞记录", "用户反馈"];
  const tableMap = {
    会话记录: {
      columns: [["会话标题", "220px"], ["智能体", "120px"], ["用户", "120px"], ["提问次数", "90px"], ["最后互动时间", "160px"], ["操作", "90px"]],
      rows: [
        ["新能源电动车问答", "新能源电动车智能体", "杨文逸", "12", "2026-04-28 10:12:21", actions(["查看"])],
        ["法律基础问答", "基础法律问答", "王一雄", "9", "2026-04-28 09:54:08", actions(["查看"])],
        ["Prompt 设计咨询", "提示词设计助手演示", "刘颖", "7", "2026-04-28 09:43:10", actions(["查看"])],
      ],
    },
    点赞记录: {
      columns: [["会话标题", "220px"], ["智能体", "120px"], ["点赞用户", "120px"], ["点赞内容", "1fr"], ["点赞时间", "160px"]],
      rows: [
        ["新能源电动车问答", "新能源电动车智能体", "杨文逸", "总结清晰，给出的行业政策引用比较完整。", "2026-04-28 10:16:25"],
        ["Prompt 设计咨询", "提示词设计助手演示", "刘颖", "生成的提示词结构可直接用于工作流。", "2026-04-28 09:47:32"],
      ],
    },
    用户反馈: {
      columns: [["反馈标题", "220px"], ["智能体", "120px"], ["反馈人", "110px"], ["反馈内容", "1fr"], ["状态", "90px"], ["时间", "150px"]],
      rows: [
        ["新能源问答回答偏长", "新能源电动车智能体", "信通院", "希望默认回答更简洁一些，保留结论与来源。", tag("待处理", "warning"), "2026-04-28 09:30:14"],
        ["FAQ 答案来源标记不清晰", "基础法律问答", "杨文逸", "建议明确区分“手动录入”与“上传知识”。", tag("已处理", "success"), "2026-04-27 17:41:06"],
      ],
    },
  };
  const panel = tableMap[active];
  return `
    <section class="page-panel padded">
      <div class="card-grid cols-4" style="margin-bottom:12px;">
        <article class="app-card"><div class="card-title">总会话数</div><div style="margin-top:18px;font-size:28px;font-weight:700;">12,846</div><div class="card-subtitle">近 7 日 +12.4%</div></article>
        <article class="app-card"><div class="card-title">活跃用户</div><div style="margin-top:18px;font-size:28px;font-weight:700;">386</div><div class="card-subtitle">近 7 日 +5.8%</div></article>
        <article class="app-card"><div class="card-title">点赞反馈</div><div style="margin-top:18px;font-size:28px;font-weight:700;">1,294</div><div class="card-subtitle">正向反馈占比 92%</div></article>
        <article class="app-card"><div class="card-title">问题解决率</div><div style="margin-top:18px;font-size:28px;font-weight:700;">84.7%</div><div class="card-subtitle">按最近会话统计</div></article>
      </div>
      <div class="filters">
        ${tabs.map((tab) => `<button class="btn ${tab === active ? "primary" : ""}" data-handler="${registerHandler({ type: "pill", path: state.path, value: tab })}">${tab}</button>`).join("")}
      </div>
      ${renderTable(panel.columns, panel.rows)}
    </section>
  `;
}

function renderTable(columns, rows) {
  return `
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>${columns.map(([label, width]) => `<th style="width:${width}">${renderCell(label)}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${renderCell(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderCell(value) {
  if (value && typeof value === "object") {
    if (value.type === "tag") return `<span class="tag ${value.tone || ""}">${value.text}</span>`;
    if (value.type === "docStatus") {
      const status = docStatusMeta(value.item);
      return `
        <span class="doc-status-tag ${status.tone}" aria-label="${status.label}，${status.detail}" title="${status.detail}">
          ${status.tone === "parsing" || status.tone === "enhancing" ? '<span class="doc-status-spin" aria-hidden="true"></span>' : ""}
          ${status.label}
        </span>
      `;
    }
    if (value.type === "docActions") {
      if (value.item.ops === "queued" || value.item.ops === "parsing" || value.item.ops === "enhancing") {
        return `
          <div class="doc-row-actions">
            <span class="link-btn disabled">配置</span>
            <button class="link-btn" data-handler="${registerHandler({ type: "drawer", title: "删除", fields: actionFields("删除") })}">删除</button>
          </div>
        `;
      }
      return `
        <div class="doc-row-actions">
          <button class="doc-op-switch ${value.item.switchOn ? "on" : "off"}" data-handler="${registerHandler({ type: "toggleDocSwitch", id: value.item.id })}" aria-label="文档状态开关">
            <span class="doc-op-switch-knob"></span>
          </button>
          <button class="link-btn" data-handler="${registerHandler({ type: "openDocSlices", id: value.item.id })}">切片</button>
          <button type="button" class="link-btn doc-config-trigger" data-doc-config-id="${value.item.id}" data-handler="${registerHandler({ type: "openDocConfig", mode: "single", id: value.item.id })}">配置</button>
          <div class="doc-row-more-wrap ${value.menuOpen ? "open" : ""}">
            <button class="doc-more-btn" data-handler="${registerHandler({ type: "toggleDocRowMenu", id: value.item.id })}">
              ${icon("rowMore", "doc-more-icon")}
            </button>
            ${value.menuOpen ? `
              <div class="doc-more-panel">
                <button class="doc-more-item" data-handler="${registerHandler({ type: "drawer", title: "复制", fields: actionFields("复制") })}">复制</button>
                <button type="button" class="doc-more-item doc-config-trigger" data-doc-config-id="${value.item.id}" data-handler="${registerHandler({ type: "openDocConfig", mode: "single", id: value.item.id })}">配置</button>
                <button class="doc-more-item" data-handler="${registerHandler({ type: "drawer", title: "删除", fields: actionFields("删除") })}">删除</button>
              </div>
            ` : ""}
          </div>
        </div>
      `;
    }
    if (value.type === "actions") {
      return `<div class="actions">${value.items.map((item, index) => {
        const disabled = value.disabled && value.disabled[index];
        if (disabled) return `<span class="link-btn disabled">${item.label}</span>`;
        return `<button class="link-btn ${item.dropdown ? "with-icon" : ""}" data-handler="${registerHandler({ type: "drawer", title: item.label, fields: actionFields(item.label) })}">${item.label}${item.dropdown ? icon("chevron", "wj-icon tiny-icon") : ""}</button>`;
      }).join("")}</div>`;
    }
    if (value.type === "chips") {
      return `<div class="chip-list">${value.items.map((item) => {
        const meta = typeof item === "string" ? { text: item, tone: "" } : item;
        return `<span class="chip ${meta.tone || ""}">${meta.text}</span>`;
      }).join("")}</div>`;
    }
    if (value.type === "checkbox") {
      const classes = ["checkbox", value.checked ? "checked" : "", value.mixed ? "mixed" : ""].filter(Boolean).join(" ");
      if (value.handler) {
        return `<button class="${classes}" data-handler="${registerHandler(value.handler)}" aria-label="选择"><span class="checkbox-mark" aria-hidden="true"></span></button>`;
      }
      return `<span class="${classes}"><span class="checkbox-mark" aria-hidden="true"></span></span>`;
    }
    if (value.type === "switch") return `<span class="switch"></span>`;
    if (value.type === "iconAction") {
      return `<button class="doc-inline-icon-btn ${value.tone || ""}" data-handler="${registerHandler(value.handler || { type: "noop" })}">${icon(value.icon, "doc-inline-icon")}</button>`;
    }
  }
  return `<div class="ellipsis">${value || ""}</div>`;
}

function renderPager(data) {
  if (!data) return "";
  const pageNums = paginationNums(data);
  return `
    <div class="pager">
      <span>共 ${data.total} 条记录</span>
      <span class="page-size">${data.size}${icon("chevron", "wj-icon tiny-icon")}</span>
      <button class="page-arrow" disabled>${icon("chevron")}</button>
      ${pageNums.map((num, index) => num === "..."
        ? `<span class="page-ellipsis">...</span>`
        : `<button class="page-num ${index === 0 ? "active" : ""}">${num}</button>`).join("")}
      <button class="page-arrow" style="transform:rotate(180deg)">${icon("chevron")}</button>
    </div>
  `;
}

function paginationNums(data) {
  const pageSize = Number.parseInt(String(data.size), 10) || 10;
  const total = Number.parseInt(String(data.total), 10) || 0;
  const pageCount = Math.max(Math.ceil(total / pageSize), data.nums?.length || 1);
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, index) => index + 1);
  return [1, 2, 3, 4, 5, "...", pageCount];
}

function renderDrawer() {
  return `
    <div class="drawer-mask" data-handler="${registerHandler({ type: "closeDrawer" })}"></div>
    <aside class="drawer">
      <div class="drawer-head">
        <span>${state.drawer.title}</span>
        <button class="icon-btn" data-handler="${registerHandler({ type: "closeDrawer" })}">${icon("close")}</button>
      </div>
      <div class="drawer-body">
        ${state.drawer.fields.map((item) => `
          <div class="form-row">
            <div class="muted">${item.label}</div>
            ${item.multiline ? `<div class="fake-textarea"></div>` : `<div class="fake-input"></div>`}
          </div>
        `).join("")}
      </div>
      <div class="drawer-foot">
        <button class="btn" data-handler="${registerHandler({ type: "closeDrawer" })}">取消</button>
        <button class="btn primary" data-handler="${registerHandler({ type: "closeDrawer" })}">确定</button>
      </div>
    </aside>
  `;
}

function createDigitalEmployeeState(template = "legal") {
  const legalDuty = "法律助手，专注于合同审核、风险预警与合规管理，把控业务法律风险，保障业务合规开展。";
  if (template === "blank") {
    return {
      template: "blank",
      name: "",
      duty: "",
      generated: false,
      legalConfig: {
        role: "",
        industry: "",
        company: "",
        tasks: "",
      },
    };
  }
  return {
    template: "legal",
    name: "法律助手",
    duty: legalDuty,
    generated: false,
    legalConfig: {
      role: "",
      industry: "",
      company: "",
      tasks: "",
    },
  };
}

function openCreateDigitalEmployeeModal() {
  state.drawer = null;
  state.createDigitalEmployee = createDigitalEmployeeState("legal");
  render();
}

function closeCreateDigitalEmployeeModal() {
  state.createDigitalEmployee = null;
  render();
}

function renderCreateDigitalEmployeeModal() {
  if (!state.createDigitalEmployee) return "";
  const view = state.createDigitalEmployee;
  const cards = [
    {
      key: "blank",
      title: "空白员工",
      desc: "自定义配置",
      tone: "blank",
    },
    {
      key: "legal",
      title: "法律助手",
      desc: "合同法务、智能审查",
      tone: "legal",
    },
  ];
  return `
    <div class="modal-mask" data-handler="${registerHandler({ type: "closeCreateDigitalEmployee" })}"></div>
    <section class="digital-employee-modal" role="dialog" aria-modal="true" aria-label="创建数字员工">
      <div class="digital-employee-modal-head">
        <strong>创建数字员工</strong>
        <button class="icon-btn" aria-label="关闭" data-handler="${registerHandler({ type: "closeCreateDigitalEmployee" })}">${icon("close")}</button>
      </div>
      <div class="digital-employee-modal-body">
        <div class="digital-employee-template-grid">
          ${cards.map((card) => `
            <button
              class="digital-employee-template-card ${view.template === card.key ? "active" : ""}"
              data-handler="${registerHandler({ type: "selectCreateEmployeeTemplate", value: card.key })}"
            >
              <span class="digital-employee-template-icon ${card.tone}">
                ${card.key === "blank" ? icon("folder", "wj-icon") : icon("check", "wj-icon")}
              </span>
              <span class="digital-employee-template-copy">
                <strong>${card.title}</strong>
                <em>${card.desc}</em>
              </span>
            </button>
          `).join("")}
        </div>
        <div class="digital-employee-form-block">
          <label class="digital-employee-form-label">员工名称<span>*</span></label>
          <div class="digital-employee-input-wrap">
            <input
              id="createDigitalEmployeeName"
              class="digital-employee-modal-input"
              maxlength="20"
              value="${escapeHtml(view.name)}"
              placeholder="请输入员工名称"
            />
            <span>${view.name.length}/20</span>
          </div>
        </div>
        <div class="digital-employee-form-block">
          <div class="digital-employee-form-title-row">
            <label class="digital-employee-form-label">员工职责<span>*</span></label>
            <button class="digital-employee-ai-link" data-handler="${registerHandler({ type: "generateCreateEmployeeDuty" })}">
              ${icon("star", "wj-icon")}AI生成
            </button>
          </div>
          <div class="digital-employee-textarea-wrap">
            <textarea
              id="createDigitalEmployeeDuty"
              class="digital-employee-modal-textarea"
              maxlength="200"
              placeholder="请输入员工职责描述"
            >${escapeHtml(view.duty)}</textarea>
            <span>${view.duty.length}/200</span>
          </div>
        </div>
        ${view.template === "legal" ? renderLegalAssistantConfig(view) : ""}
        
      </div>
      <div class="digital-employee-modal-foot">
        <button class="btn" data-handler="${registerHandler({ type: "closeCreateDigitalEmployee" })}">取消</button>
        <button class="btn primary" data-handler="${registerHandler({ type: "submitCreateDigitalEmployee" })}">进入数字员工初始化</button>
      </div>
    </section>
  `;
}

function renderLegalAssistantConfig(view) {
  const config = view.legalConfig || { role: "", industry: "", company: "", tasks: "" };
  const roleOptions = ["法务负责人", "法务专员", "合规经理", "业务负责人"];
  const industryOptions = ["制造业", "金融业", "能源行业", "科技互联网"];
  return `
    <section class="digital-employee-legal-config">
      <div class="digital-employee-legal-grid">
        <div class="digital-employee-form-block">
          <label class="digital-employee-form-label">你的角色是<span>*</span></label>
          <div class="digital-employee-select-wrap">
            <select id="createLegalRole" class="digital-employee-modal-select">
              <option value="">请选择你的角色</option>
              ${roleOptions.map((item) => `<option value="${item}" ${config.role === item ? "selected" : ""}>${item}</option>`).join("")}
            </select>
            <span class="digital-employee-select-icon">${icon("chevron", "wj-icon")}</span>
          </div>
        </div>
        <div class="digital-employee-form-block">
          <label class="digital-employee-form-label">你们是什么行业<span>*</span></label>
          <div class="digital-employee-select-wrap">
            <select id="createLegalIndustry" class="digital-employee-modal-select">
              <option value="">请选择所处行业</option>
              ${industryOptions.map((item) => `<option value="${item}" ${config.industry === item ? "selected" : ""}>${item}</option>`).join("")}
            </select>
            <span class="digital-employee-select-icon">${icon("chevron", "wj-icon")}</span>
          </div>
        </div>
      </div>
      <div class="digital-employee-form-block">
        <label class="digital-employee-form-label">你们公司是<span>*</span></label>
        <input
          id="createLegalCompany"
          class="digital-employee-modal-input full"
          value="${escapeHtml(config.company)}"
          placeholder="请输入你们公司名称"
        />
      </div>
      <div class="digital-employee-form-block">
        <label class="digital-employee-form-label">你希望我能帮您处理哪些工作<span>*</span></label>
        <textarea
          id="createLegalTasks"
          class="digital-employee-modal-textarea legal"
          maxlength="200"
          placeholder="例：合同审核、合同起草、数据合规业务、AI合规治理、案例分析"
        >${escapeHtml(config.tasks)}</textarea>
      </div>
    </section>
  `;
}

function renderPortal() {
  return [
    state.drawer ? renderDrawer() : "",
    state.createDigitalEmployee ? renderCreateDigitalEmployeeModal() : "",
  ].join("");
}

function frontFields() {
  return [{ label: "应用名称" }, { label: "访问地址" }, { label: "说明", multiline: true }];
}

function userFields() {
  return [{ label: "账号" }, { label: "用户名" }, { label: "所属部门" }, { label: "手机号" }];
}

function modelFields(cardData) {
  return [{ label: "模型名称" }, { label: "模型编码" }, { label: "模型类型" }, { label: "说明", multiline: true }];
}

function detailFields(cardData) {
  return [{ label: "名称" }, { label: "归属信息" }, { label: "描述", multiline: true }];
}

function actionFields(label) {
  if (label.includes("密码")) return [{ label: "新密码" }, { label: "确认密码" }];
  if (label.includes("导入") || label.includes("上传")) return [{ label: "文件上传" }, { label: "备注", multiline: true }];
  return [{ label: "名称" }, { label: "说明", multiline: true }];
}

function drawerMeta(label) {
  return { type: "drawer", title: label, fields: actionFields(label) };
}

document.addEventListener("click", (event) => {
  const employeeCardTarget = event.target.closest("[data-employee-index]");
  if (employeeCardTarget) {
    event.preventDefault();
    state.employeeEditor = { mode: "edit", index: Number(employeeCardTarget.dataset.employeeIndex) || 0 };
    navigate("/dashboard/digitalEmployeeEdit");
    return;
  }
  const employeeEditorBackTarget = event.target.closest("[data-editor-back]");
  if (employeeEditorBackTarget) {
    event.preventDefault();
    navigate("/dashboard/digitalEmployeeList");
    return;
  }
  const directConfigTarget = event.target.closest(".doc-config-trigger[data-doc-config-id]");
  if (directConfigTarget) {
    event.preventDefault();
    openDocConfigView("single", [directConfigTarget.dataset.docConfigId]);
    return;
  }
  const target = event.target.closest("[data-handler]");
  if (!target) {
    if (!event.target.closest(".filter-control-wrap") && !event.target.closest(".more-filter-wrap")) {
      if (state.filterMenuKey || state.filterControlKey) {
        state.filterMenuKey = "";
        state.filterControlKey = "";
        render();
      }
    }
    if (!event.target.closest(".doc-row-more-wrap") && state.docManagement.rowMenu) {
      state.docManagement.rowMenu = "";
      render();
    }
    return;
  }
  event.preventDefault();
  const meta = state.handlers[target.dataset.handler];
  if (!meta) {
    return;
  }
  if (meta.type !== "toggleMoreFilters") state.filterMenuKey = "";
  if (meta.type === "nav") navigate(meta.path);
  if (meta.type === "group") toggleGroup(meta.label);
  if (meta.type === "closeTab") closeTab(meta.path);
  if (meta.type === "drawer") openDrawer(meta.title, meta.fields);
  if (meta.type === "closeDrawer") closeDrawer();
  if (meta.type === "closeCreateDigitalEmployee") closeCreateDigitalEmployeeModal();
  if (meta.type === "selectCreateEmployeeTemplate") {
    state.createDigitalEmployee = createDigitalEmployeeState(meta.value);
    render();
  }
  if (meta.type === "generateCreateEmployeeDuty") {
    if (state.createDigitalEmployee) {
      const name = state.createDigitalEmployee.name.trim() || "数字员工";
      state.createDigitalEmployee.duty = `${name}，专注于业务任务受理、内容分析与结果交付，能够结合规则与知识库执行标准流程，并输出结构化结论。`;
      state.createDigitalEmployee.generated = true;
      render();
    }
  }
  if (meta.type === "submitCreateDigitalEmployee") closeCreateDigitalEmployeeModal();
  if (meta.type === "pill") {
    state.pageViews[meta.path] = meta.value;
    render();
  }
  if (meta.type === "resetDigitalEmployees") {
    state.employeeManagement.keyword = "";
    state.employeeManagement.status = "";
    render();
  }
  if (meta.type === "setDigitalEmployeeView") {
    state.employeeManagement.view = meta.value;
    render();
  }
  if (meta.type === "setEmployeeEditorTab") {
    state.employeeEditor.tab = meta.value;
    render();
  }
  if (meta.type === "openCreateDigitalEmployee") {
    state.employeeEditor = { mode: "create", index: 0, tab: "config" };
    navigate("/dashboard/digitalEmployeeEdit");
  }
  if (meta.type === "openDigitalEmployeeEditor") {
    state.employeeEditor = { mode: "edit", index: meta.index, tab: "config" };
    navigate("/dashboard/digitalEmployeeEdit");
  }
  if (meta.type === "toggleMoreFilters") {
    state.filterControlKey = "";
    state.filterMenuKey = state.filterMenuKey === meta.key ? "" : meta.key;
    render();
  }
  if (meta.type === "toggleFilterControl") {
    state.filterMenuKey = "";
    state.filterControlKey = state.filterControlKey === meta.key ? "" : meta.key;
    render();
  }
  if (meta.type === "closeFilterControl") {
    state.filterControlKey = "";
    render();
  }
  if (meta.type === "setSelectValue") {
    setFilterState({ id: meta.itemId }, meta.value, meta.scopeKey);
    state.filterControlKey = "";
    render();
  }
  if (meta.type === "clearDateValue") {
    setFilterState({ id: meta.itemId }, { start: "", end: "", anchor: startOfMonthIso(todayIso()) }, meta.scopeKey);
    state.filterControlKey = "";
    render();
  }
  if (meta.type === "shiftDateAnchor") {
    const current = scopeFilters(meta.scopeKey)[meta.itemId] || { start: "", end: "", anchor: startOfMonthIso(todayIso()) };
    setFilterState({ id: meta.itemId }, { ...current, anchor: addMonthsIso(current.anchor || startOfMonthIso(todayIso()), meta.delta) }, meta.scopeKey);
    render();
  }
  if (meta.type === "pickDateValue") {
    const current = getDateRangeState({ id: meta.itemId, kind: "date" }, meta.scopeKey);
    let next;
    if (!current.start || current.end) {
      next = { ...current, start: meta.value, end: "", anchor: startOfMonthIso(meta.value) };
    } else if (meta.value < current.start) {
      next = { ...current, start: meta.value, end: current.start, anchor: startOfMonthIso(meta.value) };
    } else {
      next = { ...current, end: meta.value, anchor: current.anchor };
    }
    setFilterState({ id: meta.itemId }, next, meta.scopeKey);
    if (next.start && next.end) state.filterControlKey = "";
    render();
  }
  if (meta.type === "toggleDocTree") {
    if (state.docManagement.expandedNodes.has(meta.label)) state.docManagement.expandedNodes.delete(meta.label);
    else state.docManagement.expandedNodes.add(meta.label);
    render();
  }
  if (meta.type === "setDocActive") {
    state.docManagement.activeNode = meta.label;
    render();
  }
  if (meta.type === "toggleDocRow") {
    if (state.docManagement.selectedRows.has(meta.id)) state.docManagement.selectedRows.delete(meta.id);
    else state.docManagement.selectedRows.add(meta.id);
    render();
  }
  if (meta.type === "toggleAllDocRows") {
    if (state.docManagement.selectedRows.size === DOC_MANAGEMENT_ROWS.length) state.docManagement.selectedRows.clear();
    else state.docManagement.selectedRows = new Set(DOC_MANAGEMENT_ROWS.map((item) => item.id));
    render();
  }
  if (meta.type === "toggleDocRowMenu") {
    state.docManagement.rowMenu = state.docManagement.rowMenu === meta.id ? "" : meta.id;
    render();
  }
  if (meta.type === "toggleDocSwitch") {
    const target = DOC_MANAGEMENT_ROWS.find((item) => item.id === meta.id);
    if (target) target.switchOn = !target.switchOn;
    render();
  }
  if (meta.type === "openDocConfig") {
    const ids = meta.mode === "batch"
      ? Array.from(state.docManagement.selectedRows)
      : [meta.id];
    openDocConfigView(meta.mode, ids);
  }
  if (meta.type === "openDocSlices") {
    openDocSliceView(meta.id);
  }
  if (meta.type === "closeDocSlices") {
    state.docManagement.sliceView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "selectDocSlice") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.activeSlice = meta.id;
    render();
  }
  if (meta.type === "openSliceImage") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.imageViewer = meta.image;
    render();
  }
  if (meta.type === "closeSliceImage") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.imageViewer = "";
    render();
  }
  if (meta.type === "editDocSlice") {
    if (state.docManagement.sliceView) {
      state.docManagement.sliceView.activeSlice = meta.id;
      state.docManagement.sliceView.editing = true;
      state.docManagement.sliceView.keywordEditor = false;
      state.docManagement.sliceView.drawerImageViewer = "";
    }
    render();
  }
  if (meta.type === "closeEditSlice") {
    if (state.docManagement.sliceView) {
      state.docManagement.sliceView.editing = false;
      state.docManagement.sliceView.keywordEditor = false;
      state.docManagement.sliceView.drawerImageViewer = "";
    }
    render();
  }
  if (meta.type === "openDrawerImagePreview") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.drawerImageViewer = meta.image;
    render();
  }
  if (meta.type === "closeDrawerImagePreview") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.drawerImageViewer = "";
    render();
  }
  if (meta.type === "openKeywordEditor") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.keywordEditor = true;
    render();
  }
  if (meta.type === "openDocUpload") {
    state.docManagement.rowMenu = "";
    state.docManagement.configView = null;
    state.docManagement.sliceView = null;
    clearAllUploadProgress();
    state.docManagement.uploadView = createUploadView();
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "closeDocUpload") {
    clearAllUploadProgress();
    state.docManagement.uploadView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "deleteUploadedFile") {
    const view = state.docManagement.uploadView;
    clearUploadProgress(meta.id);
    if (view) {
      view.files = view.files.filter((file) => file.id !== meta.id);
      if (view.activeUploadFileId === meta.id) {
        view.activeUploadFileId = view.files[0]?.id || "";
        view.activeSlice = 0;
      }
    }
    render();
  }
  if (meta.type === "docUploadNext") {
    const view = state.docManagement.uploadView;
    if (view) {
      if (view.step === 1 && !view.files.some((file) => file.status === "done")) return;
      view.step = Math.min(3, view.step + 1);
    }
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docUploadPrev") {
    const view = state.docManagement.uploadView;
    if (view) view.step = Math.max(1, view.step - 1);
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docUploadConfirm") {
    const view = state.docManagement.uploadView;
    if (view) {
      view.files.forEach((file, index) => {
        DOC_MANAGEMENT_ROWS.unshift({
          id: `uploaded-${Date.now()}-${index}`,
          index: String(index + 1),
          name: file.name,
          format: file.format || "DOCX",
          slices: "4",
          status: tag("处理完成", "success"),
          statusText: "处理完成",
          labels: "-",
          createdAt: "2026-05-24 20:30:00",
          canBatch: true,
          ops: "done",
          switchOn: true,
        });
      });
    }
    clearAllUploadProgress();
    state.docManagement.uploadView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "setUploadMode") {
    const view = getActiveDocProcessView();
    if (view) view.mode = meta.mode;
    render();
  }
  if (meta.type === "setUploadSegment") {
    const view = getActiveDocProcessView();
    if (view) view.segment = meta.segment;
    render();
  }
  if (meta.type === "setUploadCategory") {
    const view = getActiveDocProcessView();
    if (view) view.category = meta.category;
    render();
  }
  if (meta.type === "setUploadComponent") {
    const view = getActiveDocProcessView();
    if (view) view.component = meta.component;
    render();
  }
  if (meta.type === "toggleUploadCheck") {
    const view = getActiveDocProcessView();
    if (view) view.checks[meta.key] = !view.checks[meta.key];
    render();
  }
  if (meta.type === "toggleUploadFileList") {
    const view = getActiveDocProcessView();
    if (view) view.showFileList = !view.showFileList;
    render();
  }
  if (meta.type === "selectUploadPreviewFile") {
    const view = getActiveDocProcessView();
    if (view) {
      view.activeUploadFileId = meta.id;
      view.activeSlice = 0;
    }
    render();
  }
  if (meta.type === "selectUploadSlice") {
    const view = getActiveDocProcessView();
    if (view) view.activeSlice = meta.index;
    render();
  }
  if (meta.type === "closeDocConfig") {
    state.docManagement.configView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docConfigNext") {
    if (state.docManagement.configView) state.docManagement.configView.step = 2;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docConfigPrev") {
    if (state.docManagement.configView) state.docManagement.configView.step = 1;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docConfigConfirm") {
    const docs = getDocConfigDocs();
    docs.forEach((doc, index) => {
      doc.ops = "queued";
      doc.statusText = "排队中";
      doc.status = tag("排队中", "warning");
      doc.slices = "-";
      doc.queuePosition = index + 1;
      doc.queueTotal = Math.max(docs.length, 1);
      doc.progress = 0;
      doc.canBatch = false;
    });
    state.docManagement.configView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "cycleFormatAlgorithm") {
    const view = state.docManagement.configView || state.docManagement.uploadView;
    if (view) {
      if (!view.formatAlgorithms) view.formatAlgorithms = createFormatAlgorithmState();
      view.formatAlgorithms[meta.format] = nextFormatAlgorithmName(view.formatAlgorithms[meta.format]);
    }
    render();
  }
  if (meta.type === "resetFilters") {
    clearScopeFilters(meta.scopeKey);
    state.filterMenuKey = "";
    state.filterControlKey = "";
    render();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("#digitalEmployeeSearch")) {
    state.employeeManagement.keyword = event.target.value;
    return;
  }
  if (event.target.matches("#createDigitalEmployeeName") && state.createDigitalEmployee) {
    state.createDigitalEmployee.name = event.target.value.slice(0, 20);
    const counter = event.target.parentElement?.querySelector("span");
    if (counter) counter.textContent = `${state.createDigitalEmployee.name.length}/20`;
    return;
  }
  if (event.target.matches("#createDigitalEmployeeDuty") && state.createDigitalEmployee) {
    state.createDigitalEmployee.duty = event.target.value.slice(0, 200);
    const counter = event.target.parentElement?.querySelector("span");
    if (counter) counter.textContent = `${state.createDigitalEmployee.duty.length}/200`;
    return;
  }
  if (event.target.matches("#createLegalCompany") && state.createDigitalEmployee) {
    state.createDigitalEmployee.legalConfig.company = event.target.value;
    return;
  }
  if (event.target.matches("#createLegalTasks") && state.createDigitalEmployee) {
    state.createDigitalEmployee.legalConfig.tasks = event.target.value.slice(0, 200);
    return;
  }
  const textTarget = event.target.closest("[data-filter-input]");
  if (textTarget) {
    const [scopeKey, itemId] = textTarget.dataset.filterInput.split("|");
    setFilterState({ id: itemId }, textTarget.value, scopeKey);
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("#digitalEmployeeSearch")) {
    state.employeeManagement.keyword = event.target.value;
    render();
    return;
  }
  if (event.target.matches("#digitalEmployeeStatus")) {
    state.employeeManagement.status = event.target.value;
    render();
    return;
  }
  if (event.target.matches("#createLegalRole") && state.createDigitalEmployee) {
    state.createDigitalEmployee.legalConfig.role = event.target.value;
    return;
  }
  if (event.target.matches("#createLegalIndustry") && state.createDigitalEmployee) {
    state.createDigitalEmployee.legalConfig.industry = event.target.value;
    return;
  }
  const fileInput = event.target.closest("#upload-file-input");
  if (!fileInput || !state.docManagement.uploadView) return;
  appendUploadedFiles(Array.from(fileInput.files || []));
  fileInput.value = "";
});

document.addEventListener("dragover", (event) => {
  if (!event.target.closest(".upload-dropzone")) return;
  event.preventDefault();
  event.target.closest(".upload-dropzone").classList.add("dragging");
});

document.addEventListener("dragleave", (event) => {
  const zone = event.target.closest(".upload-dropzone");
  if (zone) zone.classList.remove("dragging");
});

document.addEventListener("drop", (event) => {
  const zone = event.target.closest(".upload-dropzone");
  if (!zone || !state.docManagement.uploadView) return;
  event.preventDefault();
  zone.classList.remove("dragging");
  appendUploadedFiles(Array.from(event.dataTransfer?.files || []));
});

window.addEventListener("hashchange", () => {
  const next = normalizePath(location.hash.slice(1) || "/analytics");
  if (!state.tabs.includes(next)) state.tabs.push(next);
  state.filterMenuKey = "";
  state.filterControlKey = "";
  state.path = next;
  state.openGroups = new Set(defaultOpenGroups(next));
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.createDigitalEmployee) {
    closeCreateDigitalEmployeeModal();
  }
});

window.addEventListener("resize", () => {
  render();
});

state.path = normalizePath(state.path);
if (!state.tabs.includes(state.path)) state.tabs.push(state.path);
render();
