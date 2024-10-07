import React, { useState } from 'react';

function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    documents: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ariza yuborildi:', formData);
  };

  return (
    <div className="max-w-2xl mt-8 mb-8 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Qabul va Kirish Talablari</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Qabul Jarayoni</h3>
        <p className="text-gray-600">
          Maktabga qabul qilish uchun quyidagi hujjatlar talab qilinadi:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-600">
          <li>Shaxsiy hujjatlar (pasport yoki ID karta)</li>
          <li>O'quv yili davomida to'ldirilgan tibbiy ma'lumotnoma</li>
          <li>Ilgari o'qigan maktabdan ko'chirma (agar mavjud bo'lsa)</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Ariza Shakli</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600">F.I.O</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ismingizni kiriting"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600">Elektron Pochta</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email manzilingizni kiriting"
              required
            />
          </div>

          <div>
            <label htmlFor="documents" className="block text-gray-600">Kerakli Hujjatlar</label>
            <input
              type="text"
              name="documents"
              value={formData.documents}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Kerakli hujjatlar haqida ma'lumot"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-600">Qo'shimcha Xabar</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Qo'shimcha xabar yoki savol yozing"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-blue-600 transition duration-300"
          >
            Arizani Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admissions;
