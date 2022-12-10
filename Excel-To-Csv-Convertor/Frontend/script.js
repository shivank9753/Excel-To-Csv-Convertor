const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input"),
  errorText = dropArea.querySelector("#error"),
  inputBtn = dropArea.querySelector("#input"),
  uploadBtn = dropArea.querySelector("#upload"),
  fileNameText = dropArea.querySelector("#title");
const linkAnchor = document.querySelector("#link");
let endpoint = "http://localhost:8072/";

button.onclick = () => {
  input.click();
};

input.addEventListener("change", async function (e) {
  try {
    let fileName = e.target.files[0].name;
    fileNameText.textContent = fileName;
    // inputBtn.classList.add("close");
    // uploadBtn.classList.remove("close");
    // uploadBtn.classList.add("active");
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("output", fileName);
    const resp = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    console.log(linkAnchor);
    linkAnchor.setAttribute("href", data);
    linkAnchor.classList.remove("close");
    linkAnchor.classList.add("active");
  } catch (error) {
    errorText.classList.remove("close");
    errorText.classList.add("active");
    errorText.textContent = "Something went wrong!";
    console.log(error);
  }
});

// const uploadFile = async (file) => {
//   try {
//     console.log(file);
//     const formData = new FormData();
//     formData.append("file", file);
//     const resp = await fetch(endpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       body: formData,
//     });
//     console.log(resp);
//     const data = await resp.json();
//     console.log(data);
//     console.log(linkAnchor);
//     linkAnchor.setAttribute("href", data);
//     linkAnchor.classList.remove("close");
//     linkAnchor.classList.add("active");
//   } catch (error) {
//     errorText.classList.remove("close");
//     errorText.classList.add("active");
//     errorText.textContent = "Something went wrong!";
//     console.log(error);
//   }
// };

// uploadBtn.addEventListener("click", uploadFile);
