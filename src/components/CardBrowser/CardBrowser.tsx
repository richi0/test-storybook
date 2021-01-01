import React from 'react'
import './CardBrowser.css'
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
  changeCard(n: number) {
    if (n === 1 && this.state.cardNumber < this.props.cards.length - 1) {
      this.setState({ cardNumber: this.state.cardNumber + 1 }, () => {
        this.moveCard(1)
        console.log(this.state.cardNumber, this.state.pos)
      })
    }
    if (n === -1 && this.state.cardNumber > 0) {
      this.setState({ cardNumber: this.state.cardNumber - 1 }, () =>
        this.moveCard(-1),
      )
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  moveCard(n: number) {
    if (this.props.cards.length > 1) {
      let browser = document.getElementById('card-browser')
      let card_0 = document.getElementById('card-0')
      let card_1 = document.getElementById('card-1')
      if (card_0 && card_1) {
        let diff = Math.abs(
          card_0.getBoundingClientRect().left -
            card_1.getBoundingClientRect().left,
        )
        const time = 500
        ;(async () => {
          for (let i = 0; i < 100; i++) {
            await this.sleep(time / 100).then(() => {
              if (browser) {
                browser.style.left = `-${
                  this.state.pos + (diff / 100) * i * n
                }px`
              }
            })
          }
        })().then(() =>
          this.setState({ pos: diff * this.state.cardNumber }, () =>
            console.log(this.state.pos),
          ),
        )
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
        <div className="sm:hidden cc-CardBrowser">
          <div id="card-browser" className="flex content-center relative gap-20">
            {this.props.cards.map((card, index) => (
              <div
                id={`card-${index}`}
                key={index}
                className="min-w-full flex flex-wrap justify-center content-center"
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
