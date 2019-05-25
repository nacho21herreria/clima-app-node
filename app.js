const lugar = require('./Lugar/lugar')
const clima = require('./Clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la cuidad para obtener el clima',
        demand: true
    }
}).argv;


lugar.getLugarLatitudLongitud(argv.direccion).then(
    response => (
        clima.getClima(response.latitud, response.longitud)
            .then(res => (console.log(`El clima de ${response.direccion} es ${res}`)))
    ).catch(error => (console.log(error)))

).catch(error => (console.log(error)));