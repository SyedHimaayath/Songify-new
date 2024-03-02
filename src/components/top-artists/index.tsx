import { Link } from "react-router-dom";

const artistsData = [
  { name: 'John jee', image: 'one'},
  { name: 'don jee', image: 'two'},
  { name: 'bun jee', image: 'three'},
  { name: 'christian bale bhai sahab', image: 'four'},
  { name: 'ookla', image: 'two'},
  { name: 'john jee', image: 'four'},
  { name: 'don jee', image: 'one'},
  { name: 'bun jee', image: 'three'},
  { name: 'john jee', image: 'two'},
  { name: 'don jee', image: 'four'},
  { name: 'bun jee', image: 'one'},
  { name: 'christian bale bhai sahab', image: 'two'},
  { name: 'ookla', image: 'three'},
  { name: 'john jee', image: 'four'},
]

const TopArtists = () => {

  let delaySec = 0;
  const ArtistCard = (artist:Artist) => {
    delaySec += 25;
    return (
      <div className={`flex flex-col justify-center items-center w-24 cursor-pointer hover:scale-110 duration-150 hover:ease-in animate-artists`}>
        <img src={`src/assets/artists/${artist.image}.jpeg`} className="w-24 h-20 rounded-md object-cover"/>
        <div className="text-center mt-2">
          <p className="w-24 uppercase text-ellipsis overflow-hidden whitespace-nowrap text-md">{artist.name}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#212026] text-white mb-5 rounded-md py-4 px-6">
      <div className="flex justify-between items-baseline mb-4">
        <p className="">Top Artists</p>
        <Link className="justify-end text-sm text-gray-500 hover:underline" to="/artists">See all</Link>
      </div>
      <div className="flex flex-row gap-8 overflow-x-auto py-2">
        {artistsData && artistsData.map((artist, idx) => {
          return (
            <ArtistCard {...artist} key={artist.name+idx}/>
          )
        })}
      </div>
    </div>
  )
};

interface Artist {
  name: String;
  image: String;
}

export default TopArtists;
