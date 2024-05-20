import fallbackImage from '../Assets/fallbackImage.png'

export const handleImageError = (event) => {
    event.target.src = fallbackImage;
    event.target.alt = "Not Found";
  };