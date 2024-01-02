import React, {useState, useCallback, useEffect} from "react";
import {FaGithub, FaPlus, FaSpinner, FaBars, FaTrash} from 'react-icons/fa'; 
import { Container, Form, SubmitButton, List, DeleteButton} from "./styles";
import api from "../../services/api";
import { Link } from "react-router-dom";



export default function Main(){

    const [newRepos, setNewRepos] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const[loading, setLoading] = useState(false);
    const[alert, setAlert] = useState(null);
    const[save, setSave] = useState(false);

    //Buscar
    useEffect(()=>{
        const repoStorage = localStorage.getItem('repos');

        if(repoStorage){
            setRepositorios(JSON.parse(repoStorage));
        }
        setSave(true);
    }, []);

    // Salvar
    useEffect(()=>{
        if(save){
            localStorage.setItem('repos', JSON.stringify(repositorios));
        }
       
    }, [repositorios]);




    function handleInputChange(event){
        setAlert(null);
        setNewRepos(event.target.value);
    }

    const handleSubmit = useCallback((event)=>{

        event.preventDefault();

        async function submit(){
            
            try{

                if(newRepos === ''){
                    throw new Error('Você precisa indicar um repositorio')
                }

                setLoading(true);
                 const response = await api.get(`repos/${newRepos}`)

                const hasRepo = repositorios.find(repo => repo.name === newRepos)

                if(hasRepo){
                    throw new Error('Repositorio Duplicado')
                }

                const data = {
                     name: response.data.full_name,
                     avatar: response.data.owner.avatar_url,
                     login: response.data.owner.login
                }

                setRepositorios([...repositorios, data]);
                setNewRepos('');
            }catch(error){
                setAlert(true);
                console.log(error);
            }finally{
                setLoading(false);
            }
            
        }

        submit();
    }, [newRepos, repositorios]);
        

const handleDelete = useCallback((repo)=>{
    const find = repositorios.filter(r => r.name !== repo);
    setRepositorios(find)
}, [repositorios]);

    return(
        <Container>
            

            <h1><FaGithub size={25} />Meus Repositorios</h1>


            <Form onSubmit={handleSubmit} error={alert}>
                <input 
                type="text" 
                placeholder="Adicionar Repositorios" 
                value={newRepos}
                onChange={handleInputChange}/>
                
                <SubmitButton loading={loading ? 1 : 0} >
                    {loading ? (
                        <FaSpinner color="#fff" size={14} />
                    ) : (
                        <FaPlus color="#fff" size={14} />
                    )}
                    
                </SubmitButton>
            </Form>

            <List>
                {repositorios.map(repo => (
                    <li key={repo.name}>
                        <div>
                            <img src={repo.avatar} alt={repo.login}/>
                            <span>{repo.name}</span>
                        </div>
                        
                        <div>
                            <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                                <FaBars size={17} />
                            </Link>
                            <DeleteButton onClick={()=>handleDelete(repo.name)}>
                                <FaTrash size={17}/>
                            </DeleteButton>
                        </div>
                        
                    </li>
                ))}
            </List>

        </Container>      
    );
}