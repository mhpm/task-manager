import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { setData, setCard } from "redux/dashboard/dashboardActions"
import { useHistory } from "react-router-dom"
const faker = require("faker")

const EditCard = (props) => {
  const { setData, data, card, setCard } = props
  const { id } = props.match.params

  const [info, setInfo] = useState({
    id: "",
    title: "",
    description: "",
    priority: "low",
    category: "todo",
  })
  const history = useHistory()

  useEffect(() => {
    if (card !== null) setInfo(card)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (id === "new") {
      handleAddCard()
      return
    }

    let tempData = { ...data }
    let List = data[info.category].filter((el) => el.id !== info.id)
    List.push(info)
    tempData[info.category] = List
    setData(tempData)
    setCard(null)

    history.push("/")
  }

  const handleAddCard = () => {
    let tempData = { ...data }
    info.id = faker.random.uuid()
    tempData["todo"].push(info)
    setData(tempData)
    history.push("/")
  }

  function getTitle() {
    let title = id === "new" ? "NEW" : "EDIT"
    return <h3 className="text-center"> {title} CARD</h3>
  }

  return (
    <div>
      <div
        className="row m-0 justify-content-center align-items-center"
        style={{ height: 90 + "vh" }}
      >
        <div className="col-sm col-md-7 col-lg-5">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="card p-5 shadow-sm border-0"
          >
            {getTitle()} <br />
            <div className="form-group">
              <label>Title</label>
              <input
                type="title"
                className="form-control"
                id="title"
                value={info.title}
                onChange={(e) => setInfo({ ...info, title: e.target.value })}
              />
              {info.title === "" && (
                <small className="form-text text-danger">
                  you must provide a title
                </small>
              )}
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                type="description"
                className="form-control"
                id="description"
                value={info.description}
                onChange={(e) =>
                  setInfo({ ...info, description: e.target.value })
                }
              />
              {info.description === "" && (
                <small className="form-text text-danger">
                  you must provide a short description
                </small>
              )}
            </div>
            <div className="form-group">
              <label>Priority</label>
              <select
                value={info.priority}
                onChange={(e) => setInfo({ ...info, priority: e.target.value })}
                className="custom-select"
                id="priority"
                required
              >
                <option selected value="low">
                  Low
                </option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <button
              disabled={!info.title || !info.description}
              type="submit"
              className="btn btn-primary btn-lg mt-4 rounded-pill"
            >
              save
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.dashboard.data,
  card: state.dashboard.card,
})

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
  setCard: (card) => dispatch(setCard(card)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCard)
