import Image from "next/image"

import chenWeiGuo from "/public/teamMembers/chen_wei_guo.webp"
import zhouSheng from "/public/teamMembers/zhou_sheng.webp"
import zhangKun from "/public/teamMembers/zhang_kun.webp"
import chenZhenMin from "/public/teamMembers/chen_zhen_min.jpeg"
import wangShengMin from "public/teamMembers/wang_sheng_min.webp"
import luoJiaLin from "public/teamMembers/luo_jia_lin.jpeg"

function TeamMemberCard({picture, name, title, description}) {
    return (
        <div className="mb-8 md:w-2/6 md:px-4">
            <Image
                src={picture}
                width={1000}
                height={1000}
                className="w-full h-2/3 mb-2 object-cover shadow-2xl"
            />
            <p className="text-sm font-bold">{name}</p>
            <p className="text-xs font-light mb-2">{title}</p>
            <ul className="text-xs font-light list-disc md:list-inside">
                {description.map(item => <li>{item}</li>)}
            </ul>
        </div>

    )
}

export default function CompanyTeam() {
    return (
        <div className="my-10 md:my-20 px-8 md:px-16">
            <p className="text-sm font-bold pb-2 md:pb-4">Experienced</p>
            <h2 className="text-3xl font-bold pb-4">Meet Our Team</h2>
            <p className="text-sm font-light">Get to know the talented individuals who power our company.</p>

            <div className="mt-8 flex flex-col md:flex-row md:flex-wrap justify-between">
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

            <h3 className="text-2xl font-bold mt-8 pb-2">Join Us!</h3>
            <p className="text-sm font-light">Explore exciting career opportunities in our ever-growing company.</p>

            <div className="mt-6">
                <a className="border px-6 py-3 text-sm font-light border-black">Available Positions</a>
            </div>
            
        </div>
    )
}