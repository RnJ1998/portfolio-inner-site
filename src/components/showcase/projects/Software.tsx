import React from 'react';
// @ts-ignore
//import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
//import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
//import VideoAsset from '../../general/VideoAsset';

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
                    Originally I Developed a simple personal online resume and project portfolio to showcase skills and work
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
                        //href="https://henryheffernan.vercel.app/"
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
                            href="https://"
                        >
                            <p>riikonen.site
                                <b>[3D Site]</b> - riikonen.site
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            //href="https://henryheffernan.vercel.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - janneriikonen github tähän
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
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/RnJ1998/portfolio-inner-site"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
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
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Tähän joku kuva.
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/posts/janne-riikonen-748122180_vibecoding-activity-7318177786643279872-Wr8C?utm_source=share&utm_medium=member_desktop&rcm=ACoAACq7f6gBsinXvEVuxTjuw5cb48DMxvI97rI""
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
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Excel generator in action.
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
};

export default SoftwareProjects;
