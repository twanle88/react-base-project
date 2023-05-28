import { ConfigProvider, Empty } from 'antd';
import SpinnerLoader from 'components/Loaders/SpinnerLoader';
import MainLayout from 'layouts/MainLayout';
import { RequireAuth, UnauthorizeGuard } from 'layouts/RouteGuards';
import UnauthorizedLayout from 'layouts/UnauthorizeLayout';
import NotFoundPage from 'pages/PublicPages/NotFoundPage';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { authorizeRoutes, publicRoutes, unauthorizeRoutes } from 'routes/';

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

      <Routes>
        {publicRoutes.map((item) => (
          <Route
            element={<item.component />}
            key={item.name}
            path={item.path}
            loader={SpinnerLoader}
          />
        ))}

        <Route element={<UnauthorizeGuard />}>
          {unauthorizeRoutes.map((item) => (
            <Route
              path={item.path}
              element={(
                <UnauthorizedLayout tabTitle={item.name}>
                  <item.component />
                </UnauthorizedLayout>
            )}
              key={item.name}
            />
          ))}
        </Route>

        {authorizeRoutes.map((item) => (
          <Route
            element={<RequireAuth />}
            key={item.name}
          >
            {/* <Route element={<RequireRole require={item.isProtected} />}> */}
            <Route
              path={item.path}
              element={(
                <MainLayout tabTitle={item.name}>
                  <item.component />
                </MainLayout>
                      )}
              loader={SpinnerLoader}
            />
            {/* </Route> */}
          </Route>
        ))}

        <Route
          path="/"
          element={(
            <Navigate
              to="/app/dashboard"
              replace
            />
          )}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
