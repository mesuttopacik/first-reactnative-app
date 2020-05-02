import React, { Component } from 'react'
import { Text, View } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style = {styles.viewStyle}>
                <Text style={styles.textStyle}>
                Murat Eğitim Kurumları
                </Text>
            </View>
        )
    }
}



const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  }

};

export default Header;