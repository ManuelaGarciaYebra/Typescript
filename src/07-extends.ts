import { nodeModuleNameResolver } from "typescript";

// constructor una function que se llama cuando creo una instancia de mi clase

class Person {
  constructor(namePerson: string, address: string) {}
}
class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName?: string
  ) {
    super(realName, 'NewYork') //llama al constructor del que te extiendes y enviale el valor mediante params
  }
}

const ironMan = new Hero("IronMan", 24, "Tony");

