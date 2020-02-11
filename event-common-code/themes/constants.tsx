import Permissions from 'react-native-permissions'

export const CANCEL_INDEX = 0
export const SELECT_POST_BUTTONS = ['Cancel', 'Delete Post']
export const SELECT_IMAGE_BUTTONS = ['Cancel', 'Capture Image', 'Select From Camera Roll']

export const imageOptions = {
    width: 300,
    height: 300,
    cropping: true,
    includeBase64: true,
    compressImageQuality: 0.8
    // compressImageMaxWidth: 300,
    // compressImageMaxHeight: 300,
    // cropping: true,
}
export const postOptions = {
    width: 400,
    height: 400,
    // cropping: true,
    compressImageQuality: 0.8
    // compressImageMaxWidth: 300,
    // compressImageMaxHeight: 300,
    // cropping: true,
}
export const getPermissionMsg = (type) => {
    switch (type) {
        case Permissions.PERMISSIONS.IOS.CAMERA:
        case Permissions.PERMISSIONS.ANDROID.CAMERA:
            return {
                title: 'NNIT Would Like to Access Your Camera',
                message: 'This lets you share and add/update profile photo from your camera and enables other features for photos and videos.',
            }
        case Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY:
        case Permissions.PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE:
            return {
                title: 'NNIT Would Like to Access Your Photos',
                message: 'This lets you share and add/update profile photo from your camera roll and enables other features for photos and videos.',
            }
        default:
            return {
                title: 'cameraPermissionTitle',
                message: 'cameraPermissionMessage'
            }
    }
}
