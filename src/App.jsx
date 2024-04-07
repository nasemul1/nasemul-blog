import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Navbar from "./Navbar"
import Home from "./Home"
import Create from "./Create"
import Blogdetails from "./Blogdetails"

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/nasemul-blog/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <Blogdetails />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App