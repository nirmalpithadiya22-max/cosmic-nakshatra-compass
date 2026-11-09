import { nakshatras } from "@/data/astrology";

interface NakshatraGridProps {
  activeIndex: number | null;
}

const NakshatraGrid = ({ activeIndex }: NakshatraGridProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-center font-display text-lg text-foreground tracking-wider">27 Nakshatras</h3>
      <div className="grid grid-cols-9 gap-1.5 sm:gap-2">
        {nakshatras.map((n, i) => (
          <div
            key={n.name}
            className={`flex flex-col items-center justify-center p-1.5 rounded-md transition-all duration-300 cursor-default group ${
              activeIndex === i
                ? "bg-primary/20 scale-110 ring-1 ring-primary/40"
                : "bg-secondary/30 hover:bg-secondary/60"
            }`}
            title={`${n.name} — ${n.deity}`}
          >
            <span className="text-lg leading-none">{n.symbol}</span>
            <span className="text-[8px] sm:text-[9px] text-muted-foreground mt-0.5 truncate max-w-full text-center leading-tight">
              {n.name.split(" ")[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NakshatraGrid;
