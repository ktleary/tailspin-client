/*
 * Tailspin — character name pools.
 *
 * CURATION (v1, 2026): the original was a wholesale surname-dictionary dump
 * (1,411 entries) — no cultural-spread logic, joke entries ("Alien", "Pop"),
 * given-names posing as surnames, ~200 rows of single-region filler, and heavy
 * spelling-variant duplication (Blakeley/Blakely/Blankley). It is now a curated,
 * evocative-first pool with deliberate cultural spread and era flexibility,
 * sized to serve fiction rather than to exhaust a phone book.
 *
 * Rules applied: kill joke/non-name entries; fold spelling variants to one form;
 * prefer names that read as *character* (texture, era, region) over names that
 * read as database rows; reduce the large regional runs to a representative
 * spread instead of an exhaustive one.
 *
 * Module shape unchanged: export const familyNames / givenNames.
 */

export const familyNames = [
  // British Isles / Anglo
  "Ainsworth", "Atherton", "Barclay", "Barlow", "Barton", "Beckwith", "Bentley",
  "Blackwood", "Burton", "Charlton", "Churchill", "Clare", "Clayton",
  "Crawford", "Cromwell", "Dalton",
  "Davenport", "Durham", "Gladstone", "Hale", "Hamilton",
  "Harrington", "Hastings", "Hayden", "Huxley", "Kent", "Kirby",
  "Lincoln", "Lindsay", "Livingstone", "Marlowe", "Merton",
  "Middleton", "Morley", "Morton", "Norton", "Oakley", "Perry",
  "Sinclair", "Thorne", "Wakefield",
  // Irish / Scottish / Welsh
  "Brennan", "Callahan", "Donnelly", "Douglas", "Doyle", "Egan", "Fitzgerald",
  "Flanagan", "Gallagher", "Kennedy", "Lynch", "McCarthy", "Quinn", "Sullivan",
  // Germanic / Scandinavian / Dutch
  "Aaberg", "Adler", "Berg", "Brandt", "Fischer", "Gerhardt", "Hoffmann",
  "Keller", "Krause", "Lang", "Lindqvist", "Richter",
  "Schmidt", "Vogel", "Wagner", "Weber", "Ziegler",
  // Jewish
  "Birnbaum", "Cohen", "Feldman", "Goldman", "Horowitz", "Kaplan", "Katz",
  "Levy", "Rosen", "Rosenthal", "Schwartz", "Stern", "Weinberg",
  // Italian
  "Bellini", "Caruso", "Colombo", "Conti", "Fontana", "Gallo", "Greco",
  "Leone", "Lombardi", "Moretti", "Rossi", "Russo",
  // Spanish / Portuguese / Latin American
  "Aguilar", "Castillo", "Delgado",
  "Fernandez", "Garcia", "Lopez", "Mendoza", "Morales",
  "Ortiz", "Ramirez", "Rivera", "Salazar", "Torres", "Vargas", "Vega",
  // French
  "Aubert", "Bouchard", "Delacroix", "Dubois", "Duval", "Fontaine", "Girard",
  "Mercier", "Rousseau",
  // Slavic / Central & Eastern European
  "Antonov", "Cerny", "Dvorak", "Horvath", "Ivanov", "Kaminski", "Kowalski",
  "Markov", "Novak", "Petrov", "Sokolov", "Volkov",
  // Greek
  "Alexiou", "Dimitriou", "Georgiou", "Katsaros", "Makris", "Nikolaou",
  "Pappas", "Theodorou",
  // Arabic / Persian / Turkish
  "Abbas", "Ahmed", "Amin", "Darwish", "Haddad", "Hassan",
  "Hussain", "Ibrahim", "Khalil", "Mansour", "Saleh", "Sharif",
  // South Asian
  "Banerjee", "Das", "Gupta", "Kapoor",
  "Khan", "Kumar", "Mehta", "Nair", "Patel", "Rao", "Shah", "Sharma", "Singh",
  // East / Southeast Asian (representative, not exhaustive)
  "Chen", "Cheng", "Cheung", "Huang", "Kato", "Kim",
  "Kwon", "Leung", "Li", "Lin", "Liu", "Nakamura", "Nguyen",
  "Park", "Sato", "Suzuki", "Tanaka", "Tran", "Wang", "Wong", "Wu",
  "Yang", "Yu", "Zhang", "Zhou",
  // African / African-American
  "Adeyemi", "Banks", "Coleman", "Diallo", "Freeman",
  "Jackson", "Jefferson", "Mensah", "Ndiaye", "Okonkwo", "Tucker", "Turner",
  "Washington",
];

export const givenNames = [
  // Feminine / neutral
  "Ada", "Adeline", "Alice", "Amelia", "Amina", "Anna", "Aria", "Audrey",
  "Aurora", "Ava", "Bella", "Camille", "Carmen", "Caroline", "Cecilia",
  "Charlotte", "Clara", "Claire", "Cora", "Daisy", "Diana", "Eleanor", "Elena",
  "Elizabeth", "Ella", "Elsie", "Emilia", "Emma", "Esther", "Eva", "Evelyn",
  "Faye", "Frances", "Freya", "Gemma", "Genevieve", "Grace", "Hannah", "Hazel",
  "Helena", "Iris", "Isabel", "Ivy", "Jade", "Jane", "Jasmine", "Josephine",
  "Joy", "Julia", "Juliet", "June", "Kate", "Lara", "Laura", "Layla", "Leah",
  "Lena", "Lila", "Lily", "Lucia", "Lucy", "Luna", "Maeve", "Margaret",
  "Maria", "Maya", "Mia", "Miriam", "Naomi", "Natalia", "Nora", "Olive",
  "Olivia", "Penelope", "Phoebe", "Priya", "Rachel", "Rebecca", "Rosa",
  "Rose", "Ruth", "Sadie", "Salma", "Sara", "Sienna", "Sofia", "Stella",
  "Sylvia", "Tessa", "Thea", "Victoria", "Violet", "Vivian", "Willow", "Zoe",
  // Masculine
  "Aaron", "Adam", "Adrian", "Albert", "Alexander", "Alfred", "Alistair",
  "Andre", "Andrew", "Anthony", "Arthur", "August", "Axel", "Benjamin",
  "Bernard", "Caleb", "Calvin", "Carlos", "Charles", "Christopher", "Daniel",
  "David", "Declan", "Diego", "Dominic", "Duncan", "Edward", "Elias", "Elliot",
  "Emmett", "Eric", "Ethan", "Ezra", "Felix", "Finn", "Francis", "Frederick",
  "Gabriel", "Grant", "Gregory", "Henry", "Ian", "Isaac", "Isaiah", "Ivan",
  "Jacob", "James", "Javier", "Jeremiah", "Joel", "John", "Jonas", "Joseph",
  "Julian", "Kai", "Leo", "Leon", "Levi", "Liam", "Lucas", "Marco", "Marcus",
  "Martin", "Mateo", "Matthew", "Matthias", "Max", "Michael", "Miguel",
  "Miles", "Milo", "Nathan", "Nicholas", "Noah", "Nolan", "Oliver", "Oscar",
  "Owen", "Patrick", "Paul", "Peter", "Philip", "Raymond", "Richard", "Robert",
  "Roman", "Samuel", "Sebastian", "Simon", "Stephen", "Theodore", "Thomas",
  "Victor", "Vincent", "Walter", "William", "Xavier", "Zachary",
];
