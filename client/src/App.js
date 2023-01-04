/* eslint-disable comma-dangle */
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import { CurrentUserContextProvider } from './context';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Profile from './pages/ProfileSetup';
import Cards from './pages/Cards';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <Router>
          <CurrentUserContextProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/cards" element={<Cards />} />

            </Routes>
          </CurrentUserContextProvider>
        </Router>
      </CookiesProvider>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
