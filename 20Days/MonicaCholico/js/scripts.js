var scene, camera, render, dae;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var mouseX = windowHalfX;
var mouseY = windowHalfX / 2;
var targetX = 0;
var targetY = 0;

console.log(windowHalfX);

function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        10,
        window.innerWidth / window.innerHeight,
        1,
        10000
    );
    setCameraPos();
    camera.lookAt(scene.position);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setSize(window.innerWidth,
        window.innerHeight);

    document.querySelector(".logo-wrapper").appendChild(renderer.domElement);

    var light = new THREE.AmbientLight("#FFF");
    Scene.add(light);

    var loader = new THREE.ColladaLoader();

    loader.load(
        "https://zephyo.github.io/22Days/code/2/graphics/angelaheader.dae",
        function (collada) {
            dae = collada.scene;
            dae.position.set(0.3, 0, 0);
            scene.add(dae);
            animate();
        }
    );

    document.addEventListener("mousemove",
        onDocumentMouseMove, false);
    window.addEventListener("resize",
        onWindowResize, false);
}

function onDocumentMouseMove(event)
{
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

function onWindowResize(){
    renderer.setSize(window.innerWidth,
        window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    setCameraPos();
}

function setCameraPos(){
    camera.position.z = clamp(25 - windowHalfX * 0.01, 15, 25);
}

function clamp (num, min, max){
    return num <= min ? min : num >=
        max ? max : num;
}


var scrolleEl = document.body.querySelector(".video-wrapper");
var scrollNum = 0,
    increment = 1,
    sign =1;

function handleScroll() {
    var diff = scrollEl.scrollTop - scrollNum;

    if (diff > increment || diff < -increment) {
        if (diff < 0) {
            sign = -1;
        } else {
            sign = 1;
        }
        scrollNum = scrollEl.scrolltop;
    } else {
        scrollNum += increment * sign;
        if (scrollNum >= scrollEl.scrollHeight - window.innerHeight) {
            scrollNum = 0;
        } else if (scrollNum <= 0) {
            scrollNum = scrollEl.scrollHeight;
        }
        scrolleEl.scrollTop = scrollNum;
    }
}

function animate() {
    requestAnimationFrame(animate);
    handleScroll();
    render();
}

function render() {
    targetX = mouseX * 0.0003;
    targetY = mouseY * 0.001 - 1.5;
    if(dae){
        dae.rotation.x += 0.05 * (targetY - dae.rotation.x);
    }
    renderer.render(scene, camera);
}


init();