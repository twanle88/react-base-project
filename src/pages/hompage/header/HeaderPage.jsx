import React, { useState } from 'react';
import './HeaderPage.scss';
import { Link } from 'react-router-dom';

const theLoai = ['Phim Hành Động', 'Phim Tình Cảm', 'Phim Hài Hước', 'Phim Cổ Trang', 'Phim Tâm Lý',
  'Phim Hình Sự', 'Phim Chiến Tranh', 'Phim Thể Thao', 'Game Show', 'Phim Chiếu Rạp', 'Phim Võ Thuật',
  'Phim Hoạt Hình', 'Phim Viễn Tưởng', 'Phim Phiêu Lưu', 'Phim Khoa Học', 'Phim Ma - Kinh Dị',
  'Phim Âm Nhạc', 'Phim Thần Thoại', 'Phim Truyền Hình', 'Phim Anime', 'Phim Thuyết Minh',
  'Phim Sắp Chiếu'];

const quocGia = ['Phim Trung Quốc', 'Phim Hàn Quốc', 'Phim Nhật Bản', 'Phim Âu Mỹ', 'Phim Thái Lan',
  'Phim Đài Loan', 'Phim Tổng Hợp', 'Phim Hồng Kông', 'Phim Ấn Độ'];

const namPhatHanh = ['Năm 2024', 'Năm 2023', 'Năm 2022', 'Năm 2021', 'Năm 2020', 'Năm 2019',
  'Năm 2018', 'Năm 2017', 'Năm 2016', 'Năm 2015'];

const phimTop = ['TOP IMDB', 'Phim hot', 'Phim Netflix', 'Phim DC Comic', 'Phim Marvel', 'Phim HD'];

