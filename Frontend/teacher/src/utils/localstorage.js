function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    console.log("err:", err);
    return undefined;
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function deleteData(key) {
  localStorage.removeItem(key);
}

export { loadData, saveData, deleteData };
