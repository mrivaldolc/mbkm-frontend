import React from 'react'
import Layout from '../../../components/layout/Layout';
import { Table, Tag } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const SettingDokumen = () => {    
      const columns = [
          {
            title: 'JENIS LAPORAN',
            key: 'jenis',
            dataIndex: 'jenis',
            // fixed: 'right',
            width: 100,
            // render: () => <a>Laporan Akhir</a>,
          },
          {
            title: 'PERIODE',
            key: 'periode',
            dataIndex: 'periode',
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
             <NavLink to="/user-editdokumen">
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
          jenis: 'Laporan Bulanan',
          periode: 'Januari',
        },
        {
          key: '2',
          jenis: 'Laporan Bulanan',
          periode: 'Februari',
        },
        {
            key: '3',
            jenis: 'Laporan Bulanan',
            periode: 'Maret',
        },
        {
          key: '4',
          jenis: 'Laporan Akhir',
          periode: '(Akhir)',
        },
      ];
  return (
    <>
        <div className="ml-3 ">
            <h4 className="font-bold text-2xl">SETTING LAPORAN MBKM</h4>
        </div>
        <div className="flex justify-end mb-5 mr-2">
        <NavLink to="/dosen-addsettingdokumen">
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

export default SettingDokumen;