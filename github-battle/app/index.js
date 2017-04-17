
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

class FriendsContainer extends React.Component {
  render() {
    var name = 'Tyler McGinnis';
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
