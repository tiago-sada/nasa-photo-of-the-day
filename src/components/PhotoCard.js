import React from 'react';
import MediaWindow from  './MediaWindow';

const PhotoCard = props => {
    // 🔥 Make sure the parent of Post is passing the right props!
    const { photo } = props;
    return (
        <MediaWindow type={photo.media_type} url={photo.url} />
    )
}


export default PhotoCard;