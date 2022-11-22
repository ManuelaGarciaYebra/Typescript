interface SuperHero {
    name: string,
    age: number,
    address: Address, //se crea una nueva interfaz en vez de una prop obj
    showAddress: () => string,
}

interface Address {
        street: string,
        country: string,
        city: string
}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 20,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return `${this.name}, ${this.address.city}, ${this.address.city}`;
    }
}

const address = superHero.showAddress();
console.log(address);

export default superHero;