import React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

const PostListItem = ({ children, linkTo }) =>
  <div
  style={{
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
  }}
  >
    <Card>
    <CardContent>
      {children}
    </CardContent>
    <CardActions>
      <Button
        color="primary"
        variant="outlined"
        href={linkTo}
      >
        Read More
      </Button>
    </CardActions>
    </Card>
  </div>;

export default PostListItem;
