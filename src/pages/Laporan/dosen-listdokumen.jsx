import React from 'react'
// import Layout from '../../components/layout/Layout';
import { Table, Tag, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const dosenListdokumen = () => {
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
        {
            title: 'FILE',
            key: 'operation',
            // fixed: 'right',
            width: 100,
            render: () => <a>Laporan MBKM.pdf</a>,
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
          title: 'NILAI',
          dataIndex: 'nilai',
          key: '1',
          width: 100,
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
            name: 'Fredy Samboro',
            nim: '1202230143',
            kelas: 'SI-19-46',
            tags: ['Ditolak'],
            nilai:'80'
          },
          {
            key: '2',
            name: 'Asep Sumedang',
            nim: '1202230523',
            kelas: 'SI-19-46',
            tags: ['Diproses'],
            nilai:'90'
          },
          {
            key: '3',
            name: 'Kaget Budiman',
            nim: '1202230612',
            kelas: 'SI-19-46',
            tags: ['SELESAI'],
            nilai:'85'
          },
          {
            key: '1',
            name: 'Fredy Samboro',
            nim: '1202230143',
            kelas: 'SI-19-46',
            tags: ['Ditolak'],
            nilai:'80'
          },
          {
            key: '2',
            name: 'Asep Sumedang',
            nim: '1202230523',
            kelas: 'SI-19-46',
            tags: ['Diproses'],
            nilai:'80'
          },
          {
            key: '3',
            name: 'Kaget Budiman',
            nim: '1202230612',
            kelas: 'SI-19-46',
            tags: ['SELESAI'],
            nilai:'80'
          },
          {
            key: '1',
            name: 'Fredy Samboro',
            nim: '1202230143',
            kelas: 'SI-19-46',
            tags: ['Ditolak'],
          },
          {
            key: '2',
            name: 'Asep Sumedang',
            nim: '1202230523',
            kelas: 'SI-19-46',
            tags: ['Diproses'],
          },
          {
            key: '3',
            name: 'Kaget Budiman',
            nim: '1202230612',
            kelas: 'SI-19-46',
            tags: ['SELESAI'],
          },
          {
            key: '1',
            name: 'Fredy Samboro',
            nim: '1202230143',
            kelas: 'SI-19-46',
            tags: ['Ditolak'],
          },
          {
            key: '2',
            name: 'Asep Sumedang',
            nim: '1202230523',
            kelas: 'SI-19-46',
            tags: ['Diproses'],
          },
      ];
  return (
    <>
        <div className="ml-3 ">
            <h4 className="font-bold text-2xl">DAFTAR LAPORAN MBKM</h4>
        
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
            <button className='px-3 py-2 bg-blue-500 text-white flex flex-row items-center rounded-md'>
                <div>TAMBAH</div>
            </button>
        </div>
      </div>
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

export default dosenListdokumen
