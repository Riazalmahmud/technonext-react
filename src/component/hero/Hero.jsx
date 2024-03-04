import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import heroImage from "../../assets/headerimage-without-text.png.png"
const Hero = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto justify-center mt-12 ">
        <div className="lg:flex justify-between px-4 lg:px-0 gap-4">
          <div className="w-full">
            <p className="text-5xl font-bold" style={{color: "#050038"}}>Take ideas from <br /> better to best</p>
            <p style={{color: "#050038"}} className="my-6">
              Miro is your team's visual platform to connect, <br /> collaborate, and
              create — together.
            </p>
            <div className="w-full my-4">
              <input
                type="email"
                id="simple-search"
                className="bg-gray-50 border py-3 my-8 border-gray-300 text-gray-900 text-sm ro focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-3xl"
                placeholder="Enter your Email"
                required
              />

              <button
                type="button"
                className="flex items-center my-6 py-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full rounded-2xl"
              >
                Sign up free{" "}
                <span>
                  <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
                </span>
              </button>

              <small>Collaborate with your team within minutes</small>

              <div className="flex py-3 gap-3 my-8 px-4 rounded-lg lg:w-96" style={{backgroundColor: "#F5F5F7"}}>
                <ul className="flex gap-1">
                  <li>
                    <FaStar style={{ color: "#FF9D48" }} />
                  </li>
                  <li>
                    <FaStar style={{ color: "#FF9D48" }} />
                  </li>
                  <li>
                    <FaStar style={{ color: "#FF9D48" }} />
                  </li>
                  <li>
                    <FaStar style={{ color: "#FF9D48" }} />
                  </li>
                  <li>
                    <FaStarHalfAlt style={{ color: "#FF9D48" }} />
                  </li>
                </ul>

                <div className="flex gap-2 items-center ">
                  <div>
                    <FaGoogle />
                  </div>

                  <div>
                    <p className="font-bold">GetApp</p>
                  </div>
                  <div>
                    <p className="font-bold">CapTerra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
