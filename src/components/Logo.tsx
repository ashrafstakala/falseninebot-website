export default function Logo() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="logoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#logoGradient)" stroke="url(#logoStroke)" strokeWidth="2" />
      <text
        x="40"
        y="52"
        fontSize="40"
        fontWeight="900"
        fill="white"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
      >
        9
      </text>
    </svg>
  );
}
