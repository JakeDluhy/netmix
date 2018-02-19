/**
 * Make an action from a passed in type and arguments
 * @param  {String}    type     The action payload type
 * @param  {Array}     argNames The names of the arguments that can be passed in
 * @return {Function}           An action function
 */
export default function makeActionCreator(type, ...argNames) {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}
