import { React, useState, useEffect } from "react";
import Articles from "./Articles";

const Second = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetch(`https://ipapi.co/json/`)
      .then((res) => res.json())
      .then((data) => {
        const code = data.country_code;
        if (code != undefined) {
          fetch(
            `https://newsapi.org/v2/top-headlines?country=${code}&apiKey=d29d502291434e58810d212d1b71638c`
          )
            .then((res) => res.json())
            .then((data) => {
              setDatas(data.articles);
            });
        }
      });
  }, []);
  return (
    <div className="">
      <div className=" h-full text-center">
        <h1 className="text-black text-4xl text-center pt-10 mb-10">
          Top News
        </h1>
        <Articles datas={datas} />
      </div>
    </div>
  );
};

export default Second;
