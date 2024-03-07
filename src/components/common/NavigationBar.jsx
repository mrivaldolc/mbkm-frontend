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
    label: 'Registrasi',
    children: [
      getItem('Pendaftaran MBKM', '2', null, null, '/user-index'),
      getItem('Status', '3', null, null, '/status'),
    ],
  },
  getItem('Profil', '4', <FileOutlined />, null, '/profil'),
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
    //   <Layout>
    //     <Header/>
    //   </Layout>
    //   <Layout>
    //     <Header/>
    //     <Content style={{ margin: '0 16px' }}>
    //       <BreadCrumbs/>
    //       <div style={{ padding: 24, minHeight: 360, background: theme === 'dark' ? '#001529' : '#fff', borderRadius: '12px', color: theme === 'dark' ? '#fff' : '#000' }}>
    //         Bill is a cat.
    //       </div>
    //     </Content>
    //     <Footer/>
    //   </Layout>
    // </Layout>
  );
};


export default Sidebar;
