//Init weatrh object
const weather = new Weather("Padang");
const ui = new UI;



// Get weather saat DOM load
document.addEventListener('load',getWeather())

// weather.changeLocation('bandung');



function getWeather(){
    weather.getWeather()
        .then(res => ui.paint(res))
        // .then(res =>console.log(res.current.last_updated))
        .catch(err=>console.log(err))
}