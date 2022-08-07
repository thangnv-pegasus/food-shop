import DefaultLayout from "~/component/DefaultLayout";
import { publicRoutes } from "~/routes";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createContext, useEffect, useState } from "react";
import BuyModal from "~/component/BuyModal";


function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [openBuyModal, setOpenBuyModal] = useState(false)
  const [productActive, setProductActive] = useState()

  // getData all products
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(res => {
        setProducts(res)
      })
  }, [])

  // add product in cart
  const addCart = (product) => {
    const checkProduct = cart.find(item => item.id === product.id)
    if (checkProduct) {
      setCart(
        cart.map(item => {
          return item.id === product.id ?
            { ...checkProduct, quantity: checkProduct.quantity + 1 } : item
        })
      )
    } else {
      setCart(pre => [...pre, { ...product, quantity: 1 }])
    }
  }

  // remove product in cart
  const removeCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  }




  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          {
            publicRoutes.map((routeI, index) => {
              let Ele = routeI.component
              let Layout = DefaultLayout
              if (routeI.layout) {
                Layout = routeI.layout
              }
              return (
                <Route
                  path={routeI.path}
                  key={index}
                  element={
                    <Layout cart={cart} removeCart={removeCart}>
                      <Ele addCart={addCart}
                        setOpenBuyModal={setOpenBuyModal}
                        setProductActive={setProductActive}
                      />
                    </Layout>
                  }
                />
              )
            })
          }
        </Routes>
      </BrowserRouter>
      {
        openBuyModal
        &&
        <BuyModal
          cart={cart}
          product={productActive}
          setOpenBuyModal={setOpenBuyModal}
        />
      }
    </div>
  );
}

export default App;
