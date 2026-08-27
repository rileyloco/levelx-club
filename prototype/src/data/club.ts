export type LocationStatus = "open" | "coming";

export type Facility = {
  name: string;
  detail: string;
  image?: string;
};

export type TimetableSlot = {
  time: string;
  kind: string;
};

export type TimetableDay = {
  day: string;
  slots: TimetableSlot[];
};

export type ClubLocation = {
  slug: string;
  name: string;
  shortName: string;
  suburb: string;
  region: string;
  status: LocationStatus;
  statusLabel: string;
  address: string;
  phone?: string;
  hours?: string;
  parking?: string;
  eyebrow: string;
  headline: string;
  lede: string;
  body: string[];
  facilities: Facility[];
  amenities: string[];
  timetable: TimetableDay[];
  timetableNote: string;
  image: string;
  gallery?: string[];
  video?: string;
  seoTitle: string;
  seoDescription: string;
};

export type Membership = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  points: string[];
  price: string;
  period: string;
  priceNote: string;
  cta: string;
  ctaTo: string;
  available: boolean;
};

export type ClubEvent = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  time: string;
  locationSlug: string;
  locationLabel: string;
  kind: string;
  summary: string;
  body: string;
  image: string;
};

export type MerchItem = {
  slug: string;
  name: string;
  price: number;
  priceLabel: string;
  summary: string;
};

export const club = {
  name: "Level X Club",
  shortName: "Level X",
  tagline: "Move. Recover. Repeat.",
  email: "admin@levelxclub.com.au",
  instagram: "https://www.instagram.com/levelx.club/",
  instagramHandle: "@levelx.club",
  facebook: "https://www.facebook.com/levelx.club/",
  phone: "(07) 3557 1928",
  region: "Queensland, Australia",
  seoTitle: "Level X Club | Premium Fitness & Recovery, Queensland",
  seoDescription:
    "Level X is a premium fitness and wellness club. World-class training meets luxury wellness, Toowong now open, Queen’s Wharf and the Gold Coast next.",
};

export const values = [
  {
    name: "Excellence",
    copy: "We obsess over the details. From the equipment on our floor to the qualifications of our trainers, everything at Level X is held to the highest standard because you deserve nothing less.",
  },
  {
    name: "Community",
    copy: "Fitness is better together. Our clubs are designed to foster genuine connection between members, trainers, and the wider Level X family. When you join, you belong.",
  },
  {
    name: "Innovation",
    copy: "We never stand still. From cutting-edge recovery technology to progressive training methodologies, we’re constantly evolving to bring you the best in fitness and wellness science.",
  },
  {
    name: "Integrity",
    copy: "Honest coaching, transparent pricing, real results. We don’t do gimmicks or shortcuts, just proven methods delivered by people who genuinely care about your progress.",
  },
  {
    name: "Wellness",
    copy: "True fitness extends beyond the gym floor. We take a holistic approach integrating movement, recovery, nutrition, and mindset to support your complete well-being.",
  },
  {
    name: "Performance",
    copy: "We built Level X for the entrepreneur, the executive, the full-time parent, and everyone in between, because we believe that when your body is performing at its best, every other area of your life follows.",
  },
];

export const pillars = [
  {
    num: "01",
    name: "Fitness",
    copy: "A strength floor fitted to elite standard, full Technogym, Plae Performance, and in-house PT who will not let you coast. Programming that builds week on week.",
  },
  {
    num: "02",
    name: "Recovery",
    copy: "Sauna, Fjord cold plunge, compression, HBOT and red light sit next to the floor. Not add-ons. As core to Level X as the squat rack.",
  },
  {
    num: "03",
    name: "Mindset",
    copy: "Run club. Breathwork. A community that treats standards as a kindness. Progress you can see, track and keep.",
  },
];

