
import { AlertCircle, FileText, HeartPulse } from 'lucide-react';

export default function KeyChanges() {
    return (
        <section className="py-24 bg-teal-950 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        O que realmente mudou?
                    </h2>
                    <p className="text-lg text-teal-200/80 leading-relaxed">
                        A atualização da norma regula o que antes era subjetivo. <br className="hidden md:block" />
                        Agora, os <span className="font-bold text-gold-400 bg-gold-950/30 px-2 py-0.5 rounded border border-gold-500/20">Riscos Psicossociais</span> devem constar no inventário.
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
                        <div key={idx} className="group glass-card p-8 rounded-2xl border-t border-teal-700/50 hover:border-gold-500/50">
                            <div className="w-14 h-14 rounded-2xl bg-teal-900/50 border border-teal-700 shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300">
                                <item.icon className="w-7 h-7 text-teal-400 group-hover:text-gold-400 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-200 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-teal-200/60 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
