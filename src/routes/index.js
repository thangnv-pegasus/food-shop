import Home from '../pages/Home'
import Intro from '../pages/Intro'
import News from '../pages/News'
import Contact from '../pages/Contact'
import Product from '../pages/Product'
import { routes } from '../config/routes'
import Cart from '../pages/Cart'
import VegetablePage from '../pages/ProductKindPage/VegetablePage'
import FruitPage from '../pages/ProductKindPage/FruitPage'
import SeaFood from '../pages/ProductKindPage/SeaFood'
import NutsPage from '../pages/ProductKindPage/NutsPage'
import FreshFoodPage from '../pages/ProductKindPage/FreshFoodPage'
import Order from '../pages/Order'
import CompleteOrder from '../pages/CompleteOrder'
import DetailBlog from '../pages/DetailBlog'
import DetailProduct from '../pages/DetailProduct'
import SearchResult from '../pages/SearchResult'
import Member from '../pages/Member'
import { SignIn } from '../pages/SignIn/SignIn'
import { SignUp } from '../pages/SignIn/SignUp'
import { MemberOrder } from '../pages/Member/MemberOrder'
import { MemberUpdate } from '../pages/Member/MemberUpdate'
import { MemberAdd } from '../pages/Member/MemberAdd'
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
        component: DetailBlog
    },
    {
        path: routes.detailProduct,
        component: DetailProduct
    },
    {
        path: routes.searchResult,
        component: SearchResult
    },
    {
        path: routes.member,
        component: Member
    },
    {
        path: routes.signup,
        component: SignUp
    },
    {
        path: routes.login,
        component: SignIn
    },
    {
        path: routes.memberOrder,
        component: MemberOrder
    },
    {
        path: routes.memberChangePassword,
        component: MemberUpdate
    },
    {
        path: routes.memberAddress,
        component: MemberAdd
    }
]

const privateRoutes = [

]

export { publicRoutes,privateRoutes } 