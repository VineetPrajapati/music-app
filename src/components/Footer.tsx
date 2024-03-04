import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="w-full my-20  gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-12">
        <div>
          <h2 className="text-white text-2xl font-bold">About Us</h2>
          <p className="pr-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nuture telent from the ground up, rostering
            a vibrant community of musician
          </p>
        </div>
        <div className=" grid grid-col-1">
          <h2 className="text-white text-2xl font-bold">Quick Links</h2>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Courses</a>
          <a href="#">Contact</a>
        </div>
        <div className="grid grid-cols-1 ">
          <h2 className="text-white text-2xl font-bold">Follow Us</h2>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold">Contact Us</h2>
          <p>New Delhi, India(10001)</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      <p className="text-center mb-2">© 2024 Music School. All right served</p>
    </footer>
  );
}

export default Footer;
