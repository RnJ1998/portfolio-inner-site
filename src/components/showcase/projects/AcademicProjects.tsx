import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface AcademicProjectsProps {}

const AcademicProjects: React.FC<AcademicProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Academic Projects</h1>
            <br />
            <div className="text-block">
                <h3>Introduction</h3>
                <p>
                    This page highlights significant projects and research from
                    my academic career at LUT-University. It includes my
                    Master's and Bachelor's theses, along with key coursework
                    that demonstrates my foundational knowledge in electrical
                    engineering, grid technologies, and network analysis.
                </p>
            </div>

            <div className="text-block">
                <h3>Theses</h3>
                <br />
                <h3>
                    Master's Thesis: Teollisuusverkon 500 ja 400 V
                    Jakelujännitteiden Vertailu
                </h3>
                <ul>
                    <li>
                        <p>
                            Provided a comparative analysis of 500V and 400V
                            distribution voltages within an industrial network,
                            using the Kemira Chemicals plant in Kuusankoski as a
                            case study.
                        </p>
                    </li>
                    <li>
                        <p>
                            Evaluated technical and economic factors to
                            determine the optimal voltage level for industrial
                            applications.
                        </p>
                    </li>
                </ul>
                <p>
                    <b>Awarded Grade:</b> 5/5.
                </p>
                <a href="https://urn.fi/URN:NBN:fi-fe2023040434888" target="_blank" rel="noreferrer">
                    <p>
                    View Report Document (PDF)
                    </p>
                </a>

                <br />
                <br />

                <h3>
                    Bachelor's Thesis: Pienjänniteverkkoinfrastruktuurin
                    kapasiteetin riittäminen sähköautoilun lisääntyessä
                </h3>
                <ul>
                    <li>
                        <p>
                            Investigated the capacity of Finnish low-voltage
                            infrastructure to handle the increasing popularity
                            of electric vehicles (EVs).
                        </p>
                    </li>
                    <li>
                        <p>
                            Analyzed the effects of different EV penetration
                            levels on distribution networks through a
                            comprehensive literature review of grid simulations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Determined that uncontrolled charging can lead to
                            overloaded components and unacceptable voltage
                            drops, indicating a need for network reinforcement.
                        </p>
                    </li>
                    <li>
                        <p>
                            Concluded that implementing centralized smart
                            charging systems could significantly improve network
                            usability and reduce the need for costly
                            infrastructure upgrades.
                        </p>
                    </li>
                </ul>
                <p>
                    <b>Awarded Grade:</b> 4/5.
                </p>
                <a href="https://urn.fi/URN:NBN:fi-fe2021042611949" target="_blank" rel="noreferrer">
                    <p>
                    View Report Document (PDF)
                    </p>
                </a>
            </div>

            <div className="text-block">
                <h3>University Coursework & Research</h3>
                <br />
                <h3>Wind Farm Design and Analysis</h3>
                <ul>
                    <li>
                        <p>
                            Detailed the design and analysis of an electrical
                            grid for a 7-turbine wind farm.
                        </p>
                    </li>
                    <li>
                        <p>
                            Included cable grid dimensioning and component
                            selection (switchgear, transformers, wind turbines).
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided a comprehensive analysis of electrical
                            quantities at various points under nominal and half
                            wind speeds.
                        </p>
                    </li>
                    <li>
                        <p>
                            Offered loss estimations across different
                            components.
                        </p>
                    </li>
                    <li>
                        <p>
                            Examined active and reactive power production under
                            varying grid conditions.
                        </p>
                    </li>
                </ul>
                <a href={`${process.env.PUBLIC_URL}/documents/1.Assignment_on_wind_power.pdf`} target="_blank">
                    <p>
                    View Report Document (PDF)
                    </p>
                </a>

                <br />
                <br />

                <h3>Medium Voltage Feeder Development Plan</h3>
                <ul>
                    <li>
                        <p>
                            Presented a comprehensive five-year development and
                            investment plan for a medium-voltage overhead line
                            electrical distribution network.
                        </p>
                    </li>
                    <li>
                        <p>
                            Included analysis of customer-experienced outages
                            and costs.
                        </p>
                    </li>
                    <li>
                        <p>
                            Evaluated network component values and conducted
                            profitability analysis for line replacements.
                        </p>
                    </li>
                    <li>
                        <p>Assessed field disconnector benefits.</p>
                    </li>
                    <li>
                        <p>
                            Outlined a strategic renovation plan to enhance
                            reliability and cost-effectiveness within a 400,000
                            € budget, aligning with electricity market
                            regulations.
                        </p>
                    </li>
                </ul>
                <a href={`${process.env.PUBLIC_URL}/documents/2.Electrical_distribution.pdf`} target="_blank">
                    <p>
                    View Report Document (PDF)
                    </p>
                </a>

                <br />
                <br />

                <h3>Electrical Network Protection Systems</h3>
                <ul>
                    <li>
                        <p>
                            Explored the design and analysis of electrical
                            network protection systems.
                        </p>
                    </li>
                    <li>
                        <p>
                            Detailed relay protection principles, circuit
                            breaker and disconnector functionalities, and
                            selective protection methods.
                        </p>
                    </li>
                    <li>
                        <p>
                            Included comprehensive calculations and design for
                            short-circuit and earth-fault protection in
                            medium-voltage networks.
                        </p>
                    </li>
                    <li>
                        <p>
                            Assessed fault currents, voltage effects, and touch
                            voltage safety.
                        </p>
                    </li>
                    <li>
                        <p>
                            Discussed earth faults in isolated and compensated
                            systems.
                        </p>
                    </li>
                </ul>
                <a href={`${process.env.PUBLIC_URL}/documents/4.Network_protection_report.pdf`} target="_blank">
                    <p>
                    View Report Document (PDF)
                    </p>
                </a>
            </div>

            <br />
            <ResumeDownload />
        </div>
    );
};

export default AcademicProjects;