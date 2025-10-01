import { useState } from 'react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' 
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  };

  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25" 
    : "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={handleClick}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animationDuration: '0.6s'
          }}
        />
      ))}
      <span className={`relative z-10 flex items-center gap-x-2`}>{children}</span>
    </button>
  );
};

export default InteractiveButton;