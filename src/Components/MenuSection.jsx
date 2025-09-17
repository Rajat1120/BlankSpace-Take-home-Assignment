import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Menucard from "./MenuCard";
import { categoryItemsDetails } from "../utils/sampleData";
import { setCategory } from "../Redux/CategorySlice";
import CategoryTabs from "./CategoryTabs";

const MenuSection = () => {
  const dispatch = useDispatch();

  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryName = entry.target.getAttribute("id");
            dispatch(setCategory(categoryName));
          }
        });
      },
      { threshold: 0.5 } // 50% of section visible
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <div id="menu-scroll" className="md:my-20 my-5 md:mx-20 mx-5 md:px-10">
      <CategoryTabs />
      <div className="my-10 space-y-10 overflow-y-scroll h-[80vh] scrollbar-hide  scroll-smooth">
        {categoryItemsDetails.map((categoryObj) => {
          const categoryName = Object.keys(categoryObj)[0];
          const items = categoryObj[categoryName];

          return (
            <div
              key={categoryName}
              id={categoryName}
              ref={(el) => (sectionRefs.current[categoryName] = el)}
              className="category-section"
            >
              <h3 className="text-2xl font-[550] mb-4">{categoryName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {items.map((item, i) => (
                  <Menucard key={i} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuSection;
