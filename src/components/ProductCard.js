import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  add_to_cart,
  remove_from_cart,
} from "../redux/productActions/productActions";
import { RiDeleteBinLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div
      className="relative shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
      key={product._id}
    >
      {pathname.includes("cart") && <div className="bg-indigo-500 rounded-full absolute w-8 h-8 grid place-items-center right-2 top-2">
        <p className="text-white">{product.quantity}</p>
      </div>}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return (
              <li key={feature} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(remove_from_cart(product))}
            className="bg-red-500 flex justify-center items-center rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Remove
            <RiDeleteBinLine size={20} className="ml-2" />
          </button>
        )}
        {pathname.includes("cart") && (
          <button className="bg-indigo-500 flex justify-center items-center rounded-full py-1 px-2 flex-1 text-white text-bold">
            Buy now
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(add_to_cart(product))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
