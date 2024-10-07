import React from 'react';
import logo from '../../public/logo.webp';
import School from '../../public/school.jpg';

function Home() {
  return (
    <div>
      <section className="relative">
        <img src={School} alt="School Banner" className="w-full h-[400px] object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <img src={logo} alt="School Logo" className="h-20 w-20 mx-auto rounded-full mb-4" />
            <h1 className="text-4xl font-bold">Bizning Maktabimiz</h1>
            <p className="text-lg mt-2">Sizning farzandingiz kelajagi uchun eng yaxshi tanlov!</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 text-center max-w-[1024px]">
        <h2 className="text-3xl font-semibold mb-6">Maktab haqida umumiy ma'lumot</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Bizning maktabimiz o'quvchilarimizga yuqori sifatli ta'lim va bilimlarni yetkazish uchun barcha imkoniyatlarga ega.
          Bizning maqsadimiz har bir o'quvchining individual ehtiyojlariga moslashish va ularga kelajakda muvaffaqiyat qozonish uchun asosiy bilimlarni berishdir.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto max-w-[1024px] px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">E'lonlar va Yangiliklar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Maktabdagi Yangi Tadbir</h3>
              <p className="text-gray-700">
                Bizning maktabda o'quvchilar uchun sport musobaqalari tashkil qilinmoqda. Barcha o'quvchilar va ota-onalarni ushbu tadbirga taklif etamiz!
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Yangi dars jadvali e'lon qilindi</h3>
              <p className="text-gray-700">
                O'quvchilar va ota-onalar diqqatiga! Yangi o'quv yilining dars jadvali e'lon qilindi. Uni maktab saytida yuklab olishingiz mumkin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-[1024px] px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Xizmatlar va Tadbirlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Ta'lim Xizmatlari</h3>
              <p className="text-gray-700">
                Yuqori malakali o'qituvchilarimiz bilan yuqori sifatli ta'lim olish imkoniyati.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Sport Mashg'ulotlari</h3>
              <p className="text-gray-700">
                Maktabda o'quvchilar uchun turli sport musobaqalari va to'garaklar tashkil etiladi.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Qo'shimcha Mashg'ulotlar</h3>
              <p className="text-gray-700">
                O'quvchilarning qiziqishlariga mos ravishda qo'shimcha darslar va kurslar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
