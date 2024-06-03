import React from 'react'
import Layout from '../../../../components/layout/Layout';
import { Table, Tag } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const SettingPendaftaran = () => {    
      const columns = [
          {
            title: 'PROGRAM MBKM',
            key: 'jenis',
            dataIndex: 'jenis',
            // fixed: 'right',
            width: 100,
            // render: () => <a>Laporan Akhir</a>,
          },
          {
            title: 'BATAS PROGRAM',
            key: 'expired_pendaftaran',
            dataIndex: 'expired_pendaftaran',
            // fixed: 'right',
            width: 100,
            // render: () => <a>Laporan Akhir</a>,
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
             <NavLink to="/dosen-editpendaftaran">
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
          jenis: 'Kampus Mengajar',
          expired_pendaftaran: '17-08-2024 / 00.00',
        },
        {
          key: '2',
          jenis: 'Magang MSIB',
          expired_pendaftaran: '17-08-2024 / 00.00',
        },
        {
            key: '3',
            jenis: 'Studi Independen',
            expired_pendaftaran: '17-08-2024 / 00.00',
        },
        {
          key: '4',
          jenis: 'Pertukaran Mahasiswa Merdeka',
          expired_pendaftaran: '17-08-2024 / 00.00',
        },
        {
          key: '5',
          jenis: 'Wirausaha Merdeka',
          expired_pendaftaran: '17-08-2024 / 00.00',
        },
        {
          key: '6',
          jenis: 'Indonesian International Student Mobility Awards',
          expired_pendaftaran: '17-08-2024 / 00.00',
        },
        {
          key: '7',
          jenis: 'Praktisi Mengajar',
          expired_pendaftaran: '17-08-2024 / 00.00',
        },
      ];
  return (
    <>
        <div className="ml-3 ">
            <h4 className="font-bold text-2xl">SETTING PENDAFTARAN MBKM</h4>
        </div>
        <div className="flex justify-end mb-5 mr-2">
        <NavLink to="/dosen-addpendaftaran">
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
        // x: 1500,
        y: 300,
      }}
    />
    </>
  )
}

export default SettingPendaftaran;