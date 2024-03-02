import { useEffect } from "react";
import store from "../../store";
import { selectIsLoggedIn, selectUserName } from "../../store/reducers/ui";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layouts";
import Sidebar from "../../components/sidebar";

const Home = () => {
  const state = store.getState()
  const userName = selectUserName(state);
  const isLoggedIn = selectIsLoggedIn(state);
  let navigate = useNavigate();

  useEffect(() => {
    if(!userName || !isLoggedIn) {
      navigate('/', { replace: true});
    } else {
      document.title = 'Home'
    }
  },[userName, isLoggedIn]);

  return (
    <div className="h-screen mx-auto flex bg-[#101012] text-white min-w-[350px]">
      <div className="flex flex-row w-full">
        <div className="hidden lg:block lg:w-2/12">
          <Sidebar/>
        </div>
        <div className="w-full lg:w-10/12 h-screen">
          <Layout/>
        </div>
      </div>
    </div>
  )
};

export default Home;
