import { useState, useEffect } from "react";
import HeroSkeleton from "../components/common/HeroSkeleton";


import "./Home.css";
import save from "../assets/save-time-icon.svg";
import grow from "../assets/stay-icon.svg";
import stay from "../assets/grow-faster-icon.svg";

// Features Logo
import intuitive from "../assets/intuitive-dashboard.webp";
import simplified from "../assets/simplified-transaction.webp";
import automated from "../assets/automated-invoicing-4.webp";
import bank from "../assets/bank-reconcillation.webp";
import transactions from "../assets/transactions.webp";
import time from "../assets/real-time.webp";


function Home() {


    const [activeIndex, setActiveIndex] = useState(0);

    const businessTypes = [
        {
            title: "Start-Up",
            content:
                "Launch your business quickly with affordable, easy-to-use accounting solutions backed by fast onboarding and a simple learning curve."
        },
        {
            title: "Manufacturers and Distributors",
            content:
                "Manage inventory, production, and supply chain efficiently with smart automation tools."
        },
        {
            title: "Wholesalers and Retailers",
            content:
                "Simplify billing, manage stock, and improve customer experience with seamless accounting integration."
        },
        {
            title: "Service Providers",
            content:
                "Deliver services seamlessly while keeping finances under control with smart tools for projects, billing, and cash flow.",
            points: [
                "Create and manage service invoices with ease",
                "Track project expenses and client payments",
                "Automate recurring billing and reminders"
            ]
        },
        {
            title: "E-Commerce",
            content:
                "Simplify online selling with tools that connect your orders, inventory, and compliance into one system."
        }
    ];

    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);




    if (loading) {
        return <HeroSkeleton />;
    }


    return (
        <>

            {/* ================= HERO SECTION ================= */}
            <section className="section-one">

                <div className="left">
                    <div className="badge">
                        Complete Business Solution
                    </div>

                    <h1>
                        Powerful <span>Accounting</span> <br />
                        Better <span>Inventory</span>
                    </h1>

                    <h3>
                        Run your business with Clarity. Control. Confidence.
                    </h3>

                    <p>
                        BusinessBook Plus is an integrated accounting and inventory software
                        platform that enables businesses to manage finances, stock,
                        billing, and tax compliance efficiently through a unified,
                        cloud-based system.
                    </p>

                    <div className="buttons">
                        <button className="primary-btn">Get Started Free</button>
                        <button className="secondary-btn">Request a Demo</button>
                    </div>
                </div>

                <div className="dashboard-wrapper">
                    <div className="dashboard-header">
                        BusinessBook Plus
                    </div>

                    <div className="dashboard-tabs">
                        <span className="active-tab">Overview</span>
                        <span>Accounting</span>
                        <span>Inventory</span>
                        <span>Reports</span>
                    </div>

                    <div className="dashboard-stats">
                        <div className="stat-card">
                            <h2>$ 24,580</h2>
                            <p>Total Revenue</p>
                        </div>

                        <div className="stat-card">
                            <h2>$ 8,420</h2>
                            <p>Expenses</p>
                        </div>

                        <div className="stat-card">
                            <h2>$ 16,160</h2>
                            <p>Net Profit</p>
                        </div>
                    </div>

                    <div className="revenue-section">
                        <div className="revenue-header">
                            <h3>Revenue Trend</h3>
                            <span className="month-btn">Last 6 months</span>
                        </div>

                        <div className="chart">
                            <div className="bar" style={{ height: "60px" }}></div>
                            <div className="bar" style={{ height: "90px" }}></div>
                            <div className="bar" style={{ height: "50px" }}></div>
                            <div className="bar" style={{ height: "100px" }}></div>
                            <div className="bar" style={{ height: "75px" }}></div>
                            <div className="bar" style={{ height: "110px" }}></div>
                        </div>

                        <div className="months">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                        </div>
                    </div>
                </div>

            </section>


            {/*====================== NEW BUSINESS FEATURES SECTION ========= */}
            <section className="business-features">

                <div className="features-top">
                    <div className="small-badge">
                        End-to-End Business Solution
                    </div>

                    <div className="features-heading">
                        <h2>
                            Everything Your Business Needs <br />
                            in One <span>Accounting Platform</span>
                        </h2>

                        <p>
                            Explore our BusinessBook Plus accounting software and its tools
                            for small businesses, accountants, and bookkeepers.
                            <a href="#"> Explore all features</a>
                        </p>
                    </div>
                </div>

                <div className="features-cards">

                    <div className="feature-card">
                        <div className="feature-top blue-bg">
                            <h4>MANAGE YOUR</h4>
                            <h3>ACCOUNTS</h3>
                        </div>
                        <p>
                            Organize your accounts, maintain accurate records,
                            and track payables and receivables effortlessly.
                        </p>
                        <a href="#">Explore Accounting Features →</a>
                    </div>

                    <div className="feature-card">
                        <div className="feature-top orange-bg">
                            <h4>TRACK YOUR</h4>
                            <h3>INVENTORY</h3>
                        </div>
                        <p>
                            From Procurement to Sales, enhance your entire
                            inventory lifecycle with BusinessBook Plus.
                        </p>
                        <a href="#">Explore Inventory Features →</a>
                    </div>

                    <div className="feature-card">
                        <div className="feature-top blue-bg">
                            <h4>GENERATE FINANCIAL</h4>
                            <h3>REPORTS</h3>
                        </div>
                        <p>
                            Gain unparalleled insights, make informed decisions,
                            and propel your business forward.
                        </p>
                        <a href="#">Explore Reports →</a>
                    </div>

                </div>
            </section>


            {/* ================= SOLUTIONS SECTION ================= */}
            <section className="solutions-section">

                <div className="solutions-header">
                    <h2>
                        Solutions Designed for Diverse <span>Business Type</span>
                    </h2>
                    <p>
                        Whether you're a growing start-up or an established enterprise,
                        BusinessBook Plus works the way your business works.
                        <span className="view-link"> See all business types</span>
                    </p>
                </div>

                <div className="solutions-layout">

                    {/* LEFT SIDE ACCORDION */}
                    <div className="solutions-left">
                        {businessTypes.map((item, index) => (
                            <div key={index} className="solution-item">

                                <div
                                    className={`solution-title ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {item.title}
                                </div>

                                {activeIndex === index && (
                                    <div className="solution-content">
                                        <p>{item.content}</p>

                                        {item.points && (
                                            <ul>
                                                {item.points.map((point, i) => (
                                                    <li key={i}>✔ {point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE IMAGE / DASHBOARD */}
                    <div className="solutions-right">
                        <div className="mock-dashboard">
                            <h3>Commerce Cloud</h3>
                            <p>Multi-Channel Sales Reporting</p>

                            <div className="mock-box"></div>
                            <div className="mock-box small"></div>
                            <div className="mock-box"></div>
                        </div>
                    </div>

                </div>
            </section>

            {/*====================== FEATURES SECTION ===================*/}
            <section className="features-section">
                <div className="container">

                    <div className="section-header">
                        <h1>
                            Everything you need to manage <br />
                            <span>Accounting and Inventory</span> - in one place
                        </h1>
                        <p>
                            BusinessBook Plus unifies all your essential tools with simplicity and power.
                            <a href="#">See more features</a>
                        </p>
                    </div>

                    <div className="features-grid">

                        <div className="card">
                            <div className="icon">
                                <img src={intuitive} alt="Intuitive Dashboard" />
                            </div>
                            <h3>Intuitive Dashboard</h3>
                            <p>Get a real-time overview of your financial performance with dashboards and key metrics.</p>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <img src={simplified} alt="Simplified" />
                            </div>
                            <h3>Simplified Transactions</h3>
                            <p>Record and track all your income, expenses, and transfers easily with user-friendly accounting software.</p>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <img src={transactions} alt="transactions" />
                            </div>
                            <h3>Automated Invoicing</h3>
                            <p>Create and send professional invoices quickly and effortlessly, with automated reminders.</p>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <img src={bank} alt="bank-reconcillation" />
                            </div>
                            <h3>Bank Reconciliation</h3>
                            <p>Automate bank account reconciliation with our software, ensuring accurate financial data.</p>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <img src={automated} alt="bank" />
                            </div>
                            <h3>Comprehensive Reports</h3>
                            <p>Generate financial reports covering income, expenses, balances and trends.</p>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <img src={time} alt="Time" />
                            </div>
                            <h3>Real-time Inventory Tracking</h3>
                            <p>Monitor stock levels in real-time, tracking quantities, locations and movements.</p>
                        </div>

                    </div>
                </div>
            </section>


            {/*====================== PRICE SECTION ===================*/}
            <section className="pricing-section">
                <div className="pricing-header">
                    {/* <span className="badge">Business Boost</span> */}

                    <div className="pricing-title">
                        <h2>
                            Plans to Suit Your <span>Business</span>
                        </h2>
                        <p>
                            All pricing plans cover the essentials, with room to grow as your
                            business expands.
                            <a href="#"> See full pricing details</a>
                        </p>
                    </div>
                </div>

                <div className="pricing-cards">
                    {/* Card 1 */}
                    <div className="pricing-card">
                        <h4>Freemium</h4>
                        <h1>Free</h1>
                        <p className="sub-text">Limited Features</p>

                        <p className="description">
                            Perfect for start-ups and early-stage businesses exploring the platform.
                        </p>

                        <button className="link-btn">Go Freemium</button>
                    </div>

                    {/* Card 2 */}
                    <div className="pricing-card">
                        <h4>Standard</h4>
                        <h1>₹599</h1>
                        <p className="sub-text">Per Month</p>

                        <p className="description">
                            Designed for growing businesses that need more than the basics.
                        </p>

                        <button className="link-btn">Go Standard</button>
                    </div>

                    {/* Card 3 */}
                    <div className="pricing-card">
                        <h4>Professional</h4>
                        <h1>₹999</h1>
                        <p className="sub-text">Per Month</p>

                        <p className="description">
                            Best for established enterprises that require advanced insights and scalability.
                        </p>

                        <button className="link-btn">Go Professional</button>
                    </div>
                </div>
            </section>

            {/*====================== WHY CHOOSE SECTION ===================*/}
            <section className="why-section">

                <div className="why-header">
                    <span className="badge"> Trusted Platform</span>
                    <h2>
                        Why Choose <span>BusinessBook Plus</span>
                    </h2>
                    <p>
                        Trusted by industry leaders to streamline operations and ensure
                        regulatory compliance
                    </p>
                </div>

                <div className="why-container">

                    <div className="why-card">
                        <div className="icon">
                            <img src={save} alt="save time" />

                        </div>
                        <h3>Save Time</h3>
                        <p>
                            Automate billing, GST filing, and reminders — giving you more hours
                            to grow your business.
                        </p>
                    </div>

                    <div className="why-card">
                        <div className="icon">
                            <img src={stay} alt="stay" />


                        </div>
                        <h3>Stay Compliant</h3>
                        <p>
                            Use GST-ready invoicing and detailed reports to simplify audits and
                            reduce stress.
                        </p>
                    </div>

                    <div className="why-card">
                        <div className="icon">
                            <img src={grow} alt="grow" />

                        </div>
                        <h3>Grow Faster</h3>
                        <p>
                            Unlock deep insights into sales trends and inventory performance to
                            make smarter business decisions.
                        </p>
                    </div>

                </div>

            </section>


            {/*====================== BUILD BUSINESS SECTION ===================*/}
            <section className="build-business-section">
                <div className="build-business-container">

                    <h2 className="build-business-title">
                        Build Your Business <br />
                        With <span>BusinessBook Plus</span>
                    </h2>

                    <p className="build-business-subtitle">
                        Join hundreds of businesses already growing with BusinessBook Plus –
                        start your free trial now.
                    </p>

                    <div className="build-business-buttons">
                        <button className="build-btn-primary">
                            Request a Demo
                        </button>

                        <button className="build-btn-secondary">
                            Watch Intro
                        </button>
                    </div>

                </div>
            </section>






        </>
    );
}

export default Home;
