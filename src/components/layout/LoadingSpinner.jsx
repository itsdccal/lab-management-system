const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <p className="mt-4 text-base-content/70">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;