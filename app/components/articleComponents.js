function ArticleHeading({ content }) {
    return (
        <div className="flex items-center justify-center mb-8 md:mb-12">
            <h1 className="inline-block text-2xl font-semibold text-primary-100 text-center pb-2 border-b-2 border-b-primary-120">{content}</h1>
        </div>
    )
}

function ArticleSectionHeading({ content }) {
    return (
        <div className="flex items-center justify-center mb-4 md:mb-8">
            <h2 className="text-base font-medium text-neutrals-100 text-center">{content}</h2>
        </div>
    )
}

function ArticleText({ content }) {
    return (
        <div className="flex items-start justify-normal mb-2 md:px-40">
            <p className="text-sm text-neutrals-80">{content}</p>
        </div>
    )
}




export { ArticleHeading, ArticleSectionHeading, ArticleText }