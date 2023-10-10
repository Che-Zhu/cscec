import Image from "next/image"

import companyProfile from "/public/company_profile.png"

function AchievementFigure({stat, description}) {
    return (
        <div className="mb-4">
            <p className="text-3xl font-bold text-primary-100 pb-1">No.{stat}</p>
            <p className="text-xs font-light text-neutrals-100">{description}</p>
        </div>
        
    )
}

export default function Benefits() {
    return (
        <div className="py-20 md:py-40 px-8 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:flex-1 md:mr-32">
                <p className="section-tag">Excellence</p>
                <h2>Experience, Quality, Reputation - Our Commitment to You</h2>
                <p className="descriptive-text">With years of experience, we have established ourselves as a leader in the construction industry.
                    Our commitment to quality and our impeccable reputation have earned us the trust of clients worldwide.
                </p>

                <div className="my-8">
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

            </div>

            <Image
                src={companyProfile}
                width={300}
                height={300}
                alt="Company's Profile"
                className="border shadow-lg w-96 max-h-auto flex-none"

            />

            
        </div>
    )
}