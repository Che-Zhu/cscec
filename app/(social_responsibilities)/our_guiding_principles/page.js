import { ArticleHeading, ArticleSectionHeading, ArticleText } from "@/app/components/articleComponents"

export default function Page() {
    return (
        <div>
            <article className="my-10 md:mt-20 px-8 md:px-16">
                <ArticleHeading
                    content = "Our Guiding Principles"
                />

                <section className="mb-12">
                    <ArticleSectionHeading
                        content= "Our Mission and Core Values"
                    />

                    <ArticleText
                        content= {`Our mission is to "create happiness-filled spaces for all our stakeholders
                        ." This mission, alongside our vision, core values, and enterprise spirit
                        , guides our relationships with clients, employees, shareholders, communities, and other stakeholders
                        , reflecting the principles we cherish and uphold.`}
                    />
                </section>

                <section className="mb-12">
                    <ArticleSectionHeading
                        content= "The Symbiosis of Culture and Brand"
                    />

                    <ArticleText
                        content = {`Culture and brand are inextricably linked
                        . A globally renowned brand is anchored in a strong culture
                        . With our mission of "expanding a happy living environment" and core values centered on "quality assurance and value creation"
                        , we've established our corporate responsibility culture
                        . Guided by the principles of "China Construction Doctrine" and "Ten Classics and Nine Chapters"
                        , we champion the idea that culture leads responsibility
                        . This perspective encourages the seamless integration of responsibility into our management strategies
                        , daily operations, and employee tasks, culminating in a unique culture-driven model of social responsibility.`}
                    />
                </section>

                <section className="mb-12">
                    <ArticleSectionHeading
                        content = "Our Approach to Sical Responsibility"
                    />

                    <ArticleText
                        content = {`We have established the Social Responsibility Committee
                        , made up of corporate executives and department leaders
                        . This committee oversees the development of comprehensive CSR strategies for 
                        the company and creates a structured approach to social responsibility across 
                        all tiers and domains of our organization. Furthermore
                        , a dedicated office within the committee handles the drafting of specific social responsibility plans
                        , manages system implementations, organizes CSR initiatives
                        , handles external communications regarding CSR, and compiles sustainability reports.`}
                    />
                </section>
            </article>



            
        </div>
    )
}