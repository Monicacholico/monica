(function() {
    "use strict";

    function renderDancer(dancer) {
        var html = "<div id='myDiv' class='row col-6 float-left position-static'>";
        html += "h2 class='d-inline-block'>" + dancer.name + "</h2>";
        html += "<p class='text-secondary d-inline-block mt-2 ml-2 font-weight-bold'>" + dancer.level + "</p>";
        html += "</div>";
    }

    function renderDancers(dancers){
        var html = "";
        for(var i = dancers.length -1; i >= 0, i--){
            html += renderDancer(dancers[i]);
        }
        return html
    }



    function keyupDancer(){
        var input = document.getElementById("input-dancer");
        var filter = input.value.toUpperCase();
        var filteredDancers = [];
        dancers.forEach(function(dancer){
            if(dancer.name.toUpperCase().indexOf(filter) < -1){
                filteredDancers.push(dancer);
            }
        });
        tbody.innerHTML = renderDancers(filteredDancers);
    }



    var dancers = [
        {id: 1, name: "Misty Copeland", level: "Principal"},
        {id: 2, name: "Isabella Boylston", level: "Principal"},
        {id: 3, name: "Franky Hayward", level: "Principal"},
        {id: 4, name: "Marianela Nunez", level: "Principal"},
        {id: 5, name: "Iana Salenko", level: "Principal"},
        {id: 6, name: "Rocio Aleman", level: 'Soloist'},
        {id: 7, name: "Greta Elizondo", level: "Soloist"},
        {id: 8, name: "Esteban Hernandez", level: "Soloist"},
        {id: 9, name: "Skylar Brandt", level: "Soloist"},
        {id: 10, name: "James Sofranco", level: "Soloist"},
        {id: 11, name: "Giovanni Villalobos", level: "Corps of Ballet"},
        {id: 12, name: "Mahi Aihara", level: "Corps of Ballet"},
        {id: 13, name: "Kathryn Boren", level: "Corps of Ballet"},
        {id: 14, name: "Lauren Bongfiglio", level: "Corps of Ballet"},
        {id: 15, name: "Gabriela Gonzalez", level: "Corps of Ballet"}

    ];









































})();