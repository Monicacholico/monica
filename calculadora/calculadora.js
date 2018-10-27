(function() {
    "use strict";

function renderPointeShoe(pointeShoe) {
    const html = "<div id='myDiv' class='row col-6 float-left position-static'>";
    html += "<h2 class= 'd-inline-block'>" + pointeShoe.name + "</h2>";
    html += "<p class='text-secondary d-inline-block mt-2 ml-2 font-weight-bold'>"
        + pointeShoe.brand + "<br>" + pointeShoe.level +  "<br>" + pointeShoe.toes_length + "<br>" + pointeShoe.width + "<br>" +
        pointeShoe.level + "<br>" + pointeShoe.strength + "<br>"+ pointeShoe.arch + "</p>";

    return html
}


function renderPointeShoes (pointeShoes){
    let html = "";
    for(let i = pointeShoes.length - 1; i >= 0; i-- ){
        html += renderPointeShoe(pointeShoes[i]);
    }
    return html;
}

function updatePointeShoes(e){
    e.preventDefault();
    let selectedBrand = brandSelection.value;
    let selectedLevel = levelSelection.value;
    let selectedToesLength = toesLengthSelection.value;
    let selectedFeet = feetSelection.value;
    let selectWidth = widthSelection.value;
    let selectStrength = strengthSelection.value;
    let filteredPointeShoes = [];
    if(selectedBrand === "all" ||
    selectedFeet == "all" || selectedLevel === "all" ||
        selectedToesLength === "all" ||
        selectWidth === "all" || selectStrength === "all"){
        filteredPointeShoes = pointeShoes
    }
    tbody.innerHTML = renderPointeShoes(filteredPointeShoes);
}

function keyupPointeShoe(){
    let input = document.getElementById("input-pointeShoe");
    let filter = input.value.toUpperCase();
    let filteredPointeShoes = [];
    pointeShoes.forEach(function(pointeShoe){
        if(pointeShoe.name.toUpperCase().indexOf(filter) > -1){
           filteredPointeShoes.push(pointeShoe)
        }
    }) ;
    tbody.innerHTML = renderPointeShoes(filteredPointeShoes);
    // return keyupPointeShoe();
}



var pointeShoes = [
    {id: 1, name: "Contempora",
        brand: "Capezio",
        level: "Beginner",
        feet: "Greek",
        toes_length: "medium",
        strength: "light",
        width: "medium",
        arch: "medium"},
    {id: 2, name: "Airess",
        brand: "Capezio",
        level: "Intermediate",
        feet: "Medium",
        toes_length: "medium",
        strength: "strong",
        width: "medium",
        arch: "medium"},
    {id: 3, name: "Alpha",
        brand: "Bloch",
        level: "Advanced",
        feet: "egiptian",
        toes_length: "long",
        strength: "high",
        width: "narrow",
        arch: "high"},
    {id: 4, name: "Ulanova",
        brand: "Grishko",
        level: "Advanced",
        feet: "egiptian",
        toes_length: "long",
        strength:"high",
        width: "narrow",
        arch: "high"},
    {id: 5, name: "Recital",
        brand: "Sansaha",
        level: "Intermediate",
        feet: "Giselle",
        toes_length: "",
        strength: "medium",
        width: "medium",
        arch: "medium"},
    {id: 6, name: "Serenade",
        brand: "Bloch",
        level: 'Intermediate',
        feet: "Giselle-Greek",
        toes_length: "medium",
        strength: "medium",
        width: "medium",
        arch: "low"}
    // {id: 7, name: "Greta Elizondo", level: "Soloist", ballet: "National Company of Mexico"},
    // {id: 8, name: "Esteban Hernandez", level: "Soloist", ballet: "San Francisco Ballet"},
    // {id: 9, name: "Skylar Brandt", level: "Soloist", ballet: "American Ballet Theatre"},
    // {id: 10, name: "James Sofranco", level: "Soloist", ballet: "San Francisco Ballet"},
    // {id: 11, name: "Giovanni Villalobos", level: "Corps of Ballet", ballet:"New York City Ballet" },
    // {id: 12, name: "Mahi Aihara", level: "Corps of Ballet", ballet: "American Ballet Theatre"},
    // {id: 13, name: "Kathryn Boren", level: "Corps of Ballet", ballet: "American Ballet Theatre"},
    // {id: 14, name: "Lauren Bongfiglio", level: "Corps of Ballet", ballet: "American Ballet Theatre"},
    // {id: 15, name: "Gabriela Gonzalez", level: "Corps of Ballet", ballet: "San Francisco Ballet"}

];

let tbody = document.querySelector("#pointeShoes");
let submitButton = document.querySelector("#submit");
let submitPointeShoe = document.querySelector("#submit-pointeShoe");
let levelSelection = document.querySelector("#level-selection");
let brandSelection = document.querySelector("#brand-selection");
let toesLengthSelection = document.querySelector("#toesLength-selection");
let feetSelection = document.querySelector("#feet-selection");
let strengthSelection = document.querySelector("#strength-selection");
let archSelection = document.querySelector("#arch-selection");
let widthSelection = document.querySelector("#width-selection");


tbody.innerHTML = renderPointeShoes(pointeShoes);


submitButton.addEventListener("click", updatePointeShoes);
levelSelection.addEventListener("change", updatePointeShoes);
feetSelection.addEventListener("change", updatePointeShoes);
strengthSelection.addEventListener("change", updatePointeShoes);
brandSelection.addEventListener("change", updatePointeShoes);
toesLengthSelection.addEventListener("change", updatePointeShoes);
archSelection.addEventListener("change", updatePointeShoes);
widthSelection.addEventListener("change", updatePointeShoes);




})();