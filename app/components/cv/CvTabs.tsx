"use client";

import { useEffect, useRef, useState } from "react";

const tabs = [
  { id: "education", label: "Education" },
  { id: "work", label: "Work Experience" },
  { id: "skills", label: "Technical Skills" },
  { id: "leadership", label: "Leadership & Service" },
  { id: "interests", label: "Interests" },
  { id: "references", label: "References" }
] as const;

type TabId = (typeof tabs)[number]["id"];

const skillGroups = [
  {
    label: "Languages",
    items: ["HTML", "CSS", "SQL", "JavaScript"]
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Next.js", "Tailwind CSS", "Node.js"]
  },
  {
    label: "Tools & Technologies",
    items: ["GitHub", "Figma", "PostgreSQL", "VS Code"]
  }
];

const education = [
  {
    qualification: "Bachelor of Science (Hons) in Software Engineering",
    institution: "Asia Pacific University of Technology & Innovation",
    year: "2026"
  },
  {
    qualification: "Certificate 4 in Information Technology",
    institution: "Villa College",
    year: "2022"
  },
  {
    qualification: "ABE UK Diploma Level 4 in Marketing Management",
    institution: "Clique College",
    year: "2014"
  }
];

const workExperience = [
  {
    title: "UI/UX Design & Development Intern",
    company: "PiNetworks Pvt Ltd",
    location: "Male, Maldives",
    period: "Jan-May 2025",
    responsibilities: [
      "Designed user-centered UI/UX for web applications by creating wireframes, high-fidelity mockups, and responsive front-end components.",
      "Collaborated with cross-functional teams to translate business requirements into intuitive user experiences, improve usability through iterative feedback, and contribute to MVP development, testing, and design refinement."
    ]
  },
  {
    title: "Officer, Sales",
    company: "Maldives Airports Company Limited (MACL)",
    location: "Male, Maldives",
    period: "2021-2023",
    responsibilities: [
      "Maintained product displays in accordance with planograms, ensured timely stock replenishment, and assisted customers with product recommendations and suitable alternatives.",
      "Worked toward achieving sales targets while providing excellent service to local and international customers, including VIP guests at Velana International Airport duty-free outlets."
    ]
  },
  {
    title: "Assistant Officer, Cash",
    company: "Maldives Airports Company Limited (MACL)",
    location: "Male, Maldives",
    period: "2015-2021",
    responsibilities: [
      "Managed cash transactions and ensured efficient checkout operations while delivering excellent customer service at Duty-Free Maldives.",
      "Assisted with sales during peak periods and staff shortages, helping maintain smooth shop operations and a positive customer experience."
    ]
  }
];

const leadershipExperience = [
  {
    title: "Events Manager",
    organisation: "Clique College Student Association",
    period: "2014",
    responsibilities: [
      "Organised and managed multiple events, developing strong project management, teamwork, and problem-solving skills.",
      "Coordinated budgets, schedules, and resources to deliver successful events."
    ]
  },
  {
    title: "Logistics Coordination",
    organisation: "Staff Night Organising Team",
    period: "2022",
    responsibilities: [
      "Served on the organising team for a staff night, handling logistics planning and execution.",
      "Supported seamless operations and timely resource allocation through effective coordination."
    ]
  }
];

const interests = ["Diving", "Snorkeling", "Running", "Paragliding", "Fishing"];

export type CvReference = {
  name: string;
  organisation: string;
  position: string;
  phone: string;
  email: string;
};

type CvTabsProps = {
  references: CvReference[];
};

