import React from 'react';
import { MetaFunction } from 'react-router';
import CallAgentPage from '~/sections/callAgentPage';
import { WEB_URL } from '~/utils/config';

export const meta: MetaFunction = () => [
  {
    title: 'AI Call Agent Solution – 24/7 Automated Calling | RejoiceHub',
  },
  {
    name: 'description',
    content: 'Automate inbound and outbound calls with RejoiceHub\'s AI Call Agent. Handle high-volume calls 24/7, qualify leads, and boost customer engagement.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${WEB_URL}/solutions/call-agent`,
  },
];

export default function callAgentNew() {
  return (
    <div>
        <CallAgentPage/>
    </div>
  )
}
