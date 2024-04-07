import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const useForm = (arg: string) => {
  const [name, setName] = useState(arg);
  const [password, setPassword] = useState(arg);
  const [id, setId] = useState(arg);
  const [title, setTitle] = useState(arg);
  const [description, setDescription] = useState(arg);
  const [status, setStatus] = useState(arg);
  const [createdAt, setCreatedAt] = useState(arg);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("id = " + id);
  }, [id]);

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sessionStorage.setItem("user", name);
    navigate("/people");
  };

  // hook returns array or object
  return {
    name,
    setName,
    password,
    setPassword,
    id,
    setId,
    title,
    setTitle,
    description,
    setDescription,
    status,
    setStatus,
    createdAt,
    setCreatedAt,
    handleFormSubmit,
  };
};

export default useForm;