export default function CvTabs({ references }: CvTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("work");
  const [canScrollRight, setCanScrollRight] = useState(false);
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabList = tabListRef.current;

    if (!tabList) {
      return;
    }

    function updateScrollCue() {
      if (!tabList) {
        return;
      }

      setCanScrollRight(
        tabList.scrollLeft + tabList.clientWidth < tabList.scrollWidth - 2
      );
    }

    updateScrollCue();
    tabList.addEventListener("scroll", updateScrollCue, { passive: true });
    window.addEventListener("resize", updateScrollCue);

    return () => {
      tabList.removeEventListener("scroll", updateScrollCue);
      window.removeEventListener("resize", updateScrollCue);
    };
  }, []);

  function showMoreTabs() {
    tabListRef.current?.scrollBy({ left: 180, behavior: "smooth" });
  }

  return (
    <div className="mt-8">
      <div className="relative">
        <div
          aria-label="CV sections"
          className="flex snap-x gap-1 overflow-x-auto border-b border-black/10 pb-px pr-11 sm:pr-0"
          ref={tabListRef}
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                aria-controls={`cv-panel-${tab.id}`}
                aria-selected={isActive}
                className={`shrink-0 snap-start border-b-2 px-4 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent3 focus-visible:ring-inset ${
                  isActive
                    ? "border-accent3 text-accent3"
                    : "border-transparent text-muted hover:text-ink"
                }`}
                id={`cv-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                type="button"
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {canScrollRight ? (
          <button
            aria-label="Show more CV sections"
            className="absolute right-0 top-0 flex h-[49px] w-11 items-center justify-center border-l border-black/10 bg-base text-2xl text-accent3 sm:hidden"
            onClick={showMoreTabs}
            type="button"
          >
            <span aria-hidden="true">›</span>
          </button>
        ) : null}
      </div>

      <section
        aria-labelledby={`cv-tab-${activeTab}`}
        className="min-h-[320px] py-8"
        id={`cv-panel-${activeTab}`}
        role="tabpanel"
      >
        {activeTab === "education" ? (
          <div className="grid gap-7">
            {education.map((entry) => (
              <article
                className="flex flex-col gap-2 border-b border-black/10 pb-7 last:border-0"
                key={entry.qualification}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <h2 className="max-w-2xl font-display text-xl">
                    {entry.qualification}
                  </h2>
                  <span className="text-sm text-muted">{entry.year}</span>
                </div>
                <p className="text-muted">{entry.institution}</p>
              </article>
            ))}
          </div>
        ) : null}

        {activeTab === "work" ? (
          <div className="grid gap-8">
            {workExperience.map((experience) => (
              <article
                className="border-b border-black/10 pb-8 last:border-0"
                key={`${experience.title}-${experience.period}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-display text-xl">{experience.title}</h2>
                    <p className="mt-1 text-sm font-semibold text-muted">
                      {experience.company} · {experience.location}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm text-muted">
                    {experience.period}
                  </span>
                </div>
                <ul className="mt-4 grid max-w-3xl list-disc gap-2 pl-5 text-muted">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : null}

        {activeTab === "skills" ? (
          <div>
            <p className="mb-7 max-w-3xl text-muted">
              These are some of the technologies I have worked with through my
              studies and professional experience.
            </p>
            <div className="grid gap-7 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h2 className="font-display text-lg">{group.label}</h2>
                  <ul className="mt-3 grid gap-2 text-sm text-muted">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {activeTab === "leadership" ? (
          <div className="grid gap-8">
            {leadershipExperience.map((experience) => (
              <article
                className="border-b border-black/10 pb-8 last:border-0"
                key={`${experience.title}-${experience.period}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-display text-xl">{experience.title}</h2>
                    <p className="mt-1 text-sm font-semibold text-muted">
                      {experience.organisation}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm text-muted">
                    {experience.period}
                  </span>
                </div>
                <ul className="mt-4 grid max-w-3xl list-disc gap-2 pl-5 text-muted">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : null}

        {activeTab === "interests" ? (
          <div className="grid gap-8">
            <div>
              <p className="text-muted">Enthusiastic about outdoor adventures such as:</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <li
                    className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-semibold"
                    key={interest}
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <article className="border-l-2 border-ink pl-5">
              <h2 className="font-display text-xl">Guinness World Record participation</h2>
              <p className="mt-3 max-w-3xl text-muted">
                Participated with 452 people in performing static apnea simultaneously
                for 1 minute and 30 seconds (Nevvaa2 on 1 October 2022). Organised
                by Free-dive Maldives, the event demonstrated teamwork and commitment
                toward achieving a shared goal.
              </p>
            </article>
          </div>
        ) : null}

        {activeTab === "references" ? (
          references.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-3">
              {references.map((reference) => (
                <article
                  className="border-l-2 border-black/10 pl-4"
                  key={`${reference.name}-${reference.email}`}
                >
                  <h2 className="font-display text-xl">{reference.name}</h2>
                  <p className="mt-2 text-sm font-semibold">{reference.position}</p>
                  <p className="mt-1 text-sm text-muted">{reference.organisation}</p>
                  <div className="mt-4 grid gap-2 text-sm">
                    <a className="break-all hover:text-accent3" href={`tel:${reference.phone}`}>
                      {reference.phone}
                    </a>
                    <a className="break-all hover:text-accent3" href={`mailto:${reference.email}`}>
                      {reference.email}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="border-l-2 border-black/15 pl-4 text-muted">
              Reference details are not configured.
            </p>
          )
        ) : null}
      </section>
    </div>
  );
}
