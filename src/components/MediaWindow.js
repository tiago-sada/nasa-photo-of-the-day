import React from 'react';
import styled from 'styled-components'

const Media = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 4px;
    background-repeat: 'no-repeat';
    background-size: cover;
`;

const Error = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 4px;
    display:flex;
    justify-content: center;
    align-items: center;
    color: lightgray;
`;


const MediaWindow = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { url, type } = props;

    if (type === "image") {
        return (
            <Media style={{ 
                backgroundImage: `url(${url})`
              }}/>
        )
    } else {
        return (
            <Error>Videos cannot be shown</Error>
        )
    }

};

export default MediaWindow;