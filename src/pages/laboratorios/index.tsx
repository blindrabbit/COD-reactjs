import { CssBaseline, ListItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Navbartop } from "../../components/navbartop/navbartest";
// import { Barrinha } from "../../components/sidebar";
import api from "../../services/api";
import styled from "@emotion/styled";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import SidebarDashboard from "../../components/sidebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(24),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function Projects() {
  // MEU RETORNO DEVE SER UMA LISTA DE OBJETOS
  const [state, setState] = useState([]);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [laboraty_name, setLaborary_name] = useState("");

  const classes = useStyles();
  // O userState guarda váriaveis dinamicamente
  const [nome, setNome] = useState("");
  // variavel auxiliar que funciona como histório de navegação
  const history = useHistory();
  // useEffect(() => {
  //   api.get("/api/data").then(
  //     res => setState(res.data);
  //   );
  // });
  const [selectedId, setSelectedId] = useState(null);

  const dados = {
    token: "269add21e1b01a62f8854b6e2a0e38",
    username: "test10",
  };

  useEffect(() => {
    const config = {
      headers: { token: dados.token, username: dados.username },
    };

    // PARA ENVIAR PRA BUSCAR INFORMAÇÇÕES DE UM PROJETO
    // ESPECIFICO: `/laboratory/${config}`
    api.get("/laboratory/", config).then((res) => setState(res.data));
  }, [dados.token, dados.username]);

  // const CardContainer = styled(motion.div)`
  //   display: grid;
  //   place-content: center;
  //   padding: 8px;
  //   background-color: white;

  //   height: 50px;
  //   width: 200px;

  //   border-radius: 8px;
  // `;

  return (
    <>
      <CssBaseline />
      <SidebarDashboard /> {/* <CssBaseline /> */}
      {/* ISSO É PARA O CASO DE EU QUERER UM DADO QUE EU VÁ TRABALHAR COM ELE */}
      {/* {state === "" ? (
        ""
      ) : ( */}
      {/* ISSO É PARA O RETORNO DE UMA STRING APENAS */}
      {/* <Grid> */}
      <AnimatePresence>
        {state.map((d, idx) => (
          <Bloco
            // pra mostrar item por item preciso da key
            key={d}
            whileHover={{ backgroundColor: "green" }}
            animate={{
              scale: [1, 1.5, 1],
              // rotate: [10, 0, 0],
              transition: {
                delay: 0.2 * idx,
                duration: 0.5,
                opacity: 0.2 * idx,
              },
            }}
          >
            {d}
          </Bloco>
        ))}
      </AnimatePresence>
    </>
  );
}

const Grid = styled.div`
  display: flex;
`;

const Bloco = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justifycontent: space-between;
  align-items: center;
  background-color: #01573d;
  padding: 20px; /* this */
  margin: 20px;
  transition: 1s background-color;
  flex-grow: 1;
`;

export default Projects;

// // {state.map((d)
//       {/* // style={{
//       //   display: "flex",
//       //   alignItems: "center",
//       //   justifyContent: "center",
//       // }}
