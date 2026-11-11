import Image from "next/image";

export const Logo = ({ className = "w-10 h-10 sm:w-11 sm:h-11" }) => (
  <div
    className={`relative flex items-center justify-center rounded-xl overflow-hidden bg-[#09132e] shadow-sm shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 ${className}`}
  >
    <Image
      src="/magicscale-logo.png"
      alt="MagicScale"
      width={48}
      height={48}
      className="w-full h-full object-contain"
      priority
    />
  </div>
);