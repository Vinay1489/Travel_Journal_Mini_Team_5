import axios from "axios";

export const uploadCover = async (file, token) => {
  const formData = new FormData();
  formData.append("photo", file);

  const res = await axios.post("http://localhost:3000/api/v1/journals/upload-cover", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.file;
};
