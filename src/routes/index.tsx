import { FC } from 'preact/compat'
import { useAuth } from '../providers/AuthProvider'
import { Authenticate } from '../components/Authenticate'
import { Header } from '../components/Header'
import { TickerTape, CryptoCurrencyMarket } from 'react-ts-tradingview-widget'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import { Footer } from '../components/Footer'
import { ReactComponent as IconAnalysis } from '../images/icon-analysis.svg'
import { ReactComponent as IconResearch } from '../images/icon-research.svg'
import { ReactComponent as IconPlatform } from '../images/icon-platform.svg'
import { ReactComponent as IconUser } from '../images/icon-user.svg'
import { ReactComponent as IconBank } from '../images/icon-bank.svg'
import { ReactComponent as IconTrade } from '../images/icon-trade.svg'
import { Whatsapp } from '../components/Whatsapp'


const Index: FC = () => {
  return (
    <div class={styles.index}>
      <Header />
      <main>
        <section class={styles.intro}>
          <div class="container">
            <h1>
              <span>Experience</span> the best in forex trading
            </h1>
            <p>
              Discover the thrilling world of Forex trading with us. Our website
              offers valuable insights, tools, and resources to empower your
              journey in the Forex market.
            </p>
            <Link to="/signup">
              <button>Get Started</button>
            </Link>
          </div>
        </section>

        <div class={styles.tape}>
          <TickerTape />
        </div>

        <section class={`container ${styles.features}`}>
          <h2>Features</h2>
          <p>
            NoxeTrade is one of the best trading platform, packed with features
            for seamless trading
          </p>

          <div>
            <IconPlatform />
            <h3>Advanced Trading Platform</h3>
            <p>
              Powerful and intuitive platform for seamless trading and analysis
            </p>
          </div>

          <div>
            <IconAnalysis />
            <h3>Real-time Market Data</h3>
            <p>Stay informed with live quotes, charts, and news updates</p>
          </div>

          <div>
            <IconResearch />
            <h3>Expert Research and Analysis</h3>
            <p>In-depth reports and insights for informed trading strategies</p>
          </div>
        </section>

        <section>
          <h2 class="container">
            View trending crypto currencies in the market
          </h2>
          <div class={styles.crypto}>
            <CryptoCurrencyMarket width="100%" height="300" />
          </div>
        </section>

        <section class={`container ${styles.account}`}>
          <h2>Get started in few steps</h2>
          <div>
            <IconUser />
            <p>Create an account</p>
          </div>
          <div>
            <IconBank />
            <p>Link with bank account</p>
          </div>
          <div>
            <IconTrade />
            <p>Start trading</p>
          </div>
        </section>

        <section class={styles.bottom}>
          <div class="container">
            <h2>Start your Forex journey today with NoxeTrade</h2>
            <p>
              Let us be your trusted companion as you pursue your trading goals.
              Explore our website and take the first step towards success.
            </p>
            <Link to="/signup">
              <button>Get Started</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <Whatsapp />
    </div>
  )
}

export const Component: FC = () => {
  const { user } = useAuth()
  return (
    <Authenticate predicate={() => !user} redirect="/home">
      <Index />
    </Authenticate>
  )
}
