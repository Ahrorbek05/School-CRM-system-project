import React from 'react';

function ForParents() {
  return (
    <div className="max-w-7xl mx-auto p-6 mb-8 mt-8 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Ota-onalar Uchun</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ota-onalar kabineti */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Ota-onalar kabineti</h3>
          <p className="text-gray-600">
            Bolalaringizning o'qish holati, baholari, va maktabdagi ishtiroki haqida ma'lumot olish uchun shaxsiy kabinet. Kundalik kuzatuv va hisobotlarga kirishingiz mumkin.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Kabinetga Kirish
          </button>
        </div>
        
        {/* Ota-onalar uchun qo'llanmalar */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Ota-onalar uchun qo'llanmalar</h3>
          <p className="text-gray-600">
            Bolalaringizni o'qishda qanday qo'llab-quvvatlash haqida maslahatlar va resurslar. Bu qo'llanmalar bolalarning rivojlanishiga yordam berish uchun mo'ljallangan.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Qo'llanmalarni O'rganish
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForParents;
