import { zodiacSigns } from "@/data/astrology";

interface ZodiacWheelProps {
  activeIndex: number | null;
}

const ZodiacWheel = ({ activeIndex }: ZodiacWheelProps) => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-3 rounded-full border border-primary/20" />
      
      {/* Center glow */}
      <div className="absolute inset-1/4 rounded-full bg-primary/5 blur-xl" />

      {zodiacSigns.map((sign, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const radius = 105;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const isActive = activeIndex === i;

        return (
          <div
            key={sign.name}
            className={`absolute transition-all duration-500 cursor-default ${
              isActive ? "scale-150 z-10" : "scale-100 hover:scale-125"
            }`}
            style={{
              left: `calc(50% + ${x}px - 16px)`,
              top: `calc(50% + ${y}px - 16px)`,
            }}
          >
            <span
              className={`text-2xl block transition-all duration-300 ${
                isActive ? "drop-shadow-[0_0_12px_hsl(40,85%,55%)]" : ""
              }`}
              title={sign.name}
            >
              {sign.symbol}
            </span>
          </div>
        );
      })}

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs text-muted-foreground font-display tracking-widest uppercase">
          {activeIndex !== null ? zodiacSigns[activeIndex].name : "Zodiac"}
        </span>
      </div>
    </div>
  );
};

export default ZodiacWheel;
