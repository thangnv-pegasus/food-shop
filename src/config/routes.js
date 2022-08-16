const routes = {
    home: '/',
    intro: '/intropage',
    contact: '/contact',
    news: '/news',
    product: '/product',
    cart: '/cart',
    blog: '/blog/:blogId',
    vegetable: '/vegetable',
    fruit: '/fruit',
    seaFood: '/seafood',
    nuts: '/nuts',
    freshFood: '/freshfood',
    order: '/order',
    completeOrder: '/completeOrder',
    detailProduct: '/product/:productId',
    searchResult: '/search/:searchValue',
    memberOrder: '/member/:memberId/order',
    memberChangePassword: '/member/:memberId/changePassword',
    memberAddress: '/member/:memberId/memberAddress',
    member: '/member/:memberId',
    login: '/login',
    signup: '/signup'
}

export { routes }