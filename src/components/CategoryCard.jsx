export function CategoryCard({ title, items, cta }) {
    return (
        <div className="flex min-h-full min-w-[300px] flex-col rounded-md bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-[24px] font-medium leading-tight text-[#222]">
                {title}
            </h2>

            <div className="grid grid-cols-2 gap-x-3 gap-y-5">
                {items.map((item, index) => (
                    <div key={index}>
                        <div className="aspect-[1.2] overflow-hidden bg-gray-100">
                            <img
          loading="lazy"
                                loading="lazy"
                                src={item.image}
                                alt={item.label}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <p className="mt-2 text-[12px] leading-4 text-gray-700">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            <button className="mt-auto pt-3 text-right text-sm text-[#565959] hover:text-black">
                {cta}
            </button>
        </div>
    );
}