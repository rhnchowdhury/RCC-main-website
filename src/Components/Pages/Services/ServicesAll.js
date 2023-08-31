import React from 'react';
import img1 from '../../../services/buying.jpg';
import img2 from '../../../services/content.png';
import img3 from '../../../services/ecosystem.png';
import img4 from '../../../services/marketing.png';
import img5 from '../../../services/development.png';
import img6 from '../../../services/influnce.jpg';

const ServicesAll = () => {
    return (
        <section className='my-5'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} alt='' className="max-w-md rounded-lg" />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold">Media Buying:</h1>
                        <p className="mt-12">Digital Media buying involves researching, selecting, negotiating, and executing media buys to reach a specific target audience and achieve the desired marketing goals.
                            <br /> <span className='font-bold'>1. Page Promotion:</span> Increasing the visibility, reach, and engagement of a specific webpage or website on various online platforms. It aims to attract more visitors, generate higher traffic, and achieve specific marketing or business goals.
                            <br /> <span className='font-bold'>2. Product advertising:</span> Promoting and marketing a specific product or service to potential customers.
                            <br /> <span className='font-bold' >3. Post promotion:</span> Promoting or boosting a post on social media platforms. It involves allocating a certain budget to advertise the post, targeting specific demographics or user segments, and utilising various promotional tools and features offered by the social media platform.
                            Lead Generation: Identifying and attracting potential customers or leads for a business with the goal of converting them into paying customers.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero my-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img2} alt='' className="max-w-md rounded-lg shadow-2xl" />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold">Content Management:</h1>
                        <p className="mt-12">Our team of expert plan, strategize and create contents according to your business needs. Moreover, we do page/group moderation through monitoring and controlling user generated content on website, social media platforms or other online communities.
                            <br /> <span className='font-bold'>1. Page Moderation:</span>Monitoring and controlling the content that is posted on a webpage or social media platform. It involves reviewing and managing user-generated content, such as comments, messages, and posts, to ensure that they comply with the platform's guidelines and community standards.
                            <br /> <span className='font-bold'>2. Creative Content:</span> Unleashing the power of imagination and using it to create something original and engaging that resonates with people on a deeper level.
                            <br /> <span className='font-bold' >3. Query management:</span>Handling and organising queries or requests from various sources, such as customers, clients, or users. It involves capturing, categorising, prioritising, and resolving queries efficiently and effectively.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img3} alt='' className="max-w-md rounded-lg shadow-2xl" />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold">Digital Ecosystem:</h1>
                        <p className="mt-12">Digital ecosystems can help your business to grow on digital advertising platforms with an interconnected and integrated system consisting of brand guidelines, improving customer experiences, and gathering customer behaviour data, website traffic data, lead conversion, and the effectiveness of your online promotion.
                            <br /> <span className='font-bold'>1. Brand Guidelines</span>
                            <br /> <span className='font-bold'>2. Google, Facebook. Instagram, Linkedin, YouTube ads</span>
                            <br /> <span className='font-bold'>3. Facebook pixel</span>
                            <br /> <span className='font-bold'>4. Google Analytics Integration</span>
                            <br /> <span className='font-bold'>5. Facebook and Instagram Shop set up </span>
                            <br /> <span className='font-bold'>6. Website Development</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero my-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img4} alt='' className="max-w-md rounded-lg shadow-2xl" />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold">Digital Marketing:</h1>
                        <p className="mt-12">Social media marketing involves creating and implementing marketing strategies on various social media platforms like Facebook, Instagram, Twitter, LinkedIn, etc. The goal is to engage with the audience, build brand awareness, drive traffic to the website, and ultimately convert followers into customers.
                            <br /> <span className='font-bold'>1. Social Media Marketing:</span>Social media marketing includes both organic content posting and paid advertising. Content Marketing: Content marketing focuses on creating valuable, relevant, and informative content to attract and engage a target audience.
                            <br /> <span className='font-bold'>2. Pay-Per-Click Advertising (PPC):</span> Managing online ad campaigns on platforms like Google Ads, Bing Ads, or social media platforms.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero my-12">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img5} alt='' className="max-w-md rounded-lg shadow-2xl" />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold">Website Design & Development:</h1>
                        <p className="mt-12">Website design and development involve creating and building websites, encompassing everything from the visual appearance and layout to the functionality and performance.Creating responsive and user-friendly websites. Website optimization for better user experience and conversion rates.
                            <br />
                            <br /> Depending on the agreement with the client, the marketing agency might also be responsible for promoting the website through various online marketing channels such as SEO, social media, email marketing, and paid advertising.
                            <br />
                            <br /> Website design and development can be done by skilled teams with expertise in web development languages.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero my-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img6} alt='' className="max-w-md rounded-lg shadow-2xl" />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold">Influencer Marketing:</h1>
                        <p className="mt-12">Influencer marketing involves collaborating with influential individuals, to promote products, services, or brands to their audience. These influencers have established credibility and a large following in a specific niche or industry, and their opinions and recommendations can significantly impact their followers' purchasing decisions.
                            <br />
                            <br />Understand our client's goals and what they want to achieve through influencer marketing. Increasing brand awareness, driving website traffic, generating leads, or boosting sales.
                            <br />
                            <br />Promote authentic influencer content aligning with client guidelines and campaign goals for trust and engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesAll;