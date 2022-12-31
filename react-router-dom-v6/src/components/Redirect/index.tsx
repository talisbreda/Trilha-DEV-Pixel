import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = window.setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      navigate('/about', {
        state: `state: ${Math.random()}`,
      });
    }

    return () => {
      clearTimeout(timeout.current);
    };
  });

  return (
    <div>
      <h1>Vaza daqui meu {time}</h1>
    </div>
  );
};
