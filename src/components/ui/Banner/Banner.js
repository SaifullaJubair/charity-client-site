const Banner = () => {
  return (
    <div
      className="max-w-[1920px] mx-auto min-h-[80vh] bg-hand-flower relative"
      style={{
        backgroundImage: `linear-gradient(to top, #000000, 70%, transparent), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-6xl  text-light max-w-6xl tracking-wider  font-bold">
          Donations Even If It Is A Small Can Bring Bigger
        </p>
      </div>
    </div>
  );
};

export default Banner;
