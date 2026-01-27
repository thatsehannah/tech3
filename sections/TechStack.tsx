import { TechCard } from "@/components/TechCard";
import { techStack } from "@/data";

export const TechStack = () => {
  return (
    <section id='techstack'>
      <div className='px-16 pt-10 pb-32'>
        <div className='flex flex-col justify-center items-center mx-auto w-fit'>
          <p className='text-5xl font-main font-bold mb-4'>
            Our <span className='text-accent3'>Tech Stack</span>
          </p>
          <p className='text-gray-300 font-main text-lg'>
            Powered by the most reliable modern technologies.
          </p>
        </div>
        <div className='flex items-center justify-between gap-4 mt-24'>
          {techStack.map((item, idx) => (
            <TechCard
              title={item.title}
              logo={item.logo}
              link={item.link}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
