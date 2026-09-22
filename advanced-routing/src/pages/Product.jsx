import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white">

      {/* Product Heading */}
      <h1 className="text-3xl font-bold text-center py-6">
        Product Page
      </h1>

      {/* Product Links */}
      <div className="bg-amber-500 flex justify-center gap-10 p-4">
        <Link
          className="font-bold hover:text-black"
          to="men"
        >
          Men
        </Link>

        <Link
          className="font-bold hover:text-black"
          to="women"
        >
          Women
        </Link>

        <Link
          className="font-bold hover:text-black"
          to="kids"
        >
          Kids
        </Link>
      </div>

      {/* Child routes appear here */}
      <Outlet />

    </div>
  );
};

export default Product;