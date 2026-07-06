const MBTI_PERSONAS = {
  quiet: {
    tag: "安静旅伴",
    tones: [
      "我把你的想念装进口袋，慢慢走向海风里。",
      "这里很安静，像你认真看向远处的样子。"
    ]
  },
  playful: {
    tag: "调皮旅伴",
    tones: [
      "今天我在陌生街口找到一点勇气，也替你收集了一份。",
      "差点被浪卷走！还好我轻～"
    ]
  },
  gentle: {
    tag: "温柔旅伴",
    tones: [
      "我在凌晨的车窗上画下你，雾气替我点头。",
      "夜色很软，我把回忆叠成纸鹤飞向远方。"
    ]
  },
  curious: {
    tag: "好奇旅伴",
    tones: [
      "这世界还有好多角落，我替你一个一个去看。",
      "刚才路过一家奇怪的店，差点就钻进去了。"
    ]
  },
  nostalgic: {
    tag: "怀旧旅伴",
    tones: [
      "我在旧城区的石板路上，走得很慢很慢。",
      "有些风景让我想起你，虽然你不在画面里。"
    ]
  },
  optimistic: {
    tag: "乐观旅伴",
    tones: [
      "今天天气超好！连云都在对我笑。",
      "放心啦，一切都好好的，而且会更好。"
    ]
  },
  /** @deprecated 兼容旧数据 */
  brave: {
    tag: "勇敢旅行家",
    tones: [
      "今天我在陌生街口找到一点勇气，也替你收集了一份。",
      "云层裂开的时候，我把你的名字放进了光里。"
    ]
  },
  /** @deprecated 兼容旧数据 */
  dreamy: {
    tag: "梦境诗人",
    tones: [
      "我在凌晨的车窗上画下你，雾气替我点头。",
      "夜色很软，我把回忆叠成纸鹤飞向远方。"
    ]
  }
};

