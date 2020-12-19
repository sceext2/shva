import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import FolderOpen from '@material-ui/icons/FolderOpen'
import Mic from '@material-ui/icons/KeyboardVoice'
import Tune from '@material-ui/icons/Tune'
import Waves from '@material-ui/icons/Waves'
import Settings from '@material-ui/icons/Settings'
import Info from '@material-ui/icons/Info'
import TopBar from '../../component/TopBar'
import ItemBtn from './ItemBtn'
import style from './index.module.scss'

function Home() {
  return (
    <>
      <TopBar title="人声分析" />
      <div className={ style.home }>
        <Container maxWidth="sm">
          <Grid container spacing={ 4 } justify="center">
            <ItemBtn title="打开文件" to="/open">
              <FolderOpen />
            </ItemBtn>
            <ItemBtn title="录制声音" to="/record">
              <Mic />
            </ItemBtn>
            <ItemBtn title="截取片段" to="/cut">
              <Tune />
            </ItemBtn>
            <ItemBtn title="频率分析" to="/freq">
              <Waves />
            </ItemBtn>
            <ItemBtn title="设置" to="/config">
              <Settings />
            </ItemBtn>
            <ItemBtn title="关于" to="/about">
              <Info />
            </ItemBtn>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Home
