import t1 from '../assets/t1.png'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
import ProductCard from '../components/ProductCard';
const product = [
    {id: 1, name: "T-shirt", price: 20, image: t1},
    {id: 2, name: "Jean", price: 40, image: t2},
    {id: 3, name: "Jacket", price: 60, image: t3}
];


function Shop() {
  return (
    <>
        <section className='grow bg-gray-100'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
              {product.map((product) => <ProductCard {...product}/>)}
            </div>
        </section>
    
    </>
  )
}

export default Shop
