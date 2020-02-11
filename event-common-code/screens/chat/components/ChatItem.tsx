import React from 'react';
import moment from "moment";
import CardCover from "../../../components/CardCover";
import {FirstLetter, Image, Message, MessageContainer, MessageTime, NoAvatar} from "../containers/StyledComponents";
import {ThemeContext} from "../../../../App";

interface Interface {
    message: {
        name: string;
        imageUri: string;
        sender?: boolean;
        text: string;
        date: string
    };
}
const ChatItem = ({message}: Interface) => {
  const theme = React.useContext(ThemeContext)
  const {imageUri, sender, text, name, date} = message
    const getFirstLetter = () => name ? name.charAt(0).toUpperCase() : ''

    const imageSection =  <CardCover>
        {!!(imageUri) ?
            <Image source={{uri: imageUri || null}}/>
            : <NoAvatar><FirstLetter>{getFirstLetter()}</FirstLetter></NoAvatar>
        }
    </CardCover>
    const messageSection = (
        <CardCover
            styles={{
                flex: 1,
                padding: 25,
                marginHorizontal: 15,
                shadowColor: theme.color[sender ? 'primary' : 'shadow'],
                backgroundColor: sender ? theme.color.primary : 'white'
            }}>
            <Message style={sender ? {color: 'white'} : {}}>{text}</Message>
            <MessageTime style={sender ? {color: 'white'} : {}}>{moment(date).fromNow()}</MessageTime>
        </CardCover>)

    return (
        <MessageContainer>
            {sender ? messageSection : imageSection}
            {sender ? imageSection : messageSection}
        </MessageContainer>
    )
}

export default ChatItem;
