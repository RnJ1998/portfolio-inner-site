import React from 'react';
import leo from '../../assets/pictures/leo.jpg';
import football from '../../assets/pictures/football.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>Hello, I'm Janne Riikonen</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm an electrical/automation engineer working at Granlund! In May
                    of 2023 I graduated from LUT University
                    with my MSc in Technology (Electrical).
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it. This portfolio is not originally
                    built by me. I've only made my modifications to the source code by Henry Heffernan (henryheffernan.com).
                    That is one of the great things about humanity for me. We can build on other's work
                    and create novel things. For example, not one person on this earth can build smart phone from the ground up, it is a huge collaborative effort.
                </p>
                <br />
                <p>
                    If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this page</Link> or shoot me an email at{' '}
                    <a href="mailto:janneriikonen0@gmail.com">
                        janneriikonen0@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: 1, paddingRight: '1rem' }}>
                        <p>
                            If I recall correctly, at 8 years old our class was given an assignment
                            to write about the most important invention in history. For me it immidiately
                            was Electricity. Looking back and refining the idea, I probably meant that the ability to harness electricity as a 
                            controllable resource was the most important invention for me.
                            This wasn't the only reason I went on to study EE in university. I also felt that out of the available disciplines
                            it was the most "hands on" one. Now as time has passed electricity has led me to automation and programming.
                            I like learning new things about the world and technology and hope to insipire others to do the same.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 1:</b> Me, 2023.
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <p>
                    My first encounter with programming was in university on an introductionary course to programming (Python).
                    I was 20 years old at the time. I was interested about the possibilities of programming but it didn't really catch on
                    until a couple years passed. I was way more into MATLAB and maths at the time. Artificial Intelligence solved the problem all beginner programmers face 
                    - how to turn your thoughts into a language the computer understands. Development of AI tools has been really fast and impressive and I try to keep up with the changes as much as I can.
                </p>
                <br />
                <p>
                    I by no means am a good programmer, I vibecode most of my projects and they're pretty simple in complexity.
                    It is a interesting hobby for the weekends and this page is the culmination of my work so far. This page is a showcase of my work and acts as a platform for me to keep improving.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={leo} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> My cat Leo at the time of writing my MSc thesis.
                        </sub>
                    </p>
                </div>
                <br />
                <br />
                <div
                    style={{
                        flex: 1,
                        textAlign: 'justify',
                        alignSelf: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <h3>My Hobbies</h3>
                    <br />
                    <p>
                        I play alot of sports. Most notably football. It encompasses pretty much all aspects of my life as training sessions
                        and matches take up the majority of my free time. 
                        Other sports I do are running, tennis, the gym, and what ever might come up.
                        I like to study the stock market and housing markets aswell. 
                    </p>
                    <br />
                    <div className="captioned-image">
                        <img src={football} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 3:</b> Me on the pitch.
                            </sub>
                        </p>
                    </div>
                    <br />
                    <p>
                        You can find more about my hobby projects as well as work projects
                        under the PROJECTS tab on left.
                    </p>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer.
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:janneriikonen0@gmail.com">
                        janneriikonen0@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '80%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
