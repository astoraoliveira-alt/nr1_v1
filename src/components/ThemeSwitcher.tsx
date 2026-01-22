import { useTheme } from '../context/ThemeContext';
import { clsx } from 'clsx';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex flex-col items-center gap-6 mt-12 animate-fade-in">
            <h3 className={clsx(
                "text-sm font-bold uppercase tracking-widest",
                theme === 'glam' ? "text-gold-400" :
                    theme === 'brutal' ? "text-black bg-bw-warning px-2" :
                        "text-soft-primary"
            )}>
                Escolha a Experiência Visual
            </h3>

            <div className={clsx(
                "flex gap-4 p-2 rounded-full transition-all duration-500",
                theme === 'glam' ? "bg-teal-900/50 border border-teal-700 backdrop-blur-md" :
                    theme === 'brutal' ? "bg-white border-2 border-black rounded-none shadow-brutal" :
                        "bg-soft-surface shadow-soft rounded-2xl"
            )}>
                <button
                    onClick={() => setTheme('glam')}
                    className={clsx(
                        "flex flex-col items-center gap-2 px-6 py-3 rounded-full transition-all duration-300",
                        theme === 'glam' ? "bg-teal-800 text-gold-400 shadow-lg" : "text-slate-400 hover:text-white"
                    )}
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-900 border border-gold-500/30"></div>
                    <span className="text-xs font-medium">Premium AI</span>
                </button>

                <button
                    onClick={() => setTheme('brutal')}
                    className={clsx(
                        "flex flex-col items-center gap-2 px-6 py-3 transition-all duration-300",
                        theme === 'brutal' ? "bg-bw-alert text-white font-mono border border-black rounded-none" : "text-slate-400 hover:text-black font-mono rounded-none"
                    )}
                >
                    <div className="w-8 h-8 bg-black border-2 border-white"></div>
                    <span className="text-xs font-bold uppercase">Compliance</span>
                </button>

                <button
                    onClick={() => setTheme('soft')}
                    className={clsx(
                        "flex flex-col items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300",
                        theme === 'soft' ? "bg-soft-primary text-white shadow-soft-inner" : "text-slate-400 hover:text-soft-primary"
                    )}
                >
                    <div className="w-8 h-8 rounded-xl bg-soft-primary shadow-soft"></div>
                    <span className="text-xs font-semibold">Care Human</span>
                </button>
            </div>

            <p className={clsx(
                "text-xs max-w-md text-center transition-colors duration-500",
                theme === 'glam' ? "text-teal-400/60" :
                    theme === 'brutal' ? "text-black font-mono bg-white mx-auto" :
                        "text-soft-text/60"
            )}>
                *Alternar o tema muda completamente o layout e a psicologia visual da página para testes A/B.
            </p>
        </div>
    );
}
