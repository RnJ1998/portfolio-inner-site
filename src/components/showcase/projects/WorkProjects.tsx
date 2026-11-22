import React from 'react';

export interface WorkProjectsProps {}

const WorkProjects: React.FC<WorkProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Work Projects</h1>
            <br />
            <div className="text-block">
                <p>
                    My work spans electrical and automation design,
                    commissioning, network and substation design, and power
                    quality. The projects below show how that work has developed
                    over time.
                </p>
            </div>

            <div className="text-block">
                <h3>Current Work | Turku Energia | Aug 2026 – Present</h3>
                <p>
                    My current work covers power plants and district heating
                    and cooling, across the same areas of electrical and
                    automation design, commissioning, network and substation
                    design.
                </p>
            </div>

            <div className="text-block">
                <h3>Selected Project Work Before Turku Energia</h3>
                <p>
                    These projects were completed before I joined Turku Energia.
                    Several ran in parallel, so the dates indicate each
                    project's period rather than a single continuous sequence.
                </p>
            </div>

            <div className="text-block">
                <h3>Data-Center Substation and Medium-Voltage Distribution Pre-Design | 2026</h3>
                <p>
                    Lead the pre-design work for a data-center 110/20kV substation
                    and medium-voltage distribution system.
                </p>
                <p>
                    <b>Technologies:</b> ETAP, CADMATIC, M-FILES
                </p>
            </div>

            <div className="text-block">
                <h3>Battery Energy Storage System (BESS) Grid Integration | 2026</h3>
                <p>
                    Lead the integration and pre-design work for a battery energy storage
                    system with the electrical grid.
                </p>
                <p>
                    <b>Technologies:</b> ETAP, CADMATIC, M-FILES
                </p>
            </div>

            <div className="text-block">
                <h3>MV Switchgear and Substation Design | 2023 – 2026</h3>
                <p>
                    Worked on switchgear integration with SCADA, control-cabinet
                    design, protection-relay control circuits, and substation
                    building layouts.
                </p>
                <p>
                    <b>Technologies:</b> ETAP, ABB DOC, CADMATIC, M-FILES
                </p>
            </div>

            <div className="text-block">
                <h3>Distribution Network Design in Rural Areas | 2021 – 2022</h3>
                <p>
                    Modernized existing network components through power-flow
                    and protection calculations, and component dimensioning.
                </p>
                <p>
                    <b>Technologies:</b> Trimble NIS
                </p>
            </div>

            <div className="text-block">
                <h3>Electrical Automation Design | 2023 – 2026</h3>
                <p>
                    Designed electrical and automation systems for maintenance,
                    modernization, and new process-section projects. Work
                    included motor and instrument circuits, field-cabinet
                    layouts, control-room HMI updates, and integrating new
                    equipment with existing automation systems.
                </p>
                <p>
                    <b>Technologies:</b> CADMATIC, ABB DOC, SIMATIC STEP 7 / TIA
                    Portal, InTouch, LOGO!
                </p>
            </div>

            <div className="text-block">
                <h3>Railway Bridge Control Modernizations | 2023 – 2026</h3>
                <p>
                    Designed instrumentation, field cabinets, andmotor circuits for railway
                    bridge control upgrades, integrating legacy equipment with
                    new control systems.
                </p>
                <p>
                    <b>Technologies:</b> CADMATIC
                </p>
            </div>

            <div className="text-block">
                <h3>Power-Quality Analysis | 2023 – 2026</h3>
                <p>
                    Analyzed power-quality issues in specific applications, including harmonics, flicker, and
                    voltage dips, and provided reports.
                </p>
                <p>
                    <b>Technologies:</b> TOPVIEW Analyzing Software, data
                    analysis tools
                </p>
            </div>

            <div className="text-block">
                <h3>Commissioning | 2024 – 2026</h3>
                <p>
                    Commissioned new equipment and supported modernization
                    work across a range of automation systems.
                </p>
                <p>
                    <b>Systems:</b> Valmet, Siemens, WAGO, ABB
                </p>
            </div>

        </div>
    );
};

export default WorkProjects;