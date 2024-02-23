import React from 'react';

function HeroSection() {
  return (
    <div className="flex">
      <div className="w-1/2 p-8 bg-gray-100">
        <h1 className="text-4xl font-bold font-poppins">LA BARRE WHIPPED BAR D'OPTIMUM NUTRITION</h1>
        <p className="text-base font-poppins text-gray-600 mt-4">Trouvez l'équilibre parfait entre une forte teneur en protéines et un goût délicieux</p>
        <div className="flex gap-6 mt-4">
          <input type="text" placeholder="Localisation" className="border border-gray-300 p-2 rounded-xl w-full" />
          <button className="bg-orange-500 text-white px-4 rounded">Calculer</button>
        </div>
        <p className="mt-4">
          <span className="text-orange-500">148 g CO2</span> soit l'équivalent de <span className="text-orange-500">770 m</span> en voiture
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src="https://i.ibb.co/1LnsWCp/Barre-5-ce-u-re-u-ales-coque-chocolat-noir.png" alt="Barre de céréales" className="max-w-full mx-auto" />
      </div>
    </div>
  );
}

export default HeroSection;
