import { PlayCircleIcon } from "@heroicons/react/16/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useId } from "react";

const Section = (props:Props) => {

    const { title, contentList } = props;

    const ContentBox = (content:Content) => {
        return (
            <div className="rounded-md flex flex-col justify-start items-center hover:bg-[#212026] p-4 cursor-pointer group">
                <div className="w-32 h-32 bg-slate-400 rounded-md relative shadow-md shadow-black">
                    <div className="hidden absolute bottom-2 right-2 rounded-full bg-[#212026] hover:scale-105 group-hover:block">
                        <PlayCircleIcon className="w-9 h-9 fill-emerald-500"/>
                    </div>
                </div>
                <div className="flex flex-col items-center pt-4">
                    <p>{content.name}</p>
                    <p className="text-sm text-gray-400">{content.artist}</p>
                </div>
            </div>
        )
    }

  return (
    <div className="w-full">
        <h1 className="text-2xl font-bold mt-8 md:mt-0 pb-4">{title}</h1>
        <div className="flex flex-row justify-center">
            <div className="flex flex-row gap-x-6 overflow-x-scroll">
                {contentList.map((content) => {
                    return <ContentBox {...content} key={useId()}/>
                })}
            </div>
            <div className="w-28 h-full flex justify-center items-center">
                <ArrowRightCircleIcon className="w-8 h-8"/>
            </div>
        </div>
    </div>
  )
};

interface Props {
    type: 'Genre' | 'Album' | 'Artist';
    title: String;
    contentList: Array<Content>;
}

interface Content {
    image?: string;
    name: String;
    artist?: String;
}

export default Section;
