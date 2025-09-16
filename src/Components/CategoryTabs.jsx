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
  let curretIndex = category.indexOf(selectedCategory);

  return (
    <div className="flex justify-between items-center gap-2 mb-10">
      <div className="flex items-center gap-2">
        <Button variant="secondary">
          <img className="h-6 w-6" src={MenuImg} alt="" />
        </Button>
        <div className="flex gap-5">
          {category.map((cat, index) => (
            <div
              className={`py-3 ${
                selectedCategory === cat ? "border-b-3 border-red-700" : ""
              } `}
            >
              <Button
                onClick={() => dispatch(setCategory(cat))}
                key={index}
                className={`${
                  selectedCategory === cat
                    ? "!bg-[#ffeaeb] rounded-sm !text-red-700"
                    : ""
                } !px-2 !py-2 !text-sm  text-secondary !font-medium`}
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
            if (curretIndex > 0) {
              curretIndex -= 1;
              dispatch(setCategory(category[curretIndex]));
            }
          }}
          className={`rounded-full !bg-gray-100 ${
            disabledLeft ? "!opacity-50 !cursor-not-allowed" : ""
          }  !px-2 !py-2`}
        >
          <img className="h-6" src={arrowLeftImg} alt="" />
        </Button>
        <Button
          onClick={() => {
            if (curretIndex < category.length - 1) {
              curretIndex += 1;
              dispatch(setCategory(category[curretIndex]));
            }
          }}
          className={`rounded-full !bg-gray-100 ${
            disabledRight ? "!opacity-50 !cursor-not-allowed" : ""
          }  !px-2 !py-2`}
        >
          <img className="h-6" src={arrowRightImg} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default CategoryTabs;
