const fetchData = () => fetch(`https://restcountries.com/v3.1/region/europe`)
fetchData().then(r => r.json()).then(r => console.log(r))