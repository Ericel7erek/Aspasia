import UserProvider from './Provider/UserProvider';
import UserInfo from './Provider/UserInfo';
import Login from './Provider/Login';
import Router from './Router';


const App = () => (
  <UserProvider>
    <Router />
    {/* <Login />
    <UserInfo /> */}
  </UserProvider>
);

export default App;