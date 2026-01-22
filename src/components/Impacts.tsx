
import { Gavel, Users, FileWarning, TrendingDown, PhoneCall } from 'lucide-react';

export default function Impacts() {
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
        <section className="py-24 bg-teal-900 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-800/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Impactos diretos no RH
                    </h2>
                    <p className="text-teal-200/70 max-w-2xl mx-auto text-lg">
                        A mudança exige uma postura estratégica. Veja onde sua atenção deve estar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {impacts.map((item, idx) => (
                        <div key={idx} className="bg-teal-950/40 p-6 rounded-2xl hover:bg-teal-900/60 transition-all duration-300 group border border-teal-800/50 hover:border-gold-500/30">
                            <div className="w-12 h-12 rounded-lg bg-teal-900/50 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors border border-teal-800/50 group-hover:border-gold-500/30">
                                <item.icon className="w-6 h-6 text-teal-400 group-hover:text-gold-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-100">
                                {item.title}
                            </h3>
                            <p className="text-teal-300/60 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="inline-flex items-center gap-3 bg-white text-teal-950 hover:bg-gold-50 font-bold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(253,230,138,0.4)] transform hover:-translate-y-1 group">
                        <PhoneCall className="w-5 h-5 text-teal-800 group-hover:text-gold-700" />
                        Veja na prática – receba a ligação
                    </button>
                </div>
            </div>
        </section>
    );
}
