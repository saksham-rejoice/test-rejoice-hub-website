import { redirect } from "react-router";

// List of allowed routes that should not be redirected
const ALLOWED_ROUTES = [
  "/agent-kit-builder",
  "/our-service/ai-ml-development-services",
  "/services/ai-ml-development-services",
  "/our-service/iot-development-services",
  "/our-service/web-development-services",
  "/our-service/digital-marketing",
  "/our-service/web-and-mobile-development",
  "/our-service/iot-services",
  "/blogs/website-development-and-seo-services",
  "/blogs/top-seo-strategies-to-boost-your-website-traffic",
  "/our-service/ui-ux-design",
  "/contact-us",
  "/solutions/personas",
  "/our-service/devops-services",
  "/sitemap.xml",
  "/resources/case-studies",
  "/tools/ai-assessment-tools",
  "/tools/ai-readiness-assessment",
  "/tools/no-code-tools",
  "/tools/ai-calculators",
  "/our-service/ui-ux-design-services",
  "/tools/code-generators",
  "/tools/ai-agent-generator",
  "/blogs/strategic-ui-ux-designing-impactful-experiences",
  "/our-service/open-source-consulting"
];

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Check if the current path is in the allowed routes
  const isAllowed = ALLOWED_ROUTES.some(route => 
    path === route || path.startsWith(route + '/')
  );
  
  // If not in allowed routes, redirect to home
  if (!isAllowed) {
    return redirect("/");
  }
  
  // For allowed routes, let the server handle the response
  return null;
}

export async function action() {
  return redirect("/");
}

export default function NotFound() {
  return redirect("/");
}