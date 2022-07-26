document.getElementById('quiet-btn').addEventListener('click', makeQuiet)
function makeQuiet(a) {
    //console.log(a)
    const p = document.getElementById('patrick')
    let text = p.innerText
    p.innerText = text.toLowerCase()
}

document.getElementById('loud-btn').addEventListener('click', louder)
function louder(b) {
    //console.log(b)
    const c = document.getElementById('patrick')
    let text = c.innerText
    c.innerText = text.toUpperCase()
}

document.getElementById('sarc-btn').addEventListener('click', makeSarc)
function makeSarc (e) {
    const p = document.getElementById('patrick')
    const text = p.innerText
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let i = 0
    for (let char of text) {
        if (alphabet.includes(char.toLowerCase())) {
            if (i % 2 === 0) char = char.toLowerCase()
            if (i % 2 === 1) char = char.toUpperCase()
            i++
        }
        result += char
    }
    p.innerText = result
}