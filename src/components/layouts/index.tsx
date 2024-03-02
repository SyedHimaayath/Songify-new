import TopArtists from "../top-artists";
import Genres from "../genres";
import Player from "../player";
import Body from "../body";
import TopCharts from "../top-charts";

const Layout = () => {
  return (
    <div className="w-full h-screen">
        <Body>
            <div className="flex flex-row gap-5 pb-8">
                <div className="flex flex-col w-full lg:w-3/5">
                    <TopArtists/>
                    <div className="flex flex-row gap-5">
                        <div className="hidden 2xl:block 2xl:w-2/5"><Genres/></div>
                        <div className="w-full 2xl:w-3/5"><TopCharts/></div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-2/5">
                    <Player/>
                </div>
            </div>
        </Body>
    </div>
  )
};

export default Layout;
