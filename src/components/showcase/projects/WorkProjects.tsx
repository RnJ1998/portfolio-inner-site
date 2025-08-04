import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface WorkProjectsProps {}

const WorkProjects: React.FC<WorkProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Work Projects</h1>
            <br />
            <div className="text-block">
                <h3>Introduction</h3>
                <p>
                    This page showcases a selection of my professional work,
                    highlighting my skills in electrical automation design,
                    network design, and project management. Each project
                    demonstrates my ability to apply technical knowledge to
                    solve real-world challenges for various clients.
                </p>
            </div>

            <div className="text-block">
                <h3>Electrical Automation Design, 2023 – Present</h3>
                <br />
                <p>
                    Executed electrical and automation design for
                    maintenance, modernization, and new process section
                    projects across various industrial sites.
                    Responsibilities included designing new motor and
                    instrument circuits, field cabinet layouts, and
                    control room HMI updates.
                    Managed logic integration, software compatibility,                        and seamless integration of new equipment with
                    existing automation systems.
                </p>
                <br />
                <p>
                    <b>Technologies:</b> CADMATIC, ABB DOC, SIMATIC STEP7 /
                    TIA Portal, InTouch, LOGO!
                    </p>
                <br />
                <br />
                <h3>Commissioning Work, 2024 – Present</h3>
                <br />
                <p>
                    Comissioning work related to new equipment and
                    modernization.
                </p>
                <p>
                    <b>Technologies:</b> Valmet, Siemens, WAGO, ABB,
                    Honeywell -I/O systems
                </p>
                <br />
                <br />
                <h3>Railway Bridge Control Modernizations, 2023 – Present</h3>
                <br />
                <p>
                    Oversaw the modernization of railway bridge control
                    systems, including the design of new instrumentation
                    and field cabinets. Successfully integrated legacy bridge equipment with
                    the new control system to ensure seamless operation.
                </p>
                <p>
                    <b>Technologies:</b> CADMATIC
                </p>
                <br />
                <br />
                <h3>
                    Medium Voltage Switchgear, Substation Secondary Design, 2023 – Present
                </h3>
                <br />
                <p>Switchgear integration to SCADA system. Control cabinet design and integration. Protection relay control circuit design. Substation building basic/layout design.</p>
                <p>
                    <b>Technologies:</b> ABB DOC, CADMATIC, M-FILES
                </p>
            </div>
            <div className="text-block">
                <h3>Network Design</h3>
                <br />
                <h3>Distribution Network Design in Rural Areas, 11.2021 – 01.2022</h3>
                <br />
                <p>Modernization of existing network components. Power flow calculations and component dimensioning. Protection calculations.</p>
                <p>
                    <b>Technologies:</b> Trimble NIS
                </p>
                <br />
                <br />
                <h3>Distribution Network Design, Industrial Network, 02.2025 – 04.2025</h3>
                <br />
                <p>New industrial network components dimensioning. Power flow and protections calculations.</p>
                <p>
                    <b>Technologies:</b> ABB DOC, ETAP
                </p>
            </div>

            <div className="text-block">
                <h3>Power Quality and Analysis, 2023 –</h3>
                <br />
                <p>
                    Analysis of power quality issues in industrial and
                    distribution networks. Harmonic analysis, flicker measurements, and voltage
                    dip assessments. Recommendations for mitigation techniques.
                </p>
                <p>
                    <b>Technologies:</b> TOPVIEW Analyzing Software, Data
                    Analysis Tools
                </p>
            </div>

            <br />
            <ResumeDownload />
        </div>
    );
};

export default WorkProjects;