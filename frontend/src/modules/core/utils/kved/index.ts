import KVEDS from "./kved.json";
let i = 0;
function convertChildToChildren(obj: any): any {
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  if (obj.children) {
    const childrenArray = Object.keys(obj.children).map((key) => {
      const childObj = obj.children[key];
      childObj.type = "group";
      childObj.key = i;
      i++;
      if (childObj.value) {
        childObj.label = `${childObj.value} ${childObj.label}`;
        childObj.value = childObj.label;
        delete childObj.type;
      }
      return convertChildToChildren(childObj);
    });
    obj.children = childrenArray;
  }

  return obj;
}

export const kveds = convertChildToChildren(KVEDS).children;
