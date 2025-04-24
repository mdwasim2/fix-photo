import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {/* Email Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Send Email</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 h-24 rounded bg-gray-800 border border-gray-700 focus:outline-none resize-none"
            ></textarea>
            <div className="space-y-2 text-sm text-gray-400">
              <label className="flex items-start gap-2">
                <input type="checkbox" />
                <span>
                  By submitting the form you give us your consent to process the personal data specified by you in the fields above according to our{" "}
                  <a href="#" className="text-white underline">Privacy Policy</a>
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" />
                <span>I agree to be updated with special offers and deals from FixThePhoto.com</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full mt-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Fixthephoto</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300">
            <a href="#">Video Editing Services</a>
            <a href="#">Virtual Staging Services</a>
            <a href="#">Outsource Photo Editing</a>
            <a href="#">Retouching Tips</a>
            <a href="#">Photo Editing Freebies</a>
            <a href="#">Free Raw Images for Retouching</a>
            <a href="#">Free Photoshop Actions</a>
            <a href="#">Free Lightroom Presets</a>
            <a href="#">Affiliate Program</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Career</a>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="max-w-7xl mx-auto mt-10 text-sm text-gray-400">
        <span className="font-medium text-white">Languages: </span>
        <div className="flex flex-wrap gap-x-3 mt-2">
          {[
            "German", "Italian", "French", "Spanish", "Portuguese", "Japanese", "Arabic", "Korean", "Turkish", "Thai",
            "Chinese", "Czech", "Hungarian", "Polish", "Romanian", "Vietnamese", "Russian", "Hindi", "Indonesian",
            "Greek", "Dutch", "Danish", "Croatian", "Estonian", "Finnish", "Norwegian", "Slovenian", "Swedish", "Ukrainian"
          ].map((lang, i) => (
            <a key={i} href="#" className="text-gray-300 hover:text-white">
              {lang}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © Copyright 2025 Fixthephoto.com | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
