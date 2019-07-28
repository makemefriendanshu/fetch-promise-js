/*const arr1 = [3243,3234,423432,5,6,7,8,2233];
const arr2 = arr1.map(function(x){
    console.log(x);
    return x * 5;
})*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const btn = document.createElement('button');
btn.textContent = "press me";
document.body.appendChild(btn);
btn.addEventListener('click', function () {
    fetchData('https://swapi.co/api/planets')
})
const output = document.createElement('div');
document.body.appendChild(output);

function outputPlanets(data) {
}

function fetchData(url) {
    fetch(url).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        output.textContent = `${data.count} results found.`;
        if (data.next) {
            const btn2 = document.createElement('button');
            btn2.textContent = 'next';
            output.appendChild(btn2);
            btn2.addEventListener('click', function () {
                fetchData(data.next)
            })
        }
        const planets = data.results.map(function (item) {
            console.log(item);
            return {
                name: item.name
                , films: item.films
            };
        })
        console.log(planets);
    })
}