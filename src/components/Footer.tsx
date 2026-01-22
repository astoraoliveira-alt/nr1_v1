
import { PhoneCall, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-teal-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-teal-900">
            {/* Final CTA Section */}
            <div className="container mx-auto px-4 mb-24 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        A adequação à NR-1 não é opcional. <br />
                        <span className="text-gradient-gold">Comece agora.</span>
                    </h2>

                    <div className="flex flex-col items-center gap-4">
                        <button className="group bg-gold-500 hover:bg-gold-400 text-teal-950 text-lg font-bold py-5 px-10 rounded-full shadow-[0_0_40px_rgba(245,158,11,0.2)] hover:shadow-[0_0_60px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-3">
                            <PhoneCall className="w-6 h-6" />
                            Receber ligação e agendar conversa
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-teal-400/60 text-sm">
                            Após a demonstração, nossa equipe agenda uma reunião.
                        </p>
                    </div>
                </div>
            </div>

            {/* Separator */}
            <div className="container mx-auto px-4">
                <div className="h-px bg-teal-900 mb-12"></div>
            </div>

            {/* Links & Disclaimer */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-teal-500">
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gold-200 transition-colors">Aviso Legal</a>
                    <a href="#" className="hover:text-gold-200 transition-colors">Política de Privacidade</a>
                </div>

                <p className="text-center md:text-right">
                    © 2026 NR-1 Compliance AI. Todos os direitos reservados.
                    <br />
                    <span className="text-xs opacity-70">Esta solução não substitui consultoria jurídica ou técnica.</span>
                </p>
            </div>

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-teal-400/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
        </footer>
    );
}
