import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";

function App() {
  // const route = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootPage />,
  //     errorElement: <NotFoundPage />,
  //   },
  //   {
  //     path: "/",
  //     element: (
  //       <PrivateRoute>
  //         <Layout />
  //       </PrivateRoute>
  //     ),
  //     errorElement: <NotFoundPage />,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: <Dashboard />,
  //       },
  //     ]}
  //     ]);
    
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Dashboard/>
          </Route>
          <Route path="/profil" element={<Profil />}>
            <Profil/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
