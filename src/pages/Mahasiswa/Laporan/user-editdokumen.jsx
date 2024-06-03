import React from 'react'
import Layout from '../../../components/layout/Layout'
import { InboxOutlined } from '@ant-design/icons';
import { Input, Button, Form, Row, Typography, message, Upload, Tag } from 'antd';



const UserEditDokumen = () => {
  const tagColors = {
    'Selesai': 'green',
    'Diproses': 'geekblue',
    'Ditolak': 'volcano'
  };
  const { Dragger } = Upload;
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  

  return (
    <>
      <div className="ml-3 mr-3">
                <h1 className='font-bold text-2xl mb-8'>EDIT LAPORAN MBKM</h1>

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
                label="Status"
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
            {/* <span>
              {tags.map((tag) => {
                const color = tagColors[tag];
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span> */}
            <span>DIPROSES</span>
            </Form.Item>
            <Form.Item
                label="Jenis Laporan"
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
            <span>Laporan Bulanan</span>
            </Form.Item>
            <Form.Item
                label="Periode"
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
            <span>Januari</span>
            </Form.Item>
            <Form.Item
                label="Batas Pengumpulan"
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
            <span>17-08-2024 / 00.00</span>
            </Form.Item>
            {/* <Form.Item
                label="Catatan"
                name="name"
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
            <Input placeholder="Masukkan Nama Mahasiswa" maxLength={50} />
            </Form.Item> */}
            <Form.Item
                label="Catatan"
                name="name"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Nama tidak boleh kosong!",
                    },
                    {
                        validator: () => {}, // Fungsi kosong sebagai validator
                    },
                ]}
            >
                <span>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with</span>
            </Form.Item>

            <div className="div">
              <h1>File submissions :</h1>
              <h1 className='text-end'>Maximum file size: 10MB, maximum number of files: 1</h1>
              </div>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger>
            <div className="div">
              <h1 className='mt-3'>Accepted file types:</h1>
              <h1 className='mt-2'>Document files .doc .docx .pdf</h1>
              </div>
            <Row className='mt-10' justify="end">
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

export default UserEditDokumen;
