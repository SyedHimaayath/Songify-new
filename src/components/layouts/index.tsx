import TopArtists from "../top-artists";
import Genres from "../genres";
import Player from "../player";
// import Body from "../body";
import TopCharts from "../top-charts";
import { Tab } from "../../store/model/ui";
import Section from "../section";

const Layout = (props:Props) => {
    const { isBottomPlayerVisible } = props;

    const renderExploreLayout = () => {
        return (
            <div className={`flex flex-row gap-5 ${isBottomPlayerVisible ? 'pb-32' : 'pb-8'}`}>
                <div className="flex flex-col w-full lg:w-3/5">
                    <TopArtists/>
                    <div className="flex flex-row gap-5">
                        <div className="hidden 2xl:block 2xl:w-2/5"><Genres/></div>
                        <div className="w-full 2xl:w-3/5"><TopCharts/></div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-2/5">
                    <Player isBottomPlayer={isBottomPlayerVisible} bottomPlayerClb={props.clb}/>
                </div>
            </div>
        )
    };

    const renderGenreLayout = () => {
        const dummyData = [
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'John Cena'}
        ]
        return (
            <div className={`flex flex-col gap-5 ${isBottomPlayerVisible ? 'pb-32' : 'pb-8'}`}>
                <Section type="Genre" title={"Hip Hop"} contentList={dummyData} />
                <Section type="Genre" title={"Romantic"} contentList={dummyData} />
                <Section type="Genre" title={"Electric"} contentList={dummyData} />
                <Section type="Genre" title={"Pop"} contentList={dummyData} />
            </div>
        )
    }

    const renderAlbumsLayout = () => {
        const dummyData = [
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'Sean Paul'},
            {image: '/Songify-new/assets/one.jpeg', name: 'Dance With Me', artist : 'John Cena'}
        ]
        return (
            <div className={`flex flex-col gap-5 ${isBottomPlayerVisible ? 'pb-32' : 'pb-8'}`}>
                <Section type="Album" title={"Hindi"} contentList={dummyData} />
                <Section type="Album" title={"All Time Best"} contentList={dummyData} />
                <Section type="Album" title={"The 2000s"} contentList={dummyData} />
            </div>
        )
    }

    let renderLayout = <></>;

    switch (props.tab) {
        case 'menu1':
        case 'Explore':
            renderLayout = renderExploreLayout();
            break;
        case 'menu2':
            renderLayout = renderGenreLayout();
            break;
        case 'menu3':
            renderLayout = renderAlbumsLayout();
            break;
        case 'menu4':
            break;
        case 'menu5':
            break;
        default:
            renderLayout = renderExploreLayout();
            break;
    }

  return renderLayout;
};

interface Props {
    tab: Tab;
    isBottomPlayerVisible: boolean;
    clb: () => void;
}

export default Layout;
