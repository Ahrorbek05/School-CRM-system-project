import React from 'react';

function ForStudents() {
  const resources = [
    'Onlayn kundalik',
    'Uy vazifalari',
    'Dars jadvali',
    'Sinov natijalari',
    'Elektron kitoblar',
    'Darsliklar',
    'Boshqa o\'quv materiallar',
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">O'quvchilar Uchun</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">O'quvchilar Kabineti</h3>
        <p className="text-gray-600">
          O'quvchilar o'z shaxsiy kabinetlarida quyidagi funksiyalarni topishlari mumkin:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          {resources.map((resource, index) => (
            <li key={index} className="text-gray-600">{resource}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Resurslar</h3>
        <p className="text-gray-600">
          Maktabda mavjud bo'lgan o'quv resurslari:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li className="text-gray-600">Elektron kitoblar</li>
          <li className="text-gray-600">Darsliklar</li>
          <li className="text-gray-600">Boshqa o'quv materiallar</li>
        </ul>
      </div>
    </div>
  );
}

export default ForStudents;
