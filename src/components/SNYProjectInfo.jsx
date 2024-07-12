import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import bebedouros from "../assets/bebedouros.png";
import animais from "../assets/animais.png";
import esquilos from "../assets/esquilos.png";
import extra from "../assets/extra.png";
import arvores from "../assets/arvores.png";

const images = [
  bebedouros,
  animais,
  esquilos,
  extra,
  arvores
];

const SNYProjectInfo = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-medium justify-center flex">Analysis of data on the Quality of Life of Squirrels in New York</h2>
      
      <div className="relative flex justify-center items-center">
        <FaArrowAltCircleLeft className="absolute left-1 lg:left-8 text-2xl lg:text-3xl text-neutral-400 lg:text-neutral-800 cursor-pointer" onClick={prevSlide} />
        {images.map((image, index) => (
          <div
            className={index === current ? 'opacity-100 transition duration-1000' : 'opacity-0'}
            key={index}
          >
            {index === current && (
              <img 
                src={image} 
                alt="dashboard image" 
                className="w-full max-w-screen-sm h-auto rounded-2xl shadow-xl" 
              />
            )}
          </div>
        ))}
        <FaArrowAltCircleRight className="absolute right-1 lg:right-8 text-2xl lg:text-3xl text-neutral-400 lg:text-neutral-800 cursor-pointer" onClick={nextSlide} />
      </div>   

    <div>
        <p className="mt-14 text-justify text-xs lg:text-base">
            The study focuses on New York City, investigating the quality of life of squirrels, the condition of trees and the quality of drinking fountains in parks.
            <br />
            Specific objectives include:
        </p>

        <div className="flex ml-10 mt-2">
            <ul className="list-disc lg:ml-5 text-xs lg:text-base text-justify">
                <li>To study the distribution and health of trees in different boroughs of New York.</li>
                <li>Analyze the number and behavior of squirrels in Central Park, including their interactions with humans and their environment.</li>
                <li>Evaluate the response of park rangers to animal conditions in urban parks.</li>
                <li>Examine the distribution and condition of drinking fountains in New York City parks.</li>
            </ul>
        </div>

        <p className="mt-2 text-justify text-xs lg:text-base">
        In addition, the project aims to answer general analytical questions, such as the correlation between the number of trees and watering holes in different boroughs and the comparison between the months with the most squirrel sightings and rescues.
        <br />
        The project was developed in several structured stages to ensure the proper preparation and analysis of the data collected from various sources. Initially, the data was extracted from the available sources and uploaded to HDFS (Hadoop Distributed File System), where the first stage, called <strong>Bronze</strong>, involved uploading the datasets and identifying the errors present in each dataset.
        <br />
        In the <strong>Silver</strong> stage, unnecessary columns were eliminated and those with problems were corrected. In addition, the tables were listed by year and the dates were standardized to a common format, making it easier to integrate and compare the data.
        <br />
        Moving on to the <strong>Gold</strong> stage, operations were carried out between columns, aggregating tables and joining different tables, consolidating the data into a final format and preparing it for analysis.
        <br />
        Finally, in the <strong>Analysis and Dashboards</strong> stage, the transformed data was analyzed and used to create dashboards, allowing clear and comprehensive visualization of the results obtained. This layered process guaranteed the integrity and usability of the data, facilitating the extraction of valuable insights from the information prepared.
        
        </p>

    </div>

    
      
    </div>
  );
};

export default SNYProjectInfo;
