import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerChat: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#D0D0D0',
        position: 'relative',
    },
    navbarChat: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '20%',
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    h1: {
        color: '#7AD606',
    },
    inputChat: {
        width: '100%',
        height: '15%',
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
    buttonChat: {
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#5E985B',
        borderWidth: 0,
    },
    containerMessage: {
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 8,
        borderTopWidth: 1,
        borderTopColor: '#D0D0D0',
    },
    user: {
        justifyContent: 'flex-end',
    },
    historyChat: {
        width: '100%',
        height: '85%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        overflowY: 'hidden',
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
});

export default styles;
