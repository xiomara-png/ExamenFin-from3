import { createContext, useMemo, useState } from "react"; 
import { useFetchEffect } from "./useFetchEffect";

export const initialState = {theme: "light"}

export const ContextGlobal = createContext();


export const ContextProvider = ({ children }) => { 
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [contexto, setContexto] = useState(initialState);
  const providerValue = useMemo(() => ({contexto, setContexto}), [contexto]);
  
  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
