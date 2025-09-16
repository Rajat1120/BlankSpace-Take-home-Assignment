import { useState } from "react";
import watchIcon from "../assets/Watch.png";
import Button from "./Common/Button";
import mapImg from "../assets/Map.png";

const OrderInfo = () => {
  const [deliveryOption, setDeliveryOption] = useState("pickup");
  return (
    <div className="flex mx-20 px-10 mt-5 justify-between items-start">
      <div>
        <div className=" border-gray-200 border-1 my-5 rounded-sm">
          <Button
            onClick={() => setDeliveryOption("pickup")}
            className={`rounded-sm ${
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
            className={`  rounded-sm ${
              deliveryOption === "delivery" ? "bg-white" : "!bg-background"
            }`}
            variant="secondary"
          >
            <span className="px-7 font-sfpro text-sm  font-semibold rounded-xl">
              Delivery
            </span>
          </Button>
        </div>
        <div>
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
        <div className="flex justify-start">
          <span className="text-secondary cursor-pointer underline underline-offset-3">
            Change Location
          </span>
        </div>
      </div>
      <div className="flex gap-5  my-5 items-start">
        <div className="flex border  border-gray-200 rounded-xl py-2">
          <div className="flex border-r border-gray-200 gap-4 py-1 px-6">
            <img src={watchIcon} className="h-5 w-5" alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-sm">Pickup Time</span>
              <span className="text-secondary text-sm">ASAP 10 Minutes</span>
            </div>
          </div>
          <div className="py-1 pl-6 pr-10 flex flex-col">
            <span className="text-sm font-bold text-[#47b34a]">Open</span>
            <span className="text-secondary text-sm ">
              Until 11:45 PM EST{" "}
              <span className="underline underline-offset-4  cursor-pointer">
                Store info
              </span>
            </span>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img className="w-60 h-45" src={mapImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
