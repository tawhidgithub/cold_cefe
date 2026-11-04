// Illustrated Karbar. Swap for a real product photo when the client sends one.
export function KarbarArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(255,106,43,0.35),transparent_65%)] blur-md" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]" role="img" aria-label="Illustration of the Karbar: a kebab inside a burger bun">
        <defs>
          <linearGradient id="kb-bun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e9a557" /><stop offset="1" stopColor="#a8622a" /></linearGradient>
          <linearGradient id="kb-base" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c98140" /><stop offset="1" stopColor="#8a4c1e" /></linearGradient>
          <linearGradient id="kb-kebab" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5a2a12" /><stop offset=".5" stopColor="#8b4219" /><stop offset="1" stopColor="#4a210d" /></linearGradient>
        </defs>
        <g className="animate-bob">
          <ellipse cx="200" cy="338" rx="130" ry="14" fill="rgba(0,0,0,.45)" />
          <path d="M80 268 Q80 318 200 318 Q320 318 320 268 Z" fill="url(#kb-base)" />
          <path d="M74 254 Q90 240 110 254 T150 254 T190 254 T230 254 T270 254 T310 254 Q326 246 330 258 L330 268 L70 268 Z" fill="#7fae5a" />
          <rect x="62" y="214" width="276" height="42" rx="21" fill="url(#kb-kebab)" />
          <g stroke="#2b1207" strokeWidth="5" strokeLinecap="round" opacity=".75">
            {[100, 150, 200, 250, 300].map((x) => (
              <path key={x} d={`M${x} 222 L${x + 18} 250`} />
            ))}
          </g>
          <rect x="40" y="231" width="320" height="6" rx="3" fill="#c9c2b6" />
          <circle cx="40" cy="234" r="7" fill="#c9c2b6" />
          <path d="M84 200 Q120 188 150 202 Q180 190 210 202 Q246 188 276 202 Q300 192 318 204 L320 214 L80 214 Z" fill="#f3e3c2" />
          <path d="M78 206 Q78 110 200 104 Q322 110 322 206 Z" fill="url(#kb-bun)" />
          <g fill="#fbeed3">
            {[[150, 140, -20], [190, 128, 0], [232, 136, 20], [170, 164, 10], [214, 160, -10], [262, 160, 25], [128, 170, -30]].map(([x, y, r]) => (
              <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="6" ry="3" transform={`rotate(${r} ${x} ${y})`} />
            ))}
          </g>
        </g>
        <g fill="none" stroke="rgba(241,230,211,.25)" strokeWidth="3" strokeLinecap="round" className="animate-twinkle">
          <path d="M170 80 Q160 60 172 44 Q184 28 174 10" />
          <path d="M220 86 Q210 66 222 50 Q234 34 224 16" />
        </g>
      </svg>
      <div className="absolute right-[2%] top-[6%] grid h-[120px] w-[120px] rotate-12 place-items-center rounded-full bg-cream text-center font-display text-xl font-black uppercase leading-[0.95] text-coal shadow-xl">
        <div>
          <small className="block font-sans text-[10px] font-bold tracking-[0.15em] text-ember">House</small>
          Must
          <br />
          Try
          <small className="block font-sans text-[10px] font-bold tracking-[0.15em] text-ember">★★★</small>
        </div>
      </div>
    </div>
  );
}
