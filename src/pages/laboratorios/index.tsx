import { CssBaseline, ListItem, Button } from "@material-ui/core";
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
import barrinhaService from "../../services/barrinhaState";
import clsx from "clsx";

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
    username: "test10000",
    project: "8bf8529d9c144b04b6a9d9fb87bcd7f7",

  };

  // useEffect(() => {
  //   const config = {
  //     headers: { token: dados.token, username: dados.username },
  //   };

  //   // PARA ENVIAR PRA BUSCAR INFORMAÇÇÕES DE UM PROJETO
  //   // ESPECIFICO: `/laboratory/${config}`
  //   api.get("/laboratory/", config).then((res) => setState(res.data));
  // }, [dados.token, dados.username]);

  // useEffect(() => {
  //   const config = {
  //     headers: { token: dados.token, username: dados.username, project: dados.project},
  //   };
  //   // PARA ENVIAR PRA BUSCAR INFORMAÇÇÕES DE UM PROJETO
  //   // ESPECIFICO: `/laboratory/${config}`
  //   //8bf8529d9c144b04b6a9d9fb87bcd7f7 projeto ADMIN
  //   //2f44a11babd24065809de401c1219e19 projeto lab-sfc
  //   api.get(`/vdi/${project}`, config).then((res) => setState(res.data));
  // }, [dados.token, dados.username, dados.project]);

  // const CardContainer = styled(motion.div)`
  //   display: grid;
  //   place-content: center;
  //   padding: 8px;
  //   background-color: white;

  //   height: 50px;
  //   width: 200px;

  //   border-radius: 8px;
  // `;

  const [collapsed, setCollapsed] = useState(true);


  useEffect(() => {
    const subscribe = barrinhaService.onBarrinha().subscribe((state) => {
      if (state) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    });
  });
  
  const [projeto, setProjeto] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    // document.title = `Você clicou ${count} vezes`;
    api.get(`/vdi/${projeto}`)
  })
  return (
    <>
      <SidebarDashboard /> {/* <CssBaseline /> */}
      {/* ISSO É PARA O CASO DE EU QUERER UM DADO QUE EU VÁ TRABALHAR COM ELE */}
      {/* {state === "" ? (
        ""
      ) : ( */}
      {/* ISSO É PARA O RETORNO DE UMA STRING APENAS */}
      {/* <Grid> */}
      <Container>
        <div>
          <Button className={clsx(classes.root)}>Laboratórios disponíveis!</Button>
        </div>
        <div>
          {/* onChange={setProjetochange(state.value)} value={state.value} */}
          <select name="projetoSelect" id="lang">
            <option value="">-- Select --</option>
            <option value="8bf8529d9c144b04b6a9d9fb87bcd7f7">Admin</option>
            <option value="2f44a11babd24065809de401c1219e19">lab-sfc</option>
          </select>
        </div>
        <AnimatePresence>
          {state.map((d, idx) => (
            <Bloco
              // pra mostrar item por item preciso da key
              key={d["id"]}
              whileHover={{ backgroundColor: "green" }}
              initial={{ marginLeft: 200 }}
              animate={{ marginLeft: collapsed ? 64 : 168 }}
            >
              <a href={d["url"]} target="_blank">{d["nome"]}</a>
            </Bloco>
          ))}
        </AnimatePresence>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justifycontent: center;
  flex-direction: column;
  align-items: center;
`;

const Bloco = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justifycontent: center;
  align-items: center;
  background-color: #01573d;
  padding: 20px; /* this */
  margin: 20px;
  transition: 1s background-color;
  // flex-grow: 1;
  width: 40%;
  // height: 20%;
  color: white;
`;

export default Projects;

// // {state.map((d)
//       {/* // style={{
//       //   display: "flex",
//       //   alignItems: "center",
//       //   justifyContent: "center",
//       // }}
