import { useSelector } from 'react-redux';

const App = () => {
  const { accessToken, profile } = useSelector((s) => s.auth);

  console.log('this is accessToken', accessToken);
  console.log('this is profile', profile);

  return (
    <h1 className="text-[#cdcdcd] bg-main-color text-32">Hello react app</h1>
  );
};

export default App;
