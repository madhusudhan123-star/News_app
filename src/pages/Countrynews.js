import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "../components/Articles";

const Countrynews = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://ipapi.co/json/`)
      .then((res) => res.json())
      .then((data) => {
        const code = data.country_code;
        if (code != undefined) {
          fetch(
            `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=d29d502291434e58810d212d1b71638c`
          )
            .then((res) => res.json())
            .then((data) => {
              setDatas(data.articles);
            });
        }
      });
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10 border-b-2 border-black">
        {id}
      </h1>
      <div className="">
        {datas != 0 ? <Articles datas={datas} /> : <h1>No Data</h1>}
      </div>
    </div>
  );
};

export default Countrynews;
