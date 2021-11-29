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

    const onClickButtonVDI = (dados: any) => {
        history.push({
            pathname: '/vdi/',
            state: dados
        });
    }

    const location = useLocation();

    const [cookies, setCookie] = useCookies(['serverused']);

    var server = {
        "server_id": '',
        "project_id": '',
        "server_nome": '',
        "server_tipo": '',
        "server_url": '',
        "is_server_ativo": ''
    }

    function cookieHandle() {
        var temp = ''
        var temps = {}
        if (typeof cookies.serverused === 'undefined') {
            // SEM COOKIE DE UTILIZAÇÃO DE ALGUMA MAQUINA VIRUTAL
            return 0
        } else {
            const temp = JSON.parse(decodeURI(cookies.serverused));
            // console.log(cookies.serverused)
            // temp = decodeURI(cookies.serverused)
            server = temp
            console.log(server.project_id)
            // temps = JSON.parse(temp)
            // console.log(temps)
            // console.log(temp['project_id'])
            // server['server_id']=temp.server_id
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
                    <div>
                        {cookieHandle() == 1 &&
                        <Div>
                            <br></br>
                            {/* <p>{JSON.stringify(virtualDesktops[0], null, 2)}</p> */}
                            <p>Há uma sessão previamente iniciada, deseja restaura-la?</p>
                            <br></br>
                            <Button
                                startIcon={<ComputerIcon />}
                                size="large"
                                variant="contained"
                                className={clsx(classes.root)}
                                onClick={() => onClickButtonVDI(server)}
                            >Restaurar acesso!</Button>
                        </Div>
                        // <div>
                        //     {server.server_id}<br></br>
                        //     {server.server_nome}<br></br>
                        //     {server.server_tipo}<br></br>
                        //     {server.server_id}<br></br>
                        // </div>
                        }

                        {/* && 
                            <h3> 
                                TESTE                           
                                {cookieHandle(cookies.serverused)['server_nome']}
                            </h3>
                        } */}
                        {/* {cookies.serverused}
                        Cookie:<br></br>
                        server_name:<br></br>*/}
                        {/* {cookieHandle(cookies.serverused)['server_nome']} */}
                        {/*
                        project_id:<br></br>
                        {cookieHandle(cookies.serverused)['project_id']} */}
                    </div>
                    <AnimatePresence>
                        {/* // var _user_attributes = cookies.get("_user_attributes");
                        // if (_user_attributes) {
                        //   _user_attributes = decodeURI(_user_attributes);
                        //   const user_attributes = JSON.parse(_user_attributes);
                        //   console.log(user_attributes);
                        //   this.state = {
                        //     name: user_attributes.user_givenName
                        //   }; 
                    */}
                        {/* {cookies && 
                            <h1>VOCE ESCOLHEU ANTERIORMENTE ESSE PC: {cookies}!</h1>
                        } */}
                        {virtualDesktops.length > 0 &&
                            <Div>
                                <br></br>
                                {/* <p>{JSON.stringify(virtualDesktops[0], null, 2)}</p> */}
                                <p>Desktops disponíveis: {virtualDesktops.length}</p>
                                <br></br>
                                <Button
                                    startIcon={<ComputerIcon />}
                                    size="large"
                                    variant="contained"
                                    className={clsx(classes.root)}
                                    onClick={() => onClickButtonVDI(virtualDesktops[0])}
                                >Conectar!</Button>
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