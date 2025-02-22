import React from "react";
import WholeSummary from "../../components/wholesummary";
import DateTime from "../../components/DateTime";
import BackButton from "../../components/BackButton";
import { Pencil } from "lucide-react"; // Import the Pencil icon

function Page() {
  return (
    <div>
      <DateTime />
      <BackButton />

      {/* Header with Pencil Icon */}
      <h1 className="font-bold text-[26px] flex items-center gap-2 ml-16">
        អេ អឹម ខេ និយាយអំពីការគាំទ្រផ្នែកព័ត៌មានវិទ្យា
        <Pencil className="w-5 h-5 text-gray-500 cursor-pointer hover:text-black" />
      </h1>

      <WholeSummary />
      <WholeSummary />
    </div>
  );
}

export default Page;
