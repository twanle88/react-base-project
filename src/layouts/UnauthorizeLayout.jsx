
const UnauthorizedLayout = ({ children, tabTitle }) => {
  document.title = `${tabTitle || 'App'} | Demo app`;

  return (
    <div className="">
      {children}
    </div>
  );
};

export default UnauthorizedLayout;
