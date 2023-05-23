import React from 'react';
import ReactDOM from 'react-dom';
import fullWidth from '../../util/fullWidth.js';
import { useMediaQuery } from '@mui/material';
import Layout from '../Layout.jsx';

const FoundingFullStackEngineer = () => {
    const mobileScreen = useMediaQuery('(max-width: 450px)');

    function go_back() {
        window.location.href = '/jobs'
    }

    const ApplyNow = () => (
        <>
            <div
                style={{
                    // color: "white",
                    fontSize: "16px",
                    fontWeight: "500",
                    background: "white",
                    width: "156px",
                    height: "44px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    border: "1px solid #D0D5DD",
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                    fontFamily: "DM Sans, sans-serif",
                    marginTop:mobileScreen?"64px":"",
                    marginBottom:mobileScreen?"80px":""
                }}
            >
                <a
                    href="mailto:jobs@helix3.io"
                    style={{
                        textDecoration: "none",
                        color: "black",
                    }}
                >
                    Apply Now
                </a>
            </div>
        </>
    );

    const styles = {
        hero: {
            display: "flex",
            flexDirection: "column",
            background: "#FFFFFF",
            fontFamily: "DM Sans, sans-serif",
        },

        // Fake Navbar
        navbar: {
            background: "black",
            color: "black",
            height: "50px",
            ...fullWidth,
        },

        detailHeader: {
            padding: mobileScreen ? "0px" : "40px 0px 0px 0px",
            display: mobileScreen ? "flex" : "block",
            justifyContent: mobileScreen ? "center" : "none",
            fontFamily: "DM Sans, sans-serif",
        },
        detailContext: {
            padding: "0px",
            fontFamily: "DM Sans, sans-serif",
        },

        subtext: {
            fontSize: mobileScreen ? "16px" : "20px",
            fontWeight: "400",
            fontFamily: "DM Sans, sans-serif",
        },

        paraSectionHeaders: {
            fontSize: mobileScreen ? "16px" : "20px",
            fontWeight: "700",
            marginBottom: "6px",
            fontFamily: "DM Sans, sans-serif",
        },

        mainHeading: {
            fontSize: mobileScreen ? "20px" : "36px",
            fontWeight: "700",
            marginTop: "10px",
            marginBottom: mobileScreen ? "10px" : "20px",
            fontFamily: "DM Sans, sans-serif",
        }
    };

    return (
        <Layout>
            <div style={styles.hero}>
                <div style={styles.detailHeader}>
                    <section style={{ ...styles.aboutSection, ...styles.header }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                onClick={go_back}
                                style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
                            >
                                <div style={{ cursor: "pointer" }}>
                                    <img
                                        style={{
                                            marginRight: "10px",
                                        }}
                                        alt="Job Arrow"
                                        src="/images/marketing-site/back.png"
                                    />
                                </div>
                                <p
                                    style={{
                                        color: "#4A4B4C",
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        cursor: "pointer",
                                    }}
                                >
                                    Jobs
                                </p>
                            </div>
                            {mobileScreen ? "" : <ApplyNow />}
                        </div>
                        <p style={styles.mainHeading}>Founding Engineer (Full Stack)</p>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#667085",
                                marginBottom: "30px"
                            }}
                        >
                            <div>
                                <img
                                    style={{
                                        marginRight: "10px",
                                    }}
                                    alt="Job Arrow"
                                    src="/images/marketing-site/location.png"
                                />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        marginRight: "20px",
                                    }}
                                >
                                    San Francisco
                                </p>
                            </div>
                            <div>
                                <img
                                    style={{
                                        marginRight: "10px",
                                    }}
                                    alt="Job Arrow"
                                    src="/images/marketing-site/timing.png"
                                />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                    }}
                                >
                                    Full-time
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div style={styles.detailContext}>
                    <section style={styles.paraSectionHeaders}>
                        <p style={{fontFamily: "'DM Sans', sans-serif" ,marginBottom:mobileScreen?"24px":"32px"}} >About Helix</p>
                    </section>
                    <p style={styles.subtext}>
                        We are building the customer support stack for the decentralized world
                        and its powered by community.
                    </p>
                    <br />
                    <p style={styles.subtext}>
                        Helix is a Web3 protocol that rewards community members for answering
                        questions. Think of it as decentralized Stack Overflow with crypto
                        rewards and on-chain reputation. We are working with several L1s to
                        supplement their developer support with Helix.{" "}
                    </p>
                    <br />
                    <p style={styles.subtext}>
                        Communities play a critical role in web3. At Helix, we are building
                        the product that empower and reward community members to support each
                        other. This helps the protocol to scale their customer support by
                        partnering with community members.{" "}
                    </p>
                    <br />
                    <p style={styles.subtext}>
                        We are starting with decentralizing the developer support (technical
                        questions). But, our goal is to decentralize all kinds of support
                        including regular customer support (non-technical questions).{" "}
                    </p>
                    <br />
                    <p style={styles.subtext}>
                        We are a fast growing crypto startup. We deeply care about our
                        mission. The founding team consists of entrepreneurs with experience
                        at Meta, LinkedIn, Microsoft and Uber. It's a fast growing Web3
                        company backed by some of the most well-known investors in Crypto.{" "}
                    </p>
                </div>
                <div style={styles.detailContext}>
                    <section style={styles.paraSectionHeaders}>
                        <p style={{ paddingTop: "24px", fontFamily: "DM Sans, sans-serif", marginBottom:"24px"}}>What we are looking for</p>
                    </section>
                    <p style={styles.subtext}>
                        Helix is looking to hire an experienced, rockstar as our first
                        full-time hire. You will be a founding engineer working with founders
                        to build the future of customer support.
                    </p>
                    <br />
                    <p style={styles.subtext}>
                        This is an incredible opportunity to make a meaningful impact on Web3.
                    </p>
                    <br />
                </div>
                <div style={styles.detailContext}>
                    <section style={styles.paraSectionHeaders}>
                        <p style={{ paddingBottom:"16px", fontFamily: "DM Sans, sans-serif"}}>Responsibilities</p>
                    </section>
                    <ul style={{ paddingLeft: "16px" , marginTop:"0px"}}>
                        <li>
                            <p style={styles.subtext}>
                                Work with our founders to define feature specifications
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Build products leveraging frameworks such as React & React Native
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Write clean, high-quality, high-performance, maintainable code
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Develop and support software including applications, database
                                integration, interfaces, and new functionality enhancements
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Support test and deployment of new products and features
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Thinking creatively about attack vectors, possible failures, and
                                disaster scenarios, modeling them in reproducible test
                                environments, and developing fixes{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Build automation to manage and deploy smart contracts and other
                                required tooling to manage the production releases{" "}
                            </p>
                        </li>
                    </ul>
                </div>
                <div style={styles.detailContext}>
                    <section style={styles.paraSectionHeaders}>
                        <p style={{marginTop:"8px", marginBottom:"16px", fontFamily: "DM Sans, sans-serif"}}>Qualifications</p>
                    </section>
                    <ul style={{ paddingLeft: "16px", marginTop:"0px" }}>
                        <li>
                            <p style={styles.subtext}>
                                Bachelor's degree in Computer Science (or related field){" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>3+ years of relevant work experience </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Experience with React and other front end technology{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Experience building and shipping high quality work and achieving
                                high reliability{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Experience developing web applications/services and backend APIs{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Experience with building distributed systems and understanding of
                                system design concepts{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Experience with test-driven development and use of testing
                                frameworks{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Comfort and/or experience working as a remote employee as a part
                                of a distributed team{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Ability to write and communicate effectively{" "}
                            </p>
                        </li>
                    </ul>
                </div>
                <div style={styles.detailContext}>
                    <section style={styles.paraSectionHeaders}>
                        <p style={{marginTop:"8px", marginBottom:"16px", fontFamily: "DM Sans, sans-serif"}}>Bonus Qualifications</p>
                    </section>
                    <ul style={{ paddingLeft: "16px", marginTop:"0px" }}>
                        <li>
                            <p style={styles.subtext}>
                                Strong interest in blockchain and other Web 3.0 technologies{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Familiarity with full-stack development{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Prior experience of working in product companies.
                            </p>
                        </li>
                    </ul>
                </div>
                <div style={styles.detailContext}>
                    <section style={styles.paraSectionHeaders}>
                        <p style={{marginTop:"8px", marginBottom:"16px", fontFamily: "DM Sans, sans-serif"}}>Benefits</p>
                    </section>
                    <ul style={{ paddingLeft: "16px" , marginTop:"0px"}}>
                        <li>
                            <p style={styles.subtext}>
                                Competitive compensation, including meaningful equity{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Health insurance, including medical, dental, and vision{" "}
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>Flexible PTO</p>
                        </li>
                    </ul>
                </div>
                <div style={styles.detailContext}>
                    <section style={styles.paraSectionHeaders}>
                        <p style={{marginTop:"8px", marginBottom:"16px", fontFamily: "DM Sans, sans-serif"}}>Sounds Exciting ?</p>
                    </section>
                    <ul style={{ paddingLeft: "16px" , marginTop:"0px", marginBottom:mobileScreen?"":"96px"}}>
                        <li>
                            <p style={styles.subtext}>
                                Click on Apply !
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>
                                Include the role's title in your subject line.
                            </p>
                        </li>
                        <li>
                            <p style={styles.subtext}>Send along links that best showcase the relevant things you've built and done. Resume, social handles, portfolio etc</p>
                        </li>
                    </ul>
                </div>
                {/* &nbsp;&nbsp; */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {!mobileScreen ? "" : <ApplyNow />}
                </div>
                &nbsp;&nbsp;
            </div>

        </Layout>
    );
};

const mntNode = document.getElementById('container');
ReactDOM.render(<FoundingFullStackEngineer />, mntNode);
