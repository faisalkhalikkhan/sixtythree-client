import "./App.css";
import Feed from "./components/Feed/Feed";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <section>
        <h1>Main Feed</h1>
        <br />
        <div className="box">
          <Feed />
        </div>
      </section>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
