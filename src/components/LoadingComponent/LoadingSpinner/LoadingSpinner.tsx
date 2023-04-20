const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-inner"></div>
      </div>
      <div className="logo flex items-center font-averia">
        <div>S</div>
        <div className="mt-2">S</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
