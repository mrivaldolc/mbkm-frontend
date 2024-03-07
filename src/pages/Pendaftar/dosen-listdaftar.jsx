import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import jwt_decode from "jwt-decode";
import Layout from '../../components/layout/Layout'
import { Table, Tag } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const dosenListdaftar = () => {
  const tagColors = {
    'Selesai': 'green',
    'Diproses': 'geekblue',
    'Ditolak': 'volcano'
  };

  const columns = [
    {
      title: 'NAMA',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      // fixed: 'left',
    },
    {
      title: 'NIM',
      width: 100,
      dataIndex: 'nim',
      key: 'age',
      // fixed: 'left',
    },
    {
      title: 'KELAS',
      dataIndex: 'kelas',
      key: '1',
      width: 100,
    },
    {
      title: 'CV',
      key: 'operation',
      // fixed: 'right',
      width: 100,
      render: () => <a>KLIK</a>,
    },
    {
      title: 'IPK',
      dataIndex: 'ipk',
      key: '3',
      width: 100,
    },
    {
      title: 'TOTAL SKS',
      dataIndex: 'sks',
      key: '4',
      width: 100,
    },
    {
      title: 'STATUS',
      dataIndex: 'tags',
      key: '5',
      width: 100,
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            const color = tagColors[tag];
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'operation',
      // fixed: 'right',
      width: 100,
      render: () => 
      <div className="ml-4 items-center">
        {/* <img src="../assets/image/edit-icon.svg" alt="" />, */}
        {/* <FontAwesomeIcon icon="fa-solid fa-user" />
         */}
         <button>
          <a href="http://">
            <FontAwesomeIcon icon={faPenToSquare} />
           </a>
          
         </button>
      </div>
    },
  ];
  // const data = [];
  // for (let i = 0; i < 100; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward ${i}`,
  //     age: 32,
  //     address: `London Park no. ${i}`,
  //   });
  // } 
  const data = [
    {
      key: '1',
      name: 'Fredy Samboro',
      nim: '1202230143',
      kelas: 'SI-19-46',
      ipk: '3,61',
      sks: '120',
      tags: ['Ditolak'],
    },
    {
      key: '2',
      name: 'Asep Sumedang',
      nim: '1202230523',
      kelas: 'SI-19-46',
      ipk: '3,21',
      sks: '120',
      tags: ['Diproses'],
    },
    {
      key: '3',
      name: 'Kaget Budiman',
      nim: '1202230612',
      kelas: 'SI-19-46',
      ipk: '3,53',
      sks: '115',
      tags: ['SELESAI'],
    },
    {
      key: '1',
      name: 'Fredy Samboro',
      nim: '1202230143',
      kelas: 'SI-19-46',
      ipk: '3,61',
      sks: '120',
      tags: ['Ditolak'],
    },
    {
      key: '2',
      name: 'Asep Sumedang',
      nim: '1202230523',
      kelas: 'SI-19-46',
      ipk: '3,21',
      sks: '120',
      tags: ['Diproses'],
    },
    {
      key: '3',
      name: 'Kaget Budiman',
      nim: '1202230612',
      kelas: 'SI-19-46',
      ipk: '3,53',
      sks: '115',
      tags: ['SELESAI'],
    },
  ];

  return (
    <Layout>
      <div className="ml-3 mb-5">
					<h4 className="font-bold text-2xl">PENDAFTAR</h4>
				</div>
      <Table
      columns={columns}
      dataSource={data}
      pagination
      scroll={{
        x: 1500,
        y: 300,
      }}
    />
    </Layout>
  )
}

export default dosenListdaftar
