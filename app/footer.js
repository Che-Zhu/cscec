import Image from "next/image"

import logo from "/public/CSCEC_Logo.svg"

export default function Footer() {
    return (
        <footer className="mt-20 md:mt-40 mb-8 px-8 md:px-16">
            <hr className="bg-gray-900 border-0 h-px mb-12 md:mb-20" />

            <div className="flex flex-col md:flex-row md:justify-between gap-y-8">
                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">About Us</h4>
                    <p className="mb-2 text-neutrals-80">Company Profile</p>
                    <p className="mb-2 text-neutrals-80">Organizational Structure</p>
                    <p className="mb-2 text-neutrals-80">Contact Us</p>
                    <p className="mb-2 text-neutrals-80">Career</p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">Business Scope</h4>
                    <p className="mb-2 text-neutrals-80">Residential Construction</p>
                    <p className="mb-2 text-neutrals-80">Commercial Construction</p>
                    <p className="mb-2 text-neutrals-80">Industrial Construction</p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">News Center</h4>
                    <p className="mb-2 text-neutrals-80">News</p>
                    <p className="mb-2 text-neutrals-80">Periodic Reports</p>
                    <p className="mb-2 text-neutrals-80">Roadshow & Promotion</p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">Cultural Brand</h4>
                    <p className="mb-2 text-neutrals-80">Mission</p>
                    <p className="mb-2 text-neutrals-80">Vision</p>
                    <p className="mb-2 text-neutrals-80">Core Values</p>
                    <p className="mb-2 text-neutrals-80">Corporate Spirit</p>
                    <p className="text-neutrals-80">Conduct Code & Protocol</p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-2 md:mb-6">Social Responsibilities</h4>
                    <p className="mb-2 text-neutrals-80">Our Approach</p>
                    <p className="mb-2 text-neutrals-80">Social Responsibility Report</p>
                </div>
            </div>

            <hr className="bg-gray-900 border-0 h-px mt-12 md:mt-20" />

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