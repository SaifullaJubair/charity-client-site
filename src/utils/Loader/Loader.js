const Loader = () => {
  return (
    <div>
      {/* create a spinner  */}

      <div className="flex items-center justify-center  min-h-screen space-x-2">
        <div className="text-5xl font-bold text-orange-500 mx-2">Loading</div>

        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-600"></div>
      </div>
    </div>
  );
};

export default Loader;
