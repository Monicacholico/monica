const slides = document.querySelectorAll('.Slides__block');
const allSlides = [...slides];

let i = 0;
const slideShow = () => {
    allSlides[i].style.display = 'none';
    if(i < allSlides.length - 1) {
        console.log(i);
        console.log(allSlides[i]);
        i++;
        allSlides[i].style.display = 'block';
    } else {
        i = 0;
    }
}
setInterval(slideShow, 3000);




