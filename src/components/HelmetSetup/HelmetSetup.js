// Import React, PropTypes, Helmet and helmet provider
import React from 'react';
import Proptypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Define the Helmet Setup
const HelmetSetup = ({ title }) => {
  return (
    // Defining the HelmetProvider
    <HelmetProvider >
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
// proptypes of the title
HelmetSetup.propTypes = {
  title: Proptypes.string
};

// Export the HelmetSetup component
export default HelmetSetup;
