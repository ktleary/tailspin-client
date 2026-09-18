/*
 * Tailspin — plot points (story premises / inciting incidents).
 *
 * CURATION (v1, 2026): audited against Ronald B. Tobias's *20 Master Plots*
 * taxonomy (library/20-master-plots) and the Freytag arc the vault's
 * five-elements-storytelling resource lays out. Changes:
 *  - Fixed grammar/typo defects in several premises ("must vercome a monster",
 *    "a villian has taken over", "a small asteroid is collides with the moon",
 *    "A character discover that...").
 *  - Merged the commented-out scratch block at the foot of the old file, which
 *    duplicated eight live entries, into one list; removed the duplicate block.
 *  - Filled the master-plot shapes the old list under-served: Pursuit, Rescue,
 *    Escape, Rivalry, Sacrifice, Wretched Excess, and Ascension/Descension were
 *    thin or absent.
 *  - These are *inciting incidents* (opening state / complication), not whole
 *    arcs — a Tailspin premise should hand the writer a story already in motion.
 *
 * Coverage note (Tobias 20): Adventure, Pursuit, Rescue, Escape, Revenge,
 * The Riddle, Rivalry, Underdog, Temptation, Metamorphosis, Transformation,
 * Maturation, Love, Forbidden Love, Sacrifice, Discovery, Wretched Excess,
 * Ascension, Descension, Quest — all represented below.
 *
 * Module shape unchanged: default export.
 */

