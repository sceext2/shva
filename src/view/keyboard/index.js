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
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { SOUND_CONFIG_DEFAULT } from '../../config/config_default'
import { WAVE_TYPE_LIST, KEY_LIST } from '../../audio_core/gen/data'
import { playSound } from '../../audio_core/gen'
import TopBar from '../../component/TopBar'
import style from './index.module.scss'

function checkValueAndSet(value, set) {
  const v = Number.parseInt(value)
  if ((!Number.isNaN(v)) && Number.isFinite(v) && (v > 0)) {
    set(v)
  }
}

function Keyboard() {
  const [iTime, setTime] = useState(SOUND_CONFIG_DEFAULT.time)
  const [iGain, setGain] = useState(SOUND_CONFIG_DEFAULT.gain)
  const [iWave, setWave] = useState(SOUND_CONFIG_DEFAULT.wave)

  const onChangeTime = (event) => {
    checkValueAndSet(event.target.value, setTime)
  }
  const onChangeGain = (event, value) => setGain(value)
  const onChangeWave = (event) => setWave(event.target.value)

  const onPlay = (freq) => {
    playSound(freq, iTime, iGain, iWave)
  }

  return (
    <>
      <TopBar back="/" title="键盘测试" />

      <div className={ style.keyboard }>
        <Container maxWidth="md">
          <div className="layout-box">
            <Typography color="textSecondary">发出标准钢琴按键相同频率的声音.</Typography>

            <List className="config-box">
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
                <ListItemText primary="波形" secondary="(不同波形的音色不同)" />
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

            <Grid container spacing={ 1 } className="btn-box">
              {
                KEY_LIST.map(x => {
                  const click = () => onPlay(x.freq)

                  return (
                    <Grid item xs={ 2 } key={ x.text }>
                      <Button
                        variant="outlined"
                        size="small"
                        className="btn-key"
                        onClick={ click }
                      >
                        <span className="name">{x.text}</span>
                        <Typography color="textSecondary" component="span" className="freq">{ x.freq }</Typography>
                      </Button>
                    </Grid>
                  )
                })
              }
            </Grid>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Keyboard
