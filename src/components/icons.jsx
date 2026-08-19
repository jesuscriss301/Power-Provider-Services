// Shared icon set — 24x24 viewBox, stroke=currentColor, no fill.
// Kept in one file (per showcase-niche-demo convention) so every section
// pulls from the same visual language instead of ad-hoc inline SVGs.

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  "aria-hidden": true,
};

export function IconShield(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6z" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg {...base} strokeWidth={3} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function IconStar(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 2 15 9l7 .6-5.3 4.6L18.2 21 12 17.3 5.8 21l1.5-6.8L2 9.6 9 9z" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg {...base} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconWhatsApp(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.106 1.52 5.827L0 24l6.335-1.652C8 22.997 9.943 23.5 12 23.5c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.09c-1.85 0-3.612-.474-5.15-1.35l-.37-.219-3.828.998.998-3.826-.24-.386A9.9 9.9 0 0 1 2.09 12c0-5.484 4.426-9.91 9.91-9.91 5.484 0 9.91 4.426 9.91 9.91 0 5.484-4.426 9.91-9.91 9.91z" />
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function IconPanel(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </svg>
  );
}

export function IconBolt(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 3 14h7l-1 8 10-14h-7z" />
    </svg>
  );
}

export function IconLightbulb(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function IconOutlet(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="9" width="18" height="9" rx="2" />
      <path d="M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M9 13.5h.01M15 13.5h.01" />
    </svg>
  );
}

export function IconWire(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12c3-4 6-4 9 0s6 4 9 0M3 6c3-4 6-4 9 0s6 4 9 0M3 18c3-4 6-4 9 0s6 4 9 0" />
    </svg>
  );
}

export function IconEvCharger(props) {
  return (
    <svg {...base} {...props}>
      <rect x="1" y="7" width="15" height="10" rx="2" />
      <path d="M16 10h3l3 3v4h-6M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <path d="M9 4v3M11 4v3" />
    </svg>
  );
}

export function IconCircuit(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2h12M6 22h12M6 2c0 6 12 6 12 12s-12 6-12 12M18 2c0 6-12 6-12 12s12 6 12 12" />
    </svg>
  );
}

export function IconFan(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2 2M17 17l2 2M19.1 4.9l-2 2M7 17l-2 2" />
    </svg>
  );
}

export function IconBuilding(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V9l6-6 6 6v12M9 21V13h4v8M15 12h6v9h-6z" />
    </svg>
  );
}

export function IconConstruction(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2 20h20M4 20V10l4-3 4 3v10M12 20V6l4-3 4 3v14" />
    </svg>
  );
}

export function IconMenu({ open, ...props }) {
  return (
    <span aria-hidden="true" {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export function IconSun(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

export function IconMoon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}
