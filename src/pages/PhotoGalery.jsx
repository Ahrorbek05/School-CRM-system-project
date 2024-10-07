import React, { useState } from 'react';
import logo from '../../public/school.jpg';

function PhotoGallery() {
  const photos = [
    { src: logo, alt: 'Sport Tadbir', title: 'Sport Tadbir' },
    { src: logo, alt: 'Fanlar Haftaligi', title: 'Fanlar Haftaligi' },
    { src: logo, alt: 'Maktab Konserti', title: 'Maktab Konserti' },
    { src: logo, alt: 'Tadbir 4', title: 'Tadbir 4' },
    { src: logo, alt: 'Tadbir 5', title: 'Tadbir 5' },
    { src: logo, alt: 'Tadbir 6', title: 'Tadbir 6' },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-6 mb-8 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Fotogalereya</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
              <span className="text-white text-lg font-semibold">{photo.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <button
              className="absolute top-2 right-2 text-white hover:bg-red-600 rounded-full p-2"
              onClick={() => setSelectedPhoto(null)}
            >
              ✖
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{selectedPhoto.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
