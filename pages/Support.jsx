import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <>
      <section>
        <div className="Support-container">
          <button
            style={{
              padding: "12px 35px",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.15)",
              color: "white",
              border: "none",
              marginBottom: "10px",
            }}
          >
            ❓ Help Center
          </button>
          <h1>
            Get the <span style={{ color: "#f2b500" }}>Help</span> You Need
          </h1>
          <p>
            New to Accounting? Learn how to get started easily. <br />
            Developers can explore BusinessBook Plus API, structure, and app
            development.
          </p>
          <button className="bttn">Contact Us</button>
        </div>
      </section>

      {/* heroSection */}
      <section>
        <div className="hero-container">
          <div className="service-card">
            <div className="child-service-card">
              <div className="service-icon">
                <h1>01</h1>
              </div>
              <div className="serviceText">
                <p>Self Services</p>
                <h1>Knowledge Base</h1>
              </div>
            </div>
            <br />
            <br />
            <p>
              Comprehensive digital library featuring intelligent search,
              interactive FAQs, and detailed resolution guides designed for{" "}
              <br /> immediate problem-solving and feature exploration.
            </p>
            <br />
            <br />
            <li>AI-powered search with smart suggestions</li>
            <li>Interactive troubleshooting workflows</li>
            <li>HD video tutorials and visual guides</li>
            <li>Community-contributed solutions</li>
          </div>
          <div className="service-card">
            <div className="child-service-card">
              <div className="service-icon">
                <h1>02</h1>
              </div>
              <div className="serviceText">
                <p>Documentation</p>
                <h1>Technical Resources</h1>
              </div>
            </div>
            <br />
            <br />
            <p>
Extensive technical documentation, video walkthroughs, <br />
 and comprehensive product manuals crafted by experts to ensure <br />
 complete understanding of all features.            </p>
            <br />
            <br />
            <li>Step-by-step implementation guides</li>
            <li>Comprehensive video tutorial library</li>
            <li>API documentation with code examples</li>
            <li>Best practices and optimization tips</li>
          </div>
          <div className="service-card">
            <div className="child-service-card">
              <div className="service-icon">
                <h1>03</h1>
              </div>
              <div className="serviceText">
                <p>Education</p>
                <h1>Training Programs</h1>
              </div>
            </div>
            <br />
            <br />
            <p>
             Structured learning programs including live webinars, certification <br />
              courses, and hands-on workshops designed to maximize your team's <br />
               proficiency and adoption.
            </p>
            <br />
            <br />
            <li>Live instructor-led training sessions</li>
            <li>Professional certification programs</li>
            <li>Custom training for enterprise teams</li>
            <li>Quarterly product update sessions</li>
          </div>
          <div className="service-card">
            <div className="child-service-card">
              <div className="service-icon">
                <h1>04</h1>
              </div>
              <div className="serviceText">
                <p>Implementation</p>
                <h1>Onboarding Services</h1>
              </div>
            </div>
            <br />
            <br />
            <p>
              White-glove onboarding experience with dedicated specialists <br />
               providing guided setup, seamless data migration, and custom <br />
               configuration services.
            </p>
            <br />
            <br />
            <li>Dedicated implementation specialist</li>
            <li>Comprehensive data migration services</li>
            <li>Custom workflow configuration</li>
            <li>Go-live support and monitoring

            </li>
          </div>
          <div className="service-card">
            <div className="child-service-card">
              <div className="service-icon">
                <h1>05</h1>
              </div>
              <div className="serviceText">
                <p>Technical Support</p>
                <h1>Ticket Management</h1>
              </div>
            </div>
            <br />
            <br />
            <p>
             Direct access to expert technical team through sophisticated ticketing <br />
              platform featuring real-time progress tracking and guaranteed  <br />
              response times.
            </p>
            <br />
            <br />
            <li>Priority-based ticket routing system</li>
            <li>Real-time status updates and notifications</li>
            <li>Expert technical resolution team</li>
            <li>Escalation management and SLA tracking</li>
          </div>
          <div className="service-card">
            <div className="child-service-card">
              <div className="service-icon">
                <h1>06</h1>
              </div>
              <div className="serviceText">
                <p>Community</p>
                <h1>Live Chat & Forums</h1>
              </div>
            </div>
            <br />
            <br />
            <p>
              Real-time collaboration platform connecting you with peers, product <br />
              experts, and thought leaders in our vibrant community ecosystem.
            </p>
            <br />
            <br />
            <li>Instant messaging with expert moderators</li>
            <li>Topic-based discussion forums</li>
            <li>Peer-to-peer knowledge sharing</li>
            <li>Expert office hours and Q&A sessions</li>
          </div>
        </div>
      </section>
      {/* PREMIUM SECTION */}
<section className="premium-section">
  <div className="premium-content">
    <p className="premium-tag">Premium Excellence</p>

    <h1>Dedicated Premium Support</h1>

    <p className="premium-desc">
      Experience unparalleled white-glove service with dedicated support
      specialists, priority access channels and guaranteed response times
      designed for mission critical business operations.
    </p>

    <div className="premium-container">
      <div>
        <ul>
          <li>Dedicated account manager</li>
          <li>Custom training sessions</li>
          <li>Emergency hotline</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Priority support channels</li>
          <li>Quarterly business reviews</li>
          <li>Advanced system monitoring</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="premium-image">
    <img src="/images/support-img.webp" alt="Premium Support" />
  </div>
</section>
    </>
  );
};

export default Support;
