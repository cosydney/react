// var ps = document.querySelectorAll('p')
// for (var i = 0; i < ps.length; i++) {
//   var p = ps[i]
//   p.addEventListener('mouseover', function(){
//     this.classList.add('red')
//   })
//   p.addEventListener('mouseout', function(){
//     this.classList.remove('red')
//   })
// }
// var liens = document.querySelectorAll('a.external')
// for (var i = 0; i < liens.length; i++) {
//   var lien = liens[i]
//   lien.addEventListener('click', function(event){
//     event.stopPropagation()
//     console.log("j'ai cliquer sur le lien", event)
//     var reponse = window.confirm("Es tu sur de vouloir quitter ce site internet?")
//     if (reponse === false){
//       event.preventDefault()
//     }
//   })
// }
//
// var p = document.querySelector('p')
// var onClick = function(e){
//   this.classList.add('red')
//   console.log('red')
//   e.preventDefault()
//   p.removeEventListener('click', onClick)
// }
// p.addEventListener('click', onClick)

// document.querySelector('#a').addEventListener("keydown", function(e){
//   console.log(String.fromCharCode(e.keyCode))
//   var lettre = String.fromCharCode(e.keyCode)
//   if (lettre != 'A') {
//     e.preventDefault()
//   }
// })



document.addEventListener('DOMContentLoaded', function(){
  var demo = document.querySelector('#demo')
  console.log(demo.value)
})
// demo.focus()
//
// document.querySelector('#form').addEventListener('submit', function(e){
//   // var mention = document.querySelector('#mention')
//   // if (!mention.checked){
//   //   alert('need to agree to cgu')
//   //   e.preventDefault
//   // }
//   var age = parseInt(document.querySelector('#age').selectedOptions[0].value, 10)
//   if (age < 18){
//     alert('trop jeune')
//     e.preventDefault()
//   }
// })
