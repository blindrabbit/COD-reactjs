import { CssBaseline, ListItem, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import axios, { AxiosResponse } from "axios";
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
import { stringify } from "querystring";

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

const countriesData = [
    {
        name: "Germany",
        states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
    },
    {
        name: "India",
        states: ["Delhi", "Kolkata", "Mumbai", "Bangalore"]
    },
    {
        name: "France",
        states: ["Auvergne", "Bretagne", "Corse", "Centre"]
    }
];


function Pagina_de_Teste() {
    // MEU RETORNO DEVE SER UMA LISTA DE OBJETOS
    // const [state, setState] = useState([]);
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
    const [laboraty_name, setLaborary_name] = useState("");

    const classes = useStyles();
    // O userState guarda váriaveis dinamicamente
    const [nome, setNome] = useState("");
    // variavel auxiliar que funciona como histório de navegação
    const history = useHistory();
    const [selectedId, setSelectedId] = useState(null);

    const dados = {
        token: "269add21e1b01a62f8854b6e2a0e38",
        username: "test10000",
        project: "8bf8529d9c144b04b6a9d9fb87bcd7f7",

    };
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

    const [projetos, listProjeto] = useState([]);
    useEffect(() => {
        console.log("API PARA LISTAR OS PROJETOS")
        api.get(`/listarprojetos/`).then((projetos) => listProjeto(projetos.data));
    }, []);

    const [{ country, state }, setData] = useState({
        country: "Germany",
        state: ""
    });

    const [virtualDesktops, listVirtualDesktops] = useState([]);

    const handleLaboratoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = event.target.selectedIndex;
        const lab_name = event.target[selectedIndex].getAttribute('value')
        const lab_id = event.target[selectedIndex].getAttribute('id')
        // console.log("API PARA LISTAR AS MAQUINAS VIRTUAIS DO PROJETO " + lab_name + " - " + lab_id)
        api.get(`/vdi/${lab_id}/${lab_name}`).then((virtualDesktops) => listVirtualDesktops(virtualDesktops.data))
    }

    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return ev.returnValue = 'Are you sure you want to close?';
    });

    return (
        <>
            <SidebarDashboard />
            <Container>
                <div>
                    <Button className={clsx(classes.root)}>Laboratórios disponíveis!</Button>
                </div>
                <div>
                    <AnimatePresence>
                        <select
                            // value={}
                            onChange={handleLaboratoryChange}
                        >
                            <option value="">-- Selecionar --</option>
                            {projetos.map((proj) => (
                                <option id={(proj['id'])} value={(proj['nome'])}>
                                    {proj['nome']}
                                </option>
                            ))}
                        </select>
                    </AnimatePresence>
                    <AnimatePresence>
                        <div>
                            {virtualDesktops.map((d, idx) => (
                                <Bloco
                                    // pra mostrar item por item preciso da key
                                    key={d["id"]}
                                    whileHover={{ backgroundColor: "rgb(1, 87, 61)" }}
                                    initial={{ marginLeft: 200 }}
                                    animate={{ marginLeft: collapsed ? 64 : 168 }}
                                >
                                    <a href={d["url"]} target="_blank">{d["nome"]}</a>
                                </Bloco>
                            ))}
                        </div>
                    </AnimatePresence>
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

export default Pagina_de_Teste;