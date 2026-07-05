"use client";

import { useState } from "react";
import { projects } from "../work/workData";

const tabs = [
  { id: "education", label: "Education" },
  { id: "work", label: "Work Experience" },
  { id: "skills", label: "Technical Skills" },
  { id: "leadership", label: "Leadership & Service" },
  { id: "interests", label: "Interests" }
] as const;

type TabId = (typeof tabs)[number]["id"];

const skillGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    label: "Design",
    items: ["Figma", "Wireframing", "Responsive UI", "Interaction design"]
  },
  {
    label: "Product",
    items: ["Product thinking", "Information architecture", "Workflow mapping"]
  }
];

function EmptySection({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-2 border-black/15 pl-4 text-muted">{children}</p>
  );
}

export default function CvTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("work");

  return (
    <div className="mt-8">
      <div
        aria-label="CV sections"
        className="flex gap-1 overflow-x-auto border-b border-black/10 pb-px"
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              aria-controls={`cv-panel-${tab.id}`}
              aria-selected={isActive}
              className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "border-ink text-ink"
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

      <section
        aria-labelledby={`cv-tab-${activeTab}`}
        className="min-h-[320px] py-8"
        id={`cv-panel-${activeTab}`}
        role="tabpanel"
      >
        {activeTab === "education" ? (
          <EmptySection>Education details will be added here.</EmptySection>
        ) : null}

        {activeTab === "work" ? (
          <div className="grid gap-8">
            {projects.map((project) => (
              <article className="border-b border-black/10 pb-8 last:border-0" key={project.title}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-muted">{project.category}</p>
                    <h2 className="mt-1 font-display text-xl">{project.title}</h2>
                  </div>
                  <span className="text-sm text-muted">{project.year}</span>
                </div>
                <p className="mt-3 text-sm font-semibold">{project.role}</p>
                <p className="mt-2 max-w-3xl text-muted">{project.description}</p>
              </article>
            ))}
          </div>
        ) : null}

        {activeTab === "skills" ? (
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
        ) : null}

        {activeTab === "leadership" ? (
          <EmptySection>Leadership and volunteering details will be added here.</EmptySection>
        ) : null}

        {activeTab === "interests" ? (
          <EmptySection>Hobbies and interests will be added here.</EmptySection>
        ) : null}
      </section>
    </div>
  );
}
