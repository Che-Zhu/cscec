import Image from "next/image";

import { ArticleHeading } from "@/app/components/articleComponents";

import OrganizationalStructure from "/public/cscec_organizational_structure.png"


export default function Page() {
    return (
        <div className="my-10 md:mt-20 px-8 md:px-16">
            <ArticleHeading
                content = 'Organizational Structure'
            />

            <Image
                src={OrganizationalStructure}
            />
        </div>
)
}