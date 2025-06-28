import { statsData } from "@/constant/statsData";
import React from "react";

const Content = () => {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((item) => (
        <div
          key={item.id}
          className="bg-muted/30 flex items-center justify-between p-4 rounded-xl shadow"
        >
          <div>
            <h3 className="text-sm text-gray-500 dark:text-neutral-300">
              {item.title}
            </h3>
            <p className="text-xl font-bold">{item.value}</p>
          </div>
          <div className="p-2 bg-gray-100 dark:bg-neutral-800 rounded-full">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
