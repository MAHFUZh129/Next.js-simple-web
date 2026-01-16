"use client";

import { addJobs } from "@/actions/server/jobs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddJobPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const job = {
      title: form.title.value,
      company: form.company.value,
      location: form.location.value,
      salary: form.salary.value,
      jobType: form.jobType.value,
      description: form.description.value,
    };

    const res = await addJobs(job)
    

    if (res.success) {
      toast.success("Job added successfully!!");
      router.push("/jobs");
    } else {
      toast.error("Failed to add job");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24">
      <div className="w-full max-w-xl bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Job Title"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="company"
            placeholder="Company Name"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="location"
            placeholder="Location"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="salary"
            placeholder="Salary (e.g. 50k–70k)"
            required
            className="w-full border p-3 rounded"
          />

          <select
            name="jobType"
            className="w-full border p-3 rounded"
          >
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Remote</option>
          </select>

          <textarea
            name="description"
            placeholder="Job Description"
            rows="4"
            required
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
}
