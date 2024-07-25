import { AUTHORS, COLS, D } from "./data.js";

const append = (type, par, border = false) => {
    const el = document.createElement(type);
    el.style.textAlign = "center";
    el.style.padding = "3px";
    if (border) { el.style.border = "1px solid black"; }
    par.appendChild(el);
    return el;
};

const parse_efficiency = (s) => {
    const A = s.split("/");
    if (A.length == 1) { return +s; }
    const V = A.map(a => {
        if (a[0] == "(") { a = a.slice(1, a.length - 1); }
        const C = a.split("+");
        let v = 0;
        for (const c of C) {
            const B = c.split("√");
            if (B.length == 1) { v += +c; }
            else { v += ((B[0] == "") ? 1 : (+B[0]))*(B[1]**0.5); }
        }
        return v;
    });
    return V[0]/V[1];
};

const type_cmp = {
    seamless: 0,
    flippable: 1,
    fuzzy: 2,
};

window.onload = () => {
    const mail = document.getElementById("mail");
    mail.setAttribute("href", "mailto:checkerb" + "oards@m" + "it.e" + "du");
    const COLI = {};
    for (let i = 0; i < COLS.length; ++i) { COLI[COLS[i]] = i; }
    const main = document.getElementById("main");
    main.setAttribute("width", "100%");
    const table = append("table", main);
    table.setAttribute("width", "100%");
    const header_row = append("tr", table);
    for (const c of COLS) {
        const td = append("th", header_row, true);
        td.style.background = "lightgray";
        td.innerHTML = c;
    }
    D.sort((a, b) => {
        const ag = a[COLI.grid];
        const bg = b[COLI.grid];
        if (ag != bg) { return ag - bg; }
        const ae = parse_efficiency(a[COLI.efficiency]);
        const be = parse_efficiency(b[COLI.efficiency]);
        if (be != ae) { return be - ae; }
        const at = a[COLI.type];
        const bt = b[COLI.type];
        if (at != bt) { return type_cmp[at] - type_cmp[bt]; }
        const ay = a[COLI.year];
        const by = b[COLI.year];
        return ay - by;
    });
    const best = new Map();
    for (let i = 0; i < D.length; ++i) {
        const A = D[i];
        const row = append("tr", table);
        const line = {};
        for (const c of COLS) { line[c] = A[COLI[c]]; }
        const k = `${line.grid},${line.type}`;
        const e = best.get(k) ?? line.efficiency;
        if (e == line.efficiency) {
            best.set(k, i);
            if (line.type == "seamless") { best.set(`${line.grid},fuzzy`, i); }
            if (line.type == "fippable") { best.set(`${line.grid},fuzzy`, i); }
        }
        for (const c of COLS) {
            const td = append("td", row, true);
            const val = line[c];
            if (c == "cp") {
                if (val != 0) {
                    const a = append("a", td);
                    a.setAttribute("href", `./fold/${
                        line.grid  }x${
                        line.grid  }_${
                        line.type  }_${
                        line.author}_${
                        line.year  }_${
                        line["#"]  }.fold`);
                    a.innerHTML = ".fold";
                }
            } else if (c == "grid") {
                td.innerHTML = `${val}x${val}`;
            } else if (c == "efficiency") {
                td.innerHTML = `${val} = ${parse_efficiency(val).toFixed(3)}`;
            } else if (c == "notes") {
                td.style.textAlign = "left";
                td.innerHTML = val;
            } else if (c == "author") {
                td.innerHTML = AUTHORS[val];
            } else {
                td.innerHTML = val;
            }
            td.style.background = (e == line.efficiency) ?  "white" : "lightgray";
        }
    }
};
