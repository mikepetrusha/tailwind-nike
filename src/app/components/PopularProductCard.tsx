import Image from "next/image";
import { star } from "../../../public/assets/icons";

interface PopularProductsCardProps {
  imgURL: string;
  name: string;
  price: string;
}

export const PopularProductCard = ({
  imgURL,
  name,
  price,
}: PopularProductsCardProps) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image src={imgURL} alt={name} height={280} width={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} alt="rating" width={24} height={24} />
        <p className="font-motserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">
        {price}
      </p>
    </div>
  );
};
