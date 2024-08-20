import Image from "next/image";

const NavigationBar = () => {

  return (
    <div className="flex justify-between items-center w-full py-6">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="logo Logo"
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
};

export default NavigationBar;