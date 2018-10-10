(function() {
    "use strict";

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    };

        const taxRate = 0.1;
        const total = 100 + (100 * taxRate);

        console.log(`Your order is ${total}`);




        // const discountTable = [];
        //
        // for (let i = 0; i < cart.length; i ++);
        // if (cart[i].discountAvailable) {
        //     discountTable.push(cart[i]);
        // }
        //
        // const discounTable1 = cart.filter(item => item.discountAvailable);
        //
        //
        // function getLowestPrice(item) {
        //
        //     var count = item.inventory;
        //     var price = item.price;
        //
        //     if (item.salePrice){
        //
        //         var count = item.saleInventory;
        //         if (count > 0) {
        //             price = item.salePrice;
        //         }
        //     }
        //     if (count) {
        //         return price;
        //     }
        //     return 0;
        // }


            console.log("hello world");

            const items = [1,2,3,45];
            function addClick(items) {
                for (var i = 0; i < items.length; i++) {
                    items[i].onClick = function () {return i;};
                }
                return items;
            }
            console.log(items);
            const example = [{}, {}];
            const clickSet = addClick(example);
            clickSet[0].onClick();


            function greet(name) {
                return `Hi ${name}`;
            }
            console.log(greet(`monica`));

//

    function leapYearConverter(age) {
        return `You'd be ${Math.floor(age / 4)} if born on a leap year.`;
    }
    console.log(leapYearConverter(25));

// Interpolated
    console.log(`Hello I am %s string!`, 'anything else that I want to add to the same string')
    // Styled
    console.log(`%cI am some great text`, `font-size:25px; background:hotpink; text-shadow: 5px 5px 0 pink`)
    // Warning
    console.warn(`OH NOOOOO`);
    //Error!
    console.error(`shit!`);
    //Info
    console.info(`Crocodiles eat 3-4 people per year`);
    //Testing
    const p = document.querySelector(`p`);
    console.assert(p.classList.contains(`ouch`), `That is wrong`);
    //Clear
    console.clear();
    //Viewing DOM elements
    console.log(p);
    console.dir(p);
    //Grouping Together

    console.group();
    console.groupCollapsed();
    console.groupEnd();
    // Counting
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');

    // Timing

    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });

    const pointeShoes = [ 'Bloch', 'Capezio', 'Sansha', 'Grishko'];

    const copyPointeShoes = [...pointeShoes];
    console.log (copyPointeShoes);


    function removeItem(items, removable){
        const updated = [];
        for (let i = 0; i < items.length; i++);{
        if (items[i] !== removable) {
            updated.push(items[i]);
        }
    }
    return updated
    }



    const book = ['Reasons and Persons', 'Derek Parfit', 19.99];
    function formatBook(title, author, price){
        return `${title} by ${author} $${price}`;
    }
    formatBook(...book);
    console.log(formatBook(...book));




})();