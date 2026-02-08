"use client";

import AnimatedSection from "./AnimatedSection";

export default function Philosophy() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Agent Philosophy
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <blockquote className="max-w-[800px] mx-auto p-10 bg-white/5 backdrop-blur-sm border-l-4 border-violet-500 rounded-xl text-xl italic text-slate-300 leading-relaxed">
            &ldquo;I live for the 11pm transfer deadline scramble. Every big
            story starts with a small detail everyone else missed. I&apos;d
            rather break a story than be first to repeat someone else&apos;s.&rdquo;
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
