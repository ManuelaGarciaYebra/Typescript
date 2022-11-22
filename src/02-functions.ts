function sum (a: number, b:number):number {
    return a + b
}



function mult (a:number, b?:number, c:number=2):number {
return a*b
}


let result = mult(5, 10) //sale 10, si el segundo par es opt no llega al tercero
result = mult(5, 0, 4) //funciona porque le meto el segundo par opcional y así llega al tercero

console.log(result)


interface CharacterA {
name: string;
hp: number;
showHp(): void;
// showHp: () => void;
}

function heal( character: CharacterA, healX: number): void {
character.hp + healX;
} // si usamos void significa que la fuuncion no retorna nada

const newCharacter: CharacterA = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log('health points', this.hp)
    }
}

heal(newCharacter, 20)