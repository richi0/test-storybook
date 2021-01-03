import React from 'react'
import styles from './CardBrowser.module.css'
import { PRIMARY } from '../../globals'

export interface CardBrowserProps {
  /**
   * Array of cards
   */
  cards: React.ReactNode[]
}

interface CradBrowserState {
  cardNumber: number
  pos: number
}

export class CardBrowser extends React.Component<
  CardBrowserProps,
  CradBrowserState
> {
  state: CradBrowserState = {
    cardNumber: 0,
    pos: 0,
  }

  browserRef = React.createRef<HTMLDivElement>();
  cardRef = this.props.cards.map(() => React.createRef<HTMLDivElement>())

  changeCard(n: number) {
    if (n === 1 && this.state.cardNumber < this.props.cards.length - 1) {
      this.setState({ cardNumber: this.state.cardNumber + 1 }, () => {
        this.moveCard(1)
      })
    }
    if (n === -1 && this.state.cardNumber > 0) {
      this.setState({ cardNumber: this.state.cardNumber - 1 }, () =>
        this.moveCard(-1),
      )
    }
  }

  moveCard(n: number) {
    if (this.props.cards.length > 1) {
      let browser = this.browserRef.current
      let card_0 = this.cardRef[0].current
      let card_1 = this.cardRef[1].current
      if (card_0 && card_1 && browser) {
        let diff = Math.abs(
          card_0.getBoundingClientRect().left -
            card_1.getBoundingClientRect().left,
        )
        browser.style.transform = `translate(${
          this.state.pos - diff * n
        }px, 0px)`
        this.setState({ pos: -(diff * this.state.cardNumber) })
      }
    }
  }

  render() {
    return (
      <div>
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 relative">
          {this.props.cards.map((card, key) => (
            <div key={key}>{card}</div>
          ))}
        </div>
        <div className={`sm:hidden ${styles.browser}`}>
          <div
            className="flex content-center relative gap-20 duration-500 transform"
            ref={this.browserRef}
          >
            {this.props.cards.map((card, index) => (
              <div
                key={index}
                className="min-w-full flex flex-wrap justify-center content-center"
                ref={this.cardRef[index]}
              >
                {card}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between content-center mt-8">
            <button
              className={`focus:outline-none transition duration-500 transform  ${
                this.state.cardNumber === 0 ? '' : 'hover:-translate-x-2'
              }`}
              onClick={() => this.changeCard(-1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="-25 -25 50 50"
                className={`text-black stroke-current  ${
                  this.state.cardNumber === 0
                    ? 'text-gray-300'
                    : `hover:text-${PRIMARY()}`
                }`}
              >
                <line x1="-10" y1="0" x2="10" y2="-20" />
                <line x1="-10" y1="0" x2="10" y2="20" />
              </svg>
            </button>
            <div className="flex flex-wrap justify-center content-center">{`${
              this.state.cardNumber + 1
            } of ${this.props.cards.length}`}</div>
            <button
              className={`focus:outline-none transition duration-500 transform  ${
                this.props.cards.length - 1 === this.state.cardNumber
                  ? ''
                  : 'hover:translate-x-2'
              }`}
              onClick={() => this.changeCard(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="-25 -25 50 50"
                className={`text-black stroke-current  ${
                  this.props.cards.length - 1 === this.state.cardNumber
                    ? 'text-gray-300'
                    : `hover:text-${PRIMARY()}`
                }`}
              >
                <line x1="10" y1="0" x2="-10" y2="-20" />
                <line x1="10" y1="0" x2="-10" y2="20" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
