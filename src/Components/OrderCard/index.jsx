import { XMarkIcon } from "@heroicons/react/24/solid";
import { handleImageError } from "../../Utils/imageUtils";

export const OrderCard = (props) => {
    const { id, title, imageUrl, price, handleDelete } = props;
  return (
    <div className="flex justify-between items-center mb-3">
      <div className=" flex items-center gap-2">
        <figure className=" w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
            onError={handleImageError}
          />
        </figure>
        <p className=" text-sm font-light">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className=" text-lg font-medium">{`$${price}`}</p>
        {handleDelete && (
          <button onClick={() => handleDelete(id)}>
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>
        )}
      </div>
    </div>
  );
};
