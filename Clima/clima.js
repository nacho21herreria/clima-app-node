const axios = require('axios');

const getClima = async (latitud, longitud) => {

    const instance = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=fc349ce904031bfda5ed4e26df607def`);
    return instance.data.main.temp;
}

module.exports = {
    getClima
}