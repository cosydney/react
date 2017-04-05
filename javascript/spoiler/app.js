
// var button = document.querySelector('.spoiler button')

// button.addEventListener('click', function(){
//   this.nextElementSibling.classList.add('visible')
//   this.parentNode.removeChild(this)
// })

// var sp = document.querySelector('#spoiler-btn')
// var spC = document.querySelector('#spoiler-content')
//
// sp.onclick = function(event) {
//   sp.style.display = 'none'
//   spC.style.display = 'block'
// }

(function (){
  var elements = document.querySelectorAll('.spoiler')

  var createSpoilerbutton = function(element){
    //on cree la span
    var span = document.createElement('span')
    span.className = "spoiler-content"
    span.innerHTML = element.innerHTML

    //on cree le bouton
    var button = document.createElement('button')
    button.textContent = 'Afficher le spoiler'

    //on ajoute les element au dom
    element.innerHTML = ' '
    element.appendChild(button)
    element.appendChild(span)

    // on met lecouteur au click
    button.addEventListener('click', function(){
      button.parentNode.removeChild(button)
      span.classList.add('visible')
    })
  }


  for (var i = 0; i < elements.length; i++) {
    createSpoilerbutton(elements[i])
  }
})()
