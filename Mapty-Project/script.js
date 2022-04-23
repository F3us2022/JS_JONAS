'use strict';

// prettier-ignore
//const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', //'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//let map, mapEvent;

/////////////////////////////////////////////////
///////////////////////////////


/*

if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
        function (position) {
            console.log(position);
            console.log(position.coords);

            //const latitude = position.coords.latitude;
            //const longitude = position.coords.longitude;

            //USING DESTRUCTURING

            const { latitude } = position.coords;
            const { longitude } = position.coords;

            //Getting GEO LOCATION USING GOODGLE MAP

            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

            const coords = [latitude, longitude];
            
//**----------------------------------------- USING THE LEAFLET API --------------------------------------------------------

            // const map = L.map('map').setView(coords, 13);

            // L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // }).addTo(map);

            // L.marker(coords).addTo(map)
            //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            //     .openPopup();


//**---------------------- CHANGING THE LEAFLET API AS PER OUR REQUIREMENT AND TO ADD THE CLICK EVENT ---------------------


            //const map = L.map('map').setView(coords, 13);

            map = L.map('map').setView(coords, 13);

            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            
            //map.on('click', function (mapE) {  
                //console.log(mapE);
                //mapEvent = mapE;
                //const { lat, lng } = mapEvent.latlng;
                // L.marker(
                //     [lat, lng],
                //     {
                //         opacity: 0.6,
                //     })
                //     .addTo(map)
                //     .bindPopup(
                //         L.popup({
                //             maxWidth: 250,
                //             minWidth: 100,
                //             autoClose: false,
                //             closeOnClick: false,
                //             className: 'running-popup'
                //         })
                //     )
                //     .setPopupContent(`Workout`)
                //     .openPopup();
            
            //})
//
            
//
            
//**---------------------- CHANGING THE LEAFLET API AS PER OUR REQUIREMENT TO DISPPLAY FORM ---------------------

            map.on('click', function (mapE) {
                mapEvent = mapE;
                form.classList.remove('hidden');
                inputDistance.focus();
             })
        },
        function ()
        {
            alert(`Couldnot get your location`)
        }
    );

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //CLEAR INPUT VARIABLE VALUE

    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ' ';

    //DISPLAY THE MARKER ON THE MAP
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng],
        {
            opacity: 0.6,
        })
        .addTo(map)
        .bindPopup(
            L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup'
            })
        )
        .setPopupContent(`Workout`)
        .openPopup();
                    
                
});

inputType.addEventListener('change', function () { 
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');

})

//

//

*/

//

//**----------------------------------- REFACTORING THE ABOVE CODE AND USING CLASSES ---------------------------------------

//

//

//
class App { 

    #map;
    #mapEvent;
    #workouts = [];
    #mapZoomLevel = 13;

    constructor() { 

        //Get User's position
        this._getPosition();

        //Get Data from Local Storage
        this._getLocalStorage();
        //Attach Event Handlers
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    }
    
    //GET THE POSITION

    _getPosition()
    { 
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition
                (this._loadMap.bind(this),
                    function ()
                    {
                        alert(`Couldnot get your location`)
                    }
                );
    }

    //LOAD MAP

    _loadMap(position) { 
            console.log(position);
            console.log(position.coords);

            //USING DESTRUCTURING

            const { latitude } = position.coords;
            const { longitude } = position.coords;

            //Getting GEO LOCATION USING GOODGLE MAP

            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

            const coords = [latitude, longitude];
            
            this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

        this.#map.on('click', this._showForm.bind(this));

        this.#workouts.forEach(workData => this._renderWorkputMarker(workData));
        
    }

    //SHOW FORM

    _showForm(mapE)
    {
                this.#mapEvent = mapE;
                form.classList.remove('hidden');
                inputDistance.focus();
    
    }
    
    //HIDE FORM

    _hideForm() { 
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ' ';
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => { form.style.display = 'grid' }, 1000);
    }

    //TOGGLE THE FIELD
    _toggleElevationField() { 
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
       
    }

    //NEW WORKOUT

    _newWorkout(e) {

        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    //GET DATA FROM FORM
        
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;
        
    //IF WORKOUT RUNNING , CREATE RUNNING OBJECT
        
        if (type === 'running') { 

            const cadence = +inputCadence.value;
            //CHECK IF DATA IS VALID

            if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)) { 
                return alert(`Input have to be positive`);
            }

            workout = new Running([lat, lng], distance, duration, cadence);
        }
        
    //IF WORKOUT CYCLING , CREATE CYCLING OBJECT
        
        if (type === 'cycling') { 
            const elevation = +inputElevation.value;
            if (!validInputs(distance, duration, elevation) || !allPositive(distance, duration)) { 
                return alert(`Input have to be positive`);
            }
            workout = new Cycling([lat, lng], distance, duration, elevation);
        
        }
        
    //ADD NEW OBJECT TO WORKOUT ARRAY
        
        this.#workouts.push(workout);
        console.log(this.#workouts);

    //RENDER WORKOUT AS MARKER ON THE MAP
        this._renderWorkputMarker(workout);

    //RENDER WORKOUT ON THE LIST
        this._renderWorkout(workout);

    //HIDE THE FORM AND CLEAR INPUT VARIABLE VALUE
        this._hideForm();

    //SET LOCAL STORAGE TO ALL WORKOUT
        
        this._setLocalStorage();
        

    }
    
    _renderWorkputMarker(workout) { 
        L.marker(workout.coords,
        {
            opacity: 0.6,
        })
        .addTo(this.#map)
        .bindPopup(
            L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup`
            })
        )
        .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
        .openPopup();
    }

    _renderWorkout(workout) {
        let html = `<li class="workout workout--${workout.type}" data-id=${workout.id}>
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} </span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;
        
        if (workout.type === 'running') {
            html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`};
            
            if (workout.type === 'cycling') { 
                html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
            }
        form.insertAdjacentHTML('afterend',html);
   
    }
    
    _moveToPopup(e) { 
        if (!this.#map) return;
        console.log('e Value',e.target);
        const workoutEl = e.target.closest('.workout');
        console.log('workEL Value', workoutEl);

        if (!workoutEl)
            return;
        console.log(this.#workouts);
        console.log(workoutEl.dataset.id);

        const workout = this.#workouts.find((works) => works.id === workoutEl.dataset.id);
        console.log(workout)

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1
            }
        })
    }

    _setLocalStorage() { 
        localStorage.setItem('workoutKey', JSON.stringify(this.#workouts));
    };

    _getLocalStorage() { 
        const localData = JSON.parse(localStorage.getItem('workoutKey'));
        console.log(localData);

        if (!localData) return;

        this.#workouts = localData;

        this.#workouts.forEach(workData => this._renderWorkout(workData));
    };

    reset() {
    localStorage.removeItem('workoutKey');
    location.reload();
  }


}

const app = new App();

//

//**----------------------------------- MANAGING WORKPUT DATA USING CLASS ---------------------------------------

//

//

class Workout { 
    date = new Date();
    id = (Date.now() + ' ').slice(-10);

    constructor(coords, distance, duration) { 
        this.coords = coords; //lat and lng
        this.distance = distance; // in km
        this.duration = duration; //in mtr
    }

    _setDescription() { 
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

}

class Running extends Workout{ 
    type = 'running';
    constructor(coords, distance, duration, cadence) { 
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }

    calcPace() { 
        //min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
class Cycling extends Workout{
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }
    
    calcSpeed() {
        //km/hr
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }

}
 
const run = new Running([39, -12], 5.2, 24, 178);
console.log(run);