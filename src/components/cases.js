import React from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';

const caseStudies = [
    {
        id: 1,
        subtitle: "Blockchain",
        title: "Open Source Tech for Immutable digital ledgers",
        img: "bcnc-min"
    },
    {
        id: 2,
        subtitle: "Artificial Intelligence",
        title: "Intelligence demonstrated by machines",
        img: "ai-min"
    },
    {
        id: 3,
        subtitle: "Internet of Things",
        title: "Objects that talk to each other",
        img: "iot-min"
    }
];

const Cases = () => {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <CasesPrev />
                    </div>
                    <div className="cases-arrow next">
                        <CasesNext />
                    </div>
                </div>
                <div className="row">
                    {caseStudies.map(caseItem => (
                        <div className="case" key={caseItem.id}>
                            <div className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className="case-image">
                                <img 
                                  src={require(`../assets/${caseItem.img}.png`)}
                                  alt={caseItem.title}
                                  />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cases;