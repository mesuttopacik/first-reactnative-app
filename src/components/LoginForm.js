import React, { Component } from 'react'
import {View, TextInput } from 'react-native'
import Button from './Button'

class LoginForm extends Component {
    state = {email: '', password: ''};
    render() {
        const {contanierStyle,subContanierStyle, inputStyle} = styles;
        return (
            <View style={contanierStyle}>
                <View style={subContanierStyle}>
                    <TextInput 
                    placeholder ="E-mail"
                    style={inputStyle}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    />
                </View>

                <View style={subContanierStyle}>
                <TextInput 
                    
                    placeholder ="Şifre"
                    style={inputStyle}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    />
                </View>

                <View style={subContanierStyle}>
                    <Button onPress= {() => console.log("tıklandı")}>GİRİŞ</Button>
                </View>
            </View>
        )
    }
}

const styles = {
contanierStyle: {
    borderWidth:1,
    borderRadius:2,
    borderColor: '#ddd',
    marginLeft:5,
    marginRight:5,
    marginTop:10
},
subContanierStyle: {
    borderBottomWidth:1,
    padding: 5,
    backgrandColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
},
inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight:23,
    flex: 2
},
};

export default LoginForm;