"use client";

import Image from "next/image";

const CartModal = () => {
    // TEMPORARY
    const cartItems = true;

    return (
        <div className="absolute w-max flex flex-col gap-6 p-4 rounded-md top-12 right-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            {!cartItems ? (
                <div>Cart is Empty</div>
            ) : (
                <>
                    <h2 className="text-xl">Shopping Cart</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                            <Image
                                src="/product.png"
                                alt="Product"
                                width={72}
                                height={96}
                                className="object-cover rounded-md"
                            />
                            <div className="flex flex-col justify-between w-full">
                                <div>
                                    <div className="flex justify-between items-center gap-8">
                                        <h3 className="font-semibold">
                                            Product Name
                                        </h3>
                                        <div className="p-1 bg-gray-50 rounded-sm">
                                            $49
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">
                                        Qty: 2
                                    </span>
                                    <span className="text-blue-500">
                                        Remove
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center font-semibold">
                            <span>Subtotal</span>
                            <span>$49</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <div className="flex items-center justify-between text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                                View cart
                            </button>
                            <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75">
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartModal;