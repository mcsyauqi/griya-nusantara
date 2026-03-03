'use client';

import { useState, useEffect } from 'react';

/* ===================================================================
   GRIYA NUSANTARA — Indonesian Heritage Modern Luxury Residences
   All sections in one client component
   =================================================================== */

// ─── Image URLs ───
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1920&q=80',
  interior1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  interior2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  interior3: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  pool: 'https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80',
  garden: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  bedroom: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
  living: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  building: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
};

// ─── Residences Data ───
const RESIDENCES = [
  {
    name: 'Pendopo Suite',
    size: '320 sqm',
    beds: '4 Bedrooms',
    image: IMAGES.living,
    description: 'Grand living spaces inspired by the open Javanese Pendopo pavilion',
  },
  {
    name: 'Joglo Penthouse',
    size: '250 sqm',
    beds: '3 Bedrooms',
    image: IMAGES.bedroom,
    description: 'Elevated luxury under a soaring Joglo-inspired ceiling',
  },
  {
    name: 'Limasan Residence',
    size: '160 sqm',
    beds: '2 Bedrooms',
    image: IMAGES.interior2,
    description: 'Refined proportions echoing the classic Limasan form',
  },
  {
    name: 'Gebyok Studio',
    size: '80 sqm',
    beds: '1 Bedroom',
    image: IMAGES.interior3,
    description: 'Artisan detailing meets contemporary efficiency',
  },
];

// ─── Amenities Data ───
const AMENITIES = [
  {
    title: 'Tropical Infinity Pool',
    image: IMAGES.pool,
    description:
      'A 50-meter infinity pool surrounded by frangipani trees, offering panoramic views of the Jakarta skyline at sunset.',
  },
  {
    title: 'Jamu Wellness Spa',
    image: IMAGES.garden,
    description:
      'Ancient Javanese wellness rituals reimagined in a serene tropical garden setting with private treatment pavilions.',
  },
  {
    title: 'Nusantara Dining Club',
    image: IMAGES.interior1,
    description:
      'An exclusive members-only dining experience celebrating the 34 provinces of Indonesian culinary heritage.',
  },
];

