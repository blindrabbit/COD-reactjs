import { CssBaseline } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Navbartop } from "../../components/navbartop/navbartest";
import { Barrinha } from "../../components/sidebar";
import api from "../../services/api";

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

  return (
    <>
      <CssBaseline />
      <Navbartop /> {/* <CssBaseline /> */}
      {/* ISSO É PARA O CASO DE EU QUERER UM DADO QUE EU VÁ TRABALHAR COM ELE */}
      {/* {state === "" ? (
        ""
      ) : ( */}
      {/* ISSO É PARA O RETORNO DE UMA STRING APENAS */}
      {state.map((d) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {d}
        </div>
      ))}
    </>
  );
}

export default Projects;
