import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import style from './index.module.scss'

const useStyles = makeStyles(theme => ({
  btn: {
    marginRight: theme.spacing(2)
  }
}))

// props: {
//   back?: '/',
//   title: '',
// }

function TopBar(props) {
  const s = useStyles()

  const back = props.back != null ? (
    <Link to={ props.back }>
      <IconButton edge="start" className={ s.btn } color="inherit">
        <ArrowBack />
      </IconButton>
    </Link>
  ) : null

  const titleClassName = props.back != null ? 'title' : 'title-only'

  return (
    <AppBar position="sticky" className={ style.topBar }>
      <Toolbar>
        { back }
        <Typography variant="h6" className={ titleClassName }>{ props.title }</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
