import { useContext } from 'react';
import { globalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const H1 = () => {
  const context = useContext(globalContext);
  const {
    contextState: { title, counter },
  } = context;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
