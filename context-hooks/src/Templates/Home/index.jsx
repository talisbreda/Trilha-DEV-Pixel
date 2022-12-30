import { Button } from '../../Components/Button';
import { Heading } from '../../Components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';

export const Home = () => {
  //eslint-disable-next-line
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>
          Set 10
        </Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>
          Set 100
        </Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          Async increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          Async error
        </Button>
      </div>
    </>
  );
};
