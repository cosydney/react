var animals = [
  { name: 'Kiko'  , species: "dog"},
  { name: 'Kiko'  , species: "dog"},
  { name: 'Kiko'  , species: "dog"},
  { name: 'Kiko'  , species: "dog"},
  { name: 'Kiko'  , species: "dog"},
  { name: 'Lolcat'  , species: "cat"}
]

var isDog = function(animal){
    return (animal.species === 'dog')
}

var dogs = animals.filter(isDog)
