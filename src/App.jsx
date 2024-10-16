import { ConfigProvider, Empty } from 'antd';
import FilmDetail from 'pages/FilmDetail/FilmDetail';
import FooterPage from 'pages/hompage/footer/FooterPage';
import HeaderPage from 'pages/hompage/header/HeaderPage';
import HomePage from 'pages/hompage/HomePage';
import NotFoundPage from 'pages/PublicPages/NotFoundPage';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';

const App = () => {
  const { accessToken, profile } = useSelector((s) => s.auth);

  console.log('this is accessToken', accessToken);
  console.log('this is profile', profile);

  return (
    <ConfigProvider
      renderEmpty={() => (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )}
    >
      <HeaderPage />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/info/:urlFilm"
          element={<FilmDetail />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FooterPage />

    </ConfigProvider>
  );
};

export default App;
