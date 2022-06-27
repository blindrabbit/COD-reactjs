import * as React from 'react';
import { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import Fingerprint from "@material-ui/icons/Fingerprint";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Footer from "../../components/footer/footer";
import { Navbartop } from "../../components/navbartop/navbartest";
import SidebarDashboard from "../../components/sidebar";
import barrinhaService from "../../services/barrinhaState";
import styled from "@emotion/styled";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { SiGoogleclassroom } from "react-icons/si";
import Switch from '@material-ui/core/Switch';
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CadastroProject() {
  // O userState guarda váriaveis dinamicamente
  const [laboratory_name, setLaboratory_name] = useState("");
  // const [token, setToken] = useState("");
  // const [username, setUsername] = useState("");
  // variavel auxiliar que funciona como histório de navegação
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
  const [collapsed, setCollapsed] = useState(true);

  const mudarswitch = () => {
    alert("valor");
    // const [show, toggleShow] = useState(true);
  };
  const enviar = async (e: FormEvent) => {
    e.preventDefault();

    // pegar a hora atual
    const time = new Date();
    const data = {
      laboratory_name,
      time,
      token: "4f0b281fa3473d187b9271e9a75f07",
      username: "test10",
    };
    console.log(data);

    // POST QUANDO MINHA API ESTIVER ONLINE
    // SE TEM BARRINHA NO BACK TEM BNARRINHA NO FRONT
    const response = await api
      .post("/laboratory/", data)
      // depois que rodar o post, roda o then
      // CASO SUCESSO
      .then(() => {
        alert("Cadastrado com sucesso");

        // como eu nao sei se ele acessou a pagina home, estou forçando
        // ele ir pra home
        history.push("/");
      })
      // CASO ERRO
      .catch(() => {
        alert("Serviço já existente");
      });
    };



  return (
    // importante, sempre retornar um componente
    // exemplo: ou uma div inteira, ou um h1
    // tambem posso só abrir ou fechar uma tag <></>

    <>
      <SidebarDashboard />
      <Container_animate>
        <AnimatePresence>
          <form className={classes.form} noValidate>
            <Grid style={{ border: "solid" }}
              container
              spacing={0}
              direction="row"
              alignItems="flex-start"
              justify="center">
              <Grid item xs={10} style={{ border: "solid" }}>
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <SiGoogleclassroom />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Laboratorio Virtual
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4} style={{ border: "solid" }}>
                <div className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    Informações Básicas
                  </Typography>
                </div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="nomeLab"
                  label="Nome do Laboratorio Virtual"
                  name="laboratory_name"
                  autoComplete="nome do Serviço"
                  autoFocus
                  onChange={(e) => setLaboratory_name(e.target.value)}
                  type="text"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="select"
                  label="Turma"
                  value=""
                  select
                >
                  <MenuItem value="">
                    <em>Nenhuma</em>
                  </MenuItem>
                  <MenuItem value="1">TURMA 1</MenuItem>
                  <MenuItem value="2">TURMA 2</MenuItem>
                  <MenuItem value="3">TURMA 3</MenuItem>
                </TextField>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="quantidadeVM"
                  label="Quantidade de Máquinas Virtuais"
                  name="quantidadeVM"
                  autoComplete="Qunatidade de maquinas virtuais"
                  onChange={(e) => setLaboratory_name(e.target.value)}
                  type="text"
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="select"
                  label="Imagens Disponiveis"
                  value=""
                  select
                >
                  <MenuItem value="">
                    <em>Nenhum</em>
                  </MenuItem>
                  <MenuItem value="1">Ubuntu 20.04</MenuItem>
                  <MenuItem value="2">Windows XP</MenuItem>
                  <MenuItem value="3">CentOS 8</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={4} style={{ border: "solid" }}>

                <div className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    Configurações de Rede
                  </Typography>
                </div>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch focusVisibleClassName=".Mui-focusVisible" defaultChecked />}
                    label="Acesso a Internet"
                    labelPlacement="start"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch focusVisibleClassName=".Mui-focusVisible" 
                    onChange={(e) => setLaboratory_name(e.target.value)} />}
                    label="Controle Parental"
                    labelPlacement="start"
                  />
                 
                  {/* <div>
                    <button
                      onClick={() => Toggle.toggleShow(!show)}
                    >
                      toggle: {show ? 'show' : 'hide'}
                    </button>
                    {show && <div>Hi there</div>}
                  </div> */}
                </FormGroup>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="select"
                  label="Turma"
                  value=""
                  select
                >
                  <MenuItem value="">
                    <em>Nenhuma</em>
                  </MenuItem>
                  <MenuItem value="1">TURMA 1</MenuItem>
                  <MenuItem value="2">TURMA 2</MenuItem>
                  <MenuItem value="3">TURMA 3</MenuItem>
                </TextField>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="quantidadeVM"
                  label="Quantidade de Máquinas Virtuais"
                  name="quantidadeVM"
                  autoComplete="Qunatidade de maquinas virtuais"
                  onChange={(e) => setLaboratory_name(e.target.value)}
                  type="text"
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="select"
                  label="Imagens Disponiveis"
                  value=""
                  select
                >
                  <MenuItem value="">
                    <em>Nenhum</em>
                  </MenuItem>
                  <MenuItem value="1">Ubuntu 20.04</MenuItem>
                  <MenuItem value="2">Windows XP</MenuItem>
                  <MenuItem value="3">CentOS 8</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={8}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  // onCLinc chama a função enviar criada la em cima
                  onClick={enviar}
                >
                  Criar Laboratorio Virtual
                </Button>
              </Grid>
            </Grid>
            <Bloco
              initial={{ marginLeft: 200 }}
              animate={{ marginLeft: collapsed ? 64 : 168 }}
            >
            </Bloco>
          </form>
        </AnimatePresence>
      </Container_animate>
    </>
  );
}

const Container_animate = styled.div`
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
  padding: 20px; /* this */
  margin: 20px;
  width: 30%;
`;

export default CadastroProject;
