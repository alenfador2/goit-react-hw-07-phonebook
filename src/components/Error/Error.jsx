import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';

const Error = () => {
  const errorMessage = useSelector(selectError);

  return <div>{errorMessage}</div>;
};

export default Error;
