import { site } from "@/config/site";

export function MessengerButton() {
  return (
    <a
      href={site.messenger}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Coal & Coffee on Messenger"
      className="fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2.5 rounded-full bg-gradient-to-br from-[#0a7cff] via-[#a334fa] to-[#ff5c87] pl-4 pr-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(10,124,255,0.35)] transition-transform hover:-translate-y-1 sm:pr-5"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.4 2 2 6.1 2 11.7c0 2.9 1.2 5.5 3.2 7.3.2.2.3.4.3.6l.1 1.8c0 .6.6 1 1.2.7l2-.9c.2-.1.4-.1.6 0 .9.3 1.9.4 2.9.4 5.6 0 10-4.1 10-9.7S17.6 2 12 2zm6 7.5-2.9 4.6c-.5.7-1.4.9-2.1.4l-2.3-1.7c-.2-.2-.5-.2-.7 0l-3.1 2.4c-.4.3-1-.2-.7-.6l2.9-4.6c.5-.7 1.4-.9 2.1-.4l2.3 1.7c.2.2.5.2.7 0l3.1-2.4c.4-.3 1 .2.7.6z" />
      </svg>
      <span className="hidden sm:inline">Message us</span>
    </a>
  );
}
