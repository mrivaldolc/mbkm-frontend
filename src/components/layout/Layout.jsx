// import React from 'react'
// import Sidebar from '../common/NavigationBar'
// import Header from '../common/Header'
// import Footer from '../common/Footer'

// const Layout = () => {
    
//   return (
//     <React.Fragment>
//         <Header/>
//         <div className="" style={{ minHeight: '100vh' }}>  
//             <Sidebar/>
//         </div>
//         <Footer/>
        
        
//     </React.Fragment>
//   )
// }

// export default Layout

import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../common/NavigationBar';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../style/Layout.css';
import BreadCrumbs from '../common/BreadCrumbs';

const { Content } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <React.Fragment>
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
                <Layout>
                    <Header/>
                    <div className="bread-crumb">
                    <BreadCrumbs/>
                    </div>
                        <Layout>
                            <Content className="main-content">
                                {children}
                            </Content>
                        </Layout>
                    <Footer />
                </Layout>
        </Layout>
    </React.Fragment>
  );
}

export default CustomLayout;

