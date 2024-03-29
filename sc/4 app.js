/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
var array1 = ['a', 'b', 'c'];
array1.forEach(function(element) {
  console.log(element);
});
*/
const btn = document.createElement('button');
btn.textContent = "press me";
document.body.appendChild(btn);
btn.addEventListener('click', function () {
    fetchData('https://swapi.co/api/planets')
})
const output = document.createElement('div');
document.body.appendChild(output);

function outputPlanets(data) {
    data.forEach(function (item) {
        console.log(item);
        const div = document.createElement('div');
        div.textContent = item.name;
        const ul = document.createElement('ul');
        for (let x = 0; x < item.films.length; x++) {
            let li = document.createElement('li');
            li.textContent = item.films[x];
            ul.appendChild(li);
        }
        div.appendChild(ul);
        output.appendChild(div);
    })
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
        outputPlanets(planets);
    })
}