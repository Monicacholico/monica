// fetch("./data.json")
// .then(response =>{
//     return response.json();
// })
// .then(data => {
//     console.log(data.pointeShoes);
// const div = document.getElementById('featuredProfile');
// console.log(div);
// div.innerText = data.pointeShoes;
//     });

async function fetchingPointes(){
    const listPointeShoes = document.querySelector('.pointeShoes');
    const pointeShoe = document.getElementById('post-shoe');
    const wrapper = document.getElementById('postWrapper');
    console.log(wrapper);
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data.pointeShoes);
    // document.getElementById('featuredProfile').innerText = JSON.stringify(data);
    const allPointeShoes = data.pointeShoes;
    console.log(allPointeShoes)
    for (const pointeShoe of allPointeShoes){
        const pointeEl = document.importNode(wrapper.content, true);
        pointeEl.querySelector('h2').textContent = pointeShoe.name.toUpperCase();
        console.log(pointeEl.querySelector('p'));
        pointeEl.querySelector('p').textContent = pointeShoe.level;
        listPointeShoes.append(pointeEl);
    }
}
fetchingPointes();


