import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = () => {
  //eslint-disable-next-line
  const [state, actions] = useCounterContext();

  return <h1 style={{ fontSize: '60px' }}>{state.counter}</h1>;
};
