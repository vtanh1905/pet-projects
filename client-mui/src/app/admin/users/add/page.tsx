"use client";

import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { PickerValue } from "@mui/x-date-pickers/internals";
import { usersCoreAPI } from "@/lib/apis/core-api";
import { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date_of_birth: Dayjs | null;
}

export default function AddUser() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date_of_birth: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDatePickerChange = (name: string, value: PickerValue) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await usersCoreAPI.insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date_of_birth: formData.date_of_birth?.format('YYYY-MM-DD') || "",
      })

      alert("User created successfully");
      router.push("/admin/users");
    } catch (error) {
      console.error("Error creating user: ", error);
      alert("Error creating user");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add New User
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone"
          name="phone"
          fullWidth
          margin="normal"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        <div className="pt-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of birth"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={(value) => {
                handleDatePickerChange("date_of_birth", value);
              }}
            />
          </LocalizationProvider>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="contained" type="submit" loading={isLoading}>Submit</Button>
          <Button variant="contained" color="secondary" onClick={() => router.push("/admin/users")}>
            Cancel
          </Button>
        </div>
      </Box>
    </>
  );
}
