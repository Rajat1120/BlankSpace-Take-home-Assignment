import React from "react";
import Button from "./Common/Button";

const OrderInfo = () => {
  return (
    <div className="flex mx-20 px-10 mt-5 justify-between items-center">
      <div>
        <div className="bg-gray-200 border my-5 rounded-xl">
          <Button>
            <span className="px-5 rounded-xl overflow-hidden">Pickup</span>
          </Button>
          <Button>
            <span className="px-5 rounded-xl">Delivery</span>
          </Button>
        </div>
        <div>
          <span className="font-ttcommons font-semibold text-2xl mb-2">
            213 Horace Harding
          </span>
          <div className="flex gap-2">
            <span className="font-sfpro text-[#5E5E65]  text-xs">
              Mississauga, ON L51 2B3
            </span>
            <span className="font-sfpro font-semibold text-xs">
              3.2 km away
            </span>
          </div>
        </div>
        <div className="flex justify-start">
          <span>Change Location</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default OrderInfo;
