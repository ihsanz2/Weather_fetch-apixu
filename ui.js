class UI {
    constructor (){
        this.lokasi = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.feels_like = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.last_updated = document.getElementById('lastUpdate');
    }
    paint(weather){
        this.lokasi.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = `Temp : ${weather.current.temp_c} C`;
        this.icon.setAttribute('src',weather.current.condition.icon);
        this.humidity.textContent = `Relative Humidity : ${weather.current.humidity}`;
        this.feels_like.textContent = `Relative Feels Like : ${weather.current.feelslike_c
        }`;
        this.feels_like.textContent = `Relative Feels Like : ${weather.current.feelslike_c
        }`;
        this.wind.textContent = `Relative Wind : ${weather.current.wind_mph
        }`;
        this.last_updated.textContent = `Last Updated : ${weather.current.last_updated
        }`;
        
    }
}