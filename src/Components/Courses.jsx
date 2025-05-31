import React from 'react'

const Courses = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Academics</h2>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col gap-8">
          {/* Intermediate Section */}

          {/* Degree Section */}
          <div className="card md:flex-row bg-base-100 shadow-xl">
            <figure className="md:w-2/5 min-h-[200px]">
              <img
                src="./assets/archstamp.png"
                alt="Degree Building"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body md:w-3/5 p-8">
              <div>
                <h2 className="card-title text-xl">Degree</h2>
                <div className="divider my-2"></div>
                <h3 className="font-semibold mb-3">Courses Offered:</h3>
                <ul className="menu bg-base-200 rounded-box p-2">
                  <li><a className="text-sm py-2 hover:bg-error hover:text-white">B.Sc. Honours (Mathematics, Physics, Chemistry)</a></li>
                  <li><a className="text-sm py-2 hover:bg-error hover:text-white">B.Sc. Honours (Computer Science)</a></li>
                  <li><a className="text-sm py-2 hover:bg-error hover:text-white">B.Sc. Honours (Botany, Zoology)</a></li>
                  <li><a className="text-sm py-2 hover:bg-error hover:text-white">B.Com. Honours (Computer Applications)</a></li>
                  <li><a className="text-sm py-2 hover:bg-error hover:text-white">B.A. Honours (History, Economics)</a></li>
                </ul>
              </div>
              <div className="card-actions justify-end mt-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses 