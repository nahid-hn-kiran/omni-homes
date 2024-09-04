import "./Footer.css";

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-copyright">
      <p className="copyright-text text-center">
        &copy;{currentYear} All right Reserved - Omni Homes
      </p>
    </div>
  );
};

export default FooterCopyright;