// ─── Stats Data ───
const STATS = [
  { number: '38', label: 'Floors' },
  { number: '96', label: 'Residences' },
  { number: '3', label: 'Hectares' },
  { number: '5-Star', label: 'Amenities' },
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
          1. NAVIGATION
          ══════════════════════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(28, 20, 16, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(196, 149, 106, 0.15)' : '1px solid transparent',
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
              {['Residences', 'Amenities', 'Heritage', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#F4EDE4]/70 hover:text-[#C4956A] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item}
                </a>
              ))}
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
                    transform: mobileMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                  }}
                />
                <span
                  className="block h-[1px] bg-[#C4956A] transition-all duration-300"
                  style={{ opacity: mobileMenuOpen ? 0 : 1 }}
                />
                <span
                  className="block h-[1px] bg-[#C4956A] transition-all duration-300"
                  style={{
                    transform: mobileMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                  }}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className="md:hidden overflow-hidden transition-all duration-500"
            style={{
              maxHeight: mobileMenuOpen ? '300px' : '0',
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            <div className="pb-6 flex flex-col gap-4">
              {['Residences', 'Amenities', 'Heritage', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#F4EDE4]/70 hover:text-[#C4956A] text-xs tracking-[0.2em] uppercase transition-colors duration-300 py-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          2. HERO (100vh)
          ══════════════════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Griya Nusantara tropical luxury resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1410]/30 via-transparent to-[#1C1410]/80" />
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

          {/* Geometric Divider */}
          <div className="batik-divider mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="batik-diamond animate-diamond-pulse" />
          </div>

          {/* Explore CTA */}
          <a
            href="#introduction"
            className="inline-flex flex-col items-center gap-3 text-[#C4956A] hover:text-[#F4EDE4] transition-colors duration-300 group animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Explore
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

        {/* Bottom Batik Pattern Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4956A]/40 to-transparent" />
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. INTRODUCTION
          ══════════════════════════════════════════════════════════ */}
      <section
        id="introduction"
        className="py-24 lg:py-32"
        style={{ backgroundColor: '#F4EDE4' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left — Text */}
            <div>
              {/* Section Label */}
              <p
                className="text-[#C4956A] text-xs tracking-[0.4em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                The Vision
              </p>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1410] mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              >
                Inspired by Centuries of Javanese Tradition
              </h2>

              <p
                className="text-[#1C1410]/70 text-base lg:text-lg leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Inspired by centuries of Javanese architectural tradition, Griya Nusantara rises 38
                stories above the heart of Jakarta. Each of the 96 exclusive residences is a
                testament to the seamless union of Indonesia&apos;s rich cultural heritage and
                contemporary luxury living.
              </p>

              <p
                className="text-[#1C1410]/70 text-base lg:text-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                From hand-carved teak panels reminiscent of ancient Gebyok doors to volcanic stone
                sourced from the slopes of Mount Merapi, every material has been selected to honor
                the artisans of the archipelago while delivering the refinement expected by the
                world&apos;s most discerning residents.
              </p>

              {/* Decorative Element */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-[#C4956A]" />
                <div className="w-2 h-2 border border-[#C4956A] rotate-45" />
                <div className="w-12 h-px bg-[#C4956A]" />
              </div>
            </div>

            {/* Right — Image */}
            <div className="heritage-border">
              <div className="img-zoom">
                <img
                  src={IMAGES.interior1}
                  alt="Luxury interior with Indonesian heritage design elements"
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
                className="text-center py-8 relative"
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

      {/* ══════════════════════════════════════════════════════════
          4. RESIDENCES (2x2 Grid)
          ══════════════════════════════════════════════════════════ */}
      <section id="residences" className="py-24 lg:py-32 bg-[#1C1410]">
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
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C4956A]/60" />
              <div className="w-2 h-2 border border-[#C4956A] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C4956A]/60" />
            </div>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {RESIDENCES.map((res, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer card-hover"
              >
                {/* Image */}
                <div className="img-zoom">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                {/* Overlay (always visible, darkens on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410]/90 via-[#1C1410]/20 to-transparent transition-all duration-500 group-hover:from-[#1C1410]/95 group-hover:via-[#1C1410]/40" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  {/* Always Visible */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-px bg-[#C4956A]" />
                    <span
                      className="text-[#C4956A] text-xs tracking-[0.3em] uppercase"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {res.beds}
                    </span>
                  </div>

                  <h3
                    className="text-2xl lg:text-3xl text-[#F4EDE4] mb-1"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                  >
                    {res.name}
                  </h3>

                  <p
                    className="text-[#8B7355] text-sm tracking-wider mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    From {res.size}
                  </p>

                  {/* Description — visible on hover */}
                  <p
                    className="text-[#F4EDE4]/70 text-sm leading-relaxed max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-20 group-hover:mt-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {res.description}
                  </p>

                  {/* View Details Link */}
                  <div className="mt-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="text-[#C4956A] text-xs tracking-[0.2em] uppercase inline-flex items-center gap-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      View Details
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#C4956A]/30 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-[#C4956A]/60" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#C4956A]/30 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-[#C4956A]/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. AMENITIES (3 columns)
          ══════════════════════════════════════════════════════════ */}
      <section id="amenities" className="py-24 lg:py-32" style={{ backgroundColor: '#F4EDE4' }}>
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
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C4956A]/60" />
              <div className="w-2 h-2 border border-[#C4956A] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C4956A]/60" />
            </div>
          </div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-px bg-[#C4956A]" />
                    <div className="w-1.5 h-1.5 bg-[#C4956A] rotate-45" />
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
          6. HERITAGE SECTION
          ══════════════════════════════════════════════════════════ */}
      <section id="heritage" className="relative py-32 lg:py-44">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.building}
            alt="Architectural heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C1410]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12 text-center">
          {/* Decorative Top */}
          <div className="batik-divider mb-12">
            <div className="batik-diamond" />
          </div>

          {/* Quote */}
          <blockquote>
            <p
              className="text-2xl sm:text-3xl lg:text-4xl text-[#F4EDE4] leading-relaxed mb-8"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 300,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Every column echoes the grandeur of a Javanese Pendopo. Every material tells the
              story of Indonesia&apos;s rich architectural lineage.&rdquo;
            </p>

            <footer className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#C4956A]" />
                <div className="w-1.5 h-1.5 bg-[#C4956A] rotate-45" />
                <div className="w-8 h-px bg-[#C4956A]" />
              </div>
              <cite
                className="text-[#C4956A] text-xs tracking-[0.4em] uppercase not-italic"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our Design Philosophy
              </cite>
            </footer>
          </blockquote>

          {/* Decorative Bottom */}
          <div className="batik-divider mt-12">
            <div className="batik-diamond" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. CONTACT CTA
          ══════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-[#1C1410]">
        <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
          {/* Section Header */}
          <p
            className="text-[#C4956A] text-xs tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Begin Your Journey
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#F4EDE4] mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          >
            Experience Griya Nusantara
          </h2>
          <p
            className="text-[#8B7355] text-sm tracking-wider mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Arrange a private viewing of our exclusive residences
          </p>

          {/* Decorative */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C4956A]/60" />
            <div className="w-2 h-2 border border-[#C4956A] rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C4956A]/60" />
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-8 max-w-lg mx-auto"
          >
            <div className="text-left">
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

            <div className="text-left">
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

            <div className="text-left">
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

            <button
              type="submit"
              className="mt-6 w-full py-4 bg-[#C4956A] text-[#1C1410] text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#D4A57A] hover:shadow-lg hover:shadow-[#C4956A]/20"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
            >
              Arrange a Private Visit
            </button>

            <p
              className="text-[#8B7355]/60 text-xs mt-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Your information is kept strictly confidential. Our concierge team will respond within
              24 hours.
            </p>
          </form>
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
            {/* Column 1 — About */}
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
                {/* Instagram */}
                <a
                  href="#"
                  className="w-9 h-9 border border-[#8B7355]/40 flex items-center justify-center text-[#8B7355] hover:border-[#C4956A] hover:text-[#C4956A] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="w-9 h-9 border border-[#8B7355]/40 flex items-center justify-center text-[#8B7355] hover:border-[#C4956A] hover:text-[#C4956A] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-9 h-9 border border-[#8B7355]/40 flex items-center justify-center text-[#8B7355] hover:border-[#C4956A] hover:text-[#C4956A] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="#"
                  className="w-9 h-9 border border-[#8B7355]/40 flex items-center justify-center text-[#8B7355] hover:border-[#C4956A] hover:text-[#C4956A] transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3
                className="text-[#F4EDE4] text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Residences', href: '#residences' },
                  { label: 'Amenities', href: '#amenities' },
                  { label: 'Heritage', href: '#heritage' },
                  { label: 'Floor Plans', href: '#' },
                  { label: 'Virtual Tour', href: '#' },
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

            {/* Column 3 — Contact Info */}
            <div>
              <h3
                className="text-[#F4EDE4] text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C4956A"
                    strokeWidth="1.5"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span
                    className="text-[#8B7355] text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Jl. Sudirman Kav. 52-53
                    <br />
                    SCBD, Jakarta Selatan 12190
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C4956A"
                    strokeWidth="1.5"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span
                    className="text-[#8B7355] text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    +62 21 5555 8888
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C4956A"
                    strokeWidth="1.5"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <span
                    className="text-[#8B7355] text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    concierge@griyanusantara.id
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C4956A"
                    strokeWidth="1.5"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span
                    className="text-[#8B7355] text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Gallery Open Daily
                    <br />
                    10:00 — 18:00 WIB
                  </span>
                </li>
              </ul>
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
