import React from "react";

const About = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-black">About Page</h1>
        <p className="mt-10 mx-10">
          In the website developed by Madhusudhan, the news is fetched
          dynamically through data APIs. The focus of the website is to display
          news specifically related to the user's current country. By leveraging
          data fetching techniques, the website ensures that only news relevant
          to the user's location is presented.
        </p>
      </div>
    </div>
  );
};

export default About;
