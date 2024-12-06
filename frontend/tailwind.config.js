/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    extend: {
      backgroundImage:{
        'home-hero-image': "url(https://demo.websolutionus.com/findestate/uploads/website-images/home-page-banner-2023-12-14-04-21-19-3202.jpg)",
        'home-card-image': "url(https://demo.websolutionus.com/findestate/uploads/custom-images/property-thumb-2021-09-22-12-42-07-7843.jpg)",
        'parallax-image': "url(https://demo.websolutionus.com/findestate/uploads/website-images/banner-2021-10-30-09-13-33-7585.jpg)",
        'about-hero-image': "url(https://res.cloudinary.com/dx42ztqx9/image/upload/v1731082362/banner-2021-10-10-10-17-15-2159_wmyes3.jpg)",
        'properties-agents-hero-image': "url(https://res.cloudinary.com/dx42ztqx9/image/upload/v1731082362/banner-2021-10-10-10-17-15-2159_wmyes3.jpg)",
        'pricing-hero-image' : "url(https://res.cloudinary.com/dx42ztqx9/image/upload/v1731085087/banner-2021-10-07-08-14-29-5678_e58vxf.jpg)",
        'blog-hero-image': "url(https://demo.websolutionus.com/findestate/uploads/website-images/home-page-banner-2023-12-14-04-21-19-3202.jpg)",
        'contact-hero-image' : "url(https://res.cloudinary.com/dx42ztqx9/image/upload/v1731085536/banner-2021-10-07-08-14-48-4464_osnzkp.png)",
        'faq-hero-image' : "url(https://res.cloudinary.com/dx42ztqx9/image/upload/v1731356643/banner-2021-10-07-08-16-47-8007_r45xid.jpg)",
        'page1-hero-image' : "url(https://demo.websolutionus.com/findestate/uploads/website-images/home-page-banner-2023-12-14-04-21-19-3202.jpg)",
        'page2-hero-image' : "url(https://demo.websolutionus.com/findestate/uploads/website-images/home-page-banner-2023-12-14-04-21-19-3202.jpg)",
        'property-hero-image' : "url(https://res.cloudinary.com/dx42ztqx9/image/upload/v1731356643/banner-2021-10-07-08-16-47-8007_r45xid.jpg)",
        'terms-and-conditions-hero-image' : "url(https://res.cloudinary.com/dx42ztqx9/image/upload/v1731356643/banner-2021-10-07-08-16-47-8007_r45xid.jpg)",
        'privacy-policy-hero-image' : "url(https://res.cloudinary.com/dx42ztqx9/image/upload/v1731356643/banner-2021-10-07-08-16-47-8007_r45xid.jpg)"

      }
    },
  },
  plugins: [],
}