import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

import { ArticleHeading, ArticleSectionHeading, ArticleText } from "@/app/components/articleComponents"

export default function Page() {
    return (
        <div>
            <Navbar/>

            <article className="my-10 md:mt-20 px-8 md:px-16">
                <ArticleHeading
                    content = "Company Profile"
                />

                <section className="mb-12">
                    <ArticleSectionHeading
                        content = "Who We Are"
                    />

                    <ArticleText
                        content = {`China Construction Third Engineering Bureau Co., Ltd. (CCTEB) was born in Panzhihua
                        , Sichuan Province in 1965, during China's pivotal Third-Front Movement era. `}
                    />

                    <ArticleText
                        content = {`From our early beginnings to being wholly owned by the renowned Fortune 500 company
                        , China State Construction Engineering Corporation (CSCEC)
                        , we've grown leaps and bounds since our integration in 1982. `}
                    />

                    <ArticleText
                        content = {`Today
                        , with a rich legacy and a portfolio that has touched first and second-tier cities across China and 13 other countries
                        , we're a beacon in the construction industry.`}
                    />
                </section>

                <section className="mb-12">
                    <ArticleSectionHeading
                        content = "What We Do"
                    />

                    <ArticleText
                        content = {`CCTEB takes pride in our diverse expertise
                        . From construction engineering to highway engineering and petrochemical projects
                        , our credentials speak volumes about our versatility.`}
                    />

                    <ArticleText
                        content = {`We've played a role in some of China's iconic structures
                        , including the Shanghai World Financial Center and the Beijing CITIC Tower.`}
                    />

                    <ArticleText
                        content = {`Our projects don't just tower into the sky
                        ; we're also deeply involved in urban infrastructure development
                        , touching aspects like municipal roads, urban viaducts, and rail transit.`}
                    />
                </section>

                <section className="mb-12">
                    <ArticleSectionHeading
                        content = "How We Work"
                    />

                    <ArticleText
                        content = {`At the heart of our operations are our 30,000 dedicated employees. `}
                    />

                    <ArticleText
                        content = {`We believe in the power of innovation and research
                        , employing top-notch technology and techniques to stay ahead
                        . We've invested in creating an integrated business management platform
                        , championing both standardization and modern information-driven operations. `}
                    />

                    <ArticleText
                        content = {`Our commitment to excellence is backed by our numerous national awards, patents
                        , and our collaboration with prestigious institutions like Tsinghua University and Tongji University.`}
                    />
                </section>

                <section className="mb-12">
                    <ArticleSectionHeading
                        content = "Our Vision"
                    />

                    <ArticleText
                        content = {`We're not just builders; we're visionaries. `}
                    />

                    <ArticleText
                        content = {`Our goal is to evolve continuously
                        , expanding from being high-end builders to comprehensive modern enterprise groups with a global footprint. `}
                    />

                    <ArticleText
                        content = {`As we stride towards the future
                        , we're dedicated to becoming a world-class investment and construction group
                        , fusing our rich legacy with innovative approaches to add value and creativity.`}
                    />
                </section>
            </article>

            <Footer/>
        </div>
    )
}