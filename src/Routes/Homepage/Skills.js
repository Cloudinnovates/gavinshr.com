import { NavLink } from "react-router-dom"
import { skills } from "../../data";
import "./Skills.css"

export default function Skills() {
  return (
    <div id="skills">
      <div className="center">
        <i className="fa fa-codepen fa-2x"></i>
        <h1>Skills</h1>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.skill} className="skills-item">
              <span>
                <h2>{skill.skill}</h2>
              </span>

              <span>
                {
                  skill.moreInfo == null ? <br/> :
                  <p className="skills-item-subsection">{skill.moreInfo}</p>
                }
              </span>
              <span>
                <div className="skills-item-subsection">
                {
                  skill.url == null ? ""
                  :
                    skill.urlIsNavLink === true ?
                      <NavLink className="link" to={skill.url}>{skill.urlName}</NavLink>
                      :
                        skill.urlOpensInNewTab === true ?
                          <a className="link" href={skill.url} target="_blank" rel="noopener noreferrer">{skill.urlName}</a>
                          :
                          <a className="link" href={skill.url}>{skill.urlName}</a>
                }
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
