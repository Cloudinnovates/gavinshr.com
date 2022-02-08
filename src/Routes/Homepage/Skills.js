import { NavLink } from "react-router-dom"
import { skills } from "../../data";

export default function Skills() {
  return (
    <div id="skills">
      <hr/>
      <h1>Skills</h1>

      <div>
        {skills.map((skill) => (
          <div key={skill.skill} style={{ paddingTop: "25px" }}>
            <span>
              <h2>{skill.skill}</h2>
            </span>

            <span>
              {
                skill.moreInfo == null ? <br/> :
                <p style={{ paddingTop: "5px" }}>{skill.moreInfo}</p>
              }
            </span>
            <span>
              <div style={{ paddingTop: "5px" }}>
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
  );
}
