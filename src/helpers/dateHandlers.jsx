/**
 * Lấy 7 ngày về trước tính từ ngày hiện tại hoặc ngày chỉ định
 * @returns Date
 */
export const getLast7Days = (time) => {
  const date = time && new Date(time).toString() !== 'Invalid Date' ? new Date(time) : new Date();
  const last7d = new Date(date.setDate(date.getDate() - 7));
  return last7d.toISOString();
};

/**
 * Lấy thời gian đến cuối ngày (có thể chỉ định ngày hoặc không)
 * @param {Date} time (optional) Thời gian cần lấy đến 23h59m
 * @returns Date
 */
export const getEndOfDay = (time) => {
  const date = time && new Date(time).toString() !== 'Invalid Date' ? new Date(time) : new Date();

  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);

  return date.toISOString();
};

/**
 * Lấy ngày đầu tiên của tháng (có thể chỉ định ngày hoặc lấy ngày hiện tại)
 * @param {Date} time (optional) Thời gian cần lấy ngày đầu tháng
 * @returns Date
 */
export const getStartMonth = (time) => {
  const date = time && new Date(time).toString() !== 'Invalid Date' ? new Date(time) : new Date();

  // date.setDate(1);
  // date.set(1);
  date.setDate(1);

  return date.toISOString();
};