import React, { useState, useEffect } from "react";
import { Pie } from '@ant-design/charts';
import { getGraphs } from '../../features/piegraph/piegraphSlice';
import { useDispatch, useSelector } from "react-redux";

const Piechart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGraphs());
  }, []);

  const getGraphState = useSelector((state) => state.piegraph.piegraph);
  console.log(getGraphState);
  const data1 = [];
  for(let i =0 ;i < getGraphState.length; i++){
    data1.push({
      type: getGraphState[i].type,
      value: getGraphState[i].value
    })
  }
 
  const config = {
    appendPadding: 20,
    data: data1,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    // label: {
    //   type: 'inner',
    //   offset: '-50%', // Adjust this value based on your preference
    //   content: '{percentage}',
    // },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return (
    <>
    <Pie {...config} />
    </>
  );
};

export default Piechart;
