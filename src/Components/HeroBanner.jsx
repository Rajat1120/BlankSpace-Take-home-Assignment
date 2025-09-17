import bannerImg from "../assets/banner.jpeg";

const HeroBanner = () => {
  return (
    <div className="flex md:mt-6  md:px-10 max-w-screen md:mx-20 items-center justify-center">
      <div className=" md:h-70 h-20   flex items-center justify-center overflow-hidden md:rounded-xl">
        <img className="pb-34 object-cover" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
