// Importing the required modules and components
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Defining the MenuItem component as a functional component
const MenuItem = ({ url, title }) => {
  // Rendering a list item with a NavLink component for navigation and a title
  return (
    <li className="nav-item">
      <NavLink to={url} className="nav-link">
        {title}
      </NavLink>
    </li>
  );
};

// Defining the PropTypes for the MenuItem component props
MenuItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};

// Exporting the MenuItem component as the default export
export default MenuItem;
