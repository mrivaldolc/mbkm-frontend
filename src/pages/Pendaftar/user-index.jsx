import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Layout from '../../components/layout/Layout';
import { Table, Tag } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Pendaftaran = () => {
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
         <NavLink to="/user-edit">
          <button>
              <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </NavLink>
         
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
      tags: ['Diproses'],
    },
  ];

  return (
    <>
      <div className="ml-3 ">
            <h4 className="font-bold text-2xl">PENDAFTARAN MBKM</h4>
        </div>
        <div className="flex justify-end mb-5 mr-2">
        <NavLink to="/user-add">
          <button className='px-3 py-2 bg-blue-500 text-white flex flex-row items-center rounded-md'>
            <div>TAMBAH</div>
          </button>
        </NavLink>
        </div>
      <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{
        x: 1500,
        y: 300,
      }}
    />
    </>
  )
}

export default Pendaftaran;
