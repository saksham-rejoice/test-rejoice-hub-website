import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "~/components/layout/navigation";
import Footer from "~/components/layout/footer";
import BackgroundPattern from "~/components/ui/BackgroundPattern";

// Map of URLs that need to be redirected
const REDIRECTS: Record<string, string> = {
  "/partners/": "/partners",
  "/company/": "/company",
  "/solutions/": "/solutions"
};

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isApplyRoute = location.pathname.startsWith('/company/career/apply');

  useEffect(() => {
    // Check if the current path needs to be redirected
    const redirectPath = REDIRECTS[location.pathname];
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen">
      {!isApplyRoute && <Navigation />}
      <main>
        <Outlet />
      </main>
      {!isApplyRoute && <Footer />}
    </div>
  );
}