import itemImg from "../assets/itemimg.png";
import Button from "./Common/Button";
import addIcon from "../assets/addicon.png";

import ItemConfigureModal from "./ItemConfigureModal";
import { useDispatch, useSelector } from "react-redux";

import { openMenuModal } from "../Redux/AppSlice";
import SubItemConfigureModal from "./SubItemConfigureModal";

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  const selectedItemId = useSelector((state) => state.app.selectedMenuItemId);
  const secondModalId = useSelector((state) => state.app.secondModalItemId);
  const isModalOpen = selectedItemId === item.id;
  const isSecondModalOpen = secondModalId === item.id;
  return (
    <>
      {/* Card */}
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
          <span className="text-secondary text-sm line-clamp-4">
            {item.description}
          </span>
        </div>
        <div className="flex py-5 flex-shrink-0">
          <img className="w-40 h-30 object-fit" src={itemImg} alt="" />
        </div>
        <Button className="absolute rounded-full !px-2 !py-2 bottom-5 border border-gray-200 right-5">
          <img className="h-5 w-5" src={addIcon} alt="" />
        </Button>
      </div>

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
