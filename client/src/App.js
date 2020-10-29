import styles from './App.module.scss';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches'
import Logo from './components/Logo'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.App}>
        <div className={styles.BgImage}>
          <Logo/>
          <h1>Launches</h1>
        </div>

        <Launches/>
      </div>
    </ApolloProvider>
  );
}

export default App;
