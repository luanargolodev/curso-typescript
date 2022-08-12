interface Game {
  title: string
  description: string
  genre: string
  platform?: string[] // optional
  getSimilar: (title: string) => void
  price: number
}

const tlou: Game = {
  title: 'The Last of US',
  description: 'The best game in the world',
  genre: 'Action',
  getSimilar: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale and Metro`)
  },
  price: 50.00
}

console.log(tlou)

interface DLC extends Game {
  originalGame: Game
  newContent: string[]
}

const leftbehind: DLC = {
  title: 'The Last of US - Left Behind',
  description: 'You play as Ellie before the original game',
  genre: 'Action',
  platform: ['PS4'],
  getSimilar: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale and Metro`)
  },
  price: 30.00,
  originalGame: tlou,
  newContent: ['3 hours story', 'new characters', 'new weapons', 'new adventures']
}

console.log(leftbehind)

class CreateGame implements Game {
  title: string
  description: string
  genre: string
  platform?: string[]
  price: number
  getSimilar: (title: string) => void

  constructor(title: string, description: string, genre: string, platform: string[], price: number, getSimilar: (title: string) => void) {
    this.title = title
    this.description = description
    this.genre = genre
    this.price = price
    this.platform = platform
    this.getSimilar = getSimilar
  }
}

console.log(CreateGame)