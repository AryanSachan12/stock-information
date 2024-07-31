"use client";

import React from "react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

import { productSales } from "../../data/analytics";

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={500} data={productSales}>
        <XAxis data="Month" />
        <YAxis data="Visitor Insights" />
        <CartesianGrid strokeDasharray="3 3"/>
        <Legend />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="product1"
          stroke="#a9dfd8"
          fill="#749595"
        />

        <Area
          type="monotone"
          dataKey="product2"
          stroke="#F2c8ed"
          fill="#99839b"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
