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
                <h2>Vacation Tracker</h2>
                <br />
                <p>
                    Developed a Python script utilizing Google Gemini API, Google Sheets, and Gmail.
                    The script filters emails and employs the Gemini API to identify vacation-related messages.
                    Relevant emails are further processed by the Gemini API to extract dates, locations, and destinations.
                    Leverages Gemini API's image generation capabilities to create a "virtual fridge magnet" for each trip.
                    Aims to rediscover lost memories from emails while exploring AI and API functionalities.
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
                            <b>Figure 1: </b> A fridge magnet produced via Gemini API.
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
                <h2>Excel List Generator</h2>
                <br />
                <p>
                    Created an Excel VBA project, assisted by Gemini, to automate list generation.
                    The VBA macro is designed to create lists frequently used in work projects.
                    Significantly saves time, reduces manual effort, and minimizes errors in list preparation.
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
                            <b>Figure 2:</b> Excel generator in action.
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
                <h2>Rent Price Extraction & Analysis</h2>
                <br />
                <p>
                    Developed a Python script to extract local rent price data
                    from personal emails. Initially, extracted data was
                    organized into a Google Sheets file for analysis. An
                    updated version now populates a MySQL database with the
                    rent data. The data from MySQL is integrated with PowerBI
                    for enhanced visualization and reporting.
                </p>
                <br />
                <p>
                    <b>Technologies:</b> Python, Gemini API, MySQL, PowerBI,
                    Google Sheets
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
