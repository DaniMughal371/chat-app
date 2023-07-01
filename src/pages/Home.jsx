//Dependencies
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

//Render Home
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
};

//Export Home
export default Home;
