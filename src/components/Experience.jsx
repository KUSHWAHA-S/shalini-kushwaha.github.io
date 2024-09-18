
import '../styles/Experience.css';

function Experience() {
    return (
        <>
            <section className="experience">
                <div className="container flex-col">
                    <h1>Experience</h1>

                    <div className="ex-container flex-col">
                        <div className="ex-container-sub">
                            <div className="ex-box" id="ex-box-1">
                                <div className="ex-stats">
                                    <div className="ex-stats-figure">2</div>
                                    <div className="ex-stats-symbol">+</div>
                                </div>
                                <div className="ex-description">years</div>
                            </div>
                            <div className="ex-box" id="ex-box-2">
                                <div className="ex-stats">
                                    <div className="ex-stats-figure">100</div>
                                    <div className="ex-stats-symbol">%</div>
                                </div>
                                <div className="ex-description">passion</div>
                            </div>
                            <div className="ex-box" id="ex-box-3">
                                <div className="ex-stats">
                                    <div className="ex-stats-figure">8</div>
                                    <div className="ex-stats-symbol">+</div>
                                    <div className="ex-stats-figure">Successful</div>
                                    <div className="ex-stats-figure">Collaborations</div>
                                </div>
                                <div className="ex-description">Collaborated with cross-functional teams to create innovative solutions. Excelled in Agile environments, ensuring seamless integration and consistently delivering high-impact results.</div>
                            </div>
                        </div>
                        <div className="ex-container-sub">
                            <div className="ex-box" id="ex-box-4">

                                <div className="ex-stats-figure">Software Engineer</div>
                                <div className="ex-stats-sub" >@ HCL Technologies</div>

                                <div className="ex-description">Worked on high-stakes projects for industry giants PayPal and Western Union, crafting seamless digital solutions in the fintech space.</div>
                            </div>
                            <div className="ex-container-sub">
                                <div className="ex-box" id="ex-box-5">
                                    <div className="ex-stats-figure">Frameworks in Action.</div>
                                    <div className="ex-description">names in array to animate</div>
                                </div>
                                <div className="ex-box" id="ex-box-6">
                                    <div className="ex-stats-figure">Clean, efficient Code</div>
                                    {/* <img></img> */}
                                </div>
                            </div>
                            <div className="ex-container-sub">
                                <div className="ex-box" id="ex-box-7">
                                    <div className="ex-stats-figure"> Boosted engagement with responsive optimised UI/UX design.</div>
                                    {/* <img src="" alt="" /> */}
                                </div>
                                <div className="ex-box" id="ex-box-8">
                                <div className="ex-stats-figure"> Blazing-fast performance with optimized efficiency.</div>
                                {/* <img src="" alt="" /> */}
                               </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        </>
    );
}

export default Experience;
// div1 height 300vh
// div sticky
