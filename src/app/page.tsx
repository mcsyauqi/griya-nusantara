'use client';

import { useState, useEffect } from 'react';

/* ===================================================================
   GRIYA NUSANTARA — Indonesian Heritage Modern Luxury Residences
   Complete single-page experience
   =================================================================== */

// ─── Image URLs (verified Unsplash IDs) ───
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80', // Bali temple at sunset
  about1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', // luxury villa exterior
  about2: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', // elegant interior
  pendopo: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', // grand living room
  joglo: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80', // luxurious bedroom
  limasan: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', // modern exterior
  pool: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80', // grand pool
  spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', // spa treatment
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', // fine dining
  garden: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80', // tropical garden
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', // luxury gym
  lounge: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', // lounge area
  heritage1: 'https://images.unsplash.com/photo-1558005137-d9619a5c539f?w=800&q=80', // Balinese carving
  heritage2: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80', // Indonesian temple
  gallery1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', // villa 1
  gallery2: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', // interior 1
  gallery3: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80', // pool
  gallery4: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80', // garden
  gallery5: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', // exterior
  gallery6: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80', // bedroom
  building: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', // building
};

// ─── Residences Data ───
const RESIDENCES = [
  {
    name: 'Pendopo Suite',
    size: '320 sqm',
    beds: '4 Bedrooms',
    price: 'From IDR 18.5B',
    image: IMAGES.pendopo,
    description:
      'Grand living spaces inspired by the open Javanese Pendopo pavilion, featuring double-height ceilings and panoramic city views through floor-to-ceiling windows.',
  },
  {
    name: 'Joglo Penthouse',
    size: '250 sqm',
    beds: '3 Bedrooms',
    price: 'From IDR 12.8B',
    image: IMAGES.joglo,
    description:
      'Elevated luxury under soaring ceilings that echo the sacred geometry of a Joglo roof. Private terrace with infinity plunge pool.',
  },
  {
    name: 'Limasan Residence',
    size: '160 sqm',
    beds: '2 Bedrooms',
    price: 'From IDR 7.5B',
    image: IMAGES.limasan,
    description:
      'Refined proportions echoing the classic Limasan form. Warm teak paneling and volcanic stone accents create a serene retreat.',
  },
];

// ─── Amenities Data ───
const AMENITIES = [
  {
    title: 'Tropical Infinity Pool',
    image: IMAGES.pool,
    description:
      'A 50-meter infinity pool surrounded by frangipani trees, offering panoramic views of the Jakarta skyline at sunset.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
        <path d="M2 16c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
        <path d="M2 20c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
        <circle cx="12" cy="6" r="3" />
      </svg>
    ),
  },
  {
    title: 'Jamu Wellness Spa',
    image: IMAGES.spa,
    description:
      'Ancient Javanese wellness rituals reimagined in serene private treatment pavilions, using traditional jamu ingredients.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Nusantara Dining Club',
    image: IMAGES.dining,
    description:
      'An exclusive members-only dining experience celebrating the 34 provinces of Indonesian culinary heritage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <path d="M6 1v3M10 1v3M14 1v3" />
      </svg>
    ),
  },
  {
    title: 'Tropical Gardens',
    image: IMAGES.garden,
    description:
      'Three hectares of curated tropical landscapes featuring rare orchids, ancient banyans, and meditative water features.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" />
        <path d="M5 12s2.5-5 7-5 7 5 7 5" />
        <path d="M7 17s1.5-3 5-3 5 3 5 3" />
        <path d="M9 22s.5-2 3-2 3 2 3 2" />
      </svg>
    ),
  },
  {
    title: 'Private Fitness Studio',
    image: IMAGES.gym,
    description:
      'State-of-the-art fitness center with personal trainers, yoga pavilion, and rooftop jogging track with city views.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 5v14M18 5v14" />
        <path d="M4 7h4M16 7h4M4 17h4M16 17h4" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: 'Sky Lounge & Bar',
    image: IMAGES.lounge,
    description:
      'An elevated social space on the 38th floor with craft cocktails, live gamelan performances, and 360-degree views.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8M12 18v4" />
        <path d="M3 2l9 16L21 2" />
        <path d="M6 6h12" />
      </svg>
    ),
  },
];

