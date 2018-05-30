import React, { Component } from 'react';
import './App.css';
import InputForm from './components/form';
import DataTable from './components/raw_data_table';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <h1>Job Searching</h1>
          </div>
        </header>
        <div className="container">
          <DataTable />
        </div>
        <div className="container">
          <section className="add-item">
            <InputForm />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
