import Image from "next/image"

import projectImageOne from "/public/project_1.png"
import projectImageTwo from "/public/project_2.png"
import projectImageThree from "/public/project_3.png"
import projectImageFour from "/public/residential_construction.png"
import projectImageFive from "/public/commercial_construction.png"
import projectImageSix from "/public/industrial_construction.png"

function ProjectCard({projectImage}) {
    return (
        <Image
            src={projectImage}
            width={500}
            height={500}
            alt="Completed Projects"
            className="w-1/2 md:w-2/6 h-auto px-2 md:px-4 rounded"
        />
    )
}

export default function CompletedProjects() {
    return (
        <div className="my-20 md:my-40 px-8 md:px-16 text-center">
            <h2>Completed Projects</h2>
            <p className="descriptive-text">Browse through our stunning portfolio of construction projects.</p>

            <div className="flex flex-row flex-wrap justify-between gap-y-6 md:gap-y-10 mt-12">
                <ProjectCard
                    projectImage={projectImageOne}
                />
                <ProjectCard
                    projectImage={projectImageTwo}
                />
                <ProjectCard
                    projectImage={projectImageThree}
                />
                <ProjectCard
                    projectImage={projectImageFour}
                />
                <ProjectCard
                    projectImage={projectImageFive}
                />
                <ProjectCard
                    projectImage={projectImageSix}
                />

            </div>
            

        </div>

        
    )
}