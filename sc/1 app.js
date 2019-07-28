const url = 'https://swapi.co/api/planets';

function fetchData() {
    fetch(url).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        console.log(data);
    })
}