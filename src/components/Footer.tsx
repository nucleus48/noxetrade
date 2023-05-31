import { FC } from 'preact/compat'

export const Footer: FC = () => {
  return (
    <footer style={{background: "var(--black)", paddingBlock: "3rem"}}>
      <div class="container">
        <p>
          Noxetrade is a registered broker-dealer and member of [Your Country's
          Regulatory Organization]. Investments in securities involve risks,
          including the potential loss of principal. Noxetrade provides trading
          services and does not provide investment advice or recommendations.
          The information provided on this website is for informational purposes
          only and should not be construed as financial or investment advice.
          Please consult with your own advisors before making any investment
          decisions. Past performance is not indicative of future results.
        </p>
        <p>© 2023 noxetrade. All rights reserved</p>
      </div>
    </footer>
  )
}
