const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-gray-600 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/HarshaChiruvolu" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>

      <p className="text-white">© 2025 HarshaChiruvolu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
