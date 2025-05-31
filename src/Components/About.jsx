import React from 'react'

const About = () => {
  return (
    <div className="px-4 md:px-6 py-8">
      <div className="hero bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6 py-6 px-4">
          <div className="text-center">
            <img
              src="assets/image2.png"
              className="w-[280px] h-[360px] rounded-lg shadow-lg object-cover mb-4"
              alt="Secretary & Correspondent"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Dr. KOTA MURALIDHAR</h3>
              <p className="text-gray-600 font-medium">Secretary & Correspondent</p>
              <p className="text-gray-600">BS&JR Degree College</p>
              <p className="text-gray-600">Tekkali, Srikakulam</p>
            </div>
          </div>
          <div className="lg:pr-6">
            <h1 className="text-3xl font-bold mb-4">About us</h1>
            <div className="space-y-4 max-w-2xl text-base leading-relaxed text-gray-700">
              <p className="font-medium">
                The site of the proposed BS & JR Degree college is located in an enchanting environment, 
                free from pollution, on the Srikakulam Dist - SSPuram, Akkavaram- Tekkali.
              
                The trust owns land of Prime value of an extent of 2.53 acres. The college is located 
                in one buildings constructed in the year of 1997 in a approved place. The total 2.53 
                area of these buildings is more than 40000 sft.
              
                Besides the buildings, there is lot of open space available for out door play field, etc. 
                As such, the college is located and functions in the buildings and land owned under 
                Sri Salivahana Rural Educational Society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
