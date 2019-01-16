var inputs = document.querySelectorAll('input')
var wapp = 'http://wa.me/5492615953291?text=Hola Nico Vega ✂️ 🛵 : Estoy Buscando un Turno!'


function wappear() {
  for ( let input of inputs){
    if (input.value !== "") {
      if (input.name === 'name') {
        wapp += `, Mi nombre es *${input.value}*`
      }
      if (input.name === 'date') {
        wapp += `,es para el día *${input.value}*`
      }
      if (input.name === 'time') {
        wapp += `, En el horario de las *${input.value}*`
      }
      if (input.name === 'message') {
        wapp += `, info adicional: ${input.value}`
      }
    }
  }
  wapp += `
  muchas gracias`
  window.open(wapp)
}
