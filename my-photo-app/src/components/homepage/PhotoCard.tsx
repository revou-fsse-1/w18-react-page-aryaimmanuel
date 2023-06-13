type PhotoCardProps = {
    id: number;
    title: string;
    imgUrl: string;
    isLiked?: boolean;
    likePhoto: (id: number, isLiked: boolean) => void;
  };
  export const PhotoCard = (props: PhotoCardProps) => {
    return (
      // <div className="mt-4 max-w-[900px] flex flex-wrap flex-col justify-center items-center gap-4">
      <div className="relative rounded-md overflow-hidden hover:scale-110 duration-500 shadow-2xl shadow-black">
        <img
          src={props.imgUrl}
          alt=""
          className="block w-full aspect-[11/16] object-cover"
        />
        <h3 className=" text-slate-950 bg-white rounded-md  font-semibold text-lg text-center">
          {props.title}
        </h3>
        <div className="cursor-pointer absolute top-[4px] right-[5px] border border-white md:text-sm rounded-xl bg-blue-500 hover:bg-blue-300">
          {!props.isLiked ? (
            <button
              className="px-8 text-white font-bold"
              onClick={() => props.likePhoto(props.id, true)}
            >
              Like
            </button>
          ) : (
            <button
              className="px-8 rounded-xl bg-red-500 hover:bg-red-300 text-white font-bold"
              onClick={() => props.likePhoto(props.id, false)}
            >
              Unlike
            </button>
          )}
        </div>
      </div>
      // </div>
    );
  };