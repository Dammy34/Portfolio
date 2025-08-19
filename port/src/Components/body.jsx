import githubIcon from '../github.svg';
import gmail from '../gmail.svg';
import linkedIn from '../logmein.svg';
import profilePic from '../assets/profile.jpg';
function Body() {
    return(
        <>
        <div>
            <div className='hero'>
                <img src={profilePic} className='profile'/>
            <p>Hi, i'm Dammy <br /> I'm an Electronics and Computer Engineering student, that's
            passionate about creating modern, efficient, and user friendly digital solutions.</p>

            </div>
                <div className='hero2'>
                    <h2>My Projects</h2>
                    <button className='s-btn'>See more</button>
                </div>
                <div className="proj">
                    <div className="proj-card">
                        <h3>E-Commerce Webpage <br /></h3>
                        <p>A fully responsive and interactive e-commerce interface built with React.js and styled with CSS</p>
                        <h5>Key features include :</h5> 
                        <ul><li>Dynamic Product Listing from JSON</li>
                        <li>Add-to-cart functionality</li>
                        <li>State management</li>
                        <li>Optimized for mobile and desktop viewports</li>
                        <li>Clean, modern UI</li></ul>

                    </div>
                    <div className="proj-card">
                        <h3>Job-listing App</h3>
                        <p>A sleek and responsive job board interface built with react.js that allows users to explore and filter job opportunities dynamically</p>
                         <h5>Key features include :</h5> 
                        <ul><li>Interactive job cards with tags</li>
                        <li>Real time filtering based on selected tags</li>
                        <li>State management</li>
                        <li>Optimized for mobile and desktop viewports</li>
                        <li>Clean, modern UI</li></ul>
                    </div>
                    <div className="proj-card">
                        <h3>To-Do list app</h3>
                        <p>A simple and intuitive task management app built with react. It allows users to add and delete tasks, while keeping
                            everything neatly organized
                        </p>
                         <h5>Key features include :</h5> 
                        <ul><li>Data saved in local storage</li>
                        <li>Responsive design for mobile and desktop</li>
                        <li>Add,Delete, or mark tasks easily</li>
                        <li>Clean, modern UI</li></ul>
                    </div>
                    <div className="proj-card">
                        <h3>Weather app</h3>
                        <p>Simple and responsive weather app that fetches real-time weather data using external API. Designed for clarity and ease of use</p>
                         <h5>Key features include :</h5> 
                        <ul><li>Live weather data fetched from API</li>
                        <li>Clean and minimal UI</li>
                        <li>Optimized for mobile and desktop viewports</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Let's Work Together 👋</h2>
                    <h3>I'm just a click away,select Prefered platform</h3>
                    <div className="foot">
            <a href="#" className='icon'><img src={githubIcon} alt=""  className='icon'/></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adekoladamola34@gmail.com" target='_blank' className='icon'><img src={gmail} alt=""  className='icon'/></a>
            <a href="#" className='icon'><img src={linkedIn} alt="" className='icon'/></a>
        </div>
                </div>
        </div>
        </>
    )
}
export default Body;