import LeadForm from './LeadForm';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden bg-teal-950">

            {/* Background Ambience (Glassmorphism 2.0 Depth) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Main glow - Central */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-teal-900/40 rounded-full blur-[120px] opacity-60 mix-blend-screen"></div>
                {/* Accent glow - Gold Left */}
                <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-gold-600/10 rounded-full blur-[100px] opacity-40 mix-blend-screen animate-float"></div>
                {/* Accent glow - Teal Right */}
                <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-teal-500/10 rounded-full blur-[120px] opacity-30 mix-blend-lighten floating-reverse" style={{ animationDelay: '2s' }}></div>

                {/* Grain Texture for Film Quality */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">

                {/* Typographic Hero Layout */}
                <div className="text-center max-w-5xl mx-auto mb-10 md:mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-900/50 border border-teal-700/50 text-gold-400 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 md:mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold-500 animate-pulse"></span>
                        Atualização NR-1 2026
                    </div>

                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] md:leading-[0.9] tracking-tight mb-6 md:mb-8">
                        A NR-1 MUDOU. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-teal-600 opacity-80">RISCO</span>
                        <span className="text-gradient-gold"> PSICOSSOCIAL</span>
                    </h1>

                    <p className="text-base md:text-xl text-teal-100/70 max-w-2xl mx-auto leading-relaxed px-4">
                        A partir de 2026, a saúde mental é obrigação legal no PGR. <br className="hidden md:block" />
                        Sua empresa está preparada ou exposta?
                    </p>
                </div>

                {/* Floating Form - The Anchor */}
                <div className="w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <LeadForm />
                </div>

            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest text-teal-300">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-teal-500 to-transparent"></div>
            </div>
        </section>
    );
}
