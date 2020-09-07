import React from "react"
import styled, { css } from "styled-components"

const CardStyled = styled.div`
  ${(props) =>
    props.priority &&
    css`
      border-left: 4px solid ${(props) => props.theme[props.priority]};
    `};
`

const Btn = styled.a`
  color: white;
  ${(props) =>
    props.priority &&
    css`
      background-color: ${(props) => props.theme[props.priority]} !important;
    `};
`

const BtnEdit = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  color: gray;
`

const Card = ({ info }) => {
  const onDragStart = () => {
    localStorage.setItem("item", JSON.stringify(info))
  }
  return (
    <CardStyled
      draggable
      onDragStart={() => onDragStart()}
      className="card mt-3"
      priority={info.priority}
    >
      <div className="card-body">
        <h5 className="card-title">{info.title}</h5>
        <BtnEdit href="#" className="btn float-right" priority={info.priority}>
          <span class="material-icons">create</span>
        </BtnEdit>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{info.description}</p>
        <Btn href="#" className="btn float-right" priority={info.priority}>
          {info.priority}
        </Btn>
      </div>
    </CardStyled>
  )
}

export default Card
