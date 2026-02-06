
import React from 'react';

const FusionLogo = () => (
    <div className="text-3xl font-bold tracking-tighter">
        <span className="text-fusion-orange">FUSION</span>
        <span className="text-white">.</span>
    </div>
);

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-fusion-black/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <FusionLogo />
                <a href="#contato" className="bg-fusion-orange text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base">
                    Fale Conosco
                </a>
            </div>
        </header>
    );
};

export default Header;
