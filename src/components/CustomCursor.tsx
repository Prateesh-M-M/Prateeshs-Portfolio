import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setIsVisible(true);

      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { ...newPosition, id: trailId++ }];
        return newTrail.slice(-8);
      });
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);

    // Globally hide the system cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.6,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'all 0.1s ease-out',
          }}
        />
      ))}

      <div
        className="absolute text-2xl transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: position.x,
          top: position.y,
          animation: 'bounce 2s infinite',
        }}
      >
        🌮
      </div>
    </div>
  );
};

export default CustomCursor;