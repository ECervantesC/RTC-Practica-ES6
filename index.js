const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const input = document.querySelector('input')
const string = []
input.addEventListener('input', (e) => {
  console.clear()
  string.push(e.target.value)
  const streamersFiltered = streamers.filter((streamers) =>
    streamers.name.includes(e.target.value)
  )
  if (streamersFiltered.length >= 1) {
    for (const streamer of streamersFiltered) {
      console.log(streamer)
    }
  }
})
