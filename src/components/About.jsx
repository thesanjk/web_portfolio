import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        With 2 years of experience, I have developed a strong skillset in Python, specializing in building robust solutions. My expertise includes working with popular databases like MySQL and Oracle SQL for efficient data management. I am also well-versed in front-end technologies such as HTML, CSS, and JavaScript, allowing me to create visually appealing and interactive user interfaces. Additionally, I possess a solid understanding of data science concepts and have utilized libraries like NumPy, pandas, and matplotlib for data analysis and visualization. Currently, I am actively pursuing certifications in cloud technologies and artificial intelligence to further enhance my knowledge and stay updated with the latest advancements in the field.
        </p>

        <br />

      </div>
    </div>
  );
};

export default About;
