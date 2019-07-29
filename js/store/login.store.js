import { observable, action } from "mobx";
import { GM } from "../global/methods.global";
import { CONFIG } from "../global/config.global";

class loginStore {
  @observable email = "";
  @observable password = "";
  @observable passwordRegex = /^[A-Za-z0-9_@./#&!+-]*$/;

  @action reset = () => {
    this.email = "";
    this.password = "";
  }

  callLoginApi(params, success, failure) {
    return GM.callAPI(CONFIG.LOGIN, "POST", params,
      response => {
        success(response)
      },
      error => {
        failure(error)
      })
  }  
}

let LoginStore = new loginStore();
export default LoginStore;