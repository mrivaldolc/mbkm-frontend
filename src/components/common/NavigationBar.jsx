// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// import Footer from './Footer';
// import BreadCrumbs from './BreadCrumbs';
// import Header from './Header';

// const {  Content, Sider } = Layout;

// const Logo = () => (
//   <div className="flex justify-center my-4">
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Logo_Kampus_Merdeka_Kemendikbud.png/1200px-Logo_Kampus_Merdeka_Kemendikbud.png"
//       alt="Logo"
//       className="w-16 h-auto" 
//     />
//   </div>
// );

// function getItem(label, key, icon, children, path) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     path,
//   };
// }

// const items = [
//   {
//     key: 'logo',
//     content: <Logo />,
//   },
//   getItem('Beranda', '1', <PieChartOutlined />, null, '/dashboard'),
//   {
//     key: 'sub1',
//     icon: <UserOutlined />,
//     label: 'Registrasi',
//     children: [
//       getItem('Pendaftaran MBKM', '2', null, null, '/pendaftaran'),
//       getItem('Status', '3', null, null, '/status'),
//     ],
//   },
//   getItem('Profil', '4', <FileOutlined />, null, '/profil'),
// ];

// const Sidebar = () => {
//   const [selectedKeys, setSelectedKeys] = useState(['1']);
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const handleMenuSelect = ({ key }) => {
//     setSelectedKeys([key]);
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
//         {items.map(item => (
//           <React.Fragment key={item.key}>
//             {item.key === 'logo' ? (
//               item.content
//             ) : (
//               <Menu theme="dark" selectedKeys={selectedKeys} mode="inline" onSelect={handleMenuSelect}>
//                 {item.children ? (
//                   <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
//                     {item.children.map(subItem => (
//                       <Menu.Item key={subItem.key}>
//                         <NavLink to={subItem.path}>{subItem.label}</NavLink>
//                       </Menu.Item>
//                     ))}
//                   </Menu.SubMenu>
//                 ) : (
//                   <Menu.Item key={item.key} icon={item.icon}>
//                     <NavLink to={item.path}>{item.label}</NavLink>
//                   </Menu.Item>
//                 )}
//               </Menu>
//             )}
//           </React.Fragment>
//         ))}
//       </Sider>
//       <Layout>
//         {/* <Header theme="dark" style={{ padding: 0, background: colorBgContainer }} /> */}
//         <Header/>
//         <Content style={{ margin: '0 16px' }}>
//           <BreadCrumbs/>
//           <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
//             Bill is a cat.
//           </div>
//         </Content>
//         <Footer/>
//       </Layout>
//     </Layout>
//   );
// };

// export default Sidebar;







import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Switch } from 'antd'; // Import Switch from antd
import Footer from './Footer';
import BreadCrumbs from './BreadCrumbs';
import Header from './Header';

const { Content, Sider } = Layout;

const Logo = () => (
  <div className="flex justify-center my-4">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Logo_Kampus_Merdeka_Kemendikbud.png/1200px-Logo_Kampus_Merdeka_Kemendikbud.png"
      alt="Logo"
      className="w-16 h-auto" 
    />
  </div>
);

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}

const items = [
  {
    key: 'logo',
    content: <Logo />,
  },
  getItem('Beranda', '1', <PieChartOutlined />, null, '/dashboard'),
  
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'Mahasiswa',
    children: [
      getItem('Pendaftaran MBKM', '2', null, null, '/user-index'),
      // getItem('Status', '3', null, null, ''),
      getItem('Laporan', '3', null, null, '/user-listdokumen'),
      getItem('Jadwal Persentasi', '16', null, null, '/user-jadwalpersentasi'),
    ],
  },
  // getItem('Laporan', '4', <FileOutlined />, null, '/user-listdokumen'),

  {
    key: 'sub2',
    icon: <UserOutlined />,
    label: 'Menu Kaprodi',
    children: [
      getItem('Dashboard', '4', null, null, '/dashboard'),
      getItem('Pendaftar MBKM', '5', null, null, '/dosen-listdaftar'),
      getItem('Laporan Peserta', '6', null, null, '/dosen-listdokumen'),
      getItem('Setting Laporan', '7', null, null, '/dosen-settingdokumen'),
      getItem('Setting Presentasi', '8', null, null, '/dosen-settingpersentasi'),
      getItem('Setting Pendaftaran', '18', null, null, '/dosen-settingpendaftaran'),
    ],
  },
  {
    key: 'sub3',
    icon: <UserOutlined />,
    label: 'Menu Dosen Wali',
    children: [
      getItem('Dashboard', '9', null, null, '/dashboard'),
      getItem('Pendaftar MBKM', '10', null, null, '/dosen-listdaftar'),
      getItem('Laporan Peserta', '11', null, null, '/dosen-listdokumen'),
    ],
  },
  {
    key: 'sub4',
    icon: <UserOutlined />,
    label: 'Menu Dosen Pembimbing',
    children: [
      getItem('Dashboard', '12', null, null, '/dashboard'),
      getItem('Laporan Peserta', '13', null, null, '/dosen-listdokumen'),
      getItem('Jadwal Persentasi', '17', null, null, '/pembimbing-jadwalpersentasi'),
    ],
  },
  {
    key: 'sub5',
    icon: <UserOutlined />,
    label: 'Menu Admin',
    children: [
      getItem('Dashboard', '14', null, null, '/dashboard'),
      getItem('Data User', '15', null, null, '/dosen-listdokumen'),
    ],
  },
];

const Sidebar = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']);
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleMenuSelect = ({ key }) => {
    setSelectedKeys([key]);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    // <Layout >
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme={theme} width={230}>
        <div className="flex justify-center my-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Logo_Kampus_Merdeka_Kemendikbud.png/1200px-Logo_Kampus_Merdeka_Kemendikbud.png"
            alt="Logo"
            className="w-16 h-auto" 
          />
        </div>
        {items.map(item => (
          <React.Fragment key={item.key}>
            {item.key !== 'logo' && (
              <Menu theme={theme} selectedKeys={selectedKeys} mode="inline" onSelect={handleMenuSelect}>
                {item.children ? (
                  <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                    {item.children.map(subItem => (
                      <Menu.Item key={subItem.key}>
                        <NavLink to={subItem.path}>{subItem.label}</NavLink>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={item.key} icon={item.icon}>
                    <NavLink to={item.path}>{item.label}</NavLink>
                  </Menu.Item>
                )}
              </Menu>
            )}
          </React.Fragment>
        ))}
        <div className="flex justify-center my-4 mt-7">
          <Switch checked={theme === 'dark'} onChange={toggleTheme} />
        </div>
      </Sider>
  );
};


export default Sidebar;
















// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Menu</h2>
//       <ul>
//         <li>
//           <Link to="/dashboard">Beranda</Link>
//         </li>
//         <li>
//           <Link to="/user-index">Pendaftaran MBKM</Link>
//         </li>
//         <li>
//           <Link to="/user-listdokumen">Status</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
