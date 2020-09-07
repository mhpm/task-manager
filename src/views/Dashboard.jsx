import React, { useState, useEffect } from "react"
import CardList from "components/dashboard/CardList"
import DATA from "./data"

const Dashboard = () => {
  const [data, setData] = useState(DATA)

  const dragHandler = (e, category) => {
    e.preventDefault()
    let item = JSON.parse(localStorage.getItem("item"))
    let newData = { ...data }
    newData[item.category] = newData[item.category].filter(
      (el) => el.id !== item.id
    )

    item.category = category
    newData[category].push(item)
    setData(newData)
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className="p-4">
      <div className="row">
        <div className="col-md text-center">
          <h3>DASHBOARD</h3>
        </div>
      </div>
      <br />
      <div className="row" onDragOver={(e) => onDragOver(e)}>
        <div className="col-md" onDrop={(e) => dragHandler(e, "todo")}>
          <h5 className="mt-4 border-bottom pb-2 border-secondary text-secondary">
            TO DO
          </h5>
          <CardList list={data.todo} />
        </div>
        <div className="col-md" onDrop={(e) => dragHandler(e, "inprogress")}>
          <h5 className="mt-4 border-bottom pb-2 border-warning text-secondary">
            IN PROCESS
          </h5>
          <CardList list={data.inprogress} />
        </div>
        <div className="col-md" onDrop={(e) => dragHandler(e, "done")}>
          <h5 className="mt-4 border-bottom pb-2 border-success text-secondary">
            DONE
          </h5>
          <CardList list={data.done} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
