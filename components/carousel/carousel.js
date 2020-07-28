import ImageGallery from "react-image-gallery";

const Carousel = ({
  images,
  lazyLoad = true,
  autoPlay = true,
  showThumbmails = false,
  className = "",
  showBullets = true,
}) => {
  return (
    <ImageGallery
      items={images}
      lazyLoad={lazyLoad}
      showPlayButton={false}
      autoPlay={autoPlay}
      showThumbnails={showThumbmails}
      showFullscreenButton={false}
      useBrowserFullscreen={false}
      additionalClass={className}
      showBullets={showBullets}
    />
  );
};
export default Carousel;
