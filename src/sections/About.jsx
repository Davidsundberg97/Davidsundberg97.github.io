import React from 'react'

const About = () => {
  return (
    <section className="c-space my-20 bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain rounded-md shadow-sm hover:scale-105 transition-transform duration-300"/>
          </div>
        </div>
        <div className="col-span-2 xl:row-span-3 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
          <p className="text-lg text-gray-700 text-center">
            I am a software developer based in Norrköping, Sweden. With 4 years of developer experience, I have worked on a wide range of projects, from web applications to desktop applications. I am passionate about building software that is both user-friendly and scalable.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About