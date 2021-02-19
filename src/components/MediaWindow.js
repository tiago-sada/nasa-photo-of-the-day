import React from 'react';

const MediaWindow = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { url, type } = props;

    if (type === "image") {
        return (
            <div className='media-image-wrapper'>
                <img
                alt='post thumbnail'
                className='media-image'
                src={url}
                />
            </div>
        )
    } else {
        return (
            <p>Videos cannot be shown</p>
        )
    }

};

export default MediaWindow;