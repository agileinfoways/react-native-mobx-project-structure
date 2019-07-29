import React, { Component } from "react";
import { NetInfo } from "react-native";
import { CONST } from "./constants.global";

const GlobalValidations = {
  isAmountFormatValid: text => {
    if (/^(?=.)([+-]?([0-9]*)(\.([0-9]{1,2}))?)$/.test(text) === false) {
      return false;
    } else {
      return true;
    }

    // return false;
  },

  isFieldEmpty: text => {
    if (text) {
      if (text.length > 0) {
        text.replace(/\s*$/, "");
        if (text == "") {
          return true;
        }
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  },
  isEmailInvalid: text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return true;
    }
    return false;
  },
  isNumber: text => {
    let reg = /^[0-9]*$/;
    if (reg.test(text) === true) {
      return true;
    }
    return false;
  },
  isTextLengthInvalid: (text, length) => {
    if (text.length < length) {
      return true;
    }
    return false;
  },
  isTwoTextInputsSame: (text1, text2) => {
    text1.replace(/\s*$/, "");
    text2.replace(/\s*$/, "");

    if (text1 === text2) {
      return true;
    }
    return false;
  },
  isZipCodeInvalid: text => {
    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(text);
    if (!isValidZip) {
      return true;
    }
    return false;
  }
};

export default GlobalValidations;
