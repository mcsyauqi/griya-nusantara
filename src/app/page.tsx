'use client';

import { useState, useEffect } from 'react';

/* ─── Data ─── */

const navLinks = [
  { label: 'Residences', href: '#residences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const residences = [
  {
    name: 'Pendopo Suite',
    size: '280 m\u00B2',
    beds: '4 Bedrooms',
    description:
      'Inspired by the grandeur of Javanese pendopo halls, this flagship suite features soaring ceilings, hand-carved teak columns, and panoramic views of the tropical canopy.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    name: 'Joglo Penthouse',
    size: '200 m\u00B2',
    beds: '3 Bedrooms',
    description:
      'Elevated living reimagined through the timeless joglo form. A sky-level sanctuary where traditional pitched rooflines frame modern Indonesian luxury.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    name: 'Limasan Residence',
    size: '140 m\u00B2',
    beds: '2 Bedrooms',
    description:
      'The essence of refined simplicity. Drawing from the limasan architectural tradition, this residence balances intimate proportions with generous natural light.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
];

const amenities = [
  {
    name: 'Tropical Pool',
    description: 'A lagoon-style infinity pool surrounded by frangipani trees and volcanic stone terracing.',
    icon: '\u2248', // ≈ wave-like symbol
  },
  {
    name: 'Jamu Spa',
    description: 'Traditional Javanese healing rituals paired with contemporary wellness therapies.',
    icon: '\u2662', // ♢ diamond
  },
  {
    name: 'Nusantara Restaurant',
    description: 'A culinary journey through the archipelago, from Padang rendang to Balinese suckling pig.',
    icon: '\u2606', // ☆ star
  },
  {
    name: 'Meditation Garden',
    description: 'A serene walled garden with lotus ponds, stone pathways, and ancient banyan shade.',
    icon: '\u25C7', // ◇ diamond outline
  },
  {
    name: 'Fitness Pavilion',
    description: 'Open-air training facilities with premium equipment and private yoga instruction.',
    icon: '\u25B6', // ▶ play symbol
  },
  {
    name: 'Sky Terrace',
    description: 'An elevated lounge for sunset cocktails with unobstructed views of the valley below.',
    icon: '\u2302', // ⌂ house
  },
];

const heritageFeatures = [
  { number: '01', title: 'Hand-Carved Teak', description: 'Master artisans from Jepara preserve centuries-old woodcarving traditions.' },
  { number: '02', title: 'Volcanic Stone', description: 'Locally quarried andesite and paras stone ground and laid by hand.' },
  { number: '03', title: 'Batik Motifs', description: 'UNESCO-recognized patterns woven into architectural details throughout.' },
  { number: '04', title: 'Joglo Architecture', description: 'The iconic four-pillar structure adapted for contemporary living.' },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    alt: 'Luxury heritage villa exterior at dusk',
    span: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    alt: 'Elegant interior with heritage details',
    span: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    alt: 'Grand living room with teak furnishings',
    span: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Modern residence with traditional elements',
    span: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    alt: 'Luxurious bedroom with tropical views',
    span: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    alt: 'Contemporary apartment with warm lighting',
    span: false,
  },
];

const stats = [
  { value: '38', label: 'Floors' },
  { value: '96', label: 'Residences' },
  { value: '3', label: 'Collections' },
  { value: '1', label: 'Heritage' },
];

/* ─── Component ─── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="bg-[#1C1410] min-h-screen">

      {/* ══════════════════════════════════════════════════════════════════
          1. FIXED NAVIGATION
      ══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1C1410]/95 backdrop-blur-md border-b border-[#C4956A]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#"
              className="flex flex-col leading-none"
            >
              <span className="font-[family-name:var(--font-serif)] text-[#C4956A] text-xl tracking-[0.25em] uppercase">
                GRIYA
              </span>
              <span className="font-[family-name:var(--font-serif)] text-[#C4956A] text-[0.6rem] tracking-[0.35em] uppercase">
                NUSANTARA
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/70 hover:text-[#C4956A] text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-block px-6 py-2.5 border border-[#C4956A] text-[#C4956A] font-[family-name:var(--font-sans)] text-xs tracking-[0.15em] uppercase hover:bg-[#C4956A] hover:text-[#1C1410] transition-all duration-300"
            >
              Inquire
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1px] bg-[#C4956A] transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#C4956A] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#C4956A] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1C1410]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-[family-name:var(--font-serif)] text-[#F4EDE4] text-2xl tracking-[0.2em] uppercase hover:text-[#C4956A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 border border-[#C4956A] text-[#C4956A] font-[family-name:var(--font-sans)] text-sm tracking-[0.15em] uppercase"
          >
            Inquire
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          2. HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
            alt="Indonesian heritage luxury residence at golden hour"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1410]/55 via-[#1C1410]/35 to-[#1C1410]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1410]/40 via-transparent to-[#1C1410]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Gold Diamond Ornament */}
          <span className="font-[family-name:var(--font-serif)] text-[#C4956A] text-lg mb-8">
            &#9670;
          </span>

          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-serif)] text-[#F4EDE4] text-5xl md:text-7xl lg:text-8xl tracking-[0.06em] font-light mb-2">
            GRIYA
          </h1>
          <p className="font-[family-name:var(--font-serif)] text-[#F4EDE4] text-sm md:text-base lg:text-lg tracking-[0.5em] uppercase font-light mb-8">
            NUSANTARA
          </p>

          {/* Gold Line */}
          <div className="w-20 h-[1px] bg-[#C4956A] mb-8" />

          {/* Tagline */}
          <p className="font-[family-name:var(--font-serif)] text-[#C4956A] text-lg md:text-xl italic mb-12 max-w-lg">
            Where Heritage Meets Modern Luxury
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#residences"
              className="px-8 py-3.5 border border-[#C4956A] text-[#C4956A] font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] uppercase hover:bg-[#C4956A]/10 transition-all duration-300"
            >
              Explore Residences
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 bg-[#C4956A] text-[#1C1410] font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] uppercase hover:bg-[#D4A97E] transition-all duration-300"
            >
              Book Private Tour
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-scroll-bounce">
          <span className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/60 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C4956A] to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. INTRODUCTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#F4EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#C4956A]" />
                <span className="font-[family-name:var(--font-sans)] text-[#A07B56] text-[10px] tracking-[0.3em] uppercase">
                  Our Philosophy
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-[#1C1410] leading-[1.2] mb-8">
                Rooted in Tradition,
                <br />
                <span className="italic text-[#C4956A]">Crafted for Tomorrow</span>
              </h2>

              <p className="font-[family-name:var(--font-sans)] text-[#1C1410]/70 text-sm md:text-base leading-relaxed mb-6">
                For centuries, the Indonesian archipelago has given the world some
                of its most extraordinary architectural traditions &mdash; from the
                soaring joglo halls of Java to the intricately carved balai of
                Sumatra. At Griya Nusantara, we believe these traditions deserve
                not preservation behind glass, but evolution into the spaces where
                modern life unfolds.
              </p>

              <p className="font-[family-name:var(--font-sans)] text-[#1C1410]/70 text-sm leading-relaxed mb-10">
                Every residence is a dialogue between master artisans and
                contemporary architects, between volcanic stone and engineered
                precision, between the warmth of teak and the clarity of
                floor-to-ceiling glass. This is not nostalgia &mdash; this is the
                future of Indonesian living.
              </p>

              {/* Gold Accent Line */}
              <div className="w-16 h-[1px] bg-[#C4956A]" />
            </div>

            {/* Right: Image with gold border frame */}
            <div className="relative">
              <div className="relative p-3 border border-[#C4956A]/20">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt="Indonesian heritage interior design with warm teak tones"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
              {/* Offset gold corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#C4956A]" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#C4956A]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. KEY NUMBERS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#2A1F18]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center py-8 md:py-0 ${
                  index < stats.length - 1
                    ? 'md:border-r md:border-[#C4956A]/20'
                    : ''
                } ${
                  index < 2 ? 'border-b md:border-b-0 border-[#C4956A]/20' : ''
                }`}
              >
                <span className="font-[family-name:var(--font-serif)] text-[#C4956A] text-4xl md:text-5xl lg:text-6xl block mb-2">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-sans)] text-[#F4EDE4] text-xs tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. RESIDENCES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="residences" className="py-24 lg:py-32 bg-[#1C1410]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4956A]" />
              <span className="font-[family-name:var(--font-sans)] text-[#C4956A] text-[10px] tracking-[0.3em] uppercase">
                The Collection
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4956A]" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-[#F4EDE4] leading-[1.2]">
              The <span className="italic text-[#C4956A]">Residences</span>
            </h2>
            <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/50 text-sm tracking-[0.1em] mt-4">
              Three Expressions of Indonesian Luxury
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residences.map((residence) => (
              <div
                key={residence.name}
                className="group border border-[#3A2E24] hover:border-[#C4956A]/30 transition-colors duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={residence.image}
                    alt={residence.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#F4EDE4] mb-2">
                    {residence.name}
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-[#C4956A] text-xs tracking-[0.1em] mb-4">
                    &#9670; {residence.size} &middot; &#9670; {residence.beds}
                  </p>
                  <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/60 text-sm leading-relaxed mb-6">
                    {residence.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-sans)] text-[#C4956A] text-xs tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300"
                  >
                    Discover
                    <span className="text-sm">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. AMENITIES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="amenities" className="py-24 lg:py-32 bg-[#F4EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4956A]" />
              <span className="font-[family-name:var(--font-sans)] text-[#A07B56] text-[10px] tracking-[0.3em] uppercase">
                Lifestyle
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4956A]" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-[#1C1410] leading-[1.2]">
              Curated <span className="italic text-[#C4956A]">Amenities</span>
            </h2>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="bg-[#1C1410] border border-[#3A2E24] p-8 hover:border-[#C4956A]/30 transition-colors duration-500"
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-[#C4956A]/40 flex items-center justify-center mb-6">
                  <span className="text-[#C4956A] text-xl">{amenity.icon}</span>
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-serif)] text-lg text-[#F4EDE4] mb-3">
                  {amenity.name}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/60 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. HERITAGE
      ══════════════════════════════════════════════════════════════════ */}
      <section id="heritage" className="py-24 lg:py-32 bg-[#1C1410]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Quote Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-[family-name:var(--font-serif)] text-[#C4956A] text-6xl block mb-6">
              &ldquo;
            </span>

            <blockquote className="font-[family-name:var(--font-serif)] text-[#F4EDE4] text-2xl md:text-3xl lg:text-4xl italic leading-snug font-light">
              In every grain of teak, in every chisel mark upon stone,
              lives the spirit of a thousand craftsmen who understood that
              beauty is not ornament &mdash; it is truth made visible.
            </blockquote>

            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="text-[#C4956A]/50 text-xs">&#9670;</span>
              <span className="text-[#C4956A]/50 text-xs">&#9670;</span>
              <span className="text-[#C4956A]/50 text-xs">&#9670;</span>
            </div>
          </div>

          {/* Heritage Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {heritageFeatures.map((feature) => (
              <div key={feature.number} className="text-center">
                <span className="font-[family-name:var(--font-serif)] text-[#C4956A] text-4xl md:text-5xl block mb-3">
                  {feature.number}
                </span>
                <h4 className="font-[family-name:var(--font-serif)] text-[#F4EDE4] text-lg mb-2">
                  {feature.title}
                </h4>
                <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. GALLERY
      ══════════════════════════════════════════════════════════════════ */}
      <section id="gallery" className="py-24 lg:py-32 bg-[#F4EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4956A]" />
              <span className="font-[family-name:var(--font-sans)] text-[#A07B56] text-[10px] tracking-[0.3em] uppercase">
                Visual Journey
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4956A]" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-[#1C1410] leading-[1.2]">
              Gallery
            </h2>
          </div>

          {/* Masonry-like Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden cursor-pointer ${
                  img.span ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#1C1410]/0 group-hover:bg-[#1C1410]/60 transition-all duration-500 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-sans)] text-[#F4EDE4] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. CONTACT
      ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-[#1C1410]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4956A]" />
              <span className="font-[family-name:var(--font-sans)] text-[#C4956A] text-[10px] tracking-[0.3em] uppercase">
                Get in Touch
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4956A]" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl text-[#F4EDE4] leading-[1.2] mb-4">
              Begin Your <span className="italic text-[#C4956A]">Journey Home</span>
            </h2>
            <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/60 text-sm max-w-lg mx-auto">
              Schedule a private tour and discover why Griya Nusantara is
              Indonesia&apos;s most celebrated heritage residence.
            </p>
          </div>

          {/* Two Columns: Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="font-[family-name:var(--font-sans)] text-[#C4956A] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Address
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4] text-sm leading-relaxed">
                    Jl. Heritage Nusantara No. 1
                    <br />
                    Ubud, Bali 80571
                    <br />
                    Indonesia
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-[family-name:var(--font-sans)] text-[#C4956A] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Telephone
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4] text-sm">
                    +62 361 000 000
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-[family-name:var(--font-sans)] text-[#C4956A] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Email
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4] text-sm">
                    inquiry@griyanusantara.id
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-[family-name:var(--font-sans)] text-[#C4956A] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Viewing Hours
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4] text-sm">
                    By Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {!formSubmitted ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="bg-[#2A1F18] border border-[#3A2E24] p-8 md:p-10"
                >
                  {/* Name */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/60 text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-transparent border-b border-[#3A2E24] focus:border-[#C4956A] text-[#F4EDE4] font-[family-name:var(--font-sans)] text-sm py-3 outline-none transition-colors placeholder:text-[#F4EDE4]/30"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/60 text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-[#3A2E24] focus:border-[#C4956A] text-[#F4EDE4] font-[family-name:var(--font-sans)] text-sm py-3 outline-none transition-colors placeholder:text-[#F4EDE4]/30"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/60 text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812 3456 7890"
                      className="w-full bg-transparent border-b border-[#3A2E24] focus:border-[#C4956A] text-[#F4EDE4] font-[family-name:var(--font-sans)] text-sm py-3 outline-none transition-colors placeholder:text-[#F4EDE4]/30"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-10">
                    <label className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/60 text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your ideal residence..."
                      className="w-full bg-transparent border-b border-[#3A2E24] focus:border-[#C4956A] text-[#F4EDE4] font-[family-name:var(--font-sans)] text-sm py-3 outline-none transition-colors resize-none placeholder:text-[#F4EDE4]/30"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C4956A] text-[#1C1410] font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] uppercase hover:bg-[#D4A97E] transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,149,106,0.3)]"
                  >
                    Send Inquiry
                  </button>

                  <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/30 text-[10px] mt-4 text-center">
                    We respect your privacy. Your information will never be
                    shared.
                  </p>
                </form>
              ) : (
                <div className="bg-[#2A1F18] border border-[#C4956A]/30 p-8 md:p-10 flex flex-col items-center justify-center min-h-[460px] text-center">
                  <div className="w-12 h-12 border border-[#C4956A] rotate-45 flex items-center justify-center mb-8">
                    <span className="text-[#C4956A] -rotate-45 text-lg">
                      &#10003;
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[#F4EDE4] mb-4">
                    Thank You
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/60 text-sm max-w-sm leading-relaxed">
                    Your inquiry has been received. Our team will contact you
                    within 24 hours to arrange your private viewing.
                  </p>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C4956A] to-transparent mt-8" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          10. FOOTER
      ══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#150F0A] border-t border-[#3A2E24]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-[family-name:var(--font-serif)] text-[#F4EDE4] text-lg tracking-[0.2em] uppercase mb-4">
                Griya Nusantara
              </h3>
              <p className="font-[family-name:var(--font-serif)] text-[#C4956A] text-sm italic mb-4">
                Where Heritage Meets Modern Luxury
              </p>
              <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/40 text-xs leading-relaxed">
                Indonesian heritage-inspired luxury residences where tradition and
                modernity converge in harmony.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-[family-name:var(--font-sans)] text-[#C4956A] text-[10px] tracking-[0.3em] uppercase mb-6">
                Explore
              </h3>
              <div className="space-y-3">
                {['Residences', 'Amenities', 'Heritage', 'Gallery', 'Contact', 'Privacy Policy'].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block font-[family-name:var(--font-sans)] text-[#F4EDE4]/40 text-xs hover:text-[#C4956A] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-[family-name:var(--font-sans)] text-[#C4956A] text-[10px] tracking-[0.3em] uppercase mb-6">
                Contact
              </h3>
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/40 text-xs">
                  Jl. Heritage Nusantara No. 1
                </p>
                <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/40 text-xs">
                  Ubud, Bali 80571
                </p>
                <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/40 text-xs">
                  +62 361 000 000
                </p>
                <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/40 text-xs">
                  inquiry@griyanusantara.id
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3A2E24]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/25 text-[10px] tracking-[0.1em]">
                &copy; 2026 Griya Nusantara. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[#C4956A]/40 text-xs">&#9670;</span>
                <span className="text-[#C4956A]/40 text-xs">&#9670;</span>
                <span className="text-[#C4956A]/40 text-xs">&#9670;</span>
              </div>
              <p className="font-[family-name:var(--font-sans)] text-[#F4EDE4]/25 text-[10px] tracking-[0.1em]">
                Made with &#9829; by{' '}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4956A]/50 hover:text-[#C4956A] transition-colors"
                >
                  Creativism
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