const plotPoints = [
  // -- Quest / Adventure
  "A relic-hunter crosses a dying world to find the one archive that still remembers the truth.",
  "A young character sets out to find the parent who vanished when they were small.",
  "A cargo pilot takes one last run through a blockaded strait.",
  "An expedition to map an unmapped valley finds the valley is mapping them back.",
  "A journey to a distant and mythical land that no map agrees on.",
  // -- Pursuit / Escape / Rescue
  "A fugitive carrying a stolen ledger is chased across three borders.",
  "A detective hunts a suspect who is always exactly one day ahead.",
  "A child of a powerful politician is kidnapped.",
  "A woman must break her brother out of a private prison before his transfer.",
  "A defector has forty-eight hours to cross the frontier before it closes.",
  "A group of cave explorers are pursued by an unseen, malevolent force.",
  "A doomsday cult's escape plan depends on a member who has stopped believing.",
  // -- Revenge / Rivalry
  "A quest for revenge that consumes the protagonist.",
  "A character returns to the town that ruined her family and buys the paper mill.",
  "Two long-time friends enter a new phase of life together and get different outcomes.",
  "A sibling rivalry turns lethal when the family firm must choose an heir.",
  "A retired athlete is forced back to compete against the protégé who betrayed him.",
  // -- The Riddle / Discovery
  "A brilliant detective engages in a battle of wits with an arch nemesis.",
  "A character is accused of a crime without ever being told what the crime is.",
  "The protagonist learns that Planet Earth is a simulation and is sworn to secrecy.",
  "An unexpected discovery that changes the protagonist's perspective on their own life.",
  "A private investigator is hired to investigate a spouse's infidelity and uncovers a larger conspiracy.",
  "A secret society is formed to protect the knowledge that Earth is a simulation.",
  "A mysterious letter with a cryptic message that only the dead could have written.",
  "A hidden treasure map that leads to consequences no one who drew it intended.",
  // -- Temptation / Wretched Excess
  "A rich patron offers to fund the protagonist's dream project, but with a catch.",
  "A character finds an online community where they can play truth or dare, but the dares start to become dangerous.",
  "A businessman enters the dark world of organized crime.",
  "The head of a powerful organization is advised by consultants to step down after a series of scandals.",
  "A defense attorney is forced to defend a client she knows is guilty.",
  "A character discovers a food that makes every meal taste like the best meal of their life, and cannot stop.",
  // -- Metamorphosis / Transformation
  "The main character begins to gradually age backwards.",
  "A character undergoes a procedure to erase their ex from their memories.",
  "A cop infiltrates a gang and becomes enamored with the lifestyle.",
  "A character discovers that they can copy and paste objects in real life.",
  "A character discovers that they can use their mind to copy and paste text between devices.",
  "A character suffers from short-term memory loss and cannot form new memories.",
  "A character who wakes up with a new identity and a life they do not remember choosing.",
  "A society where emotions are forbidden, and a character who starts to feel.",
  // -- Maturation / Love / Forbidden Love
  "A group of college students are hanging out on the front porch of their summer rental when news arrives that a national draft has been reinstated.",
  "A teenager must decide whether to leave home for good on the morning of their sister's wedding.",
  "An overworked businessman falls for a high-spirited waitress who works the late shift at a local restaurant.",
  "An affair between a politician and a dancer is complicated by forces keeping them apart.",
  "A reunion with a long-lost love or family member who has changed beyond recognition.",
  "A parent and a grown child are stranded together for the first time in twenty years.",
  // -- Sacrifice / Underdog
  "A parent must give up the only thing keeping them alive to save their child.",
  "An underdog rises to a challenge that everyone competent has already declined.",
  "A whistleblower sacrifices their career to protect a stranger they will never meet.",
  // -- Ascension / Descension
  "The protagonist goes from rags to riches, and the riches are the problem.",
  "An ambitious sibling visits, urging the protagonist to return and strive for more.",
  "A once-celebrated surgeon loses their license and begins practising in the dark.",
  "A mysterious young woman seduces lonely men in the evening and learns a secret about herself.",
  "A character is de-banked after being wrongly accused of hate speech.",
  // -- Modern / technology (the app's strongest territory)
  "A character believes that internet ad agencies can read their mind and sets out to prove it.",
  "The main character falls victim to a ransomware attack and must pay a ransom to get their data back.",
  "Telecom companies begin censoring cell phone calls and text messages as monitoring becomes more widespread.",
  "A new law banning internet advertising is passed, putting the internet out of reach for ordinary people who cannot afford to pay for services.",
  "A group of libertarians are elected on a platform of ending copyright; the wave of creativity is short-lived as creators lose motivation.",
  "The internet is shut down.",
  "A character who builds a sentient AI that becomes their closest ally.",
  "A competition where the characters must outsmart a superintelligent AI.",
  "A character's invention goes viral, leading to fame and unforeseen challenges.",
  "A character finds a device which allows them to watch others through their television sets.",
  "The protagonist's hidden power is super hearing — they can hear conversations through the walls.",
  "All inhabitants of Earth wake up two days into the future.",
  "A small asteroid collides with the moon, narrowly missing Earth.",
  "A group of forty benevolent aliens arrive on Earth and try corrupt leaders for crimes against sentient beings.",
  "A villain has taken over the only grocery store within miles of a rural town.",
  "A prophecy that sets the fate of the characters in motion.",
  // -- Domestic / suspense
  "A mother living with her two young children in a large, isolated home finds herself frightened by loud noises in the night.",
  "A mystery writer retreats to his lake cabin after learning his wife is cheating on him and is visited by a stranger.",
  "Five members of a news channel disappear while shooting an episode of a paranormal TV show in a haunted location.",
  "A group of twenty-somethings are on a weeklong vacation when one of them goes missing.",
  "The characters wake up from a party in Las Vegas with no memory of the previous night and one of the group missing.",
  "The mirage of a happily married couple shatters when one of them goes missing and the other is the prime suspect.",
  "An outdoor high school party is broken up by the police, who film the event and play it for the students' parents.",
  "The best friend of the protagonist turns out to be a figment of their imagination.",
  "A character's car breaks down in the middle of nowhere.",
  "An Uber driver travels cross-country giving free rides to hitchhikers along the way.",
  "A radio talk show host becomes involved in the life of one of his listeners.",
  "A secret service agent is assigned to protect a prominent politician's daughter.",
  "A character is evicted from their home after being unable to pay their rent.",
  "A local barbershop turns out to be a front for something much older.",
  // -- Turning points (mid-story beats, useful as complications)
  "A betrayal by a trusted friend.",
  "A twist of fate that brings two characters together.",
  "A moral dilemma that tests the protagonist's values.",
  "A moment of triumph that is short-lived.",
  "A moment of self-realization.",
  "A time loop or recurring event that the protagonist must break.",
  "A character who can see the future but is unable to change it.",
];

export default plotPoints;