export const offerings = [
  {
    name: "Strength Floor",
    copy: "Our strength floor is purpose-built for serious training. Fitted out with a full Technogym setup alongside our Plae Performance rigs, every piece of equipment is selected to support athletes and members across all levels.",
    image: "/images/gym-wide.jpg",
  },
  {
    name: "Level X App",
    copy: "The Level X app puts programming, progression and tracking in your hands, connected to interactive equipment across the floor so every set, session and milestone is captured.",
    image: "/images/training-bench.jpg",
  },
  {
    name: "Steam Sauna",
    copy: "Our traditional steam sauna, fitted with a luxury heater for even heat circulation, provides a refined environment designed to bridge the gap between performance and restoration.",
    image: "/images/sauna.jpg",
  },
  {
    name: "Fjord Cold Plunge",
    copy: "Our Fjord cold plunge baths offer a sophisticated approach to systemic recovery, engineered to sharpen mental clarity and neutralise inflammation.",
    image: "/images/plunge-room.jpg",
  },
  {
    name: "Compression",
    copy: "After a heavy session, our compression therapy helps flush the muscles and accelerate recovery between sets and between sessions.",
    image: "/images/plunge-enter.jpg",
  },
  {
    name: "HBOT",
    copy: "Our HBOT chambers increase the amount of oxygen circulating through your bloodstream, supporting faster tissue repair and reduced inflammation at a cellular level.",
    image: "/images/green-light.jpg",
  },
  {
    name: "Red Light",
    copy: "Red light therapy is used to support muscle repair, reduce inflammation and improve skin and tissue recovery, layering onto our other modalities for a complete post-training reset.",
    image: "/images/red-light.jpg",
  },
  {
    name: "Community",
    copy: "Beyond the floor, our run club and breathwork classes bring the community and mindset work into the mix, because performance isn’t only built under a barbell.",
    image: "/images/sauna-members.jpg",
  },
];

const toowongTimetable: TimetableDay[] = [
  {
    day: "Mon",
    slots: [
      { time: "6:00am", kind: "Group session" },
      { time: "12:15pm", kind: "Workshop" },
      { time: "6:00pm", kind: "Group session" },
    ],
  },
  {
    day: "Tue",
    slots: [
      { time: "6:00am", kind: "Group session" },
      { time: "5:45pm", kind: "Workshop" },
    ],
  },
  {
    day: "Wed",
    slots: [
      { time: "6:00am", kind: "Group session" },
      { time: "12:15pm", kind: "Recovery clinic" },
      { time: "6:00pm", kind: "Group session" },
    ],
  },
  {
    day: "Thu",
    slots: [
      { time: "5:45am", kind: "Community run" },
      { time: "6:00pm", kind: "Group session" },
    ],
  },
  {
    day: "Fri",
    slots: [
      { time: "6:00am", kind: "Group session" },
      { time: "12:15pm", kind: "Workshop" },
    ],
  },
  {
    day: "Sat",
    slots: [
      { time: "8:00am", kind: "Workshop" },
      { time: "10:00am", kind: "Recovery clinic" },
    ],
  },
  { day: "Sun", slots: [{ time: "9:00am", kind: "Recovery clinic" }] },
];

