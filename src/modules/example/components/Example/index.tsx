import * as React from 'react'
import { View, Text, FlatList } from 'react-native'

const myData = [{
  name: 'Rafael',
  age: 13,
}]

const MyFlatList = FlatList as FlatList<{ name: string, age: number}>

const Example = ({
  message,
}) => (
  <View>
    <MyFlatList
      data={myData}
      renderItem={(data) => (<Text>{data.item.name}</Text>)}
    />
    <Text>Hello world !!!</Text>
    <Text>{message}</Text>
  </View>
)

export default Example
