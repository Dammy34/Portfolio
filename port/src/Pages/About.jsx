import css from '../assets/icons/css.svg';
import html from '../assets/icons/Html.svg';
import git from '../assets/icons/git.svg';
import github from '../assets/icons/github.svg';
import react from '../assets/icons/react.svg';
import javascript from '../assets/icons/javaScript.svg';
import tailwind from '../assets/icons/tailwind.svg';
function About() {
    return(
            <div className="About">
            <h1 className="hi">Hi, i'm Dammy</h1>
            <div className="ab">
                <p>
                    A passionate Electronics and Computer Engineering student and aspiring 
                    software Engineer, who's  aim is to build and design solutions that matter and tailor 
                    the needs of the public. And i'm constantly exploring and growing to develop myself in every aspect of life and learning everything i can along the way.
                </p>
                <div className="wid">
                    <h2>What i do ?</h2>
                <p>
                    i specialize in frontend development. BuildIng responsive and user-focused web applications and cross platform interfaces
                    that feel smooth, modern and intuitive. </p>
                    <h2>My Skills</h2>
                    <div className="skill-grid">
                        <div className="skill-card">
                            <img src={react} alt="" />
                        </div>
                        <div className="skill-card">
                            <img src={css} alt="" />
                        </div>
                        <div className="skill-card">
                            <img src={html} alt="" />
                        </div>
                        <div className="skill-card">
                            <img src={javascript} alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src={git} alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src={github} alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src={tailwind} alt="" />
                        </div>

                    </div>
                </div>
            </div>
             <p>Feel free to <a href="adekoladamola34@gmail.com">email me</a>, check out my <a href="">Github</a>, or
                connect on <a href="">LinkedIn</a>.</p>
            </div>
            
    )
}
export default About;