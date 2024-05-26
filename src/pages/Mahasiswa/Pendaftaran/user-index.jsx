import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Layout from '../../../components/layout/Layout';
import { Table, Tag,Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Pendaftaran = () => {
  const [mahasiswaData, setMahasiswaData] = useState([]);

  const { Search } = Input;
  const tagColors = {
    'Selesai': 'green',
    'DIPROSES': 'geekblue',
    'Ditolak': 'volcano'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/mahasiswa');
        console.log('API Response:', response.data); 
        setMahasiswaData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'NAMA',
      width: 100,
      dataIndex: 'nama',
      key: 'nama',
      selector: (row) => row.name,
      // fixed: 'left',
    },
    {
      title: 'NIM',
      width: 100,
      dataIndex: 'nim',
      key: 'nim',
      // fixed: 'left',
    },
    {
      title: 'KELAS',
      dataIndex: 'kelas',
      key: 'kelas',
      width: 100,
    },
    {
      title: 'DOSEN WALI',
      dataIndex: 'dosenWali',
      key: 'dosenWali',
      width: 100,
    },
    {
      title: 'PROGRAM MBKM',
      dataIndex: 'programMbkm',
      key: 'programMbkm',
      width: 100,
    },
    {
      title: 'KHS',
      key: 'operation',
      // fixed: 'right',
      width: 100,
      render: () => <a>KLIK</a>,
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
      dataIndex: 'totalSks',
      key: '4',
      width: 100,
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: '5',
      width: 100,
      render: status => (
        <Tag color={tagColors[status]}>{status}</Tag>
      ),
      // render: (status) => (
      //   <span>
      //     {status.map((tag) => {
      //       const color = tagColors[tag];
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </span>
      // ),
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
  // const data = [
  //   {
  //     key: '1',
  //     name: 'Fredy Samboro',
  //     nim: '1202230143',
  //     kelas: 'SI-19-46',
  //     ipk: '3,61',
  //     sks: '120',
  //     tags: ['Diproses'],
  //   },
  // ];

  return (
    <>
      <div className="ml-3">
            <h4 className="font-bold text-2xl">PENDAFTARAN MBKM</h4>
        
        <div className="flex mt-7">
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
        </div>
      </div>
      <Table
      columns={columns}
      dataSource={mahasiswaData}
      pagination={false}
      scroll={{
        // x: 1500,
        y: 300,
      }}
    />
    </>
  )
}

export default Pendaftaran;
