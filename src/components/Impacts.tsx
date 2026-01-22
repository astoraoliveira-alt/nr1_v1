
import { Gavel, Users, FileWarning, TrendingDown, PhoneCall } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

export default function Impacts() {
    const { theme } = useTheme();

    const impacts = [
        {
            icon: Gavel,
            title: "Obrigações Legais Ampliadas",
            desc: "Não basta apenas prevenir acidentes físicos; o ambiente deve ser psicologicamente seguro."
        },
        {
            icon: Users,
            title: "Responsabilidade das Lideranças",
            desc: "Gestores agora respondem legalmente pelo clima organizacional e fatores de estresse."
        },
        {
            icon: FileWarning,
            title: "Revisão Obrigatória do PGR",
            desc: "Todo o Programa de Gerenciamento de Riscos deve ser atualizado para incluir os novos critérios."
        },
        {
            icon: TrendingDown,
            title: "Redução de Passivos",
            desc: "A adequação previne processos trabalhistas relacionados a Burnout e assédio moral."
        }
    ];

    return (
        <section className={clsx(
            "py-24 relative overflow-hidden transition-colors duration-500",
            theme === 'glam' && "bg-teal-900",
            theme === 'brutal' && "bg-bw-alert border-b-4 border-black",
            theme === 'soft' && "bg-soft-surface"
        )}>
            {/* Background gradients - Glam only */}
            {theme === 'glam' && (
                <>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-800/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                </>
            )}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className={clsx(
                        "text-3xl md:text-5xl font-bold mb-6 tracking-tight transition-colors duration-300",
                        theme === 'glam' && "text-white",
                        theme === 'brutal' && "text-black uppercase font-mono tracking-tighter",
                        theme === 'soft' && "text-soft-text font-rounded"
                    )}>
                        Impactos diretos no RH
                    </h2>
                    <p className={clsx(
                        "max-w-2xl mx-auto text-lg transition-colors duration-300",
                        theme === 'glam' && "text-teal-200/70",
                        theme === 'brutal' && "text-black font-mono bg-white inline-block border-2 border-black p-2 shadow-brutal",
                        theme === 'soft' && "text-slate-500 font-medium"
                    )}>
                        A mudança exige uma postura estratégica. Veja onde sua atenção deve estar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {impacts.map((item, idx) => (
                        <div key={idx} className={clsx(
                            "group p-6 transition-all duration-300",
                            theme === 'glam' && "bg-teal-950/40 rounded-2xl hover:bg-teal-900/60 border border-teal-800/50 hover:border-gold-500/30",
                            theme === 'brutal' && "bg-white border-2 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none",
                            theme === 'soft' && "bg-soft-bg rounded-2xl shadow-soft hover:shadow-soft-inner border border-white"
                        )}>
                            <div className={clsx(
                                "w-12 h-12 flex items-center justify-center mb-4 transition-colors",
                                theme === 'glam' && "rounded-lg bg-teal-900/50 border border-teal-800/50 group-hover:bg-gold-500/20 group-hover:border-gold-500/30",
                                theme === 'brutal' && "border-2 border-black bg-black text-white rounded-none",
                                theme === 'soft' && "rounded-xl bg-soft-surface text-soft-secondary shadow-soft-inner"
                            )}>
                                <item.icon className={clsx(
                                    "w-6 h-6",
                                    theme === 'glam' && "text-teal-400 group-hover:text-gold-400",
                                    theme === 'brutal' && "text-white",
                                    theme === 'soft' && "text-soft-primary"
                                )} />
                            </div>
                            <h3 className={clsx(
                                "text-lg font-bold mb-3 transition-colors",
                                theme === 'glam' && "text-white group-hover:text-gold-100",
                                theme === 'brutal' && "text-black font-mono uppercase bg-white border border-black px-2 inline-block",
                                theme === 'soft' && "text-soft-text font-rounded"
                            )}>
                                {item.title}
                            </h3>
                            <p className={clsx(
                                "text-sm leading-relaxed",
                                theme === 'glam' && "text-teal-300/60",
                                theme === 'brutal' && "text-black font-mono mt-2",
                                theme === 'soft' && "text-slate-500"
                            )}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className={clsx(
                        "inline-flex items-center gap-3 font-bold py-4 px-8 transition-all transform group",
                        theme === 'glam' && "bg-white text-teal-950 hover:bg-gold-50 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(253,230,138,0.4)] hover:-translate-y-1",
                        theme === 'brutal' && "bg-black text-white border-2 border-white shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none rounded-none font-mono uppercase tracking-widest",
                        theme === 'soft' && "text-white bg-soft-primary rounded-2xl shadow-soft hover:shadow-soft-inner"
                    )}>
                        <PhoneCall className={clsx(
                            "w-5 h-5",
                            theme === 'glam' && "text-teal-800 group-hover:text-gold-700",
                            theme === 'brutal' && "text-white",
                            theme === 'soft' && "text-white"
                        )} />
                        Veja na prática – receba a ligação
                    </button>
                </div>
            </div>
        </section>
    );
}
