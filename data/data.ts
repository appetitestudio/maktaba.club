const currentYear = new Date().getFullYear();
const data = {
    sitename: "maktaba.club",
    sitetagline: "We’re currently working on something BIG!✨ 🔥",
    siteurl: "https://maktaba.club",
    sitelogo: "",
    title: "Coming Soon!",
    description: "We're hard at work behind the scenes, putting the finishing touches on something amazing, and we can’t wait to unveil it! 🚀",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Crafted with ❤️ maktaba.club</a>`,
    socialIconsHeading: "",
    hideSubscribeForm: true, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "instagram",
            link: "https://www.instagram.com/maktaba.club",
        },
        
    ],
    hide :{
        subscribeForm: true, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
