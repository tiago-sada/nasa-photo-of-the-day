import React from 'react';
import PhotoCard from './PhotoCard.js';

const PhotoCards = (props) => {
    const { photos } = props;

    if (!photos) {
        return (
            <p>Data is loading</p>
        )
    }

    return (
        <div className='photos-container-wrapper'>
          {
            photos.map(photo => {
              return (
                <PhotoCard photo={photo} />
              )
            })
          }
        </div>
      );
  
    
};


export default PhotoCards;