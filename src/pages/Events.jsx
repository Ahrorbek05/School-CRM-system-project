import React, { useState } from 'react';

function Events() {
  const eventsList = [
    { name: 'Sport Musobaqasi', date: '2024-10-15', description: 'Maktab o’quvchilari o’rtasida sport musobaqasi.' },
    { name: 'Fanlar Haftaligi', date: '2024-11-01', description: 'Har xil fanlar bo’yicha o’tkaziladigan tadbirlar.' },
    { name: 'Yangi Yil Bayrami', date: '2024-12-25', description: 'Yangi yilni nishonlash bayrami.' },
  ];

  const [message, setMessage] = useState('');

  const addToCalendar = (event) => {
    // Bu yerda kalendar integratsiyasi amalga oshiriladi (Google Calendar yoki iCal link)
    setMessage(`${event.name} muvaffaqiyatli kalendaringizga qo'shildi!`);
  };

  return (
    <div className="max-w-4xl mt-8 mb-8 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Maktab Tadbirlar Kalendar</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Tadbirlar Ro'yxati</h3>
        <ul className="space-y-4">
          {eventsList.map((event, index) => (
            <li key={index} className="bg-gray-100 cursor-pointer p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold">{event.name}</h4>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
                <button
                  onClick={() => addToCalendar(event)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Kalendarga qo'shish
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {message && (
        <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
          {message}
        </div>
      )}
    </div>
  );
}

export default Events;
