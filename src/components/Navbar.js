import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-transparent py-4 px-6">
      <ul className="flex space-x-4">
        <li><a href="#" className="nav-link hover:text-black hover:border-b-2 hover:border-orange-500">Home</a></li>
        <li><a href="#" className="nav-link hover:text-black hover:border-b-2 hover:border-orange-500">Notre Produit</a></li>
        <li><a href="#" className="nav-link hover:text-black hover:border-b-2 hover:border-orange-500">Notre Équipe</a></li>
        <li><a href="#" className="nav-link hover:text-black hover:border-b-2 hover:border-orange-500">F.A.Q</a></li>
      </ul>
      <div className="flex items-center justify-center flex-grow">
        <img src="https://i.ibb.co/cNbDk8J/loooo.png" alt="Mon Logo" className="max-w-24" />
      </div>
      <div className="flex items-center">
        <button className="ml-4 py-2 px-4 bg-white text-gray-900 rounded hover:bg-gray-300 hover:text-gray-900">Connexion</button>
        <button className="ml-4 py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-400">Inscription</button>
      </div>
    </nav>
  );
}

export default Navbar;
