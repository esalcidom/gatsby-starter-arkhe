import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const Seo = ({ children }) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    }
    return (
        <>
        <title>{seo.title}</title>
        <link rel="icon" type="image/x-icon" ref={seo.image} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="twitter:creator" content={seo.twitterUsername} />
        {children}
        </>
    )
};

export default Seo;