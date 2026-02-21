import { useState } from "react";
import logo from "../../assets/white-logo.webp";
import "./Footer.css";


function Footertemp() {
    return (
        <>

            <div className="footer">

                {/* ===== Demo Bar ===== */}
                <div className="demo-bar">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="PIN/ZIP" />
                    <input type="text" placeholder="Phone No." />
                    <button>REQUEST DEMO</button>
                </div>

                {/* ===== Footer Content ===== */}
                <div className="footer-container">

                    {/* Brand */}
                    <div className="footer-col brand">
                        <img src={logo} alt="BusinessBook Plus" />
                        <p>
                            Run your business with <br />
                            <span>Clarity. Control. Confidence.</span>
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="footer-col">
                        <h4>USEFUL LINKS</h4>
                        <ul>
                            <li>Industry</li>
                            <li>Pricing</li>
                            <li>Contact Us</li>
                            <li>Help Center</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    {/* Features */}
                    <div className="footer-col">
                        <h4>PRODUCT FEATURES</h4>
                        <ul>
                            <li>e-Invoicing</li>
                            <li>GST Compliance</li>
                            <li className="highlight">Financial Reports</li>
                            <li>Point of Sales (POS)</li>
                            <li>Barcode Management</li>
                        </ul>
                    </div>

                    {/* Social + Contact */}
                    <div className="footer-col">
                        <h4>FOLLOW US</h4>

                        <div className="social-text">
                            <span>LinkedIn</span>
                            <span>Facebook</span>
                            <span>YouTube</span>
                            <span>Instagram</span>
                        </div>

                        <div className="contact-info">
                            <p>Phone: +91-990-542-2245</p>
                            <p>Email: info@businessbookplus.com</p>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <div>Refund & Cancellation</div>
                    <div className="legal">
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Footertemp;