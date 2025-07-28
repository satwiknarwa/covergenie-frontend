const handleSubmitFn = async (formData, setLoading, setCoverLetter) => {
  setLoading(true);
  try {
    const response = await fetch('http://127.0.0.1:8000/api/generate/', {
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
