document.getElementById('quite-btn').addEventListener('click', makeQuiet)
function makeQuiet(a) {
    console.log(a)
    const p = document.getElementById('patrick')
    let text = p.innerText
    p.innerText = text.toLowerCase()
}

document.getElementById('loud-btn').addEventListener('click', louder)
function louder(b) {
    console.log(b)
    const c = document.getElementById('patrick')
    let text = c.innerText
    c.innerText = text.toUpperCase()
}


document.getElementById('sarc-btn').addEventListener('click', louder)
/*function sarc (s) {
    let str = s.toLowerCase().split("");
    for(let i=0; i<str.length; i+=2) {
        str[i] = str[i].toUpperCase();
}

return str.join ("");

   }

/*   console.log(sarc("Yahye Gutale"));
