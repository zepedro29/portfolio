import React from 'react'

const DSSWProjectInfo = () => {
  return (

    <div className="p-4">
      <h2 className="text-2xl mb-4 font-medium justify-center flex">Decision Support System for Walmart</h2>
      
      <div>
        <p className="text-justify text-xs lg:text-base">
        This project focused on creating a decision support system for Walmart, aimed at improving resource management, specifically product inventory and employee allocation.
        </p>

        <h2 className="text-base lg:text-lg mt-4 font-semibold lg:font-bold">Objectives and Methodology</h2>

        <p className="text-justify text-xs lg:text-base">
        The project was divided into two main phases: weekly sales forecasting and resource management optimization.
         Using historical sales data, time series models, and machine learning techniques, we forecasted weekly sales 
         for four departments within the store. The accuracy of these forecasts was crucial for making effective 
         resource management decisions.
        </p>

        <h2 className="text-base lg:text-lg mt-4 font-semibold lg:font-bold">Models Used</h2>

        <p className="text-justify text-xs lg:text-base">
        For the <strong>forecasting phase</strong>, we employed a growing window method with 10 iterations and a 4-week window. 
        The results of each model were saved in separate Excel files. The univariate models included ARIMA, ETS, MLPE, and Random Forest, 
        while the multivariate models were VAR and ARIMAX. In the <strong>optimization phase</strong>, we retrieved data from these Excel files and applied 
        algorithms such as Monte Carlo, Hill Climbing, Simulated Annealing (SANN), and Differential Evolution, with the 
        goal of maximizing profit and minimizing operational costs.
        </p>

        <h2 className="text-base lg:text-lg mt-4 font-semibold lg:font-bold">Results</h2>
        
        <p className="text-justify text-xs lg:text-base">
        The results demonstrated that integrating forecasting and optimization techniques can significantly enhance operational efficiency 
        and decision-making. The developed system provided comprehensive insights for store management, optimizing employee allocation 
        and inventory levels to maximize profit and minimize costs. 
        </p>

      </div>

      <div className="flex mt-4 lg:mt-6 justify-center">
          <div className="w-full max-w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
            <iframe
              src="https://www.youtube.com/embed/Ds41WoHP_OE?si=-0Wx8MKuPm7FEkLv"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>



    </div>
  )
}

export default DSSWProjectInfo