import React, { useState } from 'react';
import Layout from '../../../../components/layout/Layout'
import { Input, Button, Form, Row, Typography, message, Upload,Select, DatePicker, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AddPersentasi = () => {
    const [nama, setNama] = useState('');
    const [nim, setNim] = useState('');
    const [kelas, setKelas] = useState('');
    const [doswal, setDoswal] = useState('');
    const [program, setProgram] = useState('');
    const [ipk, setIpk] = useState('');
    const [cv, setCv] = useState('');

    const { Text } = Typography;

    const { RangePicker } = DatePicker;
    const onOk = (value) => {
        console.log('onOk: ', value);
      };  

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
                <h1 className='font-bold text-2xl mb-8'>TAMBAH JADWAL PERSENTASI MBKM</h1>
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
                label="DOSEN PEMBIMBING"
                name="dosenpembimbing"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "DOSEN PEMBIMBING tidak boleh kosong!",
                    },
                ]}
            >
                <Select placeholder="Pilih Dosen Pembimbing">
                    <Select.Option value="agung">Prabu Sigantara</Select.Option>
                    <Select.Option value="andi">Sigit Rabo</Select.Option>
                    <Select.Option value="budi">Budi</Select.Option>
                </Select>
            </Form.Item> 
            <Form.Item
                label="JADWAL PRESENTASI"
                name="name"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "Tanggal laporan tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Space direction="vertical" size={12}>
                <DatePicker
                showTime={{
                    format: 'HH:mm',
                  }}
                format="YYYY-MM-DD HH:mm"
                onChange={(value, dateString) => {
                    console.log('Selected Time: ', value);
                    console.log('Formatted Selected Time: ', dateString);
                }}
                onOk={onOk}
                />
            </Space>
            </Form.Item>
            <Form.Item
                label="JENIS PRESENTASI"
                name="jenispresentasi"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "JENIS PRESENTASI tidak boleh kosong!",
                    },
                ]}
            >
                <Select placeholder="Pilih Dosen Pembimbing">
                    <Select.Option value="online">ONLINE</Select.Option>
                    <Select.Option value="offline">OFFLINE</Select.Option>
                </Select>
            </Form.Item> 

            <Form.Item
                label="LOKASI PRESENTASI"
                name="linkpresentasi"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "LINK PRESENTASI tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Input placeholder="Masukkan Link Presentasi" maxLength={50} />
            </Form.Item>
            <Form.Item
                label="NILAI AKADEMIK"
                name="dosenpembimbing"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "DOSEN PEMBIMBING tidak boleh kosong!",
                    },
                ]}
            >
                <Input placeholder="Masukkan Nilai Akademik" maxLength={50} />
            </Form.Item> 
            <Form.Item
                label="NILAI LAPANGAN"
                name="dosenpembimbing"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "DOSEN PEMBIMBING tidak boleh kosong!",
                    },
                ]}
            >
                <Input placeholder="Masukkan Nilai Lapangan" maxLength={50} />
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

export default AddPersentasi;
