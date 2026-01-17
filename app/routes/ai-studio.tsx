import React from 'react';
import { MetaFunction } from 'react-router';
import AIStudioPage from '~/sections/ai-studio';
import { WEB_URL } from '~/utils/config';

export const meta: MetaFunction = () => [
  {
    title: 'AI Studio – Create Product & Model Images Without Photoshoots | RejoiceHub',
  },
  {
    name: 'description',
    content: 'Generate professional product, lifestyle, and model images with AI Studio by RejoiceHub. Perfect for marketing teams, brands, and online stores.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${WEB_URL}/solutions/ai-studio`,
  },
];

function aiStudio() {
  return (
    <div>
      <AIStudioPage/>
    </div>
  )
}

export default aiStudio