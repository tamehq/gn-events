import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {cloneDeep} from 'lodash';
import {SafeAreaView} from 'react-navigation';
import Header from '../../../components/Header';
import ButtonComponent from "../../../components/Button";
import VectorIcon from "../../../components/VectorIcon";
import Icon from "react-native-vector-icons/MaterialIcons";
import ActionComponent from "../../../components/ActionSheet";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  CrossCircle, KeynoteName, CameraBg, CameraCover, BottomView, CommentInput, Container, PostImage,
  SubContainer, ErrorText
} from './StyledComponents'
import {createNewPost} from "../module/api";
import { RNS3 } from 'react-native-aws3';
import {ProgressModal} from "../../../components/ProgressModal";
import {getCurrentUser} from "../../../api";

const AWS_OPTIONS = {
  keyPrefix: "photos/",
  bucket: "event-app-file-storage",
  region: "eu-central-1",
  accessKey: "AKIAW4VSIEQPVHYBHYEA",
  secretKey: "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",
  successActionStatus: 201
}

const WriteNewPost = ({navigation}) => {
  const addNewPost = navigation.getParam('addNewPost');
  const feedId = navigation.getParam('feedId');
  const [openSheet, setOpenSheet] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<any[]>([])
  const [user, setUser] = useState<any>({})
  const [description, setDescription] = useState<string>('')

  useEffect(() => {
    getCurrentUser().then(user => setUser(cloneDeep(user)))
  }, [])

  function goBack() {
    navigation.pop();
  }

  const onSelectImage = (image: any) => {
    setImages([...images, image])
  }

  const onCrossPress = (url: string) => {
    setImages(images.filter(i => i.path !== url))
  }

  const onWritePostPress = async () => {
    if (!description && !images.length) {
      setError(true)
      return
    }
    setLoading(true)
    if (images.length) {
      postImageOnAws(images[0], createPost)
    } else {
      await createPost()
    }
  }

  const createPost = async (imageUrls = '') => {
    const {id: authorId} = user
    const post = {
      feedId,
      authorId,
      imageUrls,
      title: 'title',
      body: description
    }
    await createNewPost(post)
    addNewPost(post)
    setTimeout(() => {
      setLoading(false)
      navigation.pop()
    }, 500)
  }

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'never'}} >
      <Container>
        <Header title='Write a post' onPress={goBack} />
        <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
          <SubContainer>
            <CommentInput
                multiline
                value={description}
                onChangeText={(text) => {
                  setDescription(text)
                  setError(false)
                }}
                placeholder='Write your text...' />
            {(images && !!images.length) &&
              images.map(({ path }) => (
                  <View key={path}>
                    <CrossCircle activeOpacity={1} onPress={() => onCrossPress(path)}>
                      <Icon size={24} name='close' color='black' />
                    </CrossCircle>
                    <PostImage source={{uri: path}}/>
                    </View>
              ))}
          </SubContainer>
        </KeyboardAwareScrollView>
        <BottomView>
          {error && <ErrorText>Post text or image is required.</ErrorText>}
          <CameraCover
            activeOpacity={0.8}
            disabled={!!images.length}
            onPress={() => {
              setError(false)
              setOpenSheet(true)
            }}
          >
            <CameraBg>
               <VectorIcon name='camera' size={27}/>
            </CameraBg>
            <KeynoteName>Attach photo</KeynoteName>
          </CameraCover>
          <ButtonComponent onPress={onWritePostPress} label='Write post' />
        </BottomView>
        <ActionComponent
            postImage
            openSheet={openSheet}
            onSelectImage={onSelectImage}
            onHide={() => setOpenSheet(false)}
        />
      </Container>
      <ProgressModal show={loading}/>
    </SafeAreaView>
  );
}

export default WriteNewPost;

const postImageOnAws = (image, callback) => {
  const {path: uri, filename: name, mime: type } = image
  RNS3.put({uri, name, type}, AWS_OPTIONS).then(response => {
    if (response.status !== 201)
      throw new Error("Failed to upload image to S3");
    const {postResponse: { location = '' } = {}} = response.body
    callback(location)
  }).catch(error => console.log('error in image upload', error));
}
