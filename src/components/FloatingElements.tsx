import React, { useEffect, useState } from 'react';
import { Code, Palette, Smartphone, Zap, Heart, Star } from 'lucide-react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    icon: React.ComponentType<any>;
    x: number;
    y: number;
    rotation: number;
    scale: number;
    speed: number;
  }>>([]);

  const icons = [Code, Palette, Smartphone, Zap, Heart, Star];

  useEffect(() => {
    const createElements = () => {
      const newElements = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 2 + 1
      }));
      setElements(newElements);
    };

    createElements();

    const animateElements = () => {
      setElements(prev => prev.map(element => ({
        ...element,
        y: element.y - element.speed,
        rotation: element.rotation + 1,
        // Reset position when element goes off screen
        ...(element.y < -50 ? {
          y: window.innerHeight + 50,
          x: Math.random() * window.innerWidth
        } : {})
      })));
    };

    const interval = setInterval(animateElements, 50);
    const resizeHandler = () => createElements();
    
    window.addEventListener('resize', resizeHandler);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => {
        const IconComponent = element.icon;
        return (
          <div
            key={element.id}
            className="absolute text-blue-400/20 transition-all duration-1000"
            style={{
              left: element.x,
              top: element.y,
              transform: `rotate(${element.rotation}deg) scale(${element.scale})`,
            }}
          >
            <IconComponent size={24} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;