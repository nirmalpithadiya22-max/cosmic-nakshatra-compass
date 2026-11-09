import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, Sparkles, User, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LiveModePanel from "@/components/LiveModePanel";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import ZodiacWheel from "@/components/ZodiacWheel";
import NakshatraGrid from "@/components/NakshatraGrid";
import ResultCard from "@/components/ResultCard";
import { getZodiacSign, getNakshatraFromDay, getDayOfYear, getLiveMood, zodiacSigns, nakshatras } from "@/data/astrology";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const Index = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("12:00");
  const [result, setResult] = useState<{
    zodiacIndex: number;
    nakshatraIndex: number;
  } | null>(null);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [liveMode, setLiveMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setCurrentHour(new Date().getHours()), 60000);
    return () => clearInterval(interval);
  }, []);

  const handleReveal = () => {
    if (!name.trim() || !date) return;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const zodiac = getZodiacSign(month, day);
    const dayOfYear = getDayOfYear(month, day);
    const nakshatra = getNakshatraFromDay(dayOfYear);
    const zodiacIndex = zodiacSigns.findIndex(z => z.name === zodiac?.name);
    const nakshatraIndex = nakshatras.findIndex(n => n.name === nakshatra.name);
    setResult({ zodiacIndex, nakshatraIndex });
  };

  const zodiac = result ? zodiacSigns[result.zodiacIndex] : null;
  const nakshatra = result ? nakshatras[result.nakshatraIndex] : null;
  const mood = getLiveMood(currentHour);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      />
      <div className="fixed inset-0 cosmic-gradient opacity-80" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center pt-12 pb-6 px-4">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2 font-body">Vedic Astrology</p>
          <h1 className="text-4xl sm:text-5xl font-display text-gold-glow leading-tight">
            Celestial Insight
          </h1>
          <p className="text-muted-foreground mt-2 text-sm max-w-md mx-auto font-body">
            Discover your zodiac sign, nakshatra, and live cosmic mood
          </p>
          {/* Live Mode Toggle */}
          <button
            onClick={() => setLiveMode(!liveMode)}
            className={`mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full border text-xs uppercase tracking-widest font-body transition-all duration-300 ${
              liveMode
                ? "bg-primary/20 border-primary text-primary shadow-[0_0_20px_hsl(40,85%,55%,0.2)]"
                : "bg-secondary/50 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            <Radio size={12} className={liveMode ? "animate-pulse" : ""} />
            {liveMode ? "Live Mode On" : "Live Mode"}
          </button>
        </header>

        <div className="flex-1 max-w-5xl mx-auto w-full px-4 pb-12 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Input + Wheel */}
          <div className="space-y-8">
            {/* Zodiac Wheel */}
            <ZodiacWheel activeIndex={result?.zodiacIndex ?? null} />

            {/* Input Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border glow-card space-y-4">
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground uppercase tracking-wider font-body flex items-center gap-1.5">
                  <User size={12} /> Name
                </label>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="bg-secondary/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-muted-foreground uppercase tracking-wider font-body flex items-center gap-1.5">
                  <CalendarIcon size={12} /> Birth Date
                </label>
                <div className="flex gap-2">
                  <Input
                    type="date"
                    value={date ? format(date, "yyyy-MM-dd") : ""}
                    onChange={e => {
                      const val = e.target.value;
                      if (val) {
                        const parsed = new Date(val + "T00:00:00");
                        if (!isNaN(parsed.getTime())) setDate(parsed);
                      } else {
                        setDate(undefined);
                      }
                    }}
                    max={format(new Date(), "yyyy-MM-dd")}
                    className="bg-secondary/50 border-border flex-1"
                    placeholder="DD/MM/YYYY"
                  />
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="icon" className="bg-secondary/50 border-border shrink-0">
                        <CalendarIcon className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border" align="end">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d > new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-muted-foreground uppercase tracking-wider font-body flex items-center gap-1.5">
                  <Clock size={12} /> Birth Time
                </label>
                <Input
                  type="time"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  className="bg-secondary/50 border-border"
                />
              </div>

              <Button
                onClick={handleReveal}
                disabled={!name.trim() || !date}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Reveal My Stars
              </Button>
            </div>

            {/* Nakshatra Grid */}
            <NakshatraGrid activeIndex={result?.nakshatraIndex ?? null} />
          </div>

          {/* Right: Results or Live Mode */}
          <div className="lg:sticky lg:top-8 space-y-8">
            {liveMode && <LiveModePanel />}

            {result && zodiac && nakshatra ? (
              <ResultCard
                name={name}
                zodiac={zodiac}
                nakshatra={nakshatra}
                mood={mood}
                birthDate={date ? format(date, "PPP") : ""}
                birthTime={time}
              />
            ) : !liveMode ? (
              <div className="flex flex-col items-center justify-center h-96 text-center space-y-4 opacity-50">
                <div className="text-6xl animate-float">✨</div>
                <p className="font-display text-lg text-muted-foreground">
                  Enter your details to unveil<br />your celestial blueprint
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
