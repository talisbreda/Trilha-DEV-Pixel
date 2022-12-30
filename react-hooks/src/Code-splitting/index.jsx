// -------------------------------------------------------------------
// IMPORTANTE
// Só será feito quando o código estiver mais complexo
// -------------------------------------------------------------------

import { lazy, useState, Suspense } from 'react';
// import LazyComponent from './lazy-component';

const loadComponent = () => import('./lazy-component');

const LazyComponent = lazy(loadComponent);

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          Show {show ? 'LC on screen' : 'LC off screen'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </>
  );
};
