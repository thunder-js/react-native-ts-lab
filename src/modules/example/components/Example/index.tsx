import * as React from 'react'
import { View, Text } from 'react-native'

const Example = ({
  message
}) => (
  <View>
    <Text>Hello world !!!</Text>
    <Text>{message}</Text>
  </View>
)

export default Example