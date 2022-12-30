import { useEffect, useState, Component } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

// name doesn't matter
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    // eslint-disable-next-line
    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('F');
    }
  }, [counter]);

  return (
    <div>
      <button {...s} onClick={() => setCounter((s) => s + 1)}>
        Increase counter {counter}
      </button>
    </div>
  );
};

export const Home = () => {
  return (
    <div {...s}>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
    </div>
  );
};
