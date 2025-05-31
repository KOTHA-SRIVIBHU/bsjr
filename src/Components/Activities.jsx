import React from 'react'

const Activities1 = () => {
  const activities = [
    { id: 1, image: "./Activities/i1.png" },
    { id: 2, image: "./Activities/i2.png" },
    { id: 3, image: "./Activities/i3.png" },
    { id: 4, image: "./Activities/i4.png" },
    { id: 5, image: "./Activities/i5.png" },
    { id: 6, image: "./Activities/i6.png" },
    { id: 7, image: "./Activities/i7.png" },
    { id: 8, image: "./Activities/i8.png" },
    { id: 9, image: "./Activities/i9.png" }
  ];

  return (
    <div className="py-8 px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-8">College Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="relative h-48">
              <img
                src={item.image}
                alt={`Activity ${item.id}`}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activities1
