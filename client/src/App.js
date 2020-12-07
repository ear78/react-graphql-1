import React, { useState } from 'react'
import styles from './App.module.scss';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches'
import Logo from './components/Logo'
import FilterRow from './components/FilterRow'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  const [currentFilter, setCurrentFilter] = useState('All Launches')

  const handleChange = (e) => {
    let val = e.target.value
    setCurrentFilter(val)
  }

  return (
    <ApolloProvider client={client}>
      <div className={styles.App}>
        <div className={styles.BgImage}>
          <Logo/>
          <h1>Launches</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <FilterRow change={handleChange}/>
              <Launches filter={currentFilter}/>
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
