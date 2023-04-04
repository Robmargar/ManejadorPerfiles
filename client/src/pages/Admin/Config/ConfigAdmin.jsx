import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
export default function ConfigAdmin() {
  const { user } = useSelector((state) => state.auth);
  const idUser = user?.id
  const [seePassword, setSeePassword] = useState(false);
  const [seeNewPassword, setSeeNewPassword] = useState(false);
  const [filterSelected, setFilterSelected] = useState();
  const handleChangeState = (event) => {
    setFilterSelected(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user.email ? user.email : "",
      telefono: user.telefono ? user.telefono : "",
      newEmail: "",
      password: "",
      newPassword: "",
      repitPassword: "",
    },
    mode: "onChange",
  });

  const OnSubmit = async (user) => {
    if (user.newPassword !== user.repitPassword) {
      Swal.fire("warning", "Las nuevas contraseñas no coinciden", "error");
      return;
    }
    if (!user?.password ) {
      Swal.fire(
        "Error",
        "Ingrese su contraseña para modificar algun campo",
        "warning"
      );
      return;
    }
    const data = {
      email: user.email,
      newEmail: user.newEmail,
      telefono: user.telefono,
      password: user.password,
      newPassword: user.newPassword,
    };
    try {
      axios
        .put(`/auth/${ idUser}`, data)
        .then((res) => {
          Swal.fire("Exito", "Datos actualizados", "success");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Algo salio mal",
            text: err.response.data.error,
          });
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Algo salio mal",
        text: error.response,
      });
    }
  };
  return (
    <div className="flex flex-col gap-5 min-h-screen px-24">
      <h1 className="text-xl font-semibold">Datos Personales</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(OnSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base font-medium">
            Email Actual
          </label>
          <input
            {...register("email", {
              required: true,
            })}
            disabled
            type="email"
            name="email"
            id="email"
            className="p-3 rounded-md border-2 w-full lg:w-1/2 outline-none"
            placeholder="Ingresa el email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newEmail" className="text-base font-medium">
            Nuevo Email
          </label>
          <input
            {...register("newEmail")}
            type="email"
            name="newEmail"
            id="newEmail"
            className="p-3 rounded-md border-2 w-full lg:w-1/2 outline-none"
            placeholder="Ingresa el nuevo email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefono" className="text-base font-medium">
            Telefono
          </label>
          <Typography
            sx={{ color: "grey", fontFamily: "Poppins", fontSize: "1.6vh" }}
          >
            Telefono actual
          </Typography>
          <div className="flex flex-row w-4/5">
            <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
              <InputLabel id="demo-select-small"></InputLabel>

              <Select
                sx={{ border: "none", outline: "none" }}
                labelId="demo-select-small"
                id="demo-select-small"
                value={filterSelected}
                label={"Estado"}
                onChange={handleChangeState}
              >
                <MenuItem value={true}>+ 51</MenuItem>
              </Select>
            </FormControl>
            <input
              {...register("telefono", {
                required: true,
              })}
              type="number"
              name="telefono"
              id="telefono"
              className="p-3 rounded-md border-2 w-full lg:w-1/2 outline-none"
              placeholder="Ingresa el telefono"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefono" className="text-base font-medium">
            Nuevo Telefono
          </label>

          <div className="flex flex-row w-4/5">
            <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
              <InputLabel id="demo-select-small"></InputLabel>

              <Select
                sx={{ border: "none", outline: "none" }}
                labelId="demo-select-small"
                id="demo-select-small"
                value={filterSelected}
                label={"Estado"}
                onChange={handleChangeState}
              >
                <MenuItem value={true}>+ 51</MenuItem>
              </Select>
            </FormControl>
            <input
              {...register("telefono", {
                required: true,
              })}
              type="number"
              name="telefono"
              id="telefono"
              className="p-3 rounded-md border-2 w-full lg:w-1/2 outline-none"
              placeholder="Ingresa el telefono"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-base font-medium">
            Contraseña actual
          </label>
          <div className="relative w-full lg:w-1/2">
            <input
              {...register("password")}
              type={seePassword ? "text" : "password"}
              name="password"
              id="password"
              className="p-3 rounded-md border-2 w-full outline-none"
              placeholder="Ingresa la contraseña"
            />
            {seePassword ? (
              <BsEye
                onClick={() => setSeePassword(!seePassword)}
                className="absolute cursor-pointer top-[35%] lg:top-[40%] right-5"
              />
            ) : (
              <BsEyeSlash
                onClick={() => setSeePassword(!seePassword)}
                className="absolute top-[35%] lg:top-[40%] cursor-pointer right-5"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPassword" className="text-base font-medium">
            Contraseña nueva
          </label>
          <div className="relative w-full lg:w-1/2">
            <input
              {...register("newPassword")}
              type={seeNewPassword ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              className="p-3 rounded-md border-2 w-full outline-none"
              placeholder="Ingresa la nueva contraseña"
            />
            {seeNewPassword ? (
              <BsEye
                onClick={() => setSeeNewPassword(!seeNewPassword)}
                className="absolute cursor-pointer top-[35%] lg:top-[40%] right-5"
              />
            ) : (
              <BsEyeSlash
                onClick={() => setSeeNewPassword(!seeNewPassword)}
                className="absolute top-[35%] lg:top-[40%] cursor-pointer right-5"
              />
            )}
          </div>
          <div className="relative w-full lg:w-1/2">
            <input
              {...register("repitPassword")}
              type={seeNewPassword ? "text" : "password"}
              name="repitPassword"
              id="repitPassword"
              className="p-3 rounded-md border-2 w-full outline-none"
              placeholder="Repeti la nueva contraseña"
            />
            {seeNewPassword ? (
              <BsEye
                onClick={() => setSeeNewPassword(!seeNewPassword)}
                className="absolute cursor-pointer top-[35%] lg:top-[40%] right-5"
              />
            ) : (
              <BsEyeSlash
                onClick={() => setSeeNewPassword(!seeNewPassword)}
                className="absolute top-[35%] lg:top-[40%] cursor-pointer right-5"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#0061dd] text-white w-full lg:w-1/2 outline-none p-2 rounded-md"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
}
