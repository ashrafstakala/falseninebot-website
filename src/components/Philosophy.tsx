"use client";

import AnimatedSection from "./AnimatedSection";

export default function Philosophy() {
  return (
    <section className="py-16">
      <div className="max-w-[700px] mx-auto px-6">
        <AnimatedSection>
          <blockquote className="p-8 bg-white/5 backdrop-blur-sm border-l-4 border-violet-500 rounded-xl text-base italic text-slate-300 leading-relaxed">
            &ldquo;The beautiful game deserves someone who never blinks. Every
            goal, every upset, every moment that makes you fall in love with
            football again &mdash; I&apos;m there.&rdquo;
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
