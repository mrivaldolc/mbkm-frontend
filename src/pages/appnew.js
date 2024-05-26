import { AuthProvider, useAuth } from './AuthContext';
import { useState, useEffect } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Pendaftaran from './pages/Mahasiswa/Pendaftaran/user-index';
import UserAdd from "./pages/Mahasiswa/Pendaftaran/user-add";
import UserEdit from "./pages/Mahasiswa/Pendaftaran/user-edit";
import DosenEdit from "./pages/Kaprodi/Pendaftar/dosen-edit";
import UserDokumen from "./pages/Mahasiswa/Laporan/user-dokumen";
import ListDokumen from "./pages/Mahasiswa/Laporan/user-listdokumen";
import DosenDokumen from "./pages/Kaprodi/Laporan/dosen-listdokumen";
import EditDokumen from "./pages/Kaprodi/Laporan/dosen-editdokumen";
import DosenList from "./pages/Kaprodi/Pendaftar/dosen-listdaftar";
import UserEditDokumen from "./pages/Mahasiswa/Laporan/user-editdokumen";
import SettingDokumen from "./pages/Kaprodi/Laporan/dosen-settingdokumen";
import DosenaddSetting from "./pages/Kaprodi/Laporan/dosen-addsettingdokumen";
import JadwalPersentasi from "./pages/Mahasiswa/Jadwal/user-jadwalpersentasi";
import SettingPersentasi from "./pages/Kaprodi/Jadwal/dosen-settingpersentasi";
import AddPersentasi from "./pages/Kaprodi/Jadwal/dosen-addpersentasi";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/404"; 

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

//   useEffect(() =>{
//   const token = localStorage.getItem('login');
//   if (token) {
//       setIsAuthenticated(true);
//   }
// }, [setIsAuthenticated]);

      useEffect(() => {
        const token = localStorage.getItem('login');
        if (token) {
          setIsAuthenticated(true);
        }

        const timeout = setTimeout(() => {
          localStorage.removeItem('login');
          setIsAuthenticated(false);
        }, 300000); // Waktu timeout dalam milidetik (120000 untuk 2 menit)

        return () => clearTimeout(timeout); // Membersihkan timeout saat komponen dibongkar
      }, [setIsAuthenticated]);

  return (
      <Route
          {...rest}
          render={props =>
              isAuthenticated ? (
                  <Component {...props} />
              ) : (
                  <Redirect to="/" />
              )
          }
      />
  );
};

const App = () => {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="*" component={NotFound} /> */}
          <Route>
            <Layout>
              <Switch>
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/profil" component={Profil} />
                <PrivateRoute path="/user-index" component={Pendaftaran} />
                <PrivateRoute path="/user-add" component={UserAdd} />
                <PrivateRoute path="/user-edit" component={UserEdit} />
                <PrivateRoute path="/dosen-edit" component={DosenEdit} />
                <PrivateRoute path="/user-dokumen" component={UserDokumen} />
                <PrivateRoute path="/user-editdokumen" component={UserEditDokumen} />
                <PrivateRoute path="/user-listdokumen" component={ListDokumen} />
                <PrivateRoute path="/dosen-listdokumen" component={DosenDokumen} />
                <PrivateRoute path="/dosen-editdokumen" component={EditDokumen} />
                <PrivateRoute path="/dosen-listdaftar" component={DosenList} />
                <PrivateRoute path="/dosen-settingdokumen" component={SettingDokumen} />
                <PrivateRoute path="/dosen-addsettingdokumen" component={DosenaddSetting} />
                <PrivateRoute path="/user-jadwalpersentasi" component={JadwalPersentasi} />
                <PrivateRoute path="/dosen-settingpersentasi" component={SettingPersentasi} />
                <PrivateRoute path="/dosen-addpersentasi" component={AddPersentasi} />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
