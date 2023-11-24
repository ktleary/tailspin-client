const negativeWords = [
  "guarded",
  "impulsive",
  "impatient",
  "impetuous",
  "stubborn",
  "inflexible",
  "skeptical",
  "resistant to change",
  "defensive",
  "argumentative",
  "pessimistic",
  "uncompromising",
  "narrow-minded",
  "volatile",
  "withdrawn",
  "tactless",
  "imprudent",
  "reckless",
  "rash",
  "hesitant",
  "insecure",
  "obstinate",
  "picky",
  "prickly",
  "quarrelsome",
  "quick-tempered",
  "resentful",
  "rigid",
  "sardonic",
  "selfish",
  "self-absorbed",
  "short-sighted",
  "short-tempered",
  "shrewd",
  "stern",
  "forgetful",
  "absent-minded",
  "aloof",
  "flaky",
  "strict",
  "unforgiving",
  "unpredictable",
  "vague",
  "vain",
  "vengeful",
  "wary",
  "whimsical",
  "wistful",
  "withdrawn",
  "worrywart",
  "zealous",
  "noncommittal",
  "oversensitive",
  "perfectionist",
  "contrarian",
  "cagey",
  "capricious",
  "clumsy",
  "cynical",
  "directionless",
  "discontented",
  "disruptive",
  "distractible",
  "dogmatic",
  "domineering",
  "edgy",
  "evasive",
  "fearful",
  "finicky",
  "frivolous",
  "glum",
  "grumpy",
  "guarded",
  "gullible",
  "hardheaded",
  "hesitant",
  "high-strung",
  "hot-headed",
  "impulsive",
  "indecisive",
  "indiscreet",
  "inflexible",
  "inhibited",
  "judgmental",
  "lackadaisical",
  "mistrustful",
  "nonconformist",
  "oblivious",
  "opinionated",
  "overbearing",
  "overzealous",
  "pessimistic",
  "possessive",
  "reckless",
  "remorseless",
  "rigid",
  "rowdy",
  "scornful",
  "secretive",
  "skeptical",
  "sloppy",
  "stingy",
  "strident",
  "suspicious",
  "temperamental",
  "timid",
  "unpredictable",
  "unruly",
  "vain",
  "volatile",
  "weak-willed",
  "over-priveleged",
  "spoiled",
  "ferocious",
  "terrifying",
  "reward-driven",
  "results-oriented",
  "obsessive",
  "fierce",
  "frightening",
  "nosy",
  "imposing",
  "snoopy",
  "unpleasant",
  "stinky",
  "smelly",
  "greedy",
  "opportunistic",
  "exploitative",
  "manipulative",
  "self-centered",
  "profiteering",
  "bratty",

];

const positiveWords = [
  // Existing traits...
  "low-key",
  "laid-back",
  "chill",
  "easy-going",
  "relaxed",
  "calm",
  "collected",
  "cool",
  "composed",
  "unflappable",
  "unruffled",
  "hilarious",
  "funny",
  "witty",
  "clever",
  "comical",
  "roof-raising",
  "side-splitting",
  "hysterical",
  "astonishing",
  "astounding",
  "whack",
  "wild",
  "mellow",
  "one shot learner",
  "genius",
  "beautiful",
  "stunning",
  "gorgeous",
  "handsome",
  "attractive",
  "rich",
  "wealthy",
  "successful",
  "privileged",
  "lovely",
  "charming",
  "delightful",
  "appealing",
  "engaging",
  "sentimental",
  "enchanting",
  "captivating",
  "fascinating",
  "alluring",
  "bewitching",
  "brilliant",
  "intelligent",
  "quick-witted",
  "clever",
  "smart",
  "wise",
  "sensible",
  "high-functioning",
  "talented",
  "elite",
  "gifted",
  "skilled",
  "altruistic",
  "amiable",
  "approachable",
  "strong",
  "brave",
  "courageous",
  "fearless",
  "muscular",
  "athletic",
  "powerful",
  "big-boned",
  "heavy",
  "healthy",
  "astute",
  "attentive",
  "authentic",
  "big-hearted",
  "bold",
  "candid",
  "charismatic",
  "civic-minded",
  "confident",
  "conscientious",
  "considerate",
  "convivial",
  "cooperative",
  "courageous",
  "courteous",
  "creative",
  "cultured",
  "curious",
  "decisive",
  "dedicated",
  "devoted",
  "discerning",
  "earnest",
  "empowering",
  "endearing",
  "energetic",
  "enlightened",
  "enthusiastic",
  "exemplary",
  "forthright",
  "friendly",
  "fun-loving",
  "generous",
  "gentle",
  "genuine",
  "gracious",
  "hardworking",
  "heartfelt",
  "heroic",
  "high-spirited",
  "imaginative",
  "impartial",
  "indefatigable",
  "industrious",
  "influential",
  "innovative",
  "inspiring",
  "intrepid",
  "irrepressible",
  "jovial",
  "joyful",
  "judicious",
  "keen",
  "kind-hearted",
  "knowledgeable",
  "level-headed",
  "lively",
  "loving",
  "loyal",
  "magnanimous",
  "meticulous",
  "motivated",
  "noble",
  "open-minded",
  "optimistic",
  "orderly",
  "original",
  "outgoing",
  "patient",
  "patriotic",
  "philanthropic",
  "philosophical",
  "playful",
  "pragmatic",
  "proactive",
  "proficient",
  "prudent",
  "quick-witted",
  "rational",
  "reliable",
  "resilient",
  "resourceful",
  "respectful",
  "responsible",
  "responsive",
  "reverent",
  "savvy",
  "self-assured",
  "self-reliant",
  "self-respecting",
  "sensible",
  "serene",
  "sharp-witted",
  "sophisticated",
  "spirited",
  "spontaneous",
  "steadfast",
  "strategic",
  "suave",
  "supportive",
  "sympathetic",
  "thoughtful",
  "tolerant",
  "trailblazing",
  "trustworthy",
  "unassuming",
  "understanding",
  "upbeat",
  "valiant",
  "versatile",
  "vigilant",
  "visionary",
  "warmhearted",
  "well-informed",
  "well-intentioned",
  "well-spoken",
  "wise",
  "witty",
  "zealous",
];

const allWords = positiveWords.concat(negativeWords);

export { allWords, positiveWords, negativeWords };
