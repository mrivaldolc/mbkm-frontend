import React from 'react'
import {  Breadcrumb } from 'antd';

const BreadCrumbs = () => {
  return (
    <div className='ml-6'>
      <Breadcrumb >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          </Breadcrumb>
    </div>
  )
}

export default BreadCrumbs

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