export const locations: ClubLocation[] = [
  {
    slug: "toowong",
    name: "Level X Toowong",
    shortName: "Toowong",
    suburb: "Toowong",
    region: "Brisbane, QLD",
    status: "open",
    statusLabel: "Now open",
    address: "Suite 6/37 Archer Street, Toowong QLD 4066",
    phone: "(07) 3557 1928",
    hours: "Monday-Sunday, 5am-10pm",
    parking: "On-site and street parking. Inner-west buses and CityCat nearby.",
    eyebrow: "Location 01, Brisbane",
    headline: "Toowong",
    lede: "Level X Toowong is where performance meets recovery. This is training and recovery under one roof.",
    body: [
      "Level X Toowong is where performance meets recovery. Train on a full Technogym fit-out alongside a Plae Performance setup, with in-house PT services to guide every session. The Level X app puts programming, progression tracking and interactive equipment in your pocket, so every workout builds on the last.",
      "Recovery is built in, not bolted on. After a heavy session, start with compression therapy to flush the muscles, then finish with contrast therapy, a plunge in our Fjord cold baths paired with our traditional steam sauna, fitted with a luxury heater for even heat circulation. Round it out with HBOT and red light therapy machines to speed up recovery and sharpen performance.",
      "Beyond the floor, our run club and breathwork classes round out the community and mindset side of training. This is training and recovery under one roof, Level X Toowong.",
    ],
    facilities: [
      {
        name: "Technogym + Plae floor",
        detail: "Full strength and performance fit-out for serious training at every level.",
        image: "/images/strength-floor.jpg",
      },
      {
        name: "Fjord cold plunge",
        detail: "Contrast therapy, morning priming, dedicated recovery days.",
        image: "/images/plunge-room.jpg",
      },
      {
        name: "Traditional steam sauna",
        detail: "Luxury heater, even heat, the quiet work of restoration.",
        image: "/images/sauna.jpg",
      },
      {
        name: "HBOT + red light",
        detail: "Cellular recovery layered onto the rest of the suite.",
        image: "/images/red-light.jpg",
      },
    ],
    amenities: [
      "In-house personal training",
      "Level X app programming",
      "Compression therapy",
      "Run club",
      "Breathwork",
      "Member recovery suite",
    ],
    timetable: toowongTimetable,
    timetableNote:
      "We offer various classes weekly, including Strength, Reformer Pilates, Yoga, Boxing, Cycle, and Functional Fitness. For class breakdowns and timetables contact us via email.",
    image: "/images/gym-wide.jpg",
    gallery: [
      "/images/gym-wide.jpg",
      "/images/strength-floor.jpg",
      "/images/training-bench.jpg",
      "/images/training-curl.jpg",
      "/images/plunge-room.jpg",
      "/images/plunge-members.jpg",
      "/images/sauna.jpg",
      "/images/sauna-members.jpg",
      "/images/red-light.jpg",
      "/images/green-light.jpg",
      "/images/change-room.jpg",
      "/images/shower.jpg",
    ],
    seoTitle: "Level X Toowong | Now Open, Fitness & Recovery Club Brisbane",
    seoDescription:
      "Level X Toowong is open at 37 Archer Street. Technogym and Plae training, Fjord cold plunge, sauna, HBOT and red light. Apply for membership.",
  },
  {
    slug: "queens-wharf",
    name: "Level X Queen’s Wharf",
    shortName: "Queen’s Wharf",
    suburb: "Brisbane CBD",
    region: "Brisbane, QLD",
    status: "coming",
    statusLabel: "Coming soon",
    address: "Queen’s Wharf, Brisbane",
    eyebrow: "Location 02",
    headline: "Queen’s Wharf",
    lede: "Coming soon.",
    body: [],
    facilities: [],
    amenities: [],
    timetable: [],
    timetableNote: "",
    image: "/images/queens-wharf.jpg",
    seoTitle: "Level X Queen’s Wharf | Coming Soon",
    seoDescription:
      "Level X Queen’s Wharf is coming soon. Register your interest.",
  },
  {
    slug: "gold-coast",
    name: "Level X Gold Coast",
    shortName: "Gold Coast",
    suburb: "Gold Coast",
    region: "Gold Coast, QLD",
    status: "coming",
    statusLabel: "Coming soon",
    address: "Gold Coast, Queensland",
    eyebrow: "Location 03",
    headline: "Gold Coast",
    lede: "Coming soon.",
    body: [],
    facilities: [],
    amenities: [],
    timetable: [],
    timetableNote: "",
    image: "/images/gold-coast.jpg",
    seoTitle: "Level X Gold Coast | Coming Soon",
    seoDescription:
      "Level X is coming to the Gold Coast. Register your interest.",
  },
];

