'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


//----------------------------------------------- OUR FIRST AJAX CALL ------------------------------------------------- */

//NOTE -- > the below UI changes the country cards on refreshing the browser as the loading is dependend on which request is fullfill first.


//

//

/*
const getCountryData = function (country) { 
    const request = new XMLHttpRequest();
request.open('get', `https://restcountries.com/v2/name/${country}`);
request.send();
//console.log(request.responseText);

request.addEventListener('load', function () { 
    console.log(request.responseText);
    const [data] = JSON.parse(request.responseText);
    console.log(data);

    const html = `<article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;
})
}

getCountryData('canada');
getCountryData('usa');

*/

//

//

//

//----------------------------------------------- CALLBACK HELL ------------------------------------------------- */

//NOTE- To populate the data in a a certain way Below is the method.

//

//

//

/*

const renderCountry = function (data,className=' ') { 
    const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function (country) { 
    const request = new XMLHttpRequest();
request.open('get', `https://restcountries.com/v2/name/${country}`);
request.send();
//console.log(request.responseText);

request.addEventListener('load', function () { 
    console.log(request.responseText);
    const [data] = JSON.parse(request.responseText);
    console.log(data);

    //Render Country 1
    renderCountry(data);

    //Get Neighbour Country 2

    const neighbour = data.borders?.[0];
    console.log(neighbour);
    const request2 = new XMLHttpRequest();
    request2.open('get', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () { 
        const neighbourData = JSON.parse(request2.responseText);
            renderCountry(neighbourData,'neighbour');

    })
})
}

getCountryAndNeighbour('canada');

//Another Example of callback Hell below

setTimeout(() => {
    console.log('1 second passed');

setTimeout(() => {
    console.log('2 second passed');

setTimeout(() => {
    console.log('3 second passed');

setTimeout(() => {
    console.log('4 second passed');
}, 1000);
}, 1000);
}, 1000);
}, 1000);

*/

//

//

//

//----------------------------------------------- PROMISES AND FETCH API ------------------------------------------------- */
