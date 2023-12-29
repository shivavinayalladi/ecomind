import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import './Analytics.css'

export function Analytics1() {
  const storedData = localStorage.getItem('data');
  const data = storedData ? JSON.parse(storedData) : [
    // Your default data here if local storage doesn't have it
  ];
  function getCategoryCounts(data) {
    const categoryCounts = {};
    const categoryCorrectCounts = {};
  
    data.forEach(entry => {
      const { category, point } = entry;
  
      if (!categoryCounts[category]) {
        categoryCounts[category] = 1;
        categoryCorrectCounts[category] = 1;
      }
  
      categoryCounts[category]++;
  
      if (point === 1) {
        categoryCorrectCounts[category]++;
      }
    });
  
    return { categoryCounts, categoryCorrectCounts };
  }
 
    

  const { categoryCounts, categoryCorrectCounts } = getCategoryCounts(data);
  console.log(getCategoryCounts(data))
  const Data = [
    ["Task", "Hours per Day"],
    ["emotion", (categoryCounts['emotion']!=0)?categoryCorrectCounts['emotion']/categoryCounts['emotion']:0.5],
    ["social", (categoryCounts['social']!=0)?categoryCorrectCounts['social']/categoryCounts['social']:0.5],
    ["behaviour",(categoryCounts['behaviour']!=0)?categoryCorrectCounts['behaviour']/categoryCounts['behaviour']:0.5],
    ["interaction", (categoryCounts['interaction']!=0)?categoryCorrectCounts['interaction']/categoryCounts['interaction']:0.5],
  ];
  const Data1 = [
    ["Task", "Hours per Day"],
    ["responsibility", (categoryCounts['responsibility']!=0)?(categoryCorrectCounts['responsibility']+1)/categoryCounts['responsibility']:1],
    ["civil", (categoryCounts['civil']!=0)?(categoryCorrectCounts['civil']+1)/categoryCounts['civil']:0.5],
    // ["knowledge",(categoryCounts['knowledge']!=0)?(categoryCorrectCounts['knowledge']+1)/categoryCounts['knowledge']:0.5],
  ];
  return (
    <>
      <div className="title">
        Analysis
      </div>

      <div className="chart">
        <div className="divbox" id="chart1">
          <Chart
            chartType="PieChart"
            data={Data1}
            options={{ title: "Sustainable Development" }}
            width={"590px"}
            height={"500px"}
          />
        </div>
        <div className="divbox">
          <Chart
            chartType="PieChart"
            data={Data}
            options={{ title: "Social Awareness" }}
            width={"590px"}
            height={"500px"}
          />
        </div>
      </div>
    </>
  );
}