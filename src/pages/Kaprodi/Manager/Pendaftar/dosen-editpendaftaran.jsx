import React from 'react'
import Layout from '../../../../components/layout/Layout'
import { InboxOutlined } from '@ant-design/icons';
import { Input, Button, Form, Row, DatePicker, Space, Select } from 'antd';



const DoseneditPendaftaran = () => {
    const { RangePicker } = DatePicker;
    const onOk = (value) => {
      console.log('onOk: ', value);
    };    

  

  return (
    <>
      <div className="ml-3 mr-3">
                <h1 className='font-bold text-2xl mb-8'>EDIT PROGRAM MBKM</h1>

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
                label="PROGRAM MBKM"
                name="name"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "Nama Program MBKM tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Input placeholder="Masukkan Nama Program MBKM" maxLength={50} />
            </Form.Item>
            <Form.Item
                label="BATAS PROGRAM"
                name="batas"
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
                <RangePicker
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

            <Row className='mt-10' justify="end">
                <Button onClick={""} style={{ marginRight: 10 }}>
                        BATAL
                </Button>
                <Button type="primary" danger htmlType="submit">
                    TAMBAH
                </Button>
            </Row>
          </Form>
      </div>
    </>
  )
}

export default DoseneditPendaftaran;
