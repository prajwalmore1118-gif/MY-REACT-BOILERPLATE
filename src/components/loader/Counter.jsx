const Counter = ({ progress }) => {
  return (
    <div className="fixed left-[68%] md:left-[83%] top-1/3 -translate-y-1/2 z-[100]">
      <h1 className="text-white text-4xl md:text-5xl font-medium tracking-tight">
        {String(progress).padStart(3, "0")}
      </h1>
    </div>
  );
};

export default Counter;