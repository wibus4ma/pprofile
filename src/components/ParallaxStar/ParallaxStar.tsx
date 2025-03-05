// components/StarBackground.tsx
import { useMemo } from "react";
import "./ParallaxStar.css";

const ParallaxStar = () => {
  const generateShadows = (count: number) => {
    let shadows = "";
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      shadows += `${x}px ${y}px #FFF, `;
    }
    return shadows.slice(0, -2); // Remove last comma and space
  };

  const starsSmall = useMemo(() => generateShadows(700), []);
  const starsMedium = useMemo(() => generateShadows(200), []);
  const starsBig = useMemo(() => generateShadows(100), []);

  return (
    <div className="star-background">
      <div className="stars" style={{ boxShadow: starsSmall }} />
      <div className="stars stars2" style={{ boxShadow: starsMedium }} />
      <div className="stars stars3" style={{ boxShadow: starsBig }} />
    </div>
  );
};

export default ParallaxStar;
