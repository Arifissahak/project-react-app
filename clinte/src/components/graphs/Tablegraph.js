import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getGraphs } from "../../features/table/tableSlice";

const Tablegraph = () => {
  const sharedOnCell = (_, index) => {
    if (index === 1) {
      return {
        colSpan: 0,
      };
    }
    return {};
  };
  const columns = [
    {
      title: "No",
      dataIndex: "key",
      rowScope: "row",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
      onCell: (_, index) => ({
        colSpan: index === 1 ? 5 : 1,
      }),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      onCell: sharedOnCell,
    },
    {
      title: "Price",
      dataIndex: "price",
      onCell: sharedOnCell,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGraphs());
  }, []);

  const getGraphState = useSelector((state) => state.table.tablegraph);
  console.log(getGraphState);
  const data1 = [];
  for (let i = 0; i < getGraphState.length; i++) {
    data1.push({
      key: getGraphState[i].id,
      name: getGraphState[i].name,
      quantity: getGraphState[i].quantity,
      price: getGraphState[i].price,
    });
  }
  return <Table columns={columns} dataSource={data1} bordered />;
};

export default Tablegraph;
