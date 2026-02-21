export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            {/* ─── NAV ─── */}
            <nav className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center animate-fade-in-up">
                <img
                    src="/logo.svg"
                    alt="GamerScream"
                    className="h-5 w-auto drop-shadow-[0_2px_8px_rgba(249,115,22,0.3)]"
                />
            </nav>

            {/* ─── HERO — 2 Column ─── */}
            <section className="flex-1 flex items-center relative">
                <div className="hero-glow" />

                <div className="w-full max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    {/* LEFT — Text */}
                    <div className="flex flex-col items-start">

                        {/* Headline */}
                        <h1 className="animate-fade-in-up animate-delay-200 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                            Your Squad,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">
                                One Click
                            </span>{" "}
                            Away.
                        </h1>

                        {/* Subtitle */}
                        <p className="animate-fade-in-up animate-delay-300 mt-5 text-lg text-text-secondary leading-relaxed max-w-md">
                            Lightweight real-time voice chat built for gaming parties.
                            No sign-up. No lag. Just connect and play.
                        </p>

                        {/* CTAs */}
                        <div className="animate-fade-in-up animate-delay-400 mt-10 flex flex-col sm:flex-row items-start gap-4">
                            <a
                                href="https://github.com/burakereno/GamerScream-app/releases/latest/download/GamerScream-1.4.0-arm64.dmg"
                                className="btn-glow inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-accent text-white font-semibold text-base"
                            >
                                <AppleIcon />
                                Download for Mac
                            </a>
                            <a
                                href="https://github.com/burakereno/GamerScream-app/releases/latest/download/GamerScream-Setup-1.4.0.exe"
                                className="btn-outline inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-transparent text-text-primary font-semibold text-base border border-border"
                            >
                                <WindowsIcon />
                                Download for Windows
                            </a>
                        </div>

                    </div>

                    {/* RIGHT — Screenshot */}
                    <div className="animate-fade-in-up animate-delay-400">
                        <img
                            src="/screen.png"
                            alt="GamerScream App"
                            className="w-full h-auto block rounded-2xl"
                        />
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