export const memberships: Membership[] = [
  {
    slug: "foundation",
    name: "Foundation",
    kicker: "Toowong",
    summary: "The original club. Price locked. First in the network.",
    points: [
      "$0 start-up fee",
      "No lock-in · price locked 2 years",
      "Floor, recovery, events, app",
    ],
    price: "$79",
    period: "/ week",
    priceNote: "Or $343 / month. Prototype pricing.",
    cta: "Apply now",
    ctaTo: "/apply?plan=foundation&location=toowong",
    available: true,
  },
  {
    slug: "club",
    name: "Club",
    kicker: "By application",
    summary: "The ongoing Level X membership at your home club.",
    points: [
      "Full club + recovery suite",
      "Weekly or monthly",
      "Events, run club, app",
    ],
    price: "$99",
    period: "/ week",
    priceNote: "Or $429 / month. Prototype pricing.",
    cta: "Apply now",
    ctaTo: "/apply?plan=club",
    available: true,
  },
  {
    slug: "flagship",
    name: "Flagship",
    kicker: "Queen’s Wharf & Gold Coast",
    summary: "Not open yet. First in when the doors are named.",
    points: [
      "Early briefings",
      "Priority at new locations",
      "No obligation",
    ],
    price: "TBA",
    period: "",
    priceNote: "Register interest. Price announced at opening.",
    cta: "Register interest",
    ctaTo: "/apply?plan=flagship",
    available: false,
  },
];

export const events: ClubEvent[] = [
  {
    slug: "toowong-run-club",
    title: "Toowong Run Club",
    date: "2026-08-21",
    dateLabel: "Thu 21 Aug",
    time: "5:45am",
    locationSlug: "toowong",
    locationLabel: "Toowong",
    kind: "Community",
    summary: "Pre-dawn kilometres with the club. All paces.",
    body: "Meet at the Archer Street doors. An easy-to-honest loop through the inner west, then back to the club. Members and applicants welcome, just tell us you are coming.",
    image: "/images/training-curl.jpg",
  },
  {
    slug: "breathwork-reset",
    title: "Breathwork Reset",
    date: "2026-08-23",
    dateLabel: "Sat 23 Aug",
    time: "8:00am",
    locationSlug: "toowong",
    locationLabel: "Toowong",
    kind: "Mindset",
    summary: "Down-regulate after the week. A guided hour.",
    body: "A seated, coached breathwork session designed to close the stress loop training opens. Limited spots. Members first, then applicants on the waitlist.",
    image: "/images/sauna.jpg",
  },
  {
    slug: "foundation-tour",
    title: "Foundation Member Tour",
    date: "2026-08-26",
    dateLabel: "Tue 26 Aug",
    time: "6:30pm",
    locationSlug: "toowong",
    locationLabel: "Toowong",
    kind: "Membership",
    summary: "Walk the floor. Meet the team.",
    body: "A small-group evening through the Toowong club, strength floor, recovery suite, and an honest conversation about Foundation membership. Apply first, then we save you a place.",
    image: "/images/gym-wide.jpg",
  },
  {
    slug: "contrast-clinic",
    title: "Contrast Therapy Clinic",
    date: "2026-08-29",
    dateLabel: "Fri 29 Aug",
    time: "7:00am",
    locationSlug: "toowong",
    locationLabel: "Toowong",
    kind: "Recovery",
    summary: "How we use heat and cold so they serve the work, not undo it.",
    body: "A practical briefing on Fjord plunge and steam protocol, when to go cold, when to stay out of it after lifting, and how to build contrast into a week that still makes you stronger.",
    image: "/images/plunge-room.jpg",
  },
  {
    slug: "queens-wharf-briefing",
    title: "Queen’s Wharf Briefing",
    date: "2026-09-10",
    dateLabel: "Thu 10 Sep",
    time: "6:00pm",
    locationSlug: "queens-wharf",
    locationLabel: "Queen’s Wharf",
    kind: "Preview",
    summary: "The flagship, in conversation. What we are building and who it is for.",
    body: "A briefing for members and registered interest on the Queen’s Wharf club, performance zone, bathhouse, nutrition, and the timeline as it stands.",
    image: "/images/queens-wharf.jpg",
  },
  {
    slug: "gold-coast-register",
    title: "Gold Coast Register Night",
    date: "2026-09-18",
    dateLabel: "Fri 18 Sep",
    time: "6:30pm",
    locationSlug: "gold-coast",
    locationLabel: "Gold Coast",
    kind: "Preview",
    summary: "Same standard. New coastline.",
    body: "An evening for people who want Level X on the Gold Coast. We will share what we can, take names, and keep the standard honest.",
    image: "/images/gold-coast.jpg",
  },
];

