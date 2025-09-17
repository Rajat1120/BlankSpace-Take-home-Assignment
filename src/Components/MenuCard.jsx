import itemImg from "../assets/itemImg.png";
import Button from "./Common/Button";
import addIcon from "../assets/addIcon.png";

import ItemConfigureModal from "./ItemConfigureModal";
import { useDispatch, useSelector } from "react-redux";

import { openMenuModal } from "../Redux/AppSlice";
import SubItemConfigureModal from "./SubItemConfigureModal";
import { useEffect, useState } from "react";

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  const selectedItemId = useSelector((state) => state.app.selectedMenuItemId);
  const secondModalId = useSelector((state) => state.app.secondModalItemId);
  const isModalOpen = selectedItemId === item.id;
  const isSecondModalOpen = secondModalId === item.id;

  const [loading, setLoadig] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setLoadig(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full relative gap-5 px-5 max-h-50 flex border border-gray-200 rounded-lg animate-pulse">
          <div className="py-5 gap-y-1 flex flex-col items-start justify-center flex-1">
            <div className="bg-gray-200 rounded h-4 w-24 mb-2"></div>
            <div className="flex gap-4 mb-2">
              <div className="bg-gray-200 rounded h-4 w-12"></div>
              <div className="bg-gray-200 rounded h-4 w-12"></div>
            </div>
            <div className="bg-gray-200 rounded h-12 w-full"></div>
          </div>
          <div className="flex py-5 flex-shrink-0">
            <div className="bg-gray-200 rounded md:w-40 w-30 h-20 md:h-30"></div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => dispatch(openMenuModal(item.id))}
          className="w-full cursor-pointer relative gap-5 px-5 max-h-50 flex border border-gray-200 rounded-lg"
        >
          <div className="py-5 gap-y-1 flex flex-col items-start justify-center">
            <span className="text-sm font-[600]">{item.name}</span>
            <div className="flex gap-4">
              <span className="text-sm font-medium">{item.price}</span>
              <span className="text-sm font-medium">{item.calories}</span>
            </div>
            <span className="text-secondary text-xs md:text-sm line-clamp-4">
              {item.description}
            </span>
          </div>
          <div className="flex py-5 flex-shrink-0">
            <img
              className="md:w-40 w-30 h-20 md:h-30 object-fit"
              src={itemImg}
              alt=""
            />
          </div>
          <Button className="absolute rounded-full !px-2 !py-2 bottom-5 border border-gray-200 right-5">
            <img className="h-5 w-5" src={addIcon} alt="" />
          </Button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen ? (
        <ItemConfigureModal item={item}></ItemConfigureModal>
      ) : null}

      {/* Second Modal */}
      {isSecondModalOpen ? <SubItemConfigureModal item={item} /> : null}
    </>
  );
};

export default MenuCard;
