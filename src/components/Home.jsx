//Dependencies

//Render Home
const Home = () => {
  return (
    <div
      id="Home"
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <div className="container rounded-5 border p-5 flare">
        <h1>Connect, Chat, and Collaborate</h1>
        <p>
          Welcome to our chat application, where you can connect with friends,
          family, and colleagues from anywhere in the world. Chat in real-time,
          share ideas, and collaborate on projects effortlessly. Whether you're
          looking to catch up with loved ones, organize group discussions, or
          enhance teamwork, our chat app provides a secure and user-friendly
          platform for all your communication needs.
        </p>
        <h2>Key Features:</h2>
        <p>
          Real-time messaging: Chat with individuals or groups instantly, and
          see messages appear in real-time.<br/>
          Notifications: Stay informed with notifications for new messages,
          mentions, and replies.<br/>
          Secure and private: Your conversations are encrypted and protected,
          ensuring privacy and confidentiality.<br/>
          User-friendly interface: Enjoy a clean and intuitive interface that
          makes chatting a breeze for users of all levels.          
        </p>
        <div className="d-flex justify-content-center">
          <a href="/signin" className="gradient-button p-2 m-2 h4" style={{textDecoration:"none"}}>
            Sign In
          </a>
          <a href="/signup" className="gradient-button p-2 m-2 h4" style={{textDecoration:"none"}}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

//Export Home
export default Home;
