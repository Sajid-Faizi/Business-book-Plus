import "./Partner.css";
import { useState } from "react";

 
function Partner() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      title: "Software Vendors & IT Consultants",
      description:
        "Enhance your product portfolio with our accounting and inventory solutions.",
      points: [
        "Integrate seamlessly with existing software products",
        "Access API and SDK support for customized implementations",
        "Receive priority technical guidance and updates"
      ]
    },
    {
      title: "Accounting Firms & Chartered Accountants",
      description:
        "Empower your clients with efficient accounting solutions.",
      points: [
        "Provide value-added accounting services",
        "Access compliance-ready solutions",
        "Get dedicated onboarding support"
      ]
    },
    {
      title: "Businesses Seeking Custom Software",
      description:
        "Tailored solutions designed for growing businesses.",
      points: [
        "Custom ERP integrations",
        "Scalable inventory management",
        "Dedicated technical consultation"
      ]
    },
    {
      title: "Tax Filing Companies",
      description:
        "Streamline tax compliance and reporting processes.",
      points: [
        "Automated GST & tax reports",
        "Easy reconciliation tools",
        "Priority support for filing seasons"
      ]
    }
  ];


  return (
    <>
      <section className="partner-section">
        <div className="grid-overlay"></div>

        <div className="partner-container">

          <div className="partner-badge">
            <span>Partnership Program</span>
          </div>

          <h1 className="partner-title">
            Join Our Growing Network of{" "}
            <span className="highlight">Innovative Partners</span>
          </h1>

          <p className="partner-subtitle">
            Join our growing network of successful partners and unlock unlimited
            potential for your business growth
          </p>

          <button className="partner-btn">
            Become Our Partner
          </button>

        </div>
      </section>

      {/*============================================= collab-section ==============*/}
      <section className="collab-section">
        <div className="collab-container">

          <div className="collab-left">
            <div className="collab-badge">
              Stronger Together
            </div>

            <h2 className="collab-title">
              Collaborate. Co-Create. <br />
              <span>Grow Together</span>
            </h2>
          </div>

          <div className="collab-right">
            <p>
              At BusinessBook Plus, we believe that success multiplies through
              collaboration. Our partner ecosystem brings together solution
              providers, resellers, consultants, and industry innovators to
              deliver more value – faster. Whether you're a tech enabler, a CA
              firm, a startup advisor, or a digital agency – we invite you to
              co-create success stories with us.
            </p>
          </div>

        </div>
      </section>

      {/* ========================= Partner-tabs-section ===================================== */}
      <section className="partner-tabs-section">
        <div className="partner-tabs-container">

          {/* LEFT SIDE */}
          <div className="tabs-left">
            <h2>Who Can Partner with Us?</h2>

            {tabData.map((tab, index) => (
              <div
                key={index}
                className={`tab-item ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="tabs-right">
            <h3>{tabData[activeTab].title}</h3>
            <p>{tabData[activeTab].description}</p>

            <ul>
              {tabData[activeTab].points.map((point, i) => (
                <li key={i}>✔ {point}</li>
              ))}
            </ul>

            <button className="partner-btn">
              Become Our Partner
            </button>
          </div>

        </div>
      </section>

      {/* ========================= why-partner-section ===================================== */}
      <section className="why-partner-section">
        <div className="why-partner-container">

          {/* LEFT SIDE */}
          <div className="why-left">
            <div className="why-badge"> choose us</div>

            <h2>
              Why Partner with <br />
              <span>BusinessBook Plus?</span>
            </h2>

            <p>
              Focused on your unique needs, our team delivers solutions
              that blend deep industry knowledge and cutting-edge
              strategies to ensure lasting growth.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="why-right">

            <div className="why-card">
              <h4>Trusted Platform</h4>
              <p>Expand your service offerings with a trusted SaaS platform</p>
            </div>

            <div className="why-card">
              <h4>Opportunities</h4>
              <p>Unlock new revenue streams through co-branded opportunities</p>
            </div>

            <div className="why-card">
              <h4>Support</h4>
              <p>Access sales enablement resources, training, and technical support</p>
            </div>

            <div className="why-card">
              <h4>Campaigns</h4>
              <p>Collaborate on joint marketing campaigns and lead generation</p>
            </div>

          </div>

        </div>
      </section>




      {/* ========================= CTA section ===================================== */}
      <section className="cta-section">
        <div className="cta-container">

          <h2>
            Let's Grow <span>Together</span>
          </h2>

          <p>
            Contact us today to explore exciting partnership opportunities, collaborate on innovative solutions,
            and discover how we can work together for long-term, mutual success and growth.
          </p>

          <button className="cta-btn">
            Become Our Partner
          </button>

        </div>
      </section>
    </>
  );
}

export default Partner;