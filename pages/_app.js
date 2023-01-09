import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  if (typeof window !== "undefined") {
    const localStorage = localStorage;
  }

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (err) {
      console.log("Ek error dikhau ye dekh .")
    }
    router.events.on("routeChangeStart", () => setProgress(40))
    router.events.on("routeChangeComplete", () => setProgress(100))
  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    let subt = 0;

    if (myCart !== {}) {
      for (const key in cart) {
        subt += (myCart[key].qty * myCart[key].price)
      }
      setSubTotal(subt)
    }

    else {
      setSubTotal(0)
    }
  }


  const clearCart = () => {
    setCart({})
    saveCart(cart)
  }


  const addToCart = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = cart;

    if (itemCode in cart) {
      newCart[itemCode].qty += qty;
    }

    else {
      newCart[itemCode] = { qty: 1, price, name, size: size, variant, img }
    }

    setCart(newCart);
    saveCart(newCart);
  }

  // const removeFromCart = (itemCode, qty) => {
  //   let newCart = cart;
  //   if (itemCode in cart) {
  //     newCart[itemCode].qty -= qty;
  //   }
  //   if (newCart[itemCode].qty <= 0) {
  //     delete newCart[itemCode];
  //   }
  //   setCart(newCart);
  //   saveCart(newCart);
  // }

  return <>
    <LoadingBar
      className="bg-pink-600"
      color={"rgb(190 24 93)"}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      waitingTime={200}
      height={3}
    />
    <Navbar addToCart={addToCart} saveCart={saveCart} clearCart={clearCart} cart={cart} subTotal={subTotal} />
    <Component addToCart={addToCart} saveCart={saveCart} clearCart={clearCart} cart={cart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp