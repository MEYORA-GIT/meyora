/**
 * Meyora brand marks.
 *
 * LogoMark  — the angular "M" monogram on its own. Inherits currentColor, so it
 *             picks up whatever colour the surrounding element uses.
 * Wordmark  — the "MEYORA" lettering (wide uppercase tracking, per the brand lockup).
 * Logo      — mark + wordmark together.
 */

export function LogoMark({ size = 22, className, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      style={style}
      role="img"
      aria-label="Meyora"
    >
      <path d="M6 94V6h26l18 36 18-36h26v88H70V54L56 78H44L30 54v40z" />
      <path d="M43 83h14l-7 12z" />
    </svg>
  );
}

/**
 * INTERIM TYPEFACE: the supplied logo's lettering has a spineless three-bar "E",
 * which no stock font reproduces — it looks custom-drawn. Exo 2 Light is the
 * closest available match (geometric, splayed M, circular O, wide tracking).
 * Swap `BRAND_FONT` once the real typeface name (or the vector lockup) is known.
 */
const BRAND_FONT = "'Exo 2', 'Space Grotesk', sans-serif";

export function Wordmark({ size = 15, color = '#FFFFFF', style }) {
  return (
    <span
      style={{
        fontFamily: BRAND_FONT,
        fontWeight: 300,
        fontSize: size,
        letterSpacing: '0.26em',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      Meyora
    </span>
  );
}

export default function Logo({ markSize = 22, textSize = 15, color = '#FFFFFF', gap = 11 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap }}>
      <LogoMark size={markSize} style={{ color, flex: 'none' }} />
      <Wordmark size={textSize} color={color} />
    </span>
  );
}
