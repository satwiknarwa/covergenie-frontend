const handleSubmitFn = async (formData, setLoading, setCoverLetter) => {
  setLoading(true);
  try {
    const response = await fetch("https://covergenie-backend.onrender.com/api/generate_cover_letter/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setCoverLetter(data.cover_letter);
  } catch (error) {
    console.error('Error:', error);
    setCoverLetter("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

export default handleSubmitFn;
