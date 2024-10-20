import React, { useState } from 'react';
import photo from '../../public/school.jpg';
import { Transition } from '@headlessui/react';

function About() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    {
      name: 'O\'qituvchi A',
      subject: 'Matematika',
      photo: photo,
      bio: 'O\'qituvchi A matematikadan katta tajribaga ega, 10 yillik staj.',
      achievements: 'Yilning eng yaxshi o\'qituvchisi 2020.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
    {
      name: 'O\'qituvchi B',
      subject: 'Ona tili',
      photo: photo,
      bio: 'O\'qituvchi B ona tili va adabiyotdan dars beradi, 7 yillik tajriba.',
      achievements: 'Adabiyot bo\'yicha ko\'plab nashrlar muallifi.',
    },
  ];

  const closeModal = () => setSelectedTeacher(null);

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Maktab Tarixi</h2>
      <p className="text-gray-700 mb-6">Maktabning tarixiy rivojlanishi va yutuqlari...</p>

      <h2 className="text-2xl font-bold mb-4 text-center">O'qituvchilar Jamoasi</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedTeacher(teacher)}>
            <img src={teacher.photo} alt={teacher.name} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">{teacher.name}</h3>
              <p className="text-gray-600">Fan: {teacher.subject}</p>
            </div>
          </li>
        ))}
      </ul>

      {selectedTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Transition
            show={!!selectedTeacher}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
              <div className="p-6 flex flex-col items-center">
                <img
                  src={selectedTeacher.photo}
                  alt={selectedTeacher.name}
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{selectedTeacher.name}</h2>
                <p className="text-gray-600 mb-4">{selectedTeacher.subject}</p>
                <p className="text-gray-700 mb-2">{selectedTeacher.bio}</p>
                <p className="text-gray-500 text-sm italic">{selectedTeacher.achievements}</p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Yopish
                </button>
              </div>
            </div>
          </Transition>
        </div>
      )}
    </div>
  );
}

export default About;
