import React from "react"

const Progress = ({ progress }) => {
  return (
    <div>
      Progress
      <div className="progress" style={{ height: 20 }}>
        <div
          className={`progress-bar ${progress === 100 ? "bg-success" : ""}`}
          role="progressbar"
          style={{ width: progress + "%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress}%
        </div>
      </div>
    </div>
  )
}

export default Progress
