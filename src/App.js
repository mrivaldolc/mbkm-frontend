// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Profil from "./pages/Profil";
// import Pendaftaran from './pages/Pendaftar/user-index'
// import UserAdd from "./pages/Pendaftar/user-add";
// import UserDokumen from "./pages/Laporan/user-dokumen"
// import ListDokumen from "./pages/Laporan/user-listdokumen"
// import DosenDokumen from "./pages/Laporan/dosen-listdokumen"
// import DosenList from "./pages/Pendaftar/dosen-listdaftar"
// import Layout from "./components/layout/Layout";

// function App() {
//   // const route = createBrowserRouter([
//   //   {
//   //     path: "/",
//   //     element: <RootPage />,
//   //     errorElement: <NotFoundPage />,
//   //   },
//   //   {
//   //     path: "/",
//   //     element: (
//   //       <PrivateRoute>
//   //         <Layout />
//   //       </PrivateRoute>
//   //     ),
//   //     errorElement: <NotFoundPage />,
//   //     children: [
//   //       {
//   //         path: "/dashboard",
//   //         element: <Dashboard />,
//   //       },
//   //     ]}
//   //     ]);
    
//   return (
//     <div>
//       <BrowserRouter>
//       {/* <div className="">
//         <Layout/>
//       </div> */}
//         <Switch>
//           <Route exact path="/">
//             <Login/>
//           </Route>
//           <Route path="/register">
//             <Register/>
//           </Route>
//           <Route path="/dashboard" element={<Dashboard />}>
//             <Dashboard/>
//           </Route>
//           <Route path="/profil" element={<Profil />}>
//             <Profil/>
//           </Route>
//           <Route path="/user-index" element={<Pendaftaran />}>
//             <Pendaftaran/>
//           </Route>
//           <Route path="/user-add" element={<UserAdd />}>
//             <UserAdd/>
//           </Route>
//           <Route path="/user-dokumen" element={<UserDokumen />}>
//             <UserDokumen/>
//           </Route>
//           <Route path="/user-listdokumen" element={<ListDokumen />}>
//             <ListDokumen/>
//           </Route>
//           <Route path="/dosen-listdokumen" element={<DosenDokumen />}>
//             <DosenDokumen/>
//           </Route>
//           <Route path="/dosen-listdaftar" element={<DosenList />}>
//             <DosenList/>
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;







// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Profil from "./pages/Profil";
// import Pendaftaran from './pages/Pendaftar/user-index'
// import UserAdd from "./pages/Pendaftar/user-add";
// import UserDokumen from "./pages/Laporan/user-dokumen"
// import ListDokumen from "./pages/Laporan/user-listdokumen"
// import DosenDokumen from "./pages/Laporan/dosen-listdokumen"
// import DosenList from "./pages/Pendaftar/dosen-listdaftar"
// import Layout from "./components/layout/Layout";

// import { RouterProvider, BrowserRouter } from "react-router-dom";
// import RootPage from "./pages/root";
// import PrivateRoute from "./helpers/PrivateRoute";
// import { useKeycloak } from "@react-keycloak/web";
// import { Spin } from "antd";
// // import { BrowserRouter } from "react-router-dom";


// const route = BrowserRouter([
//   {
//     path: "/",
//     element: <RootPage />,
//     // errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/",
//     element: (
//       <PrivateRoute>
//         <Layout />
//       </PrivateRoute>
//     ),
//     // errorElement: <NotFoundPage />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "/user-index",
//         element: <Pendaftaran />,
//       },
//       {
//         path: "/user-add",
//         element: <UserAdd />,
//       },
//       {
//         path: "/user-dokumen",
//         element: <UserDokumen />,
//       },
//       {
//         path: "/user-listdokumen",
//         element: <ListDokumen />,
//       },
//       {
//         path: "/dosen-listdokumen",
//         element: <DosenDokumen />,
//       },
//       {
// 				path: "/dosen-listdaftar",
// 				element: <DosenList />,
// 			},
//       {
//         path: "/Profil",
//         element: <Profil />,
//       },
//     ],
//   },
// ]);

// const App = () => {
// 	const { initialized } = useKeycloak();

// 	if (!initialized) {
// 		// Menampilkan Spinner saat keycloak belum terinisialisasi
// 		return <Spin size="large" className="spinner" />;
// 	}

// 	return <RouterProvider router={route} />;
// };

// export default App;





// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Profil from "./pages/Profil";
// import Pendaftaran from './pages/Pendaftar/user-index'
// import UserAdd from "./pages/Pendaftar/user-add";
// import UserDokumen from "./pages/Laporan/user-dokumen"
// import ListDokumen from "./pages/Laporan/user-listdokumen"
// import DosenDokumen from "./pages/Laporan/dosen-listdokumen"
// import DosenList from "./pages/Pendaftar/dosen-listdaftar"
// import Layout from "./components/layout/Layout";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/">
//             <Login/>
//           </Route>
//           <Route path="/register">
//             <Register/>
//           </Route>
//           <Route>
//             <Layout>
//               <Switch>
//                 <Route path="/dashboard">
//                   <Dashboard/>
//                 </Route>
//                 <Route path="/profil">
//                   <Profil/>
//                 </Route>
//                 <Route path="/user-index">
//                   <Pendaftaran/>
//                 </Route>
//                 <Route path="/user-add">
//                   <UserAdd/>
//                 </Route>
//                 <Route path="/user-dokumen">
//                   <UserDokumen/>
//                 </Route>
//                 <Route path="/user-listdokumen">
//                   <ListDokumen/>
//                 </Route>
//                 <Route path="/dosen-listdokumen">
//                   <DosenDokumen/>
//                 </Route>
//                 <Route path="/dosen-listdaftar">
//                   <DosenList/>
//                 </Route>
//               </Switch>
//             </Layout>
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;





import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Pendaftaran from './pages/Pendaftar/user-index';
import UserAdd from "./pages/Pendaftar/user-add";
import UserEdit from "./pages/Pendaftar/user-edit";
import UserDokumen from "./pages/Laporan/user-dokumen";
import ListDokumen from "./pages/Laporan/user-listdokumen";
import DosenDokumen from "./pages/Laporan/dosen-listdokumen";
import DosenList from "./pages/Pendaftar/dosen-listdaftar";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/404"; 

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
                <Route path="/user-dokumen" component={UserDokumen} />
                <Route path="/user-listdokumen" component={ListDokumen} />
                <Route path="/dosen-listdokumen" component={DosenDokumen} />
                <Route path="/dosen-listdaftar" component={DosenList} />   
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
