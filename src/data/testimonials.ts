export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  before: string;
  process: string;
  result: string;
  highlight: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Austin, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    before: "Chronic bloating, afternoon crashes, and stubborn belly fat despite years of dieting.",
    process: "Completed the 12-week Hormone Harmony Framework with personalized nutrition and cycle-synced movement.",
    result: "Lost 18 lbs sustainably, energy stable all day, and PMS symptoms reduced by 80%.",
    highlight: "I finally understand my body instead of fighting it.",
  },
  {
    id: "2",
    name: "Jennifer Park",
    location: "Seattle, WA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    before: "Severe digestive issues, mood swings, and feeling disconnected from my health.",
    process: "Joined the Gut Cleanse Program with targeted protocols and stress-management coaching.",
    result: "Digestion normalized within 6 weeks, clearer skin, and consistent positive mood.",
    highlight: "This changed how I eat, think, and live every single day.",
  },
  {
    id: "3",
    name: "Michelle Rodriguez",
    location: "Miami, FL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    before: "Weight loss plateau, poor sleep, and overwhelming sugar cravings every evening.",
    process: "Enrolled in the 4-Week Metabolic Fat Loss Kickstarter with metabolic reset strategies.",
    result: "Dropped 12 lbs, sleep quality improved dramatically, cravings virtually eliminated.",
    highlight: "No extreme dieting — just science-backed strategies that actually work.",
  },
  {
    id: "4",
    name: "Amanda Chen",
    location: "Denver, CO",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    before: "Irregular cycles, hormonal acne, and constant fatigue affecting my career.",
    process: "Personalized hormone support through the Hormone Harmony Framework.",
    result: "Cycles regulated, skin cleared, and energy levels restored to pre-burnout levels.",
    highlight: "I feel like myself again — confident and vibrant.",
  },
  {
    id: "5",
    name: "Rachel Thompson",
    location: "Chicago, IL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
    before: "Stress eating, brain fog, and inability to lose weight after two pregnancies.",
    process: "Holistic lifestyle transformation combining gut health and metabolic coaching.",
    result: "Lost 22 lbs, mental clarity returned, and developed a peaceful relationship with food.",
    highlight: "The most supportive coaching experience I've ever had.",
  },
];

export const testimonialStats = [
  { value: "100+", label: "Women Helped" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "4.9/5", label: "Average Rating" },
];

export type VideoTestimonial = {
  id: string;
  name: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "v1",
    name: "Sarah M.",
    title: "From Bloated to Balanced",
    duration: "2:34",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
    videoUrl: "#",
  },
  {
    id: "v2",
    name: "Jennifer P.",
    title: "My Gut Health Journey",
    duration: "3:12",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop",
    videoUrl: "#",
  },
  {
    id: "v3",
    name: "Michelle R.",
    title: "Sustainable Weight Loss Story",
    duration: "2:48",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-88c28a28cf66?w=600&h=400&fit=crop",
    videoUrl: "#",
  },
];
