import { Mic } from "./components/icons";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            {/* ─── NAV ─── */}
            <nav className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center gap-3 animate-fade-in-up">
                <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-accent" />
                </div>
                <span className="text-lg font-bold tracking-tight text-text-primary">
                    GamerScream
                </span>
            </nav>

            {/* ─── HERO ─── */}
            <section className="flex-1 flex flex-col items-center justify-center px-6 pb-20 relative">
                {/* Glow */}
                <div className="hero-glow" />

                {/* Badge */}
                <div className="animate-fade-in-up animate-delay-100 relative z-10 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-xs font-medium text-accent tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Available on Mac &amp; Windows
                    </span>
                </div>

                {/* Headline */}
                <h1 className="animate-fade-in-up animate-delay-200 relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight text-center leading-[1.1] max-w-3xl">
                    Your Squad,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">
                        One Click
                    </span>{" "}
                    Away.
                </h1>

                {/* Subtitle */}
                <p className="animate-fade-in-up animate-delay-300 relative z-10 mt-5 text-lg md:text-xl text-text-secondary text-center max-w-xl leading-relaxed">
                    Lightweight real-time voice chat built for gaming parties.
                    <br className="hidden md:block" />
                    No sign-up. No lag. Just connect and play.
                </p>

                {/* CTAs */}
                <div className="animate-fade-in-up animate-delay-400 relative z-10 mt-10 flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="#"
                        className="btn-glow inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-accent text-white font-semibold text-base"
                    >
                        <AppleIcon />
                        Download for Mac
                    </a>
                    <a
                        href="#"
                        className="btn-outline inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-transparent text-text-primary font-semibold text-base border border-border"
                    >
                        <WindowsIcon />
                        Download for Windows
                    </a>
                </div>

                {/* ─── SCREENSHOT PLACEHOLDER ─── */}
                <div className="animate-fade-in-up animate-delay-500 relative z-10 mt-16 w-full max-w-4xl">
                    <div className="screenshot-frame rounded-2xl overflow-hidden aspect-[16/10] flex items-center justify-center">
                        <div className="flex flex-col items-center gap-3 text-text-muted">
                            <svg
                                className="w-12 h-12 opacity-30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                                />
                            </svg>
                            <span className="text-sm font-medium">App screenshot coming soon</span>
                        </div>
                    </div>
                </div>

                {/* Platform badges */}
                <div className="animate-fade-in-up animate-delay-600 relative z-10 mt-10 flex items-center gap-8">
                    <div className="platform-icon flex items-center gap-2 text-text-muted">
                        <AppleIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">macOS</span>
                    </div>
                    <div className="w-px h-5 bg-border" />
                    <div className="platform-icon flex items-center gap-2 text-text-muted">
                        <WindowsIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">Windows</span>
                    </div>
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <footer className="w-full border-t border-border/50 py-6">
                <p className="text-center text-xs text-text-muted">
                    © 2026 GamerScream. All rights reserved.
                </p>
            </footer>
        </main>
    );
}

/* ─── SVG ICONS ─── */
function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );
}

function WindowsIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12V6.75l6-1.32v6.48L3 12zm6.2.09v6.63l-6.2-1.36V12.09h6.2zM10 5.3L21 3v9h-11V5.3zm11 6.8v9.03L10 18.62V12.1h11z" />
        </svg>
    );
}
