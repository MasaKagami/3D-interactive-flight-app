import { useState } from "react";
import Travelers from "../input/stepperInput";

interface FilterProps {
    onSearch: () => void;
}
const Filter: React.FC<FilterProps> = ({ onSearch }) => {
    const [selectedOption, setSelectedOption] = useState("direct");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedDestination, setSelectedDestination] = useState("");
    const [selectedDepartDate, setSelectedDepartDate] = useState<string | undefined>();
    const [selectedReturnDate, setSelectedReturnDate] = useState<string | undefined>();
    const [selectedAdult, setSelectedAdult] = useState(1);
    const [selectedChildren, setSelectedChildren] = useState(0);
    const [selectedClass, setSelectedClass] = useState("Economy");

    return (
        <div className="p-8 px-16 w-[400px] h-full flex flex-col gap-4 bg-darkSky">
            <div className="flex flex-col w-full rounded-t-lg rounded-b-lg text-black gap-1">
                
                {/* departing location */}
                <div className="bg-white relative w-full rounded-t-lg">
                    <label className="absolute left-4 top-[1rem] bg-white text-sm text-gray-600">
                        From
                    </label>
                    <div className="form-control w-full rounded-t-lg border-t border-white py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                        <input
                        type="text"
                        placeholder="Country, City, or Airport"
                        className="input w-full border-none outline-none bg-transparent focus:outline-none leading pt-5"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        />
                    </div>
                </div>
                
                {/* destination */}
                <div className="bg-white relative w-full">
                    <label className="absolute left-4 top-[1rem] bg-white text-sm text-gray-600">
                        To
                    </label>
                    <div className="form-control w-full rounded border-gray-300 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                        <input
                        type="text"
                        placeholder="Country, City, or Airport"
                        className="input w-full border-none outline-none bg-transparent focus:outline-none leading pt-5"
                        value = {selectedDestination}
                        onChange={(e) => setSelectedDestination(e.target.value)}
                        />
                    </div>
                </div>
                
                {/* departing date */}
                <div className="bg-white relative w-full">
                    <label className="absolute left-4 top-[1rem] bg-white text-sm text-gray-600">
                        Depart
                    </label>
                    <div className="form-control w-full rounded border-gray-300 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                        <input
                        type="date"
                        placeholder="Add Date"
                        className="input w-full border-none outline-none bg-transparent focus:outline-none leading pt-5"
                        value={selectedDepartDate}
                        onChange={(e) => setSelectedDepartDate(e.target.value)}
                        />
                    </div>
                </div>
                
                {/* return date (if there is one) */}
                {selectedOption !== "direct" && (
                <div className="bg-white relative w-full">
                    <label className="absolute left-4 top-[1rem] bg-white text-sm text-gray-600">
                        Return
                    </label>
                    <div className="form-control w-full rounded border-gray-300 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                        <input
                        type="date"
                        placeholder="Add Date"
                        className="input w-full border-none outline-none bg-transparent focus:outline-none leading pt-5"
                        value={selectedReturnDate}
                        onChange={(e) => setSelectedReturnDate(e.target.value)}
                        />
                    </div>
                </div>       
                )}
                             
                
                {/* number of adults, children, and cabin class */}
                <div className="bg-white relative w-full rounded-b-lg overflow-hidden">
                    {/* <label className="absolute left-4 top-[1rem] bg-white text-sm text-gray-600">
                        Travellers and cabin class
                    </label> */}
                    <div className="form-control flex flex-col gap-2 w-full rounded-b-lg border-b border-white p-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                        <div>
                            <div className="label">
                                <span className="label-text text-gray-600">Cabin Class</span>
                            </div>
                            <select 
                                className="select select-bordered w-full bg-white border-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
                                value = {selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                            >
                                <option>Economy</option>
                                <option>Premium Economy</option>
                                <option>Business Class</option>
                                <option>First Class</option>
                            </select>
                        </div>
                        <Travelers 
                            adults={selectedAdult}
                            setAdults={setSelectedAdult}
                            numChildren={selectedChildren}
                            setChildren={setSelectedChildren}
                        />
                    </div>
                </div>
            </div>


            <div 
                className="btn w-full bg-blue-700 text-white hover:bg-blue-800"
                onClick={onSearch}
            >
                Search
            </div>
            
            <div className="flex flex-col w-full">
                {/* direct flight */}
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text text-white">Direct Flight</span>
                        <input 
                            type="radio" 
                            name="radio-10" 
                            value="direct"
                            className="radio checked:bg-blue-700" 
                            checked={selectedOption === "direct"} 
                            onChange={(e) => setSelectedOption(e.target.value)}
                        />
                    </label>
                </div>

                {/* indirect flight */}
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text text-white">Round Trip</span>
                        <input 
                            type="radio" 
                            name="radio-10" 
                            value="roundTrip"
                            className="radio checked:bg-blue-700" 
                            checked={selectedOption === "roundTrip"}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Filter