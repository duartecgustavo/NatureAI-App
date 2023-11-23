import { default as React, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BoxMessage from './BoxMessage';
import { callChatGpt } from "../service/getApi";

export default function Chat() {

    const [inputValue, setInputValue] = useState({});
    const [messages, setMessages] = useState([])

    async function handleMessage() {
        if (inputValue.msg.trim() !== "") {

            const response = await callChatGpt(inputValue.msg);
            const content = { msg: response.choices[0].message.content, isUser: false };

            setMessages([...messages, inputValue, content]);
            setInputValue({ msg: "", isUser: true });
        }
    }

    return (
        <View style={styles.containerChat}>
            <View style={styles.navbarChat}>
                <Text style={styles.subheading}>Fale com o NatureAI 🥦</Text>
            </View>
            <View style={styles.historyChat}>
                {messages?.map((item) => (
                    <BoxMessage message={item.msg} key={item.msg} isUser={item.isUser} />
                ))}
            </View>
            <View style={styles.inputChat}>
                <TextInput
                    placeholder="Digite sua dúvida"
                    value={inputValue.msg}
                    onChangeText={(e) => setInputValue({ msg: e, isUser: true })}
                    style={styles.inputField}
                />
                <TouchableOpacity onPress={handleMessage} style={styles.buttonChat}>
                    <Image source={require('../assets/arrowRight.svg')} style={styles.buttonImage} />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerChat: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth: 4,
        borderColor: '#D0D0D0',
        position: 'relative',
    },
    // NAVBAR
    navbarChat: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        // position: 'absolute',
        top: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        padding: '20px'
    },
    // NAVBAR

    // CHAT
    historyChat: {
        width: '100%',
        minHeight: 50,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'white',
    },
    // CHAT

    // IMPUT
    inputChat: {
        width: '100%',
        boxSizing: 'border-box',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    inputField: {
        width: '80%',
        height: 45,
        borderRadius: 5,
        borderWidth: 0,
        paddingLeft: 10,
        maxWidth: '100%',
    },
    // IMPUT

    // BUTTON
    buttonChat: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#5E985B',
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonImage: {
        width: 35,
        height: 35,
    },
    // BUTTON
})