function Footer() {
  return (
    <footer className=" px-12 pb-8">

      <div className="flex gap-8 text-sm font-medium mb-16">
        <a className="cursor-pointer hover:opacity-70">Benefits</a>
        <a className="cursor-pointer hover:opacity-70">Specifications</a>
        <a className="cursor-pointer hover:opacity-70">How-to</a>
      </div>

      <div className="flex justify-between items-end">

        <div className="flex items-end gap-6">
          
          <img src="/Logo.svg" alt="logo" className="h-15" />

          <p className="caption text-[#485C11]">
            © Area . 2025
          </p>
        </div>

        <p className="caption text-[#485C11]">
          All Rights Reserved
        </p>
      </div>

    </footer>
  );
}

export default Footer;