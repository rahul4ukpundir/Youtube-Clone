
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import RecommandationVideos from './RecommandationVideos';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import SearchPage from './Search/SearchPage';
import TrendingPage from './Trending/TrendingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/search/:searchTerm' element={
            <div className='app-body'>
              <SideBar />
              <SearchPage />
            </div>
          }>
          </Route>
          <Route path='/home' element={
            <div className='app-body'>
              <SideBar />
              <RecommandationVideos />
            </div>

          }>
          </Route>
          <Route path="/trending"

            element={
              <div className='app-body'>
                <SideBar />
                <TrendingPage />
              </div>
            }
          />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
