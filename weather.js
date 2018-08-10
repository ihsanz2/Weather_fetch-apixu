class Weather {
    constructor(city,state){
        this.apiKey = 'a837edee074445a0aba95207181008';
        this.city = city;
        // this.state = state;
    }
//fetch cuaca ddari API
    async getWeather (){
        const response = await fetch(`http://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`)

        const responseData = await response.json();

        return responseData
}

//ganti lokasi
    changeLocation(city){
        this.city = city;
        // this.state = state;
    }
}