import Image from "next/image"

import companyProfile from "./companyProfile.webp"

function AchievementFigure({stat, description}) {
    return (
        <div className="mb-4">
            <p className="text-2xl font-bold pb-1">No.{stat}</p>
            <p className="text-xs font-light">{description}</p>
        </div>
        
    )
}

export default function Benefits() {
    return (
        <div className="my-20 md:my-40 px-8 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:flex-1 md:mr-32">
                <p className="text-sm font-bold pb-2 md:pb-4">Excellence</p>
                <h2 className="text-3xl font-bold pb-4">Experience, Quality, Reputation - Our Commitment to You</h2>
                <p className="text-sm font-light pb-6">With years of experience, we have established ourselves as a leader in the construction industry.
                    Our commitment to quality and our impeccable reputation have earned us the trust of clients worldwide.
                </p>

                <AchievementFigure
                    stat = "3"
                    description="Fortune China 500"
                />

                <AchievementFigure
                    stat = "24"
                    description = "Fortune Global 500"
                />

                <AchievementFigure
                    stat = "44"
                    description = "Global Brand Value"
                />
            </div>

            <Image
                src={companyProfile}
                width={300}
                height={300}
                className="border shadow-lg w-96 max-h-auto flex-none"

            />

            
        </div>
    )
}