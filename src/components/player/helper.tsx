import { ArrowPathRoundedSquareIcon, BackwardIcon, ForwardIcon, PlayIcon } from "@heroicons/react/24/outline";

const Controls = () => {
  return (
    <div className="h-full">
        <div className="top-0 w-full hover:scale-y-150 cursor-pointer">
            <div className="h-1 w-[150px] bg-white"/>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-8 h-full">
            <div>
                <ArrowPathRoundedSquareIcon  className="w-5 h-5 text-white hover:text-white cursor-pointer" />
            </div>
            <div>
                <BackwardIcon  className="w-8 h-8 text-white hover:text-white cursor-pointer" />
            </div>
            <div>
                <PlayIcon  className="w-10 h-10 text-white hover:text-white cursor-pointer" />
            </div>
            <div>
                <ForwardIcon  className="w-8 h-8 text-white hover:text-white cursor-pointer" />
            </div>
            <div>
                <ArrowPathRoundedSquareIcon  className="w-5 h-5 text-white hover:text-white cursor-pointer" />
            </div>
        </div>
    </div>
  )
};

export default Controls;
