import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Brand & Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-orange-400">Restaurant</h2>
          <p className="text-sm mt-1 text-gray-400">
            © {currYear} — Built with 💗 by{" "}
            <span className="text-white font-medium">Sayak</span>. All rights
            reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition duration-200"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
