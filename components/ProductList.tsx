import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
    return (
        <div className="flex flex-wrap gap-x-8 gap-y-16 justify-between mt-12">
            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="/category.png"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="/product.png"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">49$</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] w-max py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white cursor-pointer">
                    Add to cart
                </button>
            </Link>

            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="/product.png"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="/category.png"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">49$</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] w-max py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white cursor-pointer">
                    Add to cart
                </button>
            </Link>

            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="/category.png"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="/product.png"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">49$</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] w-max py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white cursor-pointer">
                    Add to cart
                </button>
            </Link>

            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="/product.png"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="/category.png"
                        alt="product image"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">49$</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#F35C7A] w-max py-2 px-4 text-xs hover:bg-[#F35C7A] hover:text-white cursor-pointer">
                    Add to cart
                </button>
            </Link>
        </div>
    );
};

export default ProductList;
