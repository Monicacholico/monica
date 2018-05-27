(function() {
    "use strict";

// ======================= THIS IS FOR THE PRACTICES HTML ============================


    $(".one").hide();
    $(".expander1").click(function(){
        $(".one").slideToggle(200);
    });

    $(".two").hide();
    $(".expander2").click(function(){
        $(".two").slideToggle(200);
    });

    $(".three").hide();
    $(".expander3").click(function(){
        $(".three").slideToggle(200);
    });

    $(".four").hide();
    $(".expander4").click(function(){
        $(".four").slideToggle(200);
    });

    $(".five").hide();
    $(".expander5").click(function(){
        $(".five").slideToggle(200);
    });

    $(".six").hide();
    $(".expander6").click(function(){
        $(".six").slideToggle(200);
    });
    $(".seven").hide();
    $(".expander7").click(function(){
        $(".seven").slideToggle(200);
    });
    $(".eight").hide();
    $(".expander8").click(function(){
        $(".eight").slideToggle(200);
    });



// ========================== HERE'S THE HTML ========================================
//
// function renderCoffee(coffee) {
//     var html = "<div id='myDiv' class='row col-6 float-left position-static'>";
//     html += "<h2 class='d-inline-block'>" + coffee.name + "</h2>";
//     html += "<p class='text-secondary d-inline-block mt-2 ml-2 font-weight-bold'>" + coffee.roast + "</p>";
//     html += '</div>';
//
//     return html
// }
//
// // ========================== FUNCTION TO RENDER COFFEES ==============================
//
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// //========================== FUNCTION TO FILTER AND UPDATE THE COFFEES ===============
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     if (selectedRoast === 'all'){
//         filteredCoffees = coffees
//     } else {
//         coffees.forEach(function (coffee) {
//             if (coffee.roast === selectedRoast) {
//                 filteredCoffees.push(coffee);
//             }
//         });
//     }
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // ====== FUNCTION TO PULL THE DIFFERENT COFFEES WITH THE FIRST LETTERS IN INPUT ============================
//
// function keyupCoffee(){
//     var input = document.getElementById("input-coffee");
//     var filter = input.value.toUpperCase();
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if(coffee.name.toUpperCase().indexOf(filter) > -1) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // ============= ARRAY OF COFFEES =========================================
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var pointeShoes = [
//     {id: 1, brand: 'Capezio', name: 'contempora'},
//     {id: 2, brand: 'Capezio', name: 'airess'},
//     {id: 3, brand: 'Capezio', name: 'developpe'},
//     {id: 4, brand: 'Capezio', name: 'cambre'},
//     {id: 5, brand: 'Grishko', name: 'dream pointe'},
//     {id: 6, brand: 'Grishko', name: '2007'},
//     {id: 7, brand: 'Grishko', name: 'elite'},
//     {id: 8, brand: 'Grishko', name: 'ulanova'},
//     {id: 9, brand: 'Sansha', name: 'recital'},
//     {id: 10, brand: 'Sansha', name: 'ovation'},
//     {id: 11, brand: 'Sansha', name: 'lyrica'},
//     {id: 12, brand: 'Sansha', name: 'la pointe no 1'},
//     {id: 13, brand: 'Sansha', name 'la pointe no 4'},
//     {id: 14, brand: 'Bloch', name: 'serenade'}
//
//
// ];
//
// //===================== FUNCTION TO ADD COFFEES ==================================
//
// function createCoffee(){
//     var roastSearch =  document.querySelector("#roast-search").value;
//     var coffeeA = document.querySelector("#coffee-array").value;
//     coffees.push({name: coffeeA, roast: roastSearch});
//     tbody.innerHTML = renderCoffees(coffees);
// }
//
// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var submitCoffee = document.querySelector('#submit-coffee');
// var roastSelection = document.querySelector('#roast-selection');
// var filterCoffee = document.querySelector("#input-coffee");
//
// tbody.innerHTML = renderCoffees(coffees);
//
// // ============ EVENT LISTENERS ==================================
//
// submitButton.addEventListener('click', updateCoffees);
// roastSelection.addEventListener('change', updateCoffees);
// filterCoffee.addEventListener('keyup', keyupCoffee);
// submitCoffee.addEventListener('click', createCoffee);
//
})();