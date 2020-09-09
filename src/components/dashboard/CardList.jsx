import React from "react"
import Card from "./Card"

const colors = {
  todo: "secondary",
  inprogress: "warning",
  done: "success",
}

const CardList = ({ list = [], title, category }) => {
  return (
    <div className="mt-4">
      <h5
        className={`"mt-4 border-bottom pb-2 border-${colors[category]} text-secondary"`}
      >
        {title}
      </h5>
      {list.map((item) => (
        <Card key={item.id} info={item} />
      ))}
    </div>
  )
}

export default CardList
