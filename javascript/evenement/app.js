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
var liens = document.querySelectorAll('a.external')
for (var i = 0; i < liens.length; i++) {
  var lien = liens[i]
  lien.addEventListener('click', function(e){
    var reponse = window.confirm("Es tu sur de vouloir quitter ce site internet?")
    console.log(e)
    if (reponse === false){
      e.preventDefault
    }
  })
}
