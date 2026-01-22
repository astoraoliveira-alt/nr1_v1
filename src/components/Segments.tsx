import { useState } from 'react';
import { Factory, HeartPulse, ShoppingBag, Briefcase, Check } from 'lucide-react';
import { clsx } from 'clsx';

const segments = [
    {
        id: 'industry',
        label: 'Indústria',
        icon: Factory,
        title: 'Segurança Psicossocial no Chão de Fábrica',
        description: 'Ambientes de alto risco físico agora precisam integrar monitoramento mental. A IA identifica sinais de fadiga mental que podem causar acidentes.',
        points: ['Prevenção de acidentes por desatenção', 'Monitoramento de turnos exaustivos', 'Redução de afastamentos']
    },
    {
        id: 'services',
        label: 'Serviços',
        icon: Briefcase,
        title: 'Bem-estar em Ambientes Corporativos',
        description: 'Prazos apertados e alta pressão por resultados são os maiores vilões. Nosso agente mapeia o Burnout antes que ele ocorra.',
        points: ['Gestão de pressão por metas', 'Melhoria no clima organizacional', 'Retenção de talentos']
    },
    {
        id: 'health',
        label: 'Saúde',
        icon: HeartPulse,
        title: 'Cuidando de Quem Cuida',
        description: 'O setor com maior índice de estresse. A conformidade com a NR-1 é vital para manter a equipe focada e saudável.',
        points: ['Apoio emocional para plantonistas', 'Redução de erros médicos por estresse', 'Conformidade hospitalar rigorosa']
    },
    {
        id: 'retail',
        label: 'Varejo',
        icon: ShoppingBag,
        title: 'Atendimento e Pressão Comercial',
        description: 'Lidar com o público exige equilíbrio emocional. Mapeie os riscos da linha de frente com eficiência.',
        points: ['Gestão de conflitos com clientes', 'Saúde mental em picos de vendas', 'Monitoramento de equipes distribuídas']
    }
];

export default function Segments() {
    const [activeTab, setActiveTab] = useState('industry');
    const activeContent = segments.find(s => s.id === activeTab) || segments[0];

    return (
        <section className="py-24 bg-teal-900 border-t border-teal-800/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white">Aplicável ao seu Segmento</h2>
                    <p className="text-teal-200/70 mt-2">A solução se adapta à realidade da sua operação.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {segments.map((segment) => (
                        <button
                            key={segment.id}
                            onClick={() => setActiveTab(segment.id)}
                            className={clsx(
                                "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border",
                                activeTab === segment.id
                                    ? "bg-gold-500 text-teal-950 shadow-lg shadow-gold-500/20 scale-105 border-gold-400"
                                    : "bg-teal-950/50 text-teal-400 border-teal-800 hover:bg-teal-900 hover:text-gold-200"
                            )}
                        >
                            <segment.icon className="w-4 h-4" />
                            {segment.label}
                        </button>
                    ))}
                </div>

                <div className="glass-panel p-8 md:p-12 rounded-3xl animate-fade-in border border-teal-700/30 bg-teal-800/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">{activeContent.title}</h3>
                            <p className="text-lg text-teal-200/80 mb-8 leading-relaxed">
                                {activeContent.description}
                            </p>
                            <ul className="space-y-4">
                                {activeContent.points.map((point, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-teal-900/80 flex items-center justify-center flex-shrink-0 border border-teal-700">
                                            <Check className="w-3.5 h-3.5 text-gold-400" />
                                        </div>
                                        <span className="text-teal-100 font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-64 md:h-80 bg-gradient-to-br from-teal-900 to-teal-950 rounded-2xl flex items-center justify-center overflow-hidden border border-teal-800 shadow-inner">
                            {/* Visual abstraction for the segment */}
                            <activeContent.icon className="w-32 h-32 text-teal-800/50 absolute -bottom-4 -right-4" />
                            <activeContent.icon className="w-24 h-24 text-teal-500 relative z-10 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
