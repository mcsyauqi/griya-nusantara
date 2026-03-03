'use client';

import { useState, useEffect } from 'react';

/* ===================================================================
   GRIYA NUSANTARA — Indonesian Heritage Luxury Residences
   Complete single-page website — Written from scratch
   =================================================================== */

// ─── Verified Unsplash Image URLs ───
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80',
  philosophy: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  pendopo: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  joglo: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
  limasan: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  pool: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
  spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  garden: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  terrace: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  heritage: 'https://images.unsplash.com/photo-1558005137-d9619a5c539f?w=800&q=80',
  gallery1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  gallery2: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  gallery3: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  gallery4: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
  gallery5: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  gallery6: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
};

// ─── Data Constants ───
const NAV_LINKS = [
  { label: 'Residences', href: '#residences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const RESIDENCES = [
  {
    name: 'Pendopo Suite',
    size: '280 m²',
    beds: '4 Bedrooms',
    image: IMAGES.pendopo,
    description:
      'Inspired by the grandeur of Javanese pendopo halls, this flagship suite features soaring ceilings, hand-carved teak columns, and panoramic views of the tropical canopy.',
  },
  {
    name: 'Joglo Penthouse',
    size: '200 m²',
    beds: '3 Bedrooms',
    image: IMAGES.joglo,
    description:
      'Elevated living reimagined through the timeless joglo form. A sky-level sanctuary where traditional pitched rooflines frame modern Indonesian luxury.',
  },
  {
    name: 'Limasan Residence',
    size: '140 m²',
    beds: '2 Bedrooms',
    image: IMAGES.limasan,
    description:
      'The essence of refined simplicity. Drawing from the limasan architectural tradition, this residence balances intimate proportions with generous natural light.',
  },
];

const AMENITIES = [
  {
    name: 'Tropical Pool',
    image: IMAGES.pool,
    description: 'A lagoon-style infinity pool surrounded by frangipani trees and volcanic stone terracing.',
  },
  {
    name: 'Jamu Spa',
    image: IMAGES.spa,
    description: 'Traditional Javanese healing rituals paired with contemporary wellness therapies.',
  },
  {
    name: 'Nusantara Restaurant',
    image: IMAGES.dining,
    description: 'A culinary journey through the archipelago, from Padang rendang to Balinese suckling pig.',
  },
  {
    name: 'Meditation Garden',
    image: IMAGES.garden,
    description: 'A serene walled garden with lotus ponds, stone pathways, and ancient banyan shade.',
  },
  {
    name: 'Fitness Pavilion',
    image: IMAGES.gym,
    description: 'Open-air training facilities with premium equipment and private yoga instruction.',
  },
  {
    name: 'Sky Terrace',
    image: IMAGES.terrace,
    description: 'An elevated lounge for sunset cocktails with unobstructed views of the valley below.',
  },
];

const HERITAGE_FEATURES = [
  { number: '01', title: 'Hand-Carved Teak', description: 'Master artisans from Jepara preserve centuries-old woodcarving traditions.' },
  { number: '02', title: 'Volcanic Stone', description: 'Locally quarried andesite and paras stone ground and laid by hand.' },
  { number: '03', title: 'Batik Motifs', description: 'UNESCO-recognized patterns woven into architectural details throughout.' },
  { number: '04', title: 'Joglo Architecture', description: 'The iconic four-pillar structure adapted for contemporary living.' },
];

const GALLERY_IMAGES = [
  { src: IMAGES.gallery1, alt: 'Luxury villa exterior at dusk' },
  { src: IMAGES.gallery2, alt: 'Grand living room with teak furnishings' },
  { src: IMAGES.gallery3, alt: 'Elegant interior with heritage details' },
  { src: IMAGES.gallery4, alt: 'Luxurious bedroom with tropical views' },
  { src: IMAGES.gallery5, alt: 'Modern residence with traditional elements' },
  { src: IMAGES.gallery6, alt: 'Tropical garden with stone pathways' },
];


/* ===================================================================
   MAIN PAGE COMPONENT
   =================================================================== */
export default function GriyaNusantara() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════════
          SECTION 1: NAVIGATION
          ════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-solid py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span
              className="text-gold tracking-[0.25em] text-sm font-semibold"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              GRIYA
            </span>
            <span
              className="text-gold tracking-[0.35em] text-[0.6rem]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              NUSANTARA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream/80 text-[0.8rem] tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Inquire Button (desktop) */}
          <a
            href="#contact"
            className="hidden lg:inline-block border border-gold text-gold text-[0.75rem] tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-gold hover:text-mahogany transition-all duration-300"
          >
            Inquire
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-mahogany/98 backdrop-blur-lg border-t border-gold/10 mt-2">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-cream/80 text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-gold text-gold text-sm tracking-[0.15em] uppercase px-6 py-3 text-center hover:bg-gold hover:text-mahogany transition-all duration-300 mt-2"
              >
                Inquire
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ════════════════════════════════════════════
          SECTION 2: HERO
          ════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Luxury heritage residence"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(28,20,16,0.55) 0%, rgba(28,20,16,0.35) 40%, rgba(28,20,16,0.55) 100%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          {/* Gold Diamond Ornament */}
          <div className="flex justify-center mb-8">
            <span className="text-gold text-lg">◆</span>
          </div>

          {/* Main Title */}
          <h1 className="mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            <span className="block text-cream text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.06em]">
              GRIYA
            </span>
            <span className="block text-cream text-2xl md:text-3xl lg:text-4xl tracking-[0.5em] font-light mt-2">
              NUSANTARA
            </span>
          </h1>

          {/* Gold Line */}
          <div className="flex justify-center my-6">
            <div className="gold-line-wide" />
          </div>

          {/* Tagline */}
          <p
            className="text-cream/80 text-lg md:text-xl font-light italic tracking-wide"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Where Heritage Meets Modern Luxury
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg
            width="20"
            height="30"
            viewBox="0 0 20 30"
            fill="none"
            className="text-gold/60"
          >
            <path
              d="M10 5 L10 20 M5 15 L10 20 L15 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3: INTRODUCTION
          ════════════════════════════════════════════ */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text */}
            <div>
              <span className="text-gold-dark text-[0.7rem] tracking-[0.3em] uppercase font-medium">
                Our Philosophy
              </span>
              <h2
                className="text-mahogany text-4xl md:text-5xl font-light leading-[1.15] mt-4 mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Rooted in Tradition,
                <br />
                Crafted for Tomorrow
              </h2>
              <div className="gold-line mb-8" style={{ background: 'linear-gradient(90deg, #C4956A, transparent)' }} />
              <p className="text-mahogany/75 text-base leading-relaxed mb-6">
                For centuries, the Indonesian archipelago has given the world some of its most
                extraordinary architectural traditions — from the soaring joglo halls of Java
                to the intricately carved balai of Sumatra. At Griya Nusantara, we believe these
                traditions deserve not preservation behind glass, but evolution into the spaces
                where modern life unfolds.
              </p>
              <p className="text-mahogany/75 text-base leading-relaxed">
                Every residence is a dialogue between master artisans and contemporary architects,
                between volcanic stone and engineered precision, between the warmth of teak and
                the clarity of floor-to-ceiling glass. This is not nostalgia — this is the future
                of Indonesian living.
              </p>
            </div>

            {/* Right: Image with Heritage Border */}
            <div className="flex justify-center lg:justify-end">
              <div className="heritage-border inline-block">
                <img
                  src={IMAGES.philosophy}
                  alt="Indonesian heritage interior design"
                  className="w-full max-w-lg object-cover"
                  style={{ aspectRatio: '3/4', opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4: RESIDENCES
          ════════════════════════════════════════════ */}
      <section id="residences" className="bg-mahogany py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="batik-diamond mb-6" />
            <h2
              className="text-cream text-4xl md:text-5xl lg:text-6xl font-light"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The Residences
            </h2>
            <p className="text-cream/50 text-sm tracking-[0.15em] uppercase mt-4">
              Three Expressions of Indonesian Luxury
            </p>
          </div>

          {/* Residence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {RESIDENCES.map((r) => (
              <div
                key={r.name}
                className="card-hover border border-gold/15 bg-surface"
              >
                {/* Card Image */}
                <div className="img-zoom">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-64 object-cover"
                    style={{ opacity: 1 }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3
                    className="text-cream text-2xl font-light mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {r.name}
                  </h3>

                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-gold text-[0.75rem] tracking-wider">
                      ◆ {r.size}
                    </span>
                    <span className="text-gold text-[0.75rem] tracking-wider">
                      ◆ {r.beds}
                    </span>
                  </div>

                  <p className="text-cream/60 text-sm leading-relaxed mb-6">
                    {r.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gold text-[0.75rem] tracking-[0.15em] uppercase hover:gap-4 transition-all duration-300"
                  >
                    Discover
                    <span className="text-xs">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 5: AMENITIES
          ════════════════════════════════════════════ */}
      <section id="amenities" className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-gold-dark text-[0.7rem] tracking-[0.3em] uppercase font-medium">
              Lifestyle
            </span>
            <h2
              className="text-mahogany text-4xl md:text-5xl lg:text-6xl font-light mt-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Curated Amenities
            </h2>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {AMENITIES.map((a) => (
              <div key={a.name} className="group">
                {/* Square Image */}
                <div className="img-zoom mb-5">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full aspect-square object-cover"
                    style={{ opacity: 1 }}
                  />
                </div>

                {/* Name */}
                <h3
                  className="text-mahogany text-xl font-light mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {a.name}
                </h3>

                {/* Gold Separator */}
                <div
                  className="w-8 h-[1px] mb-3"
                  style={{ background: '#C4956A' }}
                />

                {/* Description */}
                <p className="text-mahogany/60 text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 6: HERITAGE
          ════════════════════════════════════════════ */}
      <section
        id="heritage"
        className="relative py-24 lg:py-32 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.heritage}
            alt="Indonesian heritage craftsmanship"
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(28,20,16,0.88)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Quote Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* Gold Quotation Ornament */}
            <span
              className="text-gold text-6xl block mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              &ldquo;
            </span>

            <blockquote
              className="text-cream text-2xl md:text-3xl lg:text-4xl font-light italic leading-snug"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              In every grain of teak, in every chisel mark upon stone,
              lives the spirit of a thousand craftsmen who understood that
              beauty is not ornament — it is truth made visible.
            </blockquote>

            <div className="flex justify-center mt-8">
              <div className="batik-diamond" />
            </div>
          </div>

          {/* Heritage Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {HERITAGE_FEATURES.map((f) => (
              <div key={f.number} className="text-center">
                <span
                  className="text-gold text-4xl md:text-5xl font-light block mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {f.number}
                </span>
                <h4
                  className="text-cream text-lg font-light mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {f.title}
                </h4>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 7: GALLERY
          ════════════════════════════════════════════ */}
      <section id="gallery" className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-gold-dark text-[0.7rem] tracking-[0.3em] uppercase font-medium">
              Visual Journey
            </span>
            <h2
              className="text-mahogany text-4xl md:text-5xl lg:text-6xl font-light mt-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Gallery
            </h2>
          </div>

          {/* Gallery Grid: 2 large + 4 small */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {/* Large Image 1 — spans 2 cols */}
            <div className="col-span-2 row-span-2 gallery-item">
              <img
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1', opacity: 1 }}
              />
              <div className="gallery-overlay">
                <span
                  className="text-gold text-sm tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  View
                </span>
              </div>
            </div>

            {/* Small Image 2 */}
            <div className="gallery-item">
              <img
                src={GALLERY_IMAGES[1].src}
                alt={GALLERY_IMAGES[1].alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1', opacity: 1 }}
              />
              <div className="gallery-overlay">
                <span
                  className="text-gold text-sm tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  View
                </span>
              </div>
            </div>

            {/* Small Image 3 */}
            <div className="gallery-item">
              <img
                src={GALLERY_IMAGES[2].src}
                alt={GALLERY_IMAGES[2].alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1', opacity: 1 }}
              />
              <div className="gallery-overlay">
                <span
                  className="text-gold text-sm tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  View
                </span>
              </div>
            </div>

            {/* Small Image 4 */}
            <div className="gallery-item">
              <img
                src={GALLERY_IMAGES[3].src}
                alt={GALLERY_IMAGES[3].alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1', opacity: 1 }}
              />
              <div className="gallery-overlay">
                <span
                  className="text-gold text-sm tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  View
                </span>
              </div>
            </div>

            {/* Small Image 5 */}
            <div className="gallery-item">
              <img
                src={GALLERY_IMAGES[4].src}
                alt={GALLERY_IMAGES[4].alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1', opacity: 1 }}
              />
              <div className="gallery-overlay">
                <span
                  className="text-gold text-sm tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  View
                </span>
              </div>
            </div>

            {/* Large Image 6 — spans 2 cols */}
            <div className="col-span-2 gallery-item">
              <img
                src={GALLERY_IMAGES[5].src}
                alt={GALLERY_IMAGES[5].alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '2/1', opacity: 1 }}
              />
              <div className="gallery-overlay">
                <span
                  className="text-gold text-sm tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  View
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 8: CONTACT
          ════════════════════════════════════════════ */}
      <section id="contact" className="bg-mahogany py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div>
              <div className="batik-diamond mb-6" />
              <h2
                className="text-cream text-4xl md:text-5xl font-light leading-tight mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Begin Your
                <br />
                Journey Home
              </h2>
              <div className="gold-line mb-10" />

              <div className="space-y-6">
                <div>
                  <span className="text-gold text-[0.7rem] tracking-[0.2em] uppercase block mb-1">
                    Address
                  </span>
                  <p className="text-cream/70 text-sm leading-relaxed">
                    Jl. Heritage Nusantara No. 1<br />
                    Ubud, Bali 80571<br />
                    Indonesia
                  </p>
                </div>

                <div>
                  <span className="text-gold text-[0.7rem] tracking-[0.2em] uppercase block mb-1">
                    Telephone
                  </span>
                  <p className="text-cream/70 text-sm">+62 361 000 000</p>
                </div>

                <div>
                  <span className="text-gold text-[0.7rem] tracking-[0.2em] uppercase block mb-1">
                    Email
                  </span>
                  <p className="text-cream/70 text-sm">inquiry@griyanusantara.id</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your inquiry. Our team will contact you shortly.');
                }}
                className="space-y-8"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="form-input"
                  />
                </div>

                <div>
                  <select
                    className="form-input cursor-pointer"
                    defaultValue=""
                    style={{ background: 'transparent' }}
                  >
                    <option value="" disabled style={{ background: '#2A1F18', color: '#F4EDE4' }}>
                      Interested Residence
                    </option>
                    <option value="pendopo" style={{ background: '#2A1F18', color: '#F4EDE4' }}>
                      Pendopo Suite — 280 m²
                    </option>
                    <option value="joglo" style={{ background: '#2A1F18', color: '#F4EDE4' }}>
                      Joglo Penthouse — 200 m²
                    </option>
                    <option value="limasan" style={{ background: '#2A1F18', color: '#F4EDE4' }}>
                      Limasan Residence — 140 m²
                    </option>
                  </select>
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gold text-mahogany text-[0.75rem] tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-gold-light transition-colors duration-300 w-full lg:w-auto"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 9: FOOTER
          ════════════════════════════════════════════ */}
      <footer className="bg-mahogany-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {/* Column 1: Brand */}
            <div>
              <h3
                className="text-gold text-xl tracking-[0.2em] mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                GRIYA NUSANTARA
              </h3>
              <div className="gold-line mb-4" />
              <p className="text-cream/40 text-sm leading-relaxed">
                Indonesian heritage-inspired luxury residences
                where tradition and modernity converge in harmony.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4
                className="text-cream text-sm tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Explore
              </h4>
              <div className="gold-line mb-4" />
              <div className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-cream/40 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4
                className="text-cream text-sm tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Contact
              </h4>
              <div className="gold-line mb-4" />
              <div className="space-y-3 text-cream/40 text-sm">
                <p>Ubud, Bali — Indonesia</p>
                <p>+62 361 000 000</p>
                <p>inquiry@griyanusantara.id</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/25 text-xs tracking-wide">
              &copy; {new Date().getFullYear()} Griya Nusantara. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gold/40 text-xs">◆</span>
              <span className="text-gold/40 text-xs">◆</span>
              <span className="text-gold/40 text-xs">◆</span>
            </div>
            <p className="text-cream/25 text-xs tracking-wide">
              Made with &#9829; by Creativism
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
