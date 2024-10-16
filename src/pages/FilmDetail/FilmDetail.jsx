import React, { useEffect, useState } from 'react';
import './FilmDetail.scss';
import TopSlider from 'pages/hompage/body-home-page/TopSlider';
import { useParams } from 'react-router';
import { allFilm } from '../../data/data';

const FilmDetail = () => {
  const [scoreStart, setScoreStar] = useState(0);
  const [imageLarge, setImageLarge] = useState('');
  const [imageSmall, setImageSmall] = useState('');
  const [nameFilmVietNam, setNameFilmVietNam] = useState('');
  const [nameFilmEnglish, setNameFilmEnglish] = useState('');
  const { urlFilm } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const film = allFilm.filter((item) => item.url === urlFilm);
    if (film[0]) {
      setImageLarge(film[0].imageLarge);
      setNameFilmVietNam(film[0].nameFilmVietNam);
      setNameFilmEnglish(film[0].nameFilmEnglish);
      setImageSmall(film[0].imageSmall);
    } else {
      setImageLarge(allFilm[0].imageLarge);
      setNameFilmVietNam(allFilm[0].nameFilmVietNam);
      setNameFilmEnglish(allFilm[0].nameFilmEnglish);
      setImageSmall(allFilm[0].imageSmall);
    }
  }, [urlFilm]);

  const handleOnMouseLeave = () => {
    setScoreStar(0);
  };

  const handleMouseEnter = (e) => {
    setScoreStar(+e.target.alt);
  };
  return (
    <div className="film-detail-container  bg-[#1a1a1a] pt-[20px]">
      <div className="my-0 mx-auto max-w-[980px]">
        <div className="film-detail-header py-2 px-[15px] text-[15px] bg-[#252525] text-[#ff9601] flex">
          <div className="mr-1">
            <i className="fa fa-home mr-2" />
            <span>Xem phim </span>
            <i className="fa fa-angle-right" />
          </div>
          <div className="mr-1">
            <span>Phim Hành Động </span>
            <i className="fa fa-angle-right" />
          </div>
          <div className="text-white">{nameFilmVietNam}</div>
        </div>
        <div className="film-detail-image">
          <div className="film-detail-image-large">
            <img src={imageLarge} alt="" />
            <div className="play-icon" />
          </div>
          <div className="film-detail-title">
            <div
              className="film-detail-image-small hidden xl:block"
              style={{ backgroundImage: `url('${imageSmall}')` }}
            />
            <div className="film-detail-name xl:ml-5 text-white">
              <h1 className="mb-2 text-[28px]">
                {nameFilmVietNam}
              </h1>
              <h2 className="mb-2 text-[16px] font-bold">
                {nameFilmEnglish}
              </h2>
              <div className="text-[14px] flex gap-1">
                <div className=" py-[6px] px-3 bg-[#5BC0DE] shadow-xl">
                  <i className="fa fa-youtube-play" />
                  <span>Trailer</span>
                </div>
                <div className=" py-[6px] px-3 bg-[#D9534F] shadow-xl">
                  <i className="fa fa-play-circle-o" />
                  <span>Xem phim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="film-infomation bg-[#252525] p-[10px] mt-[10px]">
          <div className="film-rate my-[10px]">
            <div className="reaction text-[11px] text-white flex gap-2">
              <div className="bg-[#1877f2] flex gap-1 py-[2px] px-2 rounded">
                <div>
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/FEppCFCt76d.png" alt="" />
                </div>
                <div>
                  Thích
                </div>
                <div>
                  4
                </div>
              </div>
              <div className="bg-[#1877f2] py-[2px] px-2 rounded">
                Chia sẻ
              </div>
            </div>
            <div className="score flex mt-1 items-center">
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 1 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="1" title="Dở tệ" />&nbsp;
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 2 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="2" title="Dở" />&nbsp;
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 3 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="3" title="Không hay" />&nbsp;
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 4 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="4" title="Không hay lắm" />&nbsp;
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 5 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="5" title="Bình thường" />&nbsp;
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 6 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="6" title="Xem được" />&nbsp;
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 7 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="7" title="Có vẻ hay" />&nbsp;
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 8 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="8" title="Hay" />&nbsp;
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 9 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="9" title="Rất hay" />&nbsp;
              <img className="w-4 h-4 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={handleOnMouseLeave} src={scoreStart >= 10 ? 'https://phimmoichill.com/media/img/star-on.png' : 'https://phimmoichill.com/media/img/star-off.png'} alt="10" title="Tuyệt hay" />
              <div className="ml-4 text-[#DCDCDC] text-[14px]">(6 đ/168 lượt)</div>
            </div>
          </div>
          <div className="film-info pb-[10px]">
            <div className="film-info-cols">
              <div className="film-info-items">
                <div className="film-info-item">
                  Đang phát:
                </div>
                <div className="film-info-item special-red">
                  HD Vietsub
                </div>
              </div>
              <div className="film-info-items">
                <div className="film-info-item">
                  Thể loại:
                </div>
                <div className="film-info-item">
                  Phim Hành Động
                </div>
              </div>
              <div className="film-info-items">
                <div className="film-info-item">
                  Thời lượng:
                </div>
                <div className="film-info-item">
                  9 Tập
                </div>
              </div>
            </div>
            <div className="film-info-cols">
              <div className="film-info-items">
                <div className="film-info-item">
                  Năm Phát Hành:
                </div>
                <div className="film-info-item">
                  2024
                </div>
              </div>
              <div className="film-info-items">
                <div className="film-info-item">
                  Đạo Diễn
                </div>
                <div className="film-info-item">
                  Talor Sheridan
                </div>
              </div>
              <div className="film-info-items">
                <div className="film-info-item">
                  Diễn Viên
                </div>
                <div className="film-info-item">
                  Sylvester Stallone, Chris Caldovino, Dashiell Connery,
                </div>
              </div>
            </div>
            <div className="film-info-cols">
              <div className="film-info-items">
                <div className="film-info-item">
                  Quốc gia:
                </div>
                <div className="film-info-item">
                  Phim Âu Mỹ
                </div>
              </div>
              <div className="film-info-items">
                <div className="film-info-item">
                  Điểm IMDb:
                </div>
                <div className="film-info-item special-imdb">
                  8.0
                </div>
              </div>
            </div>
          </div>
          <div className="film-suggest">
            <div className="film-suggest-more mt-[10px] p-[10px] bg-[#000] flex gap-2 text-[14px]">
              <div className="text-[#DCDCDC]">
                Xem thêm:
              </div>
              <div className="text-[#337AB7]">
                Tulsa King 1
              </div>
            </div>
          </div>
          <div className="film-description mt-[10px] pb-[10px]">
            <div className="mb-[15px] text-[15.4px] text-[#ff9601] font-bold">
              Nội dung phim
            </div>
            <div className="text-[14px] text-[#828282]">
              <span className="font-bold">Ông Trùm Giang Hồ (Phần 2) Tulsa King (Season 2) 2024 </span>
              <span>Chắc hẳn bạn còn nhớ ông trùm xây dựng đế chế ở vùng tusla ngầu đét mùa trước với những pha hành động mãn nhãn chật thật chứ ? phần 2 này tiếp tục khám phá cuộc sống của Dwight khi anh đối mặt với những thách thức mới trong việc duy trì và mở rộng đế chế của mình. Bối cảnh của phần này bao gồm những màn đối đầu căng thẳng và các mưu mẹo chính trị trong giới tội phạm, cũng như các mối quan hệ cá nhân và ngầm của Dwight đang ngày càng phức tạp.</span>
            </div>
          </div>
          <div className="film-tag mt-[10px] pb-[10px]">
            <div className="mb-[15px] text-[15.4px] text-[#ff9601] font-bold">
              Tags
            </div>
            <div className="flex gap-3 text-[#778187] text-[14px]">
              <div className="py-[5.6px] px-[8.4px] bg-[#353535]">
                ông trùm vùng tusla phần 2
              </div>
              <div className="py-[5.6px] px-[8.4px] bg-[#353535]">
                tulsa king season 2
              </div>
            </div>
          </div>
        </div>
        <div className="film-comment-wrap pt-[20px]">
          <dir className="film-comment bg-white my-0 mx-auto max-w-[980px] p-[5px]">
            <div className="film-comment-top  pt-2 pb-8 flex justify-between">
              <div className="text-[14px] font-bold">
                1 bình luận
              </div>
              <div className="flex gap-1 items-center">
                <div className="text-[14px]">
                  Sắp xếp theo
                </div>
                <div className="text-[12px] py-[2px] px-2 flex gap-2 sort-box">
                  <div className="font-bold">
                    Mới nhất
                  </div>
                  <div>
                    <i className="fa fa-sort" />
                  </div>
                </div>
              </div>
            </div>
            <div className="film-comment-main py-6">
              <div className="flex gap-2">
                <div>
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="" />
                </div>
                <div className="comment">
                  <textarea className="" placeholder="Bình luận..." />
                </div>
              </div>
              <div className="read-comment pt-6 flex gap-2">
                <div>
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="" />
                </div>
                <div>
                  <div className="text-[#385898] text-[14px] font-bold">
                    Nguyễn Văn A
                  </div>
                  <div className="text-[14px] text-[#1C1E21]">
                    hay
                  </div>
                  <div className="flex text-[12px] gap-2">
                    <div className="text-[#4267B2] hover:underline cursor-pointer">
                      Thích
                    </div>
                    <div className="text-[#4267B2] hover:underline cursor-pointer">
                      Phản hồi
                    </div>
                    <div className="flex gap-1">
                      <div className="cursor-pointer">
                        <i className="fa fa-thumbs-up text-[#4267B2]" />
                      </div>
                      <div className="text-[#1C1E21]">
                        1
                      </div>

                    </div>
                    <div className="text-[#90949C] hover:underline  cursor-pointer">
                      1 tuần
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="film-comment-bottom py-2 flex gap-2 items-center">
              <div>
                <i className="fa fa-facebook flex items-center w-[14px] h-[14px] text-[11px] rounded-sm pl-1 text-white bg-[#3b569b]" />
              </div>
              <div className="text-[11px] text-[#385898] hover:underline">
                Plugin bình luận trên Facebook
              </div>
            </div>
          </dir>
        </div>
        <div className="film-detail-bottom mt-[20px] pt-[10px]">
          <div className="slider-bottom">
            <TopSlider autoSlide title="CÓ THỂ BẠN CŨNG MUỐN XEM" />
          </div>
          <div className="slider-bottom mt-[20px] pb-[40px] pt-[10px]">
            <TopSlider title="PHIM ĐỀ CỬ MỚI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;