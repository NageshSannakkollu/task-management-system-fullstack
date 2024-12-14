import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import AddTaskPage from "./components/AddTaskPage"
import UpdateTask from "./components/UpdateTask"
import Signup from "./components/Signup"
import LoginPage from "./components/LoginPage"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/add-task" element={<AddTaskPage/>} />
      <Route exact path="/update-task/:id" element={<UpdateTask/>}/>
    </Routes>
  </BrowserRouter>
)

export default App 