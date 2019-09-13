import React from "react";
import ReactDOM from "react-dom";
// react library for routing
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'

import Auth from './auth'

// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
// plugins styles downloaded
import "assets/vendor/fullcalendar/dist/fullcalendar.min.css";
import "assets/vendor/sweetalert2/dist/sweetalert2.min.css";
import "assets/vendor/select2/dist/css/select2.min.css";
import "assets/vendor/quill/dist/quill.core.css";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// core styles
import "assets/scss/argon-dashboard-pro-react.scss?v1.0.0";

import AdminLayout from "layouts/Admin.jsx";
// import AuthLayout from "layouts/Auth.jsx";
import IndexView from "views/Index.jsx";
import Callback from './components/Callback'

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('access_token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ``
    }
  }
})

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
})


const auth = new Auth((result) => console.log('auth result', result), client)

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <React.Fragment>
        {auth.isAuthenticated()
          ? <button onClick={() => auth.logout()} >Log out</button>
          : <button className ="c-login-button" onClick={() => auth.login()} >Log in</button>
        }
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          {/* <Route path="/auth" render={props => <AuthLayout {...props} />} /> */}
          <Route path="/callback" render={(props) => {
            handleAuthentication(props)
            return <Callback {...props} />
          }} />
          <Route path="/" render={props => <IndexView {...props} />} />
          <Redirect from="*" to="/" />
        </Switch>
      </React.Fragment>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
