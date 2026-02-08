interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-800 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/15 transition-all duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-slate-50">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
