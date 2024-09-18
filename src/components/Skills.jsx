import '../styles/Skill.css';
import InfiniteLoop from '../components/molecules/InfiniteLoop';

function Skills() {
    return (

        <section className="skill">
            <div className="container">
                {/* <span className="skill-bg">SKILLS</span> */}
                <div className="skill-wrapper flex-row">
                    <div className="skill-type">Skills</div>
                    <InfiniteLoop />
                </div>
                <div className="skill-wrapper flex-row">
                    <div className="skill-type">Skills</div>
                    <InfiniteLoop />
                </div>
            </div>
        </section>

    );
}

export default Skills;
