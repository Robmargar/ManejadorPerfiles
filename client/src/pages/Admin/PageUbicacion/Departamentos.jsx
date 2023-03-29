import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { getAllPaises, getAllDepartaments } from "../../../redux/SchoolsActions";
import Modal from "@mui/material/Modal";
import { Box, FormControl, InputLabel, ListItemText, MenuItem, Select } from "@mui/material";
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  overflow: "auto",
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};
function Departamentos() {
  const dispatch = useDispatch();
  const [pais, setPais] = React.useState(null);
  const [departamento, setDepartamento] = React.useState('');
  const { paises, departaments } = useSelector((state) => state.schools);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("/departamentos", { id_pais: pais, nombre_departamento: departamento })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Departamento creado",
          });
          dispatch(getAllDepartaments());
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal!",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    dispatch(getAllPaises())
    dispatch(getAllDepartaments())
  },[])

  const handleEdit = (id,name,paisId,e) => {
    e.preventDefault()
    try {
      axios
        .put(`/departamentos/${id}`, { nombre_departamento: name,id_pais:paisId })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Departamento editado",
          });
          dispatch(getAllDepartaments());
          handleCloseModal()
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal!",
          });
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = (e,id) => {
    e.preventDefault()
    try {
      axios
        .delete(`/departamentos/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Pais eliminado",
          });
          dispatch(getAllDepartaments());
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditDepartamento({})
  };

  const [editDepartamento,setEditDepartamento] = useState({})

  const handleEditPais = (id) => {
    handleOpenModal()
    const newDepartamento = departaments.find(dep=>dep.id === id)
    setEditDepartamento(newDepartamento)
  }

  return (
    <div className="flex flex-col gap-3">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label htmlFor="pais" className="font-medium text-xl">Crear departamento</label>
          <div className="flex gap-5 w-full items-end">
          <FormControl size="small" className="w-[220px]" variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Selecciona un pais
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-type-select-standard"
              value={pais}
              onChange={(e) => {
                setPais(e.target.value);
              }}
            >
              {paises?.map((type, index) => (
                <MenuItem value={type.id} key={index}>
                  <ListItemText
                    primary={type.nombre_pais}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <input
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            type="text"
            id="pais"
            name="pais"
            placeholder="Nombre departamento..."
            className="rounded-md shadow-md p-2 w-[250px] bg-slate-50  outline-none"
          />
          </div>
          <button
            type="submit"
            disabled={pais === null || departamento === ''}
            className="p-2 flex font-medium mx-auto lg:mx-0 w-fit text-[#0061dd] rounded-md disabled:bg-black/20 disabled:text-black/40 bg-[#0061dd]/20 "
          >
            Guardar
          </button>
        </form>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-xl">Todos los departamentos</h1>
          <div className="flex flex-col gap-3">
            {departaments.map((dep) => (
              <div key={dep.id} className="flex gap-4 items-center border p-2 w-fit rounded-md shadow-md">
                <div className="flex flex-col w-[400px] ">
                <h1 className="text-lg"> Nombre del departamento: {dep.nombre_departamento} </h1>
                <h2 className="text-lg">Pais: {paises.find(el=>el.id===dep.PaisId).nombre_pais} </h2>
                </div>
                <button className="p-2 flex font-medium mx-auto lg:mx-0 w-fit text-[#0061dd] rounded-md bg-[#0061dd]/20 disabled:line-through" onClick={()=>handleEditPais(dep.id)}>Editar</button>
          
                <button className="p-2 flex font-medium mx-auto lg:mx-0 w-fit text-[#0061dd] rounded-md bg-[#0061dd]/20 disabled:line-through" onClick={(e)=>handleDelete(e,dep.id)}>Eliminar</button>
                
              </div>
            ))}
        </div>
        </div>
        <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
            <form className="flex flex-col justify-center items-center gap-5">
                <label htmlFor="pais" className="font-medium text-xl">Editar departamento</label>
                <FormControl size="small" className="w-[220px]" variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Selecciona un pais
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-type-select-standard"
              value={editDepartamento.PaisId}
              onChange={(e) => {
                setEditDepartamento({...editDepartamento,PaisId:e.target.value});
              }}
            >
              {paises?.map((type, index) => (
                <MenuItem value={type.id} key={index}>
                  <ListItemText
                    primary={type.nombre_pais}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
                <input
                    value={editDepartamento.nombre_departamento}
                    onChange={(e) => setEditDepartamento({...editDepartamento,nombre_departamento:e.target.value})}
                    type="text"
                    id="pais"
                    name="pais"
                    placeholder="Nombre departamento..."
                    className="p-2 rounded-md shadow-md bg-slate-50 w-fit outline-none"
                />
                <button
                    type="submit"
                    disabled={editDepartamento.nombre_departamento === ""}
                    className="p-2 flex font-medium mx-auto lg:mx-0 w-fit text-[#0061dd] rounded-md disabled:bg-black/20 disabled:text-black/40 bg-[#0061dd]/20 "
                    onClick={(e)=>handleEdit(editDepartamento.id,editDepartamento.nombre_departamento,editDepartamento.PaisId,e)}
                >
                    Guardar
                </button>
            </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Departamentos;
