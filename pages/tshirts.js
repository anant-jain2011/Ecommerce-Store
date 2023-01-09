import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import mongoose from 'mongoose'
import Product from '../models/Product'

export default function tshirts({ products }) {

  const tshirt = [];

  for (let item = 0; item <= 3; item++) {
    tshirt.push(
      <Link href={`/products/${products[item].slug}`} key={products[item]._id}>
        <div className="lg:w-1/4 md:w-1/3 p-4 w-full h-full m-2 shadow-3xl">
          <a className="flex relative h-96 rounded overflow-hidden w-full">
            <img alt="ecommerce" className="object-cover object-top w-auto h-full block bg-pink-500" src={products[item].img}></img>
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">{products[item].category}</h3>
            <h2 className="text-gray-900 title-font text-xl font-medium">{products[item].title}</h2>
            <p className="mt-1">₹{products[item].price}</p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <>
      <Head>
        <title>Tshirts</title>
        <meta name="description" content="Generated by create next app" />
        <a rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-5 mx-auto">

            <div className="flex flex-wrap justify-center m-4">
              {tshirt}
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find()

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  }
}
