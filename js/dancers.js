(function() {
    "use strict";

    function renderDancer(dancer) {
        var html = "<div id='myDiv' class='row col-6 float-left position-static'>";
        html += "<h2 class='d-inline-block'>" + dancer.name + "</h2>";
        html += "<p class='text-secondary d-inline-block mt-2 ml-2 font-weight-bold'>"+ dancer.ballet + "<br>"  + dancer.level + "</p>";
        html += "</div>";

        return html;
    }

    function renderDancers(dancers){
        var html = "";
        for(var i = dancers.length - 1; i >= 0; i--){
            html += renderDancer(dancers[i]);
        }
        return html;
    }

    function updateDancers(e){
        e.preventDefault();
        var selectedLevel = levelSelection.value;
        var filteredDancers = [];
        if (selectedLevel === 'all'){
            filteredDancers = dancers
        } else {
            dancers.forEach(function(dancer){
               if(dancer.level === selectedLevel){
                filteredDancers.push(dancer);
                 }
            });
        }
        tbody.innerHTML = renderDancers(filteredDancers);
    }



    function keyupDancer(){
        var input = document.getElementById("input-dancer");
        var filter = input.value.toUpperCase();
        var filteredDancers = [];
        dancers.forEach(function(dancer){
            if(dancer.name.toUpperCase().indexOf(filter) > -1){
                filteredDancers.push(dancer);
            }
        });
        tbody.innerHTML = renderDancers(filteredDancers);
    }



    var dancers = [
        {id: 1, name: "Misty Copeland", level: "Principal", ballet: "American Ballet Theatre" },
        {id: 2, name: "Isabella Boylston", level: "Principal", ballet: "American Ballet Theatre"},
        {id: 3, name: "Franky Hayward", level: "Principal", ballet: "Royal Ballet"},
        {id: 4, name: "Marianela Nunez", level: "Principal", ballet: "Royal Ballet"},
        {id: 5, name: "Iana Salenko", level: "Principal", ballet: "Staatsballett Berlin"},
        {id: 6, name: "Rocio Aleman", level: 'Soloist', ballet: "Staatsballett Berlin"},
        {id: 7, name: "Greta Elizondo", level: "Soloist", ballet: "National Company of Mexico"},
        {id: 8, name: "Esteban Hernandez", level: "Soloist", ballet: "San Francisco Ballet"},
        {id: 9, name: "Skylar Brandt", level: "Soloist", ballet: "American Ballet Theatre"},
        {id: 10, name: "James Sofranco", level: "Soloist", ballet: "San Francisco Ballet"},
        {id: 11, name: "Giovanni Villalobos", level: "Corps of Ballet", ballet:"New York City Ballet" },
        {id: 12, name: "Mahi Aihara", level: "Corps of Ballet", ballet: "American Ballet Theatre"},
        {id: 13, name: "Kathryn Boren", level: "Corps of Ballet", ballet: "American Ballet Theatre"},
        {id: 14, name: "Lauren Bongfiglio", level: "Corps of Ballet", ballet: "American Ballet Theatre"},
        {id: 15, name: "Gabriela Gonzalez", level: "Corps of Ballet", ballet: "San Francisco Ballet"}

    ];

// ================= FUNCTION TO ADD DANCERS ====================

    function addDancer (){
        var levelSearch = document.querySelector("#level-search").value;
        var dancerA = document.querySelector("#dancer-array").value;
        dancers.push({name: dancerA, level: levelSearch});
        tbody.innerHTML = renderDancers(dancers);
    }

var tbody = document.querySelector("#dancers");
var submitButton = document.querySelector("#submit");
var submitDancer = document.querySelector("#submit-dancer");
var levelSelection = document.querySelector("#level-selection");
var filterDancer = document.querySelector("#input-dancer");


tbody.innerHTML = renderDancers(dancers);


// ================ EVENT LISTENERS ==========================

    submitButton.addEventListener("click", updateDancers);
    levelSelection.addEventListener("change", updateDancers);
    filterDancer.addEventListener("keyup", keyupDancer);
    submitDancer.addEventListener("click", addDancer);





})();