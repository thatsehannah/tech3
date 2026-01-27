import Image from "next/image";

interface TechCardProps {
  title: string;
  logo: string;
  link: string;
}

export const TechCard = ({ title, logo, link }: TechCardProps) => {
  return (
    <a
      href={link}
      target='_blank'
      className='bg-gray-500/10 flex flex-col justify-center items-center py-8 px-16 rounded-lg gap-5 hover:scale-110 transition-all duration-300'
    >
      <Image
        src={logo}
        alt={`${title.toLowerCase()} logo`}
        height={80}
        width={80}
      />
      <p className='font-main text-sm text-gray-300 font-bold'>{title}</p>
    </a>
  );
};
