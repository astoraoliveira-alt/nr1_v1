
import { Shield, Smile, TrendingUp, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

export default function Benefits() {
    const { theme } = useTheme();

    const benefits = [
        {
            icon: Shield,
            title: "Conformidade Total com NR-1",
            desc: "Evite multas e garanta que sua empresa esteja 100% alinhada às novas exigências legais de 2026."
        },
        {
            icon: Users,
            title: "Apoio Estratégico ao RH",
            desc: "Automatize a coleta de dados sensíveis, liberando o RH para focar em ações corretivas e humanizadas."
        },
        {
            icon: TrendingUp,
            title: "Prevenção de Riscos",
            desc: "Identifique focos de problemas psicossociais antes que eles virem afastamentos ou processos."
        },
        {
            icon: Smile,
            title: "Melhoria do Clima",
            desc: "Empresas que cuidam da saúde mental têm equipes mais engajadas, produtivas e leais."
        }
    ];

    return (
        <section className={clsx(
            "py-24 transition-colors duration-500",
            theme === 'glam' && "bg-teal-950/50",
            theme === 'brutal' && "bg-white border-b-4 border-black",
            theme === 'soft' && "bg-soft-bg"
        )}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className={clsx(
                        "text-3xl font-bold mb-4 transition-colors",
                        theme === 'glam' && "text-white",
                        theme === 'brutal' && "text-black uppercase font-mono tracking-tighter",
                        theme === 'soft' && "text-soft-text font-rounded"
                    )}>Benefícios Estratégicos</h2>
                    <p className={clsx(
                        "transition-colors",
                        theme === 'glam' && "text-teal-200/70",
                        theme === 'brutal' && "text-black font-mono font-bold border-b-2 border-black inline-block pb-1",
                        theme === 'soft' && "text-slate-500 font-medium"
                    )}>Por que adotar nossa IA para adequação NR-1?</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className={clsx(
                            "p-8 transition-all duration-300 text-center group",
                            theme === 'glam' && "glass-card rounded-2xl border border-teal-800/30 hover:bg-teal-900/40 hover:border-gold-500/30",
                            theme === 'brutal' && "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none",
                            theme === 'soft' && "soft-card"
                        )}>
                            <div className={clsx(
                                "w-14 h-14 mx-auto flex items-center justify-center mb-6 transition-all",
                                theme === 'glam' && "bg-teal-900/50 rounded-2xl border border-teal-700/50 group-hover:border-gold-500/30 group-hover:bg-gold-500/10",
                                theme === 'brutal' && "bg-black text-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_#ccc]",
                                theme === 'soft' && "bg-soft-surface text-soft-primary rounded-2xl shadow-soft-inner"
                            )}>
                                <b.icon className={clsx(
                                    "w-7 h-7 transition-colors",
                                    theme === 'glam' && "text-teal-400 group-hover:text-gold-400",
                                    theme === 'brutal' && "text-white",
                                    theme === 'soft' && "text-soft-primary"
                                )} />
                            </div>
                            <h3 className={clsx(
                                "font-bold mb-3 text-lg transition-colors",
                                theme === 'glam' && "text-white",
                                theme === 'brutal' && "text-black font-mono uppercase bg-yellow-300 inline-block px-1",
                                theme === 'soft' && "text-soft-text font-rounded"
                            )}>{b.title}</h3>
                            <p className={clsx(
                                "text-sm leading-relaxed",
                                theme === 'glam' && "text-teal-200/60",
                                theme === 'brutal' && "text-black font-mono mt-2",
                                theme === 'soft' && "text-slate-500"
                            )}>{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
