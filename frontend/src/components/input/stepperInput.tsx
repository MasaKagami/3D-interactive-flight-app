import React from "react";

interface TravelersProps {
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  numChildren: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}

const Travelers: React.FC<TravelersProps> = ({ adults, setAdults, numChildren, setChildren }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Adults Stepper */}
      <div className="flex items-center w-full justify-between">
        <label className="text-gray-500 text-sm mb-1">Adults</label>
        <div className="flex items-center gap-2 w-1/2 justify-between">
          <button
            className="w-10 h-10 flex items-center justify-center border rounded bg-gray-100"
            onClick={() => setAdults(Math.max(1, adults - 1))}
            disabled={adults <= 1}
          >
            <span className="text-gray-500">-</span>
          </button>
          <span className="text-lg">{adults}</span>
          <button
            className="w-10 h-10 flex items-center justify-center border rounded bg-gray-100"
            onClick={() => setAdults(adults + 1)}
          >
            <span className="text-gray-500">+</span>
          </button>
        </div>
      </div>

      {/* Children Stepper */}
      <div className="flex items-center w-full justify-between">
        <label className="text-gray-500 text-sm mb-1">Children</label>
        <div className="flex items-center gap-2 w-1/2 justify-between">
          <button
            className="w-10 h-10 flex items-center justify-center border rounded bg-gray-100"
            onClick={() => setChildren(Math.max(0, numChildren - 1))}
            disabled={numChildren <= 0}
          >
            <span className="text-gray-500">-</span>
          </button>
          <span className="text-lg">{numChildren}</span>
          <button
            className="w-10 h-10 flex items-center justify-center border rounded bg-gray-100"
            onClick={() => setChildren(numChildren + 1)}
          >
            <span className="text-gray-500">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Travelers;
