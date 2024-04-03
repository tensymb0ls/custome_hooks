import { useEffect, useState } from "react";

const useForm = (arg: string) => {
  const [id, setId] = useState(arg);
  const [title, setTitle] = useState(arg);
  const [description, setDescription] = useState(arg);
  const [status, seStatus] = useState(arg);
  const [createdAt, setCreatedAt] = useState(arg);

  useEffect(() => {
    console.log("id = " + id);
  }, [id]);

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submitted");
  };

  // hook returns array or object
  return {
    id,
    setId,
    title,
    setTitle,
    description,
    setDescription,
    status,
    seStatus,
    createdAt,
    setCreatedAt,
    handleFormSubmit,
  };
};

export default useForm;
