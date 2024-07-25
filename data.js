export const AUTHORS = {
    none:  "None",
    ku:    "Jason KU",
    brown: "Daniel BROWN",
    bchan: "Brian CHAN",
    hulme: "Max HULME",
    casey: "Stephen CASEY",
    montr: "John MONTROLL",
    birke: "Hans BIRKELAND",
    kirsc: "Marc KIRSCHENBAUM",
    holle: "Gilles HOLLEBEKE",
    durei: "David DUREISSEIX",
    schen: "Sy CHEN",
    louis: "Gareth LOUIS",
    viet:  "Olivier VIET",
    shafe: "Jeremy SHAFER",
    budai: "Peter BUDAI",
    ville: "Hubert VILLENEUVE",
    tanak: "Masashi TANAKA",
     mosa: "@mosa_mosa_8823",
    isaac: "Demaine et al.",
};

export const COLS = ["cp", "grid", "type", "author", "year", "#", "efficiency", "notes"];

const BUDAI = `<a href="http://www.budaiorigami.hu/en/chequered">Budai</a>`;
export const D = [
    [0, 11,  "seamless", "brown", 2024, 1, "11/65",
        `<a href="https://www.instagram.com/p/C5Zy-s7Li4l">Instagram</a>`],
    [0, 9,  "seamless", "brown", 2024, 1, "9/39",
        `<a href="https://www.instagram.com/p/C9tCnuQJ7JT">Instagram</a>`],
    [0, 7,  "seamless", "brown", 2024, 1, "7/23",
        `<a href="https://www.instagram.com/p/C8GRXVGtG7T/">Instagram</a>`],
    [0, 6,  "seamless", "brown", 2024, 1, "6/18",
        `<a href="https://www.instagram.com/p/C3d67tFrBef/">Instagram</a>`],
    [0, 8,     "fuzzy",  "mosa", 2020, 1, "8/28", 
        `<a href="https://x.com/mosa_mosa_8823/status/1311363276710662145">Twitter</a>`],
    [0, 8,  "seamless",  "mosa", 2020, 1, "8/30", 
        `<a href="https://x.com/mosa_mosa_8823/status/1318827512554688512">Twitter</a>`],
    [0, 3, "flippable",  "mosa", 2020, 1, "3/7", 
        `<a href="https://x.com/mosa_mosa_8823/status/1319081994513379328">Twitter</a>`],
    [0, 3, "flippable",    "ku", 2020, 1, "3/(4+√6)",
        `<a href="https://x.com/origamimagiro/status/1319275391199006724">Twitter</a>`],
    [0, 4, "flippable",    "ku", 2020, 1, "4/(8+√2)",
        `<a href="https://x.com/origamimagiro/status/1325555134307291137">Twitter</a>`],
    [0, 4, "flippable", "tanak", 2020, 1, "4/(7+2√2)",
        `<a href="https://x.com/MeRcY1999/status/1325432200544702465">Twitter</a>`],
    [0, 4, "flippable", "tanak", 2020, 1, "4/(8+√2)",
        `<a href="https://x.com/MeRcY1999/status/1327979479176675328">Twitter</a>`],
    [0, 4, "flippable",  "mosa", 2020, 1, "4/10", 
        `<a href="https://x.com/mosa_mosa_8823/status/1318857416709001217">Twitter</a>`],
    [0, 5,     "fuzzy", "tanak", 2020, 1, "5/12",
        `<a href="https://x.com/MeRcY1999/status/1330324192609280001">Twitter</a>`],
    [0, 8,     "fuzzy", "tanak", 2020, 1, "8/28",
        `<a href="https://x.com/MeRcY1999/status/1315240512882765827">Twitter</a>`],
    [1, 1,  "seamless",  "none",  "?", 1, "1", "provably optimal! :)"],
    [1, 4,     "fuzzy",    "ku", 2020, 1, "4/8",
        `<a href="https://github.com/origamimagiro/flat-folder/tree/main/examples/instagram">Flat-Folder, Instagram #084</a>`],
    [1, 4,  "seamless", "brown", 2024, 1, "4/9",
        `<a href="https://www.instagram.com/p/C2sQrMgrTIg">Instagram</a>`],
    [1, 4,  "seamless", "brown", 2024, 2, "4/9",
        `<a href="https://www.instagram.com/p/C2sQrMgrTIg">Instagram</a>`],
    [1, 5,  "seamless", "brown", 2024, 1, "5/13",
        `<a href="https://www.instagram.com/p/C2sQrMgrTIg">Instagram</a>`],
    [1, 8,     "fuzzy", "bchan", 2023, 1, "8/38", 
        `<a href="https://www.instagram.com/p/C1Nd0YRJvte">Instagram</a>`
        + ", pureland"],
    [1, 8,     "fuzzy",    "ku", 2020, 1, "8/26",
        `<a href="https://x.com/origamimagiro/status/1320723073524363264">Twitter</a>`],
    [1, 8,  "seamless", "brown", 2024, 1, "8/28",
        `<a href="https://www.instagram.com/p/C8n879_N8OI">Instagram</a>`],
    [1, 8, "flippable",    "ku", 2020, 1, "8/34",
        `<a href="https://x.com/origamimagiro/status/1318576259463479298">Twitter</a>`],
    [0, 4,     "fuzzy", "hulme", 1976, 1,  "4/8", BUDAI],
    [0, 8,     "fuzzy", "hulme", 1976, 1, "8/32", BUDAI],
    [0, 8,  "seamless", "casey", 1987, 1, "8/40", BUDAI],
    [0, 8,     "fuzzy", "montr", 1990, 1, "8/36", BUDAI],
    [0, 4,     "fuzzy", "birke",  "?", 1, "4/16", BUDAI],
    [0, 4,  "seamless", "kirsc", 1996, 1, "4/10", BUDAI],
    [0, 8,  "seamless", "kirsc", 1996, 1, "8/40", BUDAI],
    [0, 8,     "fuzzy", "holle", 1997, 1, "8/32", BUDAI],
    [0, 8,     "fuzzy", "durei", 1998, 1, "8/32", BUDAI],
    [0, 8,     "fuzzy", "schen", 2000, 1, "8/32", BUDAI],
    [0, 4,  "seamless", "louis", 2000, 1, "4/16", BUDAI],
    [0, 5,     "fuzzy",  "viet",  "?", 1, "5/13", BUDAI],
    [0, 4,     "fuzzy", "shafe", 2003, 1, "4/16", BUDAI],
    [0, 4,  "seamless", "budai", 2005, 1, "4/12", BUDAI],
    [0, 4,  "seamless", "budai", 2009, 1, "4/12", BUDAI],
    [0, 4,     "fuzzy", "ville", 2007, 1, "4/10", BUDAI],
    [0, 5,  "seamless", "budai", 2008, 1, "5/17", BUDAI],
    [0, 4,  "seamless", "montr", 2009, 1, "4/10", BUDAI],
    [0, 5,     "fuzzy", "montr", 2009, 1, "5/13", BUDAI],
    [0, 5,  "seamless", "montr", 2009, 1, "5/15", BUDAI],
    [0, 6,     "fuzzy", "montr", 2009, 1, "6/24", BUDAI],
    [0, 7,     "fuzzy", "montr", 2009, 1, "7/27", BUDAI],
    [0, 2,  "seamless", "isaac", 2009, 1, "2/3",
        `<a href="https://erikdemaine.org/papers/Checkerboard_ISAAC2009/paper.pdf">ISAAC2009</a>`],
    [0, 3,  "seamless", "isaac", 2009, 1, "3/5",
        `<a href="https://erikdemaine.org/papers/Checkerboard_ISAAC2009/paper.pdf">ISAAC2009</a>`],
    [0, 4,  "seamless", "isaac", 2009, 1, "4/10",
        `<a href="https://erikdemaine.org/papers/Checkerboard_ISAAC2009/paper.pdf">ISAAC2009</a>`],
];

// ISAAC general seamless construction
// const isaac_side1 = (n) => (n*n + 8*n - 10)/2;
// for (let n = 2; n <= 20; n += 2) {
//     D.push([0, n, "fuzzy", "isaac", 2009, 1, `${n}/${isaac_side1(n)}`,
//         `<a href="https://erikdemaine.org/papers/Checkerboard_ISAAC2009/paper.pdf">ISAAC2009</a>`],);
// }
const isaac_side2 = (n) => n*n/4 + 4*n + 4 - 5/2*(n%4);
for (let n = 2; n <= 20; n += 2) {
    D.push([0, n, "seamless", "isaac", 2009, 1, `${n}/${isaac_side2(n)}`,
        `<a href="https://erikdemaine.org/papers/Checkerboard_ISAAC2009/paper.pdf">ISAAC2009</a>`],);
}

/* Efficiency encoding
 * (a+brc)/(d+e2f) = (a + b**(1/c))/(d + e**(1/f))
 * a or (c) required
 * b, c, d, e, f are integers
 * a may be integer or float
 * parentheses are optional
 * if no "/" present, then only a, interpret as floating point efficiency
 */
