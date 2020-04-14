import React, { Component } from 'react';
import './Card.scss';
import { connect } from 'react-redux';
import cx from "classnames";
import PropTypes from "prop-types";

class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cardRotete: false,
            changeCard: false
        }

        this.formatCardNumber = this.formatCardNumber.bind(this)
    }

    formatCardNumber(number) {
        let numbers = number.toString()
        .replace(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/, "$1 $2 $3 $4");

        return {
            first: numbers.split(" ")[0],
            second: numbers.split(" ")[1],
            thirdy: numbers.split(" ")[2],
            fourty: numbers.split(" ")[3]
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.rotateCard !== prevProps.rotateCard) {
            this.setState({cardRotete: this.props.rotateCard});
        }

        if (this.props.backImage !== prevProps.backImage) {
            this.setState({changeCard: this.props.backImage});
        }
    }

    render() {
        const {cardNumber, cardName, cvv, shelfLife} = this.props

        const rotete = cx({
            'card__container': true,
            'rotate': this.state.cardRotete
        });

        const changeCardImage = cx({
            'card__front': true,
            'card-imge-complete-front': this.state.changeCard
        });

        const changeCardImageBack = cx({
            'card__back': true,
            'card-imge-complete-back': this.state.changeCard
        });

        return (
            <div className="card">
                <div className={rotete}>
                    <div className={changeCardImage}>
                        <div className="card__front-container">
                            <div className="card__digit-container">
                                <span className="card__digit">
                                    {cardNumber ?
                                    this.formatCardNumber(cardNumber).first : '****'}
                                </span>

                                <span className="card__digit">
                                    {cardNumber && this.formatCardNumber(cardNumber).second ?
                                    this.formatCardNumber(cardNumber).second : '****'}
                                </span>

                                <span className="card__digit">
                                    {cardNumber && this.formatCardNumber(cardNumber).thirdy ?
                                    this.formatCardNumber(cardNumber).thirdy : '****'}
                                </span>

                                <span className="card__digit">
                                    {cardNumber && this.formatCardNumber(cardNumber).fourty ?
                                    this.formatCardNumber(cardNumber).fourty : '****'}
                                </span>

                            </div>
                            <div className="card__titular-info-wrapper">
                                <p className="card__titular-info">{ cardName || 'NOME DO TITULAR' }</p>
                                <p className="card__titular-info">{ shelfLife || '99/99' }</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={changeCardImageBack}>
                            <div className="card__back-cvv-container">
                                <span className="card__back-cvv">{ cvv || '***' }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    cardNumber: PropTypes.string,
    cardName: PropTypes.string,
    shelfLife: PropTypes.string,
    cvv: PropTypes.string,
    portionQuantity: PropTypes.number,
    rotateCard: PropTypes.bool,
    backImage: PropTypes.bool,
}

const mapStateToProps = (state) => {
    return {
        cardNumber: state.cardNumber,
        cardName: state.cardName,
        shelfLife: state.shelfLife,
        cvv: state.cvv,
        portionQuantity: state.portionQuantity,
        rotateCard: state.rotateCard,
        backImage: state.backImage,
    }
  }

export default connect(mapStateToProps)(Card);