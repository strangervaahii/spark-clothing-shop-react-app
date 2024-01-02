// import React and components required for the ContactUsPage component
import React from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import ContactAddress from './ContactAddress/ContactAddress';
import GetInTouch from './GetInTouch/GetInTouch';

// define the ContactUsPage component
const ContactUsPage = () => {
  // return the component's JSX
  return (
    <>
      {/* Set the page title using the HelmetSetup component */}
      <HelmetSetup title='ContactUsPage' />
      <div className="container">
        <div className="row">
          {/* Render the ContactAddress component */}
          <ContactAddress data-testid='contactAddress' />
          {/* Render the GetInTouch component */}
          <GetInTouch data-testid='getInTouch' />
        </div>
      </div>
    </>
  )
}

// export the ContactUsPage component
export default ContactUsPage;
