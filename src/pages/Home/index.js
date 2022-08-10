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


function Home({ addCart, removeCart, setOpenBuyModal, setProductActive, setOpenInforModal }) {

    const [Banners, setBanners] = useState([])
    const [abouts, setAbouts] = useState([])
    const [products, setProducts] = useState([])
    const [blogs, setBlogs] = useState([])
    const [brands, setBrands] = useState([])
    const [productKind, setProductKind] = useState([])
    const [productKindRender, setProductKindRender] = useState([])
    const [dataVegetable, setDataVegetable] = useState([])
    const [dataFruit, setDataFruit] = useState([])
    const [dataSeaFood, setDataSeaFood] = useState([])
    const [dataNuts, setDataNuts] = useState([])
    const [dataFreshFood, setDataFreshFood] = useState([])
    const [check, setCheck] = useState(0)
    const [elementActive, setElementActive] = useState()

    const refAbout = useRef(null)
    const refBrands = useRef(null)


    const getDatabanner = useEffect(() => {
        setBanners(data.Banners)
    }, []);

    const getDataAbout = useEffect(() => {
        setAbouts(data.abouts)
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
        let endX;
        element.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.pageX
        })
        element.addEventListener('mouseleave', (e) => {
            isMouseDown = false;
            element.style.transform = `translateX(0px)`
        })
        element.addEventListener('mouseup', () => {
            isMouseDown = false;
            element.style.transform = `translateX(0px)`
        })
        element.addEventListener('mousemove', (e) => {
            if (isMouseDown) {
                e.target.style.cursor = 'grabbing'
                endX = e.pageX;
                let ScrollX = (endX - startX) * 0.4;

                element.style.transform = `translateX(${ScrollX}px)`
            }
            else {
                e.target.style.cursor = 'auto'
                element.style.transform = `translateX(0px)`
            }
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
                let ScrollX = (endX - startX) * 0.4;

                element.style.transform = `translateX(${ScrollX}px)`
            }
            else {
                e.target.style.cursor = 'auto'
                element.style.transform = `translateX(0px)`
            }
        })
    }

    const effectHandleAbout = useEffect(() => {
        const AboutElement = refAbout.current

        HandleScrollX(AboutElement)
        return () => {
            DelelteHandleScrollX(AboutElement)
        }
    }, [])

    const HandleBrands = useEffect(() => {
        const brandsElement = refBrands.current
        HandleScrollX(brandsElement)
        return () => {
            DelelteHandleScrollX(brandsElement)
        }
    }, [])

    const getDataProduct = useEffect(() => {
        setProducts(data.products)

    }, [])

    const getDataProductKind = useEffect(() => {
        setProductKind(data.productKind)
        setDataVegetable(data.productKind[0].products)
        setDataFruit(data.productKind[1].products)
        setDataSeaFood(data.productKind[2].products)
        setDataNuts(data.productKind[3].products)
        setDataFreshFood(data.productKind[4].products)
        setProductKindRender(data.productKind[0].products)
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

    const getDataBlogs = useEffect(() => {
        setBlogs(data.blogs)
    }, [])

    const getDataBrands = useEffect(() => {
        setBrands(data.brands)
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
                            ref={refAbout}
                        >
                            <div className='row no-gutters'>
                                {
                                    abouts.map((item) => {
                                        return (
                                            <div className='c-3' key={item.id}>
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
                            <div className='row'>
                                {
                                    productKindRender.map((product, index) => {
                                        if (index < 8) {
                                            return (
                                                <div key={index} className='col c-3'>
                                                    <ProductItem
                                                        addCart={addCart}
                                                        product={product}
                                                        setOpenBuyModal={setOpenBuyModal}
                                                        setProductActive={setProductActive}
                                                        setOpenInforModal={setOpenInforModal}
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
                    <div className='row no-gutter'>
                        {
                            products.map((product, index) => {
                                if (index < 4) {
                                    return (
                                        <div key={index} className='col c-3'>
                                            <ProductItem
                                                addCart={addCart}
                                                product={product}
                                                setOpenBuyModal={setOpenBuyModal}
                                                setProductActive={setProductActive}
                                                setOpenInforModal={setOpenInforModal}
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
                <Title
                    isHover={true}
                    to={routes.news}
                >
                    Tin tức mới nhất
                </Title>
                <div className={cx('blogs-section')}>
                    <div className='grid wide'>
                        <div className='row'>
                            {
                                blogs.map((blog, index) => {
                                    if (index < 3) {
                                        return (
                                            <div className='col c-4' key={index}>
                                                <Blog
                                                    blog = {blog}
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
                                            <div className='col c-2' key={brand.id}>
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