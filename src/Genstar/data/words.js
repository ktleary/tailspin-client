const negativeWords = [
  "abrasive",
  "destructive",
  "inconsiderate",
  "aggresessive",
  "detached",
  "indecisive",
  "aimless",
  "difficult",
  "indiscreet",
  "dishonest",
  "disloyal",
  "disobedient",
  "disruptive",
  "dogmatic",
  "aloof",
  "angry",
  "anxious",
  "arrogant",
  "artificial",
  "base",
  "belligerent",
  "bitchy",
  "blunt",
  "boastful",
  "boorish",
  "boringmilous",
  "dull",
  "enervated",
  "envious",
  "erratic",
  "extravagant",
  "careless",
  "caustic",
  "changeable",
  "charmless",
  "extreme",
  "facetious",
  "fanatical",
  "finicky",
  "fixed",
  "flippant",
  "foolish",
  "inflexible",
  "inhibited",
  "Insecure",
  "opinionated",
  "shameless",
  "insensitive",
  "insulting",
  "intolerant",
  "irrational",
  "irresponsible",
  "jealous",
  "judgemental",
  "malicious",
  "materialistic",
  "mean",
  "mechanical",
  "outrageous",
  "over-critical",
  "over-emotional",
  "paranoid",
  "passive",
  "pathetic",
  "atronisin",
  "perverse",
  "petty",
  "pessimistic",
  "petulant",
  "Picky",
  "pompous",
  "predatory",
  "Prejudiced",
  "pretentious",
  "slovenly",
  "sly",
  "sneaky",
  "sordid",
  "stingy",
  "stubborn",
  "stupid",
  "superficial",
  "surly",
  "tactless",
  "tasteless",
  "thoughtless",
  "touchy",
  "truculent",
  "smearing",
  "uncharitable",
  "melodramatic",
  "miserable",
  "forgetful",
  "cold",
  "fussy",
  "moody",
  "gloomy",
  "greedy",
  "coarse",
  "compulsive",
  "conceited",
  "condemnatory",
  "cowardly",
  "crafty",
  "ereZy",
  "cruel",
  "deceitful",
  "grim",
  "gullible",
  "harsh",
  "hateful",
  "hesitant",
  "hostile",
  "nagging",
  "procrasting",
  "puritanical",
  "quick-tempered",
  "quixotic",
  "unfriendly",
  "unkind",
  "unrealistic",
  "unreliable",
  "narcissistic",
  "narrow-minded",
  "nasty",
  "naughty",
  "neglectful",
  "neurotic",
  "ignorant",
  "obnoxious",
  "demanding",
  "impatient",
  "obsessive",
  "dependent",
  "impractical",
  "obstinate",
  "desperate",
  "impulsive",
  "offhand",
  "rash",
  "resentful",
  "ridiculous",
  "rigid",
  "rude",
  "ruthless",
  "sadistic",
  "anal",
  "unstable",
  "untidy",
  "untrustworthy",
  "scornful",
  "scornful",
  "secretive",
  "self-indulgent",
  "selfish",
  "vengeful",
  "vindictive",
  "weak",
  "weak-willed",
  "wilful",
  "withdrawn",
];

const positiveWords = [
  "accessible",
  "adaptable",
  "adventurous",
  "affable",
  "affectionate",
  "175",
  "Positive",
  "Character",
  "Traits",
  "dependable",
  "determined",
  "dignified",
  "diligent",
  "diplomatic",
  "honest",
  "humble",
  "humorous",
  "idealistic",
  "imagmative",
  "passionate",
  "patient",
  "peaceful",
  "perceptive",
  "persistent",
  "sensible",
  "sensitive",
  "shy",
  "sincere",
  "skilful",
  "agreeable",
  "ambitious",
  "amicable",
  "amusing",
  "articulate",
  "balanced",
  "benevolent",
  "brave",
  "bright",
  "brilliant",
  "broad-minded",
  "capable",
  "captivating",
  "careful",
  "caring",
  "charming",
  "clear-headed",
  "clever",
  "compassionatr",
  "disciplined",
  "discreet",
  "dynamic",
  "easy-fleliall",
  "educated",
  "efficient",
  "eloquent",
  "impartial",
  "incisive",
  "independent",
  "empathetic",
  "waging",
  "energetic",
  "innovative",
  "insightful",
  "intelligent",
  "intuitive",
  "inventive",
  "invulnerable",
  "enthusiastic",
  "exuberant",
  "fair",
  "faithful",
  "fearless",
  "firm",
  "flexible",
  "focused",
  "forgiving",
  "kind",
  "liberal",
  "logical",
  "lovable",
  "loving",
  "loyal",
  "magnanimous",
  "mature",
  "meticulous",
  "personable",
  "persuasive",
  "pioneering",
  "placid",
  "plucky",
  "polished",
  "polite",
  "powerful",
  "practical",
  "precise",
  "sociable",
  "solid",
  "spontaneous",
  "sporting",
  "stable",
  "steadfast",
  "stoic",
  "straightforward",
  "strong",
  "principled",
  "profound",
  "protective",
  "prudent",
  "punctual",
  "quick-witted",
  "quiet",
  "rational",
  "relaxed",
  "subtle",
  "sympathetic",
  "tasteful",
  "thorough",
  "thoughtful",
  "tidy",
  "tolerant",
  "tough",
  "unassuming",
  "confident",
  "conscientious",
  "considerate",
  "couragoven",
  "courteous",
  "creative",
  "curious",
  "daring",
  "decent",
  "decisive",
  "educated",
  "frank",
  "friendly",
  "funny",
  "generou",
  "gentle",
  "genuine",
  "hard-working",
  "helpful",
  "heroic",
  "moderate",
  "modest",
  "neat",
  "non-authoritarian",
  "obedient",
  "objective",
  "Open",
  "optimistic",
  "orderly",
  "organised",
  "original",
  "reliable",
  "reserved",
  "resourceful",
  "responsible",
  "responsi",
  "romanticve",
  "scrupulous",
  "secure",
  "tuscomplaining",
  "understanding",
  "upright",
  "versatile",
  "vivacious",
  "Wann",
  "well-read",
  "self-confident",
  "self-disciplined",
  "selfless",
  "well-rounded",
  "willing",
  "wise",
  "witty",
];

const allWords = positiveWords.concat(negativeWords);

export { allWords, positiveWords, negativeWords };
