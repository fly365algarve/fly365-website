// PRICES TO BE CONFIRMED BY FLY365
export const site = {
  name: "Fly365 Algarve",
  domain: "https://fly365algarve.co.uk",
  aerodrome: { lat: 37.122110, lng: -8.679058 },
  contact: {
    portugalPhones: [
      {
        label: "+351 967 456 156",
        tel: "+351967456156",
        whatsappUrl: "https://wa.me/351967456156",
      },
      {
        label: "+351 936 445 501",
        tel: "+351936445501",
        whatsappUrl: "https://wa.me/351936445501",
      },
    ],
    ukPhone: { label: "+44 7984 368 253", tel: "+447984368253" },
    whatsappUrl: "https://wa.me/351967456156",
    email: "fly365algarve@gmail.com",
    address: "Aeródromo de Lagos, 8600 Lagos, Portugal",
  },
  trialFlights: [
    { minutes: 20, price: 60, route: "Grottos and back" },
    { minutes: 30, price: 85, route: "Grottos and coast to Salema" },
    { minutes: 45, price: 140, route: "Grottos, west coast and Sagres area" },
    { minutes: 60, price: 185, route: "Grottos, west coast and further around Sagres" },
  ],
  training: {
    prepaidHours: [
      { hours: 1, rate: 175, total: 175 },
      { hours: 5, rate: 170, total: 850 },
      { hours: 10, rate: 160, total: 1600 },
      { hours: 20, rate: 150, total: 3000 },
    ],
    extraHourRate: 175,
    generalSkillsTest: 170,
    groundExam: 50,
    groundSchoolHour: 50,
    bookingDepositPercent: 10,
    balanceDueWeeksBefore: 2,
  },
  courses: [
    { title: "One week", hours: 10 },
    { title: "Two weeks", hours: 20 },
    { title: "Conversion", hours: "5–10" },
  ],
  facts: {
    flyingDays: 320,
    runway: "Tarmac runway",
    townDistanceKm: 2,
    winterWeather: "Mild winters",
    maxStudentsPerWeek: 2,
  },
  team: [
    { name: "Zeth Devenish", role: "Fixed-wing instructor", experience: "More than 2,000 hours", initials: "ZD", photo: "/images/zeth.jpg" },
    { name: "Colin Gordon", role: "Principal flexwing instructor", experience: "Instructing since 2003", initials: "CG", photo: "/images/colin.jpg" },
  ],
  reviews: [] as Array<{ quote: string; author: string; source?: string; url?: string }>,
  reviewLinks: {} as Record<string, string>,
  fixedWing: {
    name: "Ikarus C42",
    aircraftCount: 3,
    engine: "Rotax 912S 100 hp",
    description:
      "A high-wing, side-by-side two-seat, 3-axis microlight with a single centre stick. Designed with the beginner in mind, it is very forgiving yet lively. Light control forces and the use of rudder pedals make later conversion to other aircraft easier.",
  },
} as const;
