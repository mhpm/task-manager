import React from "react"
import Card from "./Card"

const CardList = ({ list = [] }) => {
  return (
    <div>
      {list.map((item) => (
        <Card key={item.id} info={item} />
      ))}
    </div>
  )
}

export default CardList
