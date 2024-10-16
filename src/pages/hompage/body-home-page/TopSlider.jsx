import React, { useState, useRef, useEffect } from 'react';
import { phimDeCu } from '../../../data/data';
import './TopSlider.scss';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';

const TopSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [itemsToShow, setItemsToShow] = useState(5);
  // Hàm xác định số lượng ảnh hiển thị dựa trên kích thước màn hình
  const calculateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width < 1024) return 3;
    if (width < 1280) return 4;
    return 5;
  };

  // Cập nhật số lượng ảnh hiển thị khi thay đổi kích thước màn hình
  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(calculateItemsPerPage());
    };

    window.addEventListener('resize', updateItemsToShow);
    updateItemsToShow();

    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  useEffect(() => {
    if (!props.autoSlide) {
      const intervalId = setInterval(() => {
        // eslint-disable-next-line no-use-before-define
        handleNext();
      }, 3000);
      return () => clearInterval(intervalId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleNext = () => {
    const totalItems = phimDeCu.length;
    const maxIndex = totalItems - itemsToShow;
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + itemsToShow);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsToShow < 0) {
      if (currentIndex === 0) {
        setCurrentIndex(Math.max(phimDeCu.length - itemsToShow, 0));
      } else {
        setCurrentIndex(0);
      }
    } else {
      setCurrentIndex((prevIndex) => prevIndex - itemsToShow);
    }
  };
  return (
    <div className="bg-[#1a1a1a]">
      <div className="body-home-page-container  pt-[20px] px-[5px] xl:px-[60px] max-w-[1500px] mx-auto my-0">
        <div className="top-slide overflow-hidden">
          <div className="heading mx-2">
            <h2 className="text-[25px] text-[#FF8A00] font-bold py-4 ">
              {props.title}
            </h2>
          </div>
          <div className="image_slider">
            <div className="iamge_slider-track" ref={sliderRef}>
              <i className="fa fa fa-caret-left slider-prev text-[40px] md:text-[50px] lg:text-[60px] z-10" onClick={handlePrev} />
              <ul
                className="image_slider-parent"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                }}
              >
                {phimDeCu.map((item, index) => (
                  <li className="image_slider-child" key={index}>
                    <p className="image_slider-child-vietsub">{item.title}</p>
                    <Link to={`/info/${item.url}`}><img src={item.image} alt="" /></Link>
                    <div className="image_hidden" />
                    <Link to={`/info/${item.url}`}><i className="icon-play image_hover-icon-play" /></Link>
                    <div className="image_slider-child-title">
                      {item.nameFilm}
                    </div>
                  </li>
                ))}

              </ul>
              <i className="fa fa fa-caret-right slider-next text-[40px] md:text-[50px] lg:text-[60px] z-10" onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;