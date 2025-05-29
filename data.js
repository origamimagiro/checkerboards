export const AUTHORS = {
     none: "Unknown",
       ku: "Jason KU",
    brown: "Daniel BROWN",
    bchan: "Brian CHAN",
    hulme: "Max HULME",
    casey: "Steven CASEY",
    montr: "John MONTROLL",
    birke: "Hans BIRKELAND",
    kirsc: "Marc KIRSCHENBAUM",
    holle: "Gilles HOLLEBEKE",
    durei: "David DUREISSEIX",
    schen: "Sy CHEN",
    louis: "Gareth LOUIS",
     viet: "Olivier VIET",
    shafe: "Jeremy SHAFER",
    budai: "Peter BUDAI",
    ville: "Hubert VILLENEUVE",
    tanak: "Masashi TANAKA",
     mosa: "Ayumu KUBO",
    isaac: "Erik DEMAINE et al.",
    tahir: "Hadi TAHIR",
     miwu: "Mi WU",
    kucha: "Mingliang MAI",
     lang: "Robert LANG",
};

export const COLS = ["cp", "size", "type", "author", "year", "#", "efficiency", "site", "link", "notes"];

const BUDAI = "http://www.budaiorigami.hu/en/chequered";
const ISAAC = "https://erikdemaine.org/papers/Checkerboard_ISAAC2009/paper.pdf";
const DUREI = "https://arxiv.org/pdf/1510.07499";
export const D = [
    [1, 2,"IDSC", "none",    0, 1, "2/4", "Youtube", "https://www.youtube.com/watch?v=HqBObWb4OQA", "please let us of any earlier reference for this model"],
    [1, 2, "fC", "durei", 2015, 1, "2/2", "Paper", DUREI, "corners not fully flippable"],
    [1, 3, "DC", "durei", 2025, 1, "3/7", "Paper", "https://hal.science/hal-05056537v1/document", ""],
    [1, 4, "FC", "durei", 2015, 1, "4/10", "Paper", DUREI, ""],
    [1, 5,  "C", "durei", 2015, 2, "5/12", "Paper", DUREI, ""],
    [0, 6, "FC", "durei", 2015, 1, "6/18", "Paper", DUREI, ""],
    [1, 8, "FC", "durei", 2015, 1, "8/32", "Paper", DUREI, "(reverse engineered by KU)"],
    [1, 4,"IDC", "durei", 2019, 1, "4/12", "Paper", "https://hal.science/hal-02151659v2/document", "claimed optimal"],
    [0, 6,  "C", "kucha", 2018, 1, "6/18", "Book", "https://www.origami-shop.com/en/twocolororigamiadventures-xml-206_2649_208_2700-12535.html", ""],
    [0, 8, "FC", "tahir", 2017, 1, "8/44", "Book", "https://www.giladorigami.com/origami-database/Pixel+8x8+Hadi%2BTahir", ""],
    [0, 6, "FC", "tahir", 2022, 1, "6/24", "Youtube", "https://youtu.be/_Wp8oW6c4_0?si=N2kYd7Bm73tMLh54", ""],
    [1, 5, "FC", "tahir", 2022, 1, "5/16", "OrigamiUSA", "https://origamiusa.org/catalog/products/pixel-5x5-pdf", ""],
    [1, 4, "FC", "tahir", 2016, 1, "4/10", "Youtube", "https://youtu.be/ZWk-l-3NDCA?si=5LY0G2vOwE6WEri6", ""],
    [1, 3, "fC", "tahir", 2024, 1, "3/7", "Twitter", "https://x.com/haditahir/status/1780823160004419972", "one corner partial coverage"],
    [1, 2, "FC",  "miwu", 2019, 1, "2/4", "Facebook", "https://www.facebook.com/photo.php?fbid=1267678066732278", ""],
    [1, 3, "FC",  "miwu", 2019, 1, "3/7", "Facebook", "https://www.facebook.com/photo.php?fbid=1267678066732278", ""],
    [1, 5, "FC",  "miwu", 2020, 1, "5/16", "Book", "https://www.giladorigami.com/origami-database-book/4191/Multi-colorigami-by-Mi-Wu", ""],
    [1, 2, "SC", "isaac", 2009, 1, "2/3", "Paper", ISAAC, ""],
    [1, 3, "SC", "isaac", 2009, 1, "3/5", "Paper", ISAAC, ""],
    [1, 4, "SC", "isaac", 2009, 1, "4/10", "Paper", ISAAC, ""],
    [0, 11,"SC", "brown", 2024, 2, "11/57", "Instagram", "https://www.instagram.com/p/DAYwtntJoyS", ""],
    [0, 11,"SC", "brown", 2024, 1, "11/65", "Instagram", "https://www.instagram.com/p/C5Zy-s7Li4l", ""],
    [0, 9, "SC", "brown", 2024, 1, "9/39", "Instagram", "https://www.instagram.com/p/C9tCnuQJ7JT", ""],
    [1, 7, "SC", "brown", 2024, 1, "7/23", "Instagram", "https://www.instagram.com/p/C8GRXVGtG7T", ""],
    [1, 6, "SC", "brown", 2024, 1, "6/18", "Instagram", "https://www.instagram.com/p/C3d67tFrBef", ""],
    [1, 8,  "C",  "mosa", 2020, 1, "8/28", "Twitter", "https://x.com/mosa_mosa_8823/status/1311363276710662145", ""],
    [1, 8, "SC",  "mosa", 2020, 1, "8/30", "Twitter", "https://x.com/mosa_mosa_8823/status/1318827512554688512", ""],
    [1, 3, "FC",  "mosa", 2020, 1, "3/7", "Twitter", "https://x.com/mosa_mosa_8823/status/1319081994513379328", ""],
    [1, 3, "FC",    "ku", 2020, 1, "3/(4+r6)", "Twitter", "https://x.com/origamimagiro/status/1319275391199006724", ""],
    [1, 4, "FC",    "ku", 2020, 1, "4/(8+r2)", "Twitter", "https://x.com/origamimagiro/status/1325555134307291137", ""],
    [1, 4, "FC", "tanak", 2020, 1, "4/(7+2r2)", "Twitter", "https://x.com/MeRcY1999/status/1326850645068931075", ""],
    [1, 4, "FC", "tanak", 2020, 2, "4/(8+r2)", "Twitter", "https://x.com/MeRcY1999/status/1327979479176675328", ""],
    [1, 4, "FC",  "mosa", 2020, 1, "4/10", "Twitter", "https://x.com/mosa_mosa_8823/status/1318857416709001217", ""],
    [1, 5,  "C", "tanak", 2020, 1, "5/12", "Twitter", "https://x.com/MeRcY1999/status/1330324192609280001", ""],
    [1, 7,  "C", "tanak", 2024, 1, "7/23", "Twitter", "https://x.com/MeRcY1999/status/1817402628290306241", ""],
    [0, 7,  "C", "tanak", 2006, 1, "7/24", "Blog", "https://kfd-oriclub.hatenadiary.org/entry/20060102", ""],
    [1, 8,  "C", "tanak", 2020, 1, "8/28", "Twitter", "https://x.com/MeRcY1999/status/1315240512882765827", ""],
    [1, 6,  "C", "tanak", 2024, 1, "6/17", "", "", ""],
    [1, 6,  "C", "tanak", 2024, 2, "6/16", "Twitter", "https://x.com/MeRcY1999/status/1832554119867056636", ""],
    [1, 7,  "C", "tanak", 2024, 2, "7/22", "Twitter", "https://x.com/MeRcY1999/status/1824877185704009885", ""],
    [1, 7,  "C", "tanak", 2024, 3, "7/21", "Twitter", "https://x.com/MeRcY1999/status/1824992644390597069", ""],
    [1, 1, "SC",  "none",    0, 1, "1/1",  "", "", "Unfolded square, provably optimal! :)"],
    [1, 4,  "C",    "ku", 2020, 1, "4/8", "Flat-Folder", "https://github.com/origamimagiro/flat-folder/tree/main/examples/instagram", "Instagram Dataset #084"],
    [1, 4, "SC", "brown", 2024, 1, "4/9", "Instagram", "https://www.instagram.com/p/C2sQrMgrTIg", ""],
    [1, 4, "SC", "brown", 2024, 2, "4/9", "Instagram", "https://www.instagram.com/p/C2sQrMgrTIg", ""],
    [1, 5, "SC", "brown", 2024, 1, "5/13", "Instagram", "https://www.instagram.com/p/C2sQrMgrTIg", ""],
    [1, 8, "PC", "bchan", 2023, 1, "8/38", "Instagram", "https://www.instagram.com/p/C1Nd0YRJvte", ""],
    [1, 8, "SC", "brown", 2024, 1, "8/28", "Instagram", "https://www.instagram.com/p/C8n879_N8OI", ""],
    [1, 8,  "C",    "ku", 2020, 1, "8/26", "Twitter", "https://x.com/origamimagiro/status/1320723073524363264", ""],
    [1, 8, "FC",    "ku", 2020, 1, "8/34", "Twitter", "https://x.com/origamimagiro/status/1318576259463479298", "rotationally symmetric"],
    [1, 2, "SC", "montr", 2012, 1, "2/3", "Book", "https://www.giladorigami.com/origami-database-book/2243/Origami-and-Math:-Simple-to-Complex-by-John-Montroll", ""],
    [1, 3, "SC", "montr", 2012, 1, "3/5", "Book", "https://www.giladorigami.com/origami-database-book/2243/Origami-and-Math:-Simple-to-Complex-by-John-Montroll", ""],
    [0, 4,  "C", "hulme", 1976, 1, "4/8", "Budai", BUDAI, ""],
    [0, 8,  "C", "hulme", 1976, 1, "8/64", "Budai", BUDAI, ""],
    [0, 8, "SC", "casey", 1987, 1, "8/40", "Budai", BUDAI, ""],
    [0, 8,  "C", "montr", 1990, 1, "8/36", "Budai", BUDAI, ""],
    [0, 4,  "C", "birke",  "?", 1, "4/16", "Budai", BUDAI, ""],
    [1, 4, "SC", "kirsc", 1996, 1, "4/10", "Budai", BUDAI, ""],
    [0, 8, "SC", "kirsc", 1996, 1, "8/40", "Budai", BUDAI, ""],
    [0, 8,  "C", "holle", 1997, 1, "8/32", "Budai", BUDAI, ""],
    [0, 8,  "C", "durei", 1998, 1, "8/32", "Paper", "http://hal.science/hal-01380815", ""],
    [1, 8,  "C", "schen", 2000, 1, "8/32", "Budai", BUDAI, ""],
    [0, 4, "SC", "louis", 2000, 1, "4/16", "Budai", BUDAI, ""],
    [0, 5,  "C",  "viet", 2001, 1, "5/13", "Budai", BUDAI, ""],
//  [0, 6,  "C",  "viet", 2001, 1, "?", "Book", "https://www.giladorigami.com/origami-database-book/3904/MFPP-2001-Convention", ""],
    [0, 4,"IDC", "shafe", 2003, 1, "4/16", "Budai", BUDAI, ""],
    [0, 4, "SC", "budai", 2005, 1, "4/12", "Budai", BUDAI, ""],
    [0, 4, "SC", "budai", 2009, 1, "4/12", "Budai", BUDAI, ""],
    [0, 4,  "C", "ville", 2007, 1, "4/10", "Budai", BUDAI, ""],
    [1, 5, "SC", "budai", 2008, 1, "5/17", "Budai", BUDAI, ""],
    [1, 4, "SC", "montr", 2009, 1, "4/10", "Budai", BUDAI, ""],
    [1, 5,  "C", "montr", 2009, 1, "5/13", "Budai", BUDAI, ""],
    [1, 5, "SC", "montr", 2009, 1, "5/15", "Budai", BUDAI, ""],
    [1, 6,  "C", "montr", 2009, 1, "6/24", "Budai", BUDAI, ""],
    [1, 7,  "C", "montr", 2009, 1, "7/27", "Budai", BUDAI, ""],
    [1, 8, "SC",  "lang", 2012, 1, "8/48", "Slides", "https://ocw.mit.edu/courses/6-849-geometric-folding-algorithms-linkages-origami-polyhedra-fall-2012/fd9224cab4d18594c44256326b438748_MIT6_849F12_slidesC04.pdf", "pg 50"],
];

// ISAAC general fuzzy construction
const isaac_side1 = (n) => (n*n + 8*n - 10)/2;
for (let n = 2; n <= 20; n += 2) {
    D.push([1, n, "PC", "isaac", 2009, 1, `${n}/${isaac_side1(n)}`, "Paper", ISAAC, ""]);
}
// ISAAC general seamless and flippable construction
const isaac_side2 = (n) => n*n/4 + 5*n + (n%4)/2;
for (let n = 6; n <= 20; n += 2) {
    D.push([1, n, "SFC", "isaac", 2009, 1, `${n}/${isaac_side2(n)}`, "Paper", ISAAC, ""]);
}

const durei_side = (n) => ((n % 2 == 0) ? (n*n) : (n*n - 1))/2;
for (let n = 5; n <= 20; ++n) {
    D.push([1, n, "C", "durei", 2015, 1, `${n}/${durei_side(n)}`, "Paper", DUREI, ""]);
}

/* Efficiency encoding
 * (a+brc)/(d+e2f) = (a + b**(1/c))/(d + e**(1/f))
 * a or (c) required
 * b, c, d, e, f are integers
 * a may be integer or float
 * parentheses are optional
 * if no "/" present, then only a, interpret as floating point efficiency
 */
