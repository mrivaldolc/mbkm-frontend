
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
import SettingDokumen from "./pages/Kaprodi/Manager/Laporan/dosen-settingdokumen";
import DosenaddSetting from "./pages/Kaprodi/Manager/Laporan/dosen-addsettingdokumen";
import JadwalPersentasi from "./pages/Mahasiswa/Presentasi/user-jadwalpersentasi";
import SettingPersentasi from "./pages/Kaprodi/Manager/Presentasi/dosen-settingpersentasi";
import AddPersentasi from "./pages/Kaprodi/Manager/Presentasi/dosen-addpersentasi";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/404"; 
import SettingPendaftaran from "./pages/Kaprodi/Manager/Pendaftar/dosen-settingpendaftaran";
import DosenaddPendaftaran from "./pages/Kaprodi/Manager/Pendaftar/dosen-addpendaftaran";
import DoseneditPendaftaran from "./pages/Kaprodi/Manager/Pendaftar/dosen-editpendaftaran";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="*" component={NotFound} /> */}
          <Route>
            <Layout>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profil" component={Profil} />
                <Route path="/user-index" component={Pendaftaran} />
                <Route path="/user-add" component={UserAdd} />
                <Route path="/user-edit" component={UserEdit} />
                <Route path="/dosen-edit" component={DosenEdit} />
                <Route path="/user-dokumen" component={UserDokumen} />
                <Route path="/user-editdokumen" component={UserEditDokumen} />
                <Route path="/user-listdokumen" component={ListDokumen} />
                <Route path="/dosen-listdokumen" component={DosenDokumen} />
                <Route path="/dosen-editdokumen" component={EditDokumen} />
                <Route path="/dosen-listdaftar" component={DosenList} />
                <Route path="/dosen-settingdokumen" component={SettingDokumen} />
                <Route path="/dosen-addsettingdokumen" component={DosenaddSetting} />
                <Route path="/user-jadwalpersentasi" component={JadwalPersentasi} />
                <Route path="/dosen-settingpersentasi" component={SettingPersentasi} />
                <Route path="/dosen-addpersentasi" component={AddPersentasi} />
                <Route path="/dosen-settingpendaftaran" component={SettingPendaftaran} />
                <Route path="/dosen-addpendaftaran" component={DosenaddPendaftaran} /> 
                <Route path="/dosen-editpendaftaran" component={DoseneditPendaftaran} />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;