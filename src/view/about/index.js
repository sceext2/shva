import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { P_VERSION, P_LICENSE } from '../../config'
import TopBar from '../../component/TopBar'
import style from './index.module.scss'

function About() {
  return (
    <>
      <TopBar back="/" title="关于" />
      <div className={ style.about }>
        <Container maxWidth="md">
          <div className="layout-box">
            <Typography variant="h1">shva 人声分析</Typography>
            <a className="main-link" target="_blank" href="https://github.com/sceext2/shva">https://github.com/sceext2/shva</a>

            <p className="version"><code>{ P_VERSION }</code></p>

            <Typography variant="h2">LICENSE</Typography>
            <pre className="license">{ P_LICENSE }</pre>
          </div>
        </Container>
      </div>
    </>
  )
}

export default About
