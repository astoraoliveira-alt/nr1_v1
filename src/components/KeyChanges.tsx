
import { AlertCircle, FileText, HeartPulse } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

export default function KeyChanges() {
    const { theme } = useTheme();

    return (
        <section className={clsx(
            "py-24 relative transition-colors duration-500",
            theme === 'glam' && "bg-teal-950",
            theme === 'brutal' && "bg-white border-b-4 border-black",
            theme === 'soft' && "bg-soft-bg"
        )}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className={clsx(
                        "text-3xl md:text-5xl font-bold mb-6 tracking-tight transition-colors duration-300",
                        theme === 'glam' && "text-white",
                        theme === 'brutal' && "text-black uppercase font-mono tracking-tighter",
                        theme === 'soft' && "text-soft-text font-rounded tracking-tight"
                    )}>
                        O que realmente mudou?
                    </h2>
                    <p className={clsx(
                        "text-lg leading-relaxed transition-colors duration-300",
                        theme === 'glam' && "text-teal-200/80",
                        theme === 'brutal' && "text-black font-mono text-sm border-l-4 border-black pl-4 text-left",
                        theme === 'soft' && "text-slate-500 font-medium"
                    )}>
                        A atualização da norma regula o que antes era subjetivo. <br className="hidden md:block" />
                        Agora, os <span className={clsx(
                            "font-bold px-2 py-0.5 transition-all duration-300",
                            theme === 'glam' && "text-gold-400 bg-gold-950/30 rounded border border-gold-500/20",
                            theme === 'brutal' && "bg-black text-white italic",
                            theme === 'soft' && "text-soft-primary bg-soft-primary/10 rounded-lg"
                        )}>Riscos Psicossociais</span> devem constar no inventário.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: FileText,
                            title: "Obrigatoriedade no PGR",
                            desc: "Riscos mentais e emocionais devem ser documentados formalmente no Programa de Gerenciamento de Riscos."
                        },
                        {
                            icon: HeartPulse,
                            title: "Saúde Mental é Lei",
                            desc: "O bem-estar psicológico passa a ter o mesmo peso que a segurança física nas fiscalizações."
                        },
                        {
                            icon: AlertCircle,
                            title: "Multas e Penalidades",
                            desc: "Empresas que não apresentarem o mapeamento psicossocial estarão sujeitas a novas sanções pesadas."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className={clsx(
                            "group p-8 transition-all duration-300",
                            theme === 'glam' && "glass-card rounded-2xl border-t border-teal-700/50 hover:border-gold-500/50",
                            theme === 'brutal' && "bg-white border-2 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
                            theme === 'soft' && "soft-card hover:shadow-soft-inner"
                        )}>
                            <div className={clsx(
                                "w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300",
                                theme === 'glam' && "rounded-2xl bg-teal-900/50 border border-teal-700 shadow-inner group-hover:scale-110 group-hover:bg-gold-500/10 group-hover:border-gold-500/30",
                                theme === 'brutal' && "border-2 border-black bg-bw-warning rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-white",
                                theme === 'soft' && "rounded-2xl bg-soft-bg shadow-soft-inner text-soft-primary"
                            )}>
                                <item.icon className={clsx(
                                    "w-7 h-7 transition-colors",
                                    theme === 'glam' && "text-teal-400 group-hover:text-gold-400",
                                    theme === 'brutal' && "text-black group-hover:text-white",
                                    theme === 'soft' && "text-soft-primary"
                                )} />
                            </div>
                            <h3 className={clsx(
                                "text-xl font-bold mb-4 transition-colors",
                                theme === 'glam' && "text-white group-hover:text-gold-200",
                                theme === 'brutal' && "text-black font-mono uppercase bg-yellow-300 inline-block px-1",
                                theme === 'soft' && "text-soft-text font-rounded"
                            )}>
                                {item.title}
                            </h3>
                            <p className={clsx(
                                "text-sm leading-relaxed",
                                theme === 'glam' && "text-teal-200/60",
                                theme === 'brutal' && "text-black font-mono",
                                theme === 'soft' && "text-slate-500"
                            )}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
