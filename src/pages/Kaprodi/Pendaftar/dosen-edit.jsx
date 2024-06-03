import React, { useState } from 'react';
import Layout from '../../../components/layout/Layout'
import { Input, Button, Form, Row, Typography, message, Upload,Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const DosenEdit = () => {
    const [nama, setNama] = useState('');
    const [nim, setNim] = useState('');
    const [kelas, setKelas] = useState('');
    const [doswal, setDoswal] = useState('');
    const [program, setProgram] = useState('');
    const [ipk, setIpk] = useState('');
    const [cv, setCv] = useState('');

    const { Text } = Typography;

    const props = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    const handleSubmit = () => {
        // Lakukan sesuatu dengan data yang di-submit, misalnya kirim ke server
        console.log('Nama:', nama);
        console.log('NIM:', nim);
        console.log('Kelas:', kelas);
        console.log('Dosen Wali:', doswal);
        console.log('Program:', program);
        console.log('IPK:', ipk);
        console.log('CV:', cv);
      };

  return (
    <>
            <div className="ml-3 mr-3">
                <h1 className='font-bold text-2xl mb-8'>DOSEN EDIT MBKM</h1>
            
            {/* <div className="w-full max-w-md mx-auto mt-10">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 flex items-center">
                        <div className="w-1/3 mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
                                Masukkan Nama:
                            </label>
                        </div>
                        <div className="w-2/3 ml-2">
                            <Input
                                id="nama"
                                placeholder="Nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <div className="w-1/3 mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nim">
                                Masukkan NIM:
                            </label>
                        </div>
                        <div className="w-2/3 ml-2">
                            <Input
                                id="nim"
                                placeholder="NIM"
                                value={nim}
                                onChange={(e) => setNim(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="w-1/3 mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kelas">
                                Masukkan Kelas:
                            </label>
                        </div>
                        <div className="w-2/3 ml-2">
                            <Input
                                id="kelas"
                                placeholder="Kelas"
                                value={kelas}
                                onChange={(e) => setKelas(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </div>
                </form>
            </div> */}
            <Form
            requiredMark={false}
            labelCol={{ span: 6, }}
            wrapperCol={{
                span: 18,
            }}
            labelAlign="left"
            colon={false}
            autoComplete="off"
            >
                <Form.Item
                label="STATUS"
                name="status"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "Status tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Select placeholder="Pilih Status">
                    <Select.Option value="bulanan">DITERIMA</Select.Option>
                    <Select.Option value="akhir">DIPROSES</Select.Option>
                    <Select.Option value="akhir">DITOLAK</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="PROGRAM MBKM"
                name="program"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "PROGRAM MBKM tidak boleh kosong!",
                    },
                ]}
            >
                <h1>asd</h1>
            </Form.Item>
            <Form.Item
                label="DOSEN WALI"
                name="doswal"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "DOSEN WALI tidak boleh kosong!",
                    },
                ]}
            >
                <h1>Nanang Maulana</h1>
            </Form.Item>
            <Form.Item
                label="NAMA"
                name="nama"
                hasFeedback
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
            <h1>Fredy Samboro</h1>
            </Form.Item>
            <Form.Item
                label="NIM"
                name="nim"
                hasFeedback
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
            <h1>1202230143</h1>
            </Form.Item>
            <Form.Item
                label="KELAS"
                name="kelas"
                hasFeedback
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
            <h1>SI-19-46</h1>
            </Form.Item>           
            <Form.Item
                label="IPK"
                name="ipk"
                hasFeedback
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
            <h1>3,61</h1>
            </Form.Item>
            <Form.Item
                label="TOTAL SKS"
                name="sks"
                hasFeedback
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
            <h1>120</h1>
            </Form.Item>
            <Form.Item
                label="KHS"
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
            <a>KLIK</a>
            </Form.Item>
            <Form.Item
                label="CV"
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
            <a>KLIK</a>
            </Form.Item>
            <Form.Item
                label="PORTOFOLIO"
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
            <a>KLIK</a>
            </Form.Item>
            <Form.Item
                label="CATATAN"
                name="catatan"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "Catatan tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
                <Input placeholder="Masukkan Catatan" maxLength={50} />
            </Form.Item>
            <Row justify="end">
                <Button onClick={""} style={{ marginRight: 10 }}>
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

export default DosenEdit;
