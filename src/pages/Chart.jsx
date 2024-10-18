import { useState } from "react";
import ReactSlider from "react-slider";
import "./PriceSlider.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Chart = () => {
  const data = [
    { year: 2014, principal: 1800, interest: 180 },
    { year: 2015, principal: 1900, interest: 190 },
    { year: 2016, principal: 2000, interest: 200 },
    { year: 2017, principal: 2100, interest: 210 },
    { year: 2018, principal: 2200, interest: 220 },
    { year: 2019, principal: 2300, interest: 230 },
    { year: 2020, principal: 2400, interest: 240 },
    { year: 2021, principal: 2500, interest: 250 },
    { year: 2022, principal: 2600, interest: 260 },
    { year: 2023, principal: 2700, interest: 270 },
    { year: 2024, principal: 2800, interest: 280 },
    { year: 2025, principal: 2900, interest: 290 },
  ];

  const [priceRange, setPriceRange] = useState([50, 1200]);
  console.log(priceRange)

  return (
    <>
      <BarChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid
          vertical={false}
          strokeLinejoin="1 1"
          strokeWidth={1}
          strokeOpacity={0.5}
        />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="interest" fill="gold" stackId="a" barSize={20} />
        <Bar dataKey="principal" fill="green" stackId="a" barSize={20} />
      </BarChart>

      <div className="py-[4rem]">
        <p className="mb-[1.5rem] text-[1.25rem] font-semibold">Price</p>
        <p className="font-bold text-[1.2rem] mb-5 text-right">{priceRange}</p>
        <ReactSlider
          // className="horizontal-slider"
          // thumbClassName="example-thumb"
          // trackClassName="example-track"
          // value={priceRange}
          // onChange={(newValue) => setPriceRange(newValue)}
          // renderThumb={(props, state) => (
          //   <div {...props}>{`₹${state.valueNow}`}</div>
          // )}
          // min={50}
          // max={1200}
          // minDistance={10}

          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          min={500}
          max={10000}
          defaultValue={1000}
          minDistance={10}
          onChange={(newValue) => setPriceRange(newValue)}
        />
      </div>
    </>
  );
};

export default Chart;
