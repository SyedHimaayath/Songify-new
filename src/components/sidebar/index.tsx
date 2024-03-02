import { ArrowUturnLeftIcon, FolderIcon, GlobeAltIcon, HashtagIcon, ListBulletIcon, MicrophoneIcon, PlusCircleIcon, RadioIcon, RectangleStackIcon, StarIcon } from "@heroicons/react/24/outline";
import MenuSet, { Props as MenuSetProps } from "../menu-set";
import { useId, useState } from "react";
import { setTab } from "../../store/reducers/ui";
import store from "../../store";

// const config:MenuSetProps = {
//   menus: [
//     {
//       title: 'menu',
//       list: [
//         {
//           icon: <GlobeAltIcon className="w-5 h-5"/>,
//           text: 'Explore',
//         },
//         {
//           icon: <HashtagIcon className="w-5 h-5"/>,
//           text: 'Genres',
//         },
//         {
//           icon: <RectangleStackIcon className="w-5 h-5"/>,
//           text: 'Albums',
//         },
//         {
//           icon: <MicrophoneIcon className="w-5 h-5"/>,
//           text: 'Artists',
//         },
//         {
//           icon: <RadioIcon className="w-5 h-5"/>,
//           text: 'Radio',
//         }
//       ]
//     },
//     {
//       title: 'library',
//       list: [
//         {
//           icon: <ArrowUturnLeftIcon className="w-5 h-5"/>,
//           text: 'Recent',
//         },
//         {
//           icon: <RectangleStackIcon className="w-5 h-5"/>,
//           text: 'Albums',
//         },
//         {
//           icon: <StarIcon className="w-5 h-5"/>,
//           text: 'Favourites',
//         },
//         {
//           icon: <FolderIcon className="w-5 h-5"/>,
//           text: 'Local',
//         },
//       ]
//     },
//     {
//       title: 'playlist',
//       list: [
//         {
//           icon: <PlusCircleIcon className="w-5 h-5"/>,
//           text: 'Create New',
//         },
//         {
//           icon: <ListBulletIcon className="w-5 h-5"/>,
//           text: 'Hindi',
//         },
//         {
//           icon: <ListBulletIcon className="w-5 h-5"/>,
//           text: 'Best of 2024',
//         },
//         {
//           icon: <ListBulletIcon className="w-5 h-5"/>,
//           text: 'My Jam',
//         },
//       ]
//     }
//   ]
// }

const Sidebar = () => {

  const dispatch = store.dispatch;

  let menuItems:MenuSetProps = {
    title: 'menu',
    selected: 'Explore',
    list: [
      {
        id: 1,
        icon: <GlobeAltIcon className="w-5 h-5"/>,
        text: 'Explore',
      },
      {
        id: 2,
        icon: <HashtagIcon className="w-5 h-5"/>,
        text: 'Genres',
      },
      {
        id: 3,
        icon: <RectangleStackIcon className="w-5 h-5"/>,
        text: 'Albums',
      },
      {
        id: 4,
        icon: <MicrophoneIcon className="w-5 h-5"/>,
        text: 'Artists',
      },
      {
        id: 5,
        icon: <RadioIcon className="w-5 h-5"/>,
        text: 'Radio',
      }
    ]
  }

  let libraryItems:MenuSetProps = {
    title: 'library',
    selected: '',
    list: [
      {
        id: 6,
        icon: <ArrowUturnLeftIcon className="w-5 h-5"/>,
        text: 'Recent',
      },
      {
        id: 7,
        icon: <RectangleStackIcon className="w-5 h-5"/>,
        text: 'Albums',
      },
      {
        id: 8,
        icon: <StarIcon className="w-5 h-5"/>,
        text: 'Favourites',
      },
      {
        id: 9,
        icon: <FolderIcon className="w-5 h-5"/>,
        text: 'Local',
      },
    ]
  }

  let playlistItems:MenuSetProps = {
    title: 'playlist',
    selected: '',
    list: [
      {
        id: 10,
        icon: <PlusCircleIcon className="w-5 h-5"/>,
        text: 'Create New',
      },
      {
        id: 11,
        icon: <ListBulletIcon className="w-5 h-5"/>,
        text: 'Hindi',
      },
      {
        id: 12,
        icon: <ListBulletIcon className="w-5 h-5"/>,
        text: 'Best of 2024',
      },
      {
        id: 13,
        icon: <ListBulletIcon className="w-5 h-5"/>,
        text: 'My Jam',
      },
    ]
  }

  const [tab, setClickedTab] = useState('Explore');

  const handleClick = (e:any) => {
    const selected = e.target.id;
    setClickedTab(selected)
    dispatch(setTab(selected))
  }

  return (
    <div className="h-screen w-full bg-[#19181d] text-white py-4 pl-4">
      <div className="text-2xl font-bold text-emerald-600 ml-10">
        Songify
      </div>
      <div className="flex flex-col my-8 ml-10">
        {
          [menuItems, libraryItems, playlistItems].map((menu) => {
            return <MenuSet {...menu} selected={tab}  key={useId()} onclick={(e) => handleClick(e)}/>
          })
        }
      </div>
    </div>
  )
};

export default Sidebar;
