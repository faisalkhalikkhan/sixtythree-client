import "./App.css";
import Feed from "./components/Feed/Feed";
import UserForm from "./components/Form/UserForm";
import NavBar from "./components/NavBar/NavBar";
import Edit from './components/Edit/Edit'


import { BrowserRouter as Bro, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { get__all_users } from "./components/redux/actions/user.action";

function App() {
  const [flag, setFlag] = useState(false);

  const dispu = useDispatch()
  useEffect(() => {
    axios
      .get("https://sixty-three-project-backend.herokuapp.com/user/all")
      .then((jawab) => {
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
              <Route path="/" element={<Feed />} />
              <Route path="/form" element={<UserForm />} />
              <Route path="/edit" element={<Edit />} />
            </Routes>
          </div>
        </section>
      </div>
    </Bro>
  );
}

export default App;
