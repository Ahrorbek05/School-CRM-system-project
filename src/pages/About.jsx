import React from 'react';

function About() {
  const schoolHistory = `
    Maktab tarixi: Maktabning tarixiy rivojlanishi va yutuqlari haqida ma'lumot. 
    Maktab 1990-yilda tashkil etilgan va o'sha davrdan buyon o'z faoliyatini davom ettirmoqda.
    Maktabda zamonaviy o'quv dasturlari va innovatsion ta'lim uslublari joriy etilgan.
  `;

  const schoolMission = `
    Maktab maqsadi va missiyasi: Maktabning maqsadlari, missiyasi va ta'lim falsafasi. 
    Maktabimiz ta'limni sifatli, zamonaviy va innovatsion uslublar bilan berishni maqsad qiladi.
    O'quvchilarga keng qamrovli bilim va ko'nikmalar berish, ularni hayotga tayyorlash.
  `;

  const management = `
    Rahbariyat: Maktab direktori va boshqa boshqaruv xodimlari haqida ma'lumot. 
    Maktab direktori: Janob X, o'qituvchilarning tajribasi va bilimini boshqaradi.
    Boshqa boshqaruv xodimlari: Maktab psixologi, metodistlar va boshqalar.
  `;

  const teachers = [
    { name: 'Oqituvchi A', subject: 'Matematika', photo: 'link_to_photo_A' },
    { name: 'Oqituvchi B', subject: 'Ona tili', photo: 'link_to_photo_B' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
    { name: 'Oqituvchi C', subject: 'Tarix', photo: 'link_to_photo_C' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Maktab Tarixi</h2>
      <p className="text-gray-700 mb-6">{schoolHistory}</p>

      <h2 className="text-2xl font-bold mb-4 text-center">Maktab Maqsadi va Missiyasi</h2>
      <p className="text-gray-700 mb-6">{schoolMission}</p>

      <h2 className="text-2xl font-bold mb-4 text-center">Rahbariyat</h2>
      <p className="text-gray-700 mb-6">{management}</p>

      <h2 className="text-2xl font-bold mb-4 text-center">O'qituvchilar Jamoasi</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
            <img src={teacher.photo} alt={teacher.name} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">{teacher.name}</h3>
              <p className="text-gray-600">Fan: {teacher.subject}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
