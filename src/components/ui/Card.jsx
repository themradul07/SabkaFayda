import React from 'react'

const Card = ({ product }) => {

    return (
        <div
            key={product.id}
            className="w-[200px] flex-shrink-0 rounded-md bg-[#f3f3f3] p-3"
        >
            <div className="overflow-hidden rounded-md bg-white">
                <img
          loading="lazy"
                    src={product.image}
                    alt=""
                    className="h-[140px] w-full object-cover hover:scale-105 ease-in-out transition-all duration-75"
                />
            </div>

            {product.title && (
                <div className="pt-3">
                    <p className="text-sm text-red-500">{product.price}</p>
                    <p className="mt-1 text-sm leading-5 text-gray-700">
                        {product.title}
                    </p>
                </div>
            )
            }
            </div>
    )}

export default Card;
