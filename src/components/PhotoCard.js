import React from 'react';
import MediaWindow from  './MediaWindow';
import styled from 'styled-components'

const Card = styled.div`
    margin: 15px;
    min-width: 200px;
    border: solid 2px lightgrey;
    min-height: 200;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, .15);
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PhotoCard = props => {
    // 🔥 Make sure the parent of Post is passing the right props!
    const { photo } = props;
    return (
        <Card>
            <MediaWindow type={photo.media_type} url={photo.url} />
        </Card>
        
    )
}


export default PhotoCard;