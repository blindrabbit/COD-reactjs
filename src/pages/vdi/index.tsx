import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { FormEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import SidebarDashboard from "../../components/sidebar";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import clsx from "clsx";

const VDI = () => {
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return ev.returnValue = 'Are you sure you want to close?' + vmsListParse["id"];
    });

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

    const classes = useStyles();

    const [server, setServer] = useState([]);
    useEffect(() => {
        console.log("API Registra SERVER no BD")
        api.post(`/server/`, {
            server_id: vmsListParse["id"],
            project_id: vmsListParse["projeto_id"],
            server_nome: vmsListParse["nome"],
            server_tipo: vmsListParse["tipo"],
            server_url: vmsListParse["url"],
            is_server_ativo: vmsListParse["ativo"]
        }).then((server) => setServer(server.data));
    }, []);

    const location = useLocation();
    const vmsListParse = JSON.parse(JSON.stringify(location.state, null, 2));
    const history = useHistory();

    const onClickButtonDesconectar = (dados: any) => {
        console.log("Botão de Desconexão Clicado!")
        api.post(`/server/`, {
            server_id: vmsListParse["id"],
            is_server_ativo: "desconectar"
        }).then((server) => setServer(server.data));
        history.push({
            pathname: '/Pagina_de_teste/',
            state: dados
        });
    }

    // { "ativo": "", 
    // // "id": "696f2662-e3d7-4d8a-856f-de000e5356da", 
    // "nome": "lab-python-101-openwrt_vnfd-VM-1", 
    // "tipo": "novnc", 
    // "url": "http://172.16.112.60:6080/vnc_auto.html?path=%3Ftoken%3Dd46aafc2-6a72-42e4-9255-55353bc2b254" }

    const s = "";

    return (
        <>
            <SidebarDashboard />
            <Container>
                <div>
                    <h1>MÁQUINA VIRTUAL!</h1>
                    <br></br>
                    <p>Nome: {vmsListParse["nome"]}</p>
                    <p>Projeto[ID]: {vmsListParse["projeto_id"]}</p>
                    <p>Server[ID]: {vmsListParse["id"]}</p>
                </div>
                <div>
                    <AnimatePresence>
                        <iframe src={vmsListParse["url"]}
                            width="850"
                            id="myId"
                            className="myClassname"
                            height="450" />
                    </AnimatePresence>
                </div>
                <div>
                    <Button
                        hidden
                        className={clsx(classes.root)}
                        onClick={() => onClickButtonDesconectar(s)}
                    >Desconectar!</Button>
                </div>
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

export default VDI;