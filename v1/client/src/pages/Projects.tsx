import { Link } from 'react-router-dom';

import Project from '../components/Project';

import ctrhome from '../assets/projects/boostctr/home.png';
import ctrlogin from '../assets/projects/boostctr/login.png';
import ctrsignup from '../assets/projects/boostctr/signup.png';
import ctrcontact from '../assets/projects/boostctr/contact.png';

import borgenWeb from '../assets/projects/borgen/website.png';
import borgenNpm from '../assets/projects/borgen/npm.png';

import dashboard from '../assets/projects/dashboard/dashboard.png';
import apps from '../assets/projects/dashboard/apps.png';
import users from '../assets/projects/dashboard/users.png';
import email from '../assets/projects/dashboard/email.png';
import apis from '../assets/projects/dashboard/apis.png';

import faihome from '../assets/projects/freeaikit/freeaikit-home.png';
import faidash from '../assets/projects/freeaikit/freeaikit-dash.png';
import faiprofile from '../assets/projects/freeaikit/freeaikit-profile.png';
import faitool from '../assets/projects/freeaikit/freeaikit-tool.png';

const Projects = () => {
    return (
        <section className="md:mt-[2rem]">
            <nav className="text-sm md:text-[0.8em]  font-Poppins pl-4 md:pl-[3.5rem] lg:pl-[14rem] font-[500] text-[#92a1b6] ">
                <Link to={'/'} className="text-[#3db9a6] hover:text-[#238879] active:text-[#1f2045] transition-colors duration-500">
                    Home
                </Link>
                /<p className="inline">Projects</p>
            </nav>

            <article className="-mt-[5.6rem]">
                <svg
                    className="rotate-[180deg] z-10  relative top-[6.2rem]"
                    fill="#0f172a"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height="100"
                    viewBox="0 20 50 80"
                    preserveAspectRatio="none"
                >
                    <path d="M0,101 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z"></path>
                </svg>

                <div className="relative py-28 w-screen projects px-4">
                    <Project
                        title="FreeAiKit"
                        techStack={`NextJs+TypeScript+ChartJs+TailwindCSS+ReactIcons+NodeJs`}
                        liveLink="https://freeaikit.com"
                        images={[faihome, faitool, faiprofile, faidash]}
                        longDesc={[
                            'This project empowers users to create their custom AI tools. Built with Next.js, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB, this project offers a robust and scalable platform. I utilized libraries like Chart.js to effectively visualize data, enabling users to gain insights easily.',
                            'Additionally, It involved integrating third-party APIs such as the email API, allowing for automated feedback to users, and Google OAuth for seamless one-click login, enhancing user convenience and security. FreeAIKit combines cutting-edge technologies to provide users with a flexible and powerful AI tool creation experience.'
                        ]}
                    />

                    <Project
                        title="Dashboard"
                        techStack={`React+TypeScript+ChartJs+TailwindCSS+HeroIcons`}
                        liveLink="https://react-admindash.vercel.app"
                        github="https://github.com/Codedwells/Admin-Dashboard-React-Ts"
                        images={[dashboard, apps, users, email, apis]}
                        longDesc={[
                            'The dashboard provides a clean and intuitive user interface that enables administrators to view critical information at a glance and quickly take necessary actions. With all these tools and technologies combined, the admin dashboard is a powerful tool for any organization looking to streamline their operations and enhance their decision-making capabilities.',
                            'The dashboard is designed to receive and display data in real-time, allowing administrators to quickly respond to changes and make informed decisions. This is particularly useful for organizations that need to monitor and manage their systems or operations.'
                        ]}
                    />

                    <Project
                        title="Borgen"
                        techStack={`TypeScript+NodeJs+Express+Chalk`}
                        liveLink="https://www.npmjs.com/package/borgen"
                        github="https://github.com/Codedwells/Borgen"
                        images={[borgenNpm, borgenWeb]}
                        longDesc={[
                            "Borgen is a customizable HTTP logger middleware that allows developers to easily track HTTP requests and responses in their Node.js applications. With its customizable color scheme, Borgen makes it easy to identify different types of requests and responses, providing invaluable insight into how your application is performing. Whether you're building a small web app or a large-scale enterprise application, Borgen can help you stay on top of your HTTP traffic.",
                            'One of the key features of Borgen is its flexibility. Built using TypeScript, Borgen is highly customizable, allowing you to tailor it to your specific needs. With its simple, intuitive API, you can easily configure Borgen to log exactly the information you need, without any unnecessary clutter.',
                            'Another great feature of Borgen is its integration with the popular Express framework. With Borgen, you can quickly and easily add HTTP logging to your Express applications, making it easy to keep track of requests and responses. And with its dependency on the widely-used Chalk library, your logs will be colorful and easy to read, helping you to quickly identify issues and troubleshoot problems.',
                            "Whether you're a seasoned developer or just starting out, Borgen is a powerful tool that can help you take your Node.js applications to the next level. So why not give it a try today and see for yourself what a difference it can make?"
                        ]}
                    />

                    <Project
                        title="BoostCTR"
                        techStack={`TypeScript+Tailwind+NodeJs+Express+MongoDB+Nginx`}
                        liveLink="http://boostctr.io"
                        images={[ctrhome, ctrsignup, ctrlogin, ctrcontact]}
                        longDesc={[
                            'This is a project I completed for H-educate is a database application built using TypeScript, Tailwind, Node.js, MongoDB, Express, and Nginx. This application is designed to provide users with a database of email subject lines that they can use in their marketing campaigns. The application uses JWT cookies for authentication, which ensures that only authorized users can access the database.',
                            'The application is built using a modular architecture, which makes it easy to scale and maintain. The backend is built using Node.js and Express, with MongoDB as the database. Nginx is used as the web server, which helps to improve performance and security',
                            'Overall, this project demonstrates my skills in building robust and scalable applications using the latest technologies. It showcases my skills in TypeScript, Tailwind, Node.js, MongoDB, Express, and Nginx, as well as my ability to implement secure authentication using JWT cookies.'
                        ]}
                    />
                </div>
                <svg
                    className="rotate-[360deg]  relative bottom-[6.2rem]"
                    fill="#0f172a"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height="100"
                    viewBox="0 20 50 80"
                    preserveAspectRatio="none"
                >
                    <path d="M0,103 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z"></path>
                </svg>
                <p className="relative bottom-[3.5rem] text-[#e2e8f0] font-[700] px-4 text-center text-2xl">More coming soon!!!</p>
            </article>
        </section>
    );
};

export default Projects;
