import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Post from "./components/Post";

function App() {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      content: "This is the content of the first post.",
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the content of the second post.",
    },
    {
      id: 3,
      title: "Post 3",
      content: "This is the content of the third post.",
    },
    {
      id: 4,
      title: "Post 4",
      content: "This is the content of the fourth post.",
    },
    {
      id: 5,
      title: "Post 5",
      content: "This is the content of the fifth post.",
    },
  ];

  const postRender = posts.map((item) => {
    return <Post key={item.id} title={item.title} content={item.content} />;
  });

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="posts-container">{postRender}</div>
        <SideMenu />
      </main>
    </div>
  );
}

export default App;
