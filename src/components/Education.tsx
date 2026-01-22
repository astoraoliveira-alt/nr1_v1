

export default function Education() {
    return (
        <section className="py-24 bg-teal-950 border-t border-teal-800/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className="bg-gradient-to-r from-teal-900 to-teal-800 rounded-3xl p-8 md:p-12 border border-teal-700/50 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold-500/20 transition-all duration-700"></div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
                        Entenda o peso da mudança
                    </h2>
                    <p className="text-lg text-teal-100/90 leading-relaxed mb-10 relative z-10">
                        “A atualização da NR-1 inclui formalmente os <span className="font-bold text-gold-400">riscos psicossociais</span> no Programa de Gerenciamento de Riscos.
                        Estresse, sobrecarga e clima organizacional agora exigem <span className="underline decoration-gold-500/50 underline-offset-4">mapeamento contínuo</span>.”
                    </p>

                    <button className="relative z-10 bg-white hover:bg-gold-50 text-teal-900 font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(253,230,138,0.5)] transition-all transform hover:-translate-y-1">
                        Agendar Diagnóstico Gratuito
                    </button>
                </div>
            </div>
        </section>
    );
}
