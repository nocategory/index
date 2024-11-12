import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SocialLinks from './components/SocialLinks';

function App() {
  const [showAllWork, setShowAllWork] = useState(false);

  const workHistory = {
    recent: [
      {
        title: "Developer",
        company: "Marzee",
        period: "Mar 2022 - Present",
        description: "Developing and crafting apps for clients including Malaria No More, CreativStrategies, and Canal River Trust."
      },
      {
        title: "Advisor",
        company: "Polywork",
        period: "Feb 2021 - Present",
        description: "Providing technical guidance and strategic advice."
      }
    ],
    all: [
      {
        title: "Developer",
        company: "Marzee",
        period: "Mar 2022 - Present",
        description: "Developing and crafting apps for clients including Malaria No More, CreativStrategies, and Canal River Trust."
      },
      {
        title: "Advisor",
        company: "Polywork",
        period: "Feb 2021 - Present",
        description: "Providing technical guidance and strategic advice."
      },
      {
        title: "Software Developer",
        company: "Devv",
        period: "Jan 2019 - Feb 2019",
        description: "Full-Stack Development"
      },
      {
        title: "Frontend Developer",
        company: "REBIS Consulting",
        period: "Sep 2017 - Aug 2018",
        description: "Built websites and tools using HTML/CSS/JS, PHP, SAP Lumira, and Java for companies like Jerónimo Martins."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 font-mono p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-start gap-8 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">João Salgueiro</h1>
            <h2 className="text-xl text-zinc-400 mb-6">
              Software Engineer based in Lisbon
            </h2>
            <SocialLinks />
          </div>
          <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-zinc-800 flex-shrink-0">
            <img
              src="https://cdn.bsky.app/img/avatar/plain/did:plc:gjzsxtuednfmy7azhdl5phgn/bafkreih7ao4je2c7sdapfhyrkmlkktg4li3mmj35ukphhm7h43sshkm67m@jpeg"
              alt="João Salgueiro"
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-12">
          <section className="space-y-4">
            <p className="text-lg leading-relaxed">
              Hi there! I'm João, a passionate coder who loves creating neat UI
              experiences with a strong focus on reusability and best practices,
              whether in professional projects, open-source or when advising
              companies.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond the screen, I also love the simplicity and joy of nature
              🌳, the chilling cold from winters, the warmth from a good cup of
              tea 🍵, reading, yoga, and meditation 🧘 - all of which help me
              maintain a balanced lifestyle.
            </p>
          </section>

          {/* Experience */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl text-zinc-300">Experience</h3>
              <button
                onClick={() => setShowAllWork(!showAllWork)}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors"
              >
                {showAllWork ? 'Show All' : 'Show Recent'}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showAllWork ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="space-y-6">
              {(showAllWork ? workHistory.all : workHistory.recent).map(
                (job, index) => (
                  <article
                    key={index}
                    className="border-l-4 border-blue-400 pl-4"
                  >
                    <h4 className="text-xl font-semibold">
                      {job.title}{' '}
                      <span className="text-zinc-400">@ {job.company}</span>
                    </h4>
                    <p className="text-zinc-400 mb-2">{job.period}</p>
                    <p>{job.description}</p>
                  </article>
                )
              )}
            </div>
          </section>
        </main>
        <footer>
          © 2024 João Salgueiro.{' '}
          <a href="https://github.com/nocategory/index">
            This site is open source
          </a>
          , inspired by the great work of{' '}
          <a href="https://cassidoo.co/">Cassidy Williams!</a> &lt;3
        </footer>
      </div>
    </div>
  );
}

export default App;