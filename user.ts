// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
  id: number
  name: string
  email?: string // optional
  age: number
}

const accout: AccountInfo = {
  id: 0,
  name: 'Luan',
  age: 23
}

type CharInfo = {
  nickname: string
  level: number
}

const char: CharInfo = {
  nickname: 'ipsLuan',
  level: 101
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 0,
  name: 'Luan',
  age: 23,
  email: 'ipsluan@icloud.com',
  nickname: 'ipsLuan',
  level: 101
}