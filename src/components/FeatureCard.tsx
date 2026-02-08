interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:-translate-y-0.5 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
      <div className="mb-3 text-violet-400">{icon}</div>
      <h3 className="text-base font-bold mb-2 text-slate-50">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
