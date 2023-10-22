import Image from "next/image";
import Link from "next/link";

import { ShowcaseCard, ProjectCard, TeamMemberCard } from "./components/cardComponents"

import headerBackgroundImage from "/public/header_background.png";
import companyProfile from "/public/company_profile.png"
import residentialConstruction from "/public/residential_construction.png"
import commercialConstruction from "/public/commercial_construction.png"
import industrialConstruction from "/public/industrial_construction.png"
import projectImageOne from "/public/project_1.png"
import projectImageTwo from "/public/project_2.png"
import projectImageThree from "/public/project_3.png"
import chenWeiGuo from "/public/teamMembers/chen_wei_guo.png"
import zhouSheng from "/public/teamMembers/zhou_sheng.png"
import zhangKun from "/public/teamMembers/zhang_kun.png"
import chenZhenMin from "/public/teamMembers/chen_zhen_min.png"
import wangShengMin from "public/teamMembers/wang_sheng_min.png"
import luoJiaLin from "public/teamMembers/luo_jia_lin.png"


export default function Home() {
	return (
		<main>
			<HeroSection />
			<BusinessScope />
			<CompanyRank />
			<CompletedProjects />
			<TeamMembers />
		</main>
	);
}


const backgroundDivStyle = {
	backgroundImage: `url(${headerBackgroundImage.src})`,
	width: "100%",
	height: "100%",
};

function AchievementFigure({stat, description}) {
	return (
			<div className="mb-4">
					<p className="text-3xl font-bold text-primary-100 pb-1">No.{stat}</p>
					<p className="text-xs font-light text-neutrals-100">{description}</p>
			</div>
	)
}


function HeroSection() {
	return (
		<header>
			<div className="h-3/4screen relative md:static md:flex md:justify-evenly ">
				<div className="absolute md:static top-0 left-0 mx-12 md:basis-1/3 md:mx-12">
					<h1 className="pt-36">
						Building Dreams, <br /> One Project at a time.
					</h1>
					<p className="descriptive-text">
						With our expertise and commitment to quality, we deliver exceptional
						construction projects that exceed expecations.
					</p>
				</div>

				<div
					className="bg-cover bg-bottom md:bg-left-bottom bg-no-repeat px-8 text-center md:basis-2/3 md:rounded"
					style={backgroundDivStyle}
				></div>
			</div>
		</header>
	);
}

function BusinessScope() {
	return (
			<div className="py-20 px-8 md:px-16 text-center">
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

					<div className="flex-row pt-20">
							<a className="button">Learn</a>

							<a className="px-6 py-3 text-sm text-neutrals-100">{`Contact  >`}</a>
						</div>
			</div>
	)
}

function CompanyRank() {
	return (
			<div className="py-20 px-8 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between">
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

function CompletedProjects() {
	return (
			<div className="my-20 px-8 md:px-16 text-center">
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
									projectImage={residentialConstruction}
							/>
							<ProjectCard
									projectImage={commercialConstruction}
							/>
							<ProjectCard
									projectImage={industrialConstruction}
							/>

					</div>
			</div>
	)
}

function TeamMembers() {
	return (
			<div className="my-20 px-8 md:px-16">
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

					<div className="my-8 button inline-block">
							<Link href="http://zhaopin.cscec3b.com.cn/">Available Positions</Link>

					</div>
					
			</div>
	)
}