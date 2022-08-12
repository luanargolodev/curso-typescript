// boolean (true / false)
let isOpen: boolean

// string ('foo', "foo", `foo`)
let message: string
message = 'foo'
message = "foo"
message = `foo`

// number (int, float, hex, binary)
let total: number
total = 20
total = 20.3
total = 0xff0 // hexadecimal

// array (type[])
let items: number[] // um array e dentro desse array varios numeros
items = [1, 2, 3]
let items2: string[] // um array e dentro desse array varios strings
items2 = ['foo', 'bar']
let items3: Array<number>
items3 = [1, 2, 3]

// tuple
let title: [number, string, string]
title = [1, 'foo', 'bar']

// enum
enum Colors {
  white = '#fff',
  black = '#000',
  red = '#f00',
  green = '#0f0',
  blue = '#00f',
}

// any (qualquer coisa) => NAO E LEGAL!
let coisa: any
coisa = true
coisa = 'foo'
coisa = []
coisa = {}
coisa = 1
coisa = null
coisa = undefined

// void (vazio)
function logger(): void {
  console.log('foo')
}

// null | undefined
type Bla = string | undefined

// never (nunca vai retornar)
function error(): never {
  throw new Error('error')
}

// object (qualquer coisa)
let cart: object
cart = {
  key: 'foo'
}