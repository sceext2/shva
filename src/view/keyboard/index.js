import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TopBar from '../../component/TopBar'
import style from './index.module.scss'

function Keyboard() {
  return (
    <>
      <TopBar back="/" title="键盘测试" />
      <div className={ style.keyboard }>
        <Container maxWidth="md">
          <div className="layout-box">
            TODO
          </div>
        </Container>
      </div>
    </>
  )
}

export default Keyboard
