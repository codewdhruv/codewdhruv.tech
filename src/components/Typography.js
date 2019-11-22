import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'rebass'

const Rule = ({ sx, ...props }) => (
  <Box
    as="hr"
    sx={{
      maxWidth: '8rem',
      height: '0.5rem',
      marginX: 0,
      border: 0,
      backgroundColor: 'orange',
      ...sx,
    }}
    {...props}
  />
)

Rule.propTypes = {
  sx: PropTypes.object,
}

const List = ({ sx, children, ...props }) => (
  <Text
    as="ul"
    sx={{
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Text>
)

List.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node.isRequired,
}

const ListItem = ({ children, ...props }) => (
  <Text as="li" {...props}>
    {children}
  </Text>
)

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Rule, List, ListItem }
