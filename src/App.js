import DefaultLayout from "./component/DefaultLayout";
import { publicRoutes } from "./routes"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createContext, useEffect, useState } from "react";
import BuyModal from "./component/BuyModal";
import InforModal from "./component/InforModal";
import data from './data/db.json'

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [openBuyModal, setOpenBuyModal] = useState(false)
  const [productActive, setProductActive] = useState()
  const [openInforModal, setOpenInforModal] = useState(false)
  const [userinfor, setUserinfor] = useState({
    username: '',
    email: '',
    add: '',
    phone: '',
    note: ''
  })


  // getData all products
  useEffect(() => {
    setProducts(data.products)
  }, [])

  // add product in cart
  const addCart = (product, state = 1) => {
    const checkProduct = cart.find(item => item.id === product.id)
    if (checkProduct) {
      setCart(
        cart.map(item => {
          return item.id === product.id ?
            { ...checkProduct, quantity: checkProduct.quantity + state } : item
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
              else if (routeI.layout === null) {
                Layout = 'div'
              }
              return (
                <Route
                  path={routeI.path}
                  key={index}
                  element={
                    <Layout cart={cart} removeCart={removeCart}>
                      <Ele addCart={addCart}
                        removeCart={removeCart}
                        setOpenBuyModal={setOpenBuyModal}
                        setProductActive={setProductActive}
                        setOpenInforModal={setOpenInforModal}
                        cart={cart}
                        setCart={setCart}
                        setUserinfor={setUserinfor}
                        userinfor={userinfor}
                      />
                    </Layout>
                  }
                />
              )
            })

          }

        </Routes>
        {
          openBuyModal
          &&
          <BuyModal
            cart={cart}
            product={productActive}
            setOpenBuyModal={setOpenBuyModal}
            setCart={setCart}
          />
        }
        {
          openInforModal
          &&
          <InforModal
            product={productActive}
            setOpenInforModal={setOpenInforModal}
            setOpenBuyModal={setOpenBuyModal}
            addCart={addCart}
          />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
