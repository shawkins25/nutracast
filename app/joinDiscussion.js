// app/joinDiscussion.js
import { useState } from "react";
import classes from "./joinDiscussion.module.css";
const JoinDiscussion = () => {
  const [formData, setFormData] = useState({ name: "", question: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/send-question.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // IMPORTANT: don't assume JSON
      const text = await res.text();
      let data = null;
      try {
        data = JSON.parse(text);
      } catch {
        // Non-JSON response (PHP fatal, proxy block, etc.)
        console.error("Non-JSON response from server:", text);
      }
      if (!res.ok) {
        console.error("Email send failed:", data || text);
        alert(
          "Sorry — we couldn’t submit your question right now. Please try again later."
        );
        return;
      }
      alert("Thanks for your question!");
      setFormData({ name: "", question: "" });
    } catch (err) {
      console.error("Network or fetch error:", err);
      alert(
        "There was a network error sending your question. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Have a question?</h2>
      <p className={classes.sub_heading}>Share your question, a topic idea you'd like us to explore, or a comment for the podcast</p>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="name">Name (Optional):</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="question">Questions/Comments:</label>
        <textarea
          id="question"
          name="question"
          rows={5}
          value={formData.question}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "SENDING…" : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};
export default JoinDiscussion;
