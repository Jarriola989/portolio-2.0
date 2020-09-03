import React from "react";
import { useQuery } from "@apollo/client";
import moment from "moment";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { PROJECT_TYPE } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faLock,
  faTimes,
  faCalendar,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faYoutube,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";
import { GET_REPO } from "../graphql/get-repo";

const ProjectModal = (props) => {
  const {
    name,
    description,
    notes,
    images,
    liveLink,
    clientRepo,
    serverRepo,
    demoLink,
    trello,
    type,
    repo,
  } = props.project || {};

  const { loading, error, data } = useQuery(GET_REPO, {
    variables: {
      repoName: repo ? repo.name : "",
      owner: repo ? repo.owner : "",
    },
  });

  return (
    <div className={props.project ? "project-modal" : "project-modal hide"}>
      <FontAwesomeIcon
        icon={faTimes}
        className="project-modal--exit"
        onClick={props.closeProject}
      />
      <AwesomeSlider
        className={
          props.project ? "project-modal--images" : "project-modal--images hide"
        }
        style={{ backgroundColor: "black" }}
      >
        {images
          ?.filter((image) => image.src !== "")
          .map(({ src, alt }, key) => {
            return (
              <div style={{ backgroundColor: "transparent" }} key={key}>
                <img className="project-modal--image" src={src} alt={alt} />
              </div>
            );
          })}
      </AwesomeSlider>

      <div className="project-modal--details">
        {data ? (
          <div className="project-modal--timestamps">
            <span>
              <FontAwesomeIcon
                icon={faCalendar}
                className="project-modal--timestamp-icon"
              />
              <b>Created on:</b>&nbsp;&nbsp;
              {moment(data.repository.createdAt).format("DD MMM YYYY")}
            </span>
            <span>
              <FontAwesomeIcon
                icon={faCodeBranch}
                className="project-modal--timestamp-icon"
              />
              <b>Last pushed:</b>&nbsp;&nbsp;
              {moment(data.repository.pushedAt).format("DD MMM YYYY")}
            </span>
          </div>
        ) : (
          ""
        )}

        <h2 className="project-modal--title">{name}</h2>
        <p className="project-modal--description">{description}</p>
        {notes?.length > 0 ? (
          <p className="project-modal--notes">
            <b>Note: </b>
            {notes}
          </p>
        ) : (
          ""
        )}
        <div className="project-modal--links">
          <span className="project-modal--extra-links">
            {liveLink?.length > 0 ? (
              <a href={liveLink} className="project-modal--link">
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="project-modal--link-icon"
                />
                &nbsp; Live Link
              </a>
            ) : type === PROJECT_TYPE.personal ? (
              <button disabled className="project-modal--link">
                Not Deployed
              </button>
            ) : (
              <button disabled className="project-modal--link">
                <FontAwesomeIcon
                  icon={faLock}
                  className="project-modal--link-icon"
                />
                &nbsp; Private Link
              </button>
            )}
            {clientRepo?.length > 0 ? (
              <a href={clientRepo} className="project-modal--link transparent">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="project-modal--link-icon big-icon"
                />
                &nbsp; UI Repo
              </a>
            ) : type === PROJECT_TYPE.personal ? (
              ""
            ) : (
              <button disabled className="project-modal--link transparent">
                <FontAwesomeIcon
                  icon={faLock}
                  className="project-modal--link-icon"
                />
                &nbsp; Private UI Repo
              </button>
            )}
            {serverRepo?.length > 0 ? (
              <a href={clientRepo} className="project-modal--link transparent">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="project-modal--link-icon big-icon"
                />
                &nbsp; API Repo
              </a>
            ) : type === PROJECT_TYPE.personal ? (
              ""
            ) : (
              <button disabled className="project-modal--link transparent">
                <FontAwesomeIcon
                  icon={faLock}
                  className="project-modal--link-icon"
                />
                &nbsp; Private API Repo
              </button>
            )}
          </span>
          {/* TODO: open these links in new tab? */}
          <span className="project-modal--extra-links extra">
            {demoLink ? (
              <a href={demoLink}>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="extra-big-icon youtube"
                />
              </a>
            ) : (
              ""
            )}
            {trello ? (
              <a href={trello}>
                <FontAwesomeIcon
                  icon={faTrello}
                  className="extra-big-icon trello"
                />
              </a>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
