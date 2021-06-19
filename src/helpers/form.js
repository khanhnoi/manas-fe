export const getFormDataFromRef = (refs) => {
    let data = []
    data = Object.keys(refs).map((item, index) => {
      return {
        ...data,
        [item]: refs[item].value
        //refs[item].type == "checkbox" ? refs[item].checked : 
      }
    });
    console.log(Object.assign({}, ...data));
    return Object.assign({}, ...data);

  }