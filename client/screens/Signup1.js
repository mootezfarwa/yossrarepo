import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { Image } from "expo-image";
import { CheckBox } from "@rneui/themed";

const SignUp = () => {
  const [checkboxchecked, setCheckboxchecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');  // Add state for role
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.10:5000/api/auth/user/register', { // Replace with your IP address
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
       
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Registration successful');
        navigation.navigate('Signup1');
      } else {
        Alert.alert('Error', data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.signUp}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
        <View style={styles.signupArea}>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.signUpBtn, styles.passwordLayout]}
          >
            <View style={[styles.rectangle119, styles.rectangleShadowBox]} />
            <View style={[styles.signIn, styles.signLayout]}>
              <View style={[styles.signUp1, styles.signLayout]}>
                <Text style={[styles.signUp2, styles.signPosition]}>
                  S’enregistrer
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TextInput
            style={[styles.fullName, styles.passwordLayout]}
            placeholder="Nom & Prénom"
            placeholderTextColor="#8a8d9f"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={[styles.fullName, styles.passwordLayout]}
            placeholder="Nom"
            placeholderTextColor="#8a8d9f"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={[styles.email, styles.passwordLayout]}
            placeholder="Email"
            placeholderTextColor="#8a8d9f"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.phoneNumber, styles.passwordLayout]}
            placeholder="Numéro de téléphone"
            placeholderTextColor="#8a8d9f"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={[styles.password, styles.passwordLayout]}
            placeholder="Mot de passe"
            placeholderTextColor="#8a8d9f"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={[styles.confirmPassword, styles.passwordLayout]}
            placeholder="Confirmer votre mot de passe"
            placeholderTextColor="#8a8d9f"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TextInput
            style={[styles.fullName, styles.passwordLayout]} // Use the same styles for role input
            placeholder="Role" // Add a placeholder for role
            placeholderTextColor="#8a8d9f"
            value={role}
            onChangeText={setRole}
          />
          <View style={[styles.profileImage, styles.bg2IconLayout]}>
            <Image
              style={[styles.bg2Icon, styles.bg2IconLayout]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
            <Image
              style={[styles.bg2Icon, styles.bg2IconLayout]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
          </View>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <View style={[styles.text, styles.textLayout]}>
            <View style={[styles.alreadyHaveAnAccount, styles.signLayout]}>
              <View style={[styles.alreadyHaveAnAccount2, styles.signLayout]}>
                <Text style={[styles.alreadyHaveAn, styles.text1Position]}>
                  Vous avez déjà un compte ?
                </Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <View style={[styles.signIn1, styles.signLayout]}>
                  <Text style={[styles.signIn2, styles.signPosition]}>
                    Se connecter
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.byCreatingAnAccountYouAgr, styles.textLayout]}>
              <View style={[styles.byCreatingAnAccountYouAgr1, styles.signLayout]}>
                <Text style={[styles.byCreatingAn, styles.ourTermsOfTypo]}>
                  En créant un compte, vous acceptez nos conditions
                </Text>
              </View>
              <View style={styles.ourTermsOfServiceAndPriva}>
                <Text style={[styles.ourTermsOf, styles.ourTermsOfTypo]}>
                  d'utilisation et notre politique de confidentialité
                </Text>
              </View>
            </View>
            <CheckBox
              checked={checkboxchecked}
              onPress={() => setCheckboxchecked(!checkboxchecked)}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  rectanglePosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 836,
  },
  blueButton: {
    backgroundColor: "#0057FC", // Adjusted blue color
    borderRadius: 26, // Updated border radius value
    height: 50,
    width: 315,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -120,
    marginLeft:25
  },
  blueButtonText: {
    color: "#FFFFFF", // White text color
    fontSize: 16, // Adjusted font size
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },  
  alreadyLayout: {
    height: 19,
    position: "absolute",
  },
  alreadyHaveAnTypo: {
    textAlign: "left",
    top: "50%",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  or1Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: "50%",
    marginTop: -9.5,
    position: "absolute",
  },
  emailLayout: {
    height: 50,
    position: "absolute",
  },
  emailLayoutt: {
    borderRadius:20,
    backgroundColor:"#F4F5F7"
  },
  signTypo: {
    fontSize: FontSize.size_3xl,
    marginTop: -12.5,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray_100,
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 21,
    width: 238,
    left: 0,
    position: "absolute",
  },
  or2Layout: {
    width: 22,
    height: 19,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    opacity: 0.14,
    height: 1,
    width: 121,
    top: 7,
    position: "absolute",
  },
  keyboardLayout: {
    height: 291,
    width: 375,
    left: 0,
    position: "absolute",
  },
  headerPosition: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title2Layout: {
    width: 124,
    height: 25,
    position: "absolute",
  },
  timePosition: {
    width: 33,
    height: 19,
    left: 0,
    top: 0,
    position: "absolute",
  },
  networkPosition: {
    width: 17,
    top: 4,
    position: "absolute",
  },
  rectangleLayout: {
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorWhite,
  },
  alreadyHaveAn: {
    width: "107.14%",
    left: "-0.49%",
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    textAlign: "left",
    top: "50%",
  },
  alreadyHaveAnAccount: {
    width: 203,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  signIn1: {
    width: "190%",
    color: Color.colorMediumslateblue,
  },
  signIn: {
    left: 203,
    width: 104,
    top: 0,
    overflow: "hidden",
  },
  alreadyHaveAnAcco: {
    width: 307,
    height: 19,
    left: 0,
    top: 0,
  },
  text: {
    top: 348,
    left: 8,
    width: 307,
    height: 19,
  },
  signUpWith1: {
    left: "11.48%",
  },
  signUpWith: {
    left: 58,
    width: 122,
    height: 25,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  emailAndPhone: {
    marginTop: -10.5,
    width: "119.58%",
    fontSize: FontSize.size_lg,
    color: Color.colorLightslategray_200,
    left: "0%",
    textAlign: "left",
    top: "50%",
  },
  emailAndPhoneNumber: {
    top: 0,
    overflow: "hidden",
  },
  group: {
    top: 29,
  },
  signUpWithEmailAndPhoneN: {
    width: 238,
    height: 50,
    top: 0,
    left: 0,
  },
  title: {
    left: 39,
    width: 238,
    height: 50,
    top: 0,
  },
  email: {
    top: 82,
    fontFamily: FontFamily.robotoRegular,
    height: 50,
    fontSize: FontSize.size_base,
    width: 315,
    left: 0,
  },
  enterPhoneNumber: {
    top: 176,
    fontFamily: FontFamily.robotoRegular,
    height: 50,
    fontSize: FontSize.size_base,
    width: 315,
    left: 0,
  },
  or1: {
    color: Color.colorGray_100,
  },
  or22: {
    left: 0,
    overflow: "hidden",
  },
  or2: {
    left: 146,
  },
  line165Icon: {
    left: 0,
  },
  line166Icon: {
    left: 194,
  },
  or: {
    top: 147,
    left: 1,
    width: 315,
  },
  getStartedBtn: {
    top: 262,
    width: 315,
    left: 0,
  },
  signup1: {
    top: 148,
    left: 30,
    height: 367,
    width: 315,
    position: "absolute",
  },
  iphoneXKeyboardAbcBackgrou: {
    backgroundColor: "rgba(4, 4, 15, 0.4)",
    top: 0,
  },
  keyboard2Icon: {
    top: 0,
  },
  uiBarsHomeIndicatorHomeInIcon: {
    top: 277,
    left: 121,
    width: 134,
    height: 5,
    position: "absolute",
  },
  keyboard: {
    top: 545,
  },
  rectangle1122: {
    shadowColor: "rgba(50, 214, 216, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
  },
  signUp1: {
    width: "78.23%",
    left: "0%",
  },
  signUp: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title2: {
    top: 54,
    left: 141,
  },
  view: {
    overflow: "hidden",
  },
  batteryIcon: {
    left: 322,
    height: 11,
    top: 4,
    width: 22,
    position: "absolute",
  },
  wifiIcon: {
    left: 300,
    height: 12,
  },
  rectangle96: {
    height: 4,
    top: 7,
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
    left: 0,
  },
  rectangle97: {
    top: 5,
    left: 5,
    height: 6,
  },
  rectangle98: {
    top: 2,
    left: 9,
    height: 9,
  },
  rectangle99: {
    left: 14,
    height: 11,
    top: 0,
  },
  network: {
    left: 277,
    height: 11,
  },
  statusBar: {
    top: 11,
    left: 15,
    width: 345,
  },
  backIcon: {
    top: 56,
    left: 21,
    width: 12,
    height: 20,
    position: "absolute",
  },
  signup: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 836,
    backgroundColor: Color.colorWhite,
  },
});

export default Signup1;
