import React from "react";
import '../index.css';
import ArrrowRight from "../assets/arrowright.png";
import HeroImage from "../assets/Hero Image.png";
import Linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import vectorMobile from "../assets/Vector-mobile.png";

const Home = () => {
  return (
    <div className="relative h-[87vh]">
      <div className="p-4 mt-2 sm:p-6 lg:p-8 lg:grid grid-cols-12">


        {/* ----------------------------------------Heading Desktop--------------------------------------------------- */}
        <main className="hidden lg:block col-span-5">
          <div className="">
            <h1 className="font-Saira-Stencil-One font-responsive text-slate-200">
              Freelance <br /> Web Designer
            </h1>
            <article className="py-5 text-slate-400">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal.
              </p>
            </article>
            <button className="btn mt-4 py-4 text-black flex items-center justify-between ">
              <p>Let's Work Together</p>
              <span className="arrow">
                <img src={ArrrowRight} alt="" />
              </span>
            </button>
          </div>
        </main>

        {/* -------------------------------------------------Mobile Image--------------------------------------- */}

        <div>
          <img
            src={HeroImage}
            alt="Hero Image"
            className="lg:hidden translate-x-8 lg:translate-x-12 z-40 mask-image"
          />
        </div>

        {/* -------------------------------------------------Heading Mobile------------------------------------- */}

        <main className="lg:hidden">
          <div className="text-left">
            <h1 className="font-Saira-Stencil-One  font-responsive-m mt-8">
              Freelance <br /> Web Designer
            </h1>
            <article className="py-5">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal.
              </p>
            </article>
            <button className="py-3 shadow font-medium rounded-xl text-black bg-[#00ECF9] px-8 flex items-center 
            justify-between">
              <p>Let's Work Together</p>
              <span className="arrow">
                <img src={ArrrowRight} alt="" />
              </span>
            </button>
          </div>

          <div className="relative flex items-center justify-start gap-4 mt-8">
            <span>Find Me On</span>
            <hr className="w-10 rounded-lg" />
            <div className="flex items-center justify-start gap-4">
              <a href="#"><img src={facebook} alt="" /></a>
              <a href="#"><img src={Linkedin} alt="" /></a>
              <a href="#"><img src={github} alt="" /></a>
            </div>

            <img src={vectorMobile} alt="" className="lg:hidden absolute bottom-[0%] right-0  scale-y-150 scale-x-150"/>
          </div>

        </main>
      </div>


      {/* -----------------------------------Project & Social Links --------------------------------------- */}

      <div className="hidden lg:flex lg:mt-4 mt-16 p-4 w-[40%] justify-between sm:p-6 lg:p-8">
        <div className="">
          <h2 className="font-medium text-gray-200 text-2xl pb-6">Projects</h2>
          <ul className="space-y-4 cursor-pointer">
            <li>E-Commerce App</li>
            <li>Social Media App</li>
            <li>Video Stream App</li>
          </ul>
        </div>
        <div className="border-l-gray-400 border-l-2"></div>
        <div className="">
          <h2 className="font-medium text-gray-200 text-2xl pb-6">
            Social Media
          </h2>
          <ul className="space-y-4 cursor-pointer">
            <li className="flex items-center justify-start gap-4">
              <img src={facebook} alt="" /> Facebook
            </li>
            <li className="flex items-center justify-start gap-4">
              <img src={Linkedin} alt="" /> LinkedIn
            </li>
            <li className="flex items-center justify-start gap-4">
              <img src={github} alt="" /> GitHub
            </li>
          </ul>
        </div>
      </div>

      <img
        src={HeroImage}
        alt="Hero Image"
        className="hidden lg:block absolute bottom-0 lg:scale-[-0.8] lg:rotate-180 lg:right-[-10%] xl:right-[-10%] 2xl:right-0 z-40 mask-image 
        pointer-events-none"
      />

    </div>
  );
};

export default Home;
