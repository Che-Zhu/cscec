import Image from "next/image"

import chenWeiGuo from "/public/teamMembers/chen_wei_guo.png"
import zhouSheng from "/public/teamMembers/zhou_sheng.png"
import zhangKun from "/public/teamMembers/zhang_kun.png"
import chenZhenMin from "/public/teamMembers/chen_zhen_min.png"
import wangShengMin from "public/teamMembers/wang_sheng_min.png"
import luoJiaLin from "public/teamMembers/luo_jia_lin.png"

function TeamMemberCard({picture, name, title, description}) {
    return (
        <div className="mb-8 md:w-2/6 md:px-4">
            <Image
                src={picture}
                width={1000}
                height={1000}
                alt={`${name}, ${title}`}
                className="w-full mb-2"
            />
            <p className="text-xl font-bold text-neutrals-100">{name}</p>
            <p className="text-sm text-primary-100 mb-2">{title}</p>
            <ul className="text-neutrals-80 list-disc list-inside">
                {description.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>

    )
}

export default function CompanyTeam() {
    return (
        <div className="my-20 md:my-40 px-8 md:px-16">
            <p className="section-tag">Experienced</p>
            <h2>Meet Our Team</h2>
            <p className="descriptive-text">Get to know the talented individuals who power our company.</p>

            <div className="mt-12 flex flex-col md:flex-row md:flex-wrap justify-between mb-12">
                <TeamMemberCard
                    picture={chenWeiGuo}
                    name={'WeiGuo Chen'}
                    title={'Chairman'}
                    description={
                        [
                            'First-Class Constructor, Professor-level Senior Engineer.',
                            'National Advanced Individual in the fight against the COVID-19 epidemic.',
                            'Chief Commander of the construction of Huoshenshan and Leishenshan (COVID-19 makeshift hospitals).'
                        ]
                    }
                />

                <TeamMemberCard
                    picture={zhouSheng}
                    name={'Sheng Zhou'}
                    title={'Director and General Manager'}
                    description={
                        [
                            'Senior Engineer.',
                            'Previously served as General Manager of the Fourth Division of CSCEC Algeria and subsequently ascended to Chairman of CSCEC Algeria.',
                            'With over two decades of refined experience in the construction industry.'
                        ]
                    }
                />

                <TeamMemberCard
                    picture={zhangKun}
                    name={'Kun Zhang'}
                    title={'Chief Engineer'}
                    description={
                        [
                            'Chief Expert of China Construction Group.', 
                            'Professor-level Senior Engineer.', 
                            'Recipient of Special Government Allowance from the State Council.',
                            'Member of the Expert Committee of the China Construction Industry Association.', 
                        ]
                    }
                />

                <TeamMemberCard
                    picture={chenZhenMin}
                    name={'ZhenMin Chen'}
                    title={'Director and Chairman of the Union'}
                    description={
                        [
                            `Oversees organizational strategy and advocates for workers' rights, 
                            balancing corporate governance with employee representation and welfare.`
                        ]
                    }
                />

                <TeamMemberCard
                    picture={wangShengMin}
                    name={'ShengMin Wang'}
                    title={'Deputy General Manager, Chief Economist, and Chief Legal Advisor'}
                    description={
                        [
                            'Oversees daily operations, providing strategic direction.', 
                            'Analyze economic trends to guide decisions.', 
                            'Ensure legal compliance and manage legal affairs.'
                        ]
                    }
                />

                <TeamMemberCard
                    picture={luoJiaLin}
                    name={'JiaLin Luo'}
                    title={'Secretary of the Discipline Inspection Committee'}
                    description={
                        [
                            `Leads efforts to uphold party discipline, 
                            investigates misconduct, ensures ethical behavior within the organization, 
                            and enforces compliance with party regulations and values.`
                        ]
                    }
                />
            </div>

            <h2>Join Us!</h2>
            <p className="descriptive-text">Explore exciting career opportunities in our ever-growing company.</p>

            <div className="my-8">
                <a className="px-5 py-4 text-sm bg-primary-100 text-neutrals-10 rounded">Available Positions</a>
            </div>
            
        </div>
    )
}