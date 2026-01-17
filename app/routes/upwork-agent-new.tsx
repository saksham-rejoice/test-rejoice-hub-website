import React from 'react';
import { MetaFunction } from 'react-router';
import UpworkAgentPage from '~/sections/upworkAgentPage';
import { WEB_URL } from '~/utils/config';

export const meta: MetaFunction = () => [
  {
    title: 'Upwork Agent — AI Job Matching & Proposals | RejoiceHub',
  },
  {
    name: 'description',
    content: 'Automate Upwork job evaluation, smart proposals & team assignment with RejoiceHub\'s AI Upwork Agent — faster responses and more wins.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${WEB_URL}/solutions/upwork-agent`,
  },
];

function upworkAgent() {
  return (
    <div><UpworkAgentPage/></div>
  )
}

export default upworkAgent