const HeaderHomePage = () => {
  const [clickTheLoai, setClickTheLoai] = useState(false);
  const [clickQuocGia, setClickQuocGia] = useState(false);
  const [clickNamPhatHanh, setClickNamPhatHanh] = useState(false);
  const [clickTopPhim, setClickTopPhim] = useState(false);
  const [clickOpenMenu, setClickOpenMenu] = useState(false);

  const handleOnClickOpenMenu = () => {
    setClickOpenMenu(!clickOpenMenu);
  };

  const handleOnClickTheLoaiPhim = () => {
    setClickTheLoai(!clickTheLoai);
    console.log(clickTheLoai);
  };

  const handleOnClickQuocGia = () => {
    setClickQuocGia(!clickQuocGia);
  };

  const handleOnClickNamPhatHanh = () => {
    setClickNamPhatHanh(!clickNamPhatHanh);
  };

  const handleOnClickTopPhim = () => {
    setClickTopPhim(!clickTopPhim);
  };

  return (
    <div className="header-container pt-[5px] bg-[#121212]">
      <div className="header-main max-w-[1500px]  mx-auto py-0 px-3 xler:px-[60px] flex justify-between items-center">
        <div className="relative menu-mobi">
          {clickOpenMenu
            ? <i onClick={() => handleOnClickOpenMenu()} className="fa fa-times block xler:hidden menu-mobile-icon cursor-pointer" aria-hidden="true" />
            : <i onClick={() => handleOnClickOpenMenu()} className="fa fa-bars block xler:hidden menu-mobile-icon cursor-pointer" aria-hidden="true" />}
          {
            clickOpenMenu && (
            <ul className="absolute menu-mobi-parent xler:hidden flex flex-col bg-[#232323] top-[41px] left-[-12px]">
              <li className="menu-mobi-child">
                PHIMMOI
              </li>
              <li className="menu-mobi-child">
                PHIM BỘ
              </li>
              <li className="menu-mobi-child">
                PHIM LẺ
              </li>
              <li className="menu-mobi-child" onClick={() => handleOnClickTheLoaiPhim()}>
                <div className="flex justify-between w-full">
                  <span>
                    THỂ LOẠI
                  </span>
                  {clickTheLoai ? <i className="fa fa-angle-up text-[25px]" /> : <i className="fa fa-angle-down text-[25px]" />}
                </div>
              </li>
              {clickTheLoai
              && (
              <ul className="bg-[#121212] text-white grid grid-cols-4 text-[14px]">
                {theLoai.map((item) => (
                  <li className="leading-[35px] py-[7px] cursor-pointer hover:text-[#ff9601]">{item}</li>
                ))}
              </ul>
              )}
              <li className="menu-mobi-child" onClick={() => handleOnClickQuocGia()}>
                <div className="flex justify-between w-full">
                  <span>
                    QUỐC GIA
                  </span>
                  {clickNamPhatHanh ? <i className="fa fa-angle-up text-[25px]" /> : <i className="fa fa-angle-down text-[25px]" />}
                </div>
              </li>
              {
                clickQuocGia && (
                <ul className="bg-[#121212] text-white grid grid-cols-4 text-[14px]">
                  {quocGia.map((item) => (
                    <li className="leading-[35px] py-[7px] cursor-pointer hover:text-[#ff9601]">{item}</li>
                  ))}
                </ul>
                )
            }
              <li className="menu-mobi-child" onClick={() => handleOnClickNamPhatHanh()}>
                <div className="flex justify-between w-full">
                  <span>
                    NĂM PHÁT HÀNH
                  </span>
                  {clickNamPhatHanh ? <i className="fa fa-angle-up text-[25px]" /> : <i className="fa fa-angle-down text-[25px]" />}
                </div>
              </li>
              {
                clickNamPhatHanh && (
                <ul className="bg-[#121212] text-white grid grid-cols-4 text-[14px]">
                  {namPhatHanh.map((item) => (
                    <li className="leading-[35px] py-[7px] cursor-pointer hover:text-[#ff9601]">{item}</li>
                  ))}
                </ul>
                )
            }
              <li className="menu-mobi-child">
                PHIM CHIẾU RẠP
              </li>
              <li className="menu-mobi-child">
                TRAILER
              </li>
              <li className="menu-mobi-child" onClick={() => handleOnClickTopPhim()}>
                <div className="flex justify-between w-full">
                  <span>
                    TOP PHIM
                  </span>
                  {clickTopPhim ? <i className="fa fa-angle-up text-[25px]" /> : <i className="fa fa-angle-down text-[25px]" />}
                </div>
              </li>
              {
                clickTopPhim && (
                <ul className="bg-[#121212] text-white grid grid-cols-4 text-[14px]">
                  {phimTop.map((item) => (
                    <li className="leading-[35px] py-[7px] cursor-pointer hover:text-[#ff9601]">{item}</li>
                  ))}
                </ul>
                )
            }
            </ul>
            )
          }
        </div>
        <div className="max-w-[200px] cursor-pointer">
          <Link to="/"><img className="h-[60px] p-3 w-full" src="https://phimmoichill.com/dev/images/logo.png" alt="" /></Link>
        </div>
        <ul className="hidden xler:flex leading-[60px] gap-[22px] text-white text-[15px] pl-[11px] ">
          <li className="cursor-pointer">
            PHIMMOI
          </li>
          <li className="cursor-pointer ">
            PHIM LẺ
          </li>
          <li className="cursor-pointer">
            PHIM BỘ
          </li>
          <li className="cursor-pointer relative sub-menu ">
            <div className="hover:text-[#ff9601]">
              THỂ LOẠI
            </div>
            <ul className="grid grid-cols-2 w-[350px] absolute top-[60px]] z-50 bg-[#121212] sub-menu-parent">
              {
              theLoai.map((item) => (
                <li className="text-[14px] px-[11px] border-none leading-[35px] float-left relative sub-menu-child">{item}</li>
              ))
            }
            </ul>
          </li>
          <li className="cursor-pointer relative sub-menu ">
            <div className="hover:text-[#ff9601]">
              QUỐC GIA
            </div>
            <ul className="grid grid-cols-2 w-[350px] absolute top-[60px]] z-50 bg-[#121212] sub-menu-parent">
              {
              quocGia.map((item) => (
                <li className="text-[14px] px-[11px] border-none leading-[35px] float-left relative sub-menu-child">{item}</li>
              ))
            }
            </ul>
          </li>
          <li className="cursor-pointer relative sub-menu ">
            <div className="hover:text-[#ff9601]">
              NĂM PHÁT HÀNH
            </div>
            <ul className="grid grid-cols-2 w-[350px] absolute top-[60px]] z-50 bg-[#121212] sub-menu-parent">
              {
              namPhatHanh.map((item) => (
                <li className="text-[14px] px-[11px] border-none leading-[35px] float-left relative sub-menu-child">{item}</li>
              ))
            }
            </ul>
          </li>
          <li className="cursor-pointer hover:text-[#ff9601]">
            PHIM CHIẾU RẠP
          </li>
          <li className="cursor-pointe hover:text-[#ff9601]r">
            TRAILER
          </li>
          <li className="text-[18px] text-[#ff9601] cursor-pointer">
            TOP PHIM
          </li>
        </ul>
        <div className=" w-[16%] text-end my-[13px] p-[5px] box-search relative hidden xler:block">
          <input type="text" className="h-6 w-full " placeholder="Tìm tên phim, diễn viên..." />
          <i className="fa fa-search search-summit cursor-pointer" />
        </div>
        <i className="fa fa-search search-summit block xler:hidden cursor-pointer" />
      </div>
    </div>
  );
};

export default HeaderHomePage;