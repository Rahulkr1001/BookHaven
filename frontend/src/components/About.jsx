import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Navbar/>
      <section className="mt-6 bg-base-100 py-12 dark:bg-slate-900 dark:text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-white">
                <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:bg-slate-900 dark:text-white">About Us</h2>
                    <p className="text-gray-700 mb-6 dark:bg-slate-900 dark:text-white">
                        Welcome to <span className="font-semibold text-indigo-600">Book Haven</span>, your one-stop destination for all your reading needs. Established in 2000, we have been serving book lovers for over two decades with a vast collection of books across various genres and categories.
                    </p>
                    <p className="text-gray-700 mb-6 dark:bg-slate-900 dark:text-white">
                        Our mission is to foster a love for reading in the community by providing access to a wide range of books, from the latest bestsellers to timeless classics. We believe that books have the power to transform lives, and we are committed to making literature accessible to everyone.
                    </p>
                    <p className="text-gray-700 mb-6 dark:bg-slate-900 dark:text-white">
                        At <span className="font-semibold text-indigo-600">Book Haven</span>, we offer a cozy and welcoming environment where you can explore new worlds, discover new authors, and find your next favorite book. Our friendly and knowledgeable staff are always here to help you find what you're looking for, whether it's a specific title or a recommendation based on your interests.
                    </p>
                    <p className="text-gray-700 mb-6 dark:bg-slate-900 dark:text-white">
                        We also host a variety of events, including book signings, reading clubs, and literary discussions, to bring the community together and celebrate the joy of reading. Join us and be a part of our vibrant and passionate book-loving community.
                    </p>
                    <p className="text-gray-700 dark:bg-slate-900 dark:text-white">
                        Thank you for choosing <span className="font-semibold text-indigo-600">Book Haven</span>. We look forward to welcoming you to our store and helping you discover the magic of books.
                    </p>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default About
