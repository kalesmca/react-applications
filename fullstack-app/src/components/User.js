import React from "react";

export default function User(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={props.user.avatar_url}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.user.login}</h5>
        <p className="card-text">Github User</p>
        <a
          href={props.user.html_url}
          target="_blank"
          className="btn btn-primary"
        >
          Visit Repo
        </a>
      </div>
    </div>
  );
}
