import React, { useState } from "react"
import { connect } from "react-redux"
import { setData, setCard } from "redux/dashboard/dashboardActions"
import { useHistory } from "react-router-dom"

const EditCard = (props) => {
  const { setData, data, card, setCard } = props
  const [info, setInfo] = useState(card)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    let tempData = { ...data }
    let List = data[info.category].filter((el) => el.id !== info.id)
    List.push(info)
    tempData[info.category] = List
    setData(tempData)
    setCard(null)

    history.push("/")
  }

  return (
    <div className="p-4">
      <div className="row">
        <div
          className="col-md d-flex justify-content-center align-items-center flex-column"
          style={{ height: 80 + "vh" }}
        >
          <h3>EDIT CARD</h3> <br />
          <form
            onSubmit={(e) => handleSubmit(e)}
            style={{ width: 50 + "vw" }}
            className="card p-5"
          >
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
            <button type="submit" className="btn btn-primary mt-5">
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
