import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import style from './ItemBtn.module.scss'

const useStyles = makeStyles(theme => ({
  papper: {
    padding: theme.spacing(2),
  },
}))

// props: {
//   to: '/about',  // route path
//   title: '',
//
//   children: '',  // icon
// }

function ItemBtn(props) {
  const s = useStyles()

  return (
    <Grid item xs={ 6 } className={ style.itemBtn }>
      <Link to={props.to}>
        <ButtonBase focusRipple>
          <Paper className={ 'layout-box ' + s.papper }>
            { props.children }
            <Typography component="span" variant="subtitle1" className="title">{ props.title }</Typography>
          </Paper>
        </ButtonBase>
      </Link>
    </Grid>
  )
}

export default ItemBtn
