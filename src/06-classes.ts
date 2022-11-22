// class Hero {
//     private alterEgo: string; //disp solo dentro de esta clase
//     public age: number;
//     static realName; //puedo acceder al valor de la propiedad sin crear una instancia de la clase
    // constructor() {
    //     this.alterEgo
    // }

// }

// Hero.realName //solo me permite acceder a esta

// las clases me sirven para crear instancias:
// const ironMan = new Hero();
// ironMan.age //solo me permite la edad porq es publica

//en una interfaz no puedo definir como quiero q funcione un metodo

// interface Ch {
//     alterEgo: string,
    //Esto no es posible hacerlo en una interfaz
    // printName() {
    //     return this.alterEgo
    // }
    //PERO si puedo indicar que tiene una funcion que retorne solo UN TIPO
//     printName: () => string
// }