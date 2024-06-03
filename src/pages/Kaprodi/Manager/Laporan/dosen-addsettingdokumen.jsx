import React from 'react'
import Layout from '../../../../components/layout/Layout'
import { InboxOutlined } from '@ant-design/icons';
import { Input, Button, Form, Row, DatePicker, Space, Select } from 'antd';



const DosenaddSetting = () => {
    const { RangePicker } = DatePicker;
    const onOk = (value) => {
      console.log('onOk: ', value);
    };    

  

  return (
    <>
      <div className="ml-3 mr-3">
                <h1 className='font-bold text-2xl mb-8'>TAMBAH PERIODE LAPORAN MBKM</h1>

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
                label="JENIS LAPORAN"
                name="name"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "Jenis laporan tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Select placeholder="Pilih Jenis Laporan">
                    <Select.Option value="bulanan">Laporan Bulanan</Select.Option>
                    <Select.Option value="akhir">Laporan Akhir</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="PERIODE"
                name="periode"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "Periode tidak boleh kosong!",
                },
                {
                    validator: "",
                    },
                ]}
            >
            <Select placeholder="Pilih Periode Bulan">
                <Select.Option value="akhir">(Akhir)</Select.Option>
                <Select.Option value="januari">Januari</Select.Option>
                <Select.Option value="februari">Februari</Select.Option>
                <Select.Option value="maret">Maret</Select.Option>
                <Select.Option value="april">April</Select.Option>
                <Select.Option value="mei">Mei</Select.Option>
                <Select.Option value="juni">Juni</Select.Option>
                <Select.Option value="juli">Juli</Select.Option>
                <Select.Option value="agustus">Agustus</Select.Option>
                <Select.Option value="september">September</Select.Option>
                <Select.Option value="oktober">Oktober</Select.Option>
                <Select.Option value="november">November</Select.Option>
                <Select.Option value="desember">Desember</Select.Option>
            </Select>
            </Form.Item>
            <Form.Item
                label="BATAS PENGUMPULAN"
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

export default DosenaddSetting;
