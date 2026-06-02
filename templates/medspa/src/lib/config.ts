import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Advanced Aesthetics",
    tagline: "Enhance Your Natural Beauty Today",
    phone: "(702) 555-1234",
    phoneHref: "tel:+17025551234",
    email: "info@advancedaesthetics.com",
    address: "123 Aesthetic Ave, Las Vegas, NV 89109",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas", "San Diego", "Dallas"],
    license: "NV Medical Board #12345",
    since: "2018",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox & Dysport", desc: "Smooth away wrinkles and fine lines for a refreshed, youthful appearance.", urgent: false },
    { icon: "heart", title: "Dermal Fillers", desc: "Restore volume, contour features, and enhance lips with premium Juvéderm and Restylane®.", urgent: false },
    { icon: "scissors", title: "Body Contouring", desc: "Sculpt your ideal physique with advanced treatments like Coolsculpting and Morpheus8.", urgent: false },
    { icon: "zap", title: "Laser Treatments", desc: "Achieve clear, radiant skin with laser hair removal, tattoo removal, and CO2 laser treatments.", urgent: false },
    { icon: "droplets", title: "Skincare & Facials", desc: "Personalized facials, chemical peels, and advanced skincare to rejuvenate and protect your skin.", urgent: false },
    { icon: "shield-check", title: "Wellness & HRT", desc: "Optimize your health with hormone replacement therapy, IV therapy, and medical weight loss programs.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Las Vegas, NV", stars: 5, text: "I had a fantastic experience with my Botox treatment last month. The staff was incredibly professional and made me feel so comfortable. My results are natural and I look years younger! Highly recommend Advanced Aesthetics for their expertise and care." },
    { name: "Mark T.", location: "San Diego, CA", stars: 5, text: "The team at Advanced Aesthetics helped me with my hair transplant, and I couldn't be happier. From the initial consultation to post-procedure care, everything was explained clearly. The outcome exceeded my expectations, giving me back my confidence." },
    { name: "Jessica R.", location: "Dallas, TX", stars: 5, text: "My lip filler appointment was wonderful! The injector was very skilled and listened to exactly what I wanted. I got subtle, beautiful results without looking overdone. The clinic is clean and modern, and the entire process was seamless and pleasant." }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Personalized Treatment Plans", "Cutting-Edge Technology", "Multiple Clinic Locations", "5-Star Rated Experience"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 5000, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Practitioners", desc: "Our team consists of highly trained and certified aesthetic professionals." },
    { icon: "sparkles", title: "Personalized Care", desc: "We tailor every treatment plan to your unique needs and aesthetic goals." },
    { icon: "shield-check", title: "Advanced Technology", desc: "Utilizing the latest, most effective technologies for superior results." },
    { icon: "thumbs-up", title: "Natural-Looking Results", desc: "Achieve beautiful enhancements that complement your natural beauty." },
    { icon: "home", title: "Comfortable Environment", desc: "Relax in our luxurious, state-of-the-art clinics designed for your comfort." },
    { icon: "briefcase", title: "Comprehensive Services", desc: "A wide range of aesthetic and wellness treatments under one roof." }
  ],

  formServiceOptions: ["Botox", "Dysport", "Juvéderm", "Lip Fillers", "Coolsculpting", "Laser Hair Removal", "Custom Facial", "Chemical Peels", "Medical Weight Loss"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!