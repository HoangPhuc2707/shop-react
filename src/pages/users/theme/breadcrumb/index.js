import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "ultils/router";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb__text">
                <h2>SiViShop</h2>
                <div className="breadcrumb__option">
                    <ul>
                        <li className="link">
                            <Link to={ROUTERS.USER.HOME}>Trang chủ</Link>
                        </li>
                        <li>{props.name}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default memo(Breadcrumb);