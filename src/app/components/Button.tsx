import Image from "next/image";

interface buttonProps {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

export const Button = ({
  label,
  iconURL = "",
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: buttonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        fullWidth && "w-full"
      }
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : " bg-coral-red text-white border-coral-red"
      }
     `}
    >
      {label}
      {iconURL && (
        <Image
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="image"
        />
      )}
    </button>
  );
};
