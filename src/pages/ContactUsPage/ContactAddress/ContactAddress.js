// import React and components required for the ContactAddress component
import React, { useEffect, useState } from 'react';
import { fetchApi } from '../../../utils/fetchApi';

const ContactAddress = () => {
  // Set up state to hold contact data and error status
  const [contactData, setContactData] = useState([]);
  const [isError, setIsError] = useState(false);

  // Fetch contact data on component mount using useEffect hook
  useEffect(() => {
    fetchApi('http://localhost:5000/contactData', { ContactAddress })
      .then((resInJson) => {
        // If the response is not a 404 error, set the contact data and clear the error
        if (resInJson.status !== 404) {
          setContactData(resInJson);
          setIsError(false);
        } else { // Otherwise, clear the contact data and set the error status
          setContactData([]);
          setIsError(true);
        }
      })
      .catch((err) => { // Handle any errors with fetching the data
        console.log(err);
        setContactData([]);
        setIsError(true);
      })
  }, []);

  // If there is an error, display an error message
  if (isError) {
    return (
      <div className='alert aler-danger'>
        Sorry! Unable to fetch contact address ! Try Again Later
      </div>
    );
  }

  // Otherwise, display the contact data
  return (
    <div className="col-md-6">
      <h2 className='fs-1 mb-4'>Contact Us</h2>
      <p className="mb-5">This page should provide clear and concise information on how customers can reach out to the business via email, phone, or live chat. The page should also have a contact form that customers can fill out to submit their queries directly to the business.</p>
      {contactData.map(({ id, address, phone, email }) => (
        <ul className="list-unstyled pl-md-5 mb-5" key={id}>
          <li className="d-flex text-black mb-2">
            <span className="mx-3"><span className="fa-solid fa-map"></span></span>{address}
          </li>
          <li className="d-flex text-black mb-2"><span className="mx-3"><span className="fa-solid fa-phone"></span></span>{phone[0]}, {phone[1]}</li>
          <li className="d-flex text-black"><span className="mx-3"><span className="fa-regular fa-envelope"></span></span>{email}</li>
        </ul>
      ))}
    </div>
  );
};

// export the ContactAddress component
export default ContactAddress;
