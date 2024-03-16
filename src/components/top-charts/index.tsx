import { EllipsisVerticalIcon, HeartIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

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

export const Album = (album:Album) => {
  return (
    <div className="flex flex-row items-center justify-between gap-2 ">
      <div className="flex flex-row items-center flex-1 gap-4">
        <p className="hidden lg:block text-md text-gray-500 mr-2">{'0' + (album.id + 1).toString()}</p>
        <img src={`/assets/artists/${album.img}`} className="w-12 h-12 object-cover object-center rounded-md cursor-pointer" />
        <div className="flex flex-col justify-center gap-1">
          <p className="text-md">{album.name}</p>
          <p className="text-xs text-gray-400">{album.artist}</p>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center lg:gap-4 2xl:gap-6">
        <p className="hidden lg:block text-md text-gray-500 mr-4">{album.duration}</p>
        <PlayIcon className="w-6 h-6 cursor-pointer hover:scale-110"/>
        <HeartIcon className="w-6 h-6 cursor-pointer hover:scale-110"/>
        <EllipsisVerticalIcon className="w-6 h-6 cursor-pointer"/>
      </div>
    </div>
  )
}

const TopCharts = () => {

  return (
    <div className="h-[300px] w-full bg-[#212026] rounded-md py-4 px-6 text-white overflow-hidden">
      <div className="flex justify-between items-baseline mb-4">
        <p className="">Top Charts</p>
        <Link className="justify-end text-sm text-gray-500 hover:underline" to="/artists">See all</Link>
      </div>
      <div className="h-full flex flex-col my-2 gap-y-4 pb-12 overflow-y-scroll">
        {albumData && albumData.map((album) => {
          return (
            <Album {...album} key={album.id.toString()} />
          )
        })}
      </div>
    </div>
  )
};

export interface Album {
  id: number;
  name: String;
  artist: String;
  img: String;
  duration?: String;
}

export default TopCharts;
