import { useLocation } from 'react-router-dom';

export const About = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>Isso ai mesmo</h1>
      <p>{state}</p>
    </div>
  );
};
