import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container, Owner, Loading, BackButton, IssuesList, PageActions, Filters} from "./styles";
import api from '../../services/api';
import {FaArrowLeft} from 'react-icons/fa';


export default function Repositorio(){
    const { nomeRepositorio } = useParams();

    const [repositorio, SetRepositorio] = useState({});
    const [issues, SetIssues] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [state, setState] = useState('all');





    function handlePage(action){
        setPage(action === 'next' ? page + 1 : page - 1);
    }
    

    useEffect(()=>{
        async function issuesPage(){
            const response = await api.get(`/repos/${nomeRepositorio}/issues`, {
                params:{
                    state,
                    page, 
                    per_page: 5
                }
            });

            SetIssues(response.data);
        }
        
        issuesPage();
    }, [page, state]);


    useEffect(()=>{

        async function load(){

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepositorio}`),
                api.get(`/repos/${nomeRepositorio}/issues`, {
                    params:{
                        state: 'open', 
                        per_page: 5
                    }
                })
            ]);

            SetRepositorio(repositorioData.data);
            SetIssues(issuesData.data);
            SetLoading(false)

        }

        load();

    }, [nomeRepositorio])


    if(loading){
        return(
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
    }

    return(
        <Container>

            <BackButton to={'/'}>
                <FaArrowLeft size={20} />
            </BackButton>

            <Owner>
                <img 
                src={repositorio.owner.avatar_url}
                alt={repositorio.owner.login}/>
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>

            </Owner>

            <Filters>
                <button type="button" onClick={()=> setState('all')} disabled= {state === 'all'}>Todas</button>
                <button type="button" onClick={()=>setState('open')} disabled= {state === 'open'}>Abertas</button>
                <button type="button" onClick={()=>setState('closed')} disabled= {state === 'closed'}>Fechadas</button>

            </Filters>


            <IssuesList>
                {issues.map(issues =>(
                    <li key={String(issues.id)}>
                        <img src={issues.user.avatar_url} alt={issues.user.login}/>

                        <div>
                            <strong>
                                <a href={issues.html_url}>{issues.title}</a>

                                {issues.labels.map(labels =>(
                                    <span key={labels.id}>{labels.name}</span>
                                ))}
                            </strong>

                            <p>{issues.user.login}</p>
                        </div>

                    </li>
                ))}
            </IssuesList>

            <PageActions>
                <button 
                type="button" 
                onClick={()=> handlePage('back')}
                disabled= {page < 2}  
                >
                    Voltar
                </button>
                <button type="button" onClick={()=> handlePage('next')}>
                    Avançar
                </button>

            </PageActions>
        </Container>
    );
}