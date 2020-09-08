import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setCard } from "redux/dashboard/dashboardActions"

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
  right: 0;
  color: gray;
`

const Card = (props) => {
  const { info, setCard } = props

  const onDragStart = () => {
    localStorage.setItem("item", JSON.stringify(info))
  }

  return (
    <CardStyled
      draggable
      onDragStart={() => onDragStart()}
      className="card mt-3 shadow-sm"
      priority={info.priority}
    >
      <div className="card-body">
        <h5 className="card-title">{info.title}</h5>
        <Link to={"/card/" + info.id}>
          <BtnEdit
            onClick={() => setCard(info)}
            className="btn float-right"
            priority={info.priority}
          >
            <span className="material-icons">create</span>
          </BtnEdit>
        </Link>
        <p className="card-text">{info.description} lore</p>
        <Btn href="#" className="badge float-right" priority={info.priority}>
          {info.priority}
        </Btn>
      </div>
    </CardStyled>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCard: (card) => dispatch(setCard(card)),
})

export default connect(null, mapDispatchToProps)(Card)
