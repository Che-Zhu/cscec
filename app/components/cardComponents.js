import Image from "next/image"

function ShowcaseCard({showcasePicture, constructionType, description}) {
    return (
        <div>
            <Image
                src={showcasePicture}
                alt={constructionType}
                className="rounded md:px-4"
            />
            <p className="font-bold text-2xl mt-3">{constructionType}</p>
            <p className="descriptive-text mt-1">{description}</p>
        </div>
    )
}

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

function TeamMemberCard({picture, name, title, description}) {
    return (
        <div className="mb-8 md:w-2/6 md:px-6">
            <Image
                src={picture}
                width={1000}
                height={1000}
                alt={`${name}, ${title}`}
                className="w-full mb-2"
            />
            <p className="text-xl font-bold text-neutrals-100">{name}</p>
            <p className="text-sm text-primary-100 mb-2">{title}</p>
            <ul className="text-sm text-neutrals-80 list-disc list-inside marker:text-primary-100">
                {description.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>

    )
}

export { ShowcaseCard, ProjectCard, TeamMemberCard }