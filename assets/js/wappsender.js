var inputs = document.querySelectorAll('input')

var gMapString

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  gMapString = 'https://maps.google.com/?q='
  var crd = pos.coords
  var flag = true
  console.log('Your current position is:')
  console.log(`Latitude : ${crd.latitude}`)
  gMapString += `${crd.latitude},`
  console.log(`Longitude: ${crd.longitude}`)
  gMapString += `${crd.longitude}`
  console.log(`More or less ${crd.accuracy} meters.`)

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
  var wapp = 'http://wa.me/5492615953291?text=Hola Nico Vega ✂️ 🛵 : Estoy Buscando un Turno!'
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
  wapp += ` muchas gracias`
  window.open(wapp)
}
