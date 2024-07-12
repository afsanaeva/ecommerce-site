import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../redux/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h2 className="text-2xl mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2">${item.price}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => dispatch(updateCartQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                  className="w-16 px-2 py-1 border rounded"
                  min="1"
                />
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-4 py-2 px-4 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
