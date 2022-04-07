import React from "react";

function TodoCard({
  id,
  title,
  description,
  time,
  completed,
  onDelete,
  onUpdate,
  el,
  index,
}) {
  let badgeClass = "";
  let badgeBg = "";
  if (completed) {
    badgeClass = "badge bg-success";
    badgeBg = "border-success alert-success";
  } else {
    badgeClass = "badge bg-warning";
    badgeBg = "border-warning alert-warning";
  }

  return (
    <div className={"border rounded p-3 mb-3 " + badgeBg}>
      <h3>
        TD#{id}: {title}
      </h3>
      <p className={badgeClass}>{completed ? "Is completed" : "Is pending"}</p>
      <p>{description} </p>
      <div className="d-flex">
        <p>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
        </p>
        <p>
          <button
            onClick={() => onUpdate(el, index)}
            className="btn btn-success btn-sm "
          >
            Edit
          </button>
        </p>
      </div>
      <p className="d-flex flex-end"> {time} </p>
    </div>
  );
}

export default TodoCard;
