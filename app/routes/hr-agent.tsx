import React from 'react'
import { MetaFunction } from 'react-router';
import HRAgentPage from '~/sections/hr-agent/index'
import { WEB_URL } from "~/utils/config";

export const meta: MetaFunction = () => [
  {
    title: "AI HR Agent Solution – Automate Recruitment & HR Tasks | RejoiceHub",
  },
  {
    name: "description",
    content: "Boost HR productivity with a smart AI Agent that handles resume screening, onboarding, employee queries, documentation, and HR admin — 24/7 support.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/solutions/hr-agent`,
  },
];

function HRAgent() {
  return (
    <div><HRAgentPage/></div>
  )
}

export default HRAgent