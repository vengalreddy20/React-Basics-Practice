import React from 'react';
import { List } from 'rc-field-form';
import './App.css';
import Hello from './component/class';
import Counter from './component/counter';
import Parent from './component/Parent';
import ListName from './component/List';
import Forms from './component/Forms';
import Ref from './component/Ref';
import ParentForward from './component/ParentForward';
import Promise from './component/Promise'
import RenderProps from './component/RenderProps';
import ComponentA from './component/ComponentA';
import{UserProvider} from './component/Context';
import GetData from './component/GetData';
import PostData from './component/PostData';
import HookCordinator from './component/HookCordinator';
import HookCordinatorRemove from './component/HookCordinatorRemove';
import SetInterval from './component/SetInterval';
import GetPostFromUseeffect from './component/GetPostFromUseeffect';
import UseReducer from './component/UseReducer';
import UseReducerTwo from './component/UseReducerTwo';
import FetchingData from './component/FetchingData';
import FetchingDataUsingUseReducer from './component/FetchingDataUsingUseReducer';
import ContextHook from './component/ContextHook';
import UseMemo from './component/UseMemo';
import CustomHook from './component/CustomHook';
import CustomHookOne from './component/CustomHookOne';
import CustomHookTwo from './component/CustomHookOne';



export  const user=React.createContext()
export const message=React.createContext()

function App() {
 
  return (
    <div className="App">
      <CustomHook />
      <CustomHookOne />
      <CustomHookTwo />
      {/* <UseMemo /> */}
      {/* <user.Provider value={"vengal reddy"}>
        <message.Provider value={'Good Morning!'} >

        <ContextHook />
        </message.Provider>
      </user.Provider> */}

      {/* <FetchingDataUsingUseReducer /> */}
      {/* <FetchingData /> */}
      {/* <UseReducerTwo /> */}
      {/* <UseReducer />       */}
      {/* <GetPostFromUseeffect /> */}
      {/* <SetInterval /> */}
      {/* <HookCordinatorRemove /> */}
      {/* <HookCordinator /> */}
      {/* <PostData /> */}
      {/* <GetData /> */}
      {/* <UserProvider value="vengalreddy">
      <ComponentA  />
      </UserProvider> */}
      {/* <RenderProps name={()=>'vengalreddy'} /> */}
      {/* <Promise />       */}
      {/* <ParentForward /> */}
      {/* <Ref />       */}
      {/* <Forms /> */}
      {/* <ListName /> */}
      {/* <Hello />
      <Counter /> */}
      {/* <Parent /> */}
     
    </div>
  );
}

export default App;
