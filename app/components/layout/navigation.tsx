import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "~/constant/navitem";
import type { Section, SubItem } from "~/constant/navitem";
import { ChevronDown, X, Menu, ExternalLink, Phone } from "lucide-react";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navBaseClass = `top-0 left-0 right-0 z-10 transition-all duration-500 backdrop-blur-sm`;
  const navBgClass = isHomePage ? (isScrolled ? "" : "") : "";
  const navPosition = isHomePage ? "fixed" : "fixed";

  const logoSrc =
    isHomePage && !isScrolled ? "/rejoice-logo.svg" : "/rejoice-logo.svg";

  const renderMegaMenu = (item: any) => {
    if (!item.subItems) return null;

    const isMultiColumn = "title" in (item.subItems[0] || {});

    return (
      <div
        className="fixed left-0 right-0 top-full bg-white rounded-2xl shadow-2xl z-10"
        onMouseEnter={() => setActiveDropdown(item.label)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="w-full px-6 lg:px-8 py-12">
          {isMultiColumn ? (
            <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
              {(item.subItems as Section[]).map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-amber-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center text-lg">
                          {typeof subItem.icon === "string" ? (
                            <img
                              src={subItem.icon}
                              alt=""
                              className="w-5 h-5"
                            />
                          ) : (
                            subItem.icon
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                            {subItem.label}
                          </div>
                          {subItem.description && (
                            <div className="text-sm text-gray-500 mt-1">
                              {subItem.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
              {(item.subItems as SubItem[]).map((subItem, index) => (
                <Link
                  key={index}
                  to={subItem.href}
                  className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-amber-50 transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center text-2xl">
                    {subItem.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {subItem.label}
                    </div>
                    {subItem.description && (
                      <div className="text-sm text-gray-500 mt-1">
                        {subItem.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Featured CTA */}
          <div className="mt-8 pt-8 border-t border-gray-100 max-w-7xl mx-auto">
            <div className="bg-primary-200 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span>🚀</span> Ready to Transform Your Business?
                  </h4>
                  <p className="text-white">
                    Get your free AI consultation and custom transformation
                    roadmap
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+919825122840"
                    className="px-4 py-2 text-white border border-white font-medium rounded-lg hover:bg-primary-100 hover:border-primary-100 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Call Now
                    </div>
                  </a>
                  <a
                    href="https://calendly.com/dipak-rejoicehub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all flex items-center space-x-2 shadow-lg"
                  >
                    <span>Book Free Consultation</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" w-full">
      <nav
        className={`${navBaseClass} ${navBgClass} ${navPosition} container-lg mt-3 rounded-full`}
      >
        <div className="">
          <div className="bg-primary rounded-full py-3 px-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <img
                  src={logoSrc}
                  alt="Rejoicehub"
                  className="xl:max-w-[210px] max-w-[180px] max-mobile:max-w-[180px]"
                  onError={(e) => {
                    if (logoSrc.includes("white")) {
                      e.currentTarget.src = "/rejoice-main-logo.svg";
                    }
                  }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.href ? (
                      <Link
                        to={item.href}
                        className={`xl:px-4 xl:py-3 p-2 text-base font-semibold rounded-xl transition-all duration-300 flex items-center group ${
                          isHomePage && !isScrolled
                            ? "text-white hover:text-white hover:bg-white/10"
                            : "text-white hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                        {item.subItems && (
                          <ChevronDown
                            className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </Link>
                    ) : (
                      <button
                        className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center group ${
                          isHomePage && !isScrolled
                            ? "text-white/90 hover:text-white hover:bg-white/10"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                        {item.subItems && (
                          <ChevronDown
                            className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>
                    )}

                    {/* Extra hover area */}
                    {item.subItems && (
                      <div className="absolute top-full left-0 right-0 h-4 bg-transparent"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex items-center space-x-3">
                <a
                  href="tel:+919825122840"
                  className="xl:px-4 xl:py-2 p-2 font-semibold text-base rounded-full transition-all duration-300 flex items-center space-x-2 text-white hover:text-amber-600"
                >
                  <Phone className="w-4 h-4" /> <span>Call Now</span>
                </a>
                <a
                  href="https://calendly.com/dipak-rejoicehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xl:py-2.5 xl:px-5 p-2 text-primary-300 bg-white flex items-center gap-2 text-base font-semibold rounded-full"
                >
                  <span>Free Consultation</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 rounded-lg transition-colors ${
                    isHomePage && !isScrolled
                      ? "text-white hover:bg-white/10"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {activeDropdown && (
          <div className="hidden lg:block">
            {renderMegaMenu(
              navItems.find((item) => item.label === activeDropdown)
            )}
          </div>
        )}

        {/* Mobile Menu */}
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-primary z-[99999] flex flex-col">
          <div className="flex justify-between items-center p-5 border-b border-[#19314b]">
            <img
              src="/rejoice-main-logo-white.png"
              alt="Rejoicehub"
              className="h-8"
            />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-lg font-medium text-light">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center py-2 cursor-pointer">
                  <Link to={item.href} className="text-xl">
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                    />
                  )}
                </div>

                {item.subItems && activeDropdown === item.label && (
                  <div className="ml-4 space-y-4 mt-2">
                    {!("title" in (item.subItems[0] || {}))
                      ? (item.subItems as SubItem[]).map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-base text-navy-900"
                          >
                            {subItem.label}
                          </Link>
                        ))
                      : (item.subItems as Section[]).map((section) => (
                          <div key={section.title}>
                            <h4 className="font-semibold text-gray-500 uppercase text-sm mt-3 pb-2">
                              {section.title}
                            </h4>
                            <div className="ml-2 space-y-3">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  to={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block text-base text-navy-900"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 space-y-3 border-t border-[#19314b] text-center">
            <Link
              to="/career"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-lg text-white"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-lg text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
