import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto max-w-[1024px] px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Biz bilan bog'laning</h2>
          <p className="mt-2">Maktabimiz haqidagi yangiliklar va e'lonlar uchun ijtimoiy tarmoqlarda bizni kuzatib boring!</p>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://t.me/+RQtg2mwyRqC2U7_3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTelegram className="text-2xl" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Bizning Maktabimiz. Barcha huquqlar himoyalangan.</p>
          <p>Maktab: 10, Tog'liq, Farg'ona shahar, O'zbekiston</p>
          <p>Tel: (123) 456-7890 | Email: info@school.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
