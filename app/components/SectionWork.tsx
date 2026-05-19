"use client";

import { useState } from "react";
import DesignProjectCard from "./work/DesignProjectCard";
import DevelopmentProjectCard from "./work/DevelopmentProjectCard";
import WorkTabs from "./work/WorkTabs";
import { projects, workFilters, type WorkFilter } from "./work/workData";

export default function SectionWork() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("development");
  const visibleProjects = projects.filter(
    (project) => project.discipline === activeFilter
  );

  return (
    <section className="relative z-10 pb-4 pt-10 lg:pb-6 lg:pt-12">
      <div className="mx-auto w-[min(1120px,90vw)]">
        <div className="mb-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              Projects I have worked on.
            </h2>
          </div>
        </div>

        <WorkTabs
          activeFilter={activeFilter}
          filters={workFilters}
          onChange={setActiveFilter}
        />

        <div className="grid gap-5">
          {activeFilter === "design" ? <DesignProjectCard /> : null}
          {visibleProjects.map((project, index) => (
            <DevelopmentProjectCard
              index={index}
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
