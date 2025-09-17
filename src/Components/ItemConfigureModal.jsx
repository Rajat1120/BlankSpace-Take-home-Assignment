import itemImg from "../assets/itemImg.png";
import Button from "./Common/Button";

import close from "../assets/closeImg.png";
import fav from "../assets/favouriteImg.png";
import share from "../assets/shareImg.png";
import star from "../assets/star.png";
import Alert from "../assets/red-alert-icon.svg";
import SelectIcon from "../assets/SelectIcon.png";
import fries from "../assets/fries.jpeg";
import Input from "./Common/Input";
import Coffe from "../assets/coffe.jpeg";
import increaseBtn from "../assets/increase.png";
import decreaseBtn from "../assets/decrease.png";
import { useDispatch } from "react-redux";
import { closeMenuModal, openSecondModal } from "../Redux/AppSlice";
import { useEffect } from "react";

const ItemConfigureModal = ({ item }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/25 flex items-center justify-center z-50"
      onClick={() => dispatch(closeMenuModal())} // closes modal when clicking outside(false))} // closes modal when clicking outside
    >
      <div
        className="bg-white  overflow-y-auto md:overflow-y-hidden md:p-6 rounded-lg h-screen md:max-w-[940px] fixed w-full md:max-h-[90vh] overflow-hidden top-0  md:top-[50px]"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 p-5 md:p-0 sticky top-0 bg-white z-10">
          <div
            onClick={() => dispatch(closeMenuModal())} // closes modal when clicking outside(false))}
            className="cursor-pointer"
          >
            <Button
              className={"rounded-full hover:!bg-gray-200 !bg-background"}
            >
              <img className="w-6 h-6" src={close} alt="Close button" />
            </Button>
          </div>
          <div className="flex items-center gap-x-10">
            <img
              className="w-6 cursor-pointer h-6"
              src={fav}
              alt="favourite button"
            />
            <img
              className="w-6 cursor-pointer h-5"
              src={share}
              alt="share button"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-16 h-full">
          {/* Item image */}
          <div className="flex-1 px-5 py-10">
            <img className="" src={itemImg} alt="" />
          </div>
          {/* Item details */}
          <div className="flex-[1.5]  px-5 scrollbar-hide md:overflow-y-auto max-h-[80vh]">
            <div className="flex flex-col gap-y-2">
              <h3 className="text-2xl font-semibold text-nowrap">
                {item.name}
              </h3>
              <div className="flex gap-2 items-center">
                <span className="px">{item.price}</span>
                <span className="border-l border-gray-300 h-4"></span>
                <span className="px">{item.calories}</span>
              </div>
              <span className="text-sm text-secondary">{item.description}</span>
            </div>
            <div className="mt-10">
              {/* Points and redeem button */}
              <div className="flex items-center shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-white rounded-full  px-2  py-1 border-dashed border-gray-200 border justify-between ">
                <div className="flex items-center">
                  <div className="flex flex-shrink-0 items-center p-2">
                    <img className="h-4 w-4" src={star} alt="" />
                  </div>
                  <span className="text-red-800 text-sm">
                    Redeem for 450 points
                  </span>
                </div>
                <Button
                  className={
                    "text-white rounded-full text-sm !py-1 !px-4 !bg-red-700"
                  }
                >
                  Redeem
                </Button>
              </div>
              {/* Choose a side  */}
              <div className="flex my-4 justify-between ">
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Choose a side</span>
                  <span className="text-sm text-secondary">Choose up to 1</span>
                </div>
                <div className="flex gap-x-2 bg-red-200 h-5 px-2 rounded-full items-center">
                  <span className="text-xs text-secondary leading-none">
                    Required
                  </span>
                  <img className="w-3 h-3" src={Alert} alt="" />
                </div>
              </div>
              {/* Options */}
              <div className="flex border-b border-gray-200 flex-col gap-y-4">
                <div
                  onClick={() => dispatch(openSecondModal())}
                  className="px-2 cursor-pointer flex rounded-lg bg-white justify-between"
                >
                  <div className="flex items-center  gap-x-2">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={fries}
                        className="h-10 object-cover w-10"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-extralight">Fries</span>
                  </div>
                  <div className="flex items-center">
                    <img src={SelectIcon} className="h-5 w-5" alt="" />
                  </div>
                </div>
                <div className="h-[1.2px] w-full bg-gray-200"></div>
                <div
                  onClick={() => dispatch(openSecondModal())}
                  className="px-2 cursor-pointer flex rounded-lg bg-white justify-between"
                >
                  <div className="flex items-center  gap-x-2">
                    <div className="overflow-hidden  rounded-lg">
                      <img
                        src={fries}
                        className="h-10 object-cover w-10"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-extralight">
                      Orange Rings
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img src={SelectIcon} className="h-5 w-5" alt="" />
                  </div>
                </div>
                <div className="h-[1.2px] w-full bg-gray-200"></div>
                <div
                  onClick={() => dispatch(openSecondModal())}
                  className="px-2 cursor-pointer  flex rounded-lg bg-white justify-between"
                >
                  <div className="flex items-center  gap-x-2">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={fries}
                        className="h-10  object-cover w-10"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-extralight">
                      Extra Pickle
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img src={SelectIcon} className="h-5 w-5" alt="" />
                  </div>
                </div>
                <div className="h-[1.2px] w-full bg-gray-200"></div>
                <div
                  onClick={() => dispatch(openSecondModal())}
                  className="px-2 cursor-pointer flex rounded-lg bg-white justify-between"
                >
                  <div className="flex items-center  gap-x-2">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={fries}
                        className="h-10 object-cover w-10"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-extralight">
                        Extra pickle
                      </span>
                      <span className="text-xs font-extralight">+$0.5</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img src={SelectIcon} className="h-5 w-5" alt="" />
                  </div>
                </div>
                <div className="h-[1.2px] w-full bg-gray-200"></div>
              </div>
            </div>
            <div className="border-b border-gray-200 ">
              {/* Choose your drink  */}
              <div className="flex my-4  justify-between ">
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Choose your drink</span>
                  <span className="text-sm text-secondary">Choose up to 4</span>
                </div>
                <div className="flex gap-x-2 bg-gray-100 h-5 px-4 rounded-full items-center">
                  <span className="text-xs text-secondary leading-none">
                    Required
                  </span>
                </div>
              </div>
              {/* Options */}
              <div className="flex  border-gray-200 flex-col gap-y-4">
                <div className="px-2 cursor-pointer flex rounded-lg bg-white justify-between">
                  <div className="flex items-center  gap-x-2">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={Coffe}
                        className="h-10 object-cover w-10"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-extralight">Soft drink</span>
                  </div>
                  <div className="flex items-center">
                    <img src={SelectIcon} className="h-5 w-5" alt="" />
                  </div>
                </div>
                <div className="h-[1.2px] w-full bg-gray-200"></div>
                <div className="px-2 cursor-pointer flex rounded-lg bg-white justify-between">
                  <div className="flex items-center  gap-x-2">
                    <div className="overflow-hidden  rounded-lg">
                      <img
                        src={Coffe}
                        className="h-10 object-cover w-10"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-extralight">Hot drinks</span>
                  </div>
                  <div className="flex items-center">
                    <img src={SelectIcon} className="h-5 w-5" alt="" />
                  </div>
                </div>
                <div className="h-[1.2px] w-full bg-gray-200"></div>
                <div className="px-2 cursor-pointer  flex rounded-lg bg-white justify-between">
                  <div className="flex items-center  gap-x-2">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={Coffe}
                        className="h-10  object-cover w-10"
                        alt="item-image"
                      />
                    </div>
                    <span className="text-sm font-extralight">Smoothies</span>
                  </div>
                  <div className="flex items-center">
                    <img src={SelectIcon} className="h-5 w-5" alt="" />
                  </div>
                </div>

                <div className="h-[1.2px] w-full bg-gray-200"></div>
              </div>
            </div>
            <div className="py-5 pb-40 md:pb-0">
              <span className="font-semibold ">Special Comments</span>
              <Input
                inputClassName="!min-h-30 pb-20 !focus:outline-none leading-none !focus:ring-gray-400 !focus:ring-2"
                className="border-2 my-5  min-h-30 border-gray-200 rounded-lg"
              ></Input>
            </div>
            <div className="md:my-10 py-5  w-full fixed md:static gap-x-5 md:py-5 px-5 md:px-0 md:w-auto bottom-0 left-0 right-0 bg-white flex justify-between md:justify-between items-center">
              <div className="flex gap-x-4 items-center">
                <img className="h-10" src={decreaseBtn} alt="" />
                <span>1</span>
                <img className="h-10" src={increaseBtn} alt="" />
              </div>
              <Button
                onClick={() => dispatch(closeMenuModal())}
                className={
                  "!bg-red-700 flex flex-shrink-0 rounded-lg !px-5 md:!px-10"
                }
              >
                <span className="text-white">Add 1 to Order $14.50</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemConfigureModal;
