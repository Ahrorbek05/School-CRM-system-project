import React, { useState } from 'react';

function News() {
  const [newsList] = useState([
    {
      title: "Yangi O'quv Yili Boshlanishi",
      date: "2024-09-01",
      content: "Maktabimizda yangi o'quv yili boshlandi. O'quvchilar va o'qituvchilarimizga omad tilaymiz!",
    },
    {
      title: "Maktabda Sport Musobaqalari",
      date: "2024-10-15",
      content: "Maktabimizda katta sport musobaqalari bo'lib o'tdi. G'oliblarga tabriklar!",
    },
    {
      title: "Fanlar Haftaligi",
      date: "2024-11-01",
      content: "Fanlar haftaligi doirasida o'quvchilarimiz fan bo'yicha o'z mahoratlarini namoyish etadilar.",
    },
  ]);

  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="max-w-4xl mb-8 mt-8 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Maktab Yangiliklari</h2>

      <div className="grid gap-6">
        <div className="space-y-4">
          {newsList.map((news, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedNews(news)}
            >
              <h3 className="text-lg font-bold">{news.title}</h3>
              <p className="text-gray-500">{news.date}</p>
              <p className="mt-2 text-gray-700">{news.content.slice(0, 80)}...</p>
            </div>
          ))}
        </div>

        {selectedNews && (
          <div className="mt-6 p-4 bg-blue-100 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold">{selectedNews.title}</h3>
            <p className="text-gray-500">{selectedNews.date}</p>
            <p className="mt-4 text-gray-700">{selectedNews.content}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={() => setSelectedNews(null)}
            >
              Orqaga qaytish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default News;
