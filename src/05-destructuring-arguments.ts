interface Product {
  desc: string;
  price: number;
}

const tablet: Product = {
  desc: "Ipad",
  price: 300,
};

function calculateISV(products: Product[]) : [number, number]{
  let total = 0;
  products.forEach(({price}) => {
    total += price;
  }); //podemos trabajr como arreglo porq se lo indicamos en el parametro
  return [total, total* 0.15];
}


const articles = [tablet];
const [total, isv] = calculateISV(articles); //como el resultado de esta func devuelve un arreglo, desestructuramos

console.log('Total:', total);
console.log('ISV:', isv);