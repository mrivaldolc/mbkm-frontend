// import React from 'react'
// import {  Breadcrumb } from 'antd';

// const BreadCrumbs = () => {
//   return (
//     <div className='ml-6'>
//       <Breadcrumb >
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Beranda</Breadcrumb.Item>
//           </Breadcrumb>
//     </div>
//   )
// }

// export default BreadCrumbs





// import { HomeOutlined, UserOutlined } from '@ant-design/icons';
// import React from 'react';
// import { Breadcrumb } from 'antd';

// const BreadCrumbs = () => {
//     <Breadcrumb
//     items={[
//       {
//         href: '',
//         title: <HomeOutlined />,
//       },
//       {
//         href: '',
//         title: (
//           <>
//             <UserOutlined />
//             <span>Application List</span>
//           </>
//         ),
//       },
//       {
//         title: 'Application',
//       },
//     ]}
//   />
// };

// export default BreadCrumbs



// import { useLocation } from "react-router-dom";
// import useBreadcrumbs from "use-react-router-breadcrumbs";
// import { Link } from "react-router-dom";

// const formatBreadcrumb = (slash, breadcrumb) => {
//     return Array(3).fill("\xa0").join("") + slash + Array(3).fill("\xa0").join("") + breadcrumb;
// };

// const routes = [
//     { path: "dashboard", breadcrumb: "Dashboard" },
//     { path: "dashboard/add", breadcrumb: formatBreadcrumb("/", "Add Dashboard") },
//     { path: "dashboard/update/:id", breadcrumb: formatBreadcrumb("/", "Update Dashboard") },
//     { path: "menu/", breadcrumb: "Menu" },
//     { path: "menu/add", breadcrumb: formatBreadcrumb("/", "Add Master Menu") },
//     { path: "menu/update/:id", breadcrumb: formatBreadcrumb("/", "Update Master Menu") },
//     { path: "menu/view/:id", breadcrumb: formatBreadcrumb("/", "View") },
//     // dkk -> perlu ditambah sesuai menu nya
// ];

// const BreadCrumbs = () => {
//     const breadcrumbs = useBreadcrumbs(routes);
//     breadcrumbs.shift();
//     const location = useLocation();

//     const renderBreadcrumbs = breadcrumbs.map(({ match, key, breadcrumb }, index) => {
//         if (
//             breadcrumb.key !== "/dashboard/update" ||
//             breadcrumb.key !== "/menu/update" ||
//             breadcrumb.key !== "/user/update"
//         ) {
//             return (
//                 <Link
//                     key={index}
//                     to={key}
//                     className={
//                         match.pathname === location.pathname
//                             ? "breadcrumb-active"
//                             : "breadcrumb-not-active"
//                     }
//                 >
//                     {breadcrumb.key === "/dashboard/update" ? "" : breadcrumb}
//                 </Link>
//             );
//         } else {
//             return "";
//         }
//     });

//     return renderBreadcrumbs;
// };

// export default BreadCrumbs;


import React from "react";
import { Link, useLocation } from "react-router-dom";

// Define a mapping of paths to breadcrumb names
const breadcrumbNameMap = {
  "/dashboard": "Dashboard",
  "/profil": "Profil",
  "/user-index": "Pendaftaran MBKM",
  "/user-add": "Form Pendaftaran MBKM",
  "/user-edit": "Edit User",
  "/user-dokumen": "Unggah Laporan MBKM",
  "/user-listdokumen": "Laporan Peserta MBKM",
  "/dosen-listdokumen": "List Laporan Peserta",
  "/dosen-listdaftar": "List Pendaftar MBKM"
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const displayName = breadcrumbNameMap[routeTo] || name;
          return (
            <div className='ml-6'>
              <li key={index} className={`breadcrumb-item ${isLast ? "active" : ""}`}>
                {isLast ? (
                  displayName
                  ) : (
                    <Link to={routeTo}>{displayName}</Link>
                    )}
              </li>
            </div>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

