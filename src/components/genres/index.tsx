import { Link } from "react-router-dom";

// const colors = ['a89784', 'a89784', '0a4244', 'a7759b', '5445a0', 'ffffff'];

const generData = [
  { id:0, name: 'Hip Hop'},
  { id:1, name: 'Pop'},
  { id:2, name: 'Rock' },
  { id:3, name : 'Electric EDM' },
  { id:4, name: 'Romance' },
  { id:5, name: 'Classical'},
  { id:6, name: 'Alternative Rock'},
  { id:7, name: 'Hip'},
  { id:8, name: 'Pop'},
  { id:9, name: 'Rock' },
  { id:10, name : 'Electric EDM' },
];

const GenreBox = (genre:Genre) => {
  return (
    <div className={`ring-2 cursor-pointer hover:scale-105 rounded-md`}>
      <p className="px-8 py-4 font-bold">{genre.name}</p>
    </div>
  )
}

const Genres = () => {

  return (
    <div className="h-[300px] w-full bg-[#212026] text-white rounded-md py-4 px-6 overflow-hidden">
      <div className="flex justify-between items-baseline mb-4">
        <p className="">Genres</p>
        <Link className="justify-end text-sm text-gray-500 hover:underline" to="/genres">See all</Link>
      </div>
      <div className="overflow-y-scroll p-3 h-full pb-12">
        <div className="flex flex-wrap gap-4">
          {generData && generData.map((genre, idx) => {
            return (
              <GenreBox {...genre} key={genre.id+idx.toString()}/>
            )
          })}
        </div>
      </div>
    </div>
  )
};

interface Genre {
  id: number;
  name: String;
}

export default Genres;
