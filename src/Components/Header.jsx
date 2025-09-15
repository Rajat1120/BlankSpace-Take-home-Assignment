import Input from "./Common/Input";
import logo from "../assets/logo.svg";
import menuSvg from "../assets/menu.png";
import cartPng from "../assets/Cart.png";
import giftCard from "../assets/giftcard.png";
import { useState } from "react";
import Button from "./Common/Button";
const Header = () => {
  const [inputval, setInputVal] = useState();
  return (
    <div className="px-12 py-1 border-b border-gray-300 flex justify-between items-center">
      <div className="flex  gap-10 items-center">
        {/* Sidebar */}
        <Button className={"rounded-full cursor-pointer"}>
          <img className="min-w-5  h-5" src={menuSvg} alt="" />
        </Button>

        {/* Logo */}
        <span className="min-w-20 min-h-10">
          <img className=" !min-w-10 !min-h-14" src={logo} alt="" />
        </span>
      </div>

      {/* Search Input */}
      <div className="pl-26 border-none pr-40 w-[80%] ">
        <Input
          placeholder="Search our menu..."
          value={inputval}
          className="w-full bg-[#f3f3f3] py-1 border-none outline-none max-w-3xl rounded-lg  font-sfpro"
          onChange={(e) => setInputVal(e.target.value)}
        ></Input>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-18   items-center">
          {/* Gift card button */}
          <Button
            className={"flex items-center rounded-full gap-2"}
            variant="primary"
          >
            <img className="h-6" src={giftCard} alt="" />
            <span className="text-nowrap font-ttcommons font-medium cursor-pointer">
              Gift Cards
            </span>
          </Button>

          {/* Cart and Sign in button */}
          <Button className={"rounded-full cursor-pointer"}>
            <img className="min-w-7 h-7" src={cartPng} alt="" />
          </Button>
        </div>
        <Button
          className={" !border border-gray-200 !px-2 !py-1 rounded-sm "}
          variant="primary"
        >
          <span className="text-nowrap  font-sfpro text-sm cursor-pointer">
            Sign in
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
