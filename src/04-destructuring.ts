import superHero from './03-objets-interfaces'

const { name, age, address:{city} } = superHero;


const names: string[] = ['lita', 'dani', 'kenobi', 'juan'];
const [keyName, keyName2, KeyName3] = names;
const [ , , KEyName3] = names;
console.log(keyName2)
console.log(KEyName3)