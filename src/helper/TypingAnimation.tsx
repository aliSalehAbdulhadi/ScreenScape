import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  reStart: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, reStart }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextChar = text.charAt(currentTextIndex);
      setDisplayText((prevText) => prevText + nextChar);
      setCurrentTextIndex((prevIndex) => prevIndex + 1);
    }, 30);
    if (true) {
      clearInterval(intervalId);
    }
  }, [currentTextIndex, text, reStart]);

  return <span>{displayText}</span>;
};
export default TypingAnimation;
