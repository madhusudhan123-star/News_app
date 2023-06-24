import { React, useState } from "react";
import no_image from "../materials/no_image.jpeg";
const Articles = ({ datas }) => {
  const [number, setnumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // console.log(datas);
  const handleImageError = (event) => {
    // Prevent infinite error loop
    event.target.src = no_image; // Replace with your fallback image URL
  };
  return (
    <div>
      <div className="flex justify-evenly flex-wrap">
        <ul className="text-black w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2 h-full mx-2 bg-slate-100">
          {datas &&
            datas.map((data) => {
              {
                /* console.log(data.urlToImage);   */
              }
              return (
                <li
                  key={data.publishedAt}
                  className="text-black text-xl pt-5 pb-10 text-left flex flex-col items-center  border-b-2"
                >
                  <p className="text-black text-xs text-left border-b-2 border-black">
                    {data.author == null ? "Anonymous" : "From " + data.author}
                  </p>
                  <a className="text-black" href={data.url}>
                    {data.title}
                  </a>
                  <p className="text-black text-sm mt-5 mb-5">
                    {data.description}
                  </p>
                  <p className="text-black text-sm mt-1 mb-5">
                    Content: {data.content}
                  </p>
                  <img
                    src={data.urlToImage !== null ? data.urlToImage : no_image}
                    className=" w-1/2"
                    onError={handleImageError}
                  />
                </li>
              );
            })}
        </ul>
        <div>
          {number.map((num) => {
            return (
              <div
                key={num}
                className="bg-gray-400 mt-2 m-0 md:m-10 lg:m-10 2xl:m-10 3xl:m-10 md:m-10 w-72 h-52 lg:h-screen 2xl:h-screen 3xl:h-screen md:h-screen"
              >
                AD
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
