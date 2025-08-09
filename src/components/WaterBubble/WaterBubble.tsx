import { useEffect, useRef, useState } from "react";
import "./WaterBubble.css";

// Create a single bubble component
const SingleBubble = ({
  initialX,
  initialY,
  initialSpeed,
  link,
  text,
}: {
  initialX: number;
  initialY: number;
  initialSpeed: number;
  link?: string;
  text?: string;
}) => {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [direction, setDirection] = useState({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
  });

  useEffect(() => {
    // Get window dimensions
    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    };

    // Initial dimensions
    let dimensions = getWindowDimensions();

    // Update dimensions on resize
    const handleResize = () => {
      dimensions = getWindowDimensions();
    };
    window.addEventListener("resize", handleResize);

    const speed = initialSpeed;
    let animationFrameId: number;

    const moveBubble = () => {
      if (bubbleRef.current) {
        const bubbleSize = bubbleRef.current.offsetWidth;

        // Update position based on direction and speed
        let newX = position.x + direction.x * speed;
        let newY = position.y + direction.y * speed;

        let newDirectionX = direction.x;
        let newDirectionY = direction.y;

        // Bounce off edges
        if (newX <= 0 || newX >= dimensions.width - bubbleSize) {
          newDirectionX = -newDirectionX;
          newX = Math.max(0, Math.min(newX, dimensions.width - bubbleSize));
        }

        if (newY <= 0 || newY >= dimensions.height - bubbleSize) {
          newDirectionY = -newDirectionY;
          newY = Math.max(0, Math.min(newY, dimensions.height - bubbleSize));
        }

        // Randomly change direction occasionally
        if (Math.random() < 0.01) {
          newDirectionX = Math.random() * 2 - 1;
          newDirectionY = Math.random() * 2 - 1;
        }

        setPosition({ x: newX, y: newY });
        setDirection({ x: newDirectionX, y: newDirectionY });
      }

      animationFrameId = requestAnimationFrame(moveBubble);
    };

    animationFrameId = requestAnimationFrame(moveBubble);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, direction, initialSpeed]); // Generate a random hue for the bubble edge
  const hue = Math.floor(Math.random() * 60) + 180; // Blue to cyan range (180-240)
  const handleBubbleClick = () => {
    const targetLink = link || "https://github.com/wibus4ma";
    window.open(targetLink, "_blank");
  };
  return (
    <div
      ref={bubbleRef}
      className="water-bubble"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: Math.random() * 0.3 + 0.5, // Random opacity for variety
        boxShadow: `
          inset 0 0 15px rgba(255, 255, 255, 0.25),
          0 0 5px hsla(${hue}, 100%, 70%, 0.5),
          0 0 8px hsla(${hue}, 100%, 60%, 0.3),
          0 0 12px hsla(${hue}, 100%, 50%, 0.1)
        `,
        border: `1px solid hsla(${hue}, 100%, 80%, 0.2)`,
        cursor: "pointer",
      }}
      onClick={handleBubbleClick}
    >
      {text && <span className="bubble-text ">{text}</span>}
    </div>
  );
};

// Main component that renders multiple bubbles
const WaterBubble = () => {
  // Create several bubbles with random initial positions and speeds
  const createRandomBubbles = () => {
    const { innerWidth, innerHeight } = window;
    const bubbles = [];

    // Array of bubble data with link and text combined
    const bubbleData = [
      { link: "https://shortlink.wibus4ma.dev/", text: "ShortLink" },
    ];

    for (let i = 0; i < bubbleData.length; i++) {
      const data = bubbleData[i] || {
        link: "https://github.com/wibus4ma",
        text: "Link",
      }; // Default fallback

      bubbles.push({
        id: i,
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        speed: 0.3 + Math.random() * 0.8, // Slightly slower speed
        link: data.link,
        text: data.text,
      });
    }

    return bubbles;
  };

  const [bubbles] = useState(createRandomBubbles());
  return (
    <>
      {bubbles.map((bubble) => (
        <SingleBubble
          key={bubble.id}
          initialX={bubble.x}
          initialY={bubble.y}
          initialSpeed={bubble.speed}
          link={bubble.link}
          text={bubble.text}
        />
      ))}
    </>
  );
};

export default WaterBubble;
