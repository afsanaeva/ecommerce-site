import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../redux/productsSlice';

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.currentProduct);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl mb-4">{product.title}</h2>
      <img src={product.image} alt={product.title} className="w-full h-60 object-cover mb-4" />
      <p>{product.description}</p>
      <p className="mt-4 text-lg">${product.price}</p>
      <button className="w-full py-2 mt-2 bg-blue-500 text-white rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
