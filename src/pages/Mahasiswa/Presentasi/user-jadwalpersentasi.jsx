import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Layout from '../../../components/layout/Layout';
import { Table, Tag,Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const JadwalPersentasi = () => {
  const { Search } = Input;
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
        title: 'DOSEN PEMBIMBING',
        dataIndex: 'pembimbing',
        key: 'pembimbing',
        width: 100,
    },
    {
        title: 'JADWAL PERSENTASI',
        dataIndex: 'jadwal',
        key: 'jadwal',
        width: 100,
      },
      {
        title: 'JENIS PERSENTASI',
        dataIndex: 'jenispersentasi',
        key: 'jenispersentasi',
        width: 100,
      },
      {
        title: 'LOKASI PERSENTASI',
        dataIndex: 'link',
        key: 'link',
        width: 100,
      },
      {
        title: 'NILAI AKADEMIK',
        dataIndex: 'nilailapangan',
        key: 'nilailapangan',
        width: 100,
      },
      {
        title: 'NILAI LAPANGAN',
        dataIndex: 'nilaiakademik',
        key: 'nilaiakademik',
        width: 100,
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
      pembimbing: 'Prabu Sigantara',
      jadwal: '21-11-24 / 16:30',
      jenispersentasi: 'ONLINE',
    //   link: 'https://meet.google.com/',
      link: <a>https://meet.google.com/</a>,
      nilaiakademik: '95',
      nilailapangan: '98'
    },
  ];

  return (
    <>
      <div className="ml-3 mb-16">
            <h4 className="font-bold text-2xl">JADWAL PERSENTASI MBKM</h4>
        
        {/* <div className="flex mt-7">
          <div className="w-full">
					<Search
						placeholder="Cari Nama ..."
						allowClear
						onSearch={'sendSearchRequest'}
						className="w-full col-span-3 sm:w-1/3 mb-2"
						onChange={(e) => {''
							// const value = e.target.value;
							// setSearchTerm(value);
						}}
						// value={searchTerm}
            value={""}
					/>
          
        </div>
        <div className="flex justify-end mb-5 mr-2">
        <NavLink to="/user-add">
          <button className='px-3 py-2 bg-blue-500 text-white flex flex-row items-center rounded-md'>
            <div>TAMBAH</div>
          </button>
        </NavLink>
        </div>
        </div> */}
      </div>
      <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{
        // x: 1500,
        y: 300,
      }}
    />
    </>
  )
}

export default JadwalPersentasi;
