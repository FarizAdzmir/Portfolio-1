"use client";
import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section
      id='contact'
      className='max-w-wcontentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >
      <h2 className='text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 items-center tracking-wide'>Let&apos;s Connect</h2>
      <p className='max-w-[600px] text-center text-textDark'>
        I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <div className="flex flex-col md:flex-row justify-start items-start gap-6">
        <div className="flex items-center gap-8 mb-6">
          <a
            href="https://github.com/farizadzmir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image src="/github.png" width={70} height={70} alt="GitHub" />
          </a>
          <a
            href="https://linkedin.com/in/farizulhilmy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image src="/linkedin.png" width={70} height={70} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
