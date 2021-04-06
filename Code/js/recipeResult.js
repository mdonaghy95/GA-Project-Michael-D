// Element

// <form action = ""
// <tbody data-sheetdb-url="https://sheetdb.io/api/v1/gijv3lqpyfek0"

// Event

// User clicks submit on form
// form action created

// Execution


// SheetDB URL is rendered dynamically
// JS selects form action
// JS appends to value of data-sheetdb-url

document.addEventListener("DOMContentLoaded", sheetdb_upd);
document.addEventListener("submit", sheetdb_upd);
var sheetdb_template_cache = [],
    sheetdb_template_slots_cache = [],
    sheetdb_items = [],
    sheetdb_slots = [];

function sheetdb_upd() {
    for (var a, b = document.querySelectorAll("[data-sheetdb-url]"), c = b.length, d = function(a, b) {
            sheetdb_template_cache[a] || (sheetdb_template_cache[a] = b.innerHTML);
            var d = b.dataset.sheetdbSearch,
                e = b.dataset.sheetdbLimit,
                f = b.dataset.sheetdbOffset,
                g = b.dataset.sheetdbSortBy,
                h = b.dataset.sheetdbSortOrder,
                i = b.dataset.sheetdbSortMethod,
                j = b.dataset.sheetdbSortDateFormat,
                k = b.dataset.sheetdbGroupBy,
                l = b.dataset.sheetdbGroupByWithCount,
                m = b.dataset.sheetdbSearchMode,
                n = b.dataset.sheetdbSheet;
            slot = b.dataset.sheetdbSave, slot && !sheetdb_slots[slot] && (sheetdb_slots[slot] = []);
            var o = d;
            if (b.dataset.sheetdbQueryString) {
                var p = new URLSearchParams(window.location.search),
                    q = p.get(b.dataset.sheetdbQueryString),
                    r = b.dataset.sheetdbQueryString + "=" + q;
                o ? o += "&" + r : o = r
            }
            var s = b.dataset.sheetdbUrl;
            o && (s = s.endsWith("/") ? s : s + "/", s += m && "or" == m.toLowerCase() ? "search_or" : "search"), b.style.display = "none", completed = 0, sheetdbMakeSlotTemplateCache(), sheetdbFetchData({
                URL: s,
                search: o,
                limit: e,
                offset: f,
                sort_by: g,
                sort_order: h,
                sort_method: i,
                sort_date_format: j,
                group_by: k,
                group_by_with_count: l,
                sheet: n,
                slot: slot
            }).then(function(d) {
                data = d.response, slot = d.current_slot, sheetdb_items[a] = data, completed++;
                for (var e = [], f = 0; f < data.length; f++) e.push(sheetdb_template_cache[a]);
                var g = [],
                    h = e.map(function(a, b) {
                        return g.push(data[b]), sheetdbInterpolateString(a, data[b])
                    });
                if (slot)
                    for (var i in g) sheetdb_slots[slot][i], g.hasOwnProperty(i) && (sheetdb_slots[slot][i] = g[i]);
                b.innerHTML = h.join(""), b.style.display = "", b.dispatchEvent(new CustomEvent("sheetdb-downloaded")), c == completed && (sheetdbUpdateSlots(), window.dispatchEvent(new CustomEvent("sheetdb-downloaded")))
            }).catch(function(a) {
                throw new Error(a)
            })
        }, e = 0; a = b[e]; e++) d(e, a)
}

function sheetdbFetchData(a) {
    var b = a.URL,
        c = a.search,
        d = a.limit,
        e = a.offset,
        f = a.sort_by,
        g = a.sort_order,
        h = a.sort_method,
        i = a.sort_date_format,
        j = a.group_by,
        k = a.group_by_with_count,
        l = a.sheet,
        m = slot,
        n = [l ? "sheet=".concat(l) : "", f ? "sort_by=".concat(f) : "", g ? "sort_order=".concat(g) : "", h ? "sort_method=".concat(h) : "", i ? "sort_date_format=".concat(i) : "", j ? "group_by=".concat(j) : "", k ? "group_by_with_count=".concat(k) : "", d ? "limit=".concat(d) : "", e ? "offset=".concat(e) : "", c ? "".concat(c) : ""];
    n = n.filter(function(a) {
        return "" != a
    });
    var o = "".concat(b);
    return (f || g || h || i || j || k || d || e || c || l) && (o = "".concat(b, "?").concat(n.join("&"))), new Promise(function(a, b) {
        fetch(o).then(function(a) {
            return a.json()
        }).then(function(b) {
            return a({
                response: b,
                current_slot: m
            })
        }).catch(function(a) {
            return b(a)
        })
    })
}

function sheetdbInterpolateString(a, b) {
    return a.replace(/{{([^{}]*)}}/g, function(a, c) {
        var d = b[c];
        return "string" == typeof d ? d : a
    })
}

function sheetdbMakeSlotTemplateCache() {
    for (var a, b = document.querySelectorAll("[data-sheetdb-slot]"), c = 0; a = b[c]; c++) sheetdb_template_slots_cache[c] || (sheetdb_template_slots_cache[c] = a.innerHTML)
}

function sheetdbUpdateSlots() {
    for (var a, b = document.querySelectorAll("[data-sheetdb-slot]"), c = 0; a = b[c]; c++) {
        for (var d = a.dataset.sheetdbSlot, e = [], f = 0; f < sheetdb_slots[d].length; f++) e.push(sheetdb_template_slots_cache[c]);
        var g = e.map(function(a, b) {
            return sheetdbInterpolateString(a, sheetdb_slots[d][b])
        });
        a.innerHTML = g.join(""), a.style.display = ""
    }
}

let form = document.getElementById('catalogueForm');
console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form has been submitted!");
    
    var vegetarian = document.getElementById('vegetarian').checked
    var vegan = document.getElementById('vegan').checked
    var maxCook = document.getElementById('maxCook').value
    var serves = document.getElementById('serves').value
    var calorieCount = document.getElementById('calorieCount').value 
    var difficulty = document.getElementById('difficulty').value
    var contains = document.getElementById('contains').value

    
    form.addEventListener("submit", (event) => {
        var sheetQuery = document.querySelector("tbody");
        sheetQuery.setAttribute("data-sheetdb-url", "https://sheetdb.io/api/v1/gijv3lqpyfek0/search?isVegetarian=" + vegetarian + "&isVegan=" + vegan + "&maxCook<=" + maxCook + "&serves=" + serves + "&calorieCount<=" + calorieCount + "&difficulty=" + difficulty + "&casesensitive=false");
    })

   

    

// https://sheetdb.io/api/v1/gijv3lqpyfek0/search?serves=4&casesensitive=true < this works

    // document.getElementsByTagName("tbody").setAttribute("data-sheetdb-url", "https://sheetdb.io/api/v1/gijv3lqpyfek0/search?serves=" + serves + "&age=22&casesensitive=true")

});



// MY CODE BEGINS










