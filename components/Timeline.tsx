import { ReactNode } from "react";

export const Timeline = <T,>({
  items,
  renderItem,
}: {
  items: T[];
  renderItem: (item: T) => ReactNode;
}) => {
  return (
    <div className='relative mt-24'>
      <div className='absolute lg:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-linear-to-b from-neutral-600 to-transparent' />

      <div className='flex flex-col gap-12 xl:gap-14 2xl:gap-16'>
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className='relative flex items-start'
            >
              {/* Left side content */}
              {isLeft && (
                <div className='flex justify-start w-full pl-6 lg:pl-0 lg:pr-12 2xl:pr-24 pt-6'>
                  {renderItem(item)}
                </div>
              )}

              {/* Center dot */}
              <div className='absolute lg:left-1/2 -translate-x-1/2 z-10'>
                <div
                  className={`w-4 h-4 rounded-full shadow-lg ${isLeft ? "bg-accent3 shadow-accent3" : "bg-accent2 shadow-accent2"} border-2 border-background`}
                />
              </div>

              {/* Right side content */}
              {!isLeft && (
                <div className='flex justify-end w-full pl-6 lg:pl-12 2xl:pl-24 pt-6'>
                  {renderItem(item)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
