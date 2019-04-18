import React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import Icon from '@material-ui/core/Icon'

import { APP_COLORS } from '../components/theme'

const PostListItem = ({ children, linkTo }) =>
  <Card style={{ background: APP_COLORS.mint, padding: '15px', marginBottom: '15px' }}>
    <CardContent>
      {children}
    </CardContent>
    <CardActions>
      <Button href={linkTo} >
        More
        <Icon style={{ paddingLeft: '5px' }}>call_made</Icon>
      </Button>
    </CardActions>
  </Card>;

export default PostListItem;
