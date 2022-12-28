import { useDebugValue, useEffect, useState } from 'react';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  // aparece no React developer Tools, ajuda pra debugar
  useDebugValue(`Query ${queryValue}`, (name) => {
    return name + ' modificado';
  });

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

export const Home = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 510px)');
  const small = useMediaQuery('(max-width: 509px)');
  const background = huge
    ? 'green'
    : big
    ? 'red'
    : medium
    ? 'yellow'
    : small
    ? 'purple'
    : null;
  return <h1 style={{ fontSize: '60px', background }}>aaaaaaaaaa</h1>;
};
