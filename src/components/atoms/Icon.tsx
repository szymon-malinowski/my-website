import type { ReactNode } from "react";
type IconName = "mail" | "phone" | "pin" | "linkedin" | "github" | "arrow";
const paths: Record<IconName, ReactNode> = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M6.5 3.5 9 3l2 5-2 1.5a14 14 0 0 0 5 5L15.5 13l5 2 .5 2.5A2 2 0 0 1 19 20C10.7 20 4 13.3 4 5a2 2 0 0 1 2.5-1.5Z" />,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  linkedin: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10v6M8 7.5v.01M12 16v-3.2a2.8 2.8 0 0 1 5.6 0V16M12 10v6" /></>,
  github: <path d="M12 3a9 9 0 0 0-2.8 17.6c.45.08.62-.2.62-.44v-1.55c-2.52.55-3.05-1.2-3.05-1.2-.4-1.03-.98-1.3-.98-1.3-.8-.55.06-.54.06-.54.88.06 1.35.9 1.35.9.78 1.35 2.06.96 2.57.73.08-.57.3-.96.55-1.18-2.01-.23-4.13-1-4.13-4.48 0-.99.35-1.8.92-2.43-.1-.23-.4-1.15.09-2.4 0 0 .75-.24 2.47.93A8.6 8.6 0 0 1 12 8.45a8.6 8.6 0 0 1 2.25.3c1.72-1.17 2.47-.93 2.47-.93.49 1.25.18 2.17.09 2.4.57.63.92 1.44.92 2.43 0 3.49-2.12 4.24-4.14 4.47.33.29.62.84.62 1.7v2.53c0 .24.16.52.63.43A9 9 0 0 0 12 3Z" />,
  arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
};
export function Icon({ name }: { name: IconName }) { return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>; }
