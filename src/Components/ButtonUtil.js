import React from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { useSelector } from 'react-redux'
import { startStringGen, startVectorGen } from '../Store/Actions'

const useStyles = makeStyles({
  button: {
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 80,
    background: grey[300],
    minWidth: 80
  }
})

const ButtonUtil = () => {
    const classes = useStyles()
    const dataType = useSelector(state => state.dataType)
    const allState = useSelector(state => state)
    const StartGenerator = () => {
        console.log('---------------GEN START')
            switch (dataType) {
                case 'String': 
                    startStringGen(allState)
                    break
                case 'Vector':
                    startVectorGen(allState)
                    break
                default:
                    console.log('Please select data type')
            }
          console.log('---------------GEN END')
    }

    return (
        <Container>
            <Grid container
            direction='row'
            spacing={3}
            >
            <Grid item xs={3} sm={3}>
                <Button className={classes.button}
                    onClick={() => StartGenerator()}
                >
                    提交
                </Button>
            </Grid>
            <Grid item xs={3} sm={3}>
                <Button className={classes.button}>
                    全部清除
                </Button>
            </Grid>
            </Grid>
        </Container>
    )
}

export default ButtonUtil