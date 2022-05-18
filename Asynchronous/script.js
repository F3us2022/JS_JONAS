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

//

//

/*

//OLD WAY OF DOING ASYNCHRONOUS CALLS/HTTP REQUESTS

// const request = new XMLHttpRequest();
// request.open('get', `https://restcountries.com/v2/name/${country}`);
// request.send();


//NEW WAY OF DOING ASYNCHRONOUS CALLS/HTTP REQUESTS

const request = fetch('https://restcountries.com/v2/name/spain');
console.log(request);

*/

//

//


//----------------------------------------------------- CONSUMING PROMISE ------------------------------------------------- */

//

//

//const request = fetch('https://restcountries.com/v2/name/spain').then(function (response) { console.log(response); return /////response.json() }).then(function (data) {console.log(data) });
//console.log(request);

//


//----------************ Using the PROMISE AND FETCH rewriting the same code *************-------/

//

/*

const getCountryData = function (country) { 
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data[0]))
}

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

getCountryData('spain');

*/

//

//

//

//----------------------------------------------------- CHAINING PROMISE ------------------------------------------------- */

//

//

//

/*

const getCountryData = function (country) { 
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => renderCountry(data,'neighbour'))
}

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

getCountryData('spain');

*/

//

//

//--------------------------------------- HANDLING REJECTED PROMISES (CATCH) -------------------------------------------- */

//

//

/*

//COMMON CODE CALLED REPEATEDLY 

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

*/

//------********* METHOD 1 - HANDLING ERROR ***********---/

/*

const getCountryData = function (country) { 
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json(),
        err=>alert(err))
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then((response) => response.json(),
        err=>alert(err))
        .then((data) => renderCountry(data,'neighbour'))
}

btn.addEventListener('click', function () { 
getCountryData('spain');
})

*/

//------********* METHOD 2 - HANDLING ERROR (USING CATCH) ***********---/

/*

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
 }
const getCountryData = function (country) { 
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.log(`${err}`);
            renderError(`Something wrong happend ${err.message}`)
        })
}

btn.addEventListener('click', function () { 
getCountryData('spain');
})

*/

//------********* METHOD 3 - HANDLING ERROR (USING CATCH?FINALLY) ***********---/

/*

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    
 }
const getCountryData = function (country) { 
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.log(`${err}`);
            renderError(`Something wrong happend ${err.message}`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
}

btn.addEventListener('click', function () { 
getCountryData('spain');
})

*/

//

//

//

//--------------------------------------------- THROWING ERRORS MANUALLY -------------------------------------------- */

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

*/

/*

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    
 }
const getCountryData = function (country) { 
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => {
            console.log(response);
            if (!response.ok)
            {
                throw new Error(`Country not found ${response.status}`);
            }
            return response.json();
        }
        )
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Neighbouring Country not found ${response.status}`);
            }
            return response.json()
        })
        .then((data) => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.log(`${err}`);
            renderError(`Something wrong happend ${err.message}`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
}

btn.addEventListener('click', function () { 
getCountryData('spain');
})

*/

//------------*********** above code refactored and restructured ************--------/
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.com/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getCountryData('australia');

//-------------------------------------- PROMISES (ALL/RACE/ANY/ALL SETTLED) ----------------------------------------- */

// Promise.allSettled([
//   Promise.resolve('success'),
// Promise.reject('rejected'),
// Promise.resolve('resolve'),
// ]).then(res => console.log(res))
//   .catch((err)=> console.log(err));

// Promise.all([
//   Promise.resolve('success'),
// Promise.reject('rejected'),
// Promise.resolve('resolve'),
// ]).then(res => console.log(res))
//   .catch((err)=> console.log(err));

// Promise.any([
//   Promise.resolve('success'),
// Promise.reject('rejected'),
// Promise.resolve('resolve'),
// ]).then(res => console.log(res))
//   .catch((err)=> console.log(err));

// Promise.race([
//   Promise.resolve('success'),
// Promise.reject('rejected'),
// Promise.resolve('resolve'),
// ]).then(res => console.log(res))
//   .catch((err)=> console.log(err));