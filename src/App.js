import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Pendaftaran from './pages/Pendaftar/user-index'
import UserAdd from "./pages/Pendaftar/user-add";
import UserDokumen from "./pages/Laporan/user-dokumen"
import ListDokumen from "./pages/Laporan/user-listdokumen"
import DosenDokumen from "./pages/Laporan/dosen-listdokumen"
import DosenList from "./pages/Pendaftar/dosen-listdaftar"

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
          <Route path="/user-index" element={<Pendaftaran />}>
            <Pendaftaran/>
          </Route>
          <Route path="/user-add" element={<UserAdd />}>
            <UserAdd/>
          </Route>
          <Route path="/user-dokumen" element={<UserDokumen />}>
            <UserDokumen/>
          </Route>
          <Route path="/user-listdokumen" element={<ListDokumen />}>
            <ListDokumen/>
          </Route>
          <Route path="/dosen-listdokumen" element={<DosenDokumen />}>
            <DosenDokumen/>
          </Route>
          <Route path="/dosen-listdaftar" element={<DosenList />}>
            <DosenList/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
