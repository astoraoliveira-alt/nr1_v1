import { useState } from 'react';
import { Phone, User, ArrowRight, CheckCircle, ShieldAlert } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { clsx } from 'clsx';

export default function LeadForm() {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 9) {
            value = `${value.slice(0, 9)}-${value.slice(9)}`;
        }

        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.phone.length >= 14) {
            setTimeout(() => setSubmitted(true), 800);
        }
    };

    // --- Submitted State ---
    if (submitted) {
        return (
            <div className={clsx(
                "p-8 text-center animate-fade-in transition-all",
                theme === 'glam' ? "glass-panel border-teal-500/30 rounded-2xl" :
                    theme === 'brutal' ? "bg-bw-warning border-4 border-black shadow-brutal" :
                        "bg-soft-surface shadow-soft rounded-[2rem] border border-white"
            )}>
                <div className={clsx(
                    "mx-auto w-16 h-16 flex items-center justify-center mb-4 transition-all",
                    theme === 'glam' ? "bg-teal-900/50 rounded-full border border-teal-500/50" :
                        theme === 'brutal' ? "bg-black border-2 border-white" :
                            "bg-soft-secondary/20 rounded-full"
                )}>
                    <CheckCircle className={clsx(
                        "w-8 h-8",
                        theme === 'glam' ? "text-gold-400" :
                            theme === 'brutal' ? "text-white" :
                                "text-soft-secondary"
                    )} />
                </div>
                <h3 className={clsx(
                    "text-xl font-bold mb-2",
                    theme === 'glam' ? "text-white" :
                        theme === 'brutal' ? "text-black uppercase" :
                            "text-soft-text"
                )}>Solicitação Confirmada</h3>

                <p className={clsx(
                    "mb-6",
                    theme === 'glam' ? "text-teal-200" :
                        theme === 'brutal' ? "text-black font-bold" :
                            "text-slate-500"
                )}>
                    Nosso agente de IA entrará em contato em breve.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className={clsx(
                        "font-medium transition-colors",
                        theme === 'glam' ? "text-gold-400 hover:text-gold-300" :
                            theme === 'brutal' ? "text-black underline uppercase hover:bg-black hover:text-white px-2" :
                                "text-soft-primary hover:text-soft-primary/80"
                    )}
                >
                    Voltar
                </button>
            </div>
        );
    }

    // --- Active Form State ---
    return (
        <div className={clsx(
            "p-6 md:p-8 relative overflow-hidden transition-all duration-500",
            theme === 'glam' ? "glass-panel rounded-2xl backdrop-blur-2xl" :
                theme === 'brutal' ? "bg-white p-0" : // Border handled by wrapper in Hero
                    "bg-soft-surface rounded-[2rem] shadow-soft border border-white"
        )}>
            {/* Decorative Glow for Glam */}
            {theme === 'glam' && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl"></div>
            )}

            <div className="relative z-10">
                <div className={clsx(
                    "flex items-center gap-2 mb-2 font-medium text-xs tracking-wider uppercase",
                    theme === 'glam' ? "text-gold-400" :
                        theme === 'brutal' ? "text-white bg-black w-fit px-2 py-1 font-bold" :
                            "text-soft-primary bg-soft-primary/10 w-fit px-3 py-1 rounded-full"
                )}>
                    <ShieldAlert className="w-4 h-4" />
                    <span>Demonstração Gratuita</span>
                </div>

                <h3 className={clsx(
                    "text-2xl font-bold mb-2 transition-colors",
                    theme === 'glam' ? "text-white" :
                        theme === 'brutal' ? "text-black uppercase tracking-tighter" :
                            "text-soft-text"
                )}>
                    Receba a ligação da IA
                </h3>

                <p className={clsx(
                    "text-sm mb-6 transition-colors",
                    theme === 'glam' ? "text-teal-200/80" :
                        theme === 'brutal' ? "text-black font-mono text-xs border-b-2 border-black pb-4" :
                            "text-slate-500"
                )}>
                    Veja na prática como a IA mapeia riscos psicossociais da NR-1 em segundos.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className={clsx(
                            "block text-xs font-medium mb-1.5 uppercase tracking-wide transition-colors",
                            theme === 'glam' ? "text-teal-300" :
                                theme === 'brutal' ? "text-black font-bold" :
                                    "text-slate-400"
                        )}>
                            Nome completo
                        </label>
                        <div className="relative group">
                            <User className={clsx(
                                "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors z-10",
                                theme === 'glam' ? "text-teal-600 group-focus-within:text-gold-500" :
                                    theme === 'brutal' ? "text-black" :
                                        "text-slate-400 group-focus-within:text-soft-primary"
                            )} />
                            <input
                                type="text"
                                id="name"
                                required
                                className={clsx(
                                    "w-full pl-10 pr-4 py-3.5 outline-none transition-all",
                                    theme === 'glam' ? "glass-input rounded-xl" :
                                        theme === 'brutal' ? "brutal-input" :
                                            "soft-input"
                                )}
                                placeholder="Seu nome"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className={clsx(
                            "block text-xs font-medium mb-1.5 uppercase tracking-wide transition-colors",
                            theme === 'glam' ? "text-teal-300" :
                                theme === 'brutal' ? "text-black font-bold" :
                                    "text-slate-400"
                        )}>
                            Telefone (WhatsApp)
                        </label>
                        <div className="relative group">
                            <Phone className={clsx(
                                "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors z-10",
                                theme === 'glam' ? "text-teal-600 group-focus-within:text-gold-500" :
                                    theme === 'brutal' ? "text-black" :
                                        "text-slate-400 group-focus-within:text-soft-primary"
                            )} />
                            <input
                                type="tel"
                                id="phone"
                                required
                                className={clsx(
                                    "w-full pl-10 pr-4 py-3.5 outline-none transition-all",
                                    theme === 'glam' ? "glass-input rounded-xl" :
                                        theme === 'brutal' ? "brutal-input" :
                                            "soft-input"
                                )}
                                placeholder="(11) 99999-9999"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={clsx(
                            "w-full font-bold py-4 px-6 transition-all duration-300 transform flex items-center justify-center gap-2 mt-2",
                            theme === 'glam' ? "group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-teal-950 rounded-xl shadow-lg shadow-gold-900/20 hover:-translate-y-0.5" :
                                theme === 'brutal' ? "bg-bw-alert text-white border-2 border-black brutal-shadow uppercase hover:bg-black" :
                                    "soft-button hover:-translate-y-1"
                        )}
                    >
                        Receber ligação agora
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
    );
}
