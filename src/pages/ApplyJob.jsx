import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ApplyJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentLocation: "",
    yearsOfExperience: "",
    currentRole: "",
    noticePeriod: "",
    education: "",
    willingToRelocate: false,
    currentCompany: "",
    expectedSalary: "",
    linkedinUrl: "",
    portfolioUrl: "",
    githubUrl: "",
    coverLetter: "",
    referralSource: "",
    referralName: "",
    additionalComments: "",
    skills: "",
    certifications: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      alert("Resume is required");
      return;
    }

    const application = {
      jobId,
      ...form,
      yearsOfExperience: Number(form.yearsOfExperience),
      skills: form.skills ? form.skills.split(",") : [],
      certifications: form.certifications
        ? form.certifications.split(",")
        : []
    };

    const data = new FormData();
    data.append(
      "application",
      new Blob([JSON.stringify(application)], { type: "application/json" })
    );
    data.append("resume", resume);

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:8080/api/applications",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Application submitted successfully");
      navigate("/careers");
    } catch (err) {
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl max-w-3xl w-full space-y-4"
      >
        <h2 className="text-3xl font-bold text-center">Job Application</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="firstName" placeholder="First Name *" required onChange={handleChange} />
          <input name="lastName" placeholder="Last Name *" required onChange={handleChange} />
          <input name="email" type="email" placeholder="Email *" required onChange={handleChange} />
          <input name="phone" placeholder="Phone *" required onChange={handleChange} />
          <input name="currentLocation" placeholder="Location *" required onChange={handleChange} />
          <input name="yearsOfExperience" type="number" placeholder="Experience *" required onChange={handleChange} />
          <input name="currentRole" placeholder="Current Role *" required onChange={handleChange} />
          <input name="noticePeriod" placeholder="Notice Period *" required onChange={handleChange} />
          <input name="education" placeholder="Education *" required onChange={handleChange} />
        </div>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={(e) => setResume(e.target.files[0])}
        />

        <textarea name="coverLetter" placeholder="Cover Letter" onChange={handleChange} />
        <textarea name="additionalComments" placeholder="Additional Comments" onChange={handleChange} />

        <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
        <input name="certifications" placeholder="Certifications (comma separated)" onChange={handleChange} />

        <label className="flex items-center gap-2">
          <input type="checkbox" name="willingToRelocate" onChange={handleChange} />
          Willing to Relocate
        </label>

        <button
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
