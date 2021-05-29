import React from 'react';
import {Link} from 'react-router-dom';
import { FaFire, FaAtlassian } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { IconContext } from "react-icons";
import "./Pricing.css";

const Pricing = ({
    plan,
    asdas,
    asdsa
})=> {
    return (
        <>
            {/* this IconContext value (color, className..etc..) only effect the actual icons
            avarude official websiteil und ethokke karyangalaanu Value'k akath avar pass cheyyunnath ennu
            athokke namukk use cheyyam.. athokke avarude iconsine mathrame effect cheyyukayullu */}
            <IconContext.Provider value={{ color: "white", className: "myAllIcon", size: "2em" }}>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">

                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                     <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>per Month</p>
                                <ul className="pricing__container-features">
                                    <li>100 transactions</li>
                                    <li>2% Cash back</li>
                                    <li>$10,000 limit</li>
                                </ul>
                                <button>Choose Now</button>
                            </div>
                        </Link>

                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                     <BsXDiamondFill />
                                </div>
                                <h3>Gold</h3>
                                <h4>$3.25</h4>
                                <p>per Month</p>
                                <ul className="pricing__container-features">
                                    <li>1000 transactions</li>
                                    <li>2.5% Cash back</li>
                                    <li>$100,000 limit</li>
                                </ul>
                                <button>Choose Now</button>
                            </div>
                        </Link>

                        <Link to="/sign-up" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                     <FaAtlassian />
                                </div>
                                <h3>Diamond</h3>
                                <h4>$999</h4>
                                <p>per Month</p>
                                <ul className="pricing__container-features">
                                    <li>Unlimited transactions</li>
                                    <li>5% Cash back</li>
                                    <li>Unlimited Pending</li>
                                </ul>
                                <button>Choose Now</button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
           </IconContext.Provider>
        </>
    )
}

export default Pricing;