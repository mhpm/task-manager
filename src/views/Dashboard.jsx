import React from "react"
import CardList from "components/dashboard/CardList"
import { connect } from "react-redux"
import { setData, setCard } from "redux/dashboard/dashboardActions"
import styled from "styled-components"
import { Link } from "react-router-dom"

const BtnAdd = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 40px;
  font-weight: 500;
`

const Dashboard = (props) => {
  const { setData, data, card, setCard } = props

  const onDropHandler = (e, category) => {
    e.preventDefault()

    let newData = { ...data }
    newData[card.category] = newData[card.category].filter(
      (el) => el.id !== card.id
    )

    card.category = category
    newData[category].push(card)
    setData(newData)
    setCard(null)
  }

  const onDragOver = (e) => e.preventDefault()

  return (
    <div className="p-4">
      <div className="row">
        <div className="col-md text-center">
          <h3>DASHBOARD</h3>
        </div>
      </div>
      <br />
      <div className="row" onDragOver={(e) => onDragOver(e)}>
        <div className="col-md" onDrop={(e) => onDropHandler(e, "todo")}>
          <CardList list={data.todo} title="TO DO" category="todo" />
        </div>
        <div className="col-md" onDrop={(e) => onDropHandler(e, "inprogress")}>
          <CardList
            list={data.inprogress}
            title="IN PROGRESS"
            category="inprogress"
          />
        </div>
        <div className="col-md" onDrop={(e) => onDropHandler(e, "done")}>
          <CardList list={data.done} title="DONE" category="done" />
        </div>
      </div>
      <Link to={"/card/new"}>
        <BtnAdd
          onClick={() => setCard(null)}
          className="btn btn-info btn-sm rounded-circle"
        >
          +
        </BtnAdd>
      </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
