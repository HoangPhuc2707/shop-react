import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import feature1Img from "assets/users/images/featured/featured-1.jpg";
import feature9Img from "assets/users/images/featured/featured-9.jpg";
import feature10Img from "assets/users/images/featured/featured-10.jpg";
import { AiOutlineEye, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { formatter } from "ultils/fomater";

const ProductDetailPage = () => {
const imgs = [feature1Img, feature9Img, feature10Img];

    return (
        <>
            <Breadcrumb name="Chi tiết sản phẩm" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 product__detail__pic">
                        <img src={feature1Img} alt="product-pic" />
                        <div className="main">
                            {imgs.map((item, key) => (
                                <img src={item} alt="product-pic" key={key} />
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 product__detail__text">
                        <h2>Hoa quả khô</h2>
                        <div className="seen-icon">
                            <AiOutlineEye />
                            {` 10 (lượt đã xem) `}
                        </div>
                        <h3>{formatter(200000)}</h3>
                        <p>Trái cây sấy Nhabexims chất lượng, dinh dưỡng mang đến những cảm
                             giác thích thú khi ăn. Mít sấy Nhabexims gói 100g được làm từ 
                             những múi mít thơm ngon, ngọt an toàn, chất lượng. Trái cây sấy 
                             nhâm nhi cùng gia đình và bạn bè rất tuyệt vời nhé.
                        </p>
                        <ul>
                            <li>
                                <b>Tình trạng:</b> <span>Còn hàng</span>
                            </li>
                            <li>
                                <b>Số lượng:</b> <span>20</span>
                            </li>
                            <li>
                                <b>Chia sẻ:</b>{" "} 
                                <span>
                                    <AiOutlineFacebook />
                                    <AiOutlineLinkedin />
                                    <AiOutlineInstagram />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(ProductDetailPage);