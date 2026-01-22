
import { Shield, Smile, TrendingUp, Users } from 'lucide-react';

export default function Benefits() {
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
        <section className="py-24 bg-teal-950/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Benefícios Estratégicos</h2>
                    <p className="text-teal-200/70">Por que adotar nossa IA para adequação NR-1?</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className="glass-card p-8 rounded-2xl border border-teal-800/30 hover:bg-teal-900/40 hover:border-gold-500/30 transition-all text-center group">
                            <div className="w-14 h-14 mx-auto bg-teal-900/50 rounded-2xl flex items-center justify-center mb-6 border border-teal-700/50 group-hover:border-gold-500/30 group-hover:bg-gold-500/10 transition-colors">
                                <b.icon className="w-7 h-7 text-teal-400 group-hover:text-gold-400 transition-colors" />
                            </div>
                            <h3 className="font-bold text-white mb-3 text-lg">{b.title}</h3>
                            <p className="text-sm text-teal-200/60 leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
