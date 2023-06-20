import { React, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const categor = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const country = [
    { name: "China", code: "CN" },
    { name: "India", code: "IN" },
    { name: "Russian Federation", code: "RU" },
    { name: "United States", code: "US" },
    { name: "Canada", code: "CA" },
  ];

  return (
    <div className=" bg-gray-700 w-full h-full lg:h-80 md:h-80 xl:h-80 2xl:h-80 3xl:h-80">
      <div className="  flex flex-wrap gap-5 pt-10">
        <div>
          <div className="flex flex-wrap gap-10 pt-10">
            <h3 className="text-white text-2xl">categories: </h3>
            <ul className="flex flex-row justify-center text-xl cursor-pointer mt-1 gap-10 flex-wrap">
              {categor.map((category, index) => (
                <li key={index}>
                  <Link to={`/categories/${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-10 pt-10">
            <h3 className="text-white text-2xl">Country: </h3>
            <ul className="flex flex-row justify-center text-xl cursor-pointer mt-1 gap-10 flex-wrap">
              {country.map((category, index) => (
                <li key={index}>
                  <Link to={`/country/${category.code}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-lg md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl 3xl:text-3xl text-white">
          Thank You
          <br />
          To Reach Email us at :
          <br />
          dmadhusudhan@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;

//https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d29d502291434e58810d212d1b71638c
// const categories = [
//   "business",
//   "entertainment",
//   "health",
//   "science",
//   "sports",
//   "technology",
// ];
