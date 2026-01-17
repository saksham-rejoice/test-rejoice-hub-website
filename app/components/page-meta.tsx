type PageMetaProps = {
    title?: string
    description?: string
}

const PageMeta = ({ title, description }: PageMetaProps)  => {
    const finalTitle = title ? title + " | Rejoicehub" : "Rejoicehub"
    return (
        <>
            <title>{finalTitle}</title>
            <meta name="description" content={description} />
        </>
    )
}

export default PageMeta;