import { useState } from 'react';
import { Phone, User, ArrowRight, CheckCircle, ShieldAlert } from 'lucide-react';

export default function LeadForm() {
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

    if (submitted) {
        return (
            <div className="glass-panel p-8 rounded-2xl text-center animate-fade-in border border-teal-500/30">
                <div className="mx-auto w-16 h-16 bg-teal-900/50 rounded-full flex items-center justify-center mb-4 border border-teal-500/50">
                    <CheckCircle className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Solicitação Confirmada</h3>
                <p className="text-teal-200 mb-6">
                    Nosso agente de IA entrará em contato em breve.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-gold-400 font-medium hover:text-gold-300 transition-colors"
                >
                    Voltar
                </button>
            </div>
        );
    }

    return (
        <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden backdrop-blur-2xl">
            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 text-gold-400 font-medium text-xs tracking-wider uppercase">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Demonstração Gratuita</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    Receba a ligação da IA
                </h3>
                <p className="text-sm text-teal-200/80 mb-6">
                    Veja na prática como a IA mapeia riscos psicossociais da NR-1 em segundos.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-xs font-medium text-teal-300 mb-1.5 uppercase tracking-wide">
                            Nome completo
                        </label>
                        <div className="relative group">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-600 group-focus-within:text-gold-500 transition-colors" />
                            <input
                                type="text"
                                id="name"
                                required
                                className="glass-input w-full pl-10 pr-4 py-3.5 rounded-xl outline-none"
                                placeholder="Seu nome"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-teal-300 mb-1.5 uppercase tracking-wide">
                            Telefone (WhatsApp)
                        </label>
                        <div className="relative group">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-600 group-focus-within:text-gold-500 transition-colors" />
                            <input
                                type="tel"
                                id="phone"
                                required
                                className="glass-input w-full pl-10 pr-4 py-3.5 rounded-xl outline-none"
                                placeholder="(11) 99999-9999"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-teal-950 font-bold py-4 px-6 rounded-xl shadow-lg shadow-gold-900/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
                    >
                        Receber ligação agora
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
    );
}
