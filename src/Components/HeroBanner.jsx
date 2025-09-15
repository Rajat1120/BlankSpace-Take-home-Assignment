import bannerImg from "../assets/banner.jpeg";

const HeroBanner = () => {
  return (
    <div className="flex mt-6 px-10 max-w-screen mx-20 items-center justify-center">
      <div className=" h-70   flex items-center justify-center overflow-hidden rounded-xl">
        <img className="pb-34 object-cover" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
