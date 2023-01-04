// import React, { useRef, useEffect, useState } from 'react';
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

// // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
// import mapboxgl from '!mapbox-gl';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Profile from './pages/ProfileSetup';

import './App.css';

// // eslint-disable-next-line operator-linebreak
// mapboxgl.accessToken =
// 'pk.eyJ1IjoibS1hcm1zdHJvbmciLCJhIjoiY2xjZmI3cTdrMG1zazNvbjY5MXRuMTRndCJ9.J-vt4XTs6_aJjJIhrju_OQ';

// const mapContainer = useRef(null);
// const map = useRef(null);
// const [lng, setLng] = useState(-70.9);
// const [lat, setLat] = useState(42.35);
// const [zoom, setZoom] = useState(9);

// useEffect(() => {
//   if (map.current) return; // initialize map only once
//   map.current = new mapboxgl.Map({
//     container: mapContainer.current,
//     style: 'mapbox://styles/mapbox/streets-v12',
//     center: [lng, lat],
//     // eslint-disable-next-line object-shorthand
//     zoom: zoom,
//   });
// });

// useEffect(() => {
//   if (!map.current) return; // wait for map to initialize
//   map.current.on('move', () => {
//     setLng(map.current.getCenter().lng.toFixed(4));
//     setLat(map.current.getCenter().lat.toFixed(4));
//     setZoom(map.current.getZoom().toFixed(2));
//   });
// });

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
            </Routes>
          </CurrentUserContextProvider>
        </Router>
      </CookiesProvider>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
