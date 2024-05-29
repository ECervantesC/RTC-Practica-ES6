/*EJERCICIO 1*/
console.log('Ejercicio 1')
const Ex1NoParam = () => {
  const a = 10
  const b = 5
  console.log(`El resultado es ${a + b}`)
}
Ex1NoParam()
const Ex1UnParam = (array) => {
  console.log(`El resultado es ${array[0] + array[1]}`)
}
const a = 10
const b = 5
let numeros = [a, b]
Ex1UnParam(numeros)
const Ex1DosParam = (a, b) => {
  console.log(`El resultado es ${a + b}`)
}
Ex1DosParam(a, b)
/*EJERCICIO 2*/
console.log('Ejercicio 2')
const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
}
const { title, gender, year } = game
console.log('Destructing de la variable game')
console.log(title)
console.log(gender)
console.log(year)
const fruits = ['Banana', 'Strawberry', 'Orange']
const [fruit1, fruit2, fruit3] = fruits
console.log('Destructing de la variable fruits')
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)
const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}
const { name, race } = animalFunction()
console.log('Destructing de la función animalFunction')
console.log(name)
console.log(race)
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }
const { name: carName, itv } = car
const [year1, year2, year3] = itv
console.log('Destructing de la variable car')
console.log(carName)
console.log(year1)
console.log(year2)
console.log(year3)
/* EJERCICIO 3*/
console.log('Ejercicio 3')
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsListCopy = [...pointsList]
console.log(`La nueva variable pointList es ${pointsListCopy}`)
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyCopy = { ...toy }
console.log(`La nueva variable toy es`)
console.log(toyCopy)

const pointsList2 = [54, 87, 99, 65, 32]
const pointsListCum = [...pointsList, ...pointsList2]
console.log(`La nueva variable de puntos acumulada es ${pointsListCum}`)
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const toyCum = { ...toy, ...toyUpdate }
console.log(`La nueva variable de toys acumulada es`)
console.log(toyCum)
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const [color1, color2, ...restColors] = colors
restColors.unshift(color1)
console.log(`El nuevo array de colores es ${restColors}`)
/* EJERCICIO 4*/
console.log('Ejercicio 4')
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const userName = users.map((user) => user.name)
console.log('El array de nombres es ')
console.log(userName)
function changeName(userName) {
  if (userName[0] === 'A') {
    return 'Anacleto'
  } else {
    return userName
  }
}
const userNameNoA = users.map((user) => changeName(user.name))
console.log(
  'El array de nombres cambiando a Anacleto los qie empiezan por A es '
)
console.log(userNameNoA)
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
function isVisited(array) {
  if (array.isVisited === true) {
    let a = array.name + 'Visitado'
    return a
  } else {
    return array.name
  }
}
const citiesVisited = cities.map((cities) => isVisited(cities))
console.log('El array de cities modificado es')
console.log(citiesVisited)

/* EJERCICIO 5*/
console.log('Ejercicio 5')
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const agesOlderThan30 = ages.filter((ages) => ages > 18)
console.log('Valores mayores de 18 años')
console.log(agesOlderThan30)
const evenAges = ages.filter((ages) => ages % 2 === 0)
console.log('Valores pares')
console.log(evenAges)
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const streamersLeagueLegends = streamers.filter(
  (streamers) => streamers.gameMorePlayed === 'League of Legends'
)
console.log('Streamers que tienen League of Legends como lo más jugado')
console.log(streamersLeagueLegends)
const streamersWithU = streamers.filter((streamers) =>
  streamers.name.includes('u')
)
console.log('Streamers cuyo nombre contiene la letra "u"')
console.log(streamersWithU)
const streamersWithLegend = streamers.filter((streamers) =>
  streamers.gameMorePlayed.includes('Legend')
)
console.log('Streamers cuyo juego contiene League')
console.log(streamersWithLegend)
/* EJERCICIO 6*/
console.log('Ejercicio 6')
const numbers = [32, 21, 63, 95, 100, 67, 43]
const number100 = numbers.find((numbers) => numbers === 100)
console.log('Encuentro el numero 100')
console.log(number100)
const movies = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
]
const movies2010 = movies.find((movies) => movies.date === 2010)
console.log('La película del año 2010 es')
console.log(movies2010)
const aliens = [
  { name: 'Zalamero', planet: 'Eden', age: 4029 },
  { name: 'Paktu', planet: 'Andromeda', age: 32 },
  { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
]
const mutations = [
  {
    name: 'Porompompero',
    description:
      'Hace que el alien pueda adquirir la habilidad de tocar el tambor'
  },
  {
    name: 'Fly me to the moon',
    description: 'Permite volar, solo y exclusivamente a la luna'
  },
  {
    name: 'Andando que es gerundio',
    description: 'Invoca a un señor mayor como Personal Trainer'
  }
]
const aliensCucushumushu = aliens.find(
  (aliens) => aliens.name === 'Cucushumushu'
)
const mutationsPoromponpero = mutations.find(
  (mutations) => mutations.name === 'Porompompero'
)

const combinedAlien = {
  ...aliensCucushumushu,
  mutation: mutationsPoromponpero.name,
  mutationDescription: mutationsPoromponpero.description
}
console.log('El nuevo objeto del alien Cucushumushu es')
console.log(combinedAlien)
/* EJERCICIO 7 */
console.log('Ejercicio 7')
const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]

