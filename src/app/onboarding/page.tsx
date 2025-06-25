"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from '@/components/Header';
import Image from "next/image";

const FormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  bio: z.string().min(10, "Bio should be at least 10 characters"),
 category: z.string().min(1, "Select a category"),
  languages: z.string().array().min(1, "Select at least one language"),
 minFee: z.coerce.number(),
maxFee: z.coerce.number(),
  location: z.string().min(2, "Location is required"),
  image: z
    .any()
    .refine((file) => !file || file instanceof FileList, {
      message: "Invalid image file",
    })
    .optional(),
});



type FormData = z.infer<typeof FormSchema>;

export default function OnboardingPage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const selectedLanguages = watch("languages") || [];

  const toggleArrayValue = (field: "languages", value: string) => {
    const current = [...(watch(field) || [])];
    if (current.includes(value)) {
      setValue(field, current.filter((item) => item !== value));
    } else {
      setValue(field, [...current, value]);
    }
  };

  const onSubmit = (data: FormData) => {
  const file = (data.image as FileList)?.[0];
  if (file) {
    console.log("Selected image:", file.name);
  }
  console.log("Submitted Data:", data);
  alert("Form submitted! Check the console.");
};


 return (
  <main className="bg-white min-h-screen px-6 py-16 md:px-10 lg:px-24">
    <Header />
    <div className="mb-8" />
   <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-6 md:p-10 border border-gray-100">

      <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
        Artist Onboarding Form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-gray-800">
        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-1">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setValue("image", e.target.files)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 file:border-0 file:bg-indigo-100 file:text-indigo-800 file:rounded file:px-4 file:py-2"
          />
          {watch("image")?.[0] && (
            <div className="mt-3">
              <Image
                src={URL.createObjectURL(watch("image")[0])}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md border shadow"
              />
            </div>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            {...register("name")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
             placeholder="Enter your name..."
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        {/* Bio */}
        <div>
          <label className="block font-semibold mb-1">Bio</label>
          <textarea
            {...register("bio")}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
             placeholder="Enter your bio..."
          />
          {errors.bio && <p className="text-sm text-red-500 mt-1">{errors.bio.message}</p>}
        </div>

       <div>
  <label className="block font-semibold mb-1">Category</label>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
    {["Singer", "Dancer", "DJ", "Speaker"].map((item) => {
      const isSelected = watch("category") === item;

      return (
        <label
          key={item}
          className={`flex items-center justify-center px-4 py-2 rounded-lg border text-sm font-medium cursor-pointer transition-all
            ${isSelected ? "bg-indigo-100 border-indigo-500 text-indigo-700 shadow" : "bg-white border-gray-300 hover:bg-gray-100"}`}
        >
          <input
            type="radio"
            value={item}
            {...register("category")}
            className="hidden"
          />
          {item}
        </label>
      );
    })}
  </div>
  {errors.category && (
    <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>
  )}
</div>



       {/* Language Checkboxes */}
<div>
  <label className="block font-semibold mb-1">Languages Spoken</label>
  <div className="flex flex-wrap gap-3 mt-2">
    {["English", "Hindi", "Punjabi", "Tamil", "Gujarati"].map((lang) => {
      const isSelected = selectedLanguages.includes(lang);

      return (
        <label
          key={lang}
          className={`px-4 py-2 rounded-full cursor-pointer border text-sm font-medium transition-all ${
            isSelected
              ? "bg-indigo-100 border-indigo-500 text-indigo-700 shadow"
              : "bg-white border-gray-300 hover:bg-gray-100"
          }`}
        >
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleArrayValue("languages", lang)}
            className="hidden"
          />
          {lang}
        </label>
      );
    })}
  </div>
  {errors.languages && (
    <p className="text-sm text-red-500 mt-1">{errors.languages.message}</p>
  )}
</div>


   <div>
  <label className="block font-semibold mb-1">Fee Range</label>
  <div className="flex flex-col gap-4">
    {/* Display values */}
    <div className="flex justify-between text-sm text-gray-600 px-1">
      <span>₹{watch("minFee") || 5000}</span>
      <span>₹{watch("maxFee") || 30000}</span>
    </div>

    {/* Min and Max input fields */}
    <div className="flex gap-4 items-center">
      <input
        type="number"
        min={5000}
        max={30000}
        step={1000}
        placeholder="Min ₹"
        {...register("minFee")}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="number"
        min={5000}
        max={30000}
        step={1000}
        placeholder="Max ₹"
        {...register("maxFee")}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  </div>
</div>



        {/* Location */}
<div>
  <label className="block font-semibold mb-1">Location</label>
  <input
    {...register("location")}
    placeholder="Enter your city..."
    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white/80 backdrop-blur-sm shadow-sm text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition"
  />
  {errors.location && (
    <p className="text-sm text-red-500 mt-1">{errors.location.message}</p>
  )}
</div>


        {/* Submit Button */}
<button
  type="submit"
  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
>
  Submit
</button>

      </form>
    </div>
  </main>
);

}
