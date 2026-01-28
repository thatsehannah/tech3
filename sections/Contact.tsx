import { ContactForm } from "@/components";
import React from "react";

export const Contact = () => {
  return (
    <section id='contact'>
      <div className='bg-background2 py-42 flex justify-center items-center'>
        <div className='mx-auto w-2/5 flex flex-col items-center justify-center ring-1 ring-neutral-700 rounded-2xl p-12 shadow-lg shadow-accent2/70'>
          <p className='text-4xl font-main font-bold mb-4'>
            Let&apos;s Build Something{" "}
            <span className='text-accent2'>Electric</span>
          </p>
          <p className='text-neutral-400 font-main text-lg'>
            Ready to start your project? Drop us a line.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
