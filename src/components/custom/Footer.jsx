import { FaFacebook, FaInstagram, FaQuora, FaRedditAlien } from "react-icons/fa";

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

        {/* Navigation Links & Service Images */}
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

          {/* 📷 Service-Related Photos Placeholder */}
          <div className="mt-6">
            <h4 className="text-md font-semibold mb-2">Our Work</h4>
            <div className="grid grid-cols-3 gap-2">
              <img src="/images/service1.jpg" alt="Service 1" className="rounded" />
              <img src="/images/service2.jpg" alt="Service 2" className="rounded" />
              <img src="/images/service3.jpg" alt="Service 3" className="rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* 🌐 Languages */}
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

      {/* 🌍 Social Media Icons */}
      <div className="mt-10 text-center flex justify-center gap-6 text-2xl text-gray-300">
        <a
          href="https://www.reddit.com/user/Puzzled_Wear5953/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          title="Reddit"
        >
          <FaRedditAlien />
        </a>
        <a
          href="https://bn.quora.com/profile/Imagefix-Lab"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          title="Quora"
        >
          <FaQuora />
        </a>
        <a
          href="https://www.instagram.com/imag_efix/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61577883789933"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          title="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      {/* 📄 Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © Copyright 2025 Fixthephoto.com | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
