import Home from '~/pages/Home'
import Intro from '~/pages/Intro'
import News from '~/pages/News'
import Contact from '~/pages/Contact'
import Product from '~/pages/Product'
import { routes } from '~/config/routes'
import Cart from '~/pages/Cart'
import VegetablePage from '~/pages/ProductKindPage/VegetablePage'
import FruitPage from '~/pages/ProductKindPage/FruitPage'
import SeaFood from '~/pages/ProductKindPage/SeaFood'
import NutsPage from '~/pages/ProductKindPage/NutsPage'
import FreshFoodPage from '~/pages/ProductKindPage/FreshFoodPage'
import Order from '~/pages/Order'
import CompleteOrder from '~/pages/CompleteOrder'
import BlogPage from '~/pages/Blog'
const publicRoutes = [
    {
        path: routes.home,
        component: Home
    },
    {
        path: routes.contact,
        component: Contact
    },
    {
        path: routes.intro,
        component: Intro
    },
    {
        path: routes.news,
        component: News
    },
    {
        path: routes.product,
        component: Product
    },
    {
        path: routes.cart,
        component: Cart
    },
    {
        path: routes.vegetable,
        component: VegetablePage
    },
    {
        path: routes.fruit,
        component: FruitPage
    },
    {
        path: routes.seaFood,
        component: SeaFood
    },
    {
        path: routes.nuts,
        component: NutsPage
    },
    {
        path: routes.freshFood,
        component: FreshFoodPage
    },
    {
        path: routes.order,
        component: Order,
        layout: null
    },
    {
        path: routes.completeOrder,
        component: CompleteOrder,
        layout: null
    },
    {
        path: routes.blog,
        component: BlogPage
    }
]

const privateRoutes = [

]

export { publicRoutes } 