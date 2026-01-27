import { Banner, LinkButton, Logo } from "@/components";
import { Circle } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id='hero'
      className='w-screen h-screen flex justify-center items-center'
    >
      <div className='w-1/2 flex flex-col justify-center items-center p-4'>
        <Banner className='gap-2 border-accent3 bg-accent3/20'>
          <Circle
            className='fill-accent3 border-0 stroke-0 animate-pulse'
            size={16}
          />
          <p className='uppercase text-accent3 font-bold font-main tracking-widest text-xs'>
            available to hire
          </p>
        </Banner>
        <Logo />
        <div>
          <p className='font-main text-gray-300 text-center text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis cupiditate quia mollitia. Consequatur id ipsum, qui
            autem deleniti blanditiis velit vel magnam recusandae doloremque
            maxime neque corporis ab corrupti odit?
          </p>
        </div>
        <div className='flex justify-center items-center gap-12 p-4 mt-12'>
          <div>
            <LinkButton
              text='View Projects'
              className='bg-accent2 hover:shadow-accent2 hover:ring-1 hover:ring-accent1 text-white text-lg font-medium'
              target='projects'
            />
          </div>
          <div>
            <LinkButton
              text='Contact Us'
              className='bg-gray-600/30 hover:shadow-white hover:ring-1 hover:ring-white text-white text-lg font-extralight'
              target='contact'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
