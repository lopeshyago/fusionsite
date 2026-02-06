
import React from 'react';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-3"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-3"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Footer: React.FC = () => {
    return (
        <footer id="contato" className="bg-fusion-black text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h3 className="text-3xl font-bold tracking-tighter mb-4">
                            <span className="text-fusion-orange">FUSION</span>
                        </h3>
                        <p className="text-gray-400">
                            Projetos personalizados para transformar seu condomínio em um ambiente mais saudável, ativo e integrado.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
                        <div className="space-y-4">
                            <a href="tel:2121358393" className="flex items-center text-lg text-gray-300 hover:text-fusion-orange transition-colors">
                                <PhoneIcon />
                                (21) 2135-8393 | (21) 96434-4808
                            </a>
                            <a href="mailto:contato@fusionassessoria.com.br" className="flex items-center text-lg text-gray-300 hover:text-fusion-orange transition-colors">
                                <MailIcon />
                                contato@fusionassessoria.com.br
                            </a>
                            <p className="flex items-center text-lg text-gray-300">
                                <MapPinIcon />
                                Rua Bombaim, 447 - Bangu, Rio de Janeiro/RJ
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Fusion Assessoria Esportiva. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
