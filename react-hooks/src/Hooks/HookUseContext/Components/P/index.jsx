import { useContext } from 'react';
import { globalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const P = () => {
  const context = useContext(globalContext);
  const {
    contextState: { body },
    setState,
  } = context;

  return (
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body}
    </p>
  );
};
