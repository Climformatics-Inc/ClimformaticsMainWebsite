import React from 'react';
import './About.css'; 
import teamImage from './images/team.jpg'; 
import cofounder2Image from './images/detelina.jpg'; 
import cofounder1Image from './images/subarna.jpg';
import teamMember1Image from './images/divyam.jpg';
import teamMember2Image from './images/ryan.jpg';
import teamMember3Image from './images/teamMember3Image.jpeg';
import teamMember4Image from './images/Nirvik.jpeg';
import image1 from './images/calseed.png'; 
import image2 from './images/american.png';
import intern0 from './images/Matthew.jpeg';
import intern1 from './images/Harnoor.jpeg';
import intern2 from './images/Fariha.jpeg';
import intern3 from './images/Weijie Yang.jpeg';
import intern4 from './images/chunting zheng.jpeg';
import intern5 from './images/Derek Yao.jpeg';
import intern6 from './images/Nick Zhao.jpeg';


const About = () => {
    return (
      <div className="about-page">
        <div className="team-image-container">
          <img src={teamImage} alt="Our Team" className="team-image"/>
          <div className="overlay-text">OUR TEAM</div>
        </div>
        <div className="cofounders-container">
          <div className="cofounder">
            <div className="cofounder-image-container">
                <img src={cofounder1Image} alt="Co-founder 1" className="cofounder-image"/>
                <a href="https://www.linkedin.com/in/subarna-bhattacharyya/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                    <div className="linkedin-icon"></div>
                </a>
            </div>
            <div className="cofounder-info">
              <div className="cofounder-name">Dr. Subarna Bhattacharyya</div>
              <div className="cofounder-position">CEO</div>
            </div>
          </div>
          <div className="cofounder">
            <div className="cofounder-image-container">
                <img src={cofounder2Image} alt="Co-founder 2" className="cofounder-image"/>
                <a href="https://www.linkedin.com/in/detelinaivanova/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                    <div className="linkedin-icon"></div>
                </a>
            </div>
            <div className="cofounder-info">
              <div className="cofounder-name">Dr. Detelina Ivanova</div>
              <div className="cofounder-position">CTO</div>
            </div>
          </div>
        </div>
        <div className="team-members-container">
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={teamMember1Image} alt="Divyam Goel" className="team-member-image"/>
                        <a href="https://www.linkedin.com/in/divyam-g-33775a114/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Divyam Goel</div>
                        <div className="team-member-position">Principal MLE</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={teamMember2Image} alt="Ryan L" className="team-member-image"/>
                        <a href="https://www.linkedin.com/in/rlim8/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Ryan L.</div>
                        <div className="team-member-position">Data Analytics</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={teamMember3Image} alt="Anant Mishra" className="team-member-image"/>  
                        <a href="https://www.linkedin.com/in/anant--mishra/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Anant Mishra</div>
                        <div className="team-member-position">Product Manager</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={teamMember4Image} alt="Nirvik Sen" className="team-member-image"/>
                        <a href="https://www.linkedin.com/in/nirviksen/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Nirvik Sen</div>
                        <div className="team-member-position">Marketing</div>
                    </div>
                </div>
            </div>
            <div className="team-members-container">
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={intern0} alt="Matthew Haynam" className="team-member-image"/>
                        <a href="https://www.linkedin.com/in/matthewshaynam/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Matthew Haynam</div>
                        <div className="team-member-position">MLE Intern</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={intern1} alt="Harnoor Dhillon" className="team-member-image"/>
                        <a href="https://www.linkedin.com/in/harnoor-dhillon-447aa818a/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Harnoor Dhillon</div>
                        <div className="team-member-position">SWE Intern</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={intern2} alt="Fariha B" className="team-member-image"/>
                        <a href="https://www.linkedin.com/in/fariha-babar/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Fariha Babar</div>
                        <div className="team-member-position">Data Science Intern</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={intern3} alt="Climformatics Interns" className="team-member-image"/>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Weijie Yang</div>
                        <div className="team-member-position">Data Science Intern</div>
                    </div>
                </div>
            </div>
            <div className="team-members-container">
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={intern4} alt="Chunting Zheng" className="team-member-image"/>
                        <a href="https://www.linkedin.com/in/chuntingzheng/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Chunting Zheng</div>
                        <div className="team-member-position">Data Science Intern</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={intern5} alt="Derek Yao" className="team-member-image"/>
                        <a href="https://www.linkedin.com/in/derekyao/" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Derek Yao</div>
                        <div className="team-member-position">Data Science Intern</div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-image-container">
                        <img src={intern6} alt="Nick Zhao" className="team-member-image"/>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-overlay">
                            <div className="linkedin-icon"></div>
                        </a>
                    </div>
                    <div className="team-member-info">
                        <div className="team-member-name">Nick Zhao</div>
                        <div className="team-member-position">Data Science Intern</div>
                    </div>
                </div>
                {/* <div className="team-member">
                    <img src={intern3} alt="Climformatics Interns" className="team-member-image"/>
                    <div className="team-member-info">
                        <div className="team-member-name">Intern</div>
                        <div className="team-member-position">Data Science Intern</div>
                    </div>
                </div> */}
            </div>
            <div className="founders-background">
                <p>
                    Prior to the establishment of their enterprise, our two founders, Detelina Ivanova Ph.D. and Subarna Bhattacharya Ph.D. were engaged at the Program for Climate Model Diagnosis and Intercomparison at Lawrence Livermore National Laboratory (LLNL). Collaborating with their peers at the laboratory, they were instrumental in contributing to the assessment reports of the Intergovernmental Panel on Climate Change (IPCC). Recognizing the imperative to integrate global climate modeling and forecasting into the core of business decision-making for healthcare networks, they launched Climformatics.
                </p>
            </div>
            <div className="calseed-section">
                <img src={image1} alt="Calseed" />
                <img src={image2} alt="American Made" />
            </div>
    </div>
    );
  };

export default About;
