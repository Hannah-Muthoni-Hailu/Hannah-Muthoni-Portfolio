import { useEffect, useRef, useState } from "react";
import useStickMan from "./useStickman";
import "./Stickman.css";

const INITIAL_MESSAGE =
  "Pssst...want your site to do more than just sit there?";

export default function StickMan() {
  const {
    isVisible,
    isSmiling,
    eyePosition,
    handleMouseMove,
  } = useStickMan();

  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const characterRef = useRef(null);

  // Don't render anything if the user dismissed it.
  useEffect(() => {
    if (sessionStorage.getItem("stickman-dismissed") === "true") {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = (event) => {
    event.stopPropagation();

    sessionStorage.setItem("stickman-dismissed", "true");
    setIsDismissed(true);
    setIsOpen(false);
  };

  const handleCharacterClick = () => {
    setIsOpen(true);
  };

  const handleClosePlaceholder = () => {
    setIsOpen(false);
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={`stickman-wrapper ${isSmiling ? "is-smiling" : ""}`}
        onMouseMove={handleMouseMove}
      >
        {/* Speech bubble */}
        {!isOpen && (
          <div className="stickman-bubble">
            <button
              className="stickman-dismiss"
              onClick={handleDismiss}
              aria-label="Dismiss assistant"
              type="button"
            >
              ×
            </button>

            <button
              className="stickman-bubble-content"
              onClick={handleCharacterClick}
              type="button"
            >
              <span>{INITIAL_MESSAGE}</span>
              <small>Click me 👋</small>
            </button>
          </div>
        )}

        {/* Stick man */}
        <button
          ref={characterRef}
          className="stickman-character"
          onClick={handleCharacterClick}
          type="button"
          aria-label="Open website service assistant"
        >
          <svg
            className="stickman-svg"
            viewBox="0 0 120 190"
            aria-hidden="true"
          >
            {/* Head */}
            <circle
              className="stickman-head"
              cx="60"
              cy="48"
              r="31"
            />

            {/* Eyes */}
            <g className="stickman-eyes">
              <circle
                className="stickman-eye"
                cx="49"
                cy="43"
                r="7"
              />
              <circle
                className="stickman-eye"
                cx="71"
                cy="43"
                r="7"
              />

              {/* Pupils */}
              <circle
                className="stickman-pupil"
                cx={49 + eyePosition.x}
                cy={43 + eyePosition.y}
                r="3"
              />

              <circle
                className="stickman-pupil"
                cx={71 + eyePosition.x}
                cy={43 + eyePosition.y}
                r="3"
              />
            </g>

            {/* Mouth */}
            {isSmiling ? (
              <path
                className="stickman-mouth smile"
                d="M 50 59 Q 60 69 70 59"
              />
            ) : (
              <path
                className="stickman-mouth"
                d="M 53 61 Q 60 64 67 61"
              />
            )}

            {/* Body */}
            <line
              className="stickman-line"
              x1="60"
              y1="79"
              x2="60"
              y2="137"
            />

            {/* Left arm */}
            <line
              className="stickman-line"
              x1="60"
              y1="91"
              x2="29"
              y2="113"
            />

            {/* Waving arm */}
            <g className="stickman-wave-arm">
              <line
                className="stickman-line"
                x1="60"
                y1="91"
                x2="91"
                y2="73"
              />

              {/* Hand */}
              <line
                className="stickman-line"
                x1="91"
                y1="73"
                x2="96"
                y2="62"
              />
              <line
                className="stickman-line"
                x1="91"
                y1="73"
                x2="101"
                y2="68"
              />
            </g>

            {/* Legs */}
            <line
              className="stickman-line"
              x1="60"
              y1="137"
              x2="35"
              y2="174"
            />

            <line
              className="stickman-line"
              x1="60"
              y1="137"
              x2="85"
              y2="174"
            />
          </svg>
        </button>
      </div>

      {/* Placeholder for your future chatbot/service interaction */}
      {isOpen && (
        <div className="stickman-overlay">
          <div
            className="stickman-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="stickman-modal-title"
          >
            <button
              className="stickman-modal-close"
              onClick={handleClosePlaceholder}
              aria-label="Close"
              type="button"
            >
              ×
            </button>

            <div className="stickman-modal-icon">🤖</div>

            <h2 id="stickman-modal-title">
              Chatbot / Service Placeholder
            </h2>

            <p>
              This is where your AI chatbot, service selector,
              contact form, or booking flow can open.
            </p>

            <div className="stickman-placeholder-options">
              <button type="button">
                AI-powered website
              </button>

              <button type="button">
                Custom AI chatbot
              </button>

              <button type="button">
                Website redesign
              </button>

              <button type="button">
                Something else
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}