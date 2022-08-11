import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createContext,  useEffect,  useState } from "react";
import className from 'classnames/bind'
import styles from './App.module.scss'

import DefaultLayout from "./component/DefaultLayout";
import { publicRoutes } from "./routes"
import BuyModal from "./component/BuyModal";
import InforModal from "./component/InforModal";
import data from './data/db.json'

const cx = className.bind(styles)

export const account = createContext()

function App() {
  const [cart, setCart] = useState([])
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

  const [indexScroll, setIndexScroll] = useState(0)
  const [searchResult, setSearchResult] = useState([])
  const [login, setLogin] = useState(true)
  const [newAccount, setNewAccount] = useState({})

  
  // getData all products
  const products = data.products

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

  const GoToTop = () => {
    return (
      <div className={cx('go-to-top')}
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPxJREFUSEvt1G0RwjAMBuA3CkACDkDCkIADJCABCUjAARKYBHCABFAQLncZV0Y/kt6O/el+bXdpn/ZdWsJMD83kosF/S746amZeyiqJ6Fmz2ipY0auC2xrcDQfoRuEbADfugiPokLIbN8MZtAo3wRH0BWChYvhu3nkRjqB3AEcAF4V3+r32/PMsnEA7ANJYn64GIDvtAZjxJJxC5egws+Dhceq13oyX4GEiibcbzmsMlphH+NeY8SVjifoE4BBeEik4wH/GuODUVZiDrddnsatjEzWYiKQJXU+L2hQXM68A7LX4TEQP08CgqCpqLxKrb/AUKZrmaFGbYpqi6A3yIIof2ITnzwAAAABJRU5ErkJggg==" />
        {/* <FontAwesomeIcon icon={faCircleUp} /> */}
      </div>
    )
  }

  window.addEventListener('scroll', (e) => {
    setIndexScroll(e.currentTarget.scrollY)
  })


  return (
    <account.Provider
      value={(
        {
          email: 'test@gmail.com',
          password: '123456',
          phone: '0123456',
          add: 'Ha Noi'
        }
      )}
    >
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
                      <Layout cart={cart}
                        removeCart={removeCart}
                        setSearchResult={setSearchResult}
                        login={login}
                      >
                        <Ele addCart={addCart}
                          removeCart={removeCart}
                          setOpenBuyModal={setOpenBuyModal}
                          setProductActive={setProductActive}
                          setOpenInforModal={setOpenInforModal}
                          cart={cart}
                          setCart={setCart}
                          setUserinfor={setUserinfor}
                          userinfor={userinfor}
                          searchResult={searchResult}
                          setLogin={setLogin}
                          setNewAccount = {setNewAccount}
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
          {indexScroll > 120 && <GoToTop />}
        </BrowserRouter>
      </div>
    </account.Provider>
  );
}

export default App;
