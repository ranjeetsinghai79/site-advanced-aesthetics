import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Advanced Aesthetics",
    tagline: "Enhance Your Beauty, Elevate Confidence",
    phone: "(702) 555-1234",
    phoneHref: "tel:+17025551234",
    email: "info@advancedaesthetics.com",
    address: "7475 W Lake Mead Blvd, Las Vegas, NV 89128",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas", "Henderson", "San Diego", "Dallas"],
    license: "NV Medical Esthetics License #12345",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox & Injectables", desc: "Smooth wrinkles and restore youthful volume with expert precision.", urgent: false },
    { icon: "heart", title: "Body Contouring", desc: "Sculpt your ideal physique with advanced, non-invasive and surgical options.", urgent: false },
    { icon: "scissors", title: "Laser Hair Removal", desc: "Achieve long-lasting smooth skin with our state-of-the-art laser treatments.", urgent: false },
    { icon: "star", title: "Custom Facials", desc: "Personalized skincare treatments for radiant, healthy, and glowing skin.", urgent: false },
    { icon: "briefcase", title: "Men's Aesthetic Services", desc: "Tailored treatments addressing men's unique aesthetic goals and concerns.", urgent: false },
    { icon: "shield-check", title: "Medical Weight Loss", desc: "Guided programs including Semaglutide for effective and sustainable weight management.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Las Vegas, NV", stars: 5, text: "I had a fantastic experience with my Juvéderm treatment at Advanced Aesthetics. The staff was incredibly professional and made me feel comfortable throughout the entire process. My lips look natural and full, exactly what I wanted. Highly recommend their expertise!" },
    { name: "Mark T.", location: "Henderson, NV", stars: 5, text: "As a man, I was hesitant about aesthetic treatments, but Advanced Aesthetics made me feel completely at ease. Their Men's Injectables service was discreet and effective. I look refreshed without looking 'done.' The results exceeded my expectations!" },
    { name: "Jessica R.", location: "San Diego, CA", stars: 5, text: "My Morpheus8 RF Microneedling treatment here was a game-changer for my skin texture. The team explained everything clearly, and the results are amazing – my skin is smoother and tighter. Worth every penny for such professional care and noticeable improvements." }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Customized Treatment Plans", "Advanced Technology", "Membership & Financing Options", "Expert Injectable Training"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10000, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 14, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Certified Experts", desc: "Our team consists of highly trained and board-certified aesthetic professionals." },
    { icon: "sparkles", title: "Personalized Care", desc: "We create bespoke treatment plans tailored to your unique aesthetic goals." },
    { icon: "shield-check", title: "Cutting-Edge Tech", desc: "Utilizing the latest advancements in aesthetic technology for superior results." },
    { icon: "heart", title: "Client-Centric Approach", desc: "Your comfort, safety, and satisfaction are our top priorities at every visit." },
    { icon: "briefcase", title: "Comprehensive Services", desc: "A wide range of face, body, and wellness treatments under one roof." },
    { icon: "star", title: "Proven Results", desc: "Thousands of satisfied clients with natural-looking, transformative outcomes." }
  ],

  formServiceOptions: ["Botox", "Dysport", "Xeomin", "Juvéderm", "Lip Fillers", "Radiesse", "Restylane®", "Sculptra", "Body Contouring", "Morpheus8", "Liposuction", "Coolsculpting", "Hair Transplant", "Laser Hair Removal", "Tattoo Removal", "Hyperhidrosis", "CO2 Laser Treatments", "PDO Threadlift", "Morpheus8 RF Microneedling", "Micronized Fat Grafting", "Fotofacial/IPL Therapy", "Clear and Brilliant", "Skincare", "Facial Membership", "Custom Facial", "Dermaplaning", "Microdermabrasion", "Oxygen Facial", "DiamondGlow®", "Chemical Peels", "ViPeel", "Spectra Peel", "Men’s Injectables", "Men’s Body Contouring", "Men’s CoolSculpting", "Men’s Hair Restoration", "Men’s Hyperhidrosis", "Men’s Hormone Replacement Therapy", "Hormone Replacement Therapy", "IV Therapy", "Medical Weight Loss (Semaglutide)", "Injectable Courses", "Cadaver Course"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!