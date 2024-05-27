
"use strict"
const panels = document.querySelectorAll('.panel');
console.log(panels);

// for (let i = 0; i < panel.length; i++) {
//     panel[i].addEventListener('click', function() {
//         if (!panel[i].classList.contains('active')) {
//             console.log("panel is clicked");
//             panel[i].classList.add('active');
//         }
//     });
// }



panels.forEach(panel => {
    panel.addEventListener("click", function(){
        removeActive();
        panel.classList.add("active");
    })
})


function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}

    
    
