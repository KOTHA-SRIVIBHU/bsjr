import React from 'react'

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "./assets/fntstamp.png",
      title: "College Entrance View",
      description: "Beautiful exterior view of our college building showcasing the architectural design."
    },
    {
      id: 2,
      image: "./gallery/chemlab.png",
      title: "Chemistry Laboratory",
      description: "State-of-the-art chemistry lab with safety equipment and apparatus for conducting experiments."
    },
    {
      id: 3,
      image: "./gallery/classroom.png",
      title: "Classroom",
      description: "Modern classroom equipped with comfortable seating arrangements."
    },
    {
      id: 5,
      image: "./gallery/complab.png",
      title: "Computer Laboratory",
      description: "Advanced computer lab with latest hardware and software for practical computer science education."
    },
    {
      id: 6,
      image: "./gallery/libary.png",
      title: "College Library",
      description: "Spacious library with vast collection of books, journals, and digital resources."
    },
    {
      id: 7,
      image: "./gallery/phylab.png",
      title: "Physics Laboratory",
      description: "Well-maintained physics lab with modern equipment for conducting physics experiments."
    },
    {
      id: 8,
      image: "./gallery/seminarhall.png",
      title: "Seminar Hall",
      description: "Large seminar hall for conducting academic events, conferences, and student presentations."
    },
    {
      id: 4,
      image: "./gallery/botlab.png",
      title: "Botany Laboratory",
      description: "Well-equipped botany lab with modern microscopes and specimens for practical botanical studies."
    },
    {
      id: 9,
      image: "./gallery/zoolab.png",
      title: "Zoology Laboratory",
      description: "Comprehensive zoology lab with specimens and equipment for biological studies."
    }
  ];

  return (
    <div className="py-8 px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-8">College Infrastructure</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="relative h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
