import { ArrowPathRoundedSquareIcon, BackwardIcon, ForwardIcon, PlayIcon } from "@heroicons/react/24/outline";

const Controls = (props:Props) => {
    const { isBottomPlayer} = props;
  return (
    <div className="w-full h-full">
        {
            !isBottomPlayer &&
            <div className="top-0 w-full hover:scale-y-150 cursor-pointer">
                <div className="h-1 w-[150px] bg-white"/>
            </div>
        }
        <div className="flex flex-row justify-center items-center gap-x-8 my-4 self-center">
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
        {
            isBottomPlayer &&
            <div className="flex flex-row justify-center items-center text-gray-200 text-sm gap-4 w-full ">
                <p>01:15</p>
                <div className="w-[550px] hover:scale-y-125 cursor-pointer bg-gray-500 rounded-full">
                    <div className="h-1 w-[250px] bg-white rounded-full"/>
                </div>
                <p>03:40</p>
            </div>
        }
    </div>
  )
};

interface Props {
    isBottomPlayer?: boolean;
}

export default Controls;
