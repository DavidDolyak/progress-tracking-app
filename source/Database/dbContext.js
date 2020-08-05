import database from '@react-native-firebase/database';

database()
    .ref('user')
    .once('value')
    .then(snapshot => {
        console.log('User data: ', snapshot.val());
    });