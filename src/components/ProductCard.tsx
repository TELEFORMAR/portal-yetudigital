interface Product {
  id: number
  name: string
  price: number
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="mt-2 text-gray-600">Preço: R${product.price}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Comprar
      </button>
    </div>
  )
}
