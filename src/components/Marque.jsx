import React from "react";
import "../styles/Marque.css";

const items = [
  "Open to Collaborate",
  "Let's Build Something",
  "Available for Work",
];

export default function Marquee() {
  const tickerItems = [...items, ...items];

  return (
    <section className="marquee-band" aria-label="Creative services">
      <div className="marquee-inner">
        <div className="marquee-track">
          {tickerItems.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <span className="marquee-item">{item}</span>

              <span className="marquee-star" aria-hidden="true">
                ✳
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
