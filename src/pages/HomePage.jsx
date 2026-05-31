import React, { Suspense, lazy } from 'react'
import SimpleProducts from '../components/SimpleProducts'
import SimpleSlider from '../components/ui/SimpleSlider'
import { categories, Recentproducts, slides, VideoSliderProducts } from '../../lib/data'
import { CategoryCard } from '../components/CategoryCard'
import TailwindSlider from '../components/ui/Slider'
import Card from '../components/ui/Card'
import MultipleImagesCard from '../components/MultipleImagesCard'
import { AnimatePresence } from 'framer-motion'
import { useData } from '../context/appContext'
import { motion } from 'framer-motion'

const ProductGrid = lazy(() => import('../components/RemainingProduct'))
const CategoryNavigation = lazy(() => import('../components/MobileCategories'))
const Modal = lazy(() => import('../components/ui/Modal'))
const CartSidebar = lazy(() => import('../components/CartSidebar'))

const HomePage = () => {
    const { selectedProduct, setSelectedProduct, cartOpen, setCartOpen } = useData();
    return (
        <div>

            {/* Hero Section */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 1.05,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.8,
                }}
                className='h-[500px] w-full overflow-hidden relative bg-amber-100 text-center hidden md:block'>
                <img
                    loading="lazy" src="./HeroBG.jpg" className='h-full w-full object-cover' alt="" />
                <div className='absolute bottom-0 m-auto text-center w-full'>
                    <TailwindSlider slides={slides} />
                </div>
            </motion.div>
            <div className='md:hidden'>
                <TailwindSlider slides={slides} />
                <Suspense fallback={<div className="h-16" />}>
                    <CategoryNavigation />
                </Suspense>
            </div>

            {/* Recent Products */}
            <div className="m-4 rounded-xl  bg-[#ECE7F6] px-10 py-6  ">
                <h2 className="mb-5 text-2xl font-semibold text-gray-800">
                    Dashu, Still looking for this ?
                </h2>

                <div className="flex gap-8 overflow-x-auto">
                    {Recentproducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>


            {/* Card with multiple images */}
            <div className=' w-full  bg-cyan-200 mt-2 '>
                <section className="rounded-2xl bg-[#DDEDE8] p-5">
                    <SimpleSlider>
                        {categories.map((category, index) => (
                            <CategoryCard
                                key={index}
                                title={category.title}
                                items={category.items}
                                cta={category.cta}
                            />
                        ))}
                    </SimpleSlider>
                </section >
            </div >

            <SimpleProducts />

            <div className='bg-purple-400 h-[100px] md:h-56 mx-4 rounded-xl relative '>
                <img
                    loading="lazy" src="./Rectangle.png" className='absolute w-full h-full' alt="" />
            </div>

            <div className="m-4 rounded-xl  bg-[#ECE7F6] px-10 py-6  ">
                <h2 className="mb-5 text-2xl font-semibold text-gray-800">
                    Dashu, Still looking for this ?
                </h2>

                <div className="flex gap-8 overflow-x-auto">
                    {Recentproducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>


            {/* Sale */}
            <div className='bg-cyan-100 m-2 max-w-full min-h-180  relative'>
                <img
                    loading="lazy" src="./SaleBackground.jpg" alt="" className='w-full absolute h-full  ' />
                <div className='bottom-0 absolute max-w-full'>
                    <SimpleSlider className="absolute ">
                        <MultipleImagesCard />
                        <MultipleImagesCard />
                        <MultipleImagesCard />
                        <MultipleImagesCard />
                        <MultipleImagesCard />
                    </SimpleSlider>
                </div>
            </div>


            <div className="m-4 rounded-xl  bg-[#ECE7F6] px-10 py-6  ">
                <h2 className="mb-5 text-2xl font-semibold text-gray-800">
                    Dashu, Still looking for this ?
                </h2>

                <div className="flex gap-8 overflow-x-auto">
                    {Recentproducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="w-[100%] bg-[#85d0ff] px-10 py-6  ">
                <h2 className="mb-5 text-2xl font-semibold text-gray-800">
                    Sabka Fayda Live, Shop and Watch
                </h2>
                <SimpleSlider>
                    <div className='bg-red-50 rounded-xl min-w-100 h-70 overflow-hidden'>
                        <iframe src="https://www.youtube.com/embed/T4b94i7EB-c?si=YMJ2TizHRL4-yLUv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                            className='object-fill w-full h-full'
                        ></iframe>
                    </div>
                    {VideoSliderProducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </SimpleSlider>
            </div>

            <SimpleProducts />
            <Suspense fallback={<div className="min-h-[400px]" />}> 
                <ProductGrid setSelectedProduct={setSelectedProduct} />
            </Suspense>
            {selectedProduct &&
                <Suspense fallback={
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <div className="rounded-xl bg-white p-6 shadow-lg">Loading product...</div>
                    </div>
                }>
                    <Modal selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
                </Suspense>
            }

            <AnimatePresence>
                {cartOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/30 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setCartOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed right-0 top-0 h-screen w-80 z-50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Suspense fallback={<div className="h-full w-full bg-white/90" />}> 
                                <CartSidebar />
                            </Suspense>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            {selectedProduct && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50"
            />}



        </div>
    )
}

export default HomePage
