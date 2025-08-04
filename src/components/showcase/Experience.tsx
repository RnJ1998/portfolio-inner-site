import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Granlund Oy</h1>
                        <h4>Lappeenranta</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>EIA-Designer</h3>
                        <b>
                            <p>5.2023 – Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>EIA modernization projects</p>
                    </li>
                    <li>
                        <p>
                            Field instrumentation and cabinet design,
                            commissioning
                        </p>
                    </li>
                    <li>
                        <p>Substation secondary design projects</p>
                    </li>
                    <li>
                        <p>Short circuit calculations and relay settings</p>
                    </li>
                    <li>
                        <p>Substation switching operation design</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Kemira Chemicals Oy</h1>
                        <h4>Lappeenranta</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>EIA-Supervisor</h3>
                        <b>
                            <p>4.2022 – 4.2023 & 4.2021 – 9.2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            Supervision of electricians and automation
                            technicians
                        </p>
                    </li>
                    <li>
                        <p>
                            Instrument and automation system maintenance work
                        </p>
                    </li>
                    <li>
                        <p>Shutdown resource planning</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Asset Vision Oy</h1>
                        <h4>Lappeenranta</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Electrical Network Designer</h3>
                        <b>
                            <p>11.2021 – 1.2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>Distribution network design</p>
                    </li>
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home with Amy Sedaris</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
