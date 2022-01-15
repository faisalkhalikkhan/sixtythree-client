import "./App.css";
import Feed from "./components/Feed/Feed";
import UserForm from "./components/Form/UserForm";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Bro, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { get__all_users } from "./components/redux/actions/user.action";

function App() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  const dispu = useDispatch()
  useEffect(() => {
    axios
      .get("https://sixty-three-project-backend.herokuapp.com/user/all")
      .then((jawab) => {
        setData(jawab.data);
        dispu(get__all_users(jawab.data));
        setFlag(true);
      });
  }, [flag]);
  return (
    <Bro>
      <div className="app">
        <NavBar text="Home" />
        <section>
          <div className="box">
            <Routes>
              <Route path="/" element={<Feed data={flag ? data : []} />} />
              <Route path="/form" element={<UserForm />} />
            </Routes>
          </div>
        </section>
      </div>
    </Bro>
  );
}

export default App;
