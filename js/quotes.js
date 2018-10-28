firstQuote = {
    text: "All generalizations are false, including this one.",
    author: "Mark Twain",
    color: "black"
}

var quotes = [
    {
        text: "All generalizations are false, including this one.",
        author: "Mark Twain",
        color: "black",
        image: "Shirley-Ann.png"
    },
    {
        text: "I hope life isn't a joke, because I don't get it.",
        author: "Jack Handy",
        color: "navy",
        image: "Shirley-Ann.png"
    },
    {
        text: "The light at the end of the tunnel is just the light of an oncoming train.",
        author: "Robert Lowell",
        color: "orange",
        image: "Shirley-Ann.png"
    },
    {
        text: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss",
        color: "slateblue",
        image: "Shirley-Ann.png"
    },
    {
        text: "The road to success is always under construction.",
        author: "Lily Tomlin",
        color: "orange",
        image: "Shirley-Ann.png"
    },
    {
        text: "Just because nobody complains doesn't mean all parachutes are perfect.",
        author: "Benny Hill",
        color: "seagreen",
        image: "Shirley-Ann.png"
    },
    {
        text: "Always forgive your enemies - nothing annoys them so much.",
        author: "Oscar Wilde",
        color: "maroon",
        image: "img/Karen-Sparck.png"
    }
];

function init() {
    /*
     * First steps: use alert to see the values of your object properties
     *
     *
    var quoteText = firstQuote.text;
    var quoteAuthor = firstQuote.author;
    alert(quoteAuthor + " said " + quoteText);

    alert(firstQuote.text + " said " + firstQuote.author);

    alert("There are " + quotes.length + " quotes in the array.");
    for (var i = 0; i < quotes.length; i++) {
        alert(quotes[i].author + " said: " + quotes[i].text);
    }
    */
    //displayQuote(quotes[0].text, quotes[0].author, quotes[0].color);
    //displayQuote(quotes[0]);
    displayQuote(quotes);
    setInterval("displayQuote(quotes)", 5000);
}
window.onload = init;

/*
 * First version of displayQuote: it takes each object
 * property value separately.
 *
function displayQuote(text, author, color) {
    var textElement = document.getElementById("text");
    var authorElement = document.getElementById("author");

    textElement.innerHTML = text;
    authorElement.innerHTML = author;

    var bigBubble = document.getElementById("bigBubble");
    bigBubble.style.background = color;
    var mediumBubble = document.getElementById("mediumBubble");
    mediumBubble.style.background = color;
    var smallBubble = document.getElementById("smallBubble");
    smallBubble.style.background = color;
}
*/

/*
 * Second version of displayQuote takes the entire object.
 *
 *
function displayQuote(quote) {
    var textElement = document.getElementById("text");
    var authorElement = document.getElementById("author");

    textElement.innerHTML = quote.text;
    authorElement.innerHTML = quote.author;

    var bigBubble = document.getElementById("bigBubble");
    bigBubble.style.background = quote.color;
    var mediumBubble = document.getElementById("mediumBubble");
    mediumBubble.style.background = quote.color;
    var smallBubble = document.getElementById("smallBubble");
    smallBubble.style.background = quote.color;
}
*/

/*
 * Third version of displayQuote takes the entire array
 * and randomly selects a quote to display.
 *
 */
function displayQuote(quotes) {
    console.table(quotes)
    var index = Math.floor(Math.random() * quotes.length);
    var quote = quotes[index];


    var textElement = document.getElementById("text");
    var authorElement = document.getElementById("author");
    var imageElement = document.getElementById("image");

    console.log(quote);


    textElement.innerHTML = quote.text;
    authorElement.innerHTML = quote.author;
    imageElement.innerHTML = `<img src=\"` + quote.image + `"/>`;

    console.log(imageElement);
    var bigBubble = document.getElementById("bigBubble");
    bigBubble.style.background = quote.color;
    var mediumBubble = document.getElementById("mediumBubble");
    mediumBubble.style.background = quote.color;
    var smallBubble = document.getElementById("smallBubble");
    smallBubble.style.background = quote.color;
}


//     var addedQuotes = [];
//
//     localStorage.setItem("quotes", JSON.stringify(addedQuotes));
//     var data = JSON.parse(localStorage.getItem("quotes"));
//
//     var newQuote = document.querySelector("#addQuote").value;
//     var quoteBy = document.querySelector("#by").value;
//     // e.preventDefault();
//     addedQuotes.push(newQuote, quoteBy);
//     localStorage.setItem("quotes", JSON.stringify(addedQuotes));
//
// var submitButton = document.querySelector("#new-quote");
//
// submitButton.addEventListener('click', function (){
//     localStorage.setItem("quotes", JSON.stringify(addedQuotes));
// });



// var addedQuote = [];
// newQuote.innerHTML = addedQuotes.text;
// quoteBy.innerHTML = addedQuotes.author;
function addQuote(newQuote, quoteBy) {
    // e.preventDefault();
    quotes.push({text: newQuote, author: quoteBy});
    // var quoteToStore = {text: newQuote, author: quoteBy};
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

if(localStorage.getItem("quotes") !== null){
    quotes = JSON.parse(localStorage.getItem("quotes"));
}

var submitButton = document.querySelector("#new-quote");

submitButton.addEventListener('click', function (e) {
    // e.preventDefault();

    var newQuote = document.querySelector("#addQuote").value;
    var quoteBy = document.querySelector("#by").value;

    addQuote(newQuote, quoteBy);

    console.log("This is the new quote " + {text: newQuote, author: quoteBy});
});

// function updateStoredQuotes(e, quotes){
//     e.preventDefault();
//     addQuote(e);
//     localStorage.getItem('quotes', string);
//     console.log(updateStoredQuotes(quotes));
//
// }


