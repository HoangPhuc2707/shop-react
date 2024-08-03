import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cat1Img from "assets/users/images/categories/cat-1.jpg";
import cat2Img from "assets/users/images/categories/cat-2.jpg";
import cat3Img from "assets/users/images/categories/cat-3.jpg";
import cat4Img from "assets/users/images/categories/cat-4.jpg";
import cat5Img from "assets/users/images/categories/cat-5.webp";
import feature1Img from "assets/users/images/featured/featured-1.jpg";
import feature2Img from "assets/users/images/featured/featured-2.jpg";
import feature3Img from "assets/users/images/featured/featured-3.jpg";
import feature4Img from "assets/users/images/featured/featured-4.jpg";
import feature5Img from "assets/users/images/featured/featured-5.jpg";
import feature6Img from "assets/users/images/featured/featured-6.jpg";
import feature7Img from "assets/users/images/featured/featured-7.jpg";
import feature8Img from "assets/users/images/featured/featured-8.jpg";
import feature9Img from "assets/users/images/featured/featured-9.jpg";
import feature10Img from "assets/users/images/featured/featured-10.jpg";
import banner1Img  from "assets/users/images/banner/banner-1.png";
import banner2Img  from "assets/users/images/banner/banner-2.png";
import "./style.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {ProductCard } from "component";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const sliderItems = [
        {
            bgImg: cat1Img,
            name: "Cam tươi",
        },
        {
            bgImg: cat2Img,
            name: "Hoa quả khô",
        },
        {
            bgImg: cat3Img,
            name: "Rau củ tươi",
        },
        {
            bgImg: cat4Img,
            name: "Sữa hộp",
        },
        {
            bgImg: cat5Img,
            name: "Thịt bò",
        },
    ];

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                    <ProductCard name={item.name} img={item.img} price={item.price} />
                </div>
                );
            });
            tabPanels.push(tabPanel);
        });



        return (
            <Tabs>
                <TabList>{tabList}</TabList>

                {tabPanels.map((item, key) => (
                    <TabPanel key={key}>
                        <div className="row">
                            {item}
                        </div>
                    </TabPanel>
                ))}


            </Tabs>
        );
    };

    const featProducts = {
        all: {
            title: "Toàn bộ",
            products: [
                {
                    img: feature1Img,
                    name: "Mít sấy",
                    price: 31000,
                },
                {
                    img: feature7Img,
                    name: "Dưa lưới",
                    price: 40000,
                },
                {
                    img: feature2Img,
                    name: "Khoai lang sấy",
                    price: 25000,
                },
                {
                    img: feature8Img,
                    name: "Dưa hấu",
                    price: 13000,
                },
                {
                    img: feature4Img,
                    name: "Chuối",
                    price: 22000,
                },
                {
                    img: feature5Img,
                    name: "Táo Koru",
                    price: 73000,
                },
                {
                    img: feature6Img,
                    name: "Trứng gà",
                    price: 23000,
                },
                {
                    img: feature9Img,
                    name: "Xoài sấy muối ớt",
                    price: 41000,
                },
                {
                    img: feature10Img,
                    name: "Chuối sấy dẻo",
                    price: 24000,
                },
                {
                    img: feature3Img,
                    name: "Thịt bò",
                    price: 199000,
                },
            ],
        },
        freshMeat: {
            title: "Trái cây sấy",
            products: [
                {
                    img: feature2Img,
                    name: "Khoai lang sấy",
                    price: 25000,
                },
                {
                    img: feature1Img,
                    name: "Mít sấy",
                    price: 31000,
                },
                {
                    img: feature9Img,
                    name: "Mít sấy",
                    price: 31000,
                },
                {
                    img: feature10Img,
                    name: "Mít sấy",
                    price: 31000,
                },
            ],
        },
        fruits: {
            title: "Trái cây",
            products: [
                {
                    img: feature4Img,
                    name: "Chuối",
                    price: 22000,
                },
                {
                    img: feature5Img,
                    name: "Táo Koru",
                    price: 73000,
                },
                {
                    img: feature7Img,
                    name: "Dưa lưới",
                    price: 40000,
                },
                {
                    img: feature8Img,
                    name: "Dưa hấu",
                    price: 13000,
                },
            ],
        },
        egg: {
            title: "Trứng",
            products: [
                {
                    img: feature6Img,
                    name: "Trứng gà",
                    price: 23000,
                },
            ],
        },
        meat: {
            title: "Thịt",
            products: [
                {
                    img: feature3Img,
                    name: "Thịt bò",
                    price: 199000,
                },
            ],
        },
    };

    return (
        <>
            {/* {Categories Begin } */}
            <div className="container container__categories_slider">
                <Carousel responsive={responsive} className="categories_slider">
                    {sliderItems.map((item, key) => (
                        <div className="categories_slider_item"
                            style={{ backgroundImage: `url(${item.bgImg})` }}
                            key={key}
                        >
                            <p>{item.name}</p>
                        </div>
                    ))}

                </Carousel>
            </div>
            {/* {Categories End } */}
            {/* {Featured Begin } */}
            <div className="container">
                <div className="featured">
                    <div className="section-title">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderFeaturedProducts(featProducts)}
                </div>
            </div>
            {/* {Featured End } */}
            {/* {Banner Begin } */}
            <div className="container">
                <div className="banner">
                    <div className="banner__pic">
                        <img src={banner1Img} alt="banner" />
                    </div>
                    <div className="banner__pic">
                        <img src={banner2Img} alt="banner" />
                    </div>
                </div>
            </div>
            {/* {Banner End } */}
        </>
    );
};

export default memo(HomePage);