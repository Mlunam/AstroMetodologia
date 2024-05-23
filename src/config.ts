// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "/", // Always put "/" at the end of the URL
    author: "",
    desc: "",
    title: "Astro Nutritrack",
    ogImage: "i",
    keywords:
        "",
    postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Github",
        href: "https://github.com/christian-luntok/astro-nutritrack/",
        icon: "ph:github-logo-duotone",
        title: `Follow ${SITE.author} on Github`,
        active: true
    }
];
