import { useEffect, useState } from "react";
import { selectIsLoggedIn, selectUserName, setIsLoggedIn, setPage, setTab, setUserName } from "../../store/reducers/ui";
import store, { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const dispatch:AppDispatch = store.dispatch;
  const [name, setName] = useState('');
  
  const state = store.getState()
  const userName = selectUserName(state);
  const isLoggedIn = selectIsLoggedIn(state);
  let navigate = useNavigate();

  useEffect(() => {
    if(userName?.length && isLoggedIn) {
      navigate('/home', { replace: true});
    } else {
      document.title= 'Welcome';
    }
  },[userName, isLoggedIn]);

  const handleStart = () => {
    if(name === '' || name.length < 3){
      alert('Please enter a valid username!');
    } else {
      dispatch(setUserName(name));
      dispatch(setPage('home'));
      dispatch(setTab('Explore'));
      dispatch(setIsLoggedIn(true))
      navigate('home');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-900">
        <div className="flex-col">
            <h1 className="text-white text-3xl mb-8 text-center">Welcome to Songify!</h1>
            <h3 className="text-white text-xl mb-4">Please input your name below to proceed</h3>
            <div className="flex-row">
                <input 
                  type="text"
                  name="username"
                  id="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 w-2/3 border-emerald-600 border-4 rounded-l-md px-3 focus:outline-none text-emerald-950"
                  placeholder="Name"
                />
                <button onClick={() => handleStart()} className="h-12 w-1/3 bg-emerald-600 text-white cursor-pointer rounded-r-md hover:text-lg">Start</button>
            </div>
        </div>
    </div>
  )
};

export default Welcome;
