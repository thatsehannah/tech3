import { InputField, TextareaField } from "@/components";
import React from "react";

export const Contact = () => {
  return (
    <section id='contact'>
      <div className='bg-background2 py-42 flex justify-center items-center'>
        <div className='mx-auto w-3/5 flex flex-col items-center justify-center ring-1 ring-white/20 rounded-2xl p-12 shadow-lg shadow-accent2/70'>
          <p className='text-5xl font-main font-bold mb-4'>
            Let&apos;s Build Something{" "}
            <span className='text-accent2'>Electric</span>
          </p>
          <p className='text-gray-300 font-main text-lg'>
            Ready to start your project? Drop us a line.
          </p>
          <div className='mt-12 flex flex-col w-full gap-8'>
            <div className='flex justify-between gap-3 w-full'>
              <InputField
                label='name'
                type='text'
                id='name'
                name='name'
                placeholder='Tommy Vercetti'
              />
              <InputField
                label='email'
                type='email'
                id='email'
                name='email'
                placeholder='tommyv@gmail.com'
              />
            </div>
            <div>
              <TextareaField
                label='message'
                id='message'
                name='message'
                placeholder='Tell us about your project...'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
