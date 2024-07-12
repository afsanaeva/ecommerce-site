import Link from "next/link";

const Navbar = () => {
  return (
    
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex justify-between space-x-4 ">
        <div>
          <Link href="/">
            <p className="text-white">Home</p>
          </Link>
        </div>
        <div>
          <Link href="/login">
            <p className="text-white">Login</p>
          </Link>
        </div>
        <div>
          <Link href="/products">
            <p className="text-white">Products</p>
          </Link>
        </div>
        <div>
          <Link href="/cart">
            <p className="text-white">Cart</p>
          </Link>
        </div>
        <div>
          <Link href="/checkout">
            <p className="text-white">Checkout</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
