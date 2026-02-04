import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";

const ApplyJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const effectiveJobId = location?.state?.jobId || jobId;

  const [jobDetails, setJobDetails] = useState(null);
  const [resume, setResume] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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

  // Fetch job details
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const id = effectiveJobId;
        if (!id) return;
        const response = await fetch(`http://localhost:8080/api/jobs/${id}`);
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            setJobDetails(result.data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch job details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (effectiveJobId) {
      fetchJobDetails();
    }
  }, [effectiveJobId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setResumeFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!resume) {
      setError("Resume is required");
      return;
    }

    const application = {
      jobId: effectiveJobId,
      ...form,
      yearsOfExperience: Number(form.yearsOfExperience),
      skills: form.skills ? form.skills.split(",").map(s => s.trim()).filter(s => s) : [],
      certifications: form.certifications
        ? form.certifications.split(",").map(c => c.trim()).filter(c => c)
        : []
    };

    const data = new FormData();
    data.append(
      "application",
      new Blob([JSON.stringify(application)], { type: "application/json" })
    );
    data.append("resume", resume);

    try {
      setSubmitting(true);
      await axios.post(
        "http://localhost:8080/api/applications",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#10B981]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      {/* Success Modal */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle size={48} className="text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Application Submitted!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
              >
                Thank you for applying. We'll review your application and get back to you soon.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/careers")}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white font-bold rounded-2xl hover:shadow-lg transition-all text-lg cursor-pointer"
              >
                Done
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/careers")}
          className="flex items-center gap-2 text-[#10B981] hover:text-[#06B6D4] font-semibold mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} />
          Back to Careers
        </motion.button>

        {/* Job Header */}
        {jobDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 md:p-8 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-3xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Apply for {jobDetails.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 flex flex-wrap gap-4">
              <span>📍 {jobDetails.location}</span>
              <span>💼 {jobDetails.department}</span>
              <span>📊 {jobDetails.experience}</span>
            </p>
          </motion.div>
        )}

        {/* Success Message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl flex items-center gap-4"
          >
            <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
            <div>
              <h3 className="font-bold text-green-900 dark:text-green-400">Application Submitted!</h3>
              <p className="text-sm text-green-700 dark:text-green-300">Your application has been received successfully.</p>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-center gap-4"
          >
            <AlertCircle className="text-red-600 dark:text-red-400" size={24} />
            <div>
              <h3 className="font-bold text-red-900 dark:text-red-400">Error</h3>
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        {!success && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-10 border border-gray-200 dark:border-gray-700 space-y-8"
          >
          {/* Section 1: Personal Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Current Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="currentLocation"
                  value={form.currentLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="New York, NY"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Willing to Relocate
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="willingToRelocate"
                    checked={form.willingToRelocate}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#10B981] rounded border-gray-300"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Yes, I'm willing to relocate</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 2: Professional Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Professional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Current Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="currentRole"
                  value={form.currentRole}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Senior Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Current Company
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  value={form.currentCompany}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tech Solutions Inc."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="yearsOfExperience"
                  value={form.yearsOfExperience}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="5"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Notice Period <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="noticePeriod"
                  value={form.noticePeriod}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g., Immediate, 30 days"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Education <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="B.S. Computer Science"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Expected Salary
                </label>
                <input
                  type="text"
                  name="expectedSalary"
                  value={form.expectedSalary}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="$140,000"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Skills & Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Skills & Certifications
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Skills <span className="text-gray-500 text-xs">(comma separated)</span>
                </label>
                <input
                  type="text"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Java, Spring Boot, React, AWS"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Certifications <span className="text-gray-500 text-xs">(comma separated)</span>
                </label>
                <input
                  type="text"
                  name="certifications"
                  value={form.certifications}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="AWS Certified Developer, Oracle Certified Professional"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Online Profiles */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Online Profiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedinUrl"
                  value={form.linkedinUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  name="portfolioUrl"
                  value={form.portfolioUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://johndoe.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  GitHub URL
                </label>
                <input
                  type="url"
                  name="githubUrl"
                  value={form.githubUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://github.com/johndoe"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Additional Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Additional Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={form.coverLetter}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell us why you're interested in this role..."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    How did you find this job?
                  </label>
                  <input
                    type="text"
                    name="referralSource"
                    value={form.referralSource}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="e.g., LinkedIn, Referral, Website"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Referral Name (if applicable)
                  </label>
                  <input
                    type="text"
                    name="referralName"
                    value={form.referralName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Name of the person who referred you"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Additional Comments
                </label>
                <textarea
                  name="additionalComments"
                  value={form.additionalComments}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>
            </div>
          </div>

          {/* Section 6: Resume Upload */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              Resume Upload
            </h2>
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Resume <span className="text-red-500">*</span>
              </label>
              <label className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer hover:border-[#10B981] hover:bg-[#10B981]/5 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
                <div className="text-center">
                  <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {resumeFileName || "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    PDF, DOC, or DOCX (Max 5MB)
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{ scale: submitting ? 1 : 1.02 }}
            whileTap={{ scale: submitting ? 1 : 0.98 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white font-bold rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {submitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Submitting...
              </span>
            ) : (
              "Submit Application"
            )}
          </motion.button>
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default ApplyJob;
