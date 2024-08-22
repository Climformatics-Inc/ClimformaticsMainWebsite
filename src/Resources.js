import React from 'react';
import './Resources.css';
import publication1 from './images/ocean.jpg';
import publication2 from './images/drought.jpg';
import publication3 from "./images/arctic.jpg";
import award1 from "./images/calseedaward.png";
import award2 from "./images/verge23.jpeg";
import award3 from "./images/american-made.png";



const Resources = () => {
  return (
    <div>
      <div className="resources-header-section">
        Publications & News
      </div>
      <div className="resources-container">
        {/* Example of one box, repeat for the other two */}
        <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021GL094519" target="_blank" rel="noreferrer" className="resource-box">
          <img src={publication1} alt="Publication 1" />
          <div className="resource-info">
            <h2>The Oceanic Barrier Layer in the Eastern Indian Ocean as a Predictor for Rainfall Over Indonesia and Australia</h2>
            <p className="date-posted">November 6, 2021</p>
            <p>Salinity stratification near Sumatra creates a thermal barrier that warms the upper ocean from November to January, enhancing local rainfall and impacting monsoon moisture distribution across the tropical Indo-Pacific, thereby influencing seasonal rainfall predictions in the Indonesian-Australian region.</p>
          </div>
        </a>
        {/* Repeat above <a> element for the other two boxes with their respective details */}
        {/* Example of one box, repeat for the other two */}
        <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021GL093129" target="_blank" rel="noreferrer" className="resource-box">
          <img src={publication2} alt="Publication 1" />
          <div className="resource-info">
            <h2>
                Reversing Sahelian Droughts<br></br>
            <br></br>
            <br></br>
            <br></br></h2>
            <p className="date-posted">July 3, 2021</p>
            <p>Research on cooling the Indian Ocean via pipes to reverse Sahel droughts shows potential to increase regional precipitation but risks reducing rainfall in sub-Saharan East Africa, suggesting millions of pipes would be needed for such a large-scale intervention.</p>
          </div>
        </a>
        {/* Repeat above <a> element for the other two boxes with their respective details */}
        {/* Example of one box, repeat for the other two */}
        <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018EF000820" target="_blank" rel="noreferrer" className="resource-box">
          <img src={publication3} alt="Publication 1" />
          <div className="resource-info">
            <h2>Increasing Arctic Sea Ice Albedo Using Localized Reversible Geoengineering
            <br></br>
            <br></br>
            </h2>
            <p className="date-posted">May 21, 2018</p>
            <p>The method involves applying reflective materials like glass microspheres to young Arctic sea ice to enhance its reflectivity and preservation, potentially cooling the Arctic and mitigating global warming by restoring ice area and volume.</p>
          </div>
        </a>
        {/* Repeat above <a> element for the other two boxes with their respective details */}
      </div>
      <div className="resources-header-section">
        Awards & Advancments
      </div>
      <div className="resources-container">
          {/* Example of one box, repeat for the other two */}
        <a href="https://www.newenergynexus.com/blog/6-startups-that-could-shape-californias-clean-energy-transition/" target="_blank" rel="noreferrer" className="resource-box">
          <img src={award1} alt="Award 1" />
          <div className="resource-info">
            <h2>
                CALSEED Prototype Award</h2>
            <p className="date-posted">February 14, 2024</p>
            <p>Climformatics builds models to simulate the global climate using state-of-the-art, Nobel-Prize winning algorithms. It predicts with a high degree of certainty the climate and weather state for long-term timescales at specific geographic locations.</p>
          </div>
        </a>
        {/* Repeat above <a> element for the other two boxes with their respective details */}
        {/* Example of one box, repeat for the other two */}
        <a href="https://www.linkedin.com/search/results/content/?keywords=climformatics%20verge%2023&sid=96-&update=urn%3Ali%3Afs_updateV2%3A(urn%3Ali%3Aactivity%3A7123731025662275586%2CBLENDED_SEARCH_FEED%2CEMPTY%2CDEFAULT%2Cfalse)" target="_blank" rel="noreferrer" className="resource-box">
          <img src={award2} alt="Award 2" />
          <div className="resource-info">
            <h2>VERGE 23</h2>
            <p className="date-posted">October 24, 2023</p>
            <p>Climformatics attended and presented at VERGE 23, the leading climate tech event accelerating solutions to pressing challenges, serving as the central hub for leaders from business, government, solution providers, and startups in the climate community to collaboratively address the climate crisis.</p>
          </div>
        </a>
        {/* Repeat above <a> element for the other two boxes with their respective details */}
        {/* Example of one box, repeat for the other two */}
        <a href="https://network.americanmadechallenges.org/prize-winners/ckAJiebwH6hGeKsWc4Losh" target="_blank" rel="noreferrer" className="resource-box">
          <img src={award3} alt="Award 3" />
          <div className="resource-info">
            <h2>
                <br></br>
                American-Made Solar Prize</h2>
            <p className="date-posted">2022</p>
            <p>Climformatics was a finalist in the American-Made Solar Prize, a multimillion-dollar competition aimed at energizing U.S. solar innovation by accelerating the entrepreneurial process from years to months through a series of contests.</p>
          </div>
        </a>
        {/* Repeat above <a> element for the other two boxes with their respective details */}
      </div>
    </div>
  );
};

export default Resources;
