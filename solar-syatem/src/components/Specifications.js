import React from "react";

const Specifications = () => {
  return (
    <div className="flex">
      <div className="cursor-pointer rounded-2xl my-2 mx-4 bg-green-100 w-80 h-70 hover:translate-y-2 hover:shadow-xl">
        <p className="p-2 text-center font-bold text-3xl text-gray-700">
          Energy Saving 💡
        </p>
        <ul className="p-3 m-2 text-lg text-green-500 font-semibold">
          <li>◽ Reduce electricity bills by 50–80%</li>
          <li>◽ Efficient solar panels with maximum power output</li>
          <li>◽ Ideal for homes, shops, farms, and industries</li>
        </ul>
      </div>
      <div className="cursor-pointer rounded-2xl my-2 mx-4 bg-yellow-100 w-80 h-70 hover:translate-y-2 hover:shadow-xl">
        <p className="py-2 text-center font-bold text-3xl  text-gray-700">
          Money Saving 💰
        </p>
        <ul className="p-3 m-2 text-lg text-green-600 font-semibold">
          <li>◽ One-time investment with long-term savings</li>
          <li>◽ Low maintenance cost</li>
          <li>◽ Quick return on investment (ROI)</li>
        </ul>
      </div>
      <div className="cursor-pointer rounded-2xl my-2 mx-4 bg-pink-100 w-80 h-70 hover:translate-y-2 hover:shadow-xl">
        <p className="py-2 text-center font-bold text-3xl  text-gray-700">
          Eco-Friendly & Recycling ♻️
        </p>
        <ul className="p-3 m-2 text-lg text-green-600 font-semibold">
          <li>◽ Clean and renewable energy source</li>
          <li>◽ Reduces carbon footprint</li>
          <li>◽ Solar panels are safe for the environment</li>
        </ul>
      </div>
      <div className=" rounded-2xl my-2 mx-4 bg-blue-100 w-80 h-70 hover:translate-y-2 hover:shadow-xl cursor-pointer">
        <p className="py-2 text-center font-bold text-3xl  text-gray-700">
          Government Subsidy Support 🏛️
        </p>
        <ul className="p-3 m-2 text-lg text-green-600 font-semibold">
          <li>◽ Assistance with government solar subsidy</li>
          <li>◽ Guidance on documents and approvals</li>
          <li>◽ Helps reduce installation cost significantly</li>
        </ul>
      </div>
    </div>
  );
};

export default Specifications;
