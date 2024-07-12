import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productsSlice';
import Link from 'next/link';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl mb-4">Products</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full px-3 py-2 border rounded mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <Link href={`/products/${product.id}`}>
              <a>
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="mt-2">${product.price}</p>
              </a>
            </Link>
            <button className="w-full py-2 mt-2 bg-blue-500 text-white rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
