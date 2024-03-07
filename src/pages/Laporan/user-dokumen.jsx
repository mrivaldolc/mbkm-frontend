import React from 'react'
import Layout from '../../components/layout/Layout'
import { InboxOutlined } from '@ant-design/icons';
import { Input, Button, Form, Row, Typography, message, Upload } from 'antd';



const userIndex = () => {
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
    <Layout>
      <div className="ml-3 mr-3">
                <h1 className='font-bold text-2xl mb-8'>LAPORAN MBKM</h1>

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
            {/* <Form.Item
                label="NAMA"
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
    </Layout>
  )
}

export default userIndex
