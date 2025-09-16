import Button from "./Common/Button";
import googlePlay from "../assets/googleplay.png";
import appStore from "../assets/appstore.png";
import logo from "../assets/logo.svg";
import insta from "../assets/instaImg.png";
import twitter from "../assets/XImg.png";
import tiktok from "../assets/tiktokImg.png";

const Footer = () => {
  return (
    <div className="w-full bg-background">
      <div className="mx-20 py-5 px-10">
        <div>
          <img className="w-24" src={logo} alt="" />
        </div>
        <div className="flex my-20 justify-between">
          <div className="flex items-start justify-between">
            <Button className={"!bg-background"}>
              <img className="w-40" src={appStore} alt="" />
            </Button>
            <Button className={"!bg-background"}>
              <img className="w-40" src={googlePlay} alt="" />
            </Button>
          </div>
          <div className="flex gap-x-20 justify-between">
            <div className="flex flex-col gap-y-5">
              <span>Get Help</span>
              <span>FAQs</span>
              <span>Contact us</span>
              <span>Locations</span>
            </div>
            <div className="flex flex-col gap-y-5">
              <span>Legal</span>
              <span>Accessibility Statement</span>
              <span>Privacy Policy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-200"></div>
        <div className="py-5 flex justify-between">
          <div className="flex gap-x-5 justify-between">
            <img className="w-6 h-6" src={insta} alt="" />
            <img className="w-6 h-6" src={tiktok} alt="" />
            <img className="w-6 h-6" src={twitter} alt="" />
          </div>
          <div>
            <span className="text-sm text-secondary">
              {" "}
              Barnyard Group LLC 2025 All Rights Reserved
            </span>
          </div>
          <div>
            <span>Powered by marketplate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
