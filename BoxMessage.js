import React from 'react';
import { View, Text, Image } from 'react-native';

export default function BoxMessage(props) {
    const { message, isUser } = props;

    return (
        <View>
            <View style={[styles.containerMessage, isUser && styles.userContainer]}>
                {
                    !isUser && <Image source={require('./assets/img1.png')} style={styles.chatImage} />
                }
                <View style={styles.messageBox}>
                    <Text>{message}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = {
    containerMessage: {
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 8,
        borderTopWidth: 1,
        borderTopColor: '#D0D0D0',
    },
    messageBox: {
        width: 'auto',
        maxWidth: '100%',
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#DEFFB4',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    chatImage: {
        width: 35,
        height: 35,
    },
    userContainer: {
        justifyContent: 'flex-end',
    },
};
