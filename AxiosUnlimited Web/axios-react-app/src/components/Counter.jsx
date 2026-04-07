import React from 'react';

export const Counter = ({ target = 100, duration = 800 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(1 + progress * (target - 1));
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span className="text-6xl font-black text-white">{count}</span>;
};

export default Counter;
