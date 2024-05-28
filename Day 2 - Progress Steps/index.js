const pregress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

console.log(circles)


let currentActive = 1;


next.addEventListener('click', () => {
currentActive++

currentActive > circles.length? currentActive = circles.length : console.log("");

    console.log(currentActive) 
    update()
});




prev.addEventListener('click', () => {
    
currentActive--

currentActive < 1? currentActive = 1 : console.log("");

    console.log(currentActive)

    update()

   
});


function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
})

const actives = document.querySelectorAll('.active')
console.log(actives.length, circles.length)

progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

progress.style.transition = '0.4s ease'
// circle.style.transition = '20.4s ease'

// currentActive === 1? prev.disabled = true :
// prev.disabled = false;; : prev.disabled = true, prev.disabled = true


if(currentActive === 1) {
    prev.disabled = true
}else if(currentActive === 4){
    prev.disabled = false
    next.disabled = true
}else{
    prev.disabled = false
}
}