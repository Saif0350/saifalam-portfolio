import { ProjectProps } from "@/lib/projectsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard: React.FC<{ data: ProjectProps }> = ({ data }) => {
  return (
    <div className=" rounded-2xl block relative group  overflow-hidden w-[380px] h-auto ">
      <div>
        <Image src={data.image} width={1000} height={1000} alt={data.title} />
      </div>

      <div className="bg-[#363636] px-8 py-6 rounded-b-2xl">
        <div className="mb-4">
          <h3 className="text-3xl   mb-4 text-[#cccccc]">{data.title}</h3>
          <p className="text-justify text-base text-[#cccccc] mb-4">
            {data.description}
          </p>

          <h4 className="text-[#cccccc] text-base line-clamp-1">
            Tech stack: {data.techStack.join(", ")}
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={data.livePreview}
            target="_blank"
            className="flex gap-2 items-center"
          >
            <Image
              src="/projects/icons/chain.svg"
              width={1000}
              height={1000}
              alt="chain"
              className="w-5 h-5"
            />

            <h3 className="underline">Live Preview</h3>
          </Link>

          <Link
            href={data.github}
            target="_blank"
            className="flex gap-2 items-center"
          >
            <Image
              src="/projects/icons/github.png"
              width={1000}
              height={1000}
              alt="chain"
              className="w-5 h-5"
            />

            <h3 className="underline">View Code</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
