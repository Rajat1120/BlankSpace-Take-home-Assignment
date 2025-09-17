import { useState } from "react";
import Button from "./Common/Button";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { closeMenuModal, closeSecondModal } from "../Redux/AppSlice";
import Coffe from "../assets/coffe.jpeg";
import arrowLeft from "../assets/arrowLeft.png";
import SelectIcon from "../assets/SelectIcon.png";
import forwardIcon from "../assets/forwardImg.png";
import Input from "./Common/Input";
import cheeseIcon from "../assets/Cheese-icon.png";
import jalapenoIcon from "../assets/jalapenoIcon.png";
const SubItemConfigureModal = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  return (
    <div
      onClick={() => {
        dispatch(closeSecondModal());
        dispatch(closeMenuModal());
      }}
      className="fixed inset-0 bg-black/25 flex items-center justify-center z-50"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        style={{
          transition: "height 0.3s ease-in-out",
        }}
      >
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 flex flex-col gap-y-5 ">
                <Button
                  onClick={() => dispatch(closeSecondModal())}
                  className={"w-10 h-10 !p-2 rounded-full !bg-gray-200"}
                >
                  <img className="w-5 h-5" src={arrowLeft} alt="" />
                </Button>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    Choose your drink
                  </span>
                  <span className="text-sm font-light">Fries</span>
                </div>
                <div className="flex py-5 border-gray-200 border-b flex-col gap-y-5">
                  <div
                    onClick={() => setStep(2)}
                    className="px-2 cursor-pointer flex rounded-lg bg-white hover:bg-background py-4 justify-between"
                  >
                    <div className="flex items-center  gap-x-2">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={Coffe}
                          className="h-10 object-cover w-10"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-extralight">
                          Extra pickle
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <img
                        src={SelectIcon}
                        className="h-5 w-5"
                        alt="select-icon"
                      />
                      <img
                        className="h-5 w-5"
                        src={forwardIcon}
                        alt="forward-icon"
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => setStep(2)}
                    className="px-2 cursor-pointer flex rounded-lg bg-white  hover:bg-background py-4 justify-between"
                  >
                    <div className="flex items-center  gap-x-2">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={Coffe}
                          className="h-10 object-cover w-10"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-extralight">
                          Extra pickle
                        </span>
                        <span className="text-xs font-extralight">+$0.5</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <img
                        src={SelectIcon}
                        className="h-5 w-5"
                        alt="select-icon"
                      />
                      <img
                        className="h-5 w-5"
                        src={forwardIcon}
                        alt="forward-icon"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => dispatch(closeSecondModal())}
                  className={"w-full rounded-lg mt-10 !bg-red-700"}
                >
                  <span className="text-white">Done</span>
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 flex flex-col gap-y-5 ">
                <Button
                  onClick={() => setStep(1)}
                  className={"w-10 h-10 !p-2 rounded-full !bg-gray-200"}
                >
                  <img className="w-5 h-5" src={arrowLeft} alt="" />
                </Button>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    Customize your Fries
                  </span>
                </div>
                <div className="flex py-5 pt-0 border-gray-200 border-b flex-col gap-y-2">
                  <div
                    onClick={() => setStep(2)}
                    className="px-2 cursor-pointer flex rounded-lg bg-white  py-2 justify-between"
                  >
                    <div className="flex items-center  gap-x-2">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={cheeseIcon}
                          className="h-10 object-cover w-10"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-extralight">
                          Add Cheese
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <Input
                        type="checkbox"
                        ringColor="focus:ring-white "
                        inputClassName="h-5 w-5  rounded cursor-pointer accent-red-700"
                      ></Input>
                    </div>
                  </div>
                  <div
                    onClick={() => setStep(2)}
                    className="px-2 cursor-pointer flex  rounded-lg bg-white   py-2 justify-between"
                  >
                    <div className="flex items-center   gap-x-2">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={jalapenoIcon}
                          className="h-10 object-cover w-10"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-extralight">
                          Add Jalapeno
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-x-3 items-center">
                      <Input
                        type="checkbox"
                        ringColor="focus:ring-white "
                        inputClassName="h-5 w-5 cursor-pointer  rounded accent-red-700"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex py-5 pt-0 border-gray-200 border-b flex-col gap-y-2">
                  <span className="text-sm py-2 font-semibold">
                    Make it crisp
                  </span>
                  <div
                    onClick={() => setStep(2)}
                    className="px-2 cursor-pointer flex rounded-lg bg-white py-2 justify-between"
                  >
                    <div className="flex items-center  gap-x-2">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={Coffe}
                          className="h-10 object-cover w-10"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-extralight">Crispy</span>
                      </div>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <Input
                        type="checkbox"
                        ringColor="focus:ring-white "
                        inputClassName="h-5 w-5  rounded cursor-pointer accent-red-700"
                      ></Input>
                    </div>
                  </div>
                  <div
                    onClick={() => setStep(2)}
                    className="px-2 cursor-pointer flex  rounded-lg bg-white  py-2 justify-between"
                  >
                    <div className="flex items-center   gap-x-2">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={Coffe}
                          className="h-10 object-cover w-10"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-extralight">
                          Extra crispy
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-x-3 items-center">
                      <Input
                        type="checkbox"
                        ringColor="focus:ring-white "
                        inputClassName="h-5 w-5 cursor-pointer  rounded accent-red-700"
                      ></Input>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => dispatch(closeSecondModal())}
                  className={"w-full rounded-lg mt-10 !bg-red-700"}
                >
                  <span className="text-white">Done</span>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SubItemConfigureModal;
