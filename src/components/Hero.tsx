import LeadForm from './LeadForm';
import { useTheme } from '../context/ThemeContext';
import { clsx } from 'clsx';

export default function Hero() {
    const { theme } = useTheme();

    return (
        <section className={clsx(
            "relative w-full min-h-screen flex flex-col items-center overflow-hidden transition-all duration-500",
            theme === 'glam' ? "justify-center py-20 bg-teal-950" :
                theme === 'brutal' ? "justify-start pt-32 pb-20 bg-white border-b-4 border-black" :
                    "justify-center py-24 bg-soft-bg"
        )}>

            {/* --- Theme A: Glam Ambience --- */}
            {theme === 'glam' && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-teal-900/40 rounded-full blur-[120px] opacity-60 mix-blend-screen"></div>
                    <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-gold-600/10 rounded-full blur-[100px] opacity-40 mix-blend-screen animate-float"></div>
                    <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-teal-500/10 rounded-full blur-[120px] opacity-30 mix-blend-lighten floating-reverse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>
            )}

            {/* --- Theme B: Brutal Grid Background --- */}
            {theme === 'brutal' && (
                <div className="absolute inset-0 pointer-events-none opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            )}

            {/* --- Theme C: Soft Blobs --- */}
            {theme === 'soft' && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-soft-primary/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-soft-secondary/20 rounded-full blur-3xl" style={{ animationDelay: '3s' }}></div>
                </div>
            )}

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">

                {/* --- Layout Variations --- */}

                <div className={clsx(
                    "w-full max-w-5xl mx-auto mb-10 md:mb-16 animate-fade-in-up",
                    theme === 'brutal' ? "text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-start" : "text-center"
                )}>

                    {/* Badge */}
                    <div className={clsx(
                        theme === 'brutal' ? "col-span-full mb-4" : "flex justify-center mb-6 md:mb-8"
                    )}>
                        <div className={clsx(
                            "inline-flex items-center gap-2",
                            theme === 'glam' ? "px-3 py-1.5 rounded-full bg-teal-900/50 border border-teal-700/50 text-gold-400 text-xs md:text-sm font-semibold tracking-wide uppercase backdrop-blur-md" :
                                theme === 'brutal' ? "bg-black text-white px-4 py-2 text-sm font-bold uppercase tracking-widest skew-x-[-10deg]" :
                                    "px-4 py-2 rounded-full bg-white shadow-soft text-soft-primary text-sm font-bold tracking-wide"
                        )}>
                            {theme === 'glam' && <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold-500 animate-pulse"></span>}
                            {theme === 'brutal' && <span className="mr-2">⚠️</span>}
                            Atualização NR-1 2026
                        </div>
                    </div>

                    {/* Headline */}
                    <div className={theme === 'brutal' ? "md:col-span-1" : ""}>
                        <h1 className={clsx(
                            "font-black tracking-tight mb-6 md:mb-8 transition-all duration-500",
                            theme === 'glam' ? "text-4xl md:text-7xl lg:text-8xl text-white leading-[0.95] md:leading-[0.9]" :
                                theme === 'brutal' ? "text-5xl md:text-8xl leading-[0.85] text-black uppercase" :
                                    "text-4xl md:text-6xl text-soft-text font-rounded leading-tight"
                        )}>
                            {theme === 'glam' ? (
                                <>
                                    A NR-1 MUDOU. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-teal-600 opacity-80">RISCO</span>
                                    <span className="text-gradient-gold"> PSICOSSOCIAL</span>
                                </>
                            ) : theme === 'brutal' ? (
                                <>
                                    NR-1 <span className="bg-bw-alert text-white px-2">RISCO</span> <br />
                                    <span className="underline decoration-4 decoration-bw-warning underline-offset-8">FATAL.</span>
                                </>
                            ) : (
                                <>
                                    Saúde mental <br />
                                    agora é <span className="text-soft-primary">regra.</span>
                                </>
                            )}
                        </h1>

                        <p className={clsx(
                            "leading-relaxed transition-all duration-500",
                            theme === 'glam' ? "text-base md:text-xl text-teal-100/70 max-w-2xl mx-auto px-4" :
                                theme === 'brutal' ? "text-lg md:text-xl text-black font-mono border-l-4 border-black pl-4 mt-8" :
                                    "text-lg text-slate-500 max-w-xl mx-auto mt-4"
                        )}>
                            A partir de 2026, a saúde mental é obrigação legal no PGR. <br className="hidden md:block" />
                            Sua empresa está preparada ou exposta?
                        </p>
                    </div>

                    {/* Form Anchor Position for Brutal Theme */}
                    {theme === 'brutal' && (
                        <div className="md:col-span-1 pt-8 md:pt-0">
                            <div className="w-full max-w-md ml-auto border-4 border-black shadow-brutal p-1 bg-white">
                                <LeadForm />
                            </div>
                        </div>
                    )}

                </div>

                {/* Floating Form - Standard Position (Glam/Soft) */}
                {theme !== 'brutal' && (
                    <div className={clsx(
                        "w-full max-w-md animate-fade-in-up transition-all duration-500",
                        theme === 'soft' && "transform hover:-translate-y-2"
                    )} style={{ animationDelay: '0.2s' }}>
                        <LeadForm />
                    </div>
                )}

            </div>

            {/* Scroll Indicator */}
            {theme === 'glam' && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                    <span className="text-[10px] uppercase tracking-widest text-teal-300">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-teal-500 to-transparent"></div>
                </div>
            )}
        </section>
    );
}
