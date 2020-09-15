import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setCard, updateDataStartAsync } from "redux/data/dataActions"

const CardStyled = styled.div`
  border-radius: 10px;

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
  top: 5px;
  right: 32px;
  color: gray;
`
const BtnDelete = styled.div`
  position: absolute;
  top: 5px;
  right: 7px;
  color: gray;
`

const Card = (props) => {
  const { info, setCard, data, updateData } = props

  const hanleDelete = () => {
    let tempData = { ...data }
    let list = data[info.category].filter((el) => el.id !== info.id)

    tempData[info.category] = list
    updateData(tempData)
  }

  return (
    <CardStyled
      draggable
      onTouchStart={() => setCard(info)}
      onDragStart={() => setCard(info)}
      className="card mt-3 shadow-sm"
      priority={info.priority}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            <h6 className="card-title font-weight-bolder text-dark">
              {info.title}
            </h6>
          </div>
          <div className="col-2"></div>
        </div>
        <Link to={"/card/" + info.id}>
          <BtnEdit onClick={() => setCard(info)} className="btn float-right">
            <i class="fas fa-edit"></i>
          </BtnEdit>
        </Link>
        <BtnDelete onClick={hanleDelete} className="btn float-right">
          <i class="fas fa-trash"></i>
        </BtnDelete>

        <p className="card-text text-muted">{info.description}</p>
        <Btn href="#" className="badge float-right" priority={info.priority}>
          {info.priority}
        </Btn>
      </div>
    </CardStyled>
  )
}

const mapStateToProps = (state) => ({
  data: state.cardList.data,
})

const mapDispatchToProps = (dispatch) => ({
  updateData: (data) => dispatch(updateDataStartAsync(data)),
  setCard: (card) => dispatch(setCard(card)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
