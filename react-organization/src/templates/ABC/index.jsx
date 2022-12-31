import { useParams } from 'react-router-dom';

export const ABC = () => {
  const { slug, id } = useParams();

  return (
    <h1>
      a {slug} {id}
    </h1>
  );
};
