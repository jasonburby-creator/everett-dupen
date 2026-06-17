import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the DuPen family regarding the work and legacy of Everett DuPen.",
};

export default function ContactPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>Contact</h1>
          <span className="count">Inquiries</span>
        </div>

        <div style={{ maxWidth: "520px" }}>
          <ul className="contact-list">
            <li>
              <div className="role">Primary</div>
              <div className="who">The DuPen Family</div>
              <a href="mailto:info@everettdupen.com">info@everettdupen.com</a>
            </li>
            <li>
              <div className="role">Family Contact</div>
              <div className="who">Destia DuPen Hermes</div>
              <a href="mailto:destiahermes@yahoo.com">destiahermes@yahoo.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
