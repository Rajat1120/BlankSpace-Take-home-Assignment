import offerImage from "../assets/offerImg.png";
import Button from "./Common/Button";

const SpecialOffers = () => {
  return (
    <div className="w-full hidden md:flex bg-background">
      <div className="mx-20 py-2 px-10">
        <h3 className="text-3xl font-[550]">Special</h3>
        <div className="flex my-5 mx-5 pr-60  justify-start gap-10">
          <div className="flex  items-center gap-5">
            <div className="!w-30 h-30 shadow-2xl rounded-xl overflow-hidden flex-shrink-0 flex items-center">
              <img
                className="w-full h-full object-cover object-[88%_center]"
                src={offerImage}
                alt="offer"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-sm font-semibold"> GET $10 OFF</span>
              <span className="text-sm font-light text-secondary">
                Buy one get one free when you buy any of our popular items
              </span>
              <div className="flex justify-end">
                <Button
                  className={"text-sm font-thin rounded-full shadow-xl !py-1"}
                >
                  SEE OFFER
                </Button>
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="!w-30 h-30 shadow-2xl rounded-xl overflow-hidden flex flex-shrink-0 items-center">
              <img
                className="w-full h-full object-cover  object-[88%_center]"
                src={offerImage}
                alt="offer"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-sm font-semibold"> GET $10 OFF</span>
              <span className="text-sm font-light text-secondary">
                Buy one get one free when you buy any of our popular items
              </span>
              <div className="flex justify-end">
                <Button
                  className={"text-sm font-thin  rounded-full shadow-xl !py-1"}
                >
                  SEE OFFER
                </Button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
