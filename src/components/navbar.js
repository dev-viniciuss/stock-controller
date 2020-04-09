import React from 'react';
import { FiPackage } from 'react-icons/fi';

export default function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><FiPackage size={27}/></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/register">Cadastro</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/query">Consulta</a>
                </li>
            </ul>
        </div>
    </nav>
  );
};