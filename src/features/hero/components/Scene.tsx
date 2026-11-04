import { makeBulbs, makeEmbers, wirePaths } from "../lib/scene";

const bulbs = makeBulbs();
const embers = makeEmbers();

export function StringLights() {
  return (
    <svg className="pointer-events-none absolute inset-x-0 top-[70px] h-[200px] w-full" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden>
      <defs>
        <filter id="bulb-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      {wirePaths.map((d, i) => (
        <path key={d} d={d} fill="none" stroke={`rgba(241,230,211,${i ? 0.12 : 0.18})`} strokeWidth="1.5" />
      ))}
      {bulbs.map((b) => (
        <g key={b.key} className="animate-twinkle" style={{ animationDelay: b.delay }}>
          <circle cx={b.x} cy={b.y} r="9" fill={b.color} opacity="0.35" filter="url(#bulb-glow)" />
          <circle cx={b.x} cy={b.y} r="3.2" fill={b.color} />
        </g>
      ))}
    </svg>
  );
}

export function Embers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {embers.map((e) => (
        <i
          key={e.key}
          className="absolute -bottom-2.5 animate-rise rounded-full bg-flame opacity-0 shadow-[0_0_10px_2px_rgba(255,140,60,0.8)]"
          style={
            {
              left: e.left,
              width: e.size,
              height: e.size,
              animationDuration: e.duration,
              animationDelay: e.delay,
              "--dx": e.dx,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

// Flyover silhouette with moving head/tail lights.
export function Flyover() {
  return (
    <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full opacity-90" viewBox="0 0 1440 260" preserveAspectRatio="xMidYMax slice" aria-hidden>
      <path d="M0 260 L0 170 Q720 60 1440 150 L1440 260 Z" fill="#0b0a09" />
      <g fill="#0b0a09">
        {[[180, 140], [460, 112], [760, 102], [1060, 112], [1320, 138]].map(([x, y]) => (
          <rect key={x} x={x} y={y} width="22" height={260 - y} />
        ))}
      </g>
      <path d="M0 170 Q720 60 1440 150" fill="none" stroke="rgba(241,230,211,.18)" strokeWidth="2" />
      <path className="animate-drive" d="M0 160 Q720 50 1440 140" fill="none" stroke="#ffd29a" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 70" />
      <path
        className="animate-drive [animation-direction:reverse] [animation-duration:8s]"
        d="M0 166 Q720 56 1440 146"
        fill="none"
        stroke="#ff4d3a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 70"
      />
    </svg>
  );
}
