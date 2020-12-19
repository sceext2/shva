import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/core/Slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import VolumeUp from '@material-ui/icons/VolumeUp'
import { SOUND_CONFIG_DEFAULT } from '../../config/config_default'
import { WAVE_TYPE_LIST } from '../../audio_core/gen/data'
import { playSound } from '../../audio_core/gen'
import Alert from '../../component/Alert'
import TopBar from '../../component/TopBar'
import style from './index.module.scss'

function checkValueAndSet(value, set) {
  const v = Number.parseInt(value)
  if ((!Number.isNaN(v)) && Number.isFinite(v) && (v > 0)) {
    set(v)
  }
}

function Sound() {
  const [iFreq, setFreq] = useState(SOUND_CONFIG_DEFAULT.freq)
  const [iTime, setTime] = useState(SOUND_CONFIG_DEFAULT.time)
  const [iGain, setGain] = useState(SOUND_CONFIG_DEFAULT.gain)
  const [iWave, setWave] = useState(SOUND_CONFIG_DEFAULT.wave)
  const [isPlay, setPlay] = useState(false)
  const [debugInfo, setDebug] = useState('')

  const onChangeFreq = (event) => {
    checkValueAndSet(event.target.value, setFreq)
  }
  const onChangeTime = (event) => {
    checkValueAndSet(event.target.value, setTime)
  }
  const onChangeGain = (event, value) => setGain(value)
  const onChangeWave = (event) => setWave(event.target.value)

  const onPlayClose = () => {
    setPlay(false)
  }

  const onPlay = () => {
    const result = playSound(iFreq, iTime, iGain, iWave)
    // debug
    console.log(result)

    setDebug(JSON.stringify(result))
    setPlay(true)
  }

  return (
    <>
      <TopBar back="/" title="听觉测试" />

      <div className={ style.sound }>
        <Container maxWidth="md">
          <div className="layout-box">
            <Typography color="textSecondary">通过发出特定频率的声音, 来测试听觉.  随着年龄的增加, 能够听到的最高频率逐渐下降.</Typography>

            <List className="config-box">
              <Divider />
              <ListItem>
                <ListItemText primary="频率" secondary="20 Hz ~ 20_000 Hz" />
                <ListItemSecondaryAction>
                  <TextField variant="outlined" type="number" value={ iFreq } onChange={ onChangeFreq } />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="时长" secondary="ms" />
                <ListItemSecondaryAction>
                  <TextField variant="outlined" type="number" value={ iTime } onChange={ onChangeTime } />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="音量" secondary={ (iGain * 1e2).toFixed(0) + ' %'} />
                <ListItemSecondaryAction className="slide-box">
                  <Slider value={ iGain } onChange={ onChangeGain } min={ 0 } max={ 2 } step={ 0.01 } />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="波形" secondary="(不同波形的音色不同, 正弦波是最纯粹的波形)" />
                <ListItemSecondaryAction>
                  <Select value={ iWave } onChange={ onChangeWave } variant="outlined">
                    {
                      WAVE_TYPE_LIST.map(x => (
                        <MenuItem key={ x.id } value={ x.id }>{ x.text }</MenuItem>
                      ))
                    }
                  </Select>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </List>

            <Button
              variant="contained"
              color="primary"
              size="large"
              className="play"
              startIcon={ <VolumeUp /> }
              onClick={ onPlay }
            >播放</Button>

            <div className="debug-info">
              <pre>{ debugInfo }</pre>
            </div>
          </div>
        </Container>
      </div>

      <Snackbar open={ isPlay } autoHideDuration={ iTime } onClose={ onPlayClose }>
        <Alert onClose={ onPlayClose } severity="success">
          正在播放:  { iFreq } Hz,  { iTime } ms,  { (iGain * 1e2).toFixed(0) } %,  { iWave }
        </Alert>
      </Snackbar>
    </>
  )
}

export default Sound
