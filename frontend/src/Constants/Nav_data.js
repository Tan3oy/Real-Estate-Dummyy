export const NavItems=[
    {
        name:"Home",
        link:"/",
    },
    {
        name:"About Us",
        link:"/about",
    },
    {
        name:"Properties",
        subLinks:[
            {
                link:"properties/all_properties",
                name:"All Properties"                
            },
            {
                link:"properties/featured_properties",
                name:"Featured Properties"
            } ,
            {
                link:"properties/top_properties",
                name:"Top Properties"
            },
            {
                link:"properties/urgent_properties",
                name:"Urgent Properties"
            },
            {
                link:"/agents",
                name:"Agents"
            }
        ]

    },
    {
        name:"Pricing Plan",
        link:"/pricing_plan",
    },
    {
        name:"Pages",
        link:"",
        subLinks:[
            {
                name:"Custom Page 1",
                link:"/page_1"
            },
            {
                name:"Custom Page 2",
                link:"/page_2"
            },
            {
                name:"FAQ",
                link:"/faq"
            }
        ]
    },
    {
        name:"Blog",
        link:"/blog",
    },
    {
        name:"Contact",
        link:"/contact",
    },
    
]