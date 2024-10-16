import React from 'react';
import './FooterPage.scss';

const FooterPage = () => (
  <div className="footer-container pt-[20px] bg-[#060606]">
    <div className="footer-main  px-[5px] xl:px-[60px] max-w-[1500px] mx-auto my-0">
      <div className="footer-items">
        <div className="footer-item">
          <img src="https://phimmoichill.com/dev/images/logo.png" alt="" />
        </div>
        <div className="footer-item">
          Tận hưởng trải nghiệm xem phim mới nhất miễn phí ngay tại phimmoi và dành thời gian thư giãn chill cùng gia đình và bạn bè. Với một thư viện phim phong phú
        </div>
      </div>
      <div className="footer-items">
        <div className="footer-item">Phim Mới</div>
        <div className="footer-item">Phim chiếu rạp</div>
        <div className="footer-item">Phim lẻ</div>
        <div className="footer-item">Phim bộ</div>
        <div className="footer-item">Phim hành động</div>
        <div className="footer-item">Phim viễn tưởng</div>
        <div className="footer-item">Phim tâm lý</div>
        <div className="footer-item">Phim hài hước</div>
      </div>
      <div className="footer-items">
        <div className="footer-item">Phim Hay</div>
        <div className="footer-item">Phim Mỹ</div>
        <div className="footer-item">Phim Hàn Quốc</div>
        <div className="footer-item">Phim Trung Quốc</div>
        <div className="footer-item">Phim Thái Lan</div>
        <div className="footer-item">Phim Việt Nam</div>
        <div className="footer-item">Phim Ma Kinh Dị</div>
        <div className="footer-item">Phim Hoạt Hình</div>
      </div>
      <div className="footer-items">
        <div className="footer-item">Phim Hot</div>
        <div className="footer-item">Về chúng tôi</div>
        <div className="footer-item">Phimmoi</div>
        <div className="footer-item">Sitemap</div>
      </div>
      <div className="footer-items">
        <div className="footer-item">Trợ giúp</div>
        <div className="footer-item">Hỏi đáp</div>
        <div className="footer-item">Liên hệ</div>
        <div className="footer-item">Tin tức</div>
      </div>
      <div className="footer-items">
        <div className="footer-item">Thông tin</div>
        <div className="footer-item">Điều khoản sử dụng</div>
        <div className="footer-item">Chính sách riêng tư</div>
        <div className="footer-item">Khiếu nại bản quyền</div>
        <div className="text-white text-[12px] leading-6 xl:text-[14px]">© 2024 PhimChill.Net</div>
      </div>
    </div>
  </div>
);

export default FooterPage;