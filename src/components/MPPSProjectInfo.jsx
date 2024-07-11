// MPPSProjectInfo.jsx
import React from "react";

const MPPSProjectInfo = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-medium justify-center flex">Mobile Price Prediction System</h2>
      
      <p className="mb-4 text-justify text-sm lg:text-base">
      The "Machine Learning in Enterprise Systems" project aims to analyze and organize data to predict and set cell phone prices. 
      The main objective is to create a Data Mining model that allows the company to predict the selling price of new cell phones 
      based on their characteristics, helping the company to set competitive prices and compete with major brands such as Apple and Samsung. 
      The methodology used is CRISP-DM, which guides the project through several distinct phases: understanding the business, 
      understanding the data, preparing the data, modeling and evaluation.
      </p>
     
      <div className="overflow-x-auto mt-10">
  <table className="table-auto text-xs border-collapse border border-gray-400 w-full">
    <thead>
      <tr>
        <th className="border border-gray-300 px-2 py-1 bg-neutral-200">Business Objective</th>
        <th className="border border-gray-300 px-2 py-1 bg-neutral-200">Critical Success Factor</th>
        <th className="border border-gray-300 px-2 py-1 bg-neutral-200">Measure</th>
        <th className="border border-gray-300 px-2 py-1 bg-neutral-200">KPI</th>
        <th className="border border-gray-300 px-2 py-1 bg-neutral-200">Goals</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-2 py-1 bg-neutral-100 text-center font-medium" rowSpan="4">Increase company profit</td>
        <td className="border border-gray-300 px-2 py-1">Reduce error in smartphone price determination</td>
        <td className="border border-gray-300 px-2 py-1">Reduce the percentage error in smartphone price estimation</td>
        <td className="border border-gray-300 px-2 py-1">Percentage of error per price estimate</td>
        <td className="border border-gray-300 px-2 py-1">Achieve 100% accuracy in predicting smartphone price range</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-2 py-1">Analyze the confidence level of the chosen model</td>
        <td className="border border-gray-300 px-2 py-1">Compare actual and predicted smartphone prices</td>
        <td className="border border-gray-300 px-2 py-1">Average actual value and predicted value according to the confidence level percentage</td>
        <td className="border border-gray-300 px-2 py-1"></td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-2 py-1" rowSpan="2">Analyze Purchase Patterns</td>
        <td className="border border-gray-300 px-2 py-1">Identify monthly smartphone purchase patterns to optimize marketing strategies</td>
        <td className="border border-gray-300 px-2 py-1">Total number of smartphones sold per month</td>
        <td className="border border-gray-300 px-2 py-1">Achieve monthly sales &gt;= 25</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-2 py-1">Identify customer purchase patterns for key smartphone components to optimize marketing strategies</td>
        <td className="border border-gray-300 px-2 py-1">Average count of the most relevant smartphone components</td>
        <td className="border border-gray-300 px-2 py-1"></td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-2 py-1 bg-neutral-100 text-center font-medium" rowSpan="1">Improve customer satisfaction</td>
        <td className="border border-gray-300 px-2 py-1">Value Index of Quality/Price</td>
        <td className="border border-gray-300 px-2 py-1">Increase customer satisfaction index regarding price/quality compared to competitors</td>
        <td className="border border-gray-300 px-2 py-1">Total number of satisfactions regarding smartphone price</td>
        <td className="border border-gray-300 px-2 py-1">Achieve a monthly index &gt;= 1.62</td>
      </tr>
    </tbody>
  </table>
</div>


      <h3 className="text-2xl mt-10 font-medium justify-center flex">Final DashBoard</h3>
      
        <div className="flex mt-2 overflow-x-auto">
            <iframe 
                title="aase1" 
                width="1140" 
                height="541.25" 
                src="https://app.powerbi.com/reportEmbed?reportId=9085aacc-45c6-49cb-9361-43423bb68462&autoAuth=true&ctid=d05d4c80-da1e-4cd7-83a6-0d2094b20418" 
                frameborder="0" 
                allowFullScreen="true">
            </iframe>
        </div>

        <p className="text-xs text-neutral-600 mt-2 flex justify-center">Only people from my organization @Uminho have access because I don't have PowerBI Pro License.</p>

      {/* Additional project-specific content such as API implementation, Iframes, etc. */}
    </div>
  );
};

export default MPPSProjectInfo;
