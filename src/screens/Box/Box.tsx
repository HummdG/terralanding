import React from "react";
import { Badge } from "../../components/ui/badge";

export const Box = (): JSX.Element => {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col p-8">
      <div className="flex gap-2 mb-16">
        <Badge className="bg-[#E8F993] text-black hover:bg-[#E8F993] rounded-full px-4 py-2 font-medium">
          5 DAY PROTOTYPE
        </Badge>
        <Badge className="bg-[#333333] text-white hover:bg-[#333333] rounded-full px-4 py-2 font-medium">
          COMPLETED
        </Badge>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-7xl font-serif tracking-tight">Terra Fortis</h1>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-xs uppercase text-gray-400 mb-1">
            RESPONSIBLE DESIGNER(S)
          </span>
          <span className="text-white text-lg">
            Leonardo <span className="mx-2">•</span> Giorgiana
          </span>
        </div>
        <div className="text-white text-3xl font-bold">
          Smpl<sup>°°</sup>
        </div>
      </div>
    </div>
  );
};
