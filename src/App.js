import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { logins: [] };
  }
  componentDidMount() {
    fetch("http://10.211.55.27:3333/logins")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ logins: json });
      });
  }
  render() {
    return (
      <div>
        <h1>CYPHER</h1>
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Pin</th>
              <th>Site</th>
              <th>Meta</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {this.state.logins.map((l, i) => {
              return (
                <tr key={i}>
                  <td>{l.id}</td>
                  <td>{l.email}</td>
                  <td>{l.username}</td>
                  <td>{l.password}</td>
                  <td>{l.pin}</td>
                  <td>{l.site}</td>
                  <td>{l.meta}</td>
                  <td>{l.created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
