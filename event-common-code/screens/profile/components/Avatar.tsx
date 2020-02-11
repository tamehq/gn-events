import React from 'react';
import {ImageBackground} from 'react-native';
import Styled from 'styled-components/native';
import Border from '../../../assets/images/profile/avatar-border.png';
import SampleImage from '../../../assets/images/avatar2.png';
import ActionComponent from "../../../components/ActionSheet";
import VectorIcon from "../../../components/VectorIcon";

const UserImage = Styled(ImageBackground)`
  height: 160px;
  width: 160px;
  align-self: center;
  margin-top: 10%;
`;

const EditTouch = Styled.TouchableOpacity`
  position: absolute;
  bottom: -2;
  right: 0;
  height: 40;
  width: 40;
`;
const EditIconContainer = Styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface AvatarInterface {
  attendeeId: string;
  imageUri: string;
}

function Avatar(props: AvatarInterface) {
  const [userImage, setUserImage] = React.useState<string>('');
  const [openSheet, setOpenSheet] = React.useState<boolean>(false);

  React.useEffect(() => {
    setUserImage(props.imageUri);
  }, [props.imageUri]);


  return (
    <UserImage
      borderRadius={20}
      resizeMode={'cover'}
      source={userImage ? {uri: userImage} : SampleImage}>
      <EditTouch onPress={() => setOpenSheet(true)}>
        <EditIconContainer resizeMode={'contain'} source={Border}>
          <VectorIcon name='edit' size={20} />
        </EditIconContainer>
      </EditTouch>
        <ActionComponent
            openSheet={openSheet}
            uploadId={props.attendeeId}
            onSelectImage={setUserImage}
            onHide={() => setOpenSheet(false)}
        />
    </UserImage>
  );
}

export default Avatar;
