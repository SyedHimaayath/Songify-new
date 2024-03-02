import { QueueListIcon } from "@heroicons/react/24/outline";
import Controls from "./helper";


const Player = () => {
  return (
    <div className="h-full w-full bg-[#212026] rounded-md relative">
      <div className="flex justify-between items-baseline mb-4 pt-4 px-6">
        <p className="">Player</p>
        <QueueListIcon className="w-6 h-6"/>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <img src="src/assets/artists/four.jpeg" className="w-44 h-44 object-cover m-4"/>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <p className="text-xl text-white">Don't Blame Me</p>
          <p className="text-md text-gray-400">Taylor Swift</p>
        </div>
      </div>
      <div className="p-6 flex flex-row justify-between items-center text-gray-200 text-sm">
        <p>01:15</p>
        <p>03:40</p>
      </div>
      <div className="absolute bottom-0 w-full bg-emerald-500 h-1/4 rounded-b-md">
        <Controls/>
      </div>
    </div>
  )
};

export default Player;
