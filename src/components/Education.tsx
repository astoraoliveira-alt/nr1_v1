
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

export default function Education() {
    const { theme } = useTheme();

    return (
        <section className={clsx(
            "py-24 transition-colors duration-500",
            theme === 'glam' && "bg-teal-950 border-t border-teal-800/30",
            theme === 'brutal' && "bg-bw-alert border-y-4 border-black",
            theme === 'soft' && "bg-soft-bg"
        )}>
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className={clsx(
                    "rounded-3xl p-8 md:p-12 relative overflow-hidden group transition-all duration-300",
                    theme === 'glam' && "bg-gradient-to-r from-teal-900 to-teal-800 border border-teal-700/50 shadow-2xl",
                    theme === 'brutal' && "bg-white border-4 border-black shadow-brutal rounded-none hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]",
                    theme === 'soft' && "soft-card"
                )}>
                    {theme === 'glam' && (
                        <>
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold-500/20 transition-all duration-700"></div>
                        </>
                    )}

                    <h2 className={clsx(
                        "text-2xl md:text-3xl font-bold mb-6 relative z-10 transition-colors",
                        theme === 'glam' && "text-white",
                        theme === 'brutal' && "text-black font-mono uppercase bg-bw-warning inline-block px-2 border-2 border-black transform -rotate-1",
                        theme === 'soft' && "text-soft-text font-rounded"
                    )}>
                        Entenda o peso da mudança
                    </h2>
                    <p className={clsx(
                        "text-lg leading-relaxed mb-10 relative z-10 transition-colors",
                        theme === 'glam' && "text-teal-100/90",
                        theme === 'brutal' && "text-black font-mono font-bold mt-4",
                        theme === 'soft' && "text-slate-500 font-medium"
                    )}>
                        “A atualização da NR-1 inclui formalmente os <span className={clsx(
                            "font-bold transition-colors",
                            theme === 'glam' && "text-gold-400",
                            theme === 'brutal' && "bg-black text-white px-1 uppercase",
                            theme === 'soft' && "text-soft-primary"
                        )}>riscos psicossociais</span> no Programa de Gerenciamento de Riscos.
                        Estresse, sobrecarga e clima organizacional agora exigem <span className={clsx(
                            theme === 'glam' && "underline decoration-gold-500/50 underline-offset-4",
                            theme === 'brutal' && "bg-black text-white px-1 uppercase",
                            theme === 'soft' && "text-soft-primary font-bold"
                        )}>mapeamento contínuo</span>.”
                    </p>

                    <button className={clsx(
                        "relative z-10 font-bold py-4 px-10 transition-all transform hover:-translate-y-1",
                        theme === 'glam' && "bg-white hover:bg-gold-50 text-teal-900 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(253,230,138,0.5)]",
                        theme === 'brutal' && "bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] rounded-none font-mono uppercase text-xl",
                        theme === 'soft' && "bg-soft-primary text-white rounded-2xl shadow-soft hover:shadow-soft-inner"
                    )}>
                        Agendar Diagnóstico Gratuito
                    </button>
                </div>
            </div>
        </section>
    );
}
