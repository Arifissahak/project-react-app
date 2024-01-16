import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";
import { getGraphs } from "../../features/linegraph/linegraphSlice";


const Linegraph = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGraphs());
  }, []);
  const getGraphState = useSelector((state) => state.linegraph.graphs);
  const data1 = [];
  for(let i =0 ;i < getGraphState.length; i++){
    data1.push({
      date: getGraphState[i].x,
      scales: getGraphState[i].y
    })
  }
  console.log(data1);
  const config = {
    data: data1,
    padding: "auto",
    xField: "date",
    yField: "scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};

export default Linegraph;
