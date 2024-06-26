import React from 'react'
import Layout from '../../../components/layout/Layout';
import { Table, Tag } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const userListdokumen = () => {
    const tagColors = {
        'Selesai': 'green',
        'Diproses': 'geekblue',
        'Ditolak': 'volcano'
      };
    
      const columns = [
        {
            title: 'FILE',
            key: 'file',
            dataIndex: 'file',
            // fixed: 'right',
            width: 100,
            // render: () => <a>Laporan MBKM.pdf</a>,
          },
          {
            title: 'FILE TTD',
            key: 'filettd',
            dataIndex: 'filettd',
            // fixed: 'right',
            width: 100,
            // render: () => <a>Laporan Akhir</a>,
          },
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
            title: 'BATAS PENGUMPULAN',
            key: 'batas',
            dataIndex: 'batas',
            // fixed: 'right',
            width: 100,
            // render: () => <a>Laporan Akhir</a>,
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
          file: <a>Laporan MBKM Bulanan Januari.pdf</a>,
          filettd: <a>TTD_Laporan MBKM Bulanan Januari.pdf</a>,
          jenis: 'Laporan Bulanan',
          periode: 'Januari',
          batas: '17-08-2024 / 00.00',
          tags: ['Selesai'],
        },
        {
          key: '2',
          file: 'Laporan MBKM Bulanan Februari.pdf',
          jenis: 'Laporan Bulanan',
          periode: 'Februari',
          batas: '13-09-2024 / 00.00',
          tags: ['Diproses'],
        },
        {
          key: '3',
          file: '',
          jenis: 'Laporan Bulanan',
          periode: 'Maret',
          batas: '13-09-2024 / 00.00',
          tags: ['Diproses'],
        },
        {
          key: '4',
          file: 'Laporan MBKM Akhir.pdf',
          jenis: 'Laporan Akhir',
          periode: '(Akhir)',
          batas: '05-10-2024 / 00.00',
          tags: ['DITOLAK'],
    
        },
      ];
  return (
    <>
        <div className="ml-3 mb-16">
            <h4 className="font-bold text-2xl">LAPORAN MBKM</h4>
        </div>
        {/* <div className="flex justify-end mb-5 mr-2">
        <NavLink to="/user-dokumen">
          <button className='px-3 py-2 bg-blue-500 text-white flex flex-row items-center rounded-md'>
            <div>TAMBAH</div>
          </button>
      </NavLink>
        </div> */}
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

export default userListdokumen
