import { ZodiacSign, Nakshatra, MoodInfo } from "@/data/astrology";

interface ResultCardProps {
  name: string;
  zodiac: ZodiacSign;
  nakshatra: Nakshatra;
  mood: MoodInfo;
  birthDate: string;
  birthTime: string;
}

const ResultCard = ({ name, zodiac, nakshatra, mood, birthDate, birthTime }: ResultCardProps) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-muted-foreground text-sm tracking-widest uppercase font-body">Celestial Profile</p>
        <h2 className="text-3xl font-display text-gold-glow">{name}</h2>
        <p className="text-sm text-muted-foreground">{birthDate} · {birthTime}</p>
      </div>

      {/* Zodiac Sign Card */}
      <div className="bg-card rounded-lg p-6 glow-card border border-primary/10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{zodiac.symbol}</span>
          <div>
            <h3 className="text-xl font-display text-foreground">{zodiac.name}</h3>
            <p className="text-sm text-muted-foreground">{zodiac.dateRange}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-secondary/50 rounded-md px-3 py-2">
            <span className="text-muted-foreground">Element</span>
            <p className="text-foreground font-medium">{zodiac.element}</p>
          </div>
          <div className="bg-secondary/50 rounded-md px-3 py-2">
            <span className="text-muted-foreground">Ruler</span>
            <p className="text-foreground font-medium">{zodiac.ruler}</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          {zodiac.traits.map(t => (
            <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Nakshatra Card */}
      <div className="bg-card rounded-lg p-6 glow-card border border-accent/10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{nakshatra.symbol}</span>
          <div>
            <h3 className="text-xl font-display text-foreground">{nakshatra.name}</h3>
            <p className="text-sm text-muted-foreground">Nakshatra · {nakshatra.zodiacRange}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-secondary/50 rounded-md px-3 py-2">
            <span className="text-muted-foreground">Deity</span>
            <p className="text-foreground font-medium">{nakshatra.deity}</p>
          </div>
          <div className="bg-secondary/50 rounded-md px-3 py-2">
            <span className="text-muted-foreground">Ruler</span>
            <p className="text-foreground font-medium">{nakshatra.ruler}</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          {nakshatra.qualities.map(q => (
            <span key={q} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent-foreground border border-accent/20 font-medium">
              {q}
            </span>
          ))}
        </div>
      </div>

      {/* Live Mood Card */}
      <div className="bg-card rounded-lg p-6 glow-card border border-celestial/10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{mood.emoji}</span>
          <div>
            <h3 className="text-lg font-display text-foreground">{mood.mood}</h3>
            <p className="text-xs text-muted-foreground tracking-wider uppercase">Live Cosmic Mood</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{mood.description}</p>
      </div>
    </div>
  );
};

export default ResultCard;
