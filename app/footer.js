import Image from "next/image"

import logo from "/public/logo.png"

export default function Footer() {
    return (
        <footer className="mt-16 mb-8 md:mt-20 px-8 md:px-16">
            <hr className="bg-gray-900 border-0 h-px mb-12 md:mb-20" />

            <div className="flex flex-col md:flex-row md:justify-between gap-y-5">
                <div>
                    <h4 className="text-lg md:text-base font-bold mb-2 md:mb-6">About Us</h4>
                    <p className="mb-2">Company Profile</p>
                    <p className="mb-2">Organizational Structure</p>
                    <p className="mb-2">Contact Us</p>
                    <p>Career</p>
                </div>

                <div>
                    <h4 className="text-lg md:text-base font-bold mb-2 md:mb-6">Business Scope</h4>
                    <p className="mb-2">Residential Construction</p>
                    <p className="mb-2">Commercial Construction</p>
                    <p>Industrial Construction</p>
                </div>

                <div>
                    <h4 className="text-lg md:text-base font-bold mb-2 md:mb-6">News Center</h4>
                    <p className="mb-2">News</p>
                    <p className="mb-2">Periodic Reports</p>
                    <p>Roadshow & Promotion</p>
                </div>

                <div>
                    <h4 className="text-lg md:text-base font-bold mb-2 md:mb-6">Cultural Brand</h4>
                    <p className="mb-2">Mission</p>
                    <p className="mb-2">Vision</p>
                    <p className="mb-2">Core Values</p>
                    <p className="mb-2">Corporate Spirit</p>
                    <p>Conduct Code & Protocol</p>
                </div>

                <div>
                    <h4 className="text-lg md:text-base font-bold mb-2 md:mb-6">Social Responsibilities</h4>
                    <p className="mb-2">Our Approach</p>
                    <p className="mb-2">Social Responsibility Report</p>
                </div>
            </div>

            <hr className="bg-gray-900 border-0 h-px mt-12 md:mt-20" />

            <div className="mt-4 flex flex-col md:flex-row justify-between md:items-center">
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt="Company Logo"
                    className="mb-4 md:mb-0"
                />

                <p className="text-sm">@ 2023 CSCEC. All rights reserved.</p>
            </div>
        </footer>
    )
}