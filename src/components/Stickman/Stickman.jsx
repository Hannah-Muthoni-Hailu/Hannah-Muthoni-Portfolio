import { useEffect, useRef, useState } from "react";
import useStickMan from "./useStickman";
import "./Stickman.css";

const INITIAL_MESSAGE =
  "Pssst...want your site to do more than just sit there?";

const CHATBOT_GREETING =
  "So, you want to improve your website? What do you specifically have in mind?";

const API_URL = "https://your-api-endpoint.com/chat";
const API_KEY = "YOUR_API_KEY";

export default function StickMan() {
  const {
    isVisible,
    isSmiling,
    eyePosition,
    handleMouseMove,
  } = useStickMan();

  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: CHATBOT_GREETING,
    },
  ]);

  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const characterRef = useRef(null);
  const inputRef = useRef(null);

  // Don't render anything if the user dismissed it.
  useEffect(() => {
    if (sessionStorage.getItem("stickman-dismissed") === "true") {
      setIsDismissed(true);
    }
  }, []);

  // Focus the input when the chatbot opens.
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleDismiss = (event) => {
    event.stopPropagation();

    sessionStorage.setItem("stickman-dismissed", "true");
    setIsDismissed(true);
    setIsOpen(false);
  };

  const handleCharacterClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const text = input.trim();

    if (!text || isSending) {
      return;
    }

    // Add the user's message immediately.
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      // const response = await fetch(API_URL, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     text,
      //     apikey: API_KEY,
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error(`API request failed: ${response.status}`);
      // }

      // const data = await response.json();
      const data = {
        response: "Thank you for your input"
      }

      // Adjust this depending on your real API response.
      const assistantText =
        data.response ||
        data.message ||
        data.text ||
        "Thanks — I've received your message.";

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: assistantText,
        },
      ]);
    } catch (error) {
      console.error("Chatbot request failed:", error);

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "Hmm, I couldn't reach the assistant right now. Try again in a moment.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={`stickman-wrapper ${
          isSmiling ? "is-smiling" : ""
        }`}
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

        {/* Stickman */}
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
            <circle
              className="stickman-head"
              cx="60"
              cy="48"
              r="31"
            />

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

            <line
              className="stickman-line"
              x1="60"
              y1="79"
              x2="60"
              y2="137"
            />

            <line
              className="stickman-line"
              x1="60"
              y1="91"
              x2="29"
              y2="113"
            />

            <g className="stickman-wave-arm">
              <line
                className="stickman-line"
                x1="60"
                y1="91"
                x2="91"
                y2="73"
              />

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

      {/* Chatbot */}
      {isOpen && (
        <div
          className="stickman-chat-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleClose();
            }
          }}
        >
          <div
            className="stickman-chat"
            role="dialog"
            aria-modal="true"
            aria-labelledby="stickman-chat-title"
          >
            <div className="stickman-chat-header">
              <div>
                <span className="stickman-chat-status">
                  <span />
                  Online
                </span>

                <h2 id="stickman-chat-title">
                  Let's improve it.
                </h2>
              </div>

              <button
                className="stickman-chat-close"
                onClick={handleClose}
                aria-label="Close chatbot"
                type="button"
              >
                ×
              </button>
            </div>

            <div className="stickman-chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`stickman-message ${
                    message.role === "user"
                      ? "stickman-message-user"
                      : "stickman-message-assistant"
                  }`}
                >
                  {message.content}
                </div>
              ))}

              {isSending && (
                <div className="stickman-message stickman-message-assistant stickman-typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>

            <form
              className="stickman-chat-form"
              onSubmit={handleSubmit}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Tell me what you're thinking..."
                disabled={isSending}
                aria-label="Your message"
              />

              <button
                type="submit"
                disabled={!input.trim() || isSending}
                aria-label="Send message"
              >
                ↗
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}