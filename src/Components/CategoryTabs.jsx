import Button from "./Common/Button";
import MenuImg from "../assets/MenuImg.png";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/CategorySlice";
import arrowLeftImg from "../assets/arrowLeft.png";
import arrowRightImg from "../assets/arrowRight.png";

const category = [
  "Starters",
  "Family Meals",
  "Fresh Sides",
  "Desserts",
  "Drinks",
];

const CategoryTabs = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.name);
  const disabledLeft = category.indexOf(selectedCategory) === 0;
  const disabledRight =
    category.indexOf(selectedCategory) === category.length - 1;
  let currentIndex = category.indexOf(selectedCategory);

  const handleCategoryClick = (cat) => {
    dispatch(setCategory(cat));

    // Small delay to ensure state update and DOM rendering
    setTimeout(() => {
      const container = document.getElementById("menu-scroll");
      const section = document.getElementById(cat);

      if (container && section) {
        // Find the scrollable div inside the container
        const scrollableDiv = container.querySelector(".overflow-y-scroll");

        if (scrollableDiv) {
          // Get the position of the section relative to the scrollable container
          const containerRect = scrollableDiv.getBoundingClientRect();
          const sectionRect = section.getBoundingClientRect();

          // Calculate the scroll position within the scrollable div
          const scrollTop =
            scrollableDiv.scrollTop + (sectionRect.top - containerRect.top);

          scrollableDiv.scrollTo({
            top: scrollTop,
            behavior: "smooth",
          });
        }
      }
    }, 50);
  };

  return (
    <div className="flex md:sticky top-[61px] z-10 bg-white border-b-3 border-gray-200 justify-between items-center gap-2 mb-10">
      <div className="flex items-center gap-2">
        <Button className={"!pl-0"} variant="secondary">
          <img className="h-6 w-6" src={MenuImg} alt="" />
        </Button>
        <div className="flex overflow-x-scroll max-w-[70vw]  scrollbar-hide gap-5">
          {category.map((cat, index) => (
            <div
              key={index}
              className={`py-3 ${
                selectedCategory === cat ? "border-b-3 border-red-700" : ""
              }`}
            >
              <Button
                onClick={() => handleCategoryClick(cat)}
                className={`text-nowrap ${
                  selectedCategory === cat
                    ? "!bg-[#ffeaeb] rounded-sm !text-red-700"
                    : ""
                } !px-2 !py-2 !text-sm text-secondary !font-medium`}
              >
                {cat}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            if (currentIndex > 0) {
              currentIndex -= 1;
              handleCategoryClick(category[currentIndex]);
            }
          }}
          className={`rounded-full hidden md:flex !bg-gray-100 ${
            disabledLeft ? "!opacity-50 !cursor-not-allowed" : ""
          } !px-2 !py-2`}
          disabled={disabledLeft}
        >
          <img className="h-6" src={arrowLeftImg} alt="" />
        </Button>
        <Button
          onClick={() => {
            if (currentIndex < category.length - 1) {
              currentIndex += 1;
              handleCategoryClick(category[currentIndex]);
            }
          }}
          className={`rounded-full !bg-gray-100 ${
            disabledRight ? "!opacity-50 !cursor-not-allowed" : ""
          } !px-2 !py-2`}
          disabled={disabledRight}
        >
          <img className="h-6" src={arrowRightImg} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default CategoryTabs;
