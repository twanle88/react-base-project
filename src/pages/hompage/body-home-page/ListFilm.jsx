import React from 'react';
import './ListFilm.scss';
import { Link } from 'react-router-dom';

const ListFilm = (props) => (
  <div className="list-film-wrap bg-[#1a1a1a] ">
    <div className="list-film pb-[20px] px-[5px] xl:px-[60px] max-w-[1500px] mx-auto my-0">
      <div className="list-film-heading pt-[15px] pb-[20px] flex  justify-between items-center">
        <div className="list-film-heading-left flex justify-center items-center gap-1  xl:gap-14">
          <h2 className="list-film-title py-4 mt-[20px] mb-[15px] text-[17px] xl:text-[25px] text-[#FF8A00] font-bold">
            {props.title}
          </h2>
          <ul className="list-film-sub-heading flex flex-wrap gap-[4px] text-white text-[14px] xl:gap-2 xl:mb-4">
            {props.subHeading && props.subHeading.map((item) => (
              <li className="bg-[#504d49] px-1">
                {item}
              </li>
            ))}

          </ul>
        </div>
        <div className="list-film-heading-right text-white text-nowrap px-1 py-[3px] rounded text-[14px] xl:bg-[#504d49] gap-2 mb-4">
          <span>
            Xem tất cả
          </span>
          <i className="fa fa fa-caret-right ml-1" />
          <span />
        </div>
      </div>
      <div className="list-film-items">
        {props.data && props.data.map((item, index) => (
          <div className={index === 0 && props.largeImage ? 'list-film-item item-large' : 'list-film-item item-small'}>
            <div className="list-film-label">
              {item.title}
            </div>
            <div className="list-film-image">
              <Link className="list-film-link" to={`/info/${item.url}`}>
                <img src={item.image} alt="" />
                <h3 className="list-film-name-film">
                  {item.nameFilm}
                </h3>
              </Link>
              <Link to={`/info/${item.url}`}>
                <i className="icon-play image_hover-icon-play" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ListFilm;