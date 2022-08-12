// public, private, readonly e protected

class UserAccount {
  public name: string // publica, ou seja, livre para fazer o que quiser
  protected age: number // consegue chamar na class mas nao consegue chamar fora da class

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string // nao sera possivel alterar e nem visualizar fora do escopo da class
  readonly level: number // nao sera possivel alterar

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)
    this.nickname = nickname
    this.level = level
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}.`)
  }
}

const luan = new UserAccount('Luan', 23)
console.log(luan)
luan.logDetails()

const argolo = new CharAccount('Argolo', 23, 'argololuan', 101)
console.log(argolo)
argolo.logDetails()
argolo.logCharDetails()