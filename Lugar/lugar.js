const axios = require('axios');

const getLugarLatitudLongitud = async (direction) => {

    const cuidad = encodeURI(direction);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${cuidad}`,
        headers: { 'X-RapidAPI-Key': '0376ef31b3msh5bad321374d9f58p174107jsn71902bd7e0f2' }
    });

    const response = await instance.get();

    if (response.data.Results.length == 0) {
        throw new Error(`No se pudo determinar el clima para ${direction}`);
    }
    const data = response.data.Results[0];

    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return { direccion, latitud, longitud }
}
module.exports = {
    getLugarLatitudLongitud
}