var inputs = document.querySelectorAll('input, textarea')

var gMapString

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  gMapString = 'https://maps.google.com/?q='
  var {latitude, longitude, accuracy} = pos.coords
  console.log('Your current position is:')
  console.log(`Latitude : ${latitude}`)
  gMapString += `${latitude},`
  console.log(`Longitude: ${longitude}`)
  gMapString += `${longitude}`
  console.log(`More or less ${accuracy} meters.`)

  document.getElementById('sendCoorLabel').innerHTML = `Coordenadas Obtenidas Exitosamente`

}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
  document.getElementById('sendCoorLabel').innerHTML = `Ocurrió un error inesperado: ERROR ${err.code}`
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error, options)
  document.getElementById('sendCoorLabel').innerHTML = `Obteniendo localización`
}

function wappear() {
  var wapp = 'http://wa.me/5492615953291?text=_Hola Nico Vega 🛵💨💈💇🏼‍♂✂️:_ Estoy Buscando un Turno!'
  for ( let input of inputs){
    if (input.value !== "") {
      if (input.name === 'name') {
        wapp += `, Mi nombre es *${input.value}*`
      }
      if (input.name === 'date') {
        wapp += `, es para el día *${input.value}*`
      }
      if (input.name === 'time') {
        wapp += `, En el horario de las *${input.value}*`
      }
      if (input.name === 'message') {
        wapp += `, info adicional: ${input.value}`
      }
    }
  }
  if (typeof gMapString !== "undefined") {
    wapp += `, esta es mi localización ${gMapString} `
  }
  wapp += ` muchas gracias 😄`
  window.open(wapp)
}