export const trainers = [
  {
    slug: "benny-lucas",
    name: "Benny Lucas",
    role: "Head Trainer",
    focus: ["Strength", "Conditioning", "Recovery", "Programming"],
    bio: "Benny brings elite-level expertise and a passion for helping members unlock their full potential. His approach is built around performance, precision and results, strength, conditioning and recovery treated as one practice.",
    image: "/images/trainer-benny.jpg",
  },
];

export const faqs = [
  {
    q: "What is Level X Club?",
    a: "Level X is a premium fitness and wellness club with locations across Queensland. We offer state-of-the-art gym facilities, group fitness classes, elite personal training, and comprehensive recovery services including infrared sauna, ice baths, and sports massage.",
  },
  {
    q: "How much does membership cost?",
    a: "Membership pricing varies by location and plan type. We offer flexible options including weekly, monthly, and annual memberships. Contact our team or visit your nearest club for a personalised quote and tour.",
  },
  {
    q: "Do I need to be experienced to join?",
    a: "Not at all. Level X welcomes members of all fitness levels. Our trainers are experienced in working with beginners through to elite athletes, and our classes cater to a range of abilities. We’ll help you find the right starting point.",
  },
  {
    q: "What classes do you offer?",
    a: "We offer various classes weekly across selected locations, including Strength, Reformer Pilates, Yoga, Boxing, Cycle, and Functional Fitness. For class breakdowns and timetables contact us via email.",
  },
  {
    q: "What recovery services are available?",
    a: "A curated suite of recovery and longevity protocols, built around what serious performers rely on. Sauna, steam, contrast therapy, compression, red light and hyperbaric treatment, each chosen with purpose. Available exclusively to members. Speak with our team to explore what your location offers.",
  },
  {
    q: "Is there parking available?",
    a: "Yes, all our club locations offer convenient parking options. Details vary by location, check your specific club page for parking information and nearby public transport options.",
  },
];

export const reviews = [
  "The floor is serious.",
  "Not a gym. A club.",
  "Toowong set the standard.",
  "Recovery is the point.",
  "They will not let you coast.",
  "Heat, then cold, then work.",
  "Standards as a kindness.",
  "Under one roof.",
];

export const applyGoals = [
  "Strength & physique",
  "Performance & sport",
  "Recovery & longevity",
  "Fat loss & recomposition",
  "General health",
  "Not sure yet",
];

export const merch: MerchItem[] = [
  {
    slug: "club-tee",
    name: "Club tee",
    price: 65,
    priceLabel: "$65",
    summary: "Heavyweight cotton. Level X mark.",
  },
  {
    slug: "cap",
    name: "Cap",
    price: 45,
    priceLabel: "$45",
    summary: "Structured cap. Embroidered X.",
  },
  {
    slug: "towel",
    name: "Towel",
    price: 40,
    priceLabel: "$40",
    summary: "Club towel. Floor and recovery.",
  },
  {
    slug: "bottle",
    name: "Bottle",
    price: 35,
    priceLabel: "$35",
    summary: "Insulated bottle. Club standard.",
  },
];

export function locationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function merchBySlug(slug: string) {
  return merch.find((item) => item.slug === slug);
}

export function eventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function eventsForLocation(slug: string) {
  return events.filter((e) => e.locationSlug === slug);
}
