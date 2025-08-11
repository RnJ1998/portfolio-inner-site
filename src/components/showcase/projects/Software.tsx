import React from 'react';
// @ts-ignore
//import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
//import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
//import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
//import VideoAsset from '../../general/VideoAsset';
import koli from '../../../assets/pictures/koli.png';
import excel from '../../../assets/pictures/excel.jpg';
import vuokra from '../../../assets/pictures/vuokra.png';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my software projects I have worked on
                as a weekend hobby.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>riikonen.site</h2>
                <br />
                <p>
                    https:\\riikonen.site is my portfolio website, and also the
                    website you are on right now. This project is cloned from Henry Heffernan's 
                    repository on GitHub and used as the base for my website.
                    Originally I developed a simple personal online resume and project portfolio to showcase skills and work
                    but then took a look at what other people had built and found this!
                    It has now taken its final form and I am updating information to it regularly.
                </p>
                <br />
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="rnj1998.github.io/portfolio-inner-site/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                    This is all Henry's work. Way out of my skillset.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://riikonen.site/"
                        >
                            <p>
                                <b>[3D Site]</b> - riikonen.site
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="rnj1998.github.io/portfolio-inner-site/"
                        >
                            <p>
                                <b>[OS Site]</b> - rnj1998.github.io/portfolio-inner-site/
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-website"
                        >
                            <p>
                                <b>[GitHub]</b> - Original 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-inner-site"
                        >
                            <p>
                                <b>[GitHub]</b> - Original OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Excel List Generator</h2>
                <br />
                <p>
                    In many work projects, creating lists of components, cables, and nameplates is a repetitive and time-consuming task. 
                    Manually compiling these lists often leads to errors and inefficiencies, especially when dealing with small but frequent projects.
                </p>
                <br />
                <p>
                    To address this, I developed an Excel VBA macro that automates the generation of these lists. 
                    The macro streamlines the process by allowing users to quickly select the correct template and fill in project information quickly, significantly reducing manual effort and minimizing mistakes.
                    It also includes a built-in database of commonly used components and cables, making it easy to populate lists with accurate and up-to-date information.
                </p>
                <br />
                <p>
                    <b>Technologies:</b> Excel VBA
                </p>
                <br />
                <div className="captioned-image">
                    <img src={excel} style={styles.image} alt="Excel list generator" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Excel generator in action.
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/posts/janne-riikonen-748122180_ai-tekoaeuly-excel-activity-7291123292671766533-0xtg?utm_source=share&utm_medium=member_desktop&rcm=ACoAACq7f6gBsinXvEVuxTjuw5cb48DMxvI97rI"
                        >
                            <p>
                                <b>[LinkedIn]</b> - Post About the Project
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Vacation Tracker</h2>
                <br />
                <p>
                    Over time, it's easy for the details of past trips and holidays to fade away, especially if they're not documented or revisited. 
                    Small reminders, like fridge magnets, help keep those memories present, but many journeys end up forgotten in old emails.
                </p>
                <br />
                <p>
                    To help bring these memories back, I developed a Python script utilizing Google Gemini API, Google Sheets, and Gmail.
                    The script scans emails to identify vacation-related messages, then uses Gemini API to extract dates, locations, and destinations.
                    It also generates a "virtual fridge magnet" for each trip, making it easier to rediscover and appreciate past travels.
                </p>
                <br />
                <p>
                    <b>Technologies:</b> Python, Gemini API, Google Sheets API, Gmail API
                </p>
                <br />
                <div className="captioned-image">
                    <img src={koli} style={styles.image_small} alt="Koli national park" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2: </b> A fridge magnet produced via Gemini API.
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/posts/janne-riikonen-748122180_vibecoding-activity-7318177786643279872-Wr8C?utm_source=share&utm_medium=member_desktop&rcm=ACoAACq7f6gBsinXvEVuxTjuw5cb48DMxvI97rI"
                        >
                            <p>
                                <b>[LinkedIn]</b> - Post About the Project
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Rent Price Extraction & Analysis</h2>
                <br />
                <p>
                    Many rent price services, like Oikotie, do not provide a free API for accessing local rental data. 
                    This makes it difficult to analyze market trends or gather information for personal use without manual searching.
                </p>
                <br />
                <p>
                    To work around this limitation, I developed a Python script to extract rent price data from my own emails. 
                    The extracted data was initially organized into a Google Sheets file for analysis, and later the process was upgraded to populate a MySQL database. 
                    This database is then integrated with PowerBI for enhanced visualization and reporting, making it much easier to track and analyze local rent prices over time.
                </p>
                <br />
                <p>
                    <b>Technologies:</b> Python, MySQL, PowerBI, Google Sheets API
                </p>
                <br />
                <div className="captioned-image">
                    <img src={vuokra} style={styles.image_small} alt="Vuokrakehitys" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Project analysis visualization.
                        </sub>
                    </p>
                </div>
            </div>
            <div className="text-block">
                <h2>OPC UA Server and Client Learning Project</h2>
                <br />
                <p>
                    Developed a demonstration of an OPC UA (Open Platform
                    Communications Unified Architecture) server and client
                    using Python. Simulates a basic industrial process,
                    exposing variables like "Temperature" and "Pressure" and a
                    "Multiply" remote method. The client connects to the
                    server, browses its address space, reads/writes data,
                    invokes methods, and subscribes to real-time updates.
                    Implemented secure communication using self-signed X.509
                    certificates for both server and client. Containerized both
                    applications using Docker and Docker Compose for easy setup
                    and deployment.
                </p>
                <br />
                <p>
                    <b>Technologies:</b> Python, OPC UA, Docker, Git
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
    image: {
        height: 'auto',
        width: '80%',
        maxWidth: 800,
    },
    image_small: {
        height: 'auto',
        width: '80%',
        maxWidth: 500,
    },
};

export default SoftwareProjects;
