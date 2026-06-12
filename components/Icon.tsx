const paths: Record<string, JSX.Element> = {
  code: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></>,
  smartphone: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>,
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />,
  sparkles: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16z" />,
  building: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" /></>,
  banknote: <><rect x="2.5" y="6" width="19" height="12" rx="2" /><circle cx="12" cy="12" r="2.6" /><path d="M6 9.5v.01M18 14.5v.01" /></>,
  cloud: <path d="M7 18a4.5 4.5 0 01-.4-8.98A6 6 0 0118.3 9.2 4 4 0 0117.5 18H7z" />,
  pen: <path d="M12 19l7-7a2.6 2.6 0 00-3.7-3.7l-7 7L7 20l5-1zM15 6l3 3" />,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19.5c.8-3.2 3-5 5.5-5s4.7 1.8 5.5 5M16 5.3a3.2 3.2 0 010 5.9M17.8 14.9c1.6.7 2.8 2.3 3.2 4.6" /></>,
  plug: <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 01-6 6 6 6 0 01-6-6V8zM12 17v4" />,
  "shield-check": <path d="M12 3l8 3v5.5c0 4.6-3.2 8-8 9.5-4.8-1.5-8-4.9-8-9.5V6l8-3zM8.8 12l2.2 2.2 4.2-4.2" />,
  "heart-pulse": <path d="M12 20.5C7 16.5 3.5 13.4 3.5 9.6 3.5 7 5.5 5 8 5c1.6 0 3 .8 4 2 1-1.2 2.4-2 4-2 2.5 0 4.5 2 4.5 4.6 0 3.8-3.5 6.9-8.5 10.9zM5 12h3l1.5-2.5 3 5L14 11h5" />,
  home: <path d="M3.5 11L12 3.5 20.5 11M6 9.5V20h12V9.5M10 20v-5h4v5" />,
  graduation: <path d="M12 4l10 4.5L12 13 2 8.5 12 4zM6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5M22 8.5V14" />,
  cart: <path d="M3 4h2.5l2.2 11.5h10.8L21 7.5H6M9.5 20a1 1 0 100-2 1 1 0 000 2zM17.5 20a1 1 0 100-2 1 1 0 000 2z" />,
  truck: <path d="M2.5 6h11v10h-11zM13.5 9.5h4l3 3.5v3h-7M6.5 19a1.7 1.7 0 100-3.4 1.7 1.7 0 000 3.4zM17 19a1.7 1.7 0 100-3.4 1.7 1.7 0 000 3.4z" />,
  factory: <path d="M3 20V9l5.5 3.5V9L14 12.5V9l7 4v7H3zM7 17h2M12 17h2M17 17h2" />,
  leaf: <path d="M5 19c0-8 5-13 14-14-.5 9-5.5 14-12 14M5 19c4-5 8-8 12-10" />,
  plane: <path d="M10.5 13.5L3 11l1.5-1.8 6.5.8 5-5.5c.8-.9 2.2-.9 2.8 0 .5.7.3 1.8-.3 2.5l-5.3 5.2 1 6.5L12.5 21l-2-7.5z" />,
  pill: <path d="M10.5 3.5l10 10a4.95 4.95 0 01-7 7l-10-10a4.95 4.95 0 017-7zM8.5 8.5l7 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  star: <path d="M12 3l2.7 5.8 6.3.8-4.6 4.3 1.2 6.1L12 17l-5.6 3 1.2-6.1L3 9.6l6.3-.8L12 3z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7.5l9 6 9-6" /></>,
  phone: <path d="M5 4h4l1.5 4.5-2.3 1.7a13 13 0 005.6 5.6l1.7-2.3L20 15v4a1.5 1.5 0 01-1.7 1.5C10 19.6 4.4 14 3.5 5.7A1.5 1.5 0 015 4z" />,
  pin: <path d="M12 21c4.5-4.4 7-7.8 7-11a7 7 0 10-14 0c0 3.2 2.5 6.6 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />,
};

export default function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.code}
    </svg>
  );
}
