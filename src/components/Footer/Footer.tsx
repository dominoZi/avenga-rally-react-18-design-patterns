import "./Footer.styles.css";

export const Footer = () => {
  return (
    <footer className="Footer-root">{`© ${new Date().getFullYear()} Avenga. All rights reserved.`}</footer>
  );
};
