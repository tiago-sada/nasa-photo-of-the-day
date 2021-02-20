import React from 'react';
import PhotoCard from './PhotoCard.js';
import styled from 'styled-components'

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const PhotoCards = (props) => {
    const { photos } = props;

    if (!photos) {
        return (
            <p>Data is loading</p>
        )
    }

    return (
        <Gallery>
          {
            photos.map(photo => {
              return (
                <PhotoCard photo={photo} />
              )
            })
          }
        </Gallery>
      );
  
    
};


export default PhotoCards;