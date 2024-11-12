import React from 'react';

type Social = {
  name: string;
  url: string;
  color: string;
};

const socials: Social[] = [
  { name: 'X', url: 'https://x.com/joaodotcodes', color: 'text-[#FF6B6B]' },
  { name: 'github', url: 'https://github.com/nocategory', color: 'text-[#2ECDC2]' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/jfilsalgueiro/', color: 'text-[#21d286]' },
  { name: 'polywork', url: 'https://www.polywork.com/joaodotcodes', color: 'text-[#8e99ed]'},
  { name: 'bluesky', url: 'https://bsky.app/profile/joao.codes', color: 'text-[#2153ff]'}
];

export default function SocialLinks() {
  return (
    <nav>
      <ul className="flex gap-6 text-lg">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              className={`${social.color} hover:text-blue-400 transition-colors`}
            >
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}