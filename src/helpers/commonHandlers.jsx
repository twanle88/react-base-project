
export const handleCopy = (props) => {
  navigator.clipboard.writeText(props);
};

// cần sửa lại main element display
export const scrollToTop = () => {
  const el = document.getElementById('main-section');

  el.scroll({ top: 0, left: 0, behavior: 'smooth' });
};

// cần sửa lại main element display
export const scrollToBottom = () => {
  const el = document.getElementById('main-section');

  el.scroll({ top: el.offsetHeight || el.scrollHeight, left: 0, behavior: 'smooth' });
};

/**
 * Hàm xử lý ảnh lỗi để hiển thị 1 ảnh default (cần cập nhật thêm khi có server ảnh)
 * @param {Element} e element from onError function
 */
export const handleErrorImage = (e) => {
  e.target.src = `${process.env.PUBLIC_URL}/assets/images/default-image-300x400.svg`;
};

/**
 * Xứ lý resize ảnh
 * @param {String} imageUrl Url string
 * @param {Object} size { w: Number, h: Number }
 * @returns Url changed (string) or null
 */
export const handleGetResizeImageUrl = (imageUrl, size) => {
  if (!imageUrl || !size?.w || !size?.h) return null;

  imageUrl = imageUrl.replace(/_[0-9].[0,5]x[0-9].[0,5]/, `_${size.w}x${size.h}`);
  return imageUrl;
};