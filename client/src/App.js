import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";


const NewPage = () => <h1 >Welcome! You have navigated to a new page</h1>;
const NotFound = () => <h1>404 Page Not Found: You have navigated to a page that doesn't exist</h1>;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      response: "",
      post: "",
      responseToPost: "",
    };
    this.onPostChange = this.onPostChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onPostChange(event) {
    this.setState({ post: event.target.value });
  }
  /*
This is a mock get request it will return The info in the post request and the express route.
It is a demonstration of an AJAX using the axios library
*/
  async componentDidMount() {
    const response = await axios.get("/api/");
    const body = await response;
    if (response.status !== 200) throw Error(body.message);
    this.setState({ response: response.express });

    return body;
  }

  /* 
  This is a mock post request.
  It is a demonstration of an AJAX call using the fetch API
  */
  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    console.log(body);
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.response}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="boilerplate_example">Message</label>
              <input
                type="post"
                value={this.state.post}
                onChange={this.onPostChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {this.state.responseToPost}
        </header>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newPage">New Page</Link>
            </li>
          </ul>
        </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newPage" component={NewPage} />
            <Route component={NotFound} />
          </Switch>
      </div>
    </Router>
    )
  }
}
