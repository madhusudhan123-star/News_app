import { React, useState, useEffect } from "react";
import facebook from "../materials/facebook.png";
import github from "../materials/github.png";
import twitter from "../materials/twitter.png";
// import Navbar from "./Navbar";
import no_image from "../materials/no_image.jpeg";

const Header = () => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    fetch(`https://ipapi.co/json/`)
      .then((res) => res.json())
      .then((data) => {
        const code = data.country_code;
        if (code !== undefined) {
          fetch(
            `https://newsapi.org/v2/top-headlines?country=${code}&apiKey=d29d502291434e58810d212d1b71638c`
          )
            .then((res) => res.json())
            .then((data) => {
              const dataes = data.articles;
              if (Array.isArray(dataes)) {
                const slicedData = dataes.slice(1, 5);
                setDatas(slicedData);
              }
            });
        }
      });
  }, []);
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between px-10 bg-gray-200 pb-10 pt-4 sm:px-0 flex-wrap ">
          <div className="flex items-center gap-4 h-full flex-wrap">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} className="h-4 w-4" />
            </a>
            <a href="https://github.com/madhusudhan123-star" target="_blank">
              <img src={github} className="h-4 w-4" />
            </a>
            <a className="https://twitter.com/madhusu08744511">
              <img src={twitter} className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center mr-4 gap-4 h-full px-0 sm:px-10 text-xs flex-wrap">
            <h3>+91 630 979 2221</h3>
            <h3>dmadhusudhan98@gmail.com</h3>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap  mt-8">
          <h1 className="text-6xl text-center font-bold text-gray-800">
            World News
          </h1>
          <div className="bg-gray-400 w-full lg-w-1/2 xl-w-1/2 2xl-w-1/2 md:w-1/2 h-full flex py-10 items-center justify-center">
            <h3>Ad</h3>
          </div>
        </div>
        {/* <Navbar /> */}
        <div className="flex flex-warp">
          <div className="w-full 2xl:w-8/12 xl:w-8/12 lg:w-8/12 mt-5 mb-5 mr-1 -z-10">
            <div className="overflow-hidden relative ">
              <img
                src={
                  datas != undefined && datas[0].urlToImage != null
                    ? datas[0].urlToImage
                    : no_image
                }
                className="header_images w-full h-full"
              />
              <h1 className="text-base sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold text-gray-100 absolute bottom-10  ">
                {datas != undefined && datas[0].title != null
                  ? datas[0].title
                  : no_image}
              </h1>
            </div>
          </div>
          <div className=" header_sidenew w-1/3 hidden lg:block xl:block 2xl:block mt-4 flex-col items-center justify-center cursor-pointer -z-10">
            <div className="p-1 relative w-11/12">
              <div className="overflow-hidden">
                <img
                  src={
                    datas != undefined && datas[1].urlToImage != null
                      ? datas[1].urlToImage
                      : no_image
                  }
                  className="header_images w-full h-full relative"
                />
                <h1 className=" text-l font-bold text-gray-100 absolute bottom-4 mr-2 ">
                  {datas != undefined && datas[1].title != null
                    ? datas[1].title
                    : no_image}
                </h1>
              </div>
            </div>
            <div className="p-1 relative w-11/12">
              <div className="overflow-hidden">
                <img
                  src={
                    datas != undefined && datas[2].urlToImage != null
                      ? datas[2].urlToImage
                      : no_image
                  }
                  className="header_images w-full h-full relative"
                />
                <h1 className=" text-l font-bold text-gray-100 absolute bottom-8 mr-2 ">
                  {datas != undefined && datas[2].title != null
                    ? datas[2].title
                    : no_image}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
