import React, {useEffect} from 'react';
import {CANCEL_INDEX, imageOptions, postOptions, SELECT_IMAGE_BUTTONS, SELECT_POST_BUTTONS} from "../themes/constants";
import ActionSheet from 'react-native-actionsheet'
import {PERMISSIONS} from 'react-native-permissions'
import ImagePicker from 'react-native-image-crop-picker'
import {checkPermission} from "../helpers/iPhonex";
import { Platform } from 'react-native';
import {uploadImage} from "../api";

interface AvatarInterface {
  remove?: boolean;
  openSheet: boolean;
  postImage?: boolean;
  uploadId?: string;
  onHide: () => void;
  onSelectImage: (x: any) => void;
}

const ActionComponent = (props: AvatarInterface) => {
  const { openSheet, onSelectImage, onHide, uploadId, postImage = false, remove = false } = props;
  let sheetRef: any;
  useEffect(() => {
    if (openSheet) {
      sheetRef && sheetRef.show()
    }
  }, [openSheet])
  return (
      <ActionSheet
          ref={(ref) => sheetRef = ref}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={remove ? 1 : 3}
          options={remove ? SELECT_POST_BUTTONS : SELECT_IMAGE_BUTTONS}
          onPress={index => {
            onHide()
            if (remove) {
              onSelectImage(index)
            } else {
              handleImageSelection(index, onSelectImage, uploadId, postImage);
            }
          }}
      />
  );
};

const handleImageSelection = (index, onSelectImage, uploadId, postImage) => {
 const options = postImage ? postOptions : imageOptions
  switch (index) {
    case 1:
      ImagePicker.openCamera(options).then((image: any) => {
          uploadSelectedImage(image, uploadId, onSelectImage)
      }).catch((error) => {
        if (getErrorCode(error.code)) {
          checkPermission(
              Platform.select({
                android: PERMISSIONS.ANDROID.CAMERA,
                ios: PERMISSIONS.IOS.CAMERA,
              })).then(res => console.log(res))
        }
      })
      break
    case 2:
      ImagePicker.openPicker(options).then((image: any) => {
          uploadSelectedImage(image, uploadId, onSelectImage)
      }).catch((error) => {
        if (getErrorCode(error.code)) {
          checkPermission(
              Platform.select({
                android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
              })).then(res => console.log(res))
        }
      })
  }
}

const uploadSelectedImage = (image, uploadId, onSelectImage) => {
    if (image) {
        if (uploadId) {
            let imageUri = `data:${image.mime};base64,${image.data}`;
            onSelectImage(imageUri)
            uploadImage(image, uploadId).then(res => console.log('res', res))
        } else {
            onSelectImage(image)
        }
    }
}

const getErrorCode = (code) =>
    !(code === 'E_PICKER_CANCELLED' || code === 'E_NO_IMAGE_DATA_FOUND')


export default ActionComponent;
