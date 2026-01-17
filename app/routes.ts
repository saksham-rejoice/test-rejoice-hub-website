import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    // route(".well-known/appspecific/com.chrome.devtools.json", "routes/devtools-handler.tsx"),

    route("ai-calculators", "routes/ai-roi-calculator.tsx"),
    route("free-ai-assessment", "routes/free-ai-assessment.tsx"),

    route("company", "routes/company/index.tsx"),
    route("about-us", "routes/company/about.tsx"),
    route("team", "routes/company/team.tsx"),
    route("press", "routes/company/press.tsx"),
    route("partners", "routes/company/partners.tsx"),
    route("career", "routes/company/career.tsx"),
    route("job-details/:slug", "routes/company/career/[slug].tsx"),
    route(
      "job-details/:slug/questions",
      "routes/company/career/[slug]/questions.tsx"
    ),
    route("contact", "routes/company/contact.tsx"),
    route("/solutions/call-agent", "routes/call-agent-new.tsx"),
    route("/solutions/upwork-agent", "routes/upwork-agent-new.tsx"),
    route("/solutions/ai-studio", "routes/ai-studio.tsx"),
    route("/solutions/hr-agent", "routes/hr-agent.tsx"),

    route("resources", "routes/resources/index.tsx"),
    route("latest-news", "routes/resources/latest-news.tsx"),
    route("latest-news/:slug", "routes/resources/latest-news/[slug].tsx"),
    route("blogs", "routes/resources/blogs.tsx"),
    route("blogs/:slug", "routes/resources/blogs/[slug].tsx"),
    route("case-studies", "routes/resources/case-studies.tsx"),
    route("case-studies/:slug", "routes/resources/case-studies/[slug].tsx"),
    route("docs", "routes/resources/docs.tsx"),
    route("whitepapers", "routes/resources/whitepapers.tsx"),

    route("sitemap.xml", "routes/sitemap.xml/index.ts"),

    route("tools", "routes/tools/index.tsx"),
    route("no-code-tools", "routes/tools/no-code-tools.tsx"),
    route("no-code-tools/:slug", "routes/tools/no-code-tools/[slug].tsx"),
    route("open-source-tools", "routes/tools/open-source-tools.tsx"),
    route(
      "open-source-tools/:slug",
      "routes/tools/open-source-tools/[slug].tsx"
    ),

    route("services", "routes/services/index.tsx"),
    route("services/:serviceId", "routes/services/serviceId.tsx"),
    route(
      "services/ai-agentkit-builder-services",
      "routes/agent-kit-builder.tsx"
    ),
    route(
      "services/chatgpt-customize-services",
      "routes/chatgpt-ai-solutions.tsx"
    ),
    route(
      "services/vibe-coding-development-company",
      "routes/vibe-coding-company.tsx"
    ),

    route("solutions", "routes/solutions/index.tsx"),
    route("solutions/persona", "routes/solutions/persona.tsx"),
    route("solutions/:solutionId", "routes/solutions/solutionId.tsx"),

    route("privacy-policy", "routes/privacy-policy.tsx"),
    route("terms-and-conditions", "routes/terms-and-conditions.tsx"),
    route("company/career/apply/:id", "routes/company/career/apply/[id].tsx"),
    route(
      "solutions/learning-experience-platform",
      "routes/learning-experience-platform.tsx"
    ),
    route(
      "services/fintech-software-development",
      "routes/fintech-software-development.tsx"
    ),
    route(
      "solutions/smart-call-automation",
      "routes/smart-call-automation.tsx"
    ),
    route(
      "solutions/real-estate-management-system",
      "routes/real-estate-management-system.tsx"
    ),
    route(
      "solutions/restaurant-management-system",
      "routes/restaurant-management-system.tsx"
    ),

    route("*", "routes/_404.tsx"),
  ]),
] satisfies RouteConfig;
