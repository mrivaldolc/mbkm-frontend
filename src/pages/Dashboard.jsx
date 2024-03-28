import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import jwt_decode from "jwt-decode";
import { Button } from 'antd';
import Sidebar from '../components/common/NavigationBar';
import Layout from '../components/layout/Layout';
import EditIcon from "../assets/image/edit-icon.svg";
import { Table, Tag } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import backgroundImage from '../assets/image/Timeline-MBKM.png';
import { Card, Col, Row, Carousel } from 'antd';
import "../style/Dashboard.css"

const Dashboard = () => {
  // const contentStyle = {
  //   height: '300px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div
      className="h-full w-full bg-cover bg-center flex justify-center items-start"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='container mx-auto'>
        <div className='mb-1'>
          <div className="bg-red-900 rounded-lg shadow-md p-6 h-96">
            {/* <h2 className="text-white text-xl font-bold mb-2">Carousell</h2>
            <p className="text-white">Informasi</p> */}
            {/* <div className="w-full h-full justify-center items-center">
              <Carousel autoplay>
                <div className="w-1/3 mx-2">
                  <img src={backgroundImage} alt="Gambar Kiri" className="w-30 h-72" />
                </div>
                <div className="w-1/2 mx-2">
                  <img src={backgroundImage} alt="Gambar Tengah" className="w-30 h-72" />
                </div>
                <div className="w-1/3 mx-2">
                  <img src={backgroundImage} alt="Gambar Kanan" className="w-30 h-72" />
                </div>
              </Carousel>
            </div> */}
            <div className=' w-3/4 ml-36 rounded-lg'>
              <Carousel className='rounded-lg' autoplay>
                <div className="h-80 rounded-lg text-white text-center bg-slate-500 flex justify-center items-center">
                  <img src={backgroundImage} alt="Gambar Tengah" className="h-fit w-svw" />
                </div>
                <div className="h-80 rounded-lg text-white text-center bg-slate-500 flex justify-center items-center">
                  <img src="https://telkomuniversity.ac.id/wp-content/uploads/2023/11/Peringkat-Tel-U-di-Asia-Melesat-Pada-Pemeringkatan-QS-AUR-2024-.jpg" alt="Gambar Tengah" className="h-fit w-svw" />
                </div>
                <div className="h-80 rounded-lg text-white text-center bg-slate-500 flex justify-center items-center">
                  <img src="https://it.telkomuniversity.ac.id/wp-content/uploads/2021/10/Telkom-University-3.jpg" alt="Gambar Tengah" className="h-fit w-svw" />
                </div>
                <div className="h-80 rounded-lg text-white text-center bg-slate-500 flex justify-center items-center">
                  <img src="https://biaya.info/wp-content/uploads/2023/01/images-1-678x381.jpg" alt="Gambar Tengah" className="h-fit w-svw" />
                </div>
              </Carousel>
            </div>
             {/* <div className="carousel-container"> 
                <Carousel autoplay dots={true}>
                  <div>
                    <h3 style={contentStyle}>1</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </Carousel>
              </div> */}

          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className=''>
            <div className="bg-red-900 rounded-lg shadow-md p-6">
              <h2 className="text-white text-xl font-bold mb-2">Jumlah Pendaftar</h2>
              <p className="text-white">376</p>
            </div>
          </div>
          <div className=''>
            <div className="bg-red-900 rounded-lg shadow-md p-6">
              <h2 className="text-white text-xl font-bold mb-2">Jumlah Peserta</h2>
              <p className="text-white">142</p>
            </div>
          </div>
          <div className=''>
            <div className="bg-red-900 rounded-lg shadow-md p-6">
              <h2 className="text-white text-xl font-bold mb-2">Jumlah Laporan</h2>
              <p className="text-white">142</p>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Dashboard
