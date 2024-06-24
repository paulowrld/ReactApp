import React, { createContext, useState, ReactNode } from 'react';

export type Vaga = {
  titulo: string;
  descricao: string;
};

export type VagasContextType = {
  vagas: Vaga[];
  adicionarVaga: (vaga: Vaga) => void;
};

export const VagasContext = createContext<VagasContextType>({
  vagas: [],
  adicionarVaga: () => {},
});

export const VagasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [vagas, setVagas] = useState<Vaga[]>([]);

  const adicionarVaga = (vaga: Vaga) => {
    setVagas(vagasAnteriores => [...vagasAnteriores, vaga]);
  };

  return (
    <VagasContext.Provider value={{ vagas, adicionarVaga }}>
      {children}
    </VagasContext.Provider>
  );
};