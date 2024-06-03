import React,{useState} from 'react';
import { Table, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { Calendar, theme, Modal } from 'antd';

const SettingPersentasi = () => {
  const { Search } = Input;
  const { token } = theme.useToken();

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
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
        render: (text, record) => (
            <span
              style={{ cursor: 'pointer' }}
              className="text-blue-500"
              onClick={handleModalOpen}
            >
              {text}
            </span>
          ),
      },
      {
        title: 'JENIS PERSENTASI',
        dataIndex: 'jenispersentasi',
        key: 'jenispersentasi',
        width: 100,
      },
      {
        title: 'LOKASI PRESENTASI',
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
           <NavLink to="/dosen-addpersentasi">
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
      pembimbing: 'Prabu Sigantara',
      jadwal: 'SENIN, 21-November-2024 / 16:30',
      jenispersentasi: 'ONLINE',
      link: <a>https://meet.google.com/</a>,
      nilaiakademik: '98',
      nilailapangan: '95',
    },
    {
        key: '2',
        name: 'Agung Raja',
        nim: '1202230634',
        kelas: 'SI-19-42',
        // pembimbing: 'Andika Pratama',
        // jadwal: '21-11-24 / 16:30',
        // jenispersentasi: 'ONLINE',
        // link: <a>https://meet.google.com/</a>,
      },
      {
        key: '3',
        name: 'Bayu Ageng',
        nim: '1202230512',
        kelas: 'SI-19-41',
        pembimbing: 'Sigit Rabo',
        jadwal: 'SENIN, 21-November-2024 / 16:30',
        jenispersentasi: 'OFFLINE',
        link: 'TULT-0812',
      },
      {
        key: '4',
        name: 'Ibnu Asgar',
        nim: '1202230222',
        kelas: 'SI-19-44',
        pembimbing: 'Prabu Sigantara',
        jadwal: 'SENIN, 21-November-2024 / 16:30',
        jenispersentasi: 'ONLINE',
        link: <a>https://meet.google.com/</a>,
      },
      {
        key: '5',
        name: 'Boni Aryuda',
        nim: '1202230612',
        kelas: 'SI-19-41',
        pembimbing: 'Sigit Rabo',
        jadwal: 'SENIN, 21-November-2024 / 16:30',
        jenispersentasi: 'OFFLINE',
        link: 'TULT-0812',
      },
      {
        key: '6',
        name: 'Alam Ganjar',
        nim: '1202230623',
        kelas: 'SI-19-44',
        pembimbing: 'Prabu Sigantara',
        jadwal: 'SENIN, 21-November-2024 / 16:30',
        jenispersentasi: 'OFFLINE',
        link: 'TULT-0812',
      },
      {
        key: '7',
        name: 'Rohmat Daril',
        nim: '1202230123',
        kelas: 'SI-19-47',
        pembimbing: 'Sigit Rabo',
        jadwal: 'SENIN, 21-November-2024 / 16:30',
        jenispersentasi: 'ONLINE',
        link: <a>https://meet.google.com/</a>,
      },
  ];

  return (
    <>
      <div className="ml-3">
            <h4 className="font-bold text-2xl">JADWAL PERSENTASI MBKM</h4>
        
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
        {/* <NavLink to="/dosen-addpersentasi">
          <button className='px-3 py-2 bg-blue-500 text-white flex flex-row items-center rounded-md'>
            <div>TAMBAH</div>
          </button>
        </NavLink> */}
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
    <Modal
        title="Jadwal Presentasi"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </Modal>
    </>
  )
}

export default SettingPersentasi;
