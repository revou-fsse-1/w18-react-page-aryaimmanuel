type LikedPhotoProps = {
    count: number;
  };
  
  export const LikedPhotos = (props: LikedPhotoProps) => {
    return (
      <div className="fixed top-0 right-0 px-4 py-2 text-white bg-blue-500 rounded-bl-2xl z-50 ">
        <p>You have liked {props.count} photos</p>
      </div>
    );
  };