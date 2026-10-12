/* 统一成员数据：人物卡 PDF + 亮点素材池。未揭晓彩蛋保持空值。 */
const members = [
  {
    "id": "xinran",
    "order": 1,
    "name": "欣然",
    "image": "assets/members/01-xinran.png",
    "role": "尝试型选手 · 统筹协调者",
    "intro": "什么都想试，习惯先看整体，也擅长把第一版先搭出来。",
    "tags": [
      "先出初稿",
      "爱文字",
      "关注整体"
    ],
    "hiddenTrait": {
      "title": "专业大揭秘：给排水",
      "text": "破冰时大家一路从“海洋？”猜到“水利？”，最后答案是——给排水。"
    },
    "dataStatus": "full"
  },
  {
    "id": "yuze",
    "order": 2,
    "name": "宇泽",
    "image": "assets/members/02-yuze.png",
    "role": "非典型计算机人 · 脑洞观察员",
    "intro": "计算机背景，却在金融和互联网都有涉猎；观察细、脑洞也不少。",
    "tags": [
      "关注细节",
      "擅长观察",
      "爱开脑洞"
    ],
    "hiddenTrait": {
      "title": "AI 时代的马车夫",
      "text": "“马车夫也得学开汽车。”"
    },
    "dataStatus": "full"
  },
  {
    "id": "moon",
    "order": 3,
    "name": "Moon",
    "image": "assets/members/03-moon.png",
    "role": "细节派 · 责任担当",
    "intro": "责任感很强的细节派，做事靠谱；先想清楚再动手，性格偏内向，待人真诚。",
    "tags": [
      "先出初稿",
      "关注整体",
      "关注细节"
    ],
    "hiddenTrait": null,
    "dataStatus": "basic"
  },
  {
    "id": "xiaoru",
    "order": 4,
    "name": "小如",
    "image": "assets/members/04-xiaoru.png",
    "role": "创造型选手 · 文字担当",
    "intro": "爱文字，也爱脑洞；想得深，但更喜欢把想法真的写出来。",
    "tags": [
      "爱文字",
      "思考深",
      "关注整体"
    ],
    "hiddenTrait": {
      "title": "武侠写着写着变玄幻",
      "text": "最开始准备写武侠，后来加入越来越多超现实设定，最后一路写成了玄幻。"
    },
    "dataStatus": "full"
  },
  {
    "id": "xiaoqi",
    "order": 5,
    "name": "小祁",
    "image": "assets/members/05-xiaoqi.png",
    "role": "自由行动派 · 脑洞担当",
    "intro": "把自由和热爱放在前面，不怕失败，也敢马上行动。",
    "tags": [
      "爱开脑洞",
      "关注细节",
      "思考深"
    ],
    "hiddenTrait": {
      "title": "整组唯一显眼 E 人",
      "text": "“整组就我一个 E 人吗？”还贡献了组内高频词：欢迎扩列。"
    },
    "dataStatus": "full"
  },
  {
    "id": "qile",
    "order": 6,
    "name": "栖乐",
    "image": "assets/members/06-qile.png",
    "role": "慢热实干家 · 初稿先锋",
    "intro": "慢热、执着又真诚；一旦开始做，行动速度很在线。",
    "tags": [
      "先出初稿",
      "爱开脑洞",
      "行动快"
    ],
    "hiddenTrait": {
      "title": "韩娱活字典",
      "text": "从二代到六代都能聊，男女团都有涉猎。"
    },
    "dataStatus": "full"
  },
  {
    "id": "xiaozhao",
    "order": 7,
    "name": "小赵",
    "image": "assets/members/07-xiaozhao.png",
    "role": "安静实践派 · 稳定输出",
    "intro": "安静沉稳，踏实积累；目标清晰，专注积累实践经验，参与稳定。",
    "tags": [
      "安静沉稳",
      "踏实肯干",
      "稳定输出"
    ],
    "hiddenTrait": null,
    "dataStatus": "basic"
  },
  {
    "id": "zz",
    "order": 8,
    "name": "ZZ",
    "image": "assets/members/08-zz.png",
    "role": "商科跨界者 · 框架搭建者",
    "intro": "一边找工作，一边试图用 AI 给自己创造工作的商科生。",
    "tags": [
      "关注整体",
      "思考深",
      "擅长收尾"
    ],
    "hiddenTrait": {
      "title": "两真一假，全场零命中",
      "text": "全场没人猜中她的假话——“看电影会泪流满面。”真实状态更像：朋友在旁边哭，她在旁边“地铁老人看手机”。"
    },
    "dataStatus": "full"
  },
  {
    "id": "xiaocheng",
    "order": 9,
    "name": "小诚",
    "image": "assets/members/09-xiaocheng.png",
    "role": "务实落地派 · AI 热情人",
    "intro": "目标明确，对 AI 创作有热情；先想清楚再动手，行动力强。",
    "tags": [
      "务实落地",
      "目标明确",
      "行动力强"
    ],
    "hiddenTrait": null,
    "dataStatus": "basic"
  },
  {
    "id": "orla",
    "order": 10,
    "name": "orla",
    "image": "assets/members/10-orla.png",
    "role": "自洽尝试家 · 观察担当",
    "intro": "自洽从容，愿意尝试新东西，也很会观察和感受生活。",
    "tags": [
      "关注整体",
      "擅长观察",
      "爱文字"
    ],
    "hiddenTrait": {
      "title": "游戏是假，音乐和美食是真",
      "text": "“两真一假”里，她对游戏确实提不起兴趣，但音乐和美食都超爱。"
    },
    "dataStatus": "full"
  },
  {
    "id": "carolyn",
    "order": 11,
    "name": "Carolyn",
    "image": "assets/members/11-carolyn.png",
    "role": "心思细腻派 · 新鲜事爱好者",
    "intro": "爱尝试新鲜事，看情况灵活；心思细腻，共情力强。",
    "tags": [
      "关注整体",
      "擅长观察",
      "思考深"
    ],
    "hiddenTrait": null,
    "dataStatus": "basic"
  },
  {
    "id": "helen",
    "order": 12,
    "name": "Helen",
    "image": "assets/members/12-helen.png",
    "role": "温和慢性子 · 踏实可靠",
    "intro": "温和、耐心、节奏不快，但会认真做好自己分内的事情。",
    "tags": [
      "爱开脑洞",
      "关注整体",
      "踏实可靠"
    ],
    "hiddenTrait": {
      "title": "喜欢猫猫的慢性子",
      "text": "“喜欢猫猫的慢性子。”"
    },
    "dataStatus": "full"
  },
  {
    "id": "yangchengyi",
    "order": 13,
    "name": "杨铖祎",
    "image": "assets/members/13-yangchengyi.png",
    "role": "爽朗西安派 · 观察脑洞家",
    "intro": "性格爽朗，热爱生活，乐于配合。",
    "tags": [
      "爱文字",
      "爱开脑洞",
      "擅长观察"
    ],
    "hiddenTrait": null,
    "dataStatus": "basic"
  },
  {
    "id": "kele",
    "order": 14,
    "name": "可乐",
    "image": "assets/members/14-kele.png",
    "role": "文艺行动派 · 精神富足",
    "intro": "敢想敢做，热爱运动；先想清楚再动，追求精神富足。",
    "tags": [
      "爱开脑洞",
      "关注细节",
      "思考深"
    ],
    "hiddenTrait": null,
    "dataStatus": "basic"
  },
  {
    "id": "ranchengyan",
    "order": 15,
    "name": "冉成燕",
    "image": "assets/members/15-ranchengyan.png",
    "role": "慢热真诚派 · 细节观察员",
    "intro": "慢热但熟了很真诚，熟了便开朗健谈，积极配合。",
    "tags": [
      "关注细节",
      "擅长观察",
      "思考深"
    ],
    "hiddenTrait": null,
    "dataStatus": "basic"
  },
  {
    "id": "xiaoli",
    "order": 16,
    "name": "小粒",
    "image": "assets/members/16-xiaoli.png",
    "role": "爱玩的靠谱人 · 快速行动者",
    "intro": "爱玩但靠谱，行动迅速，乐于承担。",
    "tags": [
      "关注细节",
      "行动快",
      "思考深"
    ],
    "hiddenTrait": null,
    "dataStatus": "basic"
  },
  {
    "id": "xiaokui",
    "order": 17,
    "name": "小葵",
    "image": "assets/members/17-xiaokui.png",
    "role": "外冷内热 · 安静观察派",
    "intro": "安静沉稳的观察派，先想清楚再动手。",
    "tags": [
      "擅长观察",
      "关注整体",
      "关注细节"
    ],
    "hiddenTrait": null,
    "dataStatus": "basic"
  }
];
