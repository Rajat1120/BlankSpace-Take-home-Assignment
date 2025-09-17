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
    <div className="md:px-12 px-5 z-10 py-4 md:my-0 sticky top-0 bg-white md:py-1 md:border-b border-gray-300 flex justify-between items-center">
      <div className="flex justify-between md:w-auto w-full  md:gap-10 items-center">
        {/* Sidebar */}
        <Button className={"rounded-full cursor-pointer"}>
          <img className="min-w-5  h-5" src={menuSvg} alt="" />
        </Button>

        {/* Logo */}
        <span className="min-w-16 flex flex-shrink-0 items-center justify-center cursor-pointer min-h-8">
          <img className=" !min-w-10 !min-h-10" src={logo} alt="" />
        </span>

        <Button
          className={
            " !border flex md:hidden border-gray-200 md:!px-2 !px-4 !py-2 md:!py-1 rounded-sm "
          }
          variant="primary"
        >
          <span className="text-nowrap  font-sfpro text-sm cursor-pointer">
            Sign in
          </span>
        </Button>
      </div>

      {/* Search Input */}
      <div className="w-full mx-5 md:mx-20 hidden md:flex justify-start">
        <div className="w-full max-w-180 md:max-w-160 pl-20 min-w-40 pr-2">
          <Input
            placeholder="Search our menu..."
            value={inputval}
            className="w-full bg-[#f3f3f3] py-1 border-none outline-none rounded-lg font-sfpro"
            onChange={(e) => setInputVal(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="hidden md:flex gap-10  items-center">
          {/* Gift card button */}
          <Button
            className={"flex !flex-shrink-0 items-center  rounded-full gap-2"}
            variant="primary"
          >
            <img className="h-6" src={giftCard} alt="" />
            <span className="text-nowrap text-sm font-ttcommons font-medium cursor-pointer">
              Gift Cards
            </span>
          </Button>

          {/* Cart and Sign in button */}
          <Button
            className={"rounded-full !flex !flex-shrink-0 cursor-pointer"}
          >
            <img className="min-w-7 h-7" src={cartPng} alt="" />
          </Button>
        </div>
        <Button
          className={
            " !border hidden md:flex border-gray-200 md:!px-2 !px-4 !py-2 md:!py-1 rounded-sm "
          }
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
