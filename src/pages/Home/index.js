import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'

import styles from './Home.module.scss'
import AboutItem from '../../component/aboutItem'
import Banner from '../../component/Banner'
import BannerItem from '../../component/Banner/bannerItem'
import Title from '../../component/Title'
import { routes } from '../../config/routes'
import ProductItem from '../../pages/Product/productItem'
import Blog from '../../component/Blog'
import Brand from '../../component/Brand'
import data from '../../data/db.json'

const cx = classNames.bind(styles)


function Home({ cart, addCart, removeCart }) {
    const [productKindRender, setProductKindRender] = useState([])
    const [check, setCheck] = useState(0)
    const [elementActive, setElementActive] = useState()

    const refAbout = useRef(null)
    const refBrands = useRef(null)

    const Banners = data.Banners
    const abouts = data.abouts
    const blogs = data.blogs
    const brands = data.brands
    const products = data.products
    const dataVegetable = data.productKind[0].products
    const dataFruit = data.productKind[1].products
    const dataSeaFood = data.productKind[2].products
    const dataNuts = data.productKind[3].products
    const dataFreshFood = data.productKind[4].products
    const productKind = data.productKind
    const blogsRef = useRef(null)

    const getDataProductKind = useEffect(() => {
        setProductKindRender(data.productKind[0].products)
    }, [])

    const handleActive = (ele) => {
        ele.classList.add('active')

        setElementActive(pre => {
            if (pre.classList.contains('active')) {
                pre.classList.remove('active')
            }
            return ele
        })
    }

    const HandleScrollX = (element) => {
        let isMouseDown = false
        let startX;
        let scrollLeftX
        element.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.pageX - element.offsetLeft
            scrollLeftX = element.scrollLeft
        })
        element.addEventListener('mouseleave', (e) => {
            isMouseDown = false;
        })
        element.addEventListener('mouseup', () => {
            isMouseDown = false;
        })
        element.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return

            e.target.style.cursor = 'grabbing'
            let x = e.pageX - element.offsetLeft
            let walk = x - startX;
            element.scrollLeft = scrollLeftX - walk;
            // element.style.transform = `translateX(${ScrollX}px)`
        })
    }

    const DelelteHandleScrollX = (element) => {
        let isMouseDown = false
        let startX;
        let endX;
        element.removeEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.pageX
        })
        element.removeEventListener('mouseleave', (e) => {
            isMouseDown = false;
            element.style.transform = `translateX(0px)`
        })
        element.removeEventListener('mouseup', () => {
            isMouseDown = false;
            element.style.transform = `translateX(0px)`
        })
        element.removeEventListener('mousemove', (e) => {
            if (isMouseDown) {
                e.target.style.cursor = 'grabbing'
                endX = e.pageX;
                let ScrollX = (endX - startX) * 0.6;
                element.style.transform = `translateX(${ScrollX}px)`
            }
            else {
                e.target.style.cursor = 'auto'
                return;
            }
        })
    }

    const effectHandleAbout = useEffect(() => {
        const AboutElement = refAbout.current

        HandleScrollX(AboutElement)

    }, [])

    const HandleBrands = useEffect(() => {
        const brandsElement = refBrands.current
        HandleScrollX(brandsElement)
    }, [])

    const ref1 = useRef(null)
    useEffect(() => {
        const ele = ref1.current
        setElementActive(ele)
    }, [])

    const handleProductKind = (ele) => {
        switch (ele.id) {
            case '1':
                setProductKindRender([...dataVegetable])
                handleActive(ele)
                break;
            case '2':
                setProductKindRender([...dataFruit])
                handleActive(ele)
                break;
            case '3':
                setProductKindRender([...dataSeaFood])
                handleActive(ele)
                break;
            case '4':
                setProductKindRender([...dataNuts])
                handleActive(ele)
                break;
            case '5':
                setProductKindRender([...dataFreshFood])
                handleActive(ele)
                break;
        }
    }
    useEffect(() => {
        let blogs = blogsRef.current
        HandleScrollX(blogs)

    }, [])



    return (
        <>
            {/* Banner */}
            <div className={cx('banner')}>
                <Banner />
                <div className={cx('sub-banner')}>
                    {
                        Banners.map((item) => {
                            return (
                                <BannerItem
                                    key={item.id}
                                    title={item.title}
                                    content={item.content}
                                    img_src={item.img_src}
                                    bg_color={item.bg_color}
                                />
                            )
                        })
                    }
                </div>
            </div>

            {/* about */}
            <div className={cx('about')}>
                <div className='grid wide'>
                    <div className={cx('about-section')}>
                        <>
                            <Title>
                                Về chúng tôi
                            </Title>
                        </>
                        <div className={cx('about-slogan')}>
                            Hiện tại vùng nguyên liệu của chúng tôi có thể cung cấp các thực tập tươi sạch với số lượng lớn vì đang vào vụ mùa thu hoạch nên chúng tôi có thể cung ứng cho tất cả các đối tác xuất khẩu nông sản trên cả nước.
                        </div>

                        <div className={cx('about-service')}

                        >
                            <div className='row no-gutters' ref={refAbout} style={{ overflow: 'hidden', height: 'auto', whiteSpace: 'nowrap' }}>
                                {
                                    abouts.map((item) => {
                                        return (
                                            <div className='col c-12 m-4 l-3' key={item.id}>
                                                <AboutItem
                                                    content={item.content}
                                                    name={item.name}
                                                    img_src={item.img_src}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* list-product-of-kind */}
            <div className={cx('list-product')}>
                <div className='grid wide'>
                    <Title
                        isHover={true}
                        to={routes.product}
                    >
                        Danh mục sản phẩm
                    </Title>
                    <div className={cx('product-kind')}>
                        <div className='grid wide'>
                            <ul className={cx('list-options')}>
                                <li id='1'
                                    onClick={(e) => {
                                        handleProductKind(e.target)
                                    }}
                                    className='active'
                                    ref={ref1}
                                >
                                    Rau củ
                                </li>
                                <li id='2' onClick={(e) => { handleProductKind(e.target) }}>
                                    Hoa quả
                                </li>
                                <li id='3' onClick={(e) => { handleProductKind(e.target) }}>
                                    Hải sản
                                </li>
                                <li id='4' onClick={(e) => { handleProductKind(e.target) }}>
                                    Các loại hạt
                                </li>
                                <li id='5' onClick={(e) => { handleProductKind(e.target) }}>
                                    Thực phẩm tươi sống
                                </li>
                            </ul>
                            <div className='row row-product'>
                                {
                                    productKindRender.map((product, index) => {
                                        if (index < 8) {
                                            return (
                                                <div key={index} className='col c-6 m-4 l-3'>
                                                    <ProductItem
                                                        cart={cart}
                                                        addCart={addCart}
                                                        product={product}
                                                    />
                                                </div>
                                            )
                                        }
                                        else {
                                            return;
                                        }
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hotline */}
            <div className={cx('hot-line')}>
                <div className={cx('hot-line__title')}>
                    Hotline
                </div>
                <a href="tel:+1900 6750">
                    1900 6750
                </a>
                <div className={cx('hot-line__slogan')}>
                    Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm bảo chất lượng ngon nhất.
                </div>
            </div>

            {/* product-hot */}
            <div className={cx('products-hot')}>
                <Title
                    isHover={true}
                    to={routes.product}
                >
                    Sản phẩm bán chạy
                </Title>
                <div className='grid wide'>
                    <div className='row no-gutter row-product'>
                        {
                            products.map((product, index) => {
                                if (index < 4) {
                                    return (
                                        <div key={index} className='col c-6 m-4 l-3'>
                                            <ProductItem
                                                cart={cart}
                                                addCart={addCart}
                                                product={product}
                                            />
                                        </div>
                                    )
                                }
                                else {
                                    return;
                                }
                            })
                        }
                    </div>
                </div>
            </div>

            {/* blogs */}
            <div className={cx('blogs')}>
                <div className='grid wide'>
                    <div className={cx('blogs-section')}>
                        <Title
                            isHover={true}
                            to={routes.news}
                        >
                            Tin tức mới nhất
                        </Title>
                        <div className={cx('list-blog')} >
                            <div className='row' ref={blogsRef} style={{ overflow: 'hidden', height: 'auto', whiteSpace: 'nowrap' }}>
                                {
                                    blogs.map((blog, index) => {
                                        if (index < 3) {
                                            return (
                                                <div className='col c-12 m-6 l-4' key={index}>
                                                    <Blog
                                                        blog={blog}
                                                    />
                                                </div>
                                            )
                                        }
                                        else {
                                            return;
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* top-brands */}
            <div className={cx('top-bands')}>
                <Title>
                    Top thương hiệu
                </Title>
                <div className='grid wide'>
                    <div className={cx('list-brands')}>
                        <div className={cx('top-brands__section')} ref={refBrands}>
                            <div className='row'>
                                {
                                    brands.map((brand) => {
                                        return (
                                            <div className='col c-6 m-3 l-2' key={brand.id}>
                                                <Brand
                                                    img_src={brand.img_src}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home