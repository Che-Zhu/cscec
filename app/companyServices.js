import Image from "next/image"

import residentialConstruction from "/public/residential_construction.png"
import commercialConstruction from "/public/commercial_construction.png"
import industrialConstruction from "/public/industrial_construction.png"

function ShowcaseCard({showcasePicture, constructionType, description}) {
    return (
        <div className="mb-8">
            <Image
                src={showcasePicture}
                alt={constructionType}
                className="rounded"
            />
            <p className="font-bold text-2xl mt-3">{constructionType}</p>
            <p className="descriptive-text mt-1">{description}</p>
        </div>
    )
}

export default function CompanyServices() {
    return (
        <div className="py-20 md:py-40 px-8 md:px-16 text-center">
            <div className="flex flex-col justify-between items-center md:px-64">
                <p className="section-tag">Building</p>
                <h2>Experienced Construction Company for All Your Needs</h2>
                <p className="descriptive-text">We specialize in residential construction, commercial construction, and industrial construction.
                    Our team of experts is dedicated to delivering high-quality results on every project.
                </p>
            </div>

            <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center md:justify-between ">
                <ShowcaseCard
                    showcasePicture={residentialConstruction}
                    constructionType="Residential Construction"
                    description={"We build beautiful homes that exceed expectations."}
                />

                <ShowcaseCard
                    showcasePicture={commercialConstruction}
                    constructionType="Commercial Construction"
                    description={"We create functional and impressive commercial spaces."}
                />

                <ShowcaseCard
                    showcasePicture={industrialConstruction}
                    constructionType="Industrial Construction"
                    description={"We have the expertise to tackle complex industrial projects."}
                />
            </div>

            <div className="flex-row pt-10">
                <a className="px-5 py-3 mr-10 text-sm bg-primary-100 text-neutrals-10 rounded">Learn</a>
                <a className="px-5 py-3 text-sm text-neutrals-100">{`Contact  >`}</a>
              </div>
            
            
        </div>
    )
}