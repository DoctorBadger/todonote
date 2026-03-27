function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-12 py-10">
      {/* LINKS */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium mb-10 sm:mb-16 text-center sm:text-left">
        <a href="#benefits" className="hover:opacity-70">
          Benefits
        </a>
        <a href="#specs" className="hover:opacity-70">
          Specifications
        </a>
        <a href="#how" className="hover:opacity-70">
          How-to
        </a>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6">
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 sm:gap-6 text-center sm:text-left">
          <img src="/Logo.svg" alt="logo" className="h-10 sm:h-12" />

          <p className="caption text-[#485C11]">© Area . 2025</p>
        </div>

        {/* RIGHT */}
        <p className="caption text-[#485C11] text-center sm:text-right">
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
