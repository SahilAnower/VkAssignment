import ProfileDesc from './components/ProfileDesc';
import ProfilePosts from './components/ProfilePosts';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="main">
        <ProfileDesc />
        <ProfilePosts />
      </div>
    </div>
  );
}

export default App;
