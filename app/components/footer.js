import Image from "next/image"
import Link from "next/link"

import logo from "/public/CSCEC_Logo.svg"

export default function Footer() {
    return (
        <footer className="mt-20 mb-8 px-8 md:px-16">
            <hr className="bg-gray-900 border-0 h-px mb-12" />

            <div className="flex flex-col md:flex-row md:justify-between gap-y-8">
                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">About Us</h4>

                    <div className="flex flex-col items-start">
                        <Link className="mb-2 text-neutrals-80 text-sm" href="/company_profile">Company Profile</Link>
                        <p className="mb-2 text-neutrals-80 text-sm">Organizational Structure</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Contact Us</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Career</p>
                    </div>

                </div>

                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">Business Scope</h4>

                    <div className="flex flex-col items-start">
                        <p className="mb-2 text-neutrals-80 text-sm">Residential Construction</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Commercial Construction</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Industrial Construction</p>
                    </div>

                </div>

                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">News Center</h4>


                    <div className="flex flex-col items-start">
                        <p className="mb-2 text-neutrals-80 text-sm">News</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Periodic Reports</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Roadshow & Promotion</p>
                    </div>

                </div>

                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">Cultural Brand</h4>

                    <div className="flex flex-col items-start">
                        <p className="mb-2 text-neutrals-80 text-sm">Mission</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Vision</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Core Values</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Corporate Spirit</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Conduct Code & Protocol</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">Social Responsibilities</h4>

                    <div className="flex flex-col items-start">
                        <p className="mb-2 text-neutrals-80 text-sm">Our Approach</p>
                        <p className="mb-2 text-neutrals-80 text-sm">Social Responsibility Report</p>
                    </div>

                </div>
            </div>

            <hr className="bg-gray-900 border-0 h-px mt-12" />

            <div className="mt-4 flex flex-row justify-between items-center">
                <Image
                    src={logo}
                    width={32}
                    height={32}
                    alt="Company Logo"
                />

                <p className="text-sm">@ 2023 CSCEC. All rights reserved.</p>
            </div>
        </footer>
    )
}