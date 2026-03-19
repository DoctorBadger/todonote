function How() {
  return (
    <div className=" px-12">
      <div className="flex justify-between">
        <p className="h1">Map Your Success</p>
        <button className="p font-bold mt-6 px-5 py-5 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer">
          Discover More
        </button>
      </div>
      <div className="h-px bg-gray-300 mt-20"></div>
      <div
        style={{ fontFamily: "DM Sans", fontSize: "80px", lineHeight: 1 }}
        className="grid grid-cols-3"
      >
        <div>
          <p className="text-[#929292] my-10">01</p>
          <h3 className="h3 my-10">Get Started</h3>
          <p className="p my-10 text-[#6F6F6F]">
            With our intuitive setup, you’re up and running in minutes.
          </p>
        </div>
        <div>
          <p className="text-[#929292] my-10">02</p>
          <h3 className="h3 my-10">Customize and Configure</h3>
          <p className="p my-10 text-[#6F6F6F]">
            Adapt Area to your specific requirements and preferences.
          </p>
        </div>
        <div>
          <p className="text-[#929292] my-10">03</p>
          <h3 className="h3 my-10">Grow Your Business</h3>
          <p className="p my-10 text-[#6F6F6F]">
            Make informed decisions to exceed your goals.
          </p>
        </div>
      </div>
      <div>
        <img
          src="/landscape.jpg"
          className="rounded-4xl mt-15 object-cover w-full h-200"
        />
      </div>
      <div className="h-px bg-gray-300 mt-20"></div>
    </div>
  );
}

export default How;