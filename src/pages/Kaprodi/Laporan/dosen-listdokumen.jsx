import React from 'react'
// import Layout from '../../components/layout/Layout';
import { useState } from 'react';
import { Table, Tag, Input, Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const DosenListDokumen = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filterKelas, setFilterKelas] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    const { Option } = Select;

    const { Search } = Input;

    const handleKelasChange = value => {
      setFilterKelas(value);
    };

    const handleStatusChange = value => {
      if (value) {
        setFilterStatus(value.toUpperCase());
      } else {
        setFilterStatus('');
      }
    };
    
    
    const tagColors = {
        'SELESAI': 'green',
        'DIPROSES': 'geekblue',
        'DITOLAK': 'volcano'
      };
    
      const columns = [
        {
          title: 'JENIS LAPORAN',
          width: 100,
          dataIndex: 'jenis',
          key: 'age',
          // fixed: 'left',
        },
        {
          title: 'PERIODE',
          width: 100,
          dataIndex: 'periode',
          key: 'age',
          // fixed: 'left',
        },
        {
            title: 'NAMA',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
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
          // {
          //   title: 'KELAS',
          //   dataIndex: 'kelas',
          //   key: 'kelas',
          //   filters: [
          //     { text: 'SI-19-46', value: 'SI-19-46' },
          //     { text: 'SI-19-41', value: 'SI-19-41' },
          //     { text: 'SI-21-48', value: 'SI-21-48' },
          //   ],
          //   onFilter: (value, record) => record.kelas.includes(value),
          //   filterDropdown: (
          //     <div style={{ padding: 8 }}>
          //       <Select
          //         style={{ width: 120 }}
          //         onChange={handleKelasChange}
          //         value={filterKelas}
          //       >
          //         <Option value="">Semua Kelas</Option>
          //         <Option value="SI-19-46">SI-19-46</Option>
          //         <Option value="SI-19-41">SI-19-41</Option>
          //         <Option value="SI-21-48">SI-21-48</Option>
          //       </Select>
          //     </div>
          //   ),
          //   render: kelas => <span>{kelas}</span>,
          // },
        {
            title: 'FILE',
            key: 'operation',
            dataIndex: 'file',
            // fixed: 'right',
            width: 100,
          },
          {
            title: 'BATAS PENGUMPULAN',
            width: 100,
            dataIndex: 'batas',
            key: 'age',
            // fixed: 'left',
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
             <NavLink to="/dosen-editdokumen">
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
            name: 'Fredy Samboro',
            nim: '1202230143',
            kelas: 'SI-19-46',
            file: <a>Laporan MBKM Bulanan Januari.pdf</a>,
            batas: '17-08-2024 / 00.00',
            tags: ['DITOLAK'],
            nilai:'80'
          },
          {
            key: '2',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Asep Sumedang',
            nim: '1202230523',
            kelas: 'SI-19-41',
            file: <a>Laporan MBKM Bulanan Januari.pdf</a>,
            batas: '17-08-2024 / 00.00',
            tags: ['DIPROSES'],
            nilai:'90'
          },
          {
            key: '3',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Kaget Budiman',
            nim: '1202230612',
            kelas: 'SI-19-48',
            batas: '17-08-2024 / 00.00',
            tags: ['SELESAI'],
            nilai:'85'
          },
          {
            key: '4',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Bayem Sore',
            nim: '1202230143',
            kelas: 'SI-19-46',
            file: 'Laporan MBKM Bulanan Januari.pdf',
            batas: '17-08-2024 / 00.00',
            tags: ['DITOLAK'],
            nilai:'83'
          },
          {
            key: '5',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Andi Maulana',
            nim: '1202230523',
            kelas: 'SI-19-46',
            file: 'Laporan MBKM Bulanan Januari.pdf',
            batas: '17-08-2024 / 00.00',
            tags: ['DIPROSES'],
            nilai:'80'
          },
          {
            key: '6',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Farhan Mager',
            nim: '1202230612',
            kelas: 'SI-19-48',
            file: 'Laporan MBKM Bulanan Januari.pdf',
            tags: ['SELESAI'],
            nilai:'80'
          },
          {
            key: '7',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Boby Nasution',
            nim: '1202230143',
            kelas: 'SI-19-46',
            file: <a>Laporan MBKM Bulanan Januari.pdf</a>,
            tags: ['DITOLAK'],
            nilai:'85'
          },
          {
            key: '8',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Doni Arfa',
            nim: '1202230523',
            kelas: 'SI-19-41',
            batas: '17-08-2024 / 00.00',
            tags: ['DIPROSES'],
            nilai:'87'
          },
          {
            key: '9',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Boyka Aghsa',
            nim: '1202230612',
            kelas: 'SI-19-46',
            tags: ['SELESAI'],
            nilai:'89'
          },
          {
            key: '10',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Ajun Jahar',
            nim: '1202230143',
            kelas: 'SI-19-46',
            tags: ['DITOLAK'],
            nilai:'85'
          },
          {
            key: '11',
            jenis: 'Laporan Bulanan',
            periode: 'Januari',
            name: 'Agung Bahari',
            nim: '1202230523',
            kelas: 'SI-19-41',
            tags: ['DIPROSES'],
            nilai:'95'
          },
      ];

      // const filteredData = data.filter((item) =>
      // item.name.toLowerCase().includes(searchTerm.toLowerCase())
      // );

      // const filteredData = data.filter(item =>
      //   item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      //   (filterKelas ? item.kelas === filterKelas : true)
      // );

      // const filteredData = data.filter(item =>
      //   item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      //   (filterKelas ? item.kelas === filterKelas : true) &&
      //   (filterStatus ? item.tags.includes(filterStatus.toLowerCase()) : true)
      // );

      const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterKelas ? item.kelas === filterKelas : true) &&
        (filterStatus ? item.tags.includes(filterStatus) : true)
      );
      
      
  return (
    <>
        <div className="ml-3 ">
            <h4 className="font-bold text-2xl">DAFTAR LAPORAN MBKM</h4>
        
        <div className="flex mt-7">
          <div className="w-full">
            <Search
              placeholder="Cari Nama ..."
              allowClear
              className="w-full col-span-3 sm:w-1/3 mb-2"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            
            {/* <Select
            placeholder="KELAS"
            onChange={(value) => {
              if (value === "Semua") {
              
              } else {
          
              }
            }}
            className="ml-3"
            allowClear
          >
            <Option key="Semua" value="Semua">
              All
            </Option>
          </Select>    */}
          <Select
              placeholder="KELAS"
              onChange={handleKelasChange}
              className="ml-3"
              allowClear
            >
              <Option key="Semua" value="">
                Semua Kelas
              </Option>
              <Option key="SI-19-46" value="SI-19-46">
                SI-19-46
              </Option>
              <Option key="SI-19-41" value="SI-19-41">
                SI-19-41
              </Option>
              <Option key="SI-19-48" value="SI-19-48">
                SI-19-48
              </Option>
            </Select>
            <Select
              placeholder="STATUS"
              onChange={handleStatusChange}
              className="ml-3"
              allowClear
            >
              <Option key="Semua" value="">
                Semua Status
              </Option>
              <Option key="Diproses" value="Diproses">
                DIPROSES
              </Option>
              <Option key="Selesai" value="Selesai">
                SELESAI
              </Option>
              <Option key="Ditolak" value="Ditolak">
                DITOLAK
              </Option>
            </Select>
        </div>

        {/* <div className="flex justify-end mb-5 mr-2">
            <button className='px-3 py-2 bg-blue-500 text-white flex flex-row items-center rounded-md'>
                <div>TAMBAH</div>
            </button>
        </div> */}
      </div>
    </div>
      <Table
      columns={columns}
      dataSource={filteredData}
      pagination={false}
      scroll={{
        // x: 1500,
        y: 300,
      }}
    />
    </>
  )
}

export default DosenListDokumen;
