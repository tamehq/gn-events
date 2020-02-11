import React, {useState} from 'react';
import {View} from 'react-native'
import {Input, SendButton, SubMsgContainer} from "./StyledComponents";
import CardCover from "../../../components/CardCover";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface Interface {
    onPinPress?: () => void;
    onSendPress?: () => void
}
const MessageInput = ({onSendPress}: Interface) => {
    const [message, setMessage] = useState('')
  return (
      <SubMsgContainer>
          <CardCover>
            <View>
              <Input onChangeText={setMessage} multiline placeholder='Write your message here' />
              {!!message && <SendButton onPress={onSendPress} activeOpacity={0.9}>
                  <MaterialIcon size={24} name='arrow-upward' color={'white'} />
              </SendButton>}
            </View>
          </CardCover>
      </SubMsgContainer>
  );
}

export default MessageInput;
