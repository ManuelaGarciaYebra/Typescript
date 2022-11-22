//Decorators : una funcion que expande las clases

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = 'new Property';
      hello = 'override';
    };
  }

@classDecorator
class MySuperClass  {
    public myPropiety: string = 'ABC';
    print() {
        console.log('Hello')
    }
} // Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning.ts(1219)

console.log(MySuperClass)            

const myClass = new MySuperClass();


console.log(myClass.myPropiety)           