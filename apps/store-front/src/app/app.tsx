// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React, {useState, useEffect} from 'react';
import NxWelcome from './nx-welcome';
import axios from 'axios';

import { Route, Routes, Link } from 'react-router-dom';
import { PageTitle } from '@nx-repo/ui-header' 
import { ApiResponse, API_URL } from '@nx-repo/api-interface'

export function App() {
  const [apiResonse, setApiResponse] = useState<ApiResponse>({message: "Loading..."})
  useEffect(() => {
    axios.get(API_URL).then(r => r.data).then(setApiResponse)
  }, []);
  return (
    <>
      <NxWelcome title="store-front" />
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <p>
        {apiResonse.message}
      </p>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <PageTitle />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