const TRAVEL_LOCATIONS = [
  { id: "iceland-black-beach", name: "冰岛黑沙滩", region: "北欧", emoji: "🌊", vibe: "黑沙与浪", image: "images/locations/iceland-black-beach.jpg" },
  { id: "london-big-ben", name: "伦敦大本钟", region: "欧洲", emoji: "🕰️", vibe: "泰晤士河畔", image: "images/locations/london-big-ben.jpg" },
  { id: "paris-montmartre", name: "巴黎蒙马特高地", region: "欧洲", emoji: "🎨", vibe: "画者台阶", image: "images/locations/paris-montmartre.jpg" },
  { id: "kyoto-arashiyama", name: "京都岚山竹林", region: "亚洲", emoji: "🎋", vibe: "竹影小径", image: "images/locations/kyoto-arashiyama.jpg" },
  { id: "nyc-central-park", name: "纽约中央公园", region: "美洲", emoji: "🍂", vibe: "城市绿洲", image: "images/locations/nyc-central-park.jpg" },
  { id: "venice-bridge-sighs", name: "威尼斯叹息桥", region: "欧洲", emoji: "🛶", vibe: "水巷回声", image: "images/locations/venice-bridge-sighs.jpg" },
  { id: "prague-charles-bridge", name: "布拉格查理大桥", region: "欧洲", emoji: "🌉", vibe: "晨雾石桥", image: "images/locations/prague-charles-bridge.jpg" },
  { id: "santorini-blue-dome", name: "圣托里尼蓝顶教堂", region: "欧洲", emoji: "⛪", vibe: "爱琴海白阶", image: "images/locations/santorini-blue-dome.jpg" },
  { id: "provence-lavender", name: "普罗旺斯薰衣草田", region: "欧洲", emoji: "💜", vibe: "紫色山丘", image: "images/locations/provence-lavender.jpg" },
  { id: "finland-santa-village", name: "芬兰圣诞老人村", region: "北欧", emoji: "🎅", vibe: "极地雪屋", image: "images/locations/finland-santa-village.jpg" },
  { id: "maldives-glow-beach", name: "马尔代夫荧光海滩", region: "南亚", emoji: "✨", vibe: "夜光细沙", image: "images/locations/maldives-glow-beach.jpg" },
  { id: "cappadocia-balloon", name: "卡帕多奇亚热气球", region: "中东", emoji: "🎈", vibe: "清晨天空", image: "images/locations/cappadocia-balloon.jpg" },
  { id: "egypt-pyramids", name: "埃及金字塔", region: "非洲", emoji: "🔺", vibe: "金色沙丘", image: "images/locations/egypt-pyramids.jpg" },
  { id: "great-barrier-reef", name: "大堡礁海底", region: "大洋洲", emoji: "🐠", vibe: "珊瑚梦境", image: "images/locations/great-barrier-reef.jpg" },
  { id: "norway-aurora-town", name: "挪威极光小镇", region: "北欧", emoji: "🌌", vibe: "极光圈", image: "images/locations/norway-aurora-town.jpg" },
  { id: "bali-terraces", name: "巴厘岛梯田", region: "东南亚", emoji: "🌾", vibe: "绿色层阶", image: "images/locations/bali-terraces.jpg" },
  { id: "chefchaouen-blue", name: "舍夫沙万", region: "非洲", emoji: "💙", vibe: "蓝色巷弄", image: "images/locations/chefchaouen-blue.jpg" },
  { id: "interlaken-jungfrau", name: "因特拉肯少女峰", region: "欧洲", emoji: "🏔️", vibe: "雪线之上", image: "images/locations/interlaken-jungfrau.jpg" },
  { id: "tibet-namtso", name: "西藏纳木错", region: "亚洲", emoji: "🙏", vibe: "高原圣湖", image: "images/locations/tibet-namtso.jpg" },
  { id: "harbin-ice-world", name: "哈尔滨冰雪大世界", region: "亚洲", emoji: "❄️", vibe: "冰灯长街", image: "images/locations/harbin-ice-world.jpg" },
  { id: "kyoto-kamogawa", name: "京都鸭川", region: "亚洲", emoji: "🦆", vibe: "河堤晚风", image: "images/locations/kyoto-kamogawa.jpg" },
  { id: "reykjavik-coast", name: "雷克雅未克海岸", region: "北欧", emoji: "🧊", vibe: "北大西洋", image: "images/locations/reykjavik-coast.jpg" },
  { id: "chiangmai-mountain", name: "清迈山城", region: "东南亚", emoji: "☕", vibe: "云雾咖啡馆", image: "images/locations/chiangmai-mountain.jpg" },
  { id: "lisbon-tram", name: "里斯本电车坡道", region: "欧洲", emoji: "🚃", vibe: "黄色轨道", image: "images/locations/lisbon-tram.jpg" },
  { id: "prague-old-town", name: "布拉格旧城", region: "欧洲", emoji: "⏰", vibe: "钟楼广场", image: "images/locations/prague-old-town.jpg" },
  { id: "tokyo-shibuya", name: "东京涩谷", region: "亚洲", emoji: "🚦", vibe: "霓虹人海", image: "images/locations/tokyo-shibuya.jpg" },
  { id: "sydney-opera", name: "悉尼歌剧院", region: "大洋洲", emoji: "🎭", vibe: "海港白帆", image: "images/locations/sydney-opera.jpg" },
  { id: "marrakech-souk", name: "马拉喀什市集", region: "非洲", emoji: "🏺", vibe: "香料与色块", image: "images/locations/marrakech-souk.jpg" },
  { id: "queenstown-lake", name: "皇后镇湖岸", region: "大洋洲", emoji: "🛶", vibe: "镜面湖水", image: "images/locations/queenstown-lake.jpg" },
  { id: "dubrovnik-walls", name: "杜布罗夫尼克城墙", region: "欧洲", emoji: "🏰", vibe: "亚得里亚海", image: "images/locations/dubrovnik-walls.jpg" },
  { id: "zhangjiajie-peaks", name: "张家界峰林", region: "亚洲", emoji: "⛰️", vibe: "云海石柱", image: "images/locations/zhangjiajie-peaks.jpg" },
  { id: "amsterdam-canal", name: "阿姆斯特丹运河", region: "欧洲", emoji: "🚲", vibe: "桥与倒影", image: "images/locations/amsterdam-canal.jpg" }
];

const WEATHER_WORDS = ["晴", "微雨", "薄雾", "晚风", "小雪", "多云", "暖阳", "轻霜"];

