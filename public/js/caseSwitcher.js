document.getElementById('quiet-btn').addEventListener('click', makeQuiet)
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