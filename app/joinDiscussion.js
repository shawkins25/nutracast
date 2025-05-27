import { useState } from "react";
import classes from "./joinDiscussion.module.css";

const JoinDiscussion = () => {
  const [formData, setFormData] = useState({ name: "", question: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendQuestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Thanks for your question!");
        setFormData({ name: "", question: "" });
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Error sending your question.");
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Join the Discussion!</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="question">Question:</label>
        <textarea
          id="question"
          name="question"
          rows={5}
          value={formData.question}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default JoinDiscussion;
