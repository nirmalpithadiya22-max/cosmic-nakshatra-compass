import { useState, useEffect } from "react";
import { Moon, Sun, Star, Activity } from "lucide-react";
import { getLiveMood } from "@/data/astrology";

const lunarPhases = [
  { name: "New Moon", emoji: "🌑", energy: "Intentions & New Beginnings" },
  { name: "Waxing Crescent", emoji: "🌒", energy: "Hope & Manifestation" },
  { name: "First Quarter", emoji: "🌓", energy: "Action & Decision" },
  { name: "Waxing Gibbous", emoji: "🌔", energy: "Refinement & Patience" },
  { name: "Full Moon", emoji: "🌕", energy: "Illumination & Completion" },
  { name: "Waning Gibbous", emoji: "🌖", energy: "Gratitude & Sharing" },
  { name: "Last Quarter", emoji: "🌗", energy: "Release & Forgiveness" },
  { name: "Waning Crescent", emoji: "🌘", energy: "Surrender & Rest" },
];

function getLunarPhase(date: Date) {
  const synodic = 29.53058867;
  const known = new Date(2000, 0, 6, 18, 14, 0); // known new moon
  const diff = (date.getTime() - known.getTime()) / (1000 * 60 * 60 * 24);
  const phase = ((diff % synodic) + synodic) % synodic;
  const index = Math.floor((phase / synodic) * 8) % 8;
  return lunarPhases[index];
}

const planetaryHours = ["Saturn", "Jupiter", "Mars", "Sun", "Venus", "Mercury", "Moon"];

function getPlanetaryHour(hour: number, dayOfWeek: number) {
  const index = (dayOfWeek + hour) % 7;
  return planetaryHours[index];
}

const LiveModePanel = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const mood = getLiveMood(now.getHours());
  const lunar = getLunarPhase(now);
  const planetHour = getPlanetaryHour(now.getHours(), now.getDay());
  const seconds = now.getSeconds();

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
      {/* Live indicator */}
      <div className="flex items-center justify-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive/60 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive" />
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
          Live · {now.toLocaleTimeString()}
        </span>
      </div>

      {/* Cosmic Mood */}
      <div className="bg-card/80 backdrop-blur-sm rounded-xl p-5 border border-primary/10 glow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{mood.emoji}</span>
          <div>
            <h3 className="font-display text-lg text-foreground">{mood.mood}</h3>
            <p className="text-[10px] uppercase tracking-widest text-primary font-body">Current Cosmic Energy</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{mood.description}</p>
        {/* Energy bar */}
        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
            <span>Energy Flow</span>
            <span>{Math.round((seconds / 60) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-gold-glow rounded-full transition-all duration-1000"
              style={{ width: `${(seconds / 60) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Moon Phase & Planetary Hour */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-accent/10 glow-card text-center">
          <Moon size={14} className="mx-auto text-muted-foreground mb-2" />
          <span className="text-3xl block mb-1">{lunar.emoji}</span>
          <p className="font-display text-sm text-foreground">{lunar.name}</p>
          <p className="text-[10px] text-muted-foreground mt-1">{lunar.energy}</p>
        </div>
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-celestial/10 glow-card text-center">
          <Star size={14} className="mx-auto text-muted-foreground mb-2" />
          <span className="text-3xl block mb-1">
            {planetHour === "Sun" ? "☀️" : planetHour === "Moon" ? "🌙" : planetHour === "Mars" ? "♂️" : planetHour === "Venus" ? "♀️" : planetHour === "Jupiter" ? "♃" : planetHour === "Saturn" ? "♄" : "☿"}
          </span>
          <p className="font-display text-sm text-foreground">{planetHour} Hour</p>
          <p className="text-[10px] text-muted-foreground mt-1">Planetary Ruler</p>
        </div>
      </div>

      {/* Daily Cosmic Tip */}
      <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-primary/5 text-center">
        <Activity size={14} className="mx-auto text-primary mb-2" />
        <p className="text-xs text-muted-foreground font-body italic leading-relaxed">
          "{getDailyTip(now.getDay())}"
        </p>
      </div>
    </div>
  );
};

function getDailyTip(day: number): string {
  const tips = [
    "Sunday is ruled by the Sun — shine your brightest and lead with confidence.",
    "Monday is ruled by the Moon — nurture your emotions and trust your intuition.",
    "Tuesday is ruled by Mars — channel your warrior spirit into focused action.",
    "Wednesday is ruled by Mercury — communicate, learn, and connect with clarity.",
    "Thursday is ruled by Jupiter — expand your horizons and embrace abundance.",
    "Friday is ruled by Venus — celebrate beauty, love, and creative expression.",
    "Saturday is ruled by Saturn — discipline and patience build lasting foundations.",
  ];
  return tips[day];
}

export default LiveModePanel;
