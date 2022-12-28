import { createContext, useState } from 'react';
import { globalState } from './data';

export const globalContext = createContext();

// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setState] = useState(globalState);

  return (
    <globalContext.Provider value={{ contextState, setState }}>
      {/* eslint-disable-next-line */}
      {children}
    </globalContext.Provider>
  );
};
