import { useState } from 'react';

interface BitElementProps {
  value: string;
  initial: number; // 0 or 1
}

export default function BitElement({ value, initial }: BitElementProps) {
  const [bitState, setBitState] = useState(initial);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setBitState(bitState === 0 ? 1 : 0);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <div 
      className={`bit bit-${bitState} ${isAnimating ? 'animate-bit-flip' : ''}`}
      onClick={handleFlip}
    >
      {value}
    </div>
  );
}
