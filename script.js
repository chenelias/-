// for (let index = 1; index < 20; index++) {
//     console.log('-' + 680 * index)
//     document.querySelector('.homeimg').style.backgroundPosition = 'center ' + 680 * index + 'px'
// }
let index = 1

document.getElementById('#btn').addEventListener('click', hh)
function hh() {
    // setTimeout(function () {
    //     console.log('-' + 680 * index)
    //     document.querySelector('.homeimg').style.backgroundPosition = 'center -' + 680 * index + 'px'
    // }, 300)
    console.log('hh')
    document.querySelector('.homeimg').style.backgroundPosition = 'center -' + 680 * index + 'px'
    index++
}
