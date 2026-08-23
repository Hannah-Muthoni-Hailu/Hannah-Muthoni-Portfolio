import { useEffect, useRef, useState } from "react";

const SHOW_DELAY = 15 * 1000;
const SMILE_DISTANCE = 180;
const MAX_EYE_MOVEMENT = 4;

function useStickMan() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmiling, setIsSmiling] = useState(false);

  const [eyePosition, setEyePosition] = useState({
    x: 0,
    y: 0,
  });

  const mousePosition = useRef({
    x: 0,
    y: 0,
  });

  const animationFrame = useRef(null);

  useEffect(() => {
    // Don't show it again if the user dismissed it.
    if (sessionStorage.getItem("stickman-dismissed") === "true") {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, SHOW_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const updateEyes = () => {
      const { x: mouseX, y: mouseY } = mousePosition.current;

      // Stickman's approximate head position.
      const characterX = window.innerWidth - 90;
      const characterY = window.innerHeight - 145;

      const dx = mouseX - characterX;
      const dy = mouseY - characterY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      // Smile when the cursor gets close.
      setIsSmiling(distance < SMILE_DISTANCE);

      // Normalize direction.
      if (distance > 0) {
        const normalizedX = dx / distance;
        const normalizedY = dy / distance;

        setEyePosition({
          x: normalizedX * MAX_EYE_MOVEMENT,
          y: normalizedY * MAX_EYE_MOVEMENT,
        });
      }

      animationFrame.current =
        requestAnimationFrame(updateEyes);
    };

    animationFrame.current =
      requestAnimationFrame(updateEyes);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isVisible]);

  const handleMouseMove = () => {
    // Intentionally left available for future interaction.
    // You could use this to make the whole character lean
    // toward the cursor later.
  };

  return {
    isVisible,
    isSmiling,
    eyePosition,
    handleMouseMove,
  };
}

export default useStickMan;