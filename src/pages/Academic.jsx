import React from 'react';

function Academic() {
  const subjects = [
    {
      name: 'Matematika',
      description: 'Matematika fani arifmetik, geometriya va algebra asoslarini o\'rganadi.',
    },
    {
      name: 'Ona tili',
      description: 'Ona tili fani grammatik qoidalar va nutq madaniyatini o\'rganadi.',
    },
    {
      name: 'Tarix',
      description: 'Tarix fani insoniyat tarixidagi muhim voqealarni o\'rganadi.',
    },
    {
      name: 'Biologiya',
      description: 'Biologiya fani hayotning asosiy qonuniyatlarini o\'rganadi.',
    },
  ];

  const classes = [
    {
      grade: '1-sinf',
      subjects: 'Matematika, Ona tili, O\'zbek tili, Dasturlash',
    },
    {
      grade: '2-sinf',
      subjects: 'Matematika, Ona tili, Tarix, Biologiya',
    },
    {
      grade: '3-sinf',
      subjects: 'Matematika, Ona tili, Fizika, Biologiya',
    },
  ];

  const extracurricularActivities = [
    'Sport to\'garagi',
    'San\'at to\'garagi',
    'Dasturlash to\'garagi',
    'Musika',
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">O'quv Dasturlari</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Maktabda O'qitiladigan Fanlar</h3>
        <ul className="space-y-4">
          {subjects.map((subject, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">{subject.name}</h4>
              <p className="text-gray-600">{subject.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Sinflar Bo'yicha Darslar</h3>
        <ul className="space-y-4">
          {classes.map((classInfo, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">{classInfo.grade}</h4>
              <p className="text-gray-600">Darslar: {classInfo.subjects}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Qo'shimcha Darslar va To'garaklar</h3>
        <ul className="list-disc pl-6 space-y-2">
          {extracurricularActivities.map((activity, index) => (
            <li key={index} className="text-gray-600">{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Academic;
