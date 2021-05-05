import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const prevScrollY = useRef(0);
  const [pos, setPos] = useState(false);
  const [pagePos, setPagePos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && pos) {
        setPos(false);
      }
      if (prevScrollY.current > currentScrollY && !pos) {
        setPos(true);
      }
      prevScrollY.current = currentScrollY;
      setPagePos(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pos]);

  const pages = [
    { section: "hero", label: "Home" },
    { section: "about", label: "About" },
    { section: "features", label: "Features" },
    { section: "clients", label: "Partners" },
  ];

  return (
    <header
      id="header"
      className={
        pagePos === 0 ? "header fixed-top" : "header fixed-top header-scrolled"
      }
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="#hero" className="scrollto logo d-flex align-items-center">
          <span>MDI</span>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            {pages.map((x, i) => (
              <li key={i}>
                <Link
                  to={x.section}
                  className="nav-link scrollto"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {x.label}
                </Link>
              </li>
            ))}
            <li>
              <a className="getstarted" href="/admin/overview">
                Admin
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
