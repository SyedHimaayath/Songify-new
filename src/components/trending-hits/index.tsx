import { ChevronDownIcon, ChevronUpIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const trendingSongsData:Array<Song> = [
    { id: 1, trendingAt: 1, name: 'Don\'t Blame Me', artist: 'Taylor Swift', img: 'taylor.png'},
    { id: 2, trendingAt: 2, name: 'Song 2', artist: 'Artist 2', img: 'man.png'},
    { id: 3, trendingAt: 3, name: 'Song 3', artist: 'Artist 3', img: 'taylor.png'},
    { id: 4, trendingAt: 4, name: 'Song 4', artist: 'Artist 4', img: 'man.png'},
    { id: 5, trendingAt: 5, name: 'Song 5', artist: 'Artist 5', img: 'taylor.png'},
]

const TrendingHits = () => {

    const [visibleSong, setVisibleSong] = useState({id : -1} as Song);
    // const [selectedSong, setSelectedSong] = useState(false);

    let viewInterval:any;
    useEffect(() => {

        if(document.cookie.includes('trendingsong')){
            setVisibleSong(trendingSongsData[0]);
            return;
        }
        
        setVisibleSong(trendingSongsData[0]);
        setNextTrendingSong();
        return () => {
            clearInterval(viewInterval)
        }
    }, []);

    const setNextTrendingSong = () => {
        let idx = 0;
        let iterations = 0;
        viewInterval = setInterval(() => {
            idx++;
            iterations++;
            if(idx > 4) {
                idx = 0;
            }
            setVisibleSong(trendingSongsData[idx]);
            if(iterations === 5) {
                clearInterval(viewInterval);
                document.cookie = `trendingsong=1`
            }
        }, 5000);
    }

    const selectedTrendingSong = (id:any) => {
        // setSelectedSong(true)
        clearInterval(viewInterval);
        setVisibleSong(trendingSongsData[id])
    }

    const handleClick = (control:'next'|'prev' ) => {
        const currentSong = visibleSong;
        switch(control){
            case 'next':
                if(currentSong.id === trendingSongsData.length) {
                    return;
                }
                setVisibleSong(trendingSongsData[currentSong.id]);
                break;
            case 'prev':
                if(currentSong.id - 2 === -1) {
                    return;
                }
                const songId = currentSong.id-2;
                const song = trendingSongsData[songId]
                setVisibleSong(song)
        }
    }

    const TredningSong = (song:Song) => {
        return (
            <div className="h-60 xl:h-72 2xl:h-96 relative" key={song.id}>
                <div className="xl:py-2 2xl:py-5">
                    <p className="">Trending Hits #{song.trendingAt}</p>
                    <div className="p-8 xl:pt-2 2xl:p-8">
                    <p className="lg:text-3xl xl:text-5xl 2xl:text-8xl font-bold my-2 xl:my-5">{song.name}</p>
                    <p className="xl:text-xl">{song.artist}</p>
                    </div>
                    <div className="pl-8 xl:pl-5 2xl:pl-8 flex flex-row gap-4 xl:gap-6 2xl:gap-8">
                    <button className="px-6 xl:px-8 xl:py-4 bg-emerald-500 rounded-full hover:bg-emerald-600">Listen Now</button>
                    <button className="xl:ring-1 ring-white lg:ring-0 xl:p-4 rounded-full">
                        <HeartIcon className="h-6 w-6 fill-emerald-500" aria-hidden="true"/>
                    </button>
                    </div>
                </div>
                <img className="absolute right-0 top-0 w-2/4 h-full object-contain object-right" src={`/assets/${song.img}`} alt="" />
            </div>
        )
    }

    const Ring = (song:any):JSX.Element => {
        const isActive = song.id === visibleSong.id ? 'scale-125 bg-white' : 'scale-100'
        return (
            <div 
                onClick={() => {selectedTrendingSong(song.id -1 )}}
                className={`ring-1 ring-white h-1 w-1 rounded-full hover:bg-white cursor-pointer hover:scale-150 ${isActive}`}
                key={song.id+Math.random()}
            />
        )
    }

  return (
    <div className="flex flex-row h-60 xl:h-72 2xl:h-96 relative w-full">
        <div className="w-full">
            {visibleSong && <TredningSong {...visibleSong}/>}
        </div>
        <div className="w-5 justify-end h-full items-center">
            <div className="flex flex-col justify-center items-center align-middle h-2/3 gap-5">
                {
                    trendingSongsData.map((song) => {
                        return (
                            <Ring id={song.id} key={song.id.toString()+song.artist}/>
                        )
                    })
                }
            </div>
            <div className="flex flex-col h-1/3 gap-2">
                <ChevronUpIcon className="w-5 h-5 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleClick('prev')}/>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => handleClick('next')}/>
            </div>
        </div>
    </div>
  )
};

interface Song {
    id: number;
    trendingAt: number;
    name: String;
    artist: String;
    img: String;
}

export default TrendingHits;
