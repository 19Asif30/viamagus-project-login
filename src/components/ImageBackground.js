import React from 'react'
import BGImage from '../assets/images/BGImage.png'; 

const ImageBackground = () => {
    const backgroundStyle = {
        backgroundImage: `url(${BGImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: "263px"
      };
  return (
    <div className='image-background' style={backgroundStyle}></div>
  )
}

export default ImageBackground