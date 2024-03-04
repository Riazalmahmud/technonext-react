import { IoIosArrowRoundForward } from "react-icons/io";
import hybridWorkImage from "../../assets/hybridwork.png.png";
import sectionImage from "../../assets/section.png";
import brainstorwithoutImage from "../../assets/Brainstormwithoutshadow.jpg.png";
import xdImage from "../../assets/xd.png";
import figmaImage from "../../assets/figma.png";
import tribujImage from "../../assets/tribuj.png";
import notifyImage from "../../assets/notify.png";
import divImage from "../../assets/div.png";
import dcusinImage from "../../assets/docusin.png";
import frogImage from "../../assets/Frog.png";
import user1Image from "../../assets/user-1.png";
import userImage from "../../assets/user.png";
import user3Image from "../../assets/user-3.png";
import vamwareImage from "../../assets/vmware.svg.png";
import { IoCheckmark } from "react-icons/io5";

import "./Feture.css";
const Feture = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-8 px-4 lg:px-0">
      <p
        className="text-5xl font-bold text-center my-20"
        style={{ color: "#050038" }}
      >
        Collaborate without <br /> constraints
      </p>

      <div className="grid grid-cols-12  gap-12 justify-items-center my-8">
        <div className="lg:col-span-4 col-span-12">
          <p className="font-bold text-2xl py-2">Free forever</p>
          <p>
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our
            <a href="#" className="text-blue-500">
              {" "}
              pricing plans
            </a>{" "}
            for more features.{" "}
          </p>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <p className="font-bold text-2xl py-2">Easy integrations</p>
          <p>
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our
            <a href="#" className="text-blue-500">
              {" "}
              pricing plans
            </a>{" "}
            for more features.{" "}
          </p>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <p className="font-bold text-2xl py-2">Security first</p>
          <p>
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our
            <a href="#" className="text-blue-500">
              {" "}
              pricing plans
            </a>{" "}
            for more features.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <button
          type="button"
          className="flex items-center  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign up free{" "}
          <span>
            <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
          </span>
        </button>
      </div>

      <div className="lg:flex justify-between items-center px-4 lg:px-0 gap-4 mt-24">
        <div className="w-full">
          <p className="text-5xl font-bold" style={{ color: "#050038" }}>
            Work together, <br /> wherever you work
          </p>
          <p style={{ color: "#050038" }} className="my-6">
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>

          <p className="text-blue-500 cursor-pointer flex">
            Learn more <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
          </p>
        </div>

        <div className="w-full">
          <img src={hybridWorkImage} alt="" />
        </div>
      </div>
      <div className="lg:flex justify-between items-center px-4 lg:px-0 gap-4 ">
        <div className="w-full">
          <img src={sectionImage} alt="" />
        </div>
        <div className="w-full">
          <p className="text-5xl font-bold" style={{ color: "#050038" }}>
            Connect <br />
            your tools, <br />
            close your tabs
          </p>
          <p style={{ color: "#050038" }} className="my-6">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>

          <p className="text-blue-500 cursor-pointer flex">
            Learn more <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
          </p>
        </div>
      </div>
      <div className="px-4 lg:px-0 gap-4 bg-select">
        <div className="text-right px-32 ">
          <p style={{ color: "#050038" }} className=" text-3xl font-bold">
            The Ways We Work
          </p>
          <p style={{ color: "#050038" }} className="py-2">
            How has our relationship with work changed?
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center my-4  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              The Ways We Work{" "}
              <span>
                <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/*-------------- Built for the way you work -------------- */}

      <p className="text-5xl font-bold py-4 my-8" style={{ color: "#050038" }}>
        Built for the way you work
      </p>
      <button
        className=" py-1 px-4 rounded-lg"
        style={{ backgroundColor: "#F1F3FD" }}
      >
        Brainstorming
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Diagramming
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Meetings & Workshops
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Mapping
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Research & Design
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Strategic Planning
      </button>

      <div className="grid grid-cols-12 gap-4 ">
        <div className="lg:col-span-4 col-span-12 leading-8">
          <div className="mt-14">
            <p className="text-lg font-semibold" style={{ color: "#050038" }}>
              Brainstorming
            </p>
            <p>
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes on.
            </p>
            <p className="text-blue-500 cursor-pointer flex my-2 items-center">
              Learn more <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <img className="w-full" src={brainstorwithoutImage} alt="" />
        </div>
      </div>
      {/*-------------- Built for the way you work -------------- */}

      <p className="text-5xl font-bold py-4 my-8" style={{ color: "#050038" }}>
        Built for all kinds of teams
      </p>
      <button
        className=" py-1 px-4 rounded-lg"
        style={{ backgroundColor: "#F1F3FD" }}
      >
        UX & Design
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Marketing
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Meetings & Workshops
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Engineering
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Consultants
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Agile Coaches
      </button>
      <button className=" py-1 px-4 rounded-lg border mx-2 my-2 lg:my-0">
        Sales
      </button>

      <div className="grid grid-cols-12 gap-4 ">
        <div className="lg:col-span-4 col-span-12 leading-8">
          <div className="mt-14">
            <p className="text-lg font-semibold" style={{ color: "#050038" }}>
              Brainstorming
            </p>

            <ul>
              <li className="flex items-center my-4 gap-2">
                <IoCheckmark /> Build low-fi wireframes
              </li>
              <li className="flex items-center my-4 gap-2">
                <IoCheckmark /> Involve stakeholders in the design process
              </li>
              <li className="flex items-center my-4 gap-2">
                <IoCheckmark /> Run engaging design workshops
              </li>
            </ul>

            <p className="text-blue-500 cursor-pointer flex my-2 items-center">
              Learn more <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
            </p>
            <p className="flex my-8 items-center">
              Integrate your favorite tools
            </p>
            <ul className="flex items-center gap-4 ">
              <li>
                {" "}
                <img className="w-full" src={tribujImage} alt="" />
              </li>
              <li>
                {" "}
                <img className="w-full" src={xdImage} alt="" />
              </li>
              <li>
                {" "}
                <img className="w-full" src={figmaImage} alt="" />
              </li>
              <li>
                {" "}
                <img className="w-full" src={notifyImage} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <img className="w-full" src={divImage} alt="" />
        </div>
      </div>

      <p
        className="text-5xl font-bold text-center my-10"
        style={{ color: "#050038" }}
      >
        Loved by the world's best teams
      </p>
     <div className="flex justify-center ">
     <button
                type="button"
                className="flex items-center    text-blue-700 border-blue-700 border px-8 py-1 rounded"
              >
              See all customer stories {" "}
                <span>
                  <IoIosArrowRoundForward style={{ fontSize: "25px" }} />
                </span>
              </button>
     </div>


      <div className="grid grid-cols-12  gap-12 justify-items-center my-8">
        <div className="lg:col-span-4 col-span-12 p-4 rounded">
          <div className="h-80 relative">
            <img style={{width: "287px", height: "61px"}} src={vamwareImage} alt="" />
            <p>
              “When the pandemic hit, those of us who thrive on in-person
              collaboration were worried that our creativity and productivity
              would suffer. Miro was the perfect tool to help us with
              collaboration, whiteboarding, and retrospectives while remote.”
            </p>
            <div className="flex mt-8 gap-3 absolute bottom-0">
              <div>
                <img   src={userImage} alt="" />
              </div>
              <div>
                <p>Roxanne Mustafa</p>
                <p>Design Team Lead at VMware</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12 p-4 rounded">
          <div className="h-80 relative">
            <img  style={{width: "287px", height: "61px"}}src={dcusinImage} alt="" />
            <p>
            “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
            </p>
            <div className="flex mt-8 gap-3 absolute bottom-0">
              <div>
                <img src={user1Image} alt="" />
              </div>
              <div>
                <p>Roxanne Mustafa</p>
                <p>Design Team Lead at VMware</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12 p-4 rounded">
          <div className="h-80 relative">
            <img  style={{width: "287px", height: "61px"}} src={frogImage} alt="" />
            <p>
            “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
            </p>
            <div className="flex mt-8 gap-3 absolute bottom-0">
              <div>
                <img src={user3Image} alt="" />
              </div>
              <div>
                <p>Roxanne Mustafa</p>
                <p>Design Team Lead at VMware</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feture;
