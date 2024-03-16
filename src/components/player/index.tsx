import { ArrowsPointingOutIcon, MusicalNoteIcon, QueueListIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";
import Controls from "./helper";
import { Album } from "../top-charts";
import { useEffect, useRef, useState } from "react";
export const BottomPlayer = () => {
  
  return (
    <div className="w-screen bg-black border-t-2 border-white h-28 overflow-hidden">
      <div className="flex flex-row">
        <div className="flex flex-row justify-start">
          <img src="/assets/artists/four.jpeg" className="w-20 h-20 object-cover m-4 rounded-sm"/>
          <div className="flex flex-col my-4 mx-2">
            <p className="text-lg text-white mb-1">Don't Blame Me</p>
            <p className="text-sm text-gray-400">Taylor Swift</p>
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-center items-center h-16">
          <Controls isBottomPlayer={true}/>
        </div>
        <div className="flex flex-row justify-end items-center m-4 gap-x-3">
          <QueueListIcon className="w-6 h-6"/>
          <div className="flex flex-row items-center">
          <SpeakerWaveIcon className="w-6 h-6"/>
          {/* <SpeakerXMarkIcon className="hidden w-6 h-6"/> */}
          <div className="top-0 w-full hover:scale-y-150 cursor-pointer ml-2">
                <div className="h-1 w-[100px] bg-white"/>
          </div>
          <ArrowsPointingOutIcon className="w-6 h-6"/>
          </div>
        </div>
      </div>
    </div>
  )
}

const albumData:Array<Album> = [
  { id:0, name: 'Havannah', artist: 'Camilia Cabello', img: 'one.jpeg', duration: '03:42'},
  { id:1, name: 'Don\'t Blame Me', artist: 'Taylor Swift', img: 'four.jpeg', duration: '02:24'},
  { id:2, name: 'Havannah', artist: 'Camilia Cabello', img: 'three.jpeg', duration: '01:45'},
  { id:3, name: 'Havannah', artist: 'Camilia Cabello', img: 'two.jpeg', duration: '04:00'},
  { id:4, name: 'Havannah', artist: 'Camilia Cabello', img: 'four.jpeg', duration: '03:42'},
  { id:5, name: 'Havannah', artist: 'Camilia Cabello', img: 'three.jpeg', duration: '03:42'},
  { id:6, name: 'Havannah', artist: 'Camilia Cabello', img: 'one.jpeg', duration: '02:42'},
  { id:7, name: 'Havannah', artist: 'Camilia Cabello', img: 'two.jpeg', duration: '01:42'},
]

const Player = (props:Props) => {
  const musicRef = useRef<HTMLElement>(null);
  const [showQueue, setShowQueue] = useState(true);
  const handleClick = () => {
    if (musicRef && musicRef.current) {
      setShowQueue(prev=>!prev);
      props.bottomPlayerClb();
    }
  };

  useEffect(() => {
    if(props.isBottomPlayer) {
      if (musicRef && musicRef.current) {
        setShowQueue(false);
      }
    }
  },[]);

  return (
    <div className="h-full w-full bg-[#212026] rounded-md relative overflow-hidden">
      <div className="flex justify-between items-baseline mb-4 pt-4 px-6">
        <p className="">{showQueue ? 'Player' : 'Songs Queue'}</p>
        <div onClick={handleClick}>
          {
          showQueue ? 
            <QueueListIcon className="w-6 h-6 cursor-pointer" /> :
            <MusicalNoteIcon className="w-6 h-6 cursor-pointer"/>
          }
        </div>
      </div>
      <div className={`flip-card h-full w-full ${showQueue ? '' : 'active'}`} ref={musicRef as React.RefObject<HTMLDivElement>}>

        <div className="flip-card-inner h-full">
          
          <div className="flip-card-front h-full w-full">
           
            <div className="2xl:hidden flex flex-col justify-center items-center w-full">
              <img src="/assets/artists/four.jpeg" className="w-44 h-44 object-cover m-4 rounded-md"/>
              <div className="flex flex-col justify-center items-center gap-y-2">
                <p className="text-xl text-white">Don't Blame Me</p>
                <p className="text-md text-gray-400">Taylor Swift</p>
              </div>
              <div className="p-6 flex flex-row justify-between items-center text-gray-200 text-sm w-full">
                <p>01:15</p>
                <p>03:40</p>
              </div>
            </div>

            <div className="xl:hidden 2xl:flex flex-col px-6 relative w-full mt-10 h-3/4">
              <div className="flex flex-row">
                <img src="/assets/artists/four.jpeg" className=" w-48 h-48 object-cover m-4 rounded-md"/>
                <div className="flex flex-col gap-y-2 m-4 w-full">
                  <p className="text-xl text-white">Don't Blame Me</p>
                  <p className="text-md text-gray-400">Taylor Swift</p>
                </div>
              </div>
              <div className="p-6 flex flex-row justify-between items-center text-gray-200 text-sm w-full">
                <p>01:15</p>
                <p>03:40</p>
              </div>
            </div>

            <div className="absolute bottom-0 w-full bg-emerald-500 h-48 rounded-b-md">
              <Controls/>
            </div>
          </div>
          
          <div className="flip-card-back h-full w-full overflow-y-auto pb-6">
            <div className="px-6 w-full">
            <div className="h-full flex flex-col my-2 gap-y-4 pb-12 overflow-y-scroll">
              {albumData && albumData.map((album) => {
                return (
                  <Album {...album} key={album.id.toString()} />
                )
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
};

interface Props {
  isBottomPlayer: boolean;
  bottomPlayerClb: () => void;
}



export default Player;
