import axios from 'axios';

const handleSubmit = async (formData, setLoading, setCoverLetter) => {
  setLoading(true);
  setCoverLetter('');

  try {
    const response = await axios.post('https://covergenie-backend-eoeg.onrender.com/api/generate-cover-letter/', formData);
    setCoverLetter(response.data.cover_letter);
  } catch (error) {
    console.error(error);
    alert("Failed to generate cover letter. Please try again.");
  }

  setLoading(false);
};

export default handleSubmit;
