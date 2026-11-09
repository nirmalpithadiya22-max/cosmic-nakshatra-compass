export interface ZodiacSign {
  name: string;
  symbol: string;
  dateRange: string;
  element: string;
  ruler: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  traits: string[];
  color: string;
}

export interface Nakshatra {
  name: string;
  deity: string;
  symbol: string;
  ruler: string;
  zodiacRange: string;
  qualities: string[];
}

export const zodiacSigns: ZodiacSign[] = [
  { name: "Aries", symbol: "♈", dateRange: "Mar 21 – Apr 19", element: "Fire", ruler: "Mars", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19, traits: ["Bold", "Ambitious", "Energetic"], color: "0 70% 55%" },
  { name: "Taurus", symbol: "♉", dateRange: "Apr 20 – May 20", element: "Earth", ruler: "Venus", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, traits: ["Reliable", "Patient", "Devoted"], color: "140 40% 45%" },
  { name: "Gemini", symbol: "♊", dateRange: "May 21 – Jun 20", element: "Air", ruler: "Mercury", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20, traits: ["Curious", "Adaptable", "Witty"], color: "50 80% 55%" },
  { name: "Cancer", symbol: "♋", dateRange: "Jun 21 – Jul 22", element: "Water", ruler: "Moon", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22, traits: ["Intuitive", "Sentimental", "Protective"], color: "200 50% 55%" },
  { name: "Leo", symbol: "♌", dateRange: "Jul 23 – Aug 22", element: "Fire", ruler: "Sun", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, traits: ["Dramatic", "Creative", "Generous"], color: "30 90% 55%" },
  { name: "Virgo", symbol: "♍", dateRange: "Aug 23 – Sep 22", element: "Earth", ruler: "Mercury", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, traits: ["Analytical", "Practical", "Loyal"], color: "90 35% 45%" },
  { name: "Libra", symbol: "♎", dateRange: "Sep 23 – Oct 22", element: "Air", ruler: "Venus", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22, traits: ["Diplomatic", "Gracious", "Fair"], color: "330 50% 60%" },
  { name: "Scorpio", symbol: "♏", dateRange: "Oct 23 – Nov 21", element: "Water", ruler: "Pluto", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21, traits: ["Resourceful", "Passionate", "Brave"], color: "0 60% 40%" },
  { name: "Sagittarius", symbol: "♐", dateRange: "Nov 22 – Dec 21", element: "Fire", ruler: "Jupiter", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21, traits: ["Generous", "Idealistic", "Humorous"], color: "270 50% 55%" },
  { name: "Capricorn", symbol: "♑", dateRange: "Dec 22 – Jan 19", element: "Earth", ruler: "Saturn", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19, traits: ["Responsible", "Disciplined", "Self-control"], color: "220 30% 40%" },
  { name: "Aquarius", symbol: "♒", dateRange: "Jan 20 – Feb 18", element: "Air", ruler: "Uranus", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, traits: ["Progressive", "Original", "Independent"], color: "190 70% 50%" },
  { name: "Pisces", symbol: "♓", dateRange: "Feb 19 – Mar 20", element: "Water", ruler: "Neptune", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, traits: ["Compassionate", "Artistic", "Intuitive"], color: "250 50% 60%" },
];

