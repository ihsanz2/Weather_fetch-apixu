//Init weatrh object

const ui = new UI;
const storage = new Storage();

//ambil data di local storage
const weatherLocation = storage.getLocationData();

//weather yang akan di pass ke get weather
const weather = new Weather(weatherLocation.city);

// Get weather saat DOM load
document.addEventListener(' DOMContentLoaded',getWeather())

//ganti lokasi
document.getElementById('w-change-btn').addEventListener('click',(e) => {
    const city = document.getElementById('City').value;

    //ganti lokasi
    weather.changeLocation(city);

    storage.setLocationData(city)
    
    //ambil getweather dan tampilkan ui kembali
    getWeather();

    //tutup modal bootstrap
    $('#locModal').modal('hide');
})




function getWeather(){
    weather.getWeather()
        .then(res => ui.paint(res))
        // .then(res =>console.log(res.current.last_updated))
        .catch(err=>console.log(err))
}