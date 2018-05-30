import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

class RNCheckox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: this.props.selected || false
    }
  }

  render() {
    const { title, disabled, controlled } = this.props

    return (
      <View style={styles.buttonLayout}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableHighlight onPress={() => !controlled && this.setState({ selected: !this.state.selected })} disabled={disabled}>
            <View style={styles.checkboxOuter}>
              {
                this.state.selected
                  ? (
                      <View style={styles.checkboxInner}>
                      </View>
                    )
                  : null
              }
            </View>
          </TouchableHighlight>
          <Text style={{ marginLeft: 10, color: disabled ? '#ccc' : '#000'}}>
            {title}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonLayout: {
    flexDirection: 'column'
    , justifyContent: 'center'
    , alignItems: 'center'
    , margin: 5
  }
  , checkboxOuter: {
    height: 20
    , width: 20
    , borderColor: '#000'
    , borderWidth: 1
    , justifyContent: 'center'
    , alignItems: 'center'
  }
  , checkboxInner: {
    height: 10
    , width: 10
    , borderColor: '#000'
    , backgroundColor: '#000'
  }
})

export default RNCheckox