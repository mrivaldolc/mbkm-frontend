import React, { useState } from 'react';
import Layout from '../../../components/layout/Layout'
import { Input, Button, Form, Row, Typography, message, Upload,Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UserAdd = () => {
    const [programMbkm, setProgram] = useState('');
    const [dosenWali, setDoswal] = useState('');
    const [nama, setNama] = useState('');
    const [nim, setNim] = useState('');
    const [kelas, setKelas] = useState('');
    const [ipk, setIpk] = useState('');
    const [totalsks, setTotalsks] = useState('');
    const [khs, setKhs] = useState('');
    const [cv, setCv] = useState('');
    const [portofolio, setPortofolio] = useState('');

    const { Text } = Typography;
    const history = useHistory();


    // const props = {
    //     name: 'file',
    //     action: '/api/v1/mahasiswa/register',
    //     headers: {
    //       authorization: 'authorization-text',
    //     },
    //     onChange(info) {
    //       if (info.file.status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //       }
    //       if (info.file.status === 'done') {
    //         message.success(`${info.file.name} file uploaded successfully`);
    //       } else if (info.file.status === 'error') {
    //         message.error(`${info.file.name} file upload failed.`);
    //       }
    //     },
    //   };

    const handleCVChange = (e) => {
        setCv(e.target.files[0]);
      };
    
      const handleKHSChange = (e) => {
        setKhs(e.target.files[0]);
      };
    
      const handlePortfolioChange = (e) => {
        setPortofolio(e.target.files[0]);
      };

    // const handleSubmit = () => {
    //     // Lakukan sesuatu dengan data yang di-submit, misalnya kirim ke server
    //     console.log('Nama:', nama);
    //     console.log('NIM:', nim);
    //     console.log('Kelas:', kelas);
    //     console.log('Dosen Wali:', doswal);
    //     console.log('Program:', program);
    //     console.log('IPK:', ipk);
    //     console.log('TOTAL SKS:', totalsks);
    //     console.log('CV:', cv);
    //     console.log('KHS:', khs);
    //     console.log('PORTOFOLIO:', portofolio);
    //   };

    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post('/api/v1/mahasiswa/register', {
    //             programMbkm,
    //             dosenWali,
    //             nama,
    //             nim,
    //             kelas,
    //             ipk,
    //             totalsks,
    //             khs,
    //             cv,
    //             portofolio
    //         });
    //         console.log('API Response:', response.data);
    //         message.success('Data successfully submitted!');
    //         // Optionally, you can redirect or perform other actions after successful submission
    //         // history.push('/user-index');
    //     } catch (error) {
    //         console.error('Error submitting data:', error);
    //         message.error('Failed to submit data.');
    //     }
    // };
    const handleSubmit = async () => {
    
        const formData = new FormData();
        formData.append('mahasiswa', JSON.stringify({ nim, nama, programMbkm, dosenWali, kelas, ipk, totalsks, khs, cv, portofolio}));
        formData.append('cv', cv);
        formData.append('khs', khs);
        formData.append('portfolio', portofolio);
    
        try {
          const response = await axios.post('/api/v1/mahasiswa/register', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response.data);
          // Handle success
        } catch (error) {
          console.error('Error:', error);
          // Handle error
        }
      };

      
      const handleCancel = () => {
        history.goBack(); 
    };


  return (
    <>
            <div className="ml-3 mr-3">
                <h1 className='font-bold text-2xl mb-8'>DAFTAR MBKM</h1>
                
            <Form
            requiredMark={false}
            labelCol={{ span: 6, }}
            wrapperCol={{
                span: 18,
            }}
            labelAlign="left"
            colon={false}
            autoComplete="off"
            onFinish={handleSubmit}
            >
            <Form.Item
                label="PROGRAM MBKM"
                name="programMbkm"
                hasFeedback
                onChange={(e) => setProgram(e.target.value)}
                rules={[
                    {
                        required: true,
                        message: "PROGRAM MBKM tidak boleh kosong!",
                    },
                ]}
            >
                <Select placeholder="Pilih Program MBKM">
                    <Select.Option value="1">Kampus Mengajar</Select.Option>
                    <Select.Option value="2">Magang MSIB</Select.Option>
                    <Select.Option value="3">Studi Independen</Select.Option>
                    <Select.Option value="4">Pertukaran Mahasiswa Merdeka</Select.Option>
                    <Select.Option value="5">Wirausaha Merdeka</Select.Option>
                    <Select.Option value="6">Indonesian International Student Mobility Awards</Select.Option>
                    <Select.Option value="7">Praktisi Mengajar</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="DOSEN WALI"
                name="dosenWali"
                hasFeedback
                onChange={(e) => setDoswal(e.target.value)}
                rules={[
                    {
                        required: true,
                        message: "DOSEN WALI tidak boleh kosong!",
                    },
                ]}
            >
                <Select placeholder="Pilih Dosen Wali">
                    <Select.Option value="agung">Nanang Maulana</Select.Option>
                    <Select.Option value="andi">Ujang Suherman</Select.Option>
                    <Select.Option value="budi">Budi Santoso</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="NAMA"
                name="nama"
                hasFeedback
                onChange={(e) => setNama(e.target.value)}
                rules={[
                {
                    required: true,
                    message: "Nama tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Input placeholder="Masukkan Nama Mahasiswa" maxLength={50} />
            </Form.Item>
            <Form.Item
                label="NIM"
                name="nim"
                hasFeedback
                onChange={(e) => setNim(e.target.value)}
                rules={[
                {
                    required: true,
                    message: "NIM tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Input placeholder="Masukkan NIM Mahasiswa" maxLength={50} />
            </Form.Item>
            <Form.Item
                label="KELAS"
                name="kelas"
                hasFeedback
                onChange={(e) => setKelas(e.target.value)}
                rules={[
                {
                    required: true,
                    message: "Kelas tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Input placeholder="Masukkan Kelas" maxLength={50} />
            </Form.Item>           
            <Form.Item
                label="IPK"
                name="ipk"
                hasFeedback
                onChange={(e) => setIpk(e.target.value)}
                rules={[
                {
                    required: true,
                    message: "IPK tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Input placeholder="Masukkan Total IPK Mahasiswa" maxLength={50} />
            </Form.Item>
            <Form.Item
                label="TOTAL SKS"
                name="totalsks"
                hasFeedback
                onChange={(e) => setTotalsks(e.target.value)}
                rules={[
                {
                    required: true,
                    message: "Total SKS tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Input placeholder="Masukkan Total SKS Mahasiswa" maxLength={50} />
            </Form.Item>
            {/* <Form.Item
                label="KHS (.pdf)"
                name="khs"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "KHS tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            </Form.Item>
            <Form.Item
                label="CV (.pdf)"
                name="cv"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "CV tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            </Form.Item>
            <Form.Item
                label="PORTOFOLIO (.zip)"
                name="portofolio"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "PORTOFOLIO tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            </Form.Item> */}
            <Form.Item
                label="CV (.pdf)"
                name="cv"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "CV tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
                <input type="file" accept=".pdf" onChange={handleCVChange} />
            </Form.Item>
            <Form.Item
                label="KHS (.pdf)"
                name="khs"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "KHS tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
                <input type="file" accept=".pdf" onChange={handleKHSChange} />
            </Form.Item>
            <Form.Item
                label="PORTOFOLIO (.zip)"
                name="portofolio"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "PORTOFOLIO tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
                <input type="file" accept=".zip" onChange={handlePortfolioChange} />
            </Form.Item>

            <Row justify="end">
                <Button onClick={handleCancel} style={{ marginRight: 10 }}>
                        BATAL
                </Button>
                <Button type="primary" danger htmlType="submit">
                    SIMPAN
                </Button>
            </Row>
            </Form>
            </div>
        </>
  )
}

export default UserAdd;
