function ProductCard({ id, name, price, image }) {
  return (
    <>
      <div className="bg-white p-4 shadow-lg">
        <div className="h-48 w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2>{name}</h2>
            <p>${price}</p>
          </div>
          <button className="cursor-pointer rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