const examsSum = exams.reduce((accumulator, exams) => {
  return accumulator + exams.score
}, 0)
console.log(`La suma de las notas de los examenes es ${examsSum}`)
const examsAprobadosSum = exams.reduce((accumulator, exams) => {
  if (exams.score >= 5) {
    return accumulator + exams.score
  }
  return accumulator
}, 0)
console.log(`La suma de los examenes aprobados es ${examsAprobadosSum}`)
const examsSuspendidosSum = exams.reduce((accumulator, exams) => {
  if (exams.score < 5) {
    return accumulator + exams.score
  }
  return accumulator
}, 0)
console.log(`La suma de los examenes suspendidos es ${examsSuspendidosSum}`)

/* EJERCICIO 8*/
console.log('Ejercicio 8')
const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]
const videogamesRPG = videogames.filter((videogames) =>
  videogames.genders.includes('RPG')
)

const videogamesRPGSumScore = videogamesRPG.reduce((acum, videogamesRPG) => {
  return acum + videogamesRPG.score
}, 0)
console.log(
  'La media del score de los videojuegos de género RPG es ' +
    videogamesRPGSumScore / videogamesRPG.length
)
/* EJERCICIO 9*/
console.log('Ejercicio 9')
const movies2 = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]
const moviesCategory = []
for (const movie of movies2) {
  for (category of movie.categories) {
    if (!moviesCategory.includes(category)) {
      moviesCategory.push(category)
    }
  }
}
console.log('La lista de categorías de las películas es')
console.log(moviesCategory)
/* EJERCICIO 10*/
const users2 = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
console.log('Ejercicio 10')
const volume = []
for (const key in users2) {
  for (const key2 in users2[key].favoritesSounds) {
    volume.push(users2[key].favoritesSounds[key2].volume)
  }
}
const volumeData = volume.reduce((acum, volume) => {
  return acum + volume
}, 0)
console.log(
  'La media del volumen de todos los sonidos favoritos es ' +
    volumeData / volume.length
)

/* EJERCICIO 11*/
console.log('Ejercicio 11')
let soundList = []
for (const key in users2) {
  for (const sound in users2[key].favoritesSounds) {
    if (!soundList.includes(sound)) {
      soundList.push(sound)
    }
  }
}
const counterSounds = (sound, array) => {
  let acum = 0
  for (const key in array) {
    for (const key2 in array[key].favoritesSounds) {
      if (key2 === sound) {
        acum++
      }
    }
  }
  return acum
}
let soundListTimes = []
for (const key in soundList) {
  let soundListElement = {}
  soundListElement.sound = soundList[key]
  soundListElement.times = counterSounds(soundList[key], users2)
  soundListTimes.push(soundListElement)
}

console.log(
  'El siguiente array muestra las veces que cada sonido ha sido agregado como favorito por los usuarios'
)
console.log(soundListTimes)
/* EJERCICIO 12*/
console.log('Ejercicio 12')
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
function findArrayIndex(array, text) {
  const indexToFind = array.indexOf(text)
  if (indexToFind === -1) {
    console.log('No he encontrado el texto')
  } else {
    return indexToFind
  }
}
console.log("Voy a buscar 'Rey'en el array mainCharacters")
let indexRey = findArrayIndex(mainCharacters, 'Rey')
console.log('La posición de Rey es la ' + indexRey)
console.log("Voy a buscar 'Luke'en el array mainCharacters")
let indexLuke = findArrayIndex(mainCharacters, 'Luke')
console.log('La posición de Luke es la ' + indexLuke)
console.log("Voy a buscar 'hola'en el array mainCharacters")
let indexHola = findArrayIndex(mainCharacters, 'hola')
/* EJERCICIO 13*/
console.log('Ejercicio 13')
const removeItem = (array, text) => {
  let index = findArrayIndex(array, text)
  if (index === -1) {
    console.log('Texto no encontrado')
  } else {
    return array.splice(index, 1)
  }
}
console.log('El array original es ')
console.log(mainCharacters)
console.log('Borro Leia')
removeItem(mainCharacters, 'Leia')
console.log(mainCharacters)
console.log('Borro Rey')
removeItem(mainCharacters, 'Rey')
console.log(mainCharacters)
/* EJERCICIO 14*/
console.log('Ejercicio 14')
const rollDice = (param) => {
  let result = Math.floor(param * Math.random() + 1)
  return result
}

for (i = 1; i <= 10; i++) {
  console.log('Es la tirada ' + i + ' del dado con 5 caras')
  console.log(rollDice(5))
}
for (i = 1; i <= 20; i++) {
  console.log('Es la tirada ' + i + ' del dado con 8 caras')
  console.log(rollDice(8))
}
/* EJERCICIO 15*/
const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
const swap = (array, positionInitial, positionEnd) => {
  console.log('el array inicial es')
  console.log(array)
  console.log(
    'voy a cambiar la posición ' +
      positionInitial +
      ' por la posición ' +
      positionEnd
  )
  let a = array[positionInitial]
  let b = array[positionEnd]
  array[positionInitial] = b
  array[positionEnd] = a
  console.log('el array final es')
  console.log(array)
}
swap(fantasticFour, 0, 1)
swap(fantasticFour, 1, 2)
swap(fantasticFour, 2, 3)
