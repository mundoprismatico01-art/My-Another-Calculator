const ns1 = document.querySelector('#s1')
const  ns2 = document.querySelector('#s2')
const pbutton = document.querySelector('#p-btn')
const res = document.querySelector('#subtitle1')

function plus() {
          const np1 = Number(ns1.value)
          const np2 = Number(ns2.value)
          const pfinal = np1 + np2
          res.innerHTML = `It equals <strong>${pfinal}<strong>`
}
pbutton.addEventListener('click', plus)

const nm1 = document.querySelector('#m1')
const nm2 = document.querySelector('#m2')
const bmres = document.querySelector('#m-btn')
const mres = document.querySelector('#subtitle2')

function minus() {
          const m1 = Number(nm1.value)
          const m2 = Number(nm2.value)
          const mfinal = m1 - m2
          mres.innerHTML = `It equals <strong>${mfinal}</strong>`
}
bmres.addEventListener('click', minus)


const nt1 = document.querySelector('#t1')
const nt2 = document.querySelector('#t2')
const tbutton = document.querySelector('#t-btn')
const tres = document.querySelector('#subtitle3')

function times() {
          const tn1 = Number(nt1.value)
          const tn2 = Number(nt2.value)
          const tfinal = tn1 * tn2
          tres.innerHTML = `It equals <strong>${tfinal}</strong>`
}
tbutton.addEventListener('click', times)

const div1 = document.querySelector('#d1')
const div2 = document.querySelector('#d2')
const divButton = document.querySelector('#d-btn')
const dres = document.querySelector('#subtitle4')

function divide() {
          const d1 = Number(div1.value)
          const d2 = Number(div2.value)
          const dfinal = d1 / d2
          dres.innerHTML = `It equals <strong>${dfinal}</strong>`
}
divButton.addEventListener('click', divide)


