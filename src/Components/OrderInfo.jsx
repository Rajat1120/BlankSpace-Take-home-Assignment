import { useState } from "react";
import watchIcon from "../assets/Watch.png";
import Button from "./Common/Button";
import mapImg from "../assets/Map.png";

const OrderInfo = () => {
  const [deliveryOption, setDeliveryOption] = useState("pickup");
  return (
    <div className="flex flex-col md:flex-row md:mx-20 mx-5 md:px-10 mt-5 justify-between items-start">
      <div className="w-full md:w-auto">
        <div className=" border-gray-200 w-full border-1 my-5 flex rounded-sm">
          <Button
            onClick={() => setDeliveryOption("pickup")}
            className={`rounded-sm flex-1 ${
              deliveryOption === "pickup" ? "bg-white" : "!bg-background"
            }`}
            variant="secondary"
          >
            <span className="px-7  rounded-xl font-sfpro  text-sm font-semibold overflow-hidden">
              Pickup
            </span>
          </Button>
          <Button
            onClick={() => setDeliveryOption("delivery")}
            className={`  flex-1 rounded-sm ${
              deliveryOption === "delivery" ? "bg-white" : "!bg-background"
            }`}
            variant="secondary"
          >
            <span className="px-7 font-sfpro text-sm  font-semibold rounded-xl">
              Delivery
            </span>
          </Button>
        </div>
        <div className="hidden md:flex flex-col">
          <span className="font-ttcommons font-semibold text-2xl mb-2">
            213 Horace Harding
          </span>
          <div className="flex gap-2">
            <span className="font-sfpro text-secondary  text-xs">
              Mississauga, ON L51 2B3
            </span>
            <span className="font-sfpro font-semibold text-xs">
              3.2 km away
            </span>
          </div>
        </div>
        <div className="md:flex hidden justify-start">
          <span className="text-secondary cursor-pointer underline underline-offset-3">
            Change Location
          </span>
        </div>
      </div>
      <div className="flex gap-5 my-0 w-full md:w-auto md:my-5 items-start">
        <div className="flex  border w-full md:w-auto  border-gray-200 rounded-xl py-2">
          <div className="flex w-full md:w-auto md:border-r border-gray-200 gap-4 py-1 px-6">
            <img src={watchIcon} className="h-5 w-5" alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-sm">Pickup Time</span>
              <span className="text-secondary text-sm">ASAP 10 Minutes</span>
            </div>
          </div>
          <div className="py-1 pl-6 pr-10 hidden md:flex flex-col">
            <span className="text-sm font-bold text-[#47b34a]">Open</span>
            <span className="text-secondary text-sm ">
              Until 11:45 PM EST{" "}
              <span className="underline underline-offset-4  cursor-pointer">
                Store info
              </span>
            </span>
          </div>
        </div>
        <div className="rounded-xl hidden md:flex overflow-hidden">
          <img className="w-60 h-45" src={mapImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
