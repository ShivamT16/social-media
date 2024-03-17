import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import { PostContext, PostProvider } from "./Contexts/PostContext";
import { BookmarkContext, BookmarkProvider } from "./Contexts/BookmarkContext";
import { UserContext, UserProvider } from "./Contexts/UserContext";
import { AuthContext, AuthProvider } from "./Contexts/AuthContext";
import App from './App';

const root = createRoot(document.getElementById('root'));

export { PostContext };
export { BookmarkContext };
export { UserContext };
export { AuthContext };

root.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <BookmarkProvider>
          <PostProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </PostProvider>
        </BookmarkProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);

