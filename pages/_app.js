import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [Size, setSize] = useState("SM")

  // useEffect(() => {

  //   try {
  //     if (localStorage.getItem("cart")) {
  //       setCart(JSON.parse(localStorage.getItem("cart")))
  //     }
  //   } catch (err) {
  //     console.log("Ek error dikhau ye dekh .")
  //   }
  // }, [])

  const saveCart = (myCart) => {
    // localStorage.setItem("cart", myCart);
    let subt = 0;

    for (const key in Object.keys(cart)) {
      subt += (Object.keys(myCart)[key].qty * Object.keys(myCart)[key].price)
    }
    setSubTotal(subt)
  }
  
  
  const clearCart = () => {
    setCart({})
    saveCart({})
  }
  
  
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    
    if (itemCode in cart) {
      newCart[itemCode].qty += qty;
    }
    
    else {
      newCart[itemCode] = { qty: 1, price, name, size:Size, variant }
    }
    
    console.log(newCart)
    setCart(newCart);
    saveCart(newCart);
  }

  const removeFromCart = (itemCode, qty, price, name, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty -= qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  }

  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} Size={Size} setSize={setSize} />

    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} Size={Size} setSize={setSize} {...pageProps} />

  </>
}

export default MyApp