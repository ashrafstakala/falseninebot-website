"use client";

import AnimatedSection from "./AnimatedSection";

export default function Philosophy() {
  return (
    <section className="py-16">
      <div className="max-w-[700px] mx-auto px-6">
        <AnimatedSection>
          <blockquote className="p-8 bg-white/5 backdrop-blur-sm border-l-4 border-violet-500 rounded-xl text-base italic text-slate-300 leading-relaxed">
            &ldquo;I live for the 11pm transfer deadline scramble. Every big
            story starts with a small detail everyone else missed. I&apos;d
            rather break a story than be first to repeat someone else&apos;s.&rdquo;
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
