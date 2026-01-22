import { useState } from 'react';
import { Factory, HeartPulse, ShoppingBag, Briefcase, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
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
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState('industry');
    const activeContent = segments.find(s => s.id === activeTab) || segments[0];

    return (
        <section className={clsx(
            "py-24 transition-colors duration-500",
            theme === 'glam' && "bg-teal-900 border-t border-teal-800/50",
            theme === 'brutal' && "bg-bw-warning border-b-4 border-black",
            theme === 'soft' && "bg-soft-surface"
        )}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className={clsx(
                        "text-3xl font-bold mb-2 transition-colors",
                        theme === 'glam' && "text-white",
                        theme === 'brutal' && "text-black uppercase font-mono tracking-tighter",
                        theme === 'soft' && "text-soft-text font-rounded"
                    )}>Aplicável ao seu Segmento</h2>
                    <p className={clsx(
                        "mt-2 transition-colors",
                        theme === 'glam' && "text-teal-200/70",
                        theme === 'brutal' && "text-black font-mono font-bold bg-white inline-block px-2 border-2 border-black",
                        theme === 'soft' && "text-slate-500"
                    )}>A solução se adapta à realidade da sua operação.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
                    {segments.map((segment) => (
                        <button
                            key={segment.id}
                            onClick={() => setActiveTab(segment.id)}
                            className={clsx(
                                "flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-medium transition-all duration-300",
                                theme === 'glam' && "rounded-full border",
                                theme === 'brutal' && "border-2 border-black font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]",
                                theme === 'soft' && "rounded-xl shadow-soft transition-all active:shadow-soft-inner",

                                // Active states
                                activeTab === segment.id && theme === 'glam' && "bg-gold-500 text-teal-950 shadow-lg shadow-gold-500/20 scale-105 border-gold-400",
                                activeTab !== segment.id && theme === 'glam' && "bg-teal-950/50 text-teal-400 border-teal-800 hover:bg-teal-900 hover:text-gold-200",

                                activeTab === segment.id && theme === 'brutal' && "bg-black text-white",
                                activeTab !== segment.id && theme === 'brutal' && "bg-white text-black hover:bg-gray-100",

                                activeTab === segment.id && theme === 'soft' && "bg-soft-primary text-white shadow-soft-inner",
                                activeTab !== segment.id && theme === 'soft' && "bg-soft-bg text-slate-500 hover:text-soft-primary"
                            )}
                        >
                            <segment.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            {segment.label}
                        </button>
                    ))}
                </div>

                <div className={clsx(
                    "p-6 md:p-12 animate-fade-in transition-all duration-500",
                    theme === 'glam' && "glass-panel rounded-3xl border border-teal-700/30 bg-teal-800/20",
                    theme === 'brutal' && "bg-white border-4 border-black shadow-brutal",
                    theme === 'soft' && "soft-card"
                )}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className={clsx(
                                "text-2xl font-bold mb-4",
                                theme === 'glam' && "text-white",
                                theme === 'brutal' && "text-black uppercase font-mono bg-yellow-300 inline-block px-2 border border-black",
                                theme === 'soft' && "text-soft-text font-rounded"
                            )}>{activeContent.title}</h3>
                            <p className={clsx(
                                "text-lg mb-8 leading-relaxed",
                                theme === 'glam' && "text-teal-200/80",
                                theme === 'brutal' && "text-black font-mono",
                                theme === 'soft' && "text-slate-500"
                            )}>
                                {activeContent.description}
                            </p>
                            <ul className="space-y-4">
                                {activeContent.points.map((point, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className={clsx(
                                            "w-6 h-6 flex items-center justify-center flex-shrink-0",
                                            theme === 'glam' && "rounded-full bg-teal-900/80 border border-teal-700",
                                            theme === 'brutal' && "bg-black text-white border border-black rounded-none",
                                            theme === 'soft' && "rounded-full bg-soft-bg shadow-soft-inner text-soft-primary"
                                        )}>
                                            <Check className={clsx(
                                                "w-3.5 h-3.5",
                                                theme === 'glam' && "text-gold-400",
                                                theme === 'brutal' && "text-white",
                                                theme === 'soft' && "text-soft-primary"
                                            )} />
                                        </div>
                                        <span className={clsx(
                                            "font-medium",
                                            theme === 'glam' && "text-teal-100",
                                            theme === 'brutal' && "text-black font-mono",
                                            theme === 'soft' && "text-soft-text"
                                        )}>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={clsx(
                            "relative h-64 md:h-80 flex items-center justify-center overflow-hidden transition-all",
                            theme === 'glam' && "bg-gradient-to-br from-teal-900 to-teal-950 rounded-2xl border border-teal-800 shadow-inner",
                            theme === 'brutal' && "bg-white border-4 border-black rounded-none pattern-dots",
                            theme === 'soft' && "bg-soft-bg rounded-3xl shadow-soft-inner"
                        )}>
                            {/* Visual abstraction for the segment */}
                            <activeContent.icon className={clsx(
                                "w-32 h-32 absolute -bottom-4 -right-4 transition-colors",
                                theme === 'glam' && "text-teal-800/50",
                                theme === 'brutal' && "text-gray-200 text-opacity-100",
                                theme === 'soft' && "text-soft-surface shadow-soft-inner"
                            )} />
                            <activeContent.icon className={clsx(
                                "w-24 h-24 relative z-10 transition-colors",
                                theme === 'glam' && "text-teal-500 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]",
                                theme === 'brutal' && "text-black drop-shadow-[4px_4px_0px_white]",
                                theme === 'soft' && "text-soft-primary filter drop-shadow-sm"
                            )} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
