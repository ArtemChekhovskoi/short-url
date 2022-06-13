import React from "react"
import {useRouter} from "./router"
import { useAuth } from "../src/hooks/auth.hook"
import {AuthContext} from "../src/Context/auth.context"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import {Loader} from "./components/Loader"


function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAutorized = !!token
  const router = useRouter(isAutorized)


if (!ready) {
  return <Loader />
}
  
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAutorized
    }}>
      <BrowserRouter>
      {isAutorized && <Navbar />}
        <div className="App">
          {router}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
