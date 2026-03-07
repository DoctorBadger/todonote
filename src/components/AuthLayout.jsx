import plant from "../assets/plant.jpg";

function AuthLayout({ children }) {
  return (
    <div className="relative flex flex-col lg:flex-row h-dvh overflow-hidden">
      <img
        src={plant}
        alt="plant"
        className="absolute inset-0 w-full h-full object-cover lg:hidden"
      />

      <div className="relative flex items-center justify-center w-full lg:w-1/2 px-6 md:px-16 lg:px-32 py-10 ">
        <div className="w-full max-w-md bg-white rounded-xl p-8">
          {children}
        </div>
      </div>

      <div className="hidden lg:block w-1/2">
        <img
          src={plant}
          alt="plant"
          className="w-full h-full object-cover rounded-4xl"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
