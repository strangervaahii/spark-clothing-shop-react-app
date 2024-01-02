// Importing React and necessary hooks from react library
import React from 'react';
import Proptypes from 'prop-types';

// Creating a functional component named Comments
const Comments = ({ name, message, rating }) => {
  // Returning JSX to render comments
  return (
    <div className='row mt-2' data-testid='comment'>
      {/* Iterating through commentList and rendering each comment as a card */}
      <div className='col-md-12 mt-3'>
        <div className='card'>
          <div className='card-body d-flex align-items-center'>
            <img src='./assets/images/avatar.png' alt='profile picture' />
            <div>
              <h5 className='card-title mx-2'>{name}</h5>
              <p className='card-text mx-2'>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

Comments.propTypes = {
  name: Proptypes.string,
  message: Proptypes.string,
  rating: Proptypes.string
}
// Exporting Comments componen
export default Comments;