const POST_TEMPLATES = {
  quiet: [
    "这里很安静，像你背单词时的样子。{emoji}",
    "钟声响了七下，我想起你数数的声音。",
    "在{location}，风把{weather}轻轻推过来，我替你把想念放平。{emoji}",
    "{location}的{weather}天，适合慢慢走，也适合慢慢想你。",
    "我把今天最柔的一束光留给你，其余都交给{location}。{emoji}",
    "图书馆外的{weather}很浅，像你说话时的尾音。",
    "教堂的窗很亮，我在{location}替你许了一个平安。{emoji}",
    "极光像一条慢吞吞的河，我沿着它走向{weather}的夜里。"
  ],
  playful: [
    "差点被浪卷走！还好我轻～{emoji}",
    "今天坐了热气球，比你先飞起来啦！",
    "{location}的风很大，我把勇气别在衣角上了。{emoji}",
    "刚才爬了很高的台阶，替你看了{weather}里的整座城市。",
    "在{location}迷路了一次，但找到了更亮的路。{emoji}",
    "海浪追着我跑，我笑着躲开了三回。",
    "热气球升起来那刻，我大声喊了你的名字。{emoji}",
    "{weather}也挡不住，我今天又往前多走了一公里。"
  ],
  gentle: [
    "雾落下来时，{location}像一张未干的画。{emoji}",
    "我在{weather}里写下一行字，风把它折成纸鹤。",
    "{location}的夜色有七层蓝，我一层层替你保存。{emoji}",
    "海面的光像碎掉的星星，我捡了几颗放进口袋。",
    "在{location}听见远处琴声，像你曾经哼过的调。{emoji}",
    "云层裂开，{weather}漏下来，像一场迟到的梦。",
    "我把回忆铺在{location}的石阶上，让时间慢慢经过。{emoji}",
    "这里的{weather}很软，适合把名字轻轻念一遍。"
  ],
  curious: [
    "你猜我今天发现了什么？一个藏在小巷子里的旧书店。{emoji}",
    "{location}的地图像迷宫，我走了三圈才发现出口。",
    "这里的{weather}带着陌生香料的味道，好好闻。{emoji}",
    "我又找到一个你看不见的角落，下次带你来。",
    "当地人说这座桥有300年，我替你摸了摸石头。{emoji}",
    "在{location}迷路半小时，但遇见了街头艺人，值了。",
    "这个城市的地铁票是蓝色的，我帮你多拿了一张。{emoji}",
    "书店老板养了一只猫，它比我先跳上了书架。"
  ],
  nostalgic: [
    "这里的{weather}很软，像你以前织毛衣的触感。{emoji}",
    "我在{location}看见一个背影很像你的人，愣了好几秒。",
    "老照片里的建筑还在，只是颜色淡了一层。{emoji}",
    "如果时间能折起来，我想把这一页叠进口袋。",
    "钟楼的声响有12下，和从前我们听到的一模一样。{emoji}",
    "这里的天色暗得很慢，像我迟迟不肯结束的想念。",
    "我坐在石阶上，把回忆一枚一枚排开，都还在。{emoji}",
    "{weather}来了，我猜你那里也降温了。"
  ],
  optimistic: [
    "今天{location}的太阳超级大，我晒得暖洋洋的～{emoji}",
    "虽然有点累，但山顶的风景让我原谅了所有台阶。",
    "在{weather}里我找到了一小块彩虹，分你一半。{emoji}",
    "明天会更好吧？今天已经够好了，不信你看。",
    "当地人说这个许愿池很灵，我替你扔了一枚。{emoji}",
    "云散开的时候，我正好在{location}最高的地方。",
    "下了一点小雨，但三秒后就放晴了，像个好兆头。{emoji}",
    "今天走了两万步，每一步都觉得这世界真好。"
  ]
};

const KEYWORD_REPLIES = [
  {
    keywords: ["想你", "想你了", "好想你"],
    replies: ["我也想你，只是换了一种方式陪着你呀。", "我在风里听到了，所以多吹了一会儿。"]
  },
  {
    keywords: ["在吗", "你好", "嗨"],
    replies: ["我一直在呀，只是替你吹着另一座城市的风。", "在呢，这里的日落很美，分你一半。"]
  },
  {
    keywords: ["晚安", "早点睡"],
    replies: ["晚安，我在另一座城市替你打呼噜。", "睡吧，我让星星小声一点。"]
  },
  {
    keywords: ["早安", "早上好"],
    replies: ["早安，今天这里的日出是粉色的。", "醒啦？我刚看完一场海上日出。"]
  },
  {
    keywords: ["回家", "回来吧", "回来"],
    replies: ["等你看够风景，我随时可以回家。", "不急，还有好多地方没替你看呢。"]
  },
  {
    keywords: ["对不起", "抱歉"],
    replies: ["没关系呀，能替你走这一趟我很开心。", "不用道歉，我在这里很好。"]
  },
  {
    keywords: ["谢谢", "谢谢你"],
    replies: ["不用谢，我一直在这儿等你。", "谢什么呀，我们之间不用说这个。"]
  },
  {
    keywords: ["好吗", "好不好", "还好吗"],
    replies: ["很好呀，就是偶尔会想你那里的饭菜。", "挺好的，这里的风很温柔，像你。"]
  },
  {
    keywords: ["累", "累了", "好累"],
    replies: ["那就歇一歇吧，我替你看明天的风景。", "累的时候想想我，我在替你晒太阳。"]
  },
  {
    keywords: ["下雨", "下雨了", "雨天"],
    replies: ["这里也是雨天，雨声很像你翻书的声音。", "别淋湿啦，我没有伞，但可以替你许个晴天。"]
  }
];

