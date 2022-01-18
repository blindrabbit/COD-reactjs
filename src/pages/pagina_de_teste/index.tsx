import { Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../../services/api";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import SidebarDashboard from "../../components/sidebar";
import barrinhaService from "../../services/barrinhaState";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import ComputerIcon from '@material-ui/icons/Computer';
import { useCookies } from "react-cookie";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            textAlign: "center"
        },
        paper: {
            padding: theme.spacing(24),
            textAlign: "center",
            color: theme.palette.text.secondary,
        },
    })
);

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

    // const dados = {
    //     token: "269add21e1b01a62f8854b6e2a0e38",
    //     username: "test10000",
    //     project: "8bf8529d9c144b04b6a9d9fb87bcd7f7",

    // };

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
        api.get(`/listarprojetos/`).then((projetos) => listProjeto(projetos.data));
    }, []);

    const [virtualDesktops, listVirtualDesktops] = useState([]);

    const handleLaboratoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = event.target.selectedIndex;
        const lab_name = event.target[selectedIndex].getAttribute('value')
        const lab_id = event.target[selectedIndex].getAttribute('id')
        api.get(`/vdi/${lab_id}/${lab_name}`).then((virtualDesktops) => listVirtualDesktops(virtualDesktops.data))
    }

    const onClickButtonVDI = (dados: any, conexao = 'nova') => {
        if (conexao != 'nova') {
            dados.ativo = 'restaurar'
        } else {
            dados.ativo = 'nova'
        }

        history.push({
            pathname: '/vdi/',
            state: dados
        });
    }

    const location = useLocation();

    const [cookies, setCookie] = useCookies(['serverused']);

    var server = {
        "id": '',
        "projeto_id": '',
        "nome": '',
        "tipo": '',
        "url": '',
        "ativo": ''
    }

    function cookieHandle() {
        if (typeof cookies.serverused === 'undefined' || cookies.serverused === '') {
            console.log('COOKIE INDEFINIDO OU ZERADO!')
            return 0
        } else {
            server = JSON.parse(decodeURI(cookies.serverused));
            console.log('VALOR DO COOKIE:')
            console.log(cookies.serverused)
        }
        return 1
    }

    // var serverCookie = ''
    // var testeserver = ''
    // var testejson = ''
    // const onCookie = (dados: any) => {
    //     serverCookie = decodeURI(dados)
    //     serverCookie = JSON.parse(serverCookie)
    //     return serverCookie
    // }

    return (
        <>
            <SidebarDashboard />
            <Container>
                <div>
                    <Titulo>Laboratórios disponíveis!</Titulo>
                </div>
                <div>
                    <AnimatePresence>
                        <Div>
                            <select
                                onChange={handleLaboratoryChange}
                            >
                                <option value="">-- Selecionar --</option>
                                {projetos.map((proj) => (
                                    <option id={(proj['id'])} value={(proj['nome'])}>
                                        {proj['nome']}
                                    </option>
                                ))}
                            </select>
                        </Div>
                    </AnimatePresence>
                    <br></br>
                    <p>VDI: {JSON.stringify(virtualDesktops[0])}</p>
                    <AnimatePresence>
                        {virtualDesktops.length > 0 &&
                            <Div>
                                {cookieHandle() == 1 &&
                                    server.projeto_id == virtualDesktops[0]['projeto_id'] &&
                                    <Div>
                                        <p>COOKIE: {JSON.stringify(server)}</p>
                                        <p>Há uma sessão previamente iniciada, deseja restaura-la?</p>
                                        <br></br>
                                        <Button
                                            startIcon={<ComputerIcon />}
                                            size="large"
                                            variant="contained"
                                            className={clsx(classes.root)}
                                            onClick={() => onClickButtonVDI(server, 'restaurar')}
                                        >Restaurar acesso!</Button>
                                    </Div>}
                                <Div>??
                                    <div>
                                        {virtualDesktops.filter(desktop => desktop['id'] != server.id).map(listaDesktops => (
                                            <p>{listaDesktops['nome']}</p>
                                        ))}
                                        {/* {virtualDesktops.filter(desktop => desktop['id'] != server.id)[0]} */}
                                        {/* {people.filter(person => person.age < 60).map(filteredPerson => (
                                            <li>
                                                {filteredPerson.name}
                                            </li>
                                        ))} */}
                                    </div>
                                </Div>
                                <Div>
                                    <br></br>
                                    <p>Desktops disponíveis: {virtualDesktops.length}</p>
                                    <br></br>
                                    <Button
                                        startIcon={<ComputerIcon />}
                                        size="large"
                                        variant="contained"
                                        className={clsx(classes.root)}
                                        // onClick={() => onClickButtonVDI(virtualDesktops[0])}
                                        onClick={() => onClickButtonVDI(virtualDesktops.filter(desktop => desktop['id'] != server.id)[0])}
                                    >Conectar!</Button>
                                </Div>
                            </Div>
                        }
                    </AnimatePresence>
                </div>
            </Container >
        </>
    );
}

const Titulo = styled.div`
  vertical-align: middle;
  display: flex;
  justifycontent: center;
  flex-direction: column;
  padding: 50px;
  font-size:large !important;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justifycontent: center;
  flex-direction: column;
  align-items: center;
`;

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