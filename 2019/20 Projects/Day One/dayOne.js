let bg = document.querySelector(".background"),
    welcome = document.querySelector(".welcome"),
    header = document.querySelector(".header"),
    description = document.querySelector(".description"),
    buttonWrapper = document.querySelector(".button-wrapper"),
    textWrapper = document.querySelector(".text-wrapper");

let width = window.innerWidth || document.documentElement.clientWidth,
    height = window.innerHeight || document.documentElement.clientHeight;

document.addEventListener("mousemove", rotate);

let transformLayers = [
    {
        el: textWrapper,
        parallax: 13,
        rotate: true
    },
    {
        el: welcome,
        parallax:19
    },
    {
        el: header,
        parallax: 25
    },
    {
        el: description,
        parallax: 10
    },
    {
        el:buttonWrapper,
        parallax: 27
    }
];

const bgTranslate = 300;
const bgRotate = 5;

let hScale = (height+bgTranslate)/height,
    wScale = (width+bgTranslate)/width;
const scale = hScale > wScale ? hScale : wScale;

function rotate(e) {
    let lerpX = e.pageX / width,
        offsetX = 0.5 - Math.pow(lerpX, 2),
        lerpY = e.pageY / height,
        offsetY = 0.5 - Math.pow(lerpY, 2);

    for (let i = 0; i < transformLayers.length; i++) {
        let parallax = transformLayers[i].parallax;


        let transform;
        if (transformLayers[i].rotate) {
            transform =
                "rotateX(" + -offsetY * parallax +
                "deg) rotateY(" + -offsetX * parallax * 2 + "deg)";
        }else{
            transform =
                "translate3d(" + offsetX * parallax + "px, " +
                offsetY * parallax + "px, 20px)";
        }
        transformLayers[i].el.style.transform = transform;

    }

    let bgTransform =
        "translate3d(" +
        offsetX * bgTranslate +
        "px, " +
        offsetY * bgTranslate +
        "px, 20px) rotateX(" +
        -offsetY * bgRotate +
        "deg) rotateY(" +
        -offsetX * bgRotate +
        "deg)" + "scale("+ scale + ")";
    bg.style.transform = bgTransform;

}



