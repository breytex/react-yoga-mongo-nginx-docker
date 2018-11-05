import React, { Component } from 'react'
import './App.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Query
            query={gql`
              {
                posts {
                  title
                  desc
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error :(</p>

              return data.posts.map(({ title, desc }) => (
                <div key={title}>
                  <b>{title}</b>
                  <p>{desc}</p>
                </div>
              ))
            }}
          </Query>
        </header>
      </div>
    )
  }
}

export default App
