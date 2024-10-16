import React from 'react';
import TopSlider from './body-home-page/TopSlider';
import './HomePage.scss';
import ListFilm from './body-home-page/ListFilm';

// eslint-disable-next-line import/order
import { phimBoCapNhap, phimChieuRapMoi, phimLeCapNhat, phimMoiSapChieu, phimThinhHanh, subHeadingPhimBoCapNhap, subHeadingPhimChieuRapMoi, subHeadingPhimLeCapNhat, subHeadingPhimThinhHanh } from '../../data/data';

const HomePage = () => (
  <div>
    <TopSlider title="PHIM ĐỀ CỬ" />
    <ListFilm title="PHIM LẺ MỚI CẬP NHẬT" largeImage data={phimLeCapNhat} subHeading={subHeadingPhimLeCapNhat} />
    <ListFilm title="PHIM LẺ CHIẾU RẠP MỚI" largeImage data={phimChieuRapMoi} subHeading={subHeadingPhimChieuRapMoi} />
    <ListFilm title="PHIM BỘ MỚI CẬP NHẬT" largeImage data={phimBoCapNhap} subHeading={subHeadingPhimBoCapNhap} />
    <ListFilm title="PHIM THỊNH HÀNH" largeImage data={phimThinhHanh} subHeading={subHeadingPhimThinhHanh} />
    <ListFilm title="PHIM SẮP CHIẾU" largeImage={false} data={phimMoiSapChieu} />
  </div>
);
export default HomePage;