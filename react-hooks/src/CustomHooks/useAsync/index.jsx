import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(async () => {
    await new Promise((r) => setTimeout(r, 2000));

    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    await new Promise((r) => setTimeout(r, 2000));

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((error) => {
        setState({
          result: null,
          error: error,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  useEffect(() => {
    setTimeout(() => {
      reFetchData();
    }, 6000);
  }, [reFetchData]);

  function handleClick() {
    reFetchData();
  }

  if (status === 'idle') {
    return <pre>Nothing running</pre>;
  }
  if (status === 'pending') {
    return <pre>Loading...</pre>;
  }
  if (status === 'error') {
    return <pre>{error.message}</pre>;
  }
  if (status === 'settled') {
    return <pre onClick={handleClick}>{JSON.stringify(result, null, 2)}</pre>;
  }

  return 'Puts';
};
