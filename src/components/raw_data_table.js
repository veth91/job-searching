import React, { Component } from 'react';
import firebase from '../firebase';

class DataTable extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('searchData');
    itemsRef.on('value', (snapshot) => {
      let searchData = snapshot.val();
      let newState = [];
      for(let data in searchData) {
        newState.push({
          id: data,
          username: searchData[data].username,
          offers: searchData[data].offers,
          numInterviews: searchData[data].numInterviews,
          education: searchData[data].education,
          applications: searchData[data].applications
        })
      }
      this.setState({
        data: newState
      })
    })
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/searchData/${itemId}`);
    itemRef.remove()
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>Education</th>
            <th># of Applications</th>
            <th># of Interviews</th>
            <th># of Offers</th>
          </tr>
        </thead>
        <tbody>
          { this.state.data.map((item) => {
            return (
              <tr key={ item.id }>
                <td>{ item.username }</td>
                <td>{ item.education }</td>
                <td>{ item.applications }</td>
                <td>{ item.numInterviews }</td>
                <td>{ item.offers }</td>
                <td><button key={item} onClick={() => this.removeItem(item.id)}>Remove Item</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default DataTable
