
import { IoRemoveOutline } from "react-icons/io5";
import fbImage from "../../assets/fb.png";
import twiterImage from "../../assets/twiter.png";
import youTubeImage from "../../assets/youtube.png";
import "./FooterComponent.css";
const FooterComponent = () => {
  return (
    <div className="" style={{ backgroundColor: "#02033B" }}>
      <div className="max-w-screen-xl mx-auto">
        <p>Scan. Detect. Remove.</p>
        <div className="grid grid-cols-12  gap-x-1 justify-items-center">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-3xl text-white py-4">Scan. Detect. Remove.</p>
            <ul className="flex gap-4 my-4">
              <li>
              <img src={twiterImage} alt="" />
              </li>
              <li>
              <img src={fbImage} alt="" />
              </li>
              <li>
              <img src={youTubeImage} alt="" />
              </li>
            </ul>
            <p className="text-white">Privacy Policy</p>
            <p className="text-white">Terms of Service</p>

            <p className="text-white">
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <p className="text-white">Designed & developed by Bigger Picture</p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-3xl text-white underline">Miro.</p>
            <div className="underline h-1 bg-white w-40 mt-4"></div>
            <ul className="mt-4">
              <li className="font-bold flex " style={{ color: "#FFC247" }}>
                {" "}
                <IoRemoveOutline />
                iPhone
              </li>
              <li
                className="font-bold flex mr-4 items-center py-2"
                style={{ color: "#FFC247" }}
              >
                {" "}
                <IoRemoveOutline />
                Android
              </li>
              <li
                className="font-bold flex mr-4 items-center py-2"
                style={{ color: "#FFC247" }}
              >
                {" "}
                <IoRemoveOutline />
                Help
              </li>
              <li
                className="font-bold flex mr-4 items-center py-2"
                style={{ color: "#FFC247" }}
              >
                {" "}
                <IoRemoveOutline />
                About
              </li>
              <li
                className="font-bold flex mr-4 items-center py-2"
                style={{ color: "#FFC247" }}
              >
                {" "}
                <IoRemoveOutline />
                Insights
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-4">
           
            <div className="bg-footer p-4">
                <div className="bg-footer-img ">
                <p className="text-xl w-full font-bold">Sign up to our newsletter</p>
              <small className="w-full">
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </small>

              <div className="relative w-full">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full mt-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  style={{ top: "0px", right: "0px", padding: "9px 36px" }}
                  className="text-white absolute end-2.5  bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
                </div>
             
            </div>
          </div>

          <div className="col-span-6">
          <div className="py-24">
            <p className="text-white text-sm">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
        </div>
          </div>
        </div>


     
      </div>
    </div>
  );
};

export default FooterComponent;
