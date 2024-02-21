// import auth from "@react-native-firebase/auth";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

// GoogleSignin.configure({
//   webClientId:
//     "561754198762-r62jvqc7ne2b0he3v2meh97fpe8irspu.apps.googleusercontent.com",
// });

// export const signInWithGoogle = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const { idToken } = await GoogleSignin.signIn();
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//     await auth().signInWithCredential(googleCredential);
//     console.log("Google sign-in successful");
//   } catch (error) {
//     console.error("Google sign-in error:", error);
//   }
// };
