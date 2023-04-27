let boxes = document.getElementsByClassName("c")
let b = document.querySelector('#myButton')

console.log(b)

b.addEventListener('click',checkData)

let count = 0;


function checkData() {
    for (let a of boxes) {
        if (a.checked) {
            console.log('true')
            count++
        }
        else {
            console.log('false')
        }
    }
    if(count===3){
        alert('HHM')
    }
}
