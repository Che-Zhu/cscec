import Image from "next/image"
import residentialConstruction from "./residential_construction.png"
import commercialConstruction from "./commercial_construction.jpeg"
import industrialConstruction from "./industrial_construction.png"

function ShowcaseCard({showcasePicture, constructionType, description}) {
    return (
        <div className="mb-8">
            <Image
                src={showcasePicture}
                width={500}
                height={500}
                style={{
                    width: '100%',
                    height: '200px',
                }}
            />
            <p className="text-xl font-bold mt-2">{constructionType}</p>
            <p className="text-sm font-light mt-2">{description}</p>
        </div>
    )
}

export default function CompanyServices() {
    return (
        <div className="mt-10 md:mt-20 px-8 md:px-16 text-center">
            <div className="flex flex-col justify-between items-center md:px-64">
                <p className="text-sm font-bold pb-2 md:pb-4">Building</p>
                <h2 className="text-3xl font-bold pb-4">Experienced Construction Company for All Your Needs</h2>
                <p className="text-sm font-light">We specialize in residential construction, commercial construction, and industrial construction.
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

            <div className="flex-row my-8">
                <a className="border px-6 py-3 text-sm font-light border-black mr-5">Learn</a>
                <a className="border px-4 py-3 text-sm font-light border-white">{`Contact  >`}</a>
              </div>
            
            
        </div>
    )
}