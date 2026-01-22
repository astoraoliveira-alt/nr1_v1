import { BarChart3, Activity, Users, Phone } from 'lucide-react';

export default function DashboardPreview() {
    return (
        <section className="py-32 bg-teal-950 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-gradient-radial from-teal-900/40 to-transparent opacity-50 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Gestão de Risco em <span className="text-gradient-gold">Tempo Real</span>
                    </h2>
                    <p className="text-teal-200/70 max-w-2xl mx-auto text-lg">
                        Dashboard completo para monitoramento de conformidade NR-1 e clima organizacional.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto perspective-1000">

                    {/* Dashboard Window */}
                    <div className="relative bg-teal-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 border border-teal-700/50 overflow-hidden transform rotate-x-2 hover:rotate-x-0 transition-transform duration-700 ease-out">

                        {/* Fake Browser Toolbar */}
                        <div className="bg-teal-950/80 border-b border-teal-800 p-4 flex items-center gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="flex-1 bg-teal-900/50 h-8 rounded-md border border-teal-800 text-xs text-teal-400 flex items-center px-4 font-mono">
                                app.nr1-compliance.ai/dashboard
                            </div>
                        </div>

                        {/* Dark Dashboard Content */}
                        <div className="p-6 md:p-8 bg-gradient-to-br from-teal-900 via-teal-950 to-teal-950">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                                {[
                                    { label: "Chamadas / Mês", value: "2,543", trend: "+12%", icon: Phone, color: "text-teal-400" },
                                    { label: "Risco Crítico", value: "14%", trend: "-2%", color: "text-red-400", icon: Activity },
                                    { label: "Colaboradores", value: "856", trend: "Ativos", icon: Users, color: "text-gold-400" },
                                    { label: "Conformidade", value: "98%", trend: "Legal", color: "text-emerald-400", icon: BarChart3 },
                                ].map((stat, i) => (
                                    <div key={i} className="glass-card p-5 rounded-xl bg-teal-800/20 border border-teal-700/30">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 rounded-lg bg-teal-950/50 border border-teal-800">
                                                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                            </div>
                                            <span className={`text-xs font-semibold ${stat.trend.includes('+') ? 'text-emerald-400' : stat.trend.includes('-') ? 'text-emerald-400' : 'text-teal-400'}`}>
                                                {stat.trend}
                                            </span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-xs text-teal-400/60 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 glass-card p-6 rounded-xl bg-teal-800/20 border border-teal-700/30">
                                    <h3 className="font-semibold text-white mb-6 font-display">Mapeamento de Riscos</h3>
                                    <div className="space-y-5">
                                        {[
                                            { label: "Estresse Ocupacional", w: "65%", c: "bg-gold-500" },
                                            { label: "Sobrecarga de Trabalho", w: "45%", c: "bg-teal-500" },
                                            { label: "Clima Organizacional", w: "20%", c: "bg-emerald-500" },
                                        ].map((bar, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-teal-200">{bar.label}</span>
                                                    <span className="text-white font-medium">{bar.w}</span>
                                                </div>
                                                <div className="h-2 bg-teal-950/50 rounded-full overflow-hidden border border-teal-900">
                                                    <div className={`h-full ${bar.c} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]`} style={{ width: bar.w }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-card p-6 rounded-xl bg-teal-800/20 border border-teal-700/30">
                                    <h3 className="font-semibold text-white mb-6 font-display">Status das Chamadas</h3>
                                    <div className="flex items-center justify-center py-4">
                                        <div className="relative w-32 h-32 rounded-full border-8 border-teal-950 flex items-center justify-center shadow-inner">
                                            <span className="text-2xl font-bold text-white">85%</span>
                                            <svg className="absolute inset-0 rotate-[-90deg] drop-shadow-[0_0_10px_rgba(20,184,166,0.3)]" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-teal-500" strokeDasharray="289" strokeDashoffset="43" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-center text-sm text-teal-400 mt-2">
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
