import { BarChart3, Activity, Users, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

export default function DashboardPreview() {
    const { theme } = useTheme();

    return (
        <section className={clsx(
            "py-20 md:py-32 overflow-hidden relative transition-colors duration-500",
            theme === 'glam' && "bg-teal-950",
            theme === 'brutal' && "bg-white border-b-4 border-black",
            theme === 'soft' && "bg-soft-bg"
        )}>
            {/* Background Ambience - Glam only */}
            {theme === 'glam' && (
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-gradient-radial from-teal-900/40 to-transparent opacity-50 blur-3xl pointer-events-none"></div>
            )}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className={clsx(
                        "text-3xl md:text-5xl font-bold mb-6 tracking-tight transition-colors duration-300",
                        theme === 'glam' && "text-white",
                        theme === 'brutal' && "text-black font-mono uppercase tracking-tighter",
                        theme === 'soft' && "text-soft-text font-rounded"
                    )}>
                        Gestão de Risco em <span className={clsx(
                            theme === 'glam' && "text-gradient-gold",
                            theme === 'brutal' && "bg-black text-white px-2 inline-block -rotate-1",
                            theme === 'soft' && "text-soft-primary"
                        )}>Tempo Real</span>
                    </h2>
                    <p className={clsx(
                        "max-w-2xl mx-auto text-lg transition-colors duration-300",
                        theme === 'glam' && "text-teal-200/70",
                        theme === 'brutal' && "text-black font-mono text-sm border-l-4 border-black pl-4 text-left",
                        theme === 'soft' && "text-slate-500 font-medium"
                    )}>
                        Dashboard completo para monitoramento de conformidade NR-1 e clima organizacional.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto perspective-1000">

                    {/* Dashboard Window */}
                    <div className={clsx(
                        "relative overflow-hidden transform rotate-x-2 hover:rotate-x-0 transition-all duration-700 ease-out",
                        theme === 'glam' && "bg-teal-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 border border-teal-700/50",
                        theme === 'brutal' && "bg-white border-4 border-black shadow-brutal rounded-none",
                        theme === 'soft' && "bg-soft-surface rounded-[2rem] shadow-soft border border-white"
                    )}>

                        {/* Fake Browser Toolbar */}
                        <div className={clsx(
                            "p-4 flex items-center gap-4 transition-colors",
                            theme === 'glam' && "bg-teal-950/80 border-b border-teal-800",
                            theme === 'brutal' && "bg-bw-warning border-b-4 border-black",
                            theme === 'soft' && "bg-soft-bg/50 border-b border-black/5"
                        )}>
                            <div className="flex gap-2">
                                <div className={clsx("w-3 h-3", theme === 'brutal' ? "bg-black rounded-none border border-black" : "rounded-full bg-red-500/80")}></div>
                                <div className={clsx("w-3 h-3", theme === 'brutal' ? "bg-white border-2 border-black rounded-none" : "rounded-full bg-amber-500/80")}></div>
                                <div className={clsx("w-3 h-3", theme === 'brutal' ? "bg-black rounded-none border border-black" : "rounded-full bg-green-500/80")}></div>
                            </div>
                            <div className={clsx(
                                "flex-1 h-8 flex items-center px-4 font-mono transition-colors",
                                theme === 'glam' && "bg-teal-900/50 rounded-md border border-teal-800 text-xs text-teal-400",
                                theme === 'brutal' && "bg-white border-2 border-black text-black text-xs uppercase font-bold rounded-none",
                                theme === 'soft' && "bg-soft-surface rounded-lg shadow-soft-inner text-xs text-soft-text"
                            )}>
                                app.nr1-compliance.ai/dashboard
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className={clsx(
                            "p-6 md:p-8 transition-colors",
                            theme === 'glam' && "bg-gradient-to-br from-teal-900 via-teal-950 to-teal-950",
                            theme === 'brutal' && "bg-white",
                            theme === 'soft' && "bg-soft-bg"
                        )}>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                                {[
                                    { label: "Chamadas / Mês", value: "2,543", trend: "+12%", icon: Phone, color: "text-teal-400" },
                                    { label: "Risco Crítico", value: "14%", trend: "-2%", color: "text-red-400", icon: Activity },
                                    { label: "Colaboradores", value: "856", trend: "Ativos", icon: Users, color: "text-gold-400" },
                                    { label: "Conformidade", value: "98%", trend: "Legal", color: "text-emerald-400", icon: BarChart3 },
                                ].map((stat, i) => (
                                    <div key={i} className={clsx(
                                        "p-5 transition-all",
                                        theme === 'glam' && "glass-card rounded-xl bg-teal-800/20 border border-teal-700/30",
                                        theme === 'brutal' && "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                        theme === 'soft' && "soft-card"
                                    )}>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={clsx(
                                                "p-2",
                                                theme === 'glam' && "rounded-lg bg-teal-950/50 border border-teal-800",
                                                theme === 'brutal' && "bg-black text-white border border-black rounded-none",
                                                theme === 'soft' && "rounded-lg bg-soft-bg shadow-soft-inner"
                                            )}>
                                                <stat.icon className={clsx(
                                                    "w-5 h-5",
                                                    theme === 'glam' && stat.color,
                                                    theme === 'brutal' && "text-white",
                                                    theme === 'soft' && "text-soft-primary"
                                                )} />
                                            </div>
                                            <span className={clsx(
                                                "text-xs font-semibold",
                                                theme === 'glam' && (stat.trend.includes('+') ? 'text-emerald-400' : stat.trend.includes('-') ? 'text-emerald-400' : 'text-teal-400'),
                                                theme === 'brutal' && "bg-black text-white px-1 font-mono",
                                                theme === 'soft' && "text-soft-secondary"
                                            )}>
                                                {stat.trend}
                                            </span>
                                        </div>
                                        <div className={clsx(
                                            "text-2xl font-bold",
                                            theme === 'glam' && "text-white",
                                            theme === 'brutal' && "text-black font-mono",
                                            theme === 'soft' && "text-soft-text"
                                        )}>
                                            {stat.value}
                                        </div>
                                        <div className={clsx(
                                            "text-xs font-medium",
                                            theme === 'glam' && "text-teal-400/60",
                                            theme === 'brutal' && "text-gray-500 uppercase",
                                            theme === 'soft' && "text-slate-400"
                                        )}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className={clsx(
                                    "md:col-span-2 p-6",
                                    theme === 'glam' && "glass-card rounded-xl bg-teal-800/20 border border-teal-700/30",
                                    theme === 'brutal' && "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none",
                                    theme === 'soft' && "soft-card"
                                )}>
                                    <h3 className={clsx(
                                        "font-semibold mb-6 font-display",
                                        theme === 'glam' && "text-white",
                                        theme === 'brutal' && "text-black uppercase border-b-2 border-black inline-block pb-1",
                                        theme === 'soft' && "text-soft-text"
                                    )}>Mapeamento de Riscos</h3>
                                    <div className="space-y-5">
                                        {[
                                            { label: "Estresse Ocupacional", w: "65%", c: "bg-gold-500" },
                                            { label: "Sobrecarga de Trabalho", w: "45%", c: "bg-teal-500" },
                                            { label: "Clima Organizacional", w: "20%", c: "bg-emerald-500" },
                                        ].map((bar, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className={clsx(
                                                        theme === 'glam' && "text-teal-200",
                                                        theme === 'brutal' && "text-black font-mono font-bold",
                                                        theme === 'soft' && "text-slate-500"
                                                    )}>{bar.label}</span>
                                                    <span className={clsx(
                                                        "font-medium",
                                                        theme === 'glam' && "text-white",
                                                        theme === 'brutal' && "text-black font-mono",
                                                        theme === 'soft' && "text-soft-primary"
                                                    )}>{bar.w}</span>
                                                </div>
                                                <div className={clsx(
                                                    "h-2 rounded-full overflow-hidden",
                                                    theme === 'glam' && "bg-teal-950/50 border border-teal-900",
                                                    theme === 'brutal' && "bg-white border-2 border-black rounded-none h-4",
                                                    theme === 'soft' && "bg-soft-bg shadow-soft-inner"
                                                )}>
                                                    <div className={clsx(
                                                        "h-full",
                                                        theme === 'glam' && `${bar.c} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]`,
                                                        theme === 'brutal' && "bg-black rounded-none border-r-2 border-white",
                                                        theme === 'soft' && "bg-soft-primary rounded-full"
                                                    )} style={{ width: bar.w }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={clsx(
                                    "p-6",
                                    theme === 'glam' && "glass-card rounded-xl bg-teal-800/20 border border-teal-700/30",
                                    theme === 'brutal' && "bg-bw-alert border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none",
                                    theme === 'soft' && "soft-card"
                                )}>
                                    <h3 className={clsx(
                                        "font-semibold mb-6 font-display",
                                        theme === 'glam' && "text-white",
                                        theme === 'brutal' && "text-black uppercase border-b-2 border-black inline-block pb-1",
                                        theme === 'soft' && "text-soft-text"
                                    )}>Status das Chamadas</h3>
                                    <div className="flex items-center justify-center py-4">
                                        <div className={clsx(
                                            "relative w-32 h-32 flex items-center justify-center",
                                            theme === 'glam' && "rounded-full border-8 border-teal-950 shadow-inner",
                                            theme === 'brutal' && "rounded-none border-4 border-black bg-white",
                                            theme === 'soft' && "rounded-full shadow-soft-inner bg-soft-bg border-4 border-soft-surface"
                                        )}>
                                            <span className={clsx(
                                                "text-2xl font-bold",
                                                theme === 'glam' && "text-white",
                                                theme === 'brutal' && "text-black font-mono",
                                                theme === 'soft' && "text-soft-primary"
                                            )}>85%</span>
                                            {theme === 'glam' && (
                                                <svg className="absolute inset-0 rotate-[-90deg] drop-shadow-[0_0_10px_rgba(20,184,166,0.3)]" viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-teal-500" strokeDasharray="289" strokeDashoffset="43" strokeLinecap="round" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <div className={clsx(
                                        "text-center text-sm mt-2",
                                        theme === 'glam' && "text-teal-400",
                                        theme === 'brutal' && "text-black font-bold uppercase",
                                        theme === 'soft' && "text-soft-secondary"
                                    )}>
                                        Engajamento positivo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