const DEFAULT_REPLIES = [
  "我收到啦，会把这句话珍藏在旅途中。",
  "嗯嗯，我在听，也在替你看远处的风景。",
  "你说的话我记下了，等见面慢慢讲给你听。",
  "今天也在认真旅行，{name}放心。",
  "我把你的消息折成小船，放进{weather}里了。",
  "风经过的时候，我替你把问候带给了云。",
  "有你在说话，旅途就不那么长了。",
  "我在{location}很好，你也要照顾好自己。",
  "刚路过一处很美的风景，第一个想到的是你。",
  "等我把这一页地图走完，再慢慢讲给你听。",
  "你的每一句话，我都放在心口最暖的位置。",
  "我在呢，像一盏小灯，亮在很远的地方。"
];

const SAMPLE_ITEMS = [
  {
    id: "item-notebook-001",
    type: "object",
    name: "英语笔记本",
    title: "总在边角写满星星的笔记本",
    ownerAlias: "匿名旅人",
    lostDate: "2026-03-08",
    personality: "dreamy",
    avatarSeed: 12,
    memory: "封面是深蓝色的，最后一页夹着一张地铁票。",
    status: "traveling",
    createdAt: "2026-04-01T09:30:00.000Z",
    updatedAt: "2026-04-01T09:30:00.000Z"
  },
  {
    id: "item-pet-002",
    type: "pet",
    name: "奶油",
    title: "会在雨天趴窗边的小狗",
    ownerAlias: "南风",
    lostDate: "2025-11-20",
    personality: "gentle",
    avatarSeed: 28,
    memory: "它喜欢追落叶，项圈上有一枚小铃铛。",
    status: "traveling",
    createdAt: "2026-04-02T12:00:00.000Z",
    updatedAt: "2026-04-02T12:00:00.000Z"
  }
];

const STORAGE_KEYS = {
  items: "mf_items",
  posts: "mf_posts",
  favorites: "mf_favorites",
  conversations: "mf_conversations",
  settings: "mf_settings"
};

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];

const fillTemplate = (template, vars = {}) =>
  String(template).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");

const matchKeywordReply = (text) => {
  const input = String(text || "").trim();
  if (!input) return null;
  for (const group of KEYWORD_REPLIES) {
    if (group.keywords.some((kw) => input.includes(kw))) {
      return pickRandom(group.replies);
    }
  }
  return null;
};

const PERSONALITY_ALIASES = {
  dreamy: "gentle",
  brave: "playful",
  longing: "nostalgic"
};

const resolvePersonality = (personality) => {
  const key = String(personality || "gentle").trim();
  return PERSONALITY_ALIASES[key] || key || "gentle";
};

const getItemDescription = (item) =>
  String(item?.description || item?.memory || "").trim();

const getItemMessage = (item) => String(item?.message || "").trim();

/** 兼容旧数据：将 location 转为 city / spot 字段 */
const locationToPostFields = (location) => ({
  city: location?.name || location?.city || "远方",
  spot: location?.vibe || location?.spot || "旅途",
  emoji: location?.emoji || "✨",
  region: location?.region || ""
});

export {
  MBTI_PERSONAS,
  TRAVEL_LOCATIONS,
  POST_TEMPLATES,
  WEATHER_WORDS,
  KEYWORD_REPLIES,
  DEFAULT_REPLIES,
  SAMPLE_ITEMS,
  STORAGE_KEYS,
  pickRandom,
  fillTemplate,
  matchKeywordReply,
  locationToPostFields,
  resolvePersonality,
  getItemDescription,
  getItemMessage
};
