import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const GoBack = ({ to, children }) => {
  return (
    <div>
      <Link to={to}>
        <HiArrowLeft size="24" />
        {children}
      </Link>
    </div>
  );
};

export default GoBack;
