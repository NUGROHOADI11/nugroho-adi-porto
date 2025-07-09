import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-transparent border-t text-white py-4 mt-8">
      <div className=" mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Nugroho Adi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
