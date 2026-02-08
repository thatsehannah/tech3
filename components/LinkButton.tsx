import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

interface LinkButtonProps {
  className: string;
  text: string;
  target: string;
}

gsap.registerPlugin(ScrollToPlugin);

export const LinkButton = ({ className, text, target }: LinkButtonProps) => {
  const scrollToSection = () => {
    gsap.to(window, {
      duration: 3,
      scrollTo: {
        y: `#${target}`,
        offsetY: 50,
        autoKill: true,
      },
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className='link-btn'
      onClick={scrollToSection}
    >
      <div
        className={`${className} hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-lg w-fit font-main py-2 px-4`}
      >
        {text}
      </div>
    </div>
  );
};