export const nakshatras: Nakshatra[] = [
  { name: "Ashwini", deity: "Ashwini Kumaras", symbol: "🐴", ruler: "Ketu", zodiacRange: "Aries 0°–13°20'", qualities: ["Swift", "Healing", "Pioneering"] },
  { name: "Bharani", deity: "Yama", symbol: "🔺", ruler: "Venus", zodiacRange: "Aries 13°20'–26°40'", qualities: ["Creative", "Nurturing", "Transformative"] },
  { name: "Krittika", deity: "Agni", symbol: "🔥", ruler: "Sun", zodiacRange: "Aries 26°40'–Taurus 10°", qualities: ["Sharp", "Purifying", "Courageous"] },
  { name: "Rohini", deity: "Brahma", symbol: "🐂", ruler: "Moon", zodiacRange: "Taurus 10°–23°20'", qualities: ["Beautiful", "Fertile", "Magnetic"] },
  { name: "Mrigashira", deity: "Soma", symbol: "🦌", ruler: "Mars", zodiacRange: "Taurus 23°20'–Gemini 6°40'", qualities: ["Searching", "Gentle", "Curious"] },
  { name: "Ardra", deity: "Rudra", symbol: "💧", ruler: "Rahu", zodiacRange: "Gemini 6°40'–20°", qualities: ["Stormy", "Intellectual", "Transforming"] },
  { name: "Punarvasu", deity: "Aditi", symbol: "🏹", ruler: "Jupiter", zodiacRange: "Gemini 20°–Cancer 3°20'", qualities: ["Renewing", "Prosperous", "Wise"] },
  { name: "Pushya", deity: "Brihaspati", symbol: "🌸", ruler: "Saturn", zodiacRange: "Cancer 3°20'–16°40'", qualities: ["Nourishing", "Auspicious", "Protective"] },
  { name: "Ashlesha", deity: "Nagas", symbol: "🐍", ruler: "Mercury", zodiacRange: "Cancer 16°40'–30°", qualities: ["Mystical", "Hypnotic", "Cunning"] },
  { name: "Magha", deity: "Pitris", symbol: "👑", ruler: "Ketu", zodiacRange: "Leo 0°–13°20'", qualities: ["Royal", "Ancestral", "Authoritative"] },
  { name: "Purva Phalguni", deity: "Bhaga", symbol: "🛏️", ruler: "Venus", zodiacRange: "Leo 13°20'–26°40'", qualities: ["Creative", "Romantic", "Joyful"] },
  { name: "Uttara Phalguni", deity: "Aryaman", symbol: "☀️", ruler: "Sun", zodiacRange: "Leo 26°40'–Virgo 10°", qualities: ["Generous", "Helpful", "Loyal"] },
  { name: "Hasta", deity: "Savitar", symbol: "✋", ruler: "Moon", zodiacRange: "Virgo 10°–23°20'", qualities: ["Skillful", "Creative", "Healing"] },
  { name: "Chitra", deity: "Vishvakarma", symbol: "💎", ruler: "Mars", zodiacRange: "Virgo 23°20'–Libra 6°40'", qualities: ["Brilliant", "Artistic", "Elegant"] },
  { name: "Swati", deity: "Vayu", symbol: "🌬️", ruler: "Rahu", zodiacRange: "Libra 6°40'–20°", qualities: ["Independent", "Flexible", "Diplomatic"] },
  { name: "Vishakha", deity: "Indra-Agni", symbol: "🌳", ruler: "Jupiter", zodiacRange: "Libra 20°–Scorpio 3°20'", qualities: ["Determined", "Ambitious", "Focused"] },
  { name: "Anuradha", deity: "Mitra", symbol: "🌺", ruler: "Saturn", zodiacRange: "Scorpio 3°20'–16°40'", qualities: ["Devoted", "Friendly", "Successful"] },
  { name: "Jyeshtha", deity: "Indra", symbol: "⭐", ruler: "Mercury", zodiacRange: "Scorpio 16°40'–30°", qualities: ["Protective", "Senior", "Wise"] },
  { name: "Mula", deity: "Nirriti", symbol: "🌿", ruler: "Ketu", zodiacRange: "Sagittarius 0°–13°20'", qualities: ["Rooted", "Investigative", "Philosophical"] },
  { name: "Purva Ashadha", deity: "Apas", symbol: "🌊", ruler: "Venus", zodiacRange: "Sagittarius 13°20'–26°40'", qualities: ["Invincible", "Purifying", "Ambitious"] },
  { name: "Uttara Ashadha", deity: "Vishve Devas", symbol: "🏔️", ruler: "Sun", zodiacRange: "Sagittarius 26°40'–Capricorn 10°", qualities: ["Victorious", "Universal", "Righteous"] },
  { name: "Shravana", deity: "Vishnu", symbol: "👂", ruler: "Moon", zodiacRange: "Capricorn 10°–23°20'", qualities: ["Listening", "Learning", "Connected"] },
  { name: "Dhanishta", deity: "Vasus", symbol: "🥁", ruler: "Mars", zodiacRange: "Capricorn 23°20'–Aquarius 6°40'", qualities: ["Wealthy", "Musical", "Adaptable"] },
  { name: "Shatabhisha", deity: "Varuna", symbol: "💫", ruler: "Rahu", zodiacRange: "Aquarius 6°40'–20°", qualities: ["Healing", "Mystical", "Independent"] },
  { name: "Purva Bhadrapada", deity: "Aja Ekapada", symbol: "⚡", ruler: "Jupiter", zodiacRange: "Aquarius 20°–Pisces 3°20'", qualities: ["Transformative", "Fiery", "Spiritual"] },
  { name: "Uttara Bhadrapada", deity: "Ahir Budhnya", symbol: "🌙", ruler: "Saturn", zodiacRange: "Pisces 3°20'–16°40'", qualities: ["Deep", "Wise", "Controlled"] },
  { name: "Revati", deity: "Pushan", symbol: "🐟", ruler: "Mercury", zodiacRange: "Pisces 16°40'–30°", qualities: ["Nurturing", "Wealthy", "Transcendent"] },
];

