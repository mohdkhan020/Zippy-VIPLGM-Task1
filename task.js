// Script for Life in zippy section 

let pictures = document.getElementsByClassName('pictures')

for (var i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('mouseover', function () {
        document.getElementById('show-images').src = this.src
    })
}
// ------ For Left Arrow ------ 
let leftArrow = document.getElementById('leftArrow');
leftArrow.addEventListener('click', function () {
    document.getElementById('move').scrollLeft -= 80
})

// ------ For Right Arrow ------ 
let rightArrow = document.getElementById('rightArrow');
rightArrow.addEventListener('click', function () {
    document.getElementById('move').scrollLeft += 80
})