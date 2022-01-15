import "./App.css";
import Feed from "./components/Feed/Feed";
import UserForm from "./components/Form/UserForm";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar text="Home" />
      <section>
        <div className="box">
          <Feed />
          {/* <UserForm /> */}
        </div>
      </section>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