export function getZodiacSign(month: number, day: number): ZodiacSign | null {
  for (const sign of zodiacSigns) {
    if (sign.startMonth === sign.endMonth) {
      if (month === sign.startMonth && day >= sign.startDay && day <= sign.endDay) return sign;
    } else if (sign.startMonth < sign.endMonth) {
      if ((month === sign.startMonth && day >= sign.startDay) || (month === sign.endMonth && day <= sign.endDay)) return sign;
    } else {
      // Capricorn wraps around
      if ((month === sign.startMonth && day >= sign.startDay) || (month === sign.endMonth && day <= sign.endDay)) return sign;
    }
  }
  return zodiacSigns[0];
}

export function getNakshatraFromDay(dayOfYear: number): Nakshatra {
  const index = Math.floor((dayOfYear / 365) * 27) % 27;
  return nakshatras[index];
}

export function getDayOfYear(month: number, day: number): number {
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayOfYear = day;
  for (let i = 1; i < month; i++) {
    dayOfYear += daysInMonth[i];
  }
  return dayOfYear;
}

export interface MoodInfo {
  mood: string;
  emoji: string;
  description: string;
  color: string;
}

export function getLiveMood(hour: number): MoodInfo {
  if (hour >= 5 && hour < 8) return { mood: "Dawn Energy", emoji: "🌅", description: "A time of fresh beginnings and clarity. Your mind is sharp and receptive.", color: "30 80% 60%" };
  if (hour >= 8 && hour < 12) return { mood: "Solar Power", emoji: "☀️", description: "Peak creative energy. The cosmos favor bold decisions and action.", color: "40 90% 55%" };
  if (hour >= 12 && hour < 15) return { mood: "Zenith Balance", emoji: "⚖️", description: "A moment of equilibrium. Reflect on your path and align your intentions.", color: "45 70% 50%" };
  if (hour >= 15 && hour < 18) return { mood: "Golden Hour", emoji: "🌤️", description: "Warmth and wisdom flow. Ideal for nurturing relationships and creativity.", color: "35 85% 55%" };
  if (hour >= 18 && hour < 21) return { mood: "Twilight Mystery", emoji: "🌆", description: "The veil thins between worlds. Intuition is heightened.", color: "265 45% 50%" };
  if (hour >= 21 && hour < 24) return { mood: "Lunar Reflection", emoji: "🌙", description: "Deep inner wisdom awakens. Dreams hold prophetic messages tonight.", color: "220 50% 45%" };
  return { mood: "Cosmic Silence", emoji: "✨", description: "The universe whispers secrets in the stillness. Meditate and listen.", color: "250 40% 40%" };
}
