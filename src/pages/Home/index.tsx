import { useEffect, useState } from "react";
import store from "../../store";
import { selectIsLoggedIn, selectUserName, selectIsBottomPlayerVisible, toggleBottomPlayerVisibility } from "../../store/reducers/ui";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layouts";
import Sidebar from "../../components/sidebar";
import { BottomPlayer } from "../../components/player";
import Body from "../../components/body";
import { useSelector } from "react-redux";
import { State } from "../../store/model";
import { Tab } from "../../store/model/ui";

const Home = () => {
  const dispatch = store.dispatch;
  const state = store.getState()
  const userName = selectUserName(state);
  const isLoggedIn = selectIsLoggedIn(state);
  let bottomPlayer = selectIsBottomPlayerVisible(state);
  const tab:Tab = useSelector<State, Tab>(state => state?.ui?.tab) //selectTab(state)
  let navigate = useNavigate();
  
  const [showBottomPlayer, setShowBottomPlayer] = useState(bottomPlayer);

  const clb = () => {
    dispatch(toggleBottomPlayerVisibility());
    setShowBottomPlayer((prev) => !prev);
  }

  useEffect(() => {
    if(!userName || !isLoggedIn) {
      navigate('/', { replace: true});
    } else {
      document.title = 'Home'
    }
  },[userName, isLoggedIn]);


  return (
    <div className="h-screen mx-auto flex bg-[#101012] text-white min-w-[350px] relative">
      <div className="flex flex-row w-full">
        <div className="hidden lg:block lg:w-2/12">
          <Sidebar/>
        </div>
        <div className="w-full lg:w-10/12 h-screen">
          <Body>
            <Layout isBottomPlayerVisible={showBottomPlayer} clb={() => clb()} tab={tab}/>
          </Body>
        </div>
        {/* <div className="w-full lg:w-10/12 h-screen">
          <Layout isBottomPlayerVisible={showBottomPlayer} clb={() => clb()}/>
        </div> */}
      </div>
      {showBottomPlayer &&
        <div className="absolute bottom-0">
          <BottomPlayer/>
        </div>
      }
    </div>
  )
};

export default Home;
