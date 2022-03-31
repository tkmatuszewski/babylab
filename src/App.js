import './settings/main.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as routes from './constants/routes';
import Main from './layout/Main/Main';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { AuthProvider } from './contexts/AuthContext';
// import PrivateRoute from './components/PrivateRoute';
import Projects from './components/Projects/Projects';
import Add from './components/Add/Add';
import NewProject from './components/NewProject/NewProject';
import ChildIncludeToProject from './components/ChildIncludeToProject/ChildIncludeToProject';
import ChildDetailed from './components/ChildDetailed/ChildDetailed';
import Wrapper from './layout/Wrapper/Wrapper';
import LoadData from './components/LoadData/LoadData';

const noMatch =()=> {
  return (
    <h1>No match</h1>
  )
}

const App =()=> {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Wrapper>
          <Routes>
            <Route path={routes.signUp} element={<SignUp />} />
            <Route exact path={routes.signIn} element={<SignIn />} />
            <Route path={routes.home} element={<LoadData />} />
            {/* <Route path={`/:userId`} element={<ChildDetailed/>}/> */}
            {/* </Route> */}
            <Route path={"detailed"} element={<ChildDetailed />} />
            <Route path={routes.add} element={<Add />} />
            <Route path={"addtoproject"} element={<ChildIncludeToProject />} />
            <Route path={routes.projects} element={<Projects />} />
            <Route path={routes.newProject} element={<NewProject />} />
            <Route path={"*"} element={<noMatch/>}/>
          </Routes>
        </Wrapper>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
