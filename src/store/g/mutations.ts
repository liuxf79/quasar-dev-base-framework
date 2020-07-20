/*
export function someMutation (state) {
}
*/
const mutations = {
  changeLogin(state:any,status:boolean) {
    return (state.isLogin = status);
  }
};

export default mutations;