// ─── Heritage Features ───
const HERITAGE_FEATURES = [
  {
    title: 'Hand-Carved Teak',
    description:
      'Master craftsmen from Jepara spend months hand-carving intricate Gebyok door panels and wall reliefs that adorn every residence.',
  },
  {
    title: 'Volcanic Stone',
    description:
      'Andesite stone sourced from the slopes of Mount Merapi, polished to reveal the natural beauty of volcanic mineral patterns.',
  },
  {
    title: 'Batik Motifs',
    description:
      'Traditional Parang and Kawung batik patterns are woven into architectural details, from bronze elevator doors to lobby floor mosaics.',
  },
  {
    title: 'Joglo Architecture',
    description:
      'The iconic four-pillar Joglo roof structure inspires the soaring lobby ceiling and penthouse crown, connecting earth to sky.',
  },
];

// ─── Stats Data ───
const STATS = [
  { number: '38', label: 'Floors' },
  { number: '96', label: 'Residences' },
  { number: '3', label: 'Hectares' },
  { number: '5-Star', label: 'Amenities' },
];

// ─── Gallery Data ───
const GALLERY_ITEMS = [
  { src: IMAGES.gallery1, alt: 'Luxury villa exterior with tropical landscaping', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2' },
  { src: IMAGES.gallery2, alt: 'Indonesian-inspired grand living room', span: 'col-span-1 row-span-1' },
  { src: IMAGES.gallery3, alt: 'Infinity pool overlooking the city', span: 'col-span-1 row-span-1' },
  { src: IMAGES.gallery4, alt: 'Tropical garden courtyard', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2' },
  { src: IMAGES.gallery5, alt: 'Modern residence exterior at twilight', span: 'col-span-1 row-span-1' },
  { src: IMAGES.gallery6, alt: 'Luxurious master bedroom with teak accents', span: 'col-span-1 row-span-1' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          NAVIGATION
          ══════════════════════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(28, 20, 16, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(196, 149, 106, 0.15)'
            : '1px solid transparent',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              className="text-[#F4EDE4] tracking-[0.3em] text-sm font-light"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              GRIYA NUSANTARA
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {['About', 'Residences', 'Amenities', 'Heritage', 'Gallery', 'Contact'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[#F4EDE4]/70 hover:text-[#C4956A] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#F4EDE4] p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className="block h-[1px] bg-[#C4956A] transition-all duration-300"
                  style={{
                    transform: mobileMenuOpen
                      ? 'rotate(45deg) translate(4px, 4px)'
                      : 'none',
                  }}
                />
                <span
                  className="block h-[1px] bg-[#C4956A] transition-all duration-300"
                  style={{ opacity: mobileMenuOpen ? 0 : 1 }}
                />
                <span
                  className="block h-[1px] bg-[#C4956A] transition-all duration-300"
                  style={{
                    transform: mobileMenuOpen
                      ? 'rotate(-45deg) translate(4px, -4px)'
                      : 'none',
                  }}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className="md:hidden overflow-hidden transition-all duration-500"
            style={{
              maxHeight: mobileMenuOpen ? '400px' : '0',
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            <div className="pb-6 flex flex-col gap-4">
              {['About', 'Residences', 'Amenities', 'Heritage', 'Gallery', 'Contact'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#F4EDE4]/70 hover:text-[#C4956A] text-xs tracking-[0.2em] uppercase transition-colors duration-300 py-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          1. HERO
          ══════════════════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Indonesian temple landscape at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1410]/40 via-transparent to-[#1C1410]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Location Tag */}
          <p
            className="text-[#C4956A] text-xs tracking-[0.5em] uppercase mb-8 animate-fade-in"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Jakarta &middot; Indonesia
          </p>

          {/* Main Title */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4EDE4] mb-6 animate-fade-in-up"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 300,
              lineHeight: 1.05,
            }}
          >
            Griya Nusantara
          </h1>

          {/* Tagline */}
          <p
            className="text-[#F4EDE4]/80 text-lg sm:text-xl tracking-[0.15em] mb-12 animate-fade-in"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 300,
              fontStyle: 'italic',
              animationDelay: '0.2s',
            }}
          >
            Where Heritage Meets Modern Luxury
          </p>

          {/* Batik Divider */}
          <div
            className="batik-divider mb-12 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="batik-diamond animate-diamond-pulse" />
          </div>

          {/* Explore CTA */}
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-3 text-[#C4956A] hover:text-[#F4EDE4] transition-colors duration-300 group animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Discover
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="animate-float"
            >
              <path
                d="M10 4V16M10 16L4 10M10 16L16 10"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Bottom Gold Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/40 to-transparent" />
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. ABOUT — Property Philosophy & Heritage Story
          ══════════════════════════════════════════════════════════ */}
      <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: '#F4EDE4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left - Text */}
            <div className="animate-fade-in-up">
              <p
                className="text-[#C4956A] text-xs tracking-[0.4em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our Philosophy
              </p>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1410] mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              >
                Rooted in the Soul of the Archipelago
              </h2>

              <p
                className="text-[#1C1410]/70 text-base lg:text-lg leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Indonesia&apos;s architectural heritage spans millennia, from the sacred stone
                temples of Borobudur to the graceful wooden Joglo houses of Central Java. At
                Griya Nusantara, we believe that true luxury is not merely about opulence, but
                about living within a story that has been told for generations.
              </p>

              <p
                className="text-[#1C1410]/70 text-base lg:text-lg leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Rising 38 stories above SCBD Jakarta, each of our 96 exclusive residences is a
                testament to the seamless union of Indonesia&apos;s rich cultural identity and
                the finest standards of contemporary living. Hand-carved teak panels, volcanic
                stone from Merapi, and silk batik accents are woven into spaces designed for
                those who demand nothing less than extraordinary.
              </p>

              {/* Decorative Element */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-[#C4956A]" />
                <div className="w-2 h-2 border border-[#C4956A] rotate-45" />
                <div className="w-12 h-px bg-[#C4956A]" />
              </div>
            </div>

            {/* Right - Image with Heritage Border */}
            <div className="heritage-border animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="img-zoom">
                <img
                  src={IMAGES.about1}
                  alt="Luxury villa exterior showcasing Indonesian architectural elements"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="text-center py-8"
                style={{
                  borderTop: '1px solid rgba(196, 149, 106, 0.3)',
                  borderBottom: '1px solid rgba(196, 149, 106, 0.3)',
                }}
              >
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1410] mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-[#8B7355] text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batik Divider between sections */}
      <div className="bg-[#1C1410] py-6">
        <div className="batik-divider">
          <div className="batik-diamond" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          3. RESIDENCES
          ══════════════════════════════════════════════════════════ */}
      <section id="residences" className="py-20 lg:py-28 bg-[#1C1410]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p
              className="text-[#C4956A] text-xs tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Exclusive Collection
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#F4EDE4] mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            >
              The Residences
            </h2>
            <p
              className="text-[#8B7355] text-base max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Three distinctive residence types, each named after iconic forms of Javanese
              architecture, offering layouts from intimate studios to grand penthouses.
            </p>
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C4956A]/60" />
              <div className="w-2 h-2 border border-[#C4956A] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C4956A]/60" />
            </div>
          </div>

          {/* Residences Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RESIDENCES.map((res, i) => (
              <div
                key={i}
                className="group relative overflow-hidden card-hover"
                style={{
                  backgroundColor: '#2A1F18',
                  border: '1px solid rgba(196, 149, 106, 0.12)',
                }}
              >
                {/* Image */}
                <div className="img-zoom">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                {/* Gradient Overlay on Image */}
                <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-transparent to-transparent pointer-events-none" />

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Label */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-px bg-[#C4956A]" />
                    <span
                      className="text-[#C4956A] text-xs tracking-[0.3em] uppercase"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {res.beds} &middot; {res.size}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl lg:text-3xl text-[#F4EDE4] mb-3"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                  >
                    {res.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#8B7355] text-sm leading-relaxed mb-5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {res.description}
                  </p>

                  {/* Price & Link */}
                  <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(196, 149, 106, 0.15)' }}>
                    <span
                      className="text-[#C4956A] text-sm tracking-wider"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      {res.price}
                    </span>
                    <span
                      className="text-[#8B7355] text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2 group-hover:text-[#C4956A] transition-colors duration-300 cursor-pointer"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Explore
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8H13M13 8L9 4M13 8L9 12"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#C4956A]/20 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:border-[#C4956A]/40" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#C4956A]/20 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:border-[#C4956A]/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. AMENITIES
          ══════════════════════════════════════════════════════════ */}
      <section
        id="amenities"
        className="py-20 lg:py-28"
        style={{ backgroundColor: '#F4EDE4' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p
              className="text-[#C4956A] text-xs tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              World-Class Living
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1410] mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            >
              Amenities &amp; Lifestyle
            </h2>
            <p
              className="text-[#1C1410]/60 text-base max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Every amenity is designed to honor Indonesian traditions of hospitality while
              delivering five-star comfort and convenience.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C4956A]/60" />
              <div className="w-2 h-2 border border-[#C4956A] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C4956A]/60" />
            </div>
          </div>

          {/* 6-Column Grid (2 rows of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {AMENITIES.map((amenity, i) => (
              <div key={i} className="group card-hover">
                {/* Image */}
                <div className="img-zoom rounded-lg overflow-hidden mb-6">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-2">
                  {/* Icon + Divider */}
                  <div className="flex items-center gap-3 mb-4 text-[#C4956A]">
                    {amenity.icon}
                    <div className="flex-1 h-px bg-[#C4956A]/20" />
                  </div>

                  <h3
                    className="text-xl lg:text-2xl text-[#1C1410] mb-3"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
                  >
                    {amenity.title}
                  </h3>

                  <p
                    className="text-[#1C1410]/60 text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. CULTURAL HERITAGE — What makes it uniquely Indonesian
          ══════════════════════════════════════════════════════════ */}
      <section id="heritage" className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.heritage2}
            alt="Indonesian temple architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C1410]/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p
              className="text-[#C4956A] text-xs tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              A Living Legacy
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#F4EDE4] mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            >
              Cultural Heritage
            </h2>
            <p
              className="text-[#F4EDE4]/60 text-base max-w-2xl mx-auto leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              What makes Griya Nusantara unlike any other residence in the world is its
              unwavering commitment to celebrating the artistry and traditions of the
              Indonesian archipelago.
            </p>
            <div className="batik-divider">
              <div className="batik-diamond animate-diamond-pulse" />
            </div>
          </div>

          {/* Two Columns: Quote + Heritage Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Quote & Image */}
            <div>
              <blockquote className="mb-10">
                <p
                  className="text-xl sm:text-2xl lg:text-3xl text-[#F4EDE4] leading-relaxed mb-6"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;Every column echoes the grandeur of a Javanese Pendopo. Every material
                  tells the story of Indonesia&apos;s rich architectural lineage.&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#C4956A]" />
                  <cite
                    className="text-[#C4956A] text-xs tracking-[0.3em] uppercase not-italic"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Our Design Philosophy
                  </cite>
                </footer>
              </blockquote>

              <div className="heritage-border">
                <div className="img-zoom">
                  <img
                    src={IMAGES.heritage1}
                    alt="Detailed Balinese stone carving and architectural ornament"
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Heritage Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {HERITAGE_FEATURES.map((feature, i) => (
                <div
                  key={i}
                  className="p-6 transition-all duration-300 hover:bg-[#F4EDE4]/5"
                  style={{
                    border: '1px solid rgba(196, 149, 106, 0.15)',
                  }}
                >
                  {/* Decorative Number */}
                  <div
                    className="text-[#C4956A]/20 text-4xl mb-3"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  >
                    0{i + 1}
                  </div>

                  <h3
                    className="text-lg text-[#F4EDE4] mb-3"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-[#8B7355] text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. GALLERY
          ══════════════════════════════════════════════════════════ */}
      <section id="gallery" className="py-20 lg:py-28" style={{ backgroundColor: '#F4EDE4' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p
              className="text-[#C4956A] text-xs tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Visual Journey
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1410] mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            >
              Gallery
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C4956A]/60" />
              <div className="w-2 h-2 border border-[#C4956A] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C4956A]/60" />
            </div>
          </div>

          {/* Masonry-like Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`img-zoom relative group overflow-hidden ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#1C1410]/0 group-hover:bg-[#1C1410]/40 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 border border-[#C4956A] rotate-45 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4956A" strokeWidth="1.5" className="-rotate-45">
                        <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batik Divider */}
      <div className="bg-[#1C1410] py-6">
        <div className="batik-divider">
          <div className="batik-diamond" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          7. CONTACT / CTA
          ══════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 lg:py-28 bg-[#1C1410]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left - CTA Text */}
            <div className="flex flex-col justify-center">
              <p
                className="text-[#C4956A] text-xs tracking-[0.4em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Begin Your Journey
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[#F4EDE4] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              >
                Experience Griya Nusantara
              </h2>
              <p
                className="text-[#8B7355] text-base leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Arrange a private viewing of our exclusive residences and discover a living
                experience rooted in centuries of Indonesian heritage. Our concierge team is
                available to guide you through every detail.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#C4956A]/30 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4956A" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span
                    className="text-[#8B7355] text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Jl. Sudirman Kav. 52-53, SCBD, Jakarta Selatan 12190
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#C4956A]/30 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4956A" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <span
                    className="text-[#8B7355] text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    +62 21 5555 8888
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#C4956A]/30 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4956A" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </div>
                  <span
                    className="text-[#8B7355] text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    concierge@griyanusantara.id
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#C4956A]/30 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4956A" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <span
                    className="text-[#8B7355] text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Gallery Open Daily 10:00 &mdash; 18:00 WIB
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div
              className="p-8 lg:p-12"
              style={{
                backgroundColor: '#2A1F18',
                border: '1px solid rgba(196, 149, 106, 0.12)',
              }}
            >
              <h3
                className="text-2xl text-[#F4EDE4] mb-2"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              >
                Schedule a Private Viewing
              </h3>
              <p
                className="text-[#8B7355] text-sm mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Fill in your details and our concierge will contact you within 24 hours.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-7"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="text-[#8B7355] text-xs tracking-[0.2em] uppercase mb-2 block"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[#8B7355] text-xs tracking-[0.2em] uppercase mb-2 block"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-[#8B7355] text-xs tracking-[0.2em] uppercase mb-2 block"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+62 xxx xxxx xxxx"
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="text-[#8B7355] text-xs tracking-[0.2em] uppercase mb-2 block"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Residence of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="form-input cursor-pointer"
                    style={{ backgroundColor: 'transparent' }}
                    defaultValue=""
                  >
                    <option value="" disabled style={{ color: '#8B7355', backgroundColor: '#2A1F18' }}>
                      Select a residence type
                    </option>
                    <option value="pendopo" style={{ color: '#F4EDE4', backgroundColor: '#2A1F18' }}>
                      Pendopo Suite (4 Bed, 320 sqm)
                    </option>
                    <option value="joglo" style={{ color: '#F4EDE4', backgroundColor: '#2A1F18' }}>
                      Joglo Penthouse (3 Bed, 250 sqm)
                    </option>
                    <option value="limasan" style={{ color: '#F4EDE4', backgroundColor: '#2A1F18' }}>
                      Limasan Residence (2 Bed, 160 sqm)
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full py-4 bg-[#C4956A] text-[#1C1410] text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#D4A57A] hover:shadow-lg hover:shadow-[#C4956A]/20"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
                >
                  Arrange a Private Visit
                </button>

                <p
                  className="text-[#8B7355]/50 text-xs text-center"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Your information is kept strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. FOOTER
          ══════════════════════════════════════════════════════════ */}
      <footer className="py-16 lg:py-20" style={{ backgroundColor: '#2A1F18' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Top Decorative Border */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#C4956A]/30 to-transparent mb-14" />

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-14">
            {/* Column 1 - About */}
            <div>
              <h3
                className="text-[#F4EDE4] text-lg tracking-[0.2em] mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              >
                GRIYA NUSANTARA
              </h3>
              <p
                className="text-[#8B7355] text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Where the grandeur of Javanese heritage converges with contemporary luxury. 96
                exclusive residences in the heart of Jakarta.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {[
                  {
                    label: 'Instagram',
                    icon: (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </>
                    ),
                  },
                  {
                    label: 'Facebook',
                    icon: (
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                        fill="currentColor"
                        stroke="none"
                      />
                    ),
                  },
                  {
                    label: 'LinkedIn',
                    icon: (
                      <path
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z"
                        fill="currentColor"
                        stroke="none"
                      />
                    ),
                  },
                  {
                    label: 'WhatsApp',
                    icon: (
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                        fill="currentColor"
                        stroke="none"
                      />
                    ),
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 border border-[#8B7355]/40 flex items-center justify-center text-[#8B7355] hover:border-[#C4956A] hover:text-[#C4956A] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3
                className="text-[#F4EDE4] text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Residences', href: '#residences' },
                  { label: 'Amenities', href: '#amenities' },
                  { label: 'Heritage', href: '#heritage' },
                  { label: 'Gallery', href: '#gallery' },
                  { label: 'Contact', href: '#contact' },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-[#8B7355] hover:text-[#C4956A] text-sm transition-colors duration-300 inline-flex items-center gap-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="w-1 h-1 bg-[#C4956A]/40 rotate-45 inline-block" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Newsletter / CTA */}
            <div>
              <h3
                className="text-[#F4EDE4] text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Stay Informed
              </h3>
              <p
                className="text-[#8B7355] text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Receive exclusive updates on available residences, events, and curated
                experiences at Griya Nusantara.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-transparent border border-[#8B7355]/30 border-r-0 px-4 py-3 text-[#F4EDE4] text-sm outline-none focus:border-[#C4956A] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#C4956A] text-[#1C1410] text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#D4A57A] flex-shrink-0"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#C4956A]/20 to-transparent mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-[#8B7355]/60 text-xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              &copy; 2026 Griya Nusantara. All rights reserved.
            </p>

            <p
              className="text-[#8B7355]/40 text-xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Made with &#9829; by{' '}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B7355]/60 hover:text-[#C4956A] transition-colors duration-300"
              >
                Creativism
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
