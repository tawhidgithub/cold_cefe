// Pure helpers that generate the hero's decorative scene.
// Deterministic (seeded), so server output is identical on every build.

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

type Point = [number, number];
const quad = (a: number, c: number, b: number, t: number) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * c + t * t * b;

// Two string-light wires, each = two quadratic curves (start, control, mid, control, end).
export const wires: Point[][] = [
  [[-20, 20], [360, 150], [720, 40], [1080, -70], [1460, 30]],
  [[-20, 60], [420, 190], [860, 70], [1300, -50], [1460, 90]],
];

export const wirePaths = ["M-20 20 Q360 150 720 40 T1460 30", "M-20 60 Q420 190 860 70 T1460 90"];

const bulbColors = ["#ffd08a", "#ff9a5a", "#fff1c9"];

export function makeBulbs() {
  const rand = seeded(7);
  return wires.flatMap((p, w) =>
    Array.from({ length: 23 }, (_, i) => {
      const t = (i + 1) / 24;
      const second = t >= 0.5;
      const tt = second ? (t - 0.5) * 2 : t * 2;
      const [a, c, b] = second ? [p[2], p[3], p[4]] : [p[0], p[1], p[2]];
      return {
        key: `${w}-${i}`,
        x: quad(a[0], c[0], b[0], tt),
        y: quad(a[1], c[1], b[1], tt) + 6,
        color: bulbColors[i % 3],
        delay: `${(rand() * 3).toFixed(2)}s`,
      };
    }),
  );
}

export function makeEmbers(count = 26) {
  const rand = seeded(42);
  return Array.from({ length: count }, (_, i) => ({
    key: i,
    left: `${10 + rand() * 80}%`,
    dx: `${rand() * 160 - 80}px`,
    size: `${(2 + rand() * 3).toFixed(1)}px`,
    duration: `${5 + rand() * 6}s`,
    delay: `${rand() * 8}s`,
  }));
}
