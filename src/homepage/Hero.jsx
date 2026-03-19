function Hero() {
  return (
    <div className="pt-35 px-15 text-center">
      <h1 className="display text-[160px] leading-[0.9] tracking-tight">
        Browse everything.
      </h1>

      <div className="relative mt-20 flex justify-center overflow-y-clip">
        <div className="absolute bottom-0 w-11/12 h-100 bg-[#8D9B6A] rounded-[28px]"></div>
        <div className="relative z-10 w-240 bg-black rounded-[28px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] translate-y-17.5">
          <img src="/dashboard.png" className="w-full rounded-[20px] block" />
        </div>
      </div>
      <div className="mt-20 text-left">
        <p className="text-[14px] text-[#6f6f6f] mb-5">Trusted by:</p>

        <div className="flex justify-between items-center px-15 mt-12">
          <img src="/logo1.svg" className="h-6 scale-150" />
          <img src="/logo2.svg" className="h-6 scale-150" />
          <img src="/logo3.svg" className="h-6 scale-150" />
          <img src="/logo4.svg" className="h-6 scale-150" />
          <img src="/logo5.svg" className="h-6 scale-150" />
          <img src="/logo6.svg" className="h-6 scale-150" />
        </div>
      </div>
      <div className="h-px bg-gray-300 mt-20"></div>
    </div>

    
  );
}
export default Hero;
