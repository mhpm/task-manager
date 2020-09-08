import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setCard, setData } from "redux/dashboard/dashboardActions"

const CardStyled = styled.div`
  ${(props) =>
    props.priority &&
    css`
      border-left: 4px solid ${(props) => props.theme[props.priority]};
    `};
`

const Btn = styled.span`
  color: white;
  ${(props) =>
    props.priority &&
    css`
      background-color: ${(props) => props.theme[props.priority]} !important;
    `};
`

const BtnEdit = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
  color: gray;
`
const BtnDelete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: gray;
`

const Card = (props) => {
  const { info, setCard, data, setData } = props

  const hanleDelete = () => {
    let tempData = { ...data }
    let list = data[info.category].filter((el) => el.id !== info.id)

    tempData[info.category] = list
    setData(tempData)
  }

  return (
    <CardStyled
      draggable
      onDragStart={() => setCard(info)}
      className="card mt-3 shadow-sm"
      priority={info.priority}
    >
      <div className="card-body">
        <h5 className="card-title">{info.title}</h5>
        <Link to={"/card/" + info.id}>
          <BtnEdit onClick={() => setCard(info)} className="btn float-right">
            <span className="material-icons">create</span>
          </BtnEdit>
        </Link>
        <BtnDelete onClick={hanleDelete} className="btn float-right">
          <span className="material-icons">delete</span>
        </BtnDelete>

        <p className="card-text">{info.description} lore</p>
        <Btn href="#" className="badge float-right" priority={info.priority}>
          {info.priority}
        </Btn>
      </div>
    </CardStyled>
  )
}

const mapStateToProps = (state) => ({
  data: state.dashboard.data,
})

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
  setCard: (card) => dispatch(setCard(card)